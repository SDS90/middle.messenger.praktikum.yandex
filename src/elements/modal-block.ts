//Блок модального окна

import Block from '../elements/block';
import Input, { InputParams }  from '../elements/input-block';

const modalTemplate = `
	<div class="warning-message-wrapper warning-on" id="{{id}}">
		<div class="warning-message-table">
			<div class="warning-message-block">
				<div class="warning-message">
						<span>{{MessageText}}</span>
						<!--<div class="form-block">
							<label>Логин</label>
							<div class="input-wrapper">
								<input class="form-control input-styles" type="text">
								<div class="error-text-block none-block"></div>
							</div>
						</div>-->
					<div class="warning-buttons-wrapper"></div>
				</div>
			</div>
		</div>
	</div>`;

export type ModalParams = {
	element: string,
	id: string,
	MessageText: string,
};

export default class Modal extends Block {

	constructor(params: ModalParams, template: string) {
		if (!template){
			template = modalTemplate;
		}
		super(params, template);
	}

	insertBlock(element: string, clean: boolean): Record<string, HTMLElement> {
		let insertedBlock = super.insertBlock(element, clean);
		if (insertedBlock.inner && insertedBlock.wrapper){
			insertedBlock.wrapper.appendChild(insertedBlock.inner);
		}
		return insertedBlock;
	}
}