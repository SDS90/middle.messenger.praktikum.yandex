//Генератор шаблонов
//На вход подаётся строка с макросами в скобках {{}} и объект со значениями макросов
//Пример:
/*
	Строка: '<div class="{{className}}"></div>'
	Объект: {className: 'test-class'}
*/

export default class TemplateGen {

	readonly TEMPLATE_REGULAR = /\{\{(.*?)\}\}/;

	readonly templateBlock: string = "";

	constructor(templateBlock: string) {
		this.templateBlock = templateBlock
	}

	generateTemplate(template: Record<string, unknown>): string {
		if (template && this.templateBlock){
			return this.changeTemplateKeys(template, this.templateBlock, this.TEMPLATE_REGULAR);
		}
		return "";
	}

	changeTemplateKeys(template, tmp, templateRegular): string {
		let templateKeys = templateRegular.exec(tmp);
		if (templateKeys && templateKeys[1]){
			const templateKey = templateKeys[1];
			if (templateKey in template){
				let templateValue = template[templateKey];
				if ((typeof templateValue != "object") && (typeof templateValue != "function")){
					templateValue = templateValue.toString()
				} else {
					templateValue = "";
				}
				tmp = tmp.replace(templateKeys[0], templateValue);
			} else {
				tmp = tmp.replace(templateKeys[0], "");
			}	
		}
		if (templateRegular.exec(tmp)){
			return this.changeTemplateKeys(template, tmp, templateRegular);
		} else {
			return tmp;
		}
	}
}