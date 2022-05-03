//Блок ссылки в меню

import Link from '../elements/link-block';

const menuLinkBlockTemplate = `<li><a id="{{id}}" class="{{classes}}" href="{{href}}">{{name}}</a></li>`;

export type MenuLinkParams = {
	element: string,
	id: string,
	classes: string,
	name: string,
	href: string,
	onClick: (event: Event) => void
}

export default class MenuLink extends Link {

	constructor(params: MenuLinkParams, template: string) {
		if (!template){
			template = menuLinkBlockTemplate;
		}
		super(params, template);
	}
}