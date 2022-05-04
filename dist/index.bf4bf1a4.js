class e{TEMPLATE_REGULAR=/\{\{(.*?)\}\}/;templateBlock="";constructor(e){this.templateBlock=e}generateTemplate(e){return e&&this.templateBlock?this.changeTemplateKeys(e,this.templateBlock,this.TEMPLATE_REGULAR):""}changeTemplateKeys(e,t,r){let n=r.exec(t);if(n&&n[1]){const r=n[1];for(let s in e)s==n[1]&&"string"==typeof e[r]&&(t=t.replace(n[0],e[r]))}return r.exec(t)?this.changeTemplateKeys(e,t,r):t}}const t='\n\t<div class="reg-form-page">\n\t\t<div class="reg-form-wrapper">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<form class="reg-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="reg-form-fieldset"></div>\n\t\t\t\t\t<div class="form-block info-block">{{errorInfo}}</div>\n\t\t\t\t\t<div class="form-block buttons-wrapper"></div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t</div>';class r{constructor(e){this.params=e}render(){return new e(t).generateTemplate(this.params)}insertBlock(r,n){const s=(new DOMParser).parseFromString(new e(t).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],l=document.querySelector(r);s&&l&&(n&&(l.innerHTML=""),l.appendChild(s))}}function n(){const e=document.querySelector(".reg-form");if(console.log(e),!e)return;const t=new FormData(e);console.log(...t)}const s={email:new RegExp(/^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_\.-]+)\.([a-z\.]{2,6})$/)},l='\n\t<div class="form-block">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="input-wrapper {{errorHightlightClass}}">\n\t\t\t<input class="form-control input-styles " id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">\n\t\t\t<div class="error-text-block">{{errorText}}</div>\n\t\t</div>\n\t</div>';class a{constructor(e){this.params=e}render(){return new e(l).generateTemplate(this.params)}insertBlock(t){const r=(new DOMParser).parseFromString(new e(l).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],n=document.querySelector(t);if(!r||!n)return;let a=r.querySelector("input");a.addEventListener("focus",(function(){a.classList.add("focus-input")})),a.addEventListener("blur",(function(){a.classList.remove("focus-input"),console.log(function(e){const t=e.type,r=e.value;console.log(e);const n=s[t];return console.log(n),!(n&&!n.test(r)&&(e.previousElementSibling?.classList.add("_wrong"),e.classList.add("_wrong"),1))}(a))})),n.appendChild(r)}}class o{constructor(e){this.params=e}render(){return new e('<button class="button-link {{classes}}">{{name}}</button>').generateTemplate(this.params)}insertBlock(t){const r=(new DOMParser).parseFromString(new e('<button class="button-link {{classes}}">{{name}}</button>').generateTemplate(this.params),"text/html").getElementsByTagName("button")[0],n=document.querySelector(t);r&&n&&(r.addEventListener("click",this.params.onClick),n.appendChild(r))}}const i={title:"Регистрация",errorInfo:""},c=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",errorText:"",errorHightlightClass:""},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",errorText:"",errorHightlightClass:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",errorText:"",errorHightlightClass:""},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",errorText:"",errorHightlightClass:""}],m=[{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"add-link",onClick:e=>{e.preventDefault(),n()}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),g()}}];const p={title:"Вход",errorInfo:""},d=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",errorText:"",errorHightlightClass:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",errorText:"",errorHightlightClass:""}],u=[{element:".buttons-wrapper",id:"",name:"Авторизоваться",classes:"add-link",onClick:e=>{e.preventDefault(),n()}},{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"reg-link",onClick:e=>{e.preventDefault(),new r(i).insertBlock("#app",!0),c.forEach((function(e){new a(e).insertBlock(e.element)})),m.forEach((function(e){new o(e).insertBlock(e.element)}))}}];function g(){new r(p).insertBlock("#app",!0),d.forEach((function(e){new a(e).insertBlock(e.element)})),u.forEach((function(e){new o(e).insertBlock(e.element)}))}document.addEventListener("DOMContentLoaded",(function(){g()}));
//# sourceMappingURL=index.bf4bf1a4.js.map
