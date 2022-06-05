//Интерфейсы

export interface AuthorizationSignInInterface {
	login: string
	password: string
}

export interface AuthorizationSignUpInterface {
	first_name: string
	second_name: string
	login: string
	email: string
	phone: string
	password: string
}

export interface ChatCreateInterface {
	title: string
}

export interface ChatAddUserInterface {
	users: number []
	chatId: number
}

export interface UserSearchInterface {
	login: string
}

export interface UserUpdatePasswordInterface {
	oldPassword: string,
	newPassword: string
}

export interface UserUpdateInterface {
	first_name: string
	second_name: string
	login: string
	email: string
	phone: string
	display_name: string
}

export interface MessengerConnectInterface {
	userId: number
	chatId: number
	token: string
}

export interface MessengerGetInterface {
	offset: number
}