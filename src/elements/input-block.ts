//Блок input

import Block from '../elements/block';
import {validValue} from "../utilities/validation";

const inputBlockTemplate = `
	<div class="form-block {{classList}}">
		<label class="form-label" for="{{id}}">{{label}}</label>
		<div class="input-wrapper wrapper-element">
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
	onBlur: (event: Event) => void
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
		const $this = this;
		if (insertedBlock.inner){
			const input = insertedBlock.inner.querySelector('input');
			if (input){
				input.addEventListener('focus', function(){
					this.classList.add('focus-input');
				});
				input.addEventListener('blur', function(event){
					this.classList.remove('focus-input');
					$this.props.onBlur(event);
					validValue(this);
				});
			}			
		}
		return insertedBlock;
	}
}