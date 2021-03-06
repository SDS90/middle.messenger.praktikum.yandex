//Блок чата (пользователь)

import Block from '../elements/block';

const chatBlockTemplate = `
	<div class="chat-block" id="{{id}}" data-user-name="{{title}}">
		<div class="chat-photo-wrapper">
			<img class="chat-photo" src="{{avatar}}" alt="">
		</div>
		<div class="chat-name">{{title}}</div>
		<div class="chat-preview-text">
			<strong class="{{fromMeHideClass}}">Вы: </strong>
			<span>{{text}}</span>
		</div>
		<div class="chat-time">{{time}}</div>
		<div class="new-messages-info {{newMessageHideClass}}">{{newMessageCount}}</div>
		<a class="delete-chat-button" href="#">X</a>
	</div>`;

export type ChatBlockParams = {
	element: string,
	id: string,
	avatar: string,
	photoAlt: string,
	title: string,
	fromMeHideClass: string,
	text: string,
	time: string,
	newMessageHideClass: string,
	newMessageCount: number,
	onClick: (this, event: Event) => void
};

export default class ChatBlock extends Block {

	constructor(params: ChatBlockParams, template: string) {
		if (!template){
			template = chatBlockTemplate;
		}
		super(params, template);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {
		const insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner){
			insertedBlock.inner.addEventListener('click', this.props.onClick);
		}
		return insertedBlock;
	}
}