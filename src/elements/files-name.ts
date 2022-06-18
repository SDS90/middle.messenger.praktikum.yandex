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
		super(params, template, false);
	}
}