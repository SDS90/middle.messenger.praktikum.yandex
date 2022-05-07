//Блок сообщения

import Block from '../elements/block';

const messageBlockTemplate = `
	<div class="chat-message-wrapper {{toMeClass}}">
		<div class="chat-message-block">
			<div class="chat-message-time">{{time}}</div>
			<div>
				{{text}}
			</div>
		</div>
	</div>`;

export type MessageBlockParams = {
	element: string,
	toMeClass: string, //message-to-me
	text: string,
	time: string,
};

export default class MessageBlock extends Block {

	constructor(params: MessageBlockParams, template: string) {
		if (!template){
			template = messageBlockTemplate;
		}
		super(params, template);
	}

}