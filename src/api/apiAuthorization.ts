//API авторизации

import APIBase from './apiBase';
import { AuthorizationSignInInterface, AuthorizationSignUpInterface } from '../interfaces/interfaces';

class APIAuthorization extends APIBase {
	constructor() {
		super('','/auth');
	}

	signIn(data: AuthorizationSignInInterface) {
		return this.post('/signin', {
			withCredentials: true,
			data: JSON.stringify(data),
		});
	}

	signUp(data: AuthorizationSignUpInterface) {
		return this.post('/signup', {
			data: JSON.stringify(data),
		});
	}

	checkAuth() {
		return this.get('/user', {
			withCredentials: true,
		});
	}

	signOut() {
		return this.post('/logout', {
			withCredentials: true,
		});
	}
}

export default new APIAuthorization();