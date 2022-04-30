import './scss/init.scss';
import authorization from './pages/authorization';
import error from './pages/error';

function ready() {
	authorization();
}

document.addEventListener("DOMContentLoaded", ready);