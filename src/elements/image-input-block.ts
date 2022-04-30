//Блок загрузки изображения

import TemplateGen from '../utilities/TemplateGen';

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

export default class ImageInput /*extends Block*/ {
	params: InputImageParams

	constructor(params: InputImageParams) {
		this.params = params;
		//super('button', props, props.className)
	}

	render(): string {
		return new TemplateGen(inputImageTemplate).generateTemplate(this.params);
	}

	insertBlock(element: string, clean: boolean): void {
		const inner = new DOMParser().parseFromString(new TemplateGen(inputImageTemplate).generateTemplate(this.params), "text/html").getElementsByTagName("label")[0]; //this.element;
		const wrapper = document.querySelector(element);
		if (!inner || !wrapper) return;
		for (let key in this.params){
			if (!this.params[key]){
				inner.removeAttribute(key);
			}
		}
		if (clean){
			wrapper.innerHTML = "";
		}
		wrapper.appendChild(inner);
	}
}