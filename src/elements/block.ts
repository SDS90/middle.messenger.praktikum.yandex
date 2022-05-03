//Блоки - общее
import TemplateGen from '../utilities/TemplateGen';
import {EventBus} from '../utilities/eventbus';

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

	template: string;
	props: Record<string, unknown>;
	eventBus: () => EventBus

	_element: HTMLElement  = null
	_meta: BlockMetaData

	constructor(params: Record<string, unknown>, template: string, tagName = 'div') {
		this.template = template;
	    const eventBus = new EventBus();
	    this._meta  = {
	    	tagName,
	    	params
	    };

	    this.props = this._makePropsProxy(params);

	    this.eventBus = () => eventBus;

	    this._registerEvents(eventBus);
	    eventBus.emit(Block.EVENTS.INIT);
	}

	_registerEvents(eventBus) {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	_createResources(): void {
		const { tagName } = this._meta;
		this._element = this._createDocumentElement(tagName);
		this._element
	}

	init(): void {
		this._createResources();
		this.eventBus().emit(Block.EVENTS.FLOW_CDM);
	}

	_componentDidMount() {
		this.componentDidMount();
		this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
	}

	componentDidMount() {

	}

	dispatchComponentDidMoun() {}

	_componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>): void {
		const response = this.componentDidUpdate(oldProps, newProps);
		if (!response) {
			return;
	    }
		this._render();
	}

	componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>,): boolean {
		let oldPropsString = JSON.stringify(oldProps);
		let newPropsString = JSON.stringify(newProps);
		if (oldPropsString == newProps){
			return false;
		}		
		return true;
	}

	setProps = nextProps => {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	};

	get element(): HTMLElement {
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

	getContent(): HTMLElement {
		return this.element;
	}

	_makePropsProxy(props: Record<string, unknown>): Record<string, unknown> {
		const self = this;

		return new Proxy(props, {
			get(target, property) {
				if (typeof target[property] == 'function'){
					return target[property].bind(target);
				} else {
					return target[property];
				}  
			},
			set(target, property, value) {
				target[property] = value;
				self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
				return true;
			},
			deleteProperty(target, property) {
				throw new Error("Нет доступа");
			}
		});
	}

	_createDocumentElement(tagName): HTMLElement {
		return document.createElement(tagName);
	}

	show(): void {
		let element = this.getContent();
		if (element){
			element.style.display = "block";
		}		
	}

	hide(): void {
		let element = this.getContent();
		if (element){
			element.style.display = "none";
		}
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {
		let inner = this.getContent(); //new DOMParser().parseFromString(new TemplateGen(this.template).generateTemplate(this.props), "text/html").getElementsByTagName("body")[0].childNodes[0];
		if (inner.children[0]){
			inner = inner.children[0];
		}
		const wrapper = document.querySelector(element);
		if (!inner || !wrapper) return {};
		for (let key in this.props){
			if (!this.props[key]){
				if(inner && inner.hasAttribute(key)){
					inner.removeAttribute(key);
				}
			}
		}
		if (clean){
			wrapper.innerHTML = "";
		}
		return {
			inner: inner,
			wrapper: wrapper
		}
	}
}