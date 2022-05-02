//Названия файлов

import Block from '../elements/block';

const filesNameTemplate = `<div class="files-names">{{name}}</div>`;

export type FilesNameData = {
	element: string,
	name: string,
};

export default class FilesName extends Block {

	constructor(params: FilesNameData, template: string) {
		if (!template){
			template = filesNameTemplate;
		}
		super(params, template);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {
		let insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner && insertedBlock.wrapper){
			let inner = insertedBlock.inner;
			let wrapper = insertedBlock.wrapper;
			wrapper.appendChild(inner);
		}
		return insertedBlock;
	}
}