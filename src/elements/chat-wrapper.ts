//Блок чата (общий)

import Block from '../elements/block';

const chatWrapperTemplate = `
	<div class="chat-form-page clear">
		<div class="chat-list-column" id="chatList">
			<div class="profile-block clear"></div>
			<ul class="menu-list none-block" id="menuBlock"></ul>
			<!--<form class="search-wrapper">
				<input class="input-styles search-input" type="text" placeholder="Поиск" name="search">
			</form> -->
			<div class="chat-list" id="chatListBlock"></div>
		</div>
		<div class="chat-full-block" id="chatFullBlock">
			<div class="chat-full-name"></div>
			<div class="select-chat-wrapper" id="selectChat">
				<div class="select-chat-cell">
					<span>Выберите чат</span>
				</div>
			</div>
			<div class="chat-wrapper" id="chatWrapper"><div class="chat" id="chat"></div></div>
		</div>
	</div>
	`;

export type ChatParams = Record<string, unknown>;

export default class Chat extends Block {

	constructor(params: ChatParams, template: string) {
		if (!template){
			template = chatWrapperTemplate;
		}
		super(params, template);
	}
}