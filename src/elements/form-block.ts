//Блок input

import Block from '../elements/block';
import {validForm} from "../utilities/validation";

const formBlockTemplate = `
	<div class="reg-form-page">
		<div class="reg-form-wrapper">
			<h2>{{title}}</h2>
			<form class="reg-form">
				<fieldset>
					<div class="reg-form-fieldset"></div>
					<div class="form-block info-block" id="formInfoBlock"></div>
					<div class="form-block buttons-wrapper"></div>
				</fieldset>
			</form>
		</div>
	</div>`;

export type FormParams = {
	title: string
};

export default class Form extends Block {

	constructor(params: FormParams, template: string) {
		if (!template){
			template = formBlockTemplate;
		}
		super(params, template, false);
	}
}

export function onSubmitForm(selector: string, callback: any): void {
	const form: HTMLFormElement | null = document.querySelector(selector);
	if (!form) return;

	if (validForm(form)){
		const data: FormData = new FormData(form);
		if (callback){
			let obj : Record<any, any> = {};
			for (let key of data.keys()) {
				obj[key] = data.get(key);
			}
			callback(obj);
		}
	}
	return;
}