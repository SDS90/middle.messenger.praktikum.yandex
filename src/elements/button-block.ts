//Блок кнопки

import Block from '../elements/block';

const buttonBlockTemplate = `<button id="{{id}}" class="button-link {{classes}}">{{name}}</button>`;

export type ButtonParams = {
	element: string,
	id: string,
	classes: string,
	name: string,
	onClick: (event: Event) => void
}

export default class Button extends Block {

	constructor(params: ButtonParams, template: string) {
		if (!template){
			template = buttonBlockTemplate;
		}
		super(params, template, false);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement | Element | null> {
		const insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner){
			insertedBlock.inner.addEventListener('click', this.props.onClick);
			insertedBlock.inner.addEventListener('touchstart', this.props.onClick);			
		}
		return insertedBlock;
	}
}