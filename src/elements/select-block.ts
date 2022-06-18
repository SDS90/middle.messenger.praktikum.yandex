//Блок select

import Block from '../elements/block';

const selectBlockTemplate = `
	<div class="form-block {{classList}}">
		<label class="form-label" for="{{id}}">{{label}}</label>
		<div class="select-wrapper  wrapper-element clear">
			<div class="select-block">
				<select id="{{id}}" name="{{name}}" data-required="{{required}}" data-error-text="{{errorText}}">
					<option value="" selected disabled></option>
				</select>
			</div>
			<div class="error-text-block"></div>
		</div>
	</div>`;

export type SelectParams = {
	element: string,
	id: string,
	name: string,
	classList: string,
	label: string,
	errorText: string,
	required: boolean
}

export default class Select extends Block {

	constructor(params: SelectParams, template: string, noTagName: boolean) {
		if (!template){
			template = selectBlockTemplate;
		}
		super(params, template, true);
	}
}