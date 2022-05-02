//Блок чата (пользователь)

import Block from '../elements/block';

const chatBlockTemplate = `
	<div class="chat-block" id="{{id}}" data-user-name="{{name}}">
		<div class="chat-photo-wrapper">
			<img class="chat-photo" src="{{photoLink}}" alt="{{photoAlt}}">
		</div>
		<div class="chat-name">{{name}}</div>
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
	photoLink: string,
	photoAlt: string,
	name: string,
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
		let insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner && insertedBlock.wrapper){
			let inner = insertedBlock.inner;
			let wrapper = insertedBlock.wrapper;
			inner.addEventListener('click', this.props.onClick);
			wrapper.appendChild(inner);
		}
		return insertedBlock;
	}
}