//Блок ошибки

import Block from '../elements/block';

//<a class="warning-add warning-button" href="chat.html">Назад</a>-

const errorBlockTemplate = `
	<div class="warning-message-wrapper warning-on">
		<div class="warning-message-table">
			<div class="warning-message-block">
				<div class="loader none-block">//убрать none-block для показа</div>
				<div class="error-message warning-message">
					<div class="error-message-header">{{title}}</div>
					<span>{{errorText}}</span>
					<div class="warning-buttons-wrapper">
					</div>
				</div>
			</div>
		</div>
	</div>`;

export type ErrorParams = {
	title: string,
	errorText: string
};

export default class Error extends Block {

	constructor(params: ErrorParams, template: string) {
		if (!template){
			template = errorBlockTemplate;
		}
		super(params, template);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {
		const insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner && insertedBlock.wrapper){
			const inner = insertedBlock.inner;
			const wrapper = insertedBlock.wrapper;
			wrapper.appendChild(inner);
		}
		return insertedBlock;
	}
}