//Страница ошибки

import TemplateGen from '../utilities/TemplateGen';
import Button, { ButtonParams }  from '../elements/button-block';
import Error, { ErrorParams }  from '../elements/error-block';
import authorization from './authorization';

//import profile from './profile';

const errorBlock: ErrorParams = {
	title: 'Ошибка 404',
	errorText: 'Страница не найдена'
};

const errorButtons: ButtonParams[] = [
	{
		element: '.warning-buttons-wrapper',
		id: '',
		name: 'Назад',
		classes: 'warning-add warning-button',
		onClick: (event) => {
			event.preventDefault();
			authorization(); //Пока на страницу авторизации
		},
	},
];

export default function(): void {

	new Error(errorBlock).insertBlock("#app", true);

	errorButtons.forEach(function(button) {
		new Button(button).insertBlock(button.element);
	});
}