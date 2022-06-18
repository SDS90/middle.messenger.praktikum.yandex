//Основное

import './scss/init.scss';
import authorization from './pages/authorization';
import { chat } from './pages/chat';
import registration from './pages/registration';
import profile from './pages/profile';
import error from './pages/error';

import AuthentificationController2 from './controllers/authentificationController2';

import { router } from './utilities/createRouter';

router
	.use('/', authorization)
	.use('/authorization', authorization)
	.use('/messenger', chat)
	.use('/settings', profile)
	.use('/sign-up', registration)
	.use('*', error)
	.start();

AuthentificationController2.checkAuth(function(answer: any){
	const pathArray = window.location.pathname.split("/");
	if (answer.id && (pathArray[1] == "")){
		router.go('/messenger');
	}
});