//Контроллер чатов

import apiChats from '../api/apiChats';
import { router } from '../utilities/createRouter';
import { ChatCreateInterface, ChatAddUserInterface } from '../interfaces/interfaces';
import { showBodyMask, hideBodyMask } from '../utilities/effects';

function afterChatError(error: any, callback: any, redirect: string){
	console.error(error);
	if (error.response && callback){
		callback(error.response);
	} else {
		router.go(redirect);
	}
	hideBodyMask();
}

class ChatController {

	getChats(callback: any) {
		showBodyMask();
		return apiChats.getChats()
			.then((answer) => {
				callback(answer);
				hideBodyMask();
			})
			.catch((error) => {
				afterChatError(error, callback, '');
			});
	}

	createChat(data: ChatCreateInterface, callback: any) {
		showBodyMask();
		return apiChats.createChat(data)
			.then((answer) => {
				callback(answer.id);
				hideBodyMask();
			})
			.catch((error) => {
				afterChatError(error, callback, '');
			});
	}

	deleteChat(chatId: number, callback: any) {
		return apiChats.deleteChat(chatId)
			.then((answer) => {
				callback(answer, callback);
			})
			.catch((error) => {
				afterChatError(error, callback, '');
			});
	}

	getChatToken(chatId: number, callback: any) {
		return apiChats.getChatToken(chatId)
			.then((answer) => {
				callback(answer);
			})
			.catch((error) => {
				afterChatError(error, callback, '');
			});
	}

	getChatUsers(chatId: number, callback: any) {
		return apiChats.getChatUsers(chatId)
			.then((answer) => {
				callback(answer);
			})
			.catch((error) => {
				afterChatError(error, callback, '');
			});
	}

	addUsersToChat(data: ChatAddUserInterface, callback: any) {
		apiChats.addUsersToChat(data)
			.then((answer) => {
				callback(answer);
			})
			.catch((error) => {
				afterChatError(error, callback, '');
			});
	}

	deleteUserChat(data: ChatAddUserInterface, callback: any) {
		apiChats.deleteUsersFromChat(data)
			.then((answer) => {
				callback(answer);
			})
			.catch((error) => {
				afterChatError(error, callback, '');
			});
	}
}

export default new ChatController();