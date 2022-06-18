//Блок загрузки изображения

import Block from '../elements/block';

const inputImageTemplate = `
	<label class="image-form-block" for="{{id}}">
		<input class="load-image" name="{{name}}" hidden accept="image/*" type="file" id="{{id}}">
		<img id="{{imageId}}" src="{{imageLink}}" alt="{{imageAlt}}" title="{{imageTitle}}">
	</label>`;

export type InputImageParams = {
	element: string,
	id: string,
	imageId: string,
	name: string,
	imageLink: string,
	imageAlt: string,
	imageTitle: string,
	onChanged: (event: Event) => void
}

export default class ImageInput extends Block {

	constructor(params: InputImageParams, template: string) {
		if (!template){
			template = inputImageTemplate;
		}
		super(params, template, false);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement | Element | null> {

		const insertedBlock = super.insertBlock(element, clean);
		const $this = this.props;
		if (insertedBlock.inner){
			const input = insertedBlock.inner.querySelector('input');
			if (input){
				input.addEventListener('change', function(event){
					$this.onChanged(event);
				});
			}			
		}
		return insertedBlock;
	}

}