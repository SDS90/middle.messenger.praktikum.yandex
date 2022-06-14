//Контроллер данных пользователей

import apiUser from '../api/apiUser';
import { UserSearchInterface, UserUpdateInterface , UserUpdatePasswordInterface } from '../interfaces/interfaces';
import { showBodyMask, hideBodyMask } from '../utilities/effects';

function afterUserAnswer(answer: any, callback: any){
	callback(answer);
	hideBodyMask();
}

function afterUserError(error: any, callback: any){
	console.error(error);
	if (error.response && callback){
		callback(error.response);
	}
	hideBodyMask();
}

class UsersController {

	searchUsers (data: UserSearchInterface, callback: any) {
		return apiUser.searchUsers(data)
		.then((users) => {
			callback(users);
		})
		.catch((error) => {
			afterUserError(error, function(){});
		});
	}

	getUserData(userId: number, callback: any) {
		return apiUser.getUserData(userId)
		.then((answer) => {
			callback(answer);
		})
		.catch((error) => {
			afterUserError(error, callback);
		});
	}

	updateUserProfile(data: UserUpdateInterface, callback: any) {
		showBodyMask();
		return apiUser.updateUserProfile(data)
		.then((user) => {
			afterUserAnswer(user, callback);
		})
		.catch((error) => {
			afterUserError(error, function(){});
		});
	}

	updateUserPassword(data: UserUpdatePasswordInterface, callback: any) {
		showBodyMask();
		return apiUser.updateUserPassword(data)
		.then((user) => {
			afterUserAnswer(user, callback);
		})
		.catch((error) => {
			afterUserError(error, function(){});
		});
	}

	updateUserPhoto(data: FormData, callback: any) {
		showBodyMask();
		return apiUser.updateUserPhoto(data)
		.then((res) => {
			afterUserAnswer(res, callback);
		})
		.catch((error) => {
			afterUserError(error, function(){});
		});
	}
}

export default new UsersController();