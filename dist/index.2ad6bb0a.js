(()=>{class e{TEMPLATE_REGULAR=/\{\{(.*?)\}\}/;templateBlock="";constructor(e){this.templateBlock=e}generateTemplate(e){return e&&this.templateBlock?this.changeTemplateKeys(e,this.templateBlock,this.TEMPLATE_REGULAR):""}changeTemplateKeys(e,t,r){let n=r.exec(t);if(n&&n[1]){const r=n[1];for(let a in e)a==n[1]&&"string"==typeof e[r]&&(t=t.replace(n[0],e[r]))}return r.exec(t)?this.changeTemplateKeys(e,t,r):t}}const t='\n\t<div class="reg-form-page">\n\t\t<div class="reg-form-wrapper">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<form class="reg-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="reg-form-fieldset"></div>\n\t\t\t\t\t<div class="form-block info-block">{{errorInfo}}</div>\n\t\t\t\t\t<div class="form-block buttons-wrapper"></div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t</div>';class r{constructor(e){this.params=e}render(){return new e(t).generateTemplate(this.params)}insertBlock(r,n){const a=(new DOMParser).parseFromString(new e(t).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],l=document.querySelector(r);a&&l&&(n&&(l.innerHTML=""),l.appendChild(a))}}function n(){const e=document.querySelector(".reg-form");if(console.log(e),!e)return;const t=new FormData(e);console.log(...t)}const a={email:new RegExp(/^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_\.-]+)\.([a-z\.]{2,6})$/)},l='\n\t<div class="form-block">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="input-wrapper">\n\t\t\t<input class="form-control input-styles" data-error-text="{{errorText}}" data-validation-type="{{validationType}}" id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">\n\t\t\t<div class="error-text-block"></div>\n\t\t</div>\n\t</div>';class s{constructor(e){this.params=e}render(){return new e(l).generateTemplate(this.params)}insertBlock(t){const r=(new DOMParser).parseFromString(new e(l).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],n=document.querySelector(t);if(!r||!n)return;let s=r.querySelector("input");s.addEventListener("focus",(function(){s.classList.add("focus-input")})),s.addEventListener("blur",(function(){s.classList.remove("focus-input"),console.log(function(e){const t=e.getAttribute("data-validation-type"),r=e.getAttribute("data-error-text"),n=e.value,l=a[t],s=e.parentElement,o=s.querySelector(".error-text-block");return l&&!l.test(n)?(s.classList.add("error-input"),console.log(o),console.log(r),o&&(o.textContent=r||"Возникла ошибка при заполнении формы. Пожалуйста, проверьте введённые данные."),!1):(s.classList.remove("error-input"),o&&(o.textContent=""),!0)}(s))})),n.appendChild(r)}}const o='<button class="button-link {{classes}}">{{name}}</button>';class i{constructor(e){this.params=e}render(){return new e(o).generateTemplate(this.params)}insertBlock(t){const r=(new DOMParser).parseFromString(new e(o).generateTemplate(this.params),"text/html").getElementsByTagName("button")[0],n=document.querySelector(t);r&&n&&(r.addEventListener("click",this.params.onClick),n.appendChild(r))}}const c={title:"Регистрация",errorInfo:""},m=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",errorText:"",validationType:"email"},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",errorText:"",validationType:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",errorText:"",validationType:""},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",errorText:"",validationType:""}],p=[{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"add-link",onClick:e=>{e.preventDefault(),n()}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),g()}}];const d={title:"Вход",errorInfo:""},u=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",errorText:"",errorHightlightClass:"",validationType:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",errorText:"",errorHightlightClass:"",validationType:""}],f=[{element:".buttons-wrapper",id:"",name:"Авторизоваться",classes:"add-link",onClick:e=>{e.preventDefault(),n()}},{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"reg-link",onClick:e=>{e.preventDefault(),new r(c).insertBlock("#app",!0),m.forEach((function(e){new s(e).insertBlock(e.element)})),p.forEach((function(e){new i(e).insertBlock(e.element)}))}}];function g(){new r(d).insertBlock("#app",!0),u.forEach((function(e){new s(e).insertBlock(e.element)})),f.forEach((function(e){new i(e).insertBlock(e.element)}))}document.addEventListener("DOMContentLoaded",(function(){g()}))})();
//# sourceMappingURL=index.2ad6bb0a.js.map
