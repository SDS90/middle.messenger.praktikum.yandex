//Блок input

import TemplateGen from '../utilities/TemplateGen';
import {validValue} from "../utilities/validation";

const inputBlockTemplate = `
	<div class="form-block {{classList}}">
		<label class="form-label" for="{{id}}">{{label}}</label>
		<div class="input-wrapper">
			<input class="form-control input-styles" data-required="{{required}}" data-error-text="{{errorText}}" data-validation-type="{{validationType}}" id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">
			<div class="error-text-block"></div>
		</div>
	</div>`;

export type InputParams = {
	element: string,
	id: string,
	label: string,
	value: string,
	type: string,
	name: string,
	required: boolean,
	errorText: string,
	validationType: string,
	classList: string,
}

export default class Input /*extends Block*/ {
	params: InputParams

	constructor(params: InputParams) {
		this.params = params;
		//super('button', props, props.className)
	}

	render(): string {
		return new TemplateGen(inputBlockTemplate).generateTemplate(this.params);
	}

	insertBlock(element: string, clean: boolean): void {
		const inner = new DOMParser().parseFromString(new TemplateGen(inputBlockTemplate).generateTemplate(this.params), "text/html").getElementsByTagName("div")[0]; //this.element;
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
		let input = inner.querySelector('input')
		input.addEventListener('focus', function(){
			input.classList.add('focus-input');
		});
		input.addEventListener('blur', function(){
			input.classList.remove('focus-input');
			validValue(input);
		});
		wrapper.appendChild(inner);
	}
}