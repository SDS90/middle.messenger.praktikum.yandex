import './scss/init.scss';
import authorization from './pages/authorization';

function ready() {
	authorization();
}

document.addEventListener('DOMContentLoaded', ready);
