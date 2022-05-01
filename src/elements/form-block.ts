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
					<div class="form-block info-block"></div>
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
		super(params, template);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {
		let insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner && insertedBlock.wrapper){
			insertedBlock.wrapper.appendChild(insertedBlock.inner);
		}
		return insertedBlock;
	}
}

export function onSubmitForm(selector: string, callback): void {
	const form: HTMLFormElement  = document.querySelector(selector);
	if (!form) return

	if (validForm(form)){
		const data: FormData = new FormData(form);
		console.log(...data);
		if (callback){
			callback();
		}
	}
	return;
}