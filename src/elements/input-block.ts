//Блок input

import Block from '../elements/block';
import {validValue} from "../utilities/validation";

const inputBlockTemplate = `
	<div class="form-block {{classList}}">
		<label class="form-label" for="{{id}}">{{label}}</label>
		<div class="input-wrapper">
			<input class="form-control input-styles" data-required="{{required}}" data-error-text="{{errorText}}" 
			data-validation-type="{{validationType}}" id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">
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

export default class Input extends Block {
	//params: InputParams

	constructor(params: InputParams, template: string) {
		if (!template){
			template = inputBlockTemplate;
		}
		super(params, template);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {

		const insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner && insertedBlock.wrapper){
			const inner = insertedBlock.inner;
			const wrapper = insertedBlock.wrapper;

			const input = inner.querySelector('input');
			if (input){
				input.addEventListener('focus', function(){
					this.classList.add('focus-input');
				});
				input.addEventListener('blur', function(){
					this.classList.remove('focus-input');
					validValue(this);
				});
			}
			wrapper.appendChild(inner);
		}
		return insertedBlock;
	}
}