//Страница чата

import Form, { FormParams, onSubmitForm } from '../elements/form-block';
import Textarea, { TextareaParams } from '../elements/textarea-block';
import Button, { ButtonParams } from '../elements/button-block';
import Select, { SelectParams } from '../elements/select-block';
import Option from '../elements/option-block';
import Link, { LinkParams } from '../elements/link-block';
import MenuLink, { MenuLinkParams } from '../elements/menu-link-block';
import Chat, { ChatParams } from '../elements/chat-wrapper';
import ChatBlock from '../elements/chat-block';
import ChatName, { ChatNameData } from '../elements/chat-name';
import FilesName, { FilesNameData } from '../elements/files-name';
import MessageBlock from '../elements/message-block';
import Modal, { ModalParams } from '../elements/modal-block';
import Input, { InputParams } from '../elements/input-block';

import AuthentificationController2 from '../controllers/authentificationController2';
import ChatController from '../controllers/chatController';
import UsersController from '../controllers/usersController';
import MessengerController from '../controllers/messengerController';

import { router } from '../utilities/createRouter';


const documentTitle: string = "Чат";

let chatUserId: number = 0;
let chatMessageLastId: number = 0;

const chatParams: ChatParams = {};
let chatName: ChatName;
let chatNameParams: ChatNameData = {
	element: '.chat-full-name',
	name: '',
	id: 0
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
		onSubmitForm('.chat-send-box', function(answer: any){
			MessengerController.sendMessage(answer.message);
			reloadChatSender();
		});
	},
};

//Меню слева
const menuLinks: MenuLinkParams[] = [
	{
		element: '.menu-list',
		id: '',
		classes: 'create-chat-link',
		wrapClasses: '',
		name: 'Создать чат',
		href: '#',
		onClick: (event) => {
			event.preventDefault();
			createChatClick();
		},
	},
	{
		element: '.menu-list',
		id: '',
		classes: 'create-chat-link',
		wrapClasses: '',
		name: 'Мой профиль',
		href: '/settings',
		onClick: (event) => {
			event.preventDefault();
			router.go('/settings');	
		},
	},
	{
		element: '.menu-list',
		id: 'addUserToChat',
		classes: 'create-chat-link',
		wrapClasses: 'none-block',
		name: 'Добавить пользователя',
		href: '#',
		onClick: (event) => {
			event.preventDefault();
			addUserToChatClick();
		},
	},
	{
		element: '.menu-list',
		id: 'deleteUserFromChat',
		classes: 'create-chat-link',
		wrapClasses: 'none-block',
		name: 'Удалить пользователя',
		href: '#',
		onClick: (event) => {
			event.preventDefault();
			deleteUserFromChatClick();
		},
	},
	{
		element: '.menu-list',
		id: '',
		classes: 'create-chat-link',
		wrapClasses: '',
		name: 'Выход',
		href: '/',
		onClick: (event) => {
			event.preventDefault();
			AuthentificationController2.signOut();		
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
			let menuBlock = document.getElementById('menuBlock');
			if (menuBlock){
				menuBlock.classList.toggle('none-block');
			}
		},
	},
	{
		element: '.chat-full-name',
		id: '',
		classes: 'chat-back-button',
		name: 'Закрыть',
		href: '#',
		onClick: (event) => {
			event.preventDefault();
			closeChat();
		},
	},
];

const textareaParams: TextareaParams = {
	element: '.chat-send-box',
	id: 'chatSendBox',
	name: 'message',
	value: '',
	required: true,
};

//Форма удаления чата

let deleteWarningMessage: ModalParams = {
	element: '#app',
	id: 'deleteWarningMessage',
	chatId: 0,
	MessageText: 'Вы действительно хотите удалить этот чат?',
};

const deleteButtons: ButtonParams[] = [
	{
		element: '.warning-buttons-wrapper',
		id: '',
		name: 'Да',
		classes: 'warning-add warning-button',
		onClick: (event) => {
			event.preventDefault();
			//Вызывать удаление		
			ChatController.deleteChat(deleteWarningMessage.chatId, function(){
				reloadChatList();
				closeModal("deleteWarningMessage");
			});
			
		},
	},
	{
		element: '.warning-buttons-wrapper',
		id: '',
		name: 'Нет',
		classes: 'warning-back warning-button',
		onClick: (event) => {
			event.preventDefault();
			closeModal("deleteWarningMessage");
		},
	},
];

//Форма создания чата

