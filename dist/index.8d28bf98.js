class e{TEMPLATE_REGULAR=/\{\{(.*?)\}\}/;templateBlock="";constructor(e){this.templateBlock=e}generateTemplate(e){return e&&this.templateBlock?this.changeTemplateKeys(e,this.templateBlock,this.TEMPLATE_REGULAR):""}changeTemplateKeys(e,t,n){let i=n.exec(t);if(i&&i[1]){const n=i[1];for(let s in e)if(s==i[1]){let s=e[n];s="object"!=typeof s&&"function"!=typeof s?s.toString():"",t=t.replace(i[0],s)}}return n.exec(t)?this.changeTemplateKeys(e,t,n):t}}class t{constructor(){this.listeners={}}on(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}off(e,t){if(!this.listeners[e])throw new Error(`Нет события: ${e}`);this.listeners[e]=this.listeners[e].filter((e=>e!==t))}emit(e,...t){if(!this.listeners[e])throw new Event(`Нет события: ${e}`);this.listeners[e].forEach((function(e){e(...t)}))}}class n{static EVENTS={INIT:"init",FLOW_CDM:"flow:component-did-mount",FLOW_CDU:"flow:component-did-update",FLOW_RENDER:"flow:render"};_element=null;constructor(e,i,s="div"){this.template=i;const r=new t;this._meta={tagName:s,params:e},this.props=this._makePropsProxy(e),this.eventBus=()=>r,this._registerEvents(r),r.emit(n.EVENTS.INIT)}_registerEvents(e){e.on(n.EVENTS.INIT,this.init.bind(this)),e.on(n.EVENTS.FLOW_CDM,this._componentDidMount.bind(this)),e.on(n.EVENTS.FLOW_CDU,this._componentDidUpdate.bind(this)),e.on(n.EVENTS.FLOW_RENDER,this._render.bind(this))}_createResources(){const{tagName:e}=this._meta;this._element=this._createDocumentElement(e)}init(){this._createResources(),this.eventBus().emit(n.EVENTS.FLOW_CDM)}_componentDidMount(){this.componentDidMount(),this.eventBus().emit(n.EVENTS.FLOW_RENDER)}componentDidMount(){}dispatchComponentDidMoun(){}_componentDidUpdate(e,t){this.componentDidUpdate(e,t)&&this._render()}componentDidUpdate(e,t){let n=JSON.stringify(e);JSON.stringify(t);return n!=t}setProps=e=>{e&&Object.assign(this.props,e)};get element(){return this._element}_render(){const e=this.render();this._element&&(this._element=e)}render(){return new e(this.template).generateTemplate(this.props)}getContent(){return this.element}_makePropsProxy(e){const t=this;return new Proxy(e,{get:(e,t)=>"function"==typeof e[t]?e[t].bind(e):e[t],set:(e,i,s)=>(e[i]=s,t.eventBus().emit(n.EVENTS.FLOW_CDU,{...e},e),!0),deleteProperty(e,t){throw new Error("Нет доступа")}})}_createDocumentElement(e){return document.createElement(e)}show(){let e=this.getContent();e&&(e.style.display="block")}hide(){let e=this.getContent();e&&(e.style.display="none")}insertBlock(e,t){const n=this.getContent(),i=document.querySelector(e);if(!n||!i)return{};for(let e in this.props)console.log(e+": "+this.props[e]),this.props[e]||n.removeAttribute(e);return t&&(i.innerHTML=""),{inner:n,wrapper:i}}}const i={email:new RegExp(/^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_\.-]+)\.([a-z\.]{2,6})$/),login:new RegExp(/^[A-Za-z0-9_\.-]{3,20}$/),name:new RegExp(/^[A-ZА-Я][a-zA-Zа-яА-Я-]+$/),phone:new RegExp(/^\+?\d{10,15}$/),password:new RegExp(/^((?=.*?[A-Z])(?=.*?[0-9])\S{8,40})\S$/)},s=function(e){const t=e.getAttribute("data-validation-type"),n=e.getAttribute("data-error-text"),s=e.value,r=i[t],a=e.parentElement,l=a.querySelector(".error-text-block");return r&&!r.test(s)?(a.classList.add("error-input"),l&&(l.textContent=n||"Возникла ошибка при заполнении формы. Пожалуйста, проверьте введённые данные."),!1):(a.classList.remove("error-input"),l&&(l.textContent=""),!0)};class r extends n{constructor(e,t){t||(t='\n\t<div class="reg-form-page">\n\t\t<div class="reg-form-wrapper">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<form class="reg-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="reg-form-fieldset"></div>\n\t\t\t\t\t<div class="form-block info-block"></div>\n\t\t\t\t\t<div class="form-block buttons-wrapper"></div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);return n.inner&&n.wrapper&&n.wrapper.appendChild(n.inner),n}}function a(e,t){const n=document.querySelector(e);if(n&&function(e){const t=e.querySelectorAll(".form-block"),n=e.querySelector(".info-block");let i=!0,r="",a="";return n&&(n.textContent=""),t.forEach((function(e){let t=e.querySelector("input")||e.querySelector("textarea");t&&(e.classList.contains("none-block")||s(t)||(i=!1),t.value||!t.getAttribute("data-required")||e.classList.contains("none-block")||(i=!1,n&&(n.textContent="Не все обязательные поля заполнены.")),"password"==t.name&&(r=t.value),"repeat_password"==t.name&&(a=t.value))})),r&&a&&r!=a&&(i=!1,n.textContent="Пароли не совпадают."),i}(n)){const e=new FormData(n);console.log(...e),t&&t()}}class l extends n{constructor(e,t){t||(t='\n\t<div class="form-block {{classList}}">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="input-wrapper">\n\t\t\t<input class="form-control input-styles" data-required="{{required}}" data-error-text="{{errorText}}" data-validation-type="{{validationType}}" id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">\n\t\t\t<div class="error-text-block"></div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner,t=n.wrapper,i=e.querySelector("input");i.addEventListener("focus",(function(){i.classList.add("focus-input")})),i.addEventListener("blur",(function(){i.classList.remove("focus-input"),s(i)})),t.appendChild(e)}return n}}class o extends n{constructor(e,t){t||(t='<button id="{{id}}" class="button-link {{classes}}">{{name}}</button>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner,t=n.wrapper;e.addEventListener("click",this.props.onClick),t.appendChild(e)}return n}}class c extends n{constructor(e,t){t||(t='\n\t<div class="form-block">\n\t\t<textarea id="{{id}}"  data-required="{{required}}" name="{{name}}"></textarea>\n\t</div>\n\t'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner,t=n.wrapper,i=e.querySelector("textarea");i.addEventListener("focus",(function(){i.classList.add("focus-input")})),i.addEventListener("blur",(function(){i.classList.remove("focus-input")})),t.appendChild(e)}return n}}class d extends n{constructor(e,t){t||(t='<a id="{{id}}" class="{{classes}}" href="{{href}}">{{name}}</a>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner,t=n.wrapper;e.addEventListener("click",this.props.onClick),t.appendChild(e)}return n}}class p extends n{constructor(e,t){t||(t='\n\t<div class="chat-form-page clear">\n\t\t<div class="chat-list-column">\n\t\t\t<div class="profile-block clear"></div>\n\t\t\t\x3c!--<form class="search-wrapper">\n\t\t\t\t<input class="input-styles search-input" type="text" placeholder="Поиск" name="search">\n\t\t\t</form> --\x3e\n\t\t\t<div class="chat-list"></div>\n\t\t</div>\n\t\t<div class="chat-full-block">\n\t\t\t<div class="chat-full-name">{{chatUserName}}</div>\n\t\t\t<div class="select-chat-wrapper" id="selectChat">\n\t\t\t\t<div class="select-chat-cell">\n\t\t\t\t\t<span>Выберите чат</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="chat-wrapper"></div>\n\t\t</div>\n\t</div>\n\t'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);return n.inner&&n.wrapper&&n.wrapper.appendChild(n.inner),n}}class m extends n{constructor(e,t){t||(t='\n\t<div class="chat-block" id="{{id}}">\n\t\t<div class="chat-photo-wrapper">\n\t\t\t<img class="chat-photo" src="{{photoLink}}" alt="{{photoAlt}}">\n\t\t</div>\n\t\t<div class="chat-name">{{name}}</div>\n\t\t<div class="chat-preview-text">\n\t\t\t<strong class="{{fromMeHideClass}}">Вы: </strong>\n\t\t\t<span>{{text}}</span>\n\t\t</div>\n\t\t<div class="chat-time">{{time}}</div>\n\t\t<div class="new-messages-info {{newMessageHideClass}}">{{newMessageCount}}</div>\n\t\t<a class="delete-chat-button" href="#">X</a>\n\t</div>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner,t=n.wrapper;e.addEventListener("click",this.props.onClick),t.appendChild(e)}return n}}class u extends n{constructor(e,t){t||(t='\n\t<div class="chat-message-wrapper {{toMeClass}}">\n\t\t<div class="chat-message-block">\n\t\t\t<div class="chat-message-time">{{time}}</div>\n\t\t\t<div>\n\t\t\t\t{{text}}\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner;n.wrapper.prepend(e)}return n}}class f extends n{constructor(e,t){t||(t='\n\t<div class="warning-message-wrapper warning-on" id="{{id}}">\n\t\t<div class="warning-message-table">\n\t\t\t<div class="warning-message-block">\n\t\t\t\t<div class="warning-message">\n\t\t\t\t\t\t<span>{{MessageText}}</span>\n\t\t\t\t\t\t\x3c!--<div class="form-block">\n\t\t\t\t\t\t\t<label>Логин</label>\n\t\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t\t<input class="form-control input-styles" type="text">\n\t\t\t\t\t\t\t\t<div class="error-text-block none-block"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>--\x3e\n\t\t\t\t\t<div class="warning-buttons-wrapper"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);return n.inner&&n.wrapper&&n.wrapper.appendChild(n.inner),n}}class v extends n{constructor(e,t){t||(t='\n\t<div class="warning-message-wrapper warning-on">\n\t\t<div class="warning-message-table">\n\t\t\t<div class="warning-message-block">\n\t\t\t\t<div class="loader none-block">//убрать none-block для показа</div>\n\t\t\t\t<div class="error-message warning-message">\n\t\t\t\t\t<div class="error-message-header">{{title}}</div>\n\t\t\t\t\t<span>{{errorText}}</span>\n\t\t\t\t\t<div class="warning-buttons-wrapper">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);if(n.inner&&n.wrapper){let e=n.inner;n.wrapper.appendChild(e)}return n}}const h={title:"Ошибка 404",errorText:"Страница не найдена"},g=[{element:".warning-buttons-wrapper",id:"",name:"Назад",classes:"warning-add warning-button",onClick:e=>{e.preventDefault(),$()}}];function w(){var e;e=g,document.title="Ошибка",new v(h).insertBlock("#app",!0),e.forEach((function(e){new o(e).insertBlock(e.element)}))}class k extends n{constructor(e,t){t||(t='\n\t<label class="image-form-block" for="{{id}}">\n\t\t<input class="load-image" hidden accept="image/*" type="file" id="{{id}}">\n\t\t<img id="{{id}}" src="{{imageLink}}" alt="{{imageAlt}}" title="{{imageTitle}}">\n\t</label>'),super(e,t)}insertBlock(e,t){let n=super.insertBlock(e,t);return n.inner&&n.wrapper&&n.wrapper.appendChild(n.inner),n}}const b={title:""},x=[{element:".reg-form-fieldset",id:"photoImageUpload",imageLink:"#",imageAlt:"",imageTitle:""}],E=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:""},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:""},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:""}],y=[{element:".reg-form-fieldset",id:"changePasswordButton",name:"Изменить пароль",classes:"reg-link",onClick:e=>{e.preventDefault();let t=document.getElementById(e.target.getAttribute("id")).nextElementSibling;for(;t;)t.classList.remove("none-block"),t=t.nextElementSibling}}],T=[{element:".reg-form-fieldset",id:"oldPassword",name:"old_password",label:"Старый пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"}],B=[{element:".buttons-wrapper",id:"",name:"Изменить данные",classes:"add-link",onClick:e=>{e.preventDefault(),a(".reg-form",(function(){O()}))}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),O()}}];const C={chatUserName:"Андрей Андрейченков"},L={title:""},q={element:".chat-send-box",id:"",name:" >",classes:"chat-send-button",onClick:e=>{e.preventDefault(),a(".chat-send-box",(function(){document.getElementById("chatSendBox").value=""}))}},_={element:".chat-send-box",id:"addFileToMessage",name:"📎",classes:"add-file-button",onClick:e=>{}},D=[{element:".profile-block",id:"",classes:"create-chat-link",name:"Создать чат",href:"#",onClick:e=>{e.preventDefault(),w()}},{element:".profile-block",id:"",classes:"profile-link",name:"Мой профиль &gt;",href:"#",onClick:e=>{e.preventDefault(),document.title="Мой профиль",new r(b).insertBlock("#app",!0),x.forEach((function(e){new k(e).insertBlock(e.element)})),E.forEach((function(e){new l(e).insertBlock(e.element)})),y.forEach((function(e){new o(e).insertBlock(e.element)})),T.forEach((function(e){new l(e).insertBlock(e.element)})),B.forEach((function(e){new o(e).insertBlock(e.element)}))}},{element:".chat-full-name",id:"",classes:"chat-back-button",name:"Выход",href:"#",onClick:e=>{e.preventDefault(),$()}}],M=[{element:".chat-list",id:"1",photoLink:"",name:"Андрей Андрейченков",photoAlt:"",fromMeHideClass:"none-block",text:"Круто!",time:"15.04.2022 15:31",newMessageHideClass:"",newMessageCount:10,onClick:e=>{e.preventDefault(),U(e)}},{element:".chat-list",id:"2",photoLink:"",name:"Михалыч",photoAlt:"",fromMeHideClass:"",text:"Отлично!",time:"15.04.2022 15:31",newMessageHideClass:"none-block",newMessageCount:0,onClick:e=>{e.preventDefault(),U(e)}}],S=[{element:".chat-wrapper",toMeClass:"message-to-me",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",time:"15.04.2022 12:37"},{element:".chat-wrapper",toMeClass:"message-to-me",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",time:"15.04.2022 12:37"},{element:".chat-wrapper",toMeClass:"",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",time:"15.04.2022 12:37"}],N={element:".chat-send-box",id:"chatSendBox",name:"message",required:!0},A={element:"#app",id:"deleteWarningMessage",MessageText:"Вы действительно хотите удалить этот чат?"},R=[{element:".warning-buttons-wrapper",id:"",name:"Да",classes:"warning-add warning-button",onClick:e=>{e.preventDefault(),document.getElementById("deleteWarningMessage").remove()}},{element:".warning-buttons-wrapper",id:"",name:"Нет",classes:"warning-back warning-button",onClick:e=>{e.preventDefault(),document.getElementById("deleteWarningMessage").remove()}}];function U(e){e.target.classList.contains("delete-chat-button")?(new f(A).insertBlock("#app"),R.forEach((function(e){new o(e,"").insertBlock(e.element)}))):(document.getElementById("selectChat").classList.add("none-block"),S.forEach((function(e){new u(e,"").insertBlock(e.element)})))}function O(){document.title="Чат",new p(C).insertBlock("#app",!0),D.forEach((function(e){new d(e,"").insertBlock(e.element)})),M.forEach((function(e){new m(e,"").insertBlock(e.element)})),new r(L,'<form class="chat-send-box"></form>').insertBlock(".chat-full-block"),new o(q).insertBlock(".chat-send-box"),new o(_,'<label for="{{id}}" class="button-link {{classes}}">{{name}}<input class="load-image" hidden accept="image/*" type="file" id="{{id}}"></label>').insertBlock(".chat-send-box"),new c(N).insertBlock(".chat-send-box")}const P={title:"Регистрация"},I=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:""},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:""},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:""},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:""}],W=[{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"add-link",onClick:e=>{e.preventDefault(),a(".reg-form",(function(){O()}))}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),$()}}];const F={title:"Вход"},V=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"",validationType:"",classList:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"",validationType:"",classList:""}],H=[{element:".buttons-wrapper",id:"",name:"Авторизоваться",classes:"add-link",onClick:e=>{e.preventDefault(),a(".reg-form",(function(){O()}))}},{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"reg-link",onClick:e=>{e.preventDefault(),document.title="Регистрация",new r(P).insertBlock("#app",!0),I.forEach((function(e){new l(e).insertBlock(e.element)})),W.forEach((function(e){new o(e).insertBlock(e.element)}))}}];function $(){document.title="Вход",new r(F).insertBlock("#app",!0),V.forEach((function(e){new l(e,"").insertBlock(e.element)})),H.forEach((function(e){new o(e).insertBlock(e.element)}))}document.addEventListener("DOMContentLoaded",(function(){$()}));
//# sourceMappingURL=index.8d28bf98.js.map
