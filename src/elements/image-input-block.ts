//Блок загрузки изображения

import Block from '../elements/block';

const inputImageTemplate = `
	<label class="image-form-block" for="{{id}}">
		<input class="load-image" hidden accept="image/*" type="file" id="{{id}}">
		<img id="{{id}}" src="{{imageLink}}" alt="{{imageAlt}}" title="{{imageTitle}}">
	</label>`;

export type InputImageParams = {
	element: string,
	id: string,
	imageLink: string,
	imageAlt: string,
	imageTitle: string,
}

export default class ImageInput extends Block {

	constructor(params: InputImageParams, template: string) {
		if (!template){
			template = inputImageTemplate;
		}
		super(params, template);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {
		const insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner && insertedBlock.wrapper){
			insertedBlock.wrapper.appendChild(insertedBlock.inner);
		}
		return insertedBlock;
	}
}