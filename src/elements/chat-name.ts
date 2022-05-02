//Имя чата

import Block from '../elements/block';

const chatNameTemplate = `{{name}}`;

export type ChatNameData = {
	element: string,
	name: string,
};

export default class ChatName extends Block {

	constructor(params: ChatNameData, template: string) {
		if (!template){
			template = chatNameTemplate;
		}
		super(params, template);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {
		let insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner && insertedBlock.wrapper){
			let inner = insertedBlock.inner;
			let wrapper = insertedBlock.wrapper;
			wrapper.appendChild(inner);
		}
		return insertedBlock;
	}
}