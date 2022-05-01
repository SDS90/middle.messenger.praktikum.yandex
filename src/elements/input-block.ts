//Блок input

import Block from '../elements/block';
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

export default class Input extends Block {
	//params: InputParams

	constructor(params: InputParams, template: string) {
		if (!template){
			template = inputBlockTemplate;
		}
		super(params, template);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {

		let insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner && insertedBlock.wrapper){
			let inner = insertedBlock.inner;
			let wrapper = insertedBlock.wrapper;

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
		return insertedBlock;
	}
}