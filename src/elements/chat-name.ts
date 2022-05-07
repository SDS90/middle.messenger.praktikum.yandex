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
}