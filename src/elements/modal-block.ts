//Блок модального окна

import Block from '../elements/block';
//import Input, { InputParams } from '../elements/input-block'; - может пригодиться позже при использовании форм в окне

const modalTemplate = `
	<div class="warning-message-wrapper warning-on" id="{{id}}">
		<div class="warning-message-table">
			<div class="warning-message-block">
				<div class="warning-message" data-chatId="{{chatId}}">
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
	chatId: number,
	MessageText: string,
};

export default class Modal extends Block {

	constructor(params: ModalParams, template: string) {
		if (!template){
			template = modalTemplate;
		}
		super(params, template);
	}
}