(()=>{class e{TEMPLATE_REGULAR=/\{\{(.*?)\}\}/;templateBlock="";constructor(e){this.templateBlock=e}generateTemplate(e){return e&&this.templateBlock?this.changeTemplateKeys(e,this.templateBlock,this.TEMPLATE_REGULAR):""}changeTemplateKeys(e,t,r){let n=r.exec(t);if(n&&n[1]){const r=n[1];for(let s in e)s==n[1]&&"string"==typeof e[r]&&(t=t.replace(n[0],e[r]))}return r.exec(t)?this.changeTemplateKeys(e,t,r):t}}const t='\n\t<div class="reg-form-page">\n\t\t<div class="reg-form-wrapper">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<form class="reg-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="reg-form-fieldset"></div>\n\t\t\t\t\t<div class="form-block info-block">{{errorInfo}}</div>\n\t\t\t\t\t<div class="form-block buttons-wrapper"></div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t</div>';class r{constructor(e){this.params=e}render(){return new e(t).generateTemplate(this.params)}insertBlock(r){const n=(new DOMParser).parseFromString(new e(t).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],s=document.querySelector(r);n&&s&&s.appendChild(n)}}const n='\n\t<div class="form-block">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="input-wrapper {{errorHightlightClass}}">\n\t\t\t<input class="form-control input-styles {{focusHightlightClass}}" id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">\n\t\t\t<div class="error-text-block">{{errorText}}</div>\n\t\t</div>\n\t</div>';class s{constructor(e){this.params=e}render(){return new e(n).generateTemplate(this.params)}insertBlock(t){const r=(new DOMParser).parseFromString(new e(n).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],s=document.querySelector(t);r&&s&&s.appendChild(r)}}const l='<button class="button-link {{classes}}">{{name}}</button>';class a{constructor(e){this.params=e}render(){return new e(l).generateTemplate(this.params)}insertBlock(t){const r=(new DOMParser).parseFromString(new e(l).generateTemplate(this.params),"text/html").getElementsByTagName("button")[0],n=document.querySelector(t);r&&n&&(r.addEventListener("click",this.params.onClick),n.appendChild(r))}}const o={title:"Вход",errorInfo:""},i=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",errorText:"",errorHightlightClass:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",errorText:"",errorHightlightClass:""}],c=[{element:".buttons-wrapper",id:"",name:"Авторизоваться",classes:"add-link",onClick:e=>{e.preventDefault(),console.log(88)}},{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"reg-link",onClick:e=>{console.log(99)}}];document.addEventListener("DOMContentLoaded",(function(){console.log("DOM готов"),document.getElementById("app"),new r(o).insertBlock("#app"),i.forEach((function(e){new s(e).insertBlock(e.element)})),c.forEach((function(e){new a(e).insertBlock(e.element)}))}))})();
//# sourceMappingURL=index.bdc92b32.js.map
