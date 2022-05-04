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

	constructor(params: LinkParams, template: string, noTagName: boolean = false) {
		if (!template){
			template = linkBlockTemplate;
		}
		super(params, template, noTagName);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {
		const insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner && insertedBlock.wrapper){
			const inner = insertedBlock.inner;
			const wrapper = insertedBlock.wrapper;
			inner.addEventListener('click', this.props.onClick);
			wrapper.appendChild(inner);
		}
		return insertedBlock;
	}
}