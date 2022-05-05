import './scss/init.scss';
import authorization from './pages/authorization';
import { chat } from './pages/chat';
import registration from './pages/registration';
import profile from './pages/profile';
import error from './pages/error';

function ready() {
	switch(window.location.pathname) {
		case '/': {
			authorization();
			break;
		}
		case '/chat': {
			chat();
			break;
		}
		case '/registration': {
			registration();
			break;
		}
		case '/profile': {
			profile();
			break;
		}
		default:{
			error();
		}
	}
}

document.addEventListener('DOMContentLoaded', ready);
