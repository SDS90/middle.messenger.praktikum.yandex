//Страница авторизации

import Form, { FormParams, onSubmitForm } from '../elements/form-block';
import Input, { InputParams } from '../elements/input-block';
import Button, { ButtonParams } from '../elements/button-block';

import { router } from '../utilities/createRouter';

import AuthentificationController2 from '../controllers/authentificationController2';

const documentTitle = "Вход";

const authorizationForm: FormParams = {
	title: 'Вход',
};

const authorizationInputs: InputParams[] = [
	{
		element: '.reg-form-fieldset',
		id: 'login',
		name: 'login',
		label: 'Логин',
		value: '',
		type: 'text',
		required: true,
		errorText: 'Обязательное поле',
		validationType: '',
		classList: '',
		onBlur: () => {return;}
	},
	{
		element: '.reg-form-fieldset',
		id: 'password',
		name: 'password',
		label: 'Пароль',
		value: '',
		type: 'password',
		required: true,
		errorText: 'Обязательное поле',
		validationType: '',
		classList: '',
		onBlur: () => {return;}
	},
];

const authorizationButtons: ButtonParams[] = [
	{
		element: '.buttons-wrapper',
		id: 'authorizationButton',
		name: 'Авторизоваться',
		classes: 'add-link',
		onClick: (event) => {
			event.preventDefault();
			onSubmitForm('.reg-form', function(formData: any){
				AuthentificationController2.signIn(formData, function(error: string){
					const formInfoBlock = document.getElementById("formInfoBlock");
					if (formInfoBlock){
						formInfoBlock.textContent = error;
					}
				});
			});			
		},
	},
	{
		element: '.buttons-wrapper',
		id: 'registerPageButton',
		name: 'Зарегистрироваться',
		classes: 'reg-link',
		onClick: (event) => {
			event.preventDefault();
			router.go('/sign-up');
		},
	},
];

export default function(): void {

	document.title = documentTitle;

	new Form(authorizationForm, '').insertBlock("#app", true, false);

	authorizationInputs.forEach(function(input) {
		new Input(input, '').insertBlock(input.element, false);
	});

	authorizationButtons.forEach(function(button) {
		new Button(button, '').insertBlock(button.element, false);
	});	
}