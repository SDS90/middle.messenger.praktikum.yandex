(()=>{class e{TEMPLATE_REGULAR=/\{\{(.*?)\}\}/;templateBlock="";constructor(e){this.templateBlock=e}generateTemplate(e){return e&&this.templateBlock?this.changeTemplateKeys(e,this.templateBlock,this.TEMPLATE_REGULAR):""}changeTemplateKeys(e,t,r){let n=r.exec(t);if(n&&n[1]){const r=n[1];for(let a in e)if(a==n[1]){let a=e[r];a="object"!=typeof a&&"function"!=typeof a?a.toString():"",t=t.replace(n[0],a)}}return r.exec(t)?this.changeTemplateKeys(e,t,r):t}}const t={email:new RegExp(/^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_\.-]+)\.([a-z\.]{2,6})$/),login:new RegExp(/^[A-Za-z0-9_\.-]{3,20}$/),name:new RegExp(/^[A-ZА-Я][a-zA-Zа-яА-Я-]+$/),phone:new RegExp(/^\+?\d{10,15}$/),password:new RegExp(/^((?=.*?[A-Z])(?=.*?[0-9])\S{8,40})\S$/)},r=function(e){const r=e.getAttribute("data-validation-type"),n=e.getAttribute("data-error-text"),a=e.value,s=t[r],l=e.parentElement,i=l.querySelector(".error-text-block");return s&&!s.test(a)?(l.classList.add("error-input"),i&&(i.textContent=n||"Возникла ошибка при заполнении формы. Пожалуйста, проверьте введённые данные."),!1):(l.classList.remove("error-input"),i&&(i.textContent=""),!0)},n='\n\t<div class="reg-form-page">\n\t\t<div class="reg-form-wrapper">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<form class="reg-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="reg-form-fieldset"></div>\n\t\t\t\t\t<div class="form-block info-block"></div>\n\t\t\t\t\t<div class="form-block buttons-wrapper"></div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t</div>';class a{constructor(e){this.params=e}render(){return new e(n).generateTemplate(this.params)}insertBlock(t,r){const a=(new DOMParser).parseFromString(new e(n).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],s=document.querySelector(t);if(a&&s){for(let e in this.params)this.params[e]||a.removeAttribute(e);r&&(s.innerHTML=""),s.appendChild(a)}}}function s(){const e=document.querySelector(".reg-form");if(e&&function(e){const t=e.querySelectorAll(".form-block"),n=e.querySelector(".info-block");let a=!0,s="",l="";return n.textContent="",t.forEach((function(e){let t=e.querySelector("input");t&&(e.classList.contains("none-block")||r(t)||(a=!1),t.value||!t.getAttribute("data-required")||e.classList.contains("none-block")||(a=!1,n.textContent="Не все обязательные поля заполнены."),"password"==t.name&&(s=t.value),"repeat_password"==t.name&&(l=t.value))})),s&&l&&s!=l&&(a=!1,n.textContent="Пароли не совпадают."),a}(e)){const t=new FormData(e);console.log(...t)}}class l extends class{constructor(e,t){console.log(t),console.log(e),this.params=e,this.template=t}render(){return new e(this.template).generateTemplate(this.params)}insertBlock(t,r){console.log(this.template),console.log(this.params);const n=(new DOMParser).parseFromString(new e(this.template).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],a=document.querySelector(t);if(!n||!a)return{};for(let e in this.params)this.params[e]||n.removeAttribute(e);return r&&(a.innerHTML=""),console.log({inner:n,wrapper:a}),{inner:n,wrapper:a}}}{inputBlockTemplate='\n\t<div class="form-block {{classList}}">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="input-wrapper">\n\t\t\t<input class="form-control input-styles" data-required="{{required}}" data-error-text="{{errorText}}" data-validation-type="{{validationType}}" id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">\n\t\t\t<div class="error-text-block"></div>\n\t\t</div>\n\t</div>';constructor(e,t){console.log(t),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner,t=n.wrapper,a=e.querySelector("input");a.addEventListener("focus",(function(){a.classList.add("focus-input")})),a.addEventListener("blur",(function(){a.classList.remove("focus-input"),r(a)})),t.appendChild(e)}return{}}}const i='<button id="{{id}}" class="button-link {{classes}}">{{name}}</button>';class o{constructor(e){this.params=e}render(){return new e(i).generateTemplate(this.params)}insertBlock(t,r){const n=(new DOMParser).parseFromString(new e(i).generateTemplate(this.params),"text/html").getElementsByTagName("button")[0],a=document.querySelector(t);if(n&&a){for(let e in this.params)this.params[e]||n.removeAttribute(e);r&&(a.innerHTML=""),n.addEventListener("click",this.params.onClick),a.appendChild(n)}}}const c={title:"Регистрация"},p=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:""},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:""},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:""},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:""}],m=[{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"add-link",onClick:e=>{e.preventDefault(),s()}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),g()}}];const d={title:"Вход"},u=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"",validationType:"",classList:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"",validationType:"",classList:""}],f=[{element:".buttons-wrapper",id:"",name:"Авторизоваться",classes:"add-link",onClick:e=>{e.preventDefault(),s()}},{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"reg-link",onClick:e=>{e.preventDefault(),new a(c).insertBlock("#app",!0),p.forEach((function(e){new l(e).insertBlock(e.element)})),m.forEach((function(e){new o(e).insertBlock(e.element)}))}}];function g(){new a(d).insertBlock("#app",!0),u.forEach((function(e){new l(e,"").insertBlock(e.element)})),f.forEach((function(e){new o(e).insertBlock(e.element)}))}document.addEventListener("DOMContentLoaded",(function(){g()}))})();
//# sourceMappingURL=index.0cc5a853.js.map
