//Страница профиля

import Form, { FormParams, onSubmitForm } from '../elements/form-block';
import Input, { InputParams } from '../elements/input-block';
import Button, { ButtonParams } from '../elements/button-block';
import ImageInput, { InputImageParams } from '../elements/image-input-block';

import { router } from '../utilities/createRouter';

import AuthentificationController2 from '../controllers/AuthentificationController2';
import UsersController from '../controllers/UsersController';


const resourcesLink = "https://ya-praktikum.tech/api/v2/resources/";

const documentTitle = "Мой профиль";

const profileForm: FormParams = {
	title: ''
};

const profileImageInputs: InputImageParams[] = [
	{
		element: '.reg-form-fieldset',
		id: 'photoImageUpload',
		imageId: 'userAvatar',
		name: 'avatar',
		imageLink: '#',
		imageAlt: '',
		imageTitle: '',
		onChanged: (event) => {
			event.preventDefault();
			const form: HTMLFormElement = document.querySelector(".reg-form");
			if (!form) return;

			const data: FormData = new FormData(form);
			console.log(data)
			changeAvatar(data, function(){

			});
		}
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
			let showElement = changePasswordButton.parentElement.nextElementSibling;
			while (showElement){
				showElement.children[0].classList.remove("none-block");
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
		classList: 'none-block',
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
		classList: 'none-block',
		onBlur: (event) => {}
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
			onSubmitForm('.reg-form', function(formData){
				formData.display_name = formData.first_name;
				//Изменение данных
				UsersController.updateUserProfile(formData, function(answer){
					if (answer){
						setChangeUserDataError(answer);
					} else {
						//Если менялся пароль - также отправляем изменение пароля
						if (formData.password && formData.old_password){
							changePassword(formData, redirectToChat);
						} else {
							redirectToChat();
						}
					}
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
			window.history.back();
		},
	},
];

//Перенаправление в чаты
function redirectToChat(){
	router.go('/messenger');
}

//Изменение аватара
function changeAvatar(formData, callback){
	UsersController.updateUserPhoto(formData, function(answer){
		if (answer && answer.avatar){
			setUserAvatar(answer.avatar)
		}							
	});
}

//Изменение пароля
function changePassword(formData, callback){
	UsersController.updateUserPassword({
		oldPassword: formData.old_password,
		newPassword: formData.password
	}, function(answer){
		if (answer){
			setChangeUserDataError(answer);
		} else {
			callback(answer);
		}								
	});
}

//Сообщение об ошибке
function setChangeUserDataError(error){
	document.getElementById("formInfoBlock").textContent = error;
	getUserData();
}

//Установить аватар
function setUserAvatar(url){
	document.getElementById("userAvatar").setAttribute("src", resourcesLink + url);
}

//Получение данных пользователя
function getUserData(){
	AuthentificationController2.checkAuth(function(answer){
		for (let key in answer){
			let element = document.querySelector(".reg-form [name=" + key + "]");
			if (element){
				element.setAttribute("value", answer[key]);
			}
			if ((key === "avatar") && (answer[key]) ){
				setUserAvatar(answer[key]);
			}
		}
	})
}

export default function(): void {

	document.title = documentTitle;

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

	getUserData();
}