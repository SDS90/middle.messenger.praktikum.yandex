//Блок ошибки

import TemplateGen from '../utilities/TemplateGen';

//<a class="warning-add warning-button" href="chat.html">Назад</a>-

const errorBlockTemplate = `
	<div class="warning-message-wrapper warning-on">
		<div class="warning-message-table">
			<div class="warning-message-block">
				<div class="loader none-block">//убрать none-block для показа</div>
				<div class="error-message warning-message">
					<div class="error-message-header">{{title}}</div>
					<span>{{errorText}}</span>
					<div class="warning-buttons-wrapper">
					</div>
				</div>
			</div>
		</div>
	</div>`;

export type ErrorParams = {
	title: string,
	errorText: string
};

export default class Error /*extends Block*/ {
	params: ErrorParams

	constructor(params: ErrorParams) {
		this.params = params;
		//super('button', props, props.className)
	}

	render(): string {
		return new TemplateGen(errorBlockTemplate).generateTemplate(this.params);
	}

	insertBlock(element: string, clean: boolean): void {
		const inner = new DOMParser().parseFromString(new TemplateGen(errorBlockTemplate).generateTemplate(this.params), "text/html").getElementsByTagName("div")[0]; //this.element;
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
		wrapper.appendChild(inner);
	}
}