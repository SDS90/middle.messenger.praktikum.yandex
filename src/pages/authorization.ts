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
		onBlur: (event) => {}
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
		onBlur: (event) => {}
	},
];

const authorizationButtons: ButtonParams[] = [
	{
		element: '.buttons-wrapper',
		id: '',
		name: 'Авторизоваться',
		classes: 'add-link',
		onClick: (event) => {
			event.preventDefault();
			onSubmitForm('.reg-form', function(formData){
				AuthentificationController2.signIn(formData, function(error){
					document.getElementById("formInfoBlock").textContent = error;
				});
			});			
		},
	},
	{
		element: '.buttons-wrapper',
		id: '',
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

	new Form(authorizationForm).insertBlock("#app", true);

	authorizationInputs.forEach(function(input) {
		new Input(input, '').insertBlock(input.element);
	});

	authorizationButtons.forEach(function(button) {
		new Button(button).insertBlock(button.element);
	});	
}