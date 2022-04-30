//Страница авторизации

import TemplateGen from '../utilities/TemplateGen';
import Form, { FormParams, onSubmitForm }  from '../elements/form-block';
import Input, { InputParams }  from '../elements/input-block';
import Button, { ButtonParams }  from '../elements/button-block';
import registration from './registration';

//import profile from './profile';

const authorizationForm: FormParams = {
	title: 'Вход',
}

const authorizationInputs: InputParams[] = [
	{
		element: '.reg-form-fieldset',
		id: 'login',
		name: 'login',
		label: 'Логин',
		value: '',
		type: 'text',
		required: true,
		errorText: '',
		validationType: '',
		classList: '',
	},
	{
		element: '.reg-form-fieldset',
		id: 'password',
		name: 'password',
		label: 'Пароль',
		value: '',
		type: 'password',
		required: true,
		errorText: '',
		validationType: '',
		classList: '',
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
			onSubmitForm();
		},
	},
	{
		element: '.buttons-wrapper',
		id: '',
		name: 'Зарегистрироваться',
		classes: 'reg-link',
		onClick: (event) => {
			event.preventDefault();
			registration();
			//profile();
		},
	},
]

export default function(): void {

	new Form(authorizationForm).insertBlock("#app", true);

	authorizationInputs.forEach(function(input) {
		new Input(input).insertBlock(input.element);
	});

	authorizationButtons.forEach(function(button) {
		new Button(button).insertBlock(button.element);
	});
}