const createChatModal: ModalParams = {
	element: '#app',
	chatId: 0,
	id: 'createChatModal',
	MessageText: '',
};

const createChatForm: FormParams = {
	title: 'Создать чат',
};

const createChatInputs: InputParams[] = [
	{
		element: '#createChatModal .reg-form-fieldset',
		id: 'chatName',
		name: 'title',
		label: 'Название',
		value: '',
		type: 'text',
		required: true,
		errorText: 'Обязательное поле',
		validationType: '',
		classList: '',
		onBlur: () => {}
	},
];

const createChatButtons: ButtonParams[] = [
	{
		element: '#createChatModal .buttons-wrapper',
		id: '',
		name: 'Создать',
		classes: 'add-link',
		onClick: (event) => {
			event.preventDefault();
			onSubmitForm('#createChatModal .reg-form', function(formData: any){
				ChatController.createChat(formData, function(){
					reloadChatList();
					closeModal("createChatModal");
				});
			});			
		},
	},
	{
		element: '#createChatModal .buttons-wrapper',
		id: '',
		name: 'Отмена',
		classes: 'reg-link',
		onClick: (event) => {
			event.preventDefault();
			closeModal("createChatModal");
		},
	},
];


//Форма добавления пользователя в чат

const addUserToChatModal: ModalParams = {
	element: '#app',
	id: 'addUserToChatModal',
	chatId: 0,
	MessageText: '',
};

const addUserToChatForm: FormParams = {
	title: 'Добавить пользователя',
};

const addUserToChatInputs: InputParams[] = [
	{
		element: '#addUserToChatModal .reg-form-fieldset',
		id: 'chatName',
		name: 'title',
		label: 'Поиск',
		value: '',
		type: 'text',
		required: false,
		errorText: '',
		validationType: '',
		classList: '',
		onBlur: (event) => {
			if (event.target && (event.target as HTMLInputElement).value){
				UsersController.searchUsers({login: (event.target as HTMLInputElement).value}, function(answer: any){
					let selectUser = document.getElementById("selectUser");
					if (selectUser){
						selectUser.textContent = "";
					}
					for (let i = 0; i < answer.length; i++){
						answer[i].name = answer[i].first_name + " " + answer[i].second_name;
						answer[i].value = answer[i].id;
						new Option(answer[i], '').insertBlock("#selectUser", false, false);
					}						
				});
			}
		}
	},
];

const addUserToChatSelect: SelectParams[] = [
	{
		element: '#addUserToChatModal .reg-form-fieldset',
		id: 'selectUser',
		name: 'user',
		label: 'Пользователь',
		required: true,
		errorText: 'Пользователь не выбран',
		classList: '',
	},
];

const addUserToChatButtons: ButtonParams[] = [
	{
		element: '#addUserToChatModal .buttons-wrapper',
		id: '',
		name: 'Добавить',
		classes: 'add-link',
		onClick: (event) => {
			event.preventDefault();
			onSubmitForm('#addUserToChatModal .reg-form', function(formData: any){
				const deleteUserData = {
					users: [formData.user],
					chatId: parseInt(chatName.props.id)
				}
				ChatController.addUsersToChat(deleteUserData, function(){
					reloadChatList();
					closeModal("addUserToChatModal");
				});
			});			
		},
	},
	{
		element: '#addUserToChatModal .buttons-wrapper',
		id: '',
		name: 'Отмена',
		classes: 'reg-link',
		onClick: (event) => {
			event.preventDefault();
			closeModal("addUserToChatModal");
		},
	},
];


//Форма удаления пользователя из чата

const deleteUserFromChatModal: ModalParams = {
	element: '#app',
	id: 'deleteUserFromChatModal',
	chatId: 0,
	MessageText: '',
};

const deleteUserFromChatForm: FormParams = {
	title: 'Удалить пользователя',
};

const deleteUserFromChatSelect: SelectParams[] = [
	{
		element: '#deleteUserFromChatModal .reg-form-fieldset',
		id: 'selectUser',
		name: 'user',
		label: 'Пользователь',
		required: true,
		errorText: 'Пользователь не выбран',
		classList: '',
	},
];

