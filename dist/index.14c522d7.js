class e{TEMPLATE_REGULAR=/\{\{(.*?)\}\}/;templateBlock="";constructor(e){this.templateBlock=e}generateTemplate(e){return e&&this.templateBlock?this.changeTemplateKeys(e,this.templateBlock,this.TEMPLATE_REGULAR):""}changeTemplateKeys(e,t,n){let r=n.exec(t);if(r&&r[1]){const n=r[1];for(let s in e)s==r[1]&&"string"==typeof e[n]&&(t=t.replace(r[0],e[n]))}return n.exec(t)?this.changeTemplateKeys(e,t,n):t}}const t='\n\t<div class="reg-form-page">\n\t\t<div class="reg-form-wrapper">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<form class="reg-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="reg-form-fieldset"></div>\n\t\t\t\t\t<div class="form-block info-block">{{errorInfo}}</div>\n\t\t\t\t\t<div class="form-block buttons-wrapper"></div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t</div>';class n{constructor(e){this.params=e}render(){return new e(t).generateTemplate(this.params)}insertBlock(n){const r=(new DOMParser).parseFromString(new e(t).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],s=document.querySelector(n);r&&s&&s.appendChild(r)}}function r(){const e=document.querySelector(".reg-form");if(console.log(e),!e)return;const t=new FormData(e);console.log(...t)}const s='\n\t<div class="form-block">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="input-wrapper {{errorHightlightClass}}">\n\t\t\t<input class="form-control input-styles " id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">\n\t\t\t<div class="error-text-block">{{errorText}}</div>\n\t\t</div>\n\t</div>';class l{constructor(e){this.params=e}render(){return new e(s).generateTemplate(this.params)}insertBlock(t){const n=(new DOMParser).parseFromString(new e(s).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],r=document.querySelector(t);if(!n||!r)return;let l=n.querySelector("input");l.addEventListener("focus",(function(){l.classList.add("focus-input")})),l.addEventListener("blur",(function(){l.classList.remove("focus-input")})),r.appendChild(n)}}class o{constructor(e){this.params=e}render(){return new e('<button class="button-link {{classes}}">{{name}}</button>').generateTemplate(this.params)}insertBlock(t){const n=(new DOMParser).parseFromString(new e('<button class="button-link {{classes}}">{{name}}</button>').generateTemplate(this.params),"text/html").getElementsByTagName("button")[0],r=document.querySelector(t);n&&r&&(n.addEventListener("click",this.params.onClick),r.appendChild(n))}}const a={title:"Регистрация",errorInfo:""},i=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",errorText:"",errorHightlightClass:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",errorText:"",errorHightlightClass:""}],c=[{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"add-link",onClick:e=>{e.preventDefault(),r()}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{console.log(99)}}];const m={title:"Вход",errorInfo:""},p=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",errorText:"",errorHightlightClass:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",errorText:"",errorHightlightClass:""}],d=[{element:".buttons-wrapper",id:"",name:"Авторизоваться",classes:"add-link",onClick:e=>{e.preventDefault(),r()}},{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"reg-link",onClick:e=>{e.preventDefault(),document.getElementById("app"),new n(a).insertBlock("#app"),i.forEach((function(e){new l(e).insertBlock(e.element)})),c.forEach((function(e){new o(e).insertBlock(e.element)}))}}];document.addEventListener("DOMContentLoaded",(function(){console.log("DOM готов"),function(){const e=document.getElementById("app");console.log(e),e.innerHTML(new n(m)),p.forEach((function(e){new l(e).insertBlock(e.element)})),d.forEach((function(e){new o(e).insertBlock(e.element)}))}()}));
//# sourceMappingURL=index.14c522d7.js.map
