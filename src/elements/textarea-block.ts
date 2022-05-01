//Блок textarea

import Block from '../elements/block';
import {validValue} from "../utilities/validation";

const textareaBlockTemplate = `
	<div class="form-block">
		<textarea id="{{id}}"  data-required="{{required}}" name="{{name}}"></textarea>
	</div>
	`;

export type TextareaParams = {
	element: string,
	id: string,
	name: string,
	required: boolean,
}

export default class Textarea extends Block {
	//params: InputParams

	constructor(params: TextareaParams, template: string) {
		if (!template){
			template = textareaBlockTemplate;
		}
		super(params, template);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {

		let insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner && insertedBlock.wrapper){
			let inner = insertedBlock.inner;
			let wrapper = insertedBlock.wrapper;

			let textarea = inner.querySelector('textarea')
			textarea.addEventListener('focus', function(){
				textarea.classList.add('focus-input');
			});
			textarea.addEventListener('blur', function(){
				textarea.classList.remove('focus-input');
				//validValue(input);
			});
			wrapper.appendChild(inner);
		}
		return insertedBlock;
	}
}