const deleteUserFromChatButtons: ButtonParams[] = [
	{
		element: '#deleteUserFromChatModal .buttons-wrapper',
		id: '',
		name: 'Удалить',
		classes: 'add-link',
		onClick: (event) => {
			event.preventDefault();
			onSubmitForm('#deleteUserFromChatModal .reg-form', function(formData: any){
				const deleteUserData = {
					users: [formData.user],
					chatId: parseInt(chatName.props.id)
				}
				ChatController.deleteUserChat(deleteUserData, function(){
					reloadChatList();
					closeModal("deleteUserFromChatModal");
				});
			});			
		},
	},
	{
		element: '#deleteUserFromChatModal .buttons-wrapper',
		id: '',
		name: 'Отмена',
		classes: 'reg-link',
		onClick: (event) => {
			event.preventDefault();
			closeModal("deleteUserFromChatModal");
		},
	},
];


//Открываем форму создания чата
function createChatClick(){
	new Modal(createChatModal, '').insertBlock("#app", false, false);
	new Form(createChatForm, '').insertBlock("#createChatModal", true, false);

	createChatInputs.forEach(function(input) {
		new Input(input, '').insertBlock(input.element, false);
	});

	createChatButtons.forEach(function(button) {
		new Button(button, '').insertBlock(button.element, false);
	});
}

//Открываем форму добавления пользователя в чат
function addUserToChatClick(){
	new Modal(addUserToChatModal, '').insertBlock("#app", false, false);
	new Form(addUserToChatForm, '').insertBlock("#addUserToChatModal", true, false);

	if (chatName && chatName.props){

		addUserToChatInputs.forEach(function(input) {
			new Input(input, '').insertBlock(input.element, false);
		});

		addUserToChatSelect.forEach(function(select) {
			new Select(select, '').insertBlock(select.element, false);
		});
	}
	

	addUserToChatButtons.forEach(function(button) {
		new Button(button, '').insertBlock(button.element, false);
	});
}

//Открываем форму удаления пользователя из чата
function deleteUserFromChatClick(){
	
	new Modal(deleteUserFromChatModal, '').insertBlock("#app");
	new Form(deleteUserFromChatForm, '').insertBlock("#deleteUserFromChatModal", true);

	if (chatName && chatName.props){
		let chatNameId: number = parseInt(chatName.props.id);

		deleteUserFromChatSelect.forEach(function(select) {
			new Select(select, '').insertBlock(select.element);
		});

		//Получаем список пользователей чата
		ChatController.getChatUsers(chatNameId, function(answer: any){
			for (let i = 0; i < answer.length; i++){
				answer[i].name = answer[i].first_name + " " + answer[i].second_name;
				answer[i].value = answer[i].id;
				new Option(answer[i], '').insertBlock("#selectUser");
			}
		});
	}	

	deleteUserFromChatButtons.forEach(function(button) {
		new Button(button, '').insertBlock(button.element, false);
	});
}

//Кликаем по чату - открытие чата, либо удаление
function onChatClick(event: any){
	const chatBlock: HTMLElement = event.target.closest(".chat-block");
	const chatWrapper = document.getElementById("chatWrapper");

	if (!chatBlock || !chatWrapper) return;

	if (event.target.classList.contains("delete-chat-button") && chatBlock.id){
		deleteWarningMessage.chatId = parseInt(chatBlock.id);

		new Modal(deleteWarningMessage, '').insertBlock("#app");
		deleteButtons.forEach(function(button) {
			new Button(button, '').insertBlock(button.element, false);
		});
	} else {
		let menuBlock = document.getElementById("menuBlock");
		if (menuBlock){
			menuBlock.classList.add("none-block");
		}

		let selectChat = document.getElementById("selectChat");
		if (selectChat){
			selectChat.classList.add("none-block");
		}
		let chatList = document.getElementById("chatList");
		if (chatList){
			chatList.classList.toggle("chat-full-show");
		}
		let chatFullBlock = document.getElementById("chatFullBlock");
		if (chatFullBlock){
			chatFullBlock.classList.toggle("chat-full-show");
		}
		let deleteUserFromChat = document.getElementById("deleteUserFromChat");
		if (deleteUserFromChat){
			deleteUserFromChat.classList.remove("none-block");
		}
		let addUserToChat = document.getElementById("addUserToChat");
		if (addUserToChat){
			addUserToChat.classList.remove("none-block");
		}

		let chat = document.getElementById("chat");
		if (chat){
			chat.textContent = "";
		}

		chatMessageLastId = 0;
		//Получим токен чата
		ChatController.getChatToken(parseInt(chatBlock.id), function(answer: any){
			if (answer && answer.token && chatUserId){
				MessengerController.connect({
					userId: chatUserId,
					chatId: parseInt(chatBlock.id),
					token: answer.token,
				});
			}
		});
		reloadChatSender();
		scrollChatToBottom();
		if (chatName){
			chatName.setProps({ name: chatBlock.getAttribute("data-user-name"), id: chatBlock.id });
		}
	}
}

