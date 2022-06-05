//Блок ссылки в меню

import Link from '../elements/link-block';

const menuLinkBlockTemplate = `<li id="{{id}}" class="{{wrapClasses}}"><a class="{{classes}}" href="{{href}}">{{name}}</a></li>`;

export type MenuLinkParams = {
	element: string,
	id: string,
	classes: string,
	wrapClasses: string,
	name: string,
	href: string,
	onClick: (event: Event) => void
}

export default class MenuLink extends Link {

	constructor(params: MenuLinkParams, template: string, noTagName: boolean = true) {
		if (!template){
			template = menuLinkBlockTemplate;
		}
		super(params, template, noTagName);
	}
}