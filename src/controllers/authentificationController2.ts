import apiAuthorization from '../api/apiAuthorization';
import { router } from '../utilities/createRouter';
import { AuthorizationSignInInterface, AuthorizationSignUpInterface } from '../interfaces/interfaces';
import { showBodyMask, hideBodyMask } from '../utilities/effects';

function afterAuthorizationAnswer(answer: any, callback: any, redirect: string){
	if (answer.error && callback){
		if (answer.reason){
			callback(answer.reason);
		} else {
			callback(answer.error);
		}				
	} else {
		if (redirect){
			router.go(redirect);
		}		
	}
	hideBodyMask();
}

function afterAuthorizationError(error: any, callback: any, redirect: string){
	if (error.response && callback){
		callback(error.response);
	} else {
		router.go(redirect);
	}
	hideBodyMask();
}

class AuthentificationController2 {
	signIn(user: AuthorizationSignInInterface, callback: any) {
		showBodyMask();
		return apiAuthorization.signIn(user)
		.then((answer) => {
			afterAuthorizationAnswer(answer, callback, '/messenger');
		})
		.catch((error) => {
			console.error(error);
			afterAuthorizationError(error, callback, '/500');
		});
	}

	signUp(user: AuthorizationSignUpInterface, callback: any) {
		showBodyMask();
		return apiAuthorization.signUp(user)
		.then((answer) => {
			afterAuthorizationAnswer(answer, callback, '/messenger');
		})
		.catch((error) => {
			console.error(error);
			afterAuthorizationError(error, callback, '/500');
		});
	}

	signOut() {
		showBodyMask();
		return apiAuthorization.signOut()
		.then(() => {
			hideBodyMask();
			router.go('/');
		});
	}

	checkAuth(callback: any) {
		return apiAuthorization.checkAuth()
		.then((answer: any) => {
			callback(answer);	
		})
		.catch((error) => {
			console.error(error);
			hideBodyMask();
			router.go('/');
		});
	}
}

export default new AuthentificationController2();