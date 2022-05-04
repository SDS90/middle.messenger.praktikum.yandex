class e{TEMPLATE_REGULAR=/\{\{(.*?)\}\}/;templateBlock="";constructor(e){this.templateBlock=e}generateTemplate(e){return e&&this.templateBlock?this.changeTemplateKeys(e,this.templateBlock,this.TEMPLATE_REGULAR):""}changeTemplateKeys(e,t,n){let r=n.exec(t);if(r&&r[1]){const n=r[1];for(let a in e)if(a==r[1]){let a=e[n];"object"!=typeof a&&"function"!=typeof a&&(t=t.replace(r[0],a.toString()))}}return n.exec(t)?this.changeTemplateKeys(e,t,n):t}}const t={email:new RegExp(/^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_\.-]+)\.([a-z\.]{2,6})$/),login:new RegExp(/^[A-Za-z0-9_\.-]{3,20}$/),name:new RegExp(/^[A-ZА-Я][a-zA-Zа-яА-Я-]+$/),phone:new RegExp(/^\+?\d{10,15}$/),password:new RegExp(/^((?=.*?[A-Z])(?=.*?[0-9])\S{8,40})\S$/)},n=function(e){const n=e.getAttribute("data-validation-type"),r=e.getAttribute("data-error-text"),a=e.value,l=t[n],s=e.parentElement,i=s.querySelector(".error-text-block");return l&&!l.test(a)?(s.classList.add("error-input"),i&&(i.textContent=r||"Возникла ошибка при заполнении формы. Пожалуйста, проверьте введённые данные."),!1):(s.classList.remove("error-input"),i&&(i.textContent=""),!0)},r='\n\t<div class="reg-form-page">\n\t\t<div class="reg-form-wrapper">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<form class="reg-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="reg-form-fieldset"></div>\n\t\t\t\t\t<div class="form-block info-block"></div>\n\t\t\t\t\t<div class="form-block buttons-wrapper"></div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t</div>';class a{constructor(e){this.params=e}render(){return new e(r).generateTemplate(this.params)}insertBlock(t,n){const a=(new DOMParser).parseFromString(new e(r).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],l=document.querySelector(t);if(a&&l){for(let e in this.params)this.params[e]||a.removeAttribute(e);n&&(l.innerHTML=""),l.appendChild(a)}}}function l(){const e=document.querySelector(".reg-form");if(console.log(e),e&&function(e){const t=e.querySelectorAll(".form-block"),r=e.querySelector(".info-block");let a=!0,l="",s="";return r.textContent="",t.forEach((function(e){let t=e.querySelector("input");console.log(t),e.classList.contains("none-block")||n(t)||(a=!1),t.value||!t.getAttribute("data-required")||e.classList.contains("none-block")||(a=!1,r.textContent="Не все обязательные поля заполнены."),"password"==t.name&&(l=t.value),"repeat_password"==t.name&&(s=t.value)})),l&&s&&l!=s&&(a=!1,r.textContent="Пароли не совпадают."),a}(e)){const t=new FormData(e);console.log(...t)}}const s='\n\t<div class="form-block {{classList}}">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="input-wrapper">\n\t\t\t<input class="form-control input-styles" data-required="{{required}}" data-error-text="{{errorText}}" data-validation-type="{{validationType}}" id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">\n\t\t\t<div class="error-text-block"></div>\n\t\t</div>\n\t</div>';class i{constructor(e){this.params=e}render(){return new e(s).generateTemplate(this.params)}insertBlock(t,r){const a=(new DOMParser).parseFromString(new e(s).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],l=document.querySelector(t);if(!a||!l)return;for(let e in this.params)this.params[e]||a.removeAttribute(e);r&&(l.innerHTML="");let i=a.querySelector("input");i.addEventListener("focus",(function(){i.classList.add("focus-input")})),i.addEventListener("blur",(function(){i.classList.remove("focus-input"),n(i)})),l.appendChild(a)}}class o{constructor(e){this.params=e}render(){return new e('<button id="{{id}}" class="button-link {{classes}}">{{name}}</button>').generateTemplate(this.params)}insertBlock(t,n){const r=(new DOMParser).parseFromString(new e('<button id="{{id}}" class="button-link {{classes}}">{{name}}</button>').generateTemplate(this.params),"text/html").getElementsByTagName("button")[0],a=document.querySelector(t);if(r&&a){for(let e in this.params)this.params[e]||r.removeAttribute(e);n&&(a.innerHTML=""),r.addEventListener("click",this.params.onClick),a.appendChild(r)}}}const c='\n\t<label class="image-form-block" for="{{id}}">\n\t\t<input class="load-image" hidden accept="image/*" type="file" id="{{id}}">\n\t\t<img id="{{id}}" src="{{imageLink}}" alt="{{imageAlt}}" title="{{imageTitle}}">\n\t</label>';class m{constructor(e){this.params=e}render(){return new e(c).generateTemplate(this.params)}insertBlock(t,n){const r=(new DOMParser).parseFromString(new e(c).generateTemplate(this.params),"text/html").getElementsByTagName("label")[0],a=document.querySelector(t);if(r&&a){for(let e in this.params)this.params[e]||r.removeAttribute(e);n&&(a.innerHTML=""),a.appendChild(r)}}}const d={title:""},p=[{element:".reg-form-fieldset",id:"photoImageUpload",imageLink:"#",imageAlt:"",imageTitle:""}],u=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:""},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:""},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:""}],f=[{element:".reg-form-fieldset",id:"changePasswordButton",name:"Изменить пароль",classes:"reg-link",onClick:e=>{e.preventDefault();let t=document.getElementById(e.target.getAttribute("id")).nextElementSibling;for(;t;)t.classList.remove("none-block"),t=t.nextElementSibling}}],g=[{element:".reg-form-fieldset",id:"oldPassword",name:"old_password",label:"Старый пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"}],v=[{element:".buttons-wrapper",id:"",name:"Изменить данные",classes:"add-link",onClick:e=>{e.preventDefault(),l()}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault()}}];const b={title:"Вход"},h=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"",validationType:"",classList:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"",validationType:"",classList:""}],w=[{element:".buttons-wrapper",id:"",name:"Авторизоваться",classes:"add-link",onClick:e=>{e.preventDefault(),l()}},{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"reg-link",onClick:e=>{e.preventDefault(),new a(d).insertBlock("#app",!0),p.forEach((function(e){new m(e).insertBlock(e.element)})),u.forEach((function(e){new i(e).insertBlock(e.element)})),f.forEach((function(e){new o(e).insertBlock(e.element)})),g.forEach((function(e){new i(e).insertBlock(e.element)})),v.forEach((function(e){new o(e).insertBlock(e.element)}))}}];document.addEventListener("DOMContentLoaded",(function(){new a(b).insertBlock("#app",!0),h.forEach((function(e){new i(e).insertBlock(e.element)})),w.forEach((function(e){new o(e).insertBlock(e.element)}))}));
//# sourceMappingURL=index.bd0f3c7d.js.map
