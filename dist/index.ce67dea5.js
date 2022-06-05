(()=>{class e{TEMPLATE_REGULAR=/\{\{(.*?)\}\}/;templateBlock="";constructor(e){this.templateBlock=e}generateTemplate(e){return e&&this.templateBlock?this.changeTemplateKeys(e,this.templateBlock,this.TEMPLATE_REGULAR):""}changeTemplateKeys(e,t,n){let r=n.exec(t);if(r&&r[1]){const n=r[1];for(let a in e)if(a==r[1]){let a=e[n];a="object"!=typeof a&&"function"!=typeof a?a.toString():"",t=t.replace(r[0],a)}}return n.exec(t)?this.changeTemplateKeys(e,t,n):t}}class t{constructor(e,t){this.params=e,this.template=t}render(){return new e(this.template).generateTemplate(this.params)}insertBlock(t,n){const r=(new DOMParser).parseFromString(new e(this.template).generateTemplate(this.params),"text/html").getElementsByTagName("body")[0].childNodes[0],a=document.querySelector(t);if(!r||!a)return{};for(let e in this.params)this.params[e]||r.removeAttribute(e);return n&&(a.innerHTML=""),{inner:r,wrapper:a}}}const n={email:new RegExp(/^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_\.-]+)\.([a-z\.]{2,6})$/),login:new RegExp(/^[A-Za-z0-9_\.-]{3,20}$/),name:new RegExp(/^[A-ZА-Я][a-zA-Zа-яА-Я-]+$/),phone:new RegExp(/^\+?\d{10,15}$/),password:new RegExp(/^((?=.*?[A-Z])(?=.*?[0-9])\S{8,40})\S$/)},r=function(e){const t=e.getAttribute("data-validation-type"),r=e.getAttribute("data-error-text"),a=e.value,s=n[t],i=e.parentElement,l=i.querySelector(".error-text-block");return s&&!s.test(a)?(i.classList.add("error-input"),l&&(l.textContent=r||"Возникла ошибка при заполнении формы. Пожалуйста, проверьте введённые данные."),!1):(i.classList.remove("error-input"),l&&(l.textContent=""),!0)};class a extends t{constructor(e,t){t||(t='\n\t<div class="reg-form-page">\n\t\t<div class="reg-form-wrapper">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<form class="reg-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="reg-form-fieldset"></div>\n\t\t\t\t\t<div class="form-block info-block"></div>\n\t\t\t\t\t<div class="form-block buttons-wrapper"></div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);return n.inner&&n.wrapper&&n.wrapper.appendChild(n.inner),n}}function s(e){const t=document.querySelector(".reg-form");if(t&&function(e){const t=e.querySelectorAll(".form-block"),n=e.querySelector(".info-block");let a=!0,s="",i="";return n.textContent="",t.forEach((function(e){let t=e.querySelector("input");t&&(e.classList.contains("none-block")||r(t)||(a=!1),t.value||!t.getAttribute("data-required")||e.classList.contains("none-block")||(a=!1,n.textContent="Не все обязательные поля заполнены."),"password"==t.name&&(s=t.value),"repeat_password"==t.name&&(i=t.value))})),s&&i&&s!=i&&(a=!1,n.textContent="Пароли не совпадают."),a}(t)){const n=new FormData(t);console.log(...n),e&&e()}}class i extends t{constructor(e,t){t||(t='\n\t<div class="form-block {{classList}}">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="input-wrapper">\n\t\t\t<input class="form-control input-styles" data-required="{{required}}" data-error-text="{{errorText}}" data-validation-type="{{validationType}}" id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">\n\t\t\t<div class="error-text-block"></div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner,t=n.wrapper,a=e.querySelector("input");a.addEventListener("focus",(function(){a.classList.add("focus-input")})),a.addEventListener("blur",(function(){a.classList.remove("focus-input"),r(a)})),t.appendChild(e)}return n}}class l extends t{constructor(e,t){t||(t='<button id="{{id}}" class="button-link {{classes}}">{{name}}</button>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner,t=n.wrapper;e.addEventListener("click",this.params.onClick),t.appendChild(e)}return n}}class o extends t{constructor(e,t){t||(t='<a id="{{id}}" class="{{classes}}" href="{{href}}">{{name}}</a>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner,t=n.wrapper;e.addEventListener("click",this.params.onClick),t.appendChild(e)}return n}}class c extends t{constructor(e,t){t||(t='\n\t<div class="chat-form-page clear">\n\t\t<div class="chat-list-column">\n\t\t\t<div class="profile-block clear"></div>\n\t\t\t<div class="chat-list"></div>\n\t\t</div>\n\t\t<div class="chat-full-block">\n\t\t\t<div class="chat-full-name">{{chatUserName}}</div>\n\t\t\t\x3c!--<div class="select-chat-wrapper ">\n\t\t\t\t<div class="select-chat-cell">\n\t\t\t\t\t<span>Выберите чат</span>\n\t\t\t\t</div>\n\t\t\t</div>--\x3e\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);return n.inner&&n.wrapper&&n.wrapper.appendChild(n.inner),n}}class d extends t{constructor(e,t){t||(t='\n\t<div class="chat-block" id="{{id}}">\n\t\t<div class="chat-photo-wrapper">\n\t\t\t<img class="chat-photo" src="{{photoLink}}" alt="{{photoAlt}}">\n\t\t</div>\n\t\t<div class="chat-name">{{name}}</div>\n\t\t<div class="chat-preview-text">\n\t\t\t<strong class="{{fromMeHideClass}}">Вы: </strong>\n\t\t\t<span>{{text}}</span>\n\t\t</div>\n\t\t<div class="chat-time">{{time}}</div>\n\t\t<div class="new-messages-info {{newMessageHideClass}}">{{newMessageCount}}</div>\n\t\t<a class="delete-chat-button" href="#">X</a>\n\t</div>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner,t=n.wrapper;e.addEventListener("click",this.params.onClick),t.appendChild(e)}return n}}class p extends t{constructor(e,t){t||(t='\n\t<div class="chat-message-wrapper {{toMeClass}}">\n\t\t<div class="chat-message-block">\n\t\t\t<div class="chat-message-time">{{time}}</div>\n\t\t\t<div>\n\t\t\t\t{{text}}\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner;n.wrapper.prepend(e)}return n}}class m extends t{constructor(e,t){t||(t='\n\t<div class="warning-message-wrapper warning-on">\n\t\t<div class="warning-message-table">\n\t\t\t<div class="warning-message-block">\n\t\t\t\t<div class="loader none-block">//убрать none-block для показа</div>\n\t\t\t\t<div class="error-message warning-message">\n\t\t\t\t\t<div class="error-message-header">{{title}}</div>\n\t\t\t\t\t<span>{{errorText}}</span>\n\t\t\t\t\t<div class="warning-buttons-wrapper">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner;n.wrapper.appendChild(e)}return n}}const u={title:"Ошибка 404",errorText:"Страница не найдена"},f=[{element:".warning-buttons-wrapper",id:"",name:"Назад",classes:"warning-add warning-button",onClick:e=>{e.preventDefault(),R()}}];class v extends t{constructor(e,t){t||(t='\n\t<label class="image-form-block" for="{{id}}">\n\t\t<input class="load-image" hidden accept="image/*" type="file" id="{{id}}">\n\t\t<img id="{{id}}" src="{{imageLink}}" alt="{{imageAlt}}" title="{{imageTitle}}">\n\t</label>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);return n.inner&&n.wrapper&&n.wrapper.appendChild(n.inner),n}}const g={title:""},w=[{element:".reg-form-fieldset",id:"photoImageUpload",imageLink:"#",imageAlt:"",imageTitle:""}],k=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:""},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:""},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:""}],h=[{element:".reg-form-fieldset",id:"changePasswordButton",name:"Изменить пароль",classes:"reg-link",onClick:e=>{e.preventDefault();let t=document.getElementById(e.target.getAttribute("id")).nextElementSibling;for(;t;)t.classList.remove("none-block"),t=t.nextElementSibling}}],b=[{element:".reg-form-fieldset",id:"oldPassword",name:"old_password",label:"Старый пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"}],x=[{element:".buttons-wrapper",id:"",name:"Изменить данные",classes:"add-link",onClick:e=>{e.preventDefault(),s((function(){E()}))}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),E()}}];const y={chatUserName:"Андрей Андрейченков"},T=[{element:".profile-block",id:"",classes:"create-chat-link",name:"Создать чат",href:"#",onClick:e=>{e.preventDefault(),new m(u).insertBlock("#app",!0),f.forEach((function(e){new l(e).insertBlock(e.element)}))}},{element:".profile-block",id:"",classes:"profile-link",name:"Мой профиль &gt;",href:"#",onClick:e=>{e.preventDefault(),new a(g).insertBlock("#app",!0),w.forEach((function(e){new v(e).insertBlock(e.element)})),k.forEach((function(e){new i(e).insertBlock(e.element)})),h.forEach((function(e){new l(e).insertBlock(e.element)})),b.forEach((function(e){new i(e).insertBlock(e.element)})),x.forEach((function(e){new l(e).insertBlock(e.element)}))}},{element:".chat-full-name",id:"",classes:"chat-back-button",name:"Выход",href:"#",onClick:e=>{e.preventDefault(),R()}}],B=[{element:".chat-list",id:"1",photoLink:"",name:"Андрей Андрейченков",photoAlt:"",fromMeHideClass:"none-block",text:"Круто!",time:"15.04.2022 15:31",newMessageHideClass:"",newMessageCount:10,onClick:e=>{e.preventDefault(),C(e)}},{element:".chat-list",id:"2",photoLink:"",name:"Михалыч",photoAlt:"",fromMeHideClass:"",text:"Отлично!",time:"15.04.2022 15:31",newMessageHideClass:"none-block",newMessageCount:0,onClick:e=>{e.preventDefault(),C(e)}}],L=[{element:".chat-wrapper",toMeClass:"message-to-me",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",time:"15.04.2022 12:37"}];function C(e){e.target.classList.contains("delete-chat-button")?console.log("удаление"):console.log("открытие чата")}function E(){new c(y).insertBlock("#app",!0),T.forEach((function(e){new o(e,"").insertBlock(e.element)})),B.forEach((function(e){new d(e,"").insertBlock(e.element)})),L.forEach((function(e){new p(e,"").insertBlock(e.element)}))}const q={title:"Регистрация"},A=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:""},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:""},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:""},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:""}],D=[{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"add-link",onClick:e=>{e.preventDefault(),s((function(){E()}))}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),R()}}];const M={title:"Вход"},S=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"",validationType:"",classList:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"",validationType:"",classList:""}],_=[{element:".buttons-wrapper",id:"",name:"Авторизоваться",classes:"add-link",onClick:e=>{e.preventDefault(),s((function(){E()}))}},{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"reg-link",onClick:e=>{e.preventDefault(),new a(q).insertBlock("#app",!0),A.forEach((function(e){new i(e).insertBlock(e.element)})),D.forEach((function(e){new l(e).insertBlock(e.element)}))}}];function R(){new a(M).insertBlock("#app",!0),S.forEach((function(e){new i(e,"").insertBlock(e.element)})),_.forEach((function(e){new l(e).insertBlock(e.element)}))}document.addEventListener("DOMContentLoaded",(function(){R()}))})();
//# sourceMappingURL=index.ce67dea5.js.map