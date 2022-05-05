//Страница профиля

import Form, { FormParams, onSubmitForm } from '../elements/form-block';
import Input, { InputParams } from '../elements/input-block';
import Button, { ButtonParams } from '../elements/button-block';
import ImageInput, { InputImageParams } from '../elements/image-input-block';
import { chat } from './chat';

const documentTitle = "Мой профиль";

const profileForm: FormParams = {
	title: ''
};

const profileImageInputs: InputImageParams[] = [
	{
		element: '.reg-form-fieldset',
		id: 'photoImageUpload',
		imageLink: '#',
		imageAlt: '',
		imageTitle: '',
	}
];

const profileInputs: InputParams[] = [
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
	},
];

const changePasswordButtons: ButtonParams[] = [
	{
		element: '.reg-form-fieldset',
		id: 'changePasswordButton',
		name: 'Изменить пароль',
		classes: 'reg-link',
		onClick: (event) => {
			event.preventDefault();
			const changePasswordButton = document.getElementById(event.target.getAttribute('id'));
			let showElement = changePasswordButton.nextElementSibling;

			while (showElement){
				showElement.classList.remove("none-block");
				showElement = showElement.nextElementSibling;
			}
		},
	},
];

const changePasswordInputs: InputParams[] = [
	{
		element: '.reg-form-fieldset',
		id: 'oldPassword',
		name: 'old_password',
		label: 'Старый пароль',
		value: '',
		type: 'password',
		required: true,
		errorText: 'Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру',
		validationType: 'password',
		classList: 'none-block',
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
		classList: 'none-block',
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
		classList: 'none-block',
	},
];

const profileButtons: ButtonParams[] = [
	{
		element: '.buttons-wrapper',
		id: '',
		name: 'Изменить данные',
		classes: 'add-link',
		onClick: (event) => {
			event.preventDefault();
			onSubmitForm('.reg-form', function(){
				chat();
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
			chat();
		},
	},
];

export default function(): void {

	document.title = documentTitle;
	window.history.pushState('', '', 'profile');

	new Form(profileForm).insertBlock("#app", true);

	profileImageInputs.forEach(function(imageInput) {
		new ImageInput(imageInput).insertBlock(imageInput.element);
	});

	profileInputs.forEach(function(input) {
		new Input(input).insertBlock(input.element);
	});

	changePasswordButtons.forEach(function(button) {
		new Button(button).insertBlock(button.element);
	});

	changePasswordInputs.forEach(function(input) {
		new Input(input).insertBlock(input.element);
	});

	profileButtons.forEach(function(button) {
		new Button(button).insertBlock(button.element);
	});
}