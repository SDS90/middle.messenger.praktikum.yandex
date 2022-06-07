//API запросов данных пользователей

import APIBase from './apiBase';
import { UserSearchInterface, UserUpdateInterface, UserUpdatePasswordInterface } from '../interfaces/interfaces';

class APIUser extends APIBase {
	constructor() {
		super('','/user');
	}

	getUserData(userId: number) {
		return this.get(`/${userId}/`, {});
	}

	searchUsers (data: UserSearchInterface) {
		return this.post('/search', {
			data: JSON.stringify(data),
		});
	}

	updateUserProfile(data: UserUpdateInterface) {
		return this.put('/profile', {
			data: JSON.stringify(data),
		});
	}

	updateUserPassword(data: UserUpdatePasswordInterface) {
		return this.put('/password', {
			data: JSON.stringify(data),
		});
	}

	updateUserPhoto(data: FormData) {
		return this.put('/profile/avatar', {
			data
		});
	}

}

export default new APIUser();