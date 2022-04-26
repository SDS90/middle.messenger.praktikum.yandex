import {sum} from './modules/sum';

const root = document.querySelector('#root');
root.innerHTML = "<div>" + sum(6, -1).toString() + "</div>";