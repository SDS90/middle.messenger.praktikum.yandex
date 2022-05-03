//Страница чата

import TemplateGen from '../utilities/TemplateGen';
import Form, { FormParams, onSubmitForm }  from '../elements/form-block';
import Input, { InputParams }  from '../elements/input-block';
import Textarea, { TextareaParams }  from '../elements/textarea-block';
import Button, { ButtonParams }  from '../elements/button-block';
import AddFileButton, { AddFileButtonParams }  from '../elements/add-file-block';
import Link, { LinkParams }  from '../elements/link-block';
import MenuLink, { MenuLinkParams }  from '../elements/menu-link-block';
import Chat, { ChatParams }  from '../elements/chat-wrapper';
import ChatBlock, { ChatBlockParams }  from '../elements/chat-block';
import ChatName, { ChatNameData }  from '../elements/chat-name';
import FilesName, { FilesNameData }  from '../elements/files-name';
import MessageBlock, { MessageBlockParams }  from '../elements/message-block';
import Modal, { ModalParams }  from '../elements/modal-block';
import registration from './registration';
import authorization from './authorization';
import error, {showError} from './error';
import profile from './profile';

const documentTitle: string = "Чат";

const chatParams: ChatParams = {};
let chatName: ChatName;
const chatNameParams: ChatNameData = {
	element: '.chat-full-name',
	name: '',
};

const sendForm: FormParams = {
	title: ''
};

let textArea: Textarea;
let filesName: FilesName;
const filesNameParams: FilesNameData = {
	element: '.chat-send-box',
	name: '',
};
const sendButton: ButtonParams = {
	element: '.chat-send-box',
	id: '',
	name: ' >',
	classes: 'chat-send-button',
	onClick: (event) => {
		event.preventDefault();
		onSubmitForm('.chat-send-box', function(){
			textArea.setProps({ value: "" });
			addFile.setProps({ value: "" });
		});
	},
}

let addFile: FilesName;
const addFileButton: AddFileButtonParams = {
	element: '.chat-send-box',
	id: 'addFileToMessage',
	name: '📎',
	classes: 'add-file-button',
	value: '',
	onClick: (event) => {},
	onChange: (event) => {
		if (event.target.value){
			let valueArray: [] = event.target.value.split("\\");
			filesName.setProps({ name: valueArray[valueArray.length - 1] });
		}
	},
}

const menuLinks: MenuLinkParams[] = [
	{
		element: '.menu-list',
		id: '',
		classes: 'create-chat-link',
		name: 'Создать чат',
		href: '#',
		onClick: (event) => {
			event.preventDefault();
			error(); //в дальнейшем использовать showError с передачей параметров ошибки
		},
	},
	{
		element: '.menu-list',
		id: '',
		classes: 'create-chat-link',
		name: 'Мой профиль',
		href: '#',
		onClick: (event) => {
			event.preventDefault();
			profile();		
		},
	},
	{
		element: '.menu-list',
		id: '',
		classes: 'create-chat-link',
		name: 'Выход',
		href: '#',
		onClick: (event) => {
			event.preventDefault();
			authorization();		
		},
	},
];

const chatProfileLinks: LinkParams[] = [
	{
		element: '.profile-block',
		id: '',
		classes: 'create-chat-link',
		name: 'Меню',
		href: '#',
		onClick: (event) => {
			event.preventDefault();
			document.getElementById('menuBlock').classList.toggle('none-block');
		},
	},
	{
		element: '.chat-full-name',
		id: '',
		classes: 'chat-back-button',
		name: 'Назад',
		href: '#',
		onClick: (event) => {
			event.preventDefault();
			document.getElementById("selectChat").classList.add("none-block");
			document.getElementById("chatList").classList.remove('chat-full-show');
			document.getElementById("chatFullBlock").classList.remove('chat-full-show');
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
	value: '',
	required: true,
}

const deleteWarningMessage: ModalParams = {
	element: '#app',
	id: 'deleteWarningMessage',
	MessageText: 'Вы действительно хотите удалить этот чат?',
}

const deleteButtons: ButtonParams[] = [
	{
		element: '.warning-buttons-wrapper',
		id: '',
		name: 'Да',
		classes: 'warning-add warning-button',
		onClick: (event) => {
			event.preventDefault();
			//Вызывать удаление
			document.getElementById("deleteWarningMessage").remove();
		},
	},
	{
		element: '.warning-buttons-wrapper',
		id: '',
		name: 'Нет',
		classes: 'warning-back warning-button',
		onClick: (event) => {
			event.preventDefault();
			document.getElementById("deleteWarningMessage").remove();
		},
	},
]

function onChatClick(event){
	const chatBlock: HTMLElement = event.target.closest(".chat-block");
	const chatWrapper : HTMLElement = document.getElementById("chatWrapper");
	if (!chatBlock || !chatWrapper) return;

	if (event.target.classList.contains("delete-chat-button")){
		new Modal(deleteWarningMessage).insertBlock("#app");
		deleteButtons.forEach(function(button) {
			new Button(button, '').insertBlock(button.element);
		});
	} else {
		document.getElementById("chatList").classList.toggle('chat-full-show');
		document.getElementById('menuBlock').classList.add('none-block');
		document.getElementById("selectChat").classList.add("none-block");
		document.getElementById("chatFullBlock").classList.toggle('chat-full-show');

		chatWrapper.innerHTML = "";
		messageList.forEach(function(message){
			new MessageBlock(message, '').insertBlock(message.element);
		});
		
		chatWrapper.scrollTop = chatWrapper.scrollHeight;
		if (chatName){
			chatName.setProps({ name: chatBlock.getAttribute("data-user-name") });
		}
	}
}

export default function(): void {

	document.title = documentTitle;

	new Chat(chatParams).insertBlock("#app", true);
	
	chatName = new ChatName(chatNameParams);
	chatName.insertBlock('.chat-full-name');

	chatProfileLinks.forEach(function(link) {
		new Link(link, '').insertBlock(link.element);
	});

	menuLinks.forEach(function(link) {
		new MenuLink(link, '').insertBlock(link.element);
	});

	chatList.forEach(function(chat){
		new ChatBlock(chat, '').insertBlock(chat.element);
	});
	
	new Form(sendForm, '<form class="chat-send-box"></form>').insertBlock(".chat-full-block");
	new Button(sendButton).insertBlock(".chat-send-box");

	addFile = new AddFileButton(addFileButton, '');
	addFile.insertBlock(".chat-send-box");

	textArea = new Textarea(textareaParams);
	textArea.insertBlock(".chat-send-box");

	filesName = new FilesName(filesNameParams);
	filesName.insertBlock(".chat-send-box");
}