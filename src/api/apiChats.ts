//API чатов

import APIBase from './apiBase';
import { ChatCreateInterface, ChatAddUserInterface } from '../interfaces/interfaces';

class APIChats extends APIBase {
	constructor() {
		super('','/chats');
	}

	createChat(data: ChatCreateInterface) {
		return this.post('/', {
			withCredentials: true,
			data: JSON.stringify(data),
		});
	}

	getChats() {
		return this.get('/', {
			withCredentials: true,
		});
	}

	deleteChat(chatId: number) {
		return this.delete('/', {
			withCredentials: true,
			data: JSON.stringify({ chatId }),
		});
	}

	addUsersToChat(data: ChatAddUserInterface) {
		return this.put('/users', {
			withCredentials: true,
			data: JSON.stringify(data),
		});
	}

	deleteUsersFromChat(data: ChatAddUserInterface) {
		return this.delete('/users', {
			withCredentials: true,
			data: JSON.stringify(data),
		});
	}

	getChatToken(chatId: number) {
		return this.post(`/token/${chatId}`, {
			withCredentials: true,
		});
	}

	getChatUsers(chatId: number) {
		return this.get(`/${chatId}/users`, {
			withCredentials: true,
		});
	}
}

export default new APIChats();