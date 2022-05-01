//Блок чата (общий)

import Block from '../elements/block';

const chatWrapperTemplate = `
	<div class="chat-form-page clear">
		<div class="chat-list-column">
			<div class="profile-block clear"></div>
			<!--<form class="search-wrapper">
				<input class="input-styles search-input" type="text" placeholder="Поиск" name="search">
			</form> -->
			<div class="chat-list"></div>
		</div>
		<div class="chat-full-block">
			<div class="chat-full-name">{{chatUserName}}</div>
			<div class="select-chat-wrapper" id="selectChat">
				<div class="select-chat-cell">
					<span>Выберите чат</span>
				</div>
			</div>
			<div class="chat-wrapper"></div>
		</div>
	</div>
	`;

export type ChatParams = {
	chatUserName: string
};

export default class Chat extends Block {

	constructor(params: ChatParams, template: string) {
		if (!template){
			template = chatWrapperTemplate;
		}
		super(params, template);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {
		let insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner && insertedBlock.wrapper){
			insertedBlock.wrapper.appendChild(insertedBlock.inner);
		}
		return insertedBlock;
	}
}