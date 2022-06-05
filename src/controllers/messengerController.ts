import { MessengerConnectInterface, MessengerGetInterface } from '../interfaces/interfaces';
import { updateChatMessage } from '../pages/chat';

const hostWS = 'wss://ya-praktikum.tech/ws';

class MessengerController {
	ws: WebSocket;
	userId: number;
	chatId: number;
	token: string;
	ping: any;

	constructor() {
		this.onOpen = this.onOpen.bind(this);
		this.onMessage = this.onMessage.bind(this);
		this.onError = this.onError.bind(this);
		this.onClose = this.onClose.bind(this);
	}

	addEvents() {
		this.ws.addEventListener('open', this.onOpen);
		this.ws.addEventListener('message', this.onMessage);
		this.ws.addEventListener('error', this.onError);
		this.ws.addEventListener('close', this.onClose);
	}

	removeEvents() {
		this.ws.removeEventListener('open', this.onOpen);
		this.ws.removeEventListener('message', this.onMessage);
		this.ws.removeEventListener('error', this.onError);
		this.ws.removeEventListener('close', this.onClose);
	}

	onOpen() {
		this.getMessages({ offset: 0 });
	}

	onMessage(event: MessageEvent) {
		const data = JSON.parse(event.data);
		updateChatMessage(data);
	}

	onError(event: ErrorEvent) {
		console.error(event.message);
	}

	onClose(event: CloseEventInit) {
		this.removeEvents();
		if (event.wasClean) {
			console.log('Соединение закрыто чисто');
		} else {
			console.log('Проблемы с подключением');
		}
		if (event.code === 1006) {
			this.reconnection();
		}
	}

	reconnection() {
		this.connect({
			userId: this.userId,
			chatId: this.chatId,
			token: this.token,
		});
	}

	connect(options: MessengerConnectInterface) {
		this.userId = options.userId;
		this.chatId = options.chatId;
		this.token = options.token;
		this.ws = new WebSocket(hostWS + '/chats/' + options.userId + '/' + options.chatId + '/' + options.token);
		this.addEvents();
	}

	getMessages(options: MessengerGetInterface) {
		this.ws.send(JSON.stringify({
			content: options.offset.toString(),
			type: 'get old',
		}));
	}

	closeChat() {
		clearInterval(this.ping);
		this.ws.close();
		this.removeEvents();
	}

	sendMessage(message: string) {
		this.ws.send(JSON.stringify({
			content: message,
			type: 'message',
		}));
	}
}

export default new MessengerController();