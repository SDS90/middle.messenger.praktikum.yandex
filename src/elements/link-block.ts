//Блок ссылки

import Block from '../elements/block';

const linkBlockTemplate = `<a id="{{id}}" class="{{classes}}" href="{{href}}">{{name}}</a>`;

export type LinkParams = {
	element: string,
	id: string,
	classes: string,
	name: string,
	href: string,
	onClick: (event: Event) => void
}

export default class Link extends Block {

	constructor(params: LinkParams, template: string) {
		if (!template){
			template = linkBlockTemplate;
		}
		super(params, template);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {
		let insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner && insertedBlock.wrapper){
			let inner = insertedBlock.inner;
			let wrapper = insertedBlock.wrapper;
			inner.addEventListener('click', this.params.onClick);
			wrapper.appendChild(inner);
		}
		return insertedBlock;
	}
}