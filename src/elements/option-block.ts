//Блок option

import Block from '../elements/block';

const optionBlockTemplate = `<option value="{{value}}">{{name}}</option>`;

export type OptionParams = {
	element: string,
	value: string,
	name: string,
}

export default class Option extends Block {

	constructor(params: OptionParams, template: string) {
		if (!template){
			template = optionBlockTemplate;
		}
		super(params, template, true);
	}
}