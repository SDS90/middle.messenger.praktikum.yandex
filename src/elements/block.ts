//Блоки - общее
import TemplateGen from '../utilities/TemplateGen';
import {EventBus} from '../utilities/eventbus';

export type PropsType = Record<string, any>;

type BlockMetaData = {
	tagName: string,
	props: Record<string, unknown>
}

export default class Block {
	static EVENTS = {
		INIT: "init",
		FLOW_CDM: "flow:component-did-mount",
		FLOW_CDU: "flow:component-did-update",
		FLOW_RENDER: "flow:render"
	};

	noTagName: boolean;
	template: string;
	props: PropsType;
	eventBus: () => EventBus;

	_element: HTMLElement | null = null;
	_meta: BlockMetaData;

	constructor(props: Record<string, unknown>, template: string, noTagName: boolean, tagName = 'div') {
		this.template = template;
		this.noTagName = noTagName;
		const eventBus = new EventBus();
		this._meta = {
			tagName,
			props
		};

		this.props = this._makePropsProxy(props);

		this.eventBus = () => eventBus;

		this._registerEvents(eventBus);
		eventBus.emit(Block.EVENTS.INIT);
	}

	_registerEvents(eventBus: any) {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	_createResources(): void {
		const { tagName } = this._meta;
		this._element = this._createDocumentElement(tagName);
		this._element;
	}

	init(): void {
		this._createResources();
		this.eventBus().emit(Block.EVENTS.FLOW_CDM);
	}

	_componentDidMount(): void {
		this.componentDidMount();
		this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
	}

	componentDidMount(): void {
		return;
	}

	dispatchComponentDidMoun() {return;}

	_componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>): void {
		const response = this.componentDidUpdate(oldProps, newProps);
		if (!response) {
			return;
		}
		this._render();
	}

	componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>): boolean {
		return oldProps !== newProps;
	}

	setProps = (nextProps: any) => {
		if (!nextProps) {
			return;
		}
		Object.assign(this.props, nextProps);
	};

	get element(): HTMLElement | null {
		return this._element;
	}

	_render() {
		const block = this.render();
		if (this._element){
			this._element.innerHTML = block;
		}
	}

	render(): string {
		return new TemplateGen(this.template).generateTemplate(this.props);
	}

	getContent(): HTMLElement | null {
		return this.element;
	}

	_makePropsProxy(props: Record<string, unknown>): Record<string, unknown> {
		const self = this;

		return new Proxy(props, {
			get(target, property: any) {
				if (typeof target[property] == 'function'){
					const targetProperty: any = target[property];
					if (targetProperty){
						return targetProperty.bind(target);
					}
				} else {
					return target[property];
				}
			},
			set(target, property: any, value) {
				target[property] = value;
				self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
				return true;
			},
			deleteProperty() {
				throw new Error("Нет доступа");
			}
		});
	}

	_createDocumentElement(tagName: any): HTMLElement {
		return document.createElement(tagName);
	}

	show(): void {
		const element = this.getContent();
		if (element){
			element.style.display = "block";
		}		
	}

	hide(): void {
		const element = this.getContent();
		if (element){
			element.style.display = "none";
		}
	}

	destroy() {
		const element = this._element;
		if (element){
			element.remove();
		}
		this.onDestroy();
	}

	onDestroy() {
		return;
	}

	insertBlock(element: string, clean: boolean, prepend: boolean): Record<string, HTMLElement | Element | null> {
		let inner = this.getContent() as Element;
		const wrapper = document.querySelector(element);
		if (!inner || !wrapper) return {};
		if (this.noTagName){
			inner = inner.children[0];
		}
		for (const el of wrapper.querySelectorAll('[id=""]')) {
			el.removeAttribute('id');
		}
		if (clean){
			wrapper.innerHTML = "";
		}
		if (prepend){
			wrapper.prepend(inner);
		} else {
			wrapper.appendChild(inner);
		}
		return {
			inner: inner,
			wrapper: wrapper
		};
	}
}