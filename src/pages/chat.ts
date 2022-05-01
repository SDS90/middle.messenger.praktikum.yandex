//Страница чата

import TemplateGen from '../utilities/TemplateGen';
import Form, { FormParams, onSubmitForm }  from '../elements/form-block';
import Input, { InputParams }  from '../elements/input-block';
import Textarea, { TextareaParams }  from '../elements/textarea-block';
import Button, { ButtonParams }  from '../elements/button-block';
import Link, { LinkParams }  from '../elements/link-block';
import Chat, { ChatParams }  from '../elements/chat-wrapper';
import ChatBlock, { ChatBlockParams }  from '../elements/chat-block';
import MessageBlock, { MessageBlockParams }  from '../elements/message-block';
import registration from './registration';
import authorization from './authorization';
import error from './error';
import profile from './profile';

const chatParams: ChatParams = {
	chatUserName: 'Андрей Андрейченков',
}

const sendForm: FormParams = {
	title: ''
};

const sendButton: ButtonParams = {
	element: '.chat-send-box',
	id: '',
	name: ' >',
	classes: 'chat-send-button',
	onClick: (event) => {
		event.preventDefault();
		onSubmitForm('.chat-send-box', function(){
			document.getElementById("chatSendBox").value = "";
		});
	},
}

const addFileButton: ButtonParams = {
	element: '.chat-send-box',
	id: 'addFileToMessage',
	name: '📎',
	classes: 'add-file-button',
	onClick: (event) => {},
}

const chatProfileLinks: LinkParams[] = [
	{
		element: '.profile-block',
		id: '',
		classes: 'create-chat-link',
		name: 'Создать чат',
		href: '#',
		onClick: (event) => {
			event.preventDefault();
			error();		
		},
	},
	{
		element: '.profile-block',
		id: '',
		classes: 'profile-link',
		name: 'Мой профиль &gt;',
		href: '#',
		onClick: (event) => {
			event.preventDefault();
			profile();		
		},
	},
	{
		element: '.chat-full-name',
		id: '',
		classes: 'chat-back-button',
		name: 'Выход',
		href: '#',
		onClick: (event) => {
			event.preventDefault();
			authorization();		
		},
	},
];

const chatList: ChatBlockParams[] = [
	{
		element: '.chat-list',
		id: '1',
		photoLink: '',
		name: 'Андрей Андрейченков',
		photoAlt: '',
		fromMeHideClass: 'none-block',
		text: 'Круто!',
		time: '15.04.2022 15:31',
		newMessageHideClass: '',
		newMessageCount: 10,
		onClick: (event) => {
			event.preventDefault();
			onChatClick(event);
		},
	},
	{
		element: '.chat-list',
		id: '2',
		photoLink: '',
		name: 'Михалыч',
		photoAlt: '',
		fromMeHideClass: '',
		text: 'Отлично!',
		time: '15.04.2022 15:31',
		newMessageHideClass: 'none-block',
		newMessageCount: 0,
		onClick: (event) => {
			event.preventDefault();
			onChatClick(event);
		},
	},
];

const messageList: MessageBlockParams[] = [
	{
		element: '.chat-wrapper',
		toMeClass: 'message-to-me',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
		time: '15.04.2022 12:37',
	},
	{
		element: '.chat-wrapper',
		toMeClass: 'message-to-me',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
		time: '15.04.2022 12:37',
	},
	{
		element: '.chat-wrapper',
		toMeClass: '',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
		time: '15.04.2022 12:37',
	},
];

const textareaParams: TextareaParams = {
	element: '.chat-send-box',
	id: 'chatSendBox',
	name: 'message',
	required: true,
}

function onChatClick(event){
	if (event.target.classList.contains("delete-chat-button")){
		console.log("удаление")
	} else {
		console.log("открытие чата")
	}
}

export default function(): void {

	new Chat(chatParams).insertBlock("#app", true);

	chatProfileLinks.forEach(function(link) {
		new Link(link, '').insertBlock(link.element);
	});

	chatList.forEach(function(chat){
		new ChatBlock(chat, '').insertBlock(chat.element);
	});

	messageList.forEach(function(message){
		new MessageBlock(message, '').insertBlock(message.element);
	});

	new Form(sendForm, '<form class="chat-send-box"></form>').insertBlock(".chat-full-block");
	new Button(sendButton).insertBlock(".chat-send-box");
	new Button(addFileButton, '<label for="{{id}}" class="button-link {{classes}}">{{name}}<input class="load-image" hidden accept="image/*" type="file" id="{{id}}"></label>').insertBlock(".chat-send-box");

	new Textarea(textareaParams).insertBlock(".chat-send-box");
}