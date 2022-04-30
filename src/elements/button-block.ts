//Блок кнопки

import TemplateGen from '../utilities/TemplateGen';

const buttonBlockTemplate = `<button id="{{id}}" class="button-link {{classes}}">{{name}}</button>`;

export type ButtonParams = {
	element: string,
	id: string,
	classes: string,
	name: string,
	onClick: (event: Event) => void
}

export default class Button /*extends Block*/ {
	params: ButtonParams

	constructor(params: ButtonParams) {
		this.params = params;
		//super('button', props, props.className)
	}

	render(): string {
		return new TemplateGen(buttonBlockTemplate).generateTemplate(this.params);
	}

	insertBlock(element: string, clean: boolean): void {
		const inner = new DOMParser().parseFromString(new TemplateGen(buttonBlockTemplate).generateTemplate(this.params), "text/html").getElementsByTagName("button")[0]; //this.element;
		const wrapper = document.querySelector(element);
		if (!inner || !wrapper) return;
		for (let key in this.params){
			if (!this.params[key]){
				inner.removeAttribute(key);
			}
		}
		if (clean){
			wrapper.innerHTML = "";
		}
		inner.addEventListener('click', this.params.onClick);
		wrapper.appendChild(inner);
	}
}