//Блок input

import TemplateGen from '../utilities/TemplateGen';
import {validForm} from "../utilities/validation";

const formBlockTemplate = `
	<div class="reg-form-page">
		<div class="reg-form-wrapper">
			<h2>{{title}}</h2>
			<form class="reg-form">
				<fieldset>
					<div class="reg-form-fieldset"></div>
					<div class="form-block info-block"></div>
					<div class="form-block buttons-wrapper"></div>
				</fieldset>
			</form>
		</div>
	</div>`;

export type FormParams = {
	title: string
};

export default class Form /*extends Block*/ {
	params: FormParams

	constructor(params: FormParams) {
		this.params = params;
		//super('button', props, props.className)
	}

	render(): string {
		return new TemplateGen(formBlockTemplate).generateTemplate(this.params);
	}

	insertBlock(element: string, clean: boolean): void {
		const inner = new DOMParser().parseFromString(new TemplateGen(formBlockTemplate).generateTemplate(this.params), "text/html").getElementsByTagName("div")[0]; //this.element;
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

export function onSubmitForm(): void {
	const form: HTMLFormElement  = document.querySelector('.reg-form');
	if (!form) return

	if (validForm(form)){
		const data: FormData = new FormData(form);
		console.log(...data);
	}
	return;
}