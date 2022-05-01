//Страница ошибки

import TemplateGen from '../utilities/TemplateGen';
import Button, { ButtonParams }  from '../elements/button-block';
import Error, { ErrorParams }  from '../elements/error-block';
import authorization from './authorization';

const documentTitle: string = "Ошибка"

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

export function showError(ErrorParams: ErrorParams, errorButtons: errorButtons): void {
	document.title = documentTitle;

	new Error(errorBlock).insertBlock("#app", true);

	errorButtons.forEach(function(button) {
		new Button(button).insertBlock(button.element);
	});
}

export default function(): void {
	showError(errorBlock, errorButtons);	
}