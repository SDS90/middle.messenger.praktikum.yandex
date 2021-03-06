//Блок textarea

import Block from '../elements/block';

const textareaBlockTemplate = `
	<div class="form-block">
		<textarea id="{{id}}"  data-required="{{required}}" name="{{name}}" value="{{value}}"></textarea>
	</div>
	`;

export type TextareaParams = {
	element: string,
	id: string,
	name: string,
	value: string,
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

		const insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner){
			const textarea = insertedBlock.inner.querySelector('textarea');
			if (textarea){
				textarea.addEventListener('focus', function(){
					this.classList.add('focus-input');
				});
				textarea.addEventListener('blur', function(){
					this.classList.remove('focus-input');
				});
			}
		}
		return insertedBlock;
	}
}