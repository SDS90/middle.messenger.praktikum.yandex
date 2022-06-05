//Контроллер данных пользователей

import apiUser from '../api/apiUser';
import { router } from '../utilities/createRouter';
import { UserSearchInterface, UserUpdateInterface , UserUpdatePasswordInterface } from '../interfaces/interfaces';
import { showBodyMask, hideBodyMask } from '../utilities/effects';

function afterUserAnswer(answer, callback, redirect: string){
	callback(answer);
	hideBodyMask();
}

function afterUserError(error, callback, redirect: string){
	console.error(error);
	if (error.response && callback){
		callback(error.response);
	} else {
		router.go(redirect);
	}
	hideBodyMask();
}

class UsersController {

	searchUsers (data: UserSearchInterface, callback) {
		return apiUser.searchUsers(data)
		.then((users) => {
			callback(users);
		})
		.catch((error) => {
			afterChatError(error);
		});
	}

	getUserData(userId: number, callback) {
		return apiUser.getUserData(userId)
		.then((answer) => {
			callback(answer);
		})
		.catch((error) => {
			afterUserError(error, callback);
		});
	}

	updateUserProfile(data: UserUpdateInterface, callback) {
		showBodyMask();
		return apiUser.updateUserProfile(data)
		.then((user) => {
			afterUserAnswer(user, callback);
		})
		.catch((error) => {
			afterUserError(error);
		});
	}

	updateUserPassword(data: UserUpdatePasswordInterface, callback) {
		showBodyMask();
		return apiUser.updateUserPassword(data)
		.then((user) => {
			afterUserAnswer(user, callback);
		})
		.catch((error) => {
			afterUserError(error);
		});
	}

	updateUserPhoto(data: FormData, callback) {
		showBodyMask();
		return apiUser.updateUserPhoto(data)
		.then((res) => {
			afterUserAnswer(res, callback);
		})
		.catch((error) => {
			afterUserError(error);
		});
	}
}

export default new UsersController();