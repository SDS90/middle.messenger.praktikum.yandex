//Страница ошибки

import Button, { ButtonParams } from '../elements/button-block';
import Error, { ErrorParams } from '../elements/error-block';

const documentTitle = "Ошибка";

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
			errorBackFunction();
		},
	},
];

let errorBackFunction = function(): void{
	window.history.back();
}

export function showError(InnerErrorParams: ErrorParams, innerBackFunction: any, innerErrorButtons: ButtonParams[]): void {
	if (!InnerErrorParams){
		InnerErrorParams = errorBlock;
	}

	if (window.location.pathname == "/500"){
		InnerErrorParams.title = "Ошибка 500";
		InnerErrorParams.errorText = 'Внутренняя ошибка сервера';
	}

	if (!innerErrorButtons){
		innerErrorButtons = errorButtons;
	}
	
	if (innerBackFunction){
		errorBackFunction = innerBackFunction;
	}

	document.title = documentTitle + ': ' + InnerErrorParams.title;

	new Error(InnerErrorParams, '').insertBlock("#app", true);

	errorButtons.forEach(function(button) {
		new Button(button, '').insertBlock(button.element, false);
	});
}

export default function(): void {
	showError(errorBlock, errorBackFunction, errorButtons);	
}