//Очистка сообщения после отправки
function reloadChatSender(){
	textArea.setProps({ value: "" });
	filesName.setProps({ name: "" });
}

//Закрытие модального окна
function closeModal(modalId: any){
	let modalDoc = document.getElementById(modalId);
	if (modalDoc){
		modalDoc.remove();
	}
}

//Обновляем список чатов
function reloadChatList(){
	let chatListBlock = document.getElementById("chatListBlock");
	if (chatListBlock){
		chatListBlock.textContent = "";
	}

	ChatController.getChats(function(answer: any){
		for (let i = 0; i < answer.length; i++){
			answer[i].element = '.chat-list';
			answer[i].photoAlt = '';
			answer[i].newMessageCount = 0;
			answer[i].fromMeHideClass = 'none-block';
			answer[i].newMessageHideClass = 'none-block';
			answer[i].onClick = function(event: any){
				event.preventDefault();
				onChatClick(event);
			}

			new ChatBlock(answer[i], '').insertBlock(answer[i].element, false);
		}
	});
}

//Закрываем чат
function closeChat(){
	if (chatName){
		chatName.setProps({ name: '', id: 0 });
	}
	let selectChat = document.getElementById("selectChat");
	if (selectChat){
		selectChat.classList.remove("none-block");
	}
	let chatList = document.getElementById("chatList");
	if (chatList){
		chatList.classList.remove("chat-full-show");
	}
	let chatFullBlock = document.getElementById("chatFullBlock");
	if (chatFullBlock){
		chatFullBlock.classList.remove("chat-full-show");
	}
	let deleteUserFromChat = document.getElementById("deleteUserFromChat");
	if (deleteUserFromChat){
		deleteUserFromChat.classList.add("none-block");
	}
	let addUserToChat = document.getElementById("addUserToChat");
	if (addUserToChat){
		addUserToChat.classList.add("none-block");
	}
	MessengerController.closeChat();
}

//Добавление сообщения в чат
function updateMessageToChat(message: any, prepend: boolean){
	if (message.id > chatMessageLastId){
		let toMeClass = '';
		if (message.user_id == chatUserId){
			toMeClass = 'message-to-me';
		}
		chatMessageLastId = message.id;
		new MessageBlock({
			element: '#chat',
			text: message.content,
			time: formatDate(new Date(message.time)),
			toMeClass: toMeClass
		}, '').insertBlock('#chat', false, prepend);
		scrollChatToBottom();
	}	
}

//Прокрутка в конец чата
function scrollChatToBottom(){
	const chatWrapper = document.getElementById("chatWrapper");
	if (chatWrapper){
		chatWrapper.scrollTop = chatWrapper.scrollHeight;
	}
}

//Форматирование даты
function formatDate(date: any) {
	let dd = date.getDate();
	if (dd < 10) {
		dd = '0' + dd;
	}

	let mm = date.getMonth() + 1;
	if (mm < 10){
		mm = '0' + mm;
	} 
	return dd + '.' + mm + '.' + date.getFullYear() + ' ' + 
	date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

//Добавляем сообщения в чат
export function updateChatMessage(messages: any){
	if (Array.isArray(messages)) {
		if (messages.length) {
			messages.forEach(function(message){
				updateMessageToChat(message, true);
			});
		}
	}
	if ((typeof messages === 'object') && (messages.type === 'message')) {
		updateMessageToChat(messages, false)
	}
}

export function chat(): void {

	document.title = documentTitle;

	new Chat(chatParams, '').insertBlock("#app", true);
	
	chatName = new ChatName(chatNameParams, '');
	chatName.insertBlock('.chat-full-name');

	chatProfileLinks.forEach(function(link) {
		new Link(link, '').insertBlock(link.element, false);
	});

	menuLinks.forEach(function(link) {
		new MenuLink(link, '').insertBlock(link.element, false);
	});

	AuthentificationController2.checkAuth(function(answer: any){
		if (answer.id){
			chatUserId = answer.id;
		}
	})

	reloadChatList()
	
	new Form(sendForm, '<form class="chat-send-box"></form>').insertBlock(".chat-full-block");
	new Button(sendButton, '').insertBlock(".chat-send-box", false);

	textArea = new Textarea(textareaParams, '');
	textArea.insertBlock(".chat-send-box", false);

	filesName = new FilesName(filesNameParams, '');
	filesName.insertBlock(".chat-send-box", false);
}