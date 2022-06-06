//API чатов

import APIBase from './apiBase';
import { ChatCreateInterface, ChatAddUserInterface } from '../interfaces/interfaces';

class APIChats extends APIBase {
	constructor() {
		super('','/chats');
	}

	createChat(data: ChatCreateInterface) {
		return this.post('/', {
			data: JSON.stringify(data),
		});
	}

	getChats() {
		return this.get('/', {});
	}

	deleteChat(chatId: number) {
		return this.delete('/', {
			data: JSON.stringify({ chatId }),
		});
	}

	addUsersToChat(data: ChatAddUserInterface) {
		return this.put('/users', {
			data: JSON.stringify(data),
		});
	}

	deleteUsersFromChat(data: ChatAddUserInterface) {
		return this.delete('/users', {
			data: JSON.stringify(data),
		});
	}

	getChatToken(chatId: number) {
		return this.post(`/token/${chatId}`, {});
	}

	getChatUsers(chatId: number) {
		return this.get(`/${chatId}/users`, {});
	}
}

export default new APIChats();