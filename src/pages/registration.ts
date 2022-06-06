//Страница регистрации

import Form, { FormParams, onSubmitForm } from '../elements/form-block';
import Input, { InputParams } from '../elements/input-block';
import Button, { ButtonParams } from '../elements/button-block';

import AuthentificationController2 from '../controllers/authentificationController2';

import { router } from '../utilities/createRouter';

const documentTitle = "Регистрация";

const registrationForm: FormParams = {
	title: 'Регистрация'
};

const registrationInputs: InputParams[] = [
	{
		element: '.reg-form-fieldset',
		id: 'email',
		name: 'email',
		label: 'E-mail',
		value: '',
		type: 'text',
		required: true,
		errorText: 'Неверный формат email',
		validationType: 'email',
		classList: '',
		onBlur: (event) => {}
	},
	{
		element: '.reg-form-fieldset',
		id: 'login',
		name: 'login',
		label: 'Логин',
		value: '',
		type: 'text',
		required: true,
		errorText: 'Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов',
		validationType: 'login',
		classList: '',
		onBlur: (event) => {}
	},
	{
		element: '.reg-form-fieldset',
		id: 'secondName',
		name: 'second_name',
		label: 'Фамилия',
		value: '',
		type: 'text',
		required: true,
		errorText: 'Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса',
		validationType: 'name',
		classList: '',
		onBlur: (event) => {}
	},
	{
		element: '.reg-form-fieldset',
		id: 'firstName',
		name: 'first_name',
		label: 'Имя',
		value: '',
		type: 'text',
		required: true,
		errorText: 'Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса',
		validationType: 'name',
		classList: '',
		onBlur: (event) => {}
	},
	{
		element: '.reg-form-fieldset',
		id: 'phone',
		name: 'phone',
		label: 'Телефон',
		value: '',
		type: 'text',
		required: true,
		errorText: 'Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса',
		validationType: 'phone',
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
		errorText: 'Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру',
		validationType: 'password',
		classList: '',
		onBlur: (event) => {}
	},
	{
		element: '.reg-form-fieldset',
		id: 'repeatPassword',
		name: 'repeat_password',
		label: 'Повторите пароль',
		value: '',
		type: 'password',
		required: true,
		errorText: 'Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру',
		validationType: 'password',
		classList: '',
		onBlur: (event) => {}
	},
];

const registrationButtons: ButtonParams[] = [
	{
		element: '.buttons-wrapper',
		id: '',
		name: 'Зарегистрироваться',
		classes: 'add-link',
		onClick: (event) => {
			event.preventDefault();
			onSubmitForm('.reg-form', function(formData){
				AuthentificationController2.signUp(formData, function(error){
					document.getElementById("formInfoBlock").textContent = error;
				});
			});
		},
	},
	{
		element: '.buttons-wrapper',
		id: '',
		name: 'Назад',
		classes: 'reg-link',
		onClick: (event) => {
			event.preventDefault();
			router.back();
		},
	},
];

export default function(): void {

	document.title = documentTitle;

	new Form(registrationForm).insertBlock("#app", true);

	registrationInputs.forEach(function(input) {
		new Input(input).insertBlock(input.element);
	});

	registrationButtons.forEach(function(button) {
		new Button(button).insertBlock(button.element);
	});
}