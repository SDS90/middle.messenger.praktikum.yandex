//Блок кнопки

import { expect } from 'chai';
import TemplateGen from '../utilities/TemplateGen';
import Block from '../elements/block';

describe('Тестирование кнопки', () => {
	let buttonInit = false;
	let buttonDidMount = false;
	let buttonRender = false;

	const buttonBlockTemplate = `<button id="{{id}}" class="button-link {{classes}}">{{name}}</button>`;

	type ButtonComponentParams = {
		id: string,
		classes: string,
		name: string,
	}

	class ButtonComponent extends Block {

		constructor(params: ButtonComponentParams, template: string) {
			if (!template){
				template = buttonBlockTemplate;
			}
			super(params, template, false);
		}

		init(): void {
			this._createResources();
			this.eventBus().emit(Block.EVENTS.FLOW_CDM);
			buttonInit = true;
		}

		componentDidMount() {
			buttonDidMount = true;
			return;
		}

		render() {
			buttonRender = true;
			return new TemplateGen(this.template).generateTemplate(this.props);
		}
	}

	const button = new ButtonComponent({
		id: 'buttonId',
		classes: 'buttonClass',
		name: 'buttonName',
	}, '');

	it('Создание кнопки, проверка класса', () => {
		const myButton = new ButtonComponent({
			id: 'buttonId',
			classes: 'buttonClass',
			name: 'buttonName',
		}, '');
		expect(myButton.props.classes).to.eq('buttonClass');
	});

	it('Проверим инициализацию', () => {
		expect(buttonInit).to.eq(true);
	});

	it('Проверим componentDidMount', () => {
		expect(buttonDidMount).to.eq(true);
	});

	it('Проверим рендеринг', () => {
		expect(buttonRender).to.eq(true);
	});

	it('Текст кнопки', () => {
		const buttonContent = button.getContent();
		if (buttonContent){
			expect(buttonContent.textContent).to.eq('buttonName');
		}
	});

	it('Изменим пропсы', () => {
		button.setProps({
			buttonName: 'newButtonName',
		});
		expect(button.props.buttonName).to.eq('newButtonName');
	});
});