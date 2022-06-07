//API авторизации

import APIBase from './apiBase';
import { AuthorizationSignInInterface, AuthorizationSignUpInterface } from '../interfaces/interfaces';

class APIAuthorization extends APIBase {
	constructor() {
		super('','/auth');
	}

	signIn(data: AuthorizationSignInInterface) {
		return this.post('/signin', {
			data: JSON.stringify(data),
		});
	}

	signUp(data: AuthorizationSignUpInterface) {
		return this.post('/signup', {
			data: JSON.stringify(data),
		});
	}

	checkAuth() {
		return this.get('/user', {});
	}

	signOut() {
		return this.post('/logout', {});
	}
}

export default new APIAuthorization();