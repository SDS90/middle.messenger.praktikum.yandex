import { assert } from 'chai';
import TemplateGen from './TemplateGen';


describe('Генератор шаблонов', () => {
	it('Создадим блок с текстом', () => {
		assert.equal(new TemplateGen('<div class="{{className}}">{{blockText}}<div>').generateTemplate({
			className: 'className',
			blockText: 'blockText',
		}), '<div class="className">blockText<div>');
	});
});