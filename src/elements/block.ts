//Блоки - общее
import TemplateGen from '../utilities/TemplateGen';

export default class Block {
	params: Record<string, unknown>
	template: string
	insertedBlock: Record<string, unknown>

	constructor(params: Record<string, unknown>, template: string) {
		this.params = params;
		this.template = template;
	}

	render(): string {
		return new TemplateGen(this.template).generateTemplate(this.params);;
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {
		const inner = new DOMParser().parseFromString(new TemplateGen(this.template).generateTemplate(this.params), "text/html").getElementsByTagName("body")[0].childNodes[0]; //this.element;
		const wrapper = document.querySelector(element);
		if (!inner || !wrapper) return {};
		for (let key in this.params){
			if (!this.params[key]){
				inner.removeAttribute(key);
			}
		}
		if (clean){
			wrapper.innerHTML = "";
		}
		return {
			inner: inner,
			wrapper: wrapper
		}
	}
}