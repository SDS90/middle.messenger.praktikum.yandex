//Контроллер чатов

import apiChats from '../api/apiChats';
import { router } from '../utilities/createRouter';
import { ChatCreateInterface, ChatAddUserInterface } from '../interfaces/interfaces';
import { showBodyMask, hideBodyMask } from '../utilities/effects';

function afterChatError(error, callback, redirect: string){
	console.error(error);
	if (error.response && callback){
		callback(error.response);
	} else {
		router.go(redirect);
	}
	hideBodyMask();
}

class ChatController {

	getChats(callback) {
		showBodyMask();
		return apiChats.getChats()
		.then((answer) => {
			callback(answer);
			hideBodyMask();
		})
		.catch((error) => {
			afterChatError(error);
		});
	}

	createChat(data: ChatCreateInterface, callback) {
		showBodyMask();
		return apiChats.createChat(data)
		.then((answer) => {
			callback(answer.id);
			hideBodyMask();
		})
		.catch((error) => {
			afterChatError(error);
		})
	}

	deleteChat(chatId: number, callback) {
		return apiChats.deleteChat(chatId)
		.then((answer) => {
			callback(answer, callback);
		})
		.catch((error) => {
			afterChatError(error, callback);
		});
	}

	getChatToken(chatId: number, callback) {
		return apiChats.getChatToken(chatId)
		.then((answer) => {
			callback(answer);
		})
		.catch((error) => {
			afterChatError(error, callback);
		});
	}

	getChatUsers(chatId: number, callback) {
		return apiChats.getChatUsers(chatId)
		.then((answer) => {
			callback(answer);
		})
		.catch((error) => {
			afterChatError(error, callback);
		});
	}

	addUsersToChat(data: ChatAddUserInterface, callback) {
		apiChats.addUsersToChat(data)
		.then((answer) => {
			callback(answer);
		})
		.catch((error) => {
			afterChatError(error, callback);
		});
	}

	deleteUserChat(data: ChatAddUserInterface, callback) {
		apiChats.deleteUsersFromChat(data)
		.then((answer) => {
			callback(answer);
		})
		.catch((error) => {
			afterChatError(error, callback);
		});
	}
}

export default new ChatController();