//Блок кнопки добавления файла

import Block from '../elements/block';
import Button from '../elements/button-block';

const addFileBlockTemplate = `<label for="{{id}}" title="Прикрепить файл" class="button-link {{classes}}">{{name}}<input class="load-image" hidden accept="image/*" type="file" id="{{id}}" value="{{value}}"></label>`;

export type AddFileButtonParams = {
	element: string,
	id: string,
	classes: string,
	name: string,
	value: string,
	onClick: (event: Event) => void,
	onChange: (event: Event) => void,
}

export default class AddFileButton extends Button {
	constructor(params: AddFileButtonParams, template: string) {
		if (!template){
			template = addFileBlockTemplate;
		}
		super(params, template);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {
		let insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner){
			let inner = insertedBlock.inner;
			inner.querySelector('input').addEventListener('change', this.props.onChange);
		}
		return insertedBlock;
	}
}