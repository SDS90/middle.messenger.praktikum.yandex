(()=>{class e{TEMPLATE_REGULAR=/\{\{(.*?)\}\}/;templateBlock="";constructor(e){this.templateBlock=e}generateTemplate(e){return e&&this.templateBlock?this.changeTemplateKeys(e,this.templateBlock,this.TEMPLATE_REGULAR):""}changeTemplateKeys(e,t,n){const s=n.exec(t);if(s&&s[1]){const n=s[1];if(n in e){let i=e[n];i="object"!=typeof i&&"function"!=typeof i?i.toString():"",t=t.replace(s[0],i)}else t=t.replace(s[0],"")}return n.exec(t)?this.changeTemplateKeys(e,t,n):t}}class t{constructor(){this.listeners={}}on(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}off(e,t){if(!this.listeners[e])throw new Error(`Нет события: ${e}`);this.listeners[e]=this.listeners[e].filter((e=>e!==t))}emit(e,...t){if(!this.listeners[e])throw new Event(`Нет события: ${e}`);this.listeners[e].forEach((function(e){e(...t)}))}}class n{static EVENTS={INIT:"init",FLOW_CDM:"flow:component-did-mount",FLOW_CDU:"flow:component-did-update",FLOW_RENDER:"flow:render"};_element=null;constructor(e,s,i,r="div"){this.template=s,this.noTagName=i;const a=new t;this._meta={tagName:r,params:e},this.props=this._makePropsProxy(e),this.eventBus=()=>a,this._registerEvents(a),a.emit(n.EVENTS.INIT)}_registerEvents(e){e.on(n.EVENTS.INIT,this.init.bind(this)),e.on(n.EVENTS.FLOW_CDM,this._componentDidMount.bind(this)),e.on(n.EVENTS.FLOW_CDU,this._componentDidUpdate.bind(this)),e.on(n.EVENTS.FLOW_RENDER,this._render.bind(this))}_createResources(){const{tagName:e}=this._meta;this._element=this._createDocumentElement(e),this._element}init(){this._createResources(),this.eventBus().emit(n.EVENTS.FLOW_CDM)}_componentDidMount(){this.componentDidMount(),this.eventBus().emit(n.EVENTS.FLOW_RENDER)}componentDidMount(){}dispatchComponentDidMoun(){}_componentDidUpdate(e,t){this.componentDidUpdate(e,t)&&this._render()}componentDidUpdate(e,t){return!0}setProps=e=>{e&&Object.assign(this.props,e)};get element(){return this._element}_render(){const e=this.render();this._element&&(this._element.innerHTML=e)}render(){return new e(this.template).generateTemplate(this.props)}getContent(){return this.element}_makePropsProxy(e){const t=this;return new Proxy(e,{get:(e,t)=>"function"==typeof e[t]?e[t].bind(e):e[t],set:(e,s,i)=>(e[s]=i,t.eventBus().emit(n.EVENTS.FLOW_CDU,{...e},e),!0),deleteProperty(){throw new Error("Нет доступа")}})}_createDocumentElement(e){return document.createElement(e)}show(){const e=this.getContent();e&&(e.style.display="block")}hide(){const e=this.getContent();e&&(e.style.display="none")}insertBlock(e,t){let n=this.getContent();const s=document.querySelector(e);if(!n||!s)return{};this.noTagName||(n=n.children[0]);for(let e of s.querySelectorAll('[id=""]'))e.removeAttribute("id");return t&&(s.innerHTML=""),{inner:n,wrapper:s}}}const s={email:new RegExp(/^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_\.-]+)\.([a-z\.]{2,6})$/),login:new RegExp(/^[A-Za-z0-9_\.-]{3,20}$/),name:new RegExp(/^[A-ZА-Я][a-zA-Zа-яА-Я-]+$/),phone:new RegExp(/^\+?\d{10,15}$/),password:new RegExp(/^((?=.*?[A-Z])(?=.*?[0-9])\S{8,40})\S$/)},i=function(e){const t=e.getAttribute("data-validation-type"),n=e.getAttribute("data-error-text"),i=e.value,r=s[t],a=e.parentElement,l=a.querySelector(".error-text-block");return r&&!r.test(i)?(a.classList.add("error-input"),l&&(l.textContent=n||"Возникла ошибка при заполнении формы. Пожалуйста, проверьте введённые данные."),!1):(a.classList.remove("error-input"),l&&(l.textContent=""),!0)};class r extends n{constructor(e,t){t||(t='\n\t<div class="reg-form-page">\n\t\t<div class="reg-form-wrapper">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<form class="reg-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="reg-form-fieldset"></div>\n\t\t\t\t\t<div class="form-block info-block"></div>\n\t\t\t\t\t<div class="form-block buttons-wrapper"></div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);return n.inner&&n.wrapper&&n.wrapper.appendChild(n.inner),n}}function a(e,t){const n=document.querySelector(e);if(n&&function(e){const t=e.querySelectorAll(".form-block"),n=e.querySelector(".info-block");let s=!0,r="",a="";return n&&(n.textContent=""),t.forEach((function(e){const t=e.querySelector("input")||e.querySelector("textarea");if(t){const l=t.getAttribute("data-error-text");if(e.classList.contains("none-block")||i(t)||(s=!1),!t.value&&t.getAttribute("data-required")&&!e.classList.contains("none-block")){s=!1;const e=t.parentElement;e&&(e.classList.add("error-input"),e.querySelector(".error-text-block").textContent=l||"Обязательное поле."),n&&(n.textContent="Не все обязательные поля заполнены.")}"password"==t.name&&(r=t.value),"repeat_password"==t.name&&(a=t.value)}})),r&&a&&r!=a&&(s=!1,n.textContent="Пароли не совпадают."),s}(n)){const e=new FormData(n);console.log(...e),t&&t()}}class l extends n{constructor(e,t){t||(t='\n\t<div class="form-block {{classList}}">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="input-wrapper">\n\t\t\t<input class="form-control input-styles" data-required="{{required}}" data-error-text="{{errorText}}" \n\t\t\tdata-validation-type="{{validationType}}" id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">\n\t\t\t<div class="error-text-block"></div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner&&n.wrapper){const e=n.inner,t=n.wrapper,s=e.querySelector("input");s.addEventListener("focus",(function(){s.classList.add("focus-input")})),s.addEventListener("blur",(function(){s.classList.remove("focus-input"),i(s)})),t.appendChild(e)}return n}}class o extends n{constructor(e,t){t||(t='<button id="{{id}}" class="button-link {{classes}}">{{name}}</button>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner&&n.wrapper){const e=n.inner,t=n.wrapper;e.addEventListener("click",this.props.onClick),t.appendChild(e)}return n}}var c,d,p,u,m={};c=m,d="default",p=()=>ne,u=e=>ne=e,Object.defineProperty(c,d,{get:p,set:u,enumerable:!0,configurable:!0});class f extends n{constructor(e,t){t||(t='\n\t<div class="form-block">\n\t\t<textarea id="{{id}}"  data-required="{{required}}" name="{{name}}" value="{{value}}"></textarea>\n\t</div>\n\t'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner&&n.wrapper){const e=n.inner,t=n.wrapper,s=e.querySelector("textarea");s.addEventListener("focus",(function(){s.classList.add("focus-input")})),s.addEventListener("blur",(function(){s.classList.remove("focus-input")})),t.appendChild(e)}return n}}class h extends o{constructor(e,t){t||(t='\n<label for="{{id}}" title="Прикрепить файл" class="button-link {{classes}}">\n\t{{name}}\n\t<input class="load-image" hidden accept="image/*" type="file" id="{{id}}" value="{{value}}">\n</label>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner){n.inner.querySelector("input").addEventListener("change",this.props.onChange)}return n}}class v extends n{constructor(e,t,n=!1){t||(t='<a id="{{id}}" class="{{classes}}" href="{{href}}">{{name}}</a>'),super(e,t,n)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner&&n.wrapper){const e=n.inner,t=n.wrapper;e.addEventListener("click",this.props.onClick),t.appendChild(e)}return n}}class g extends v{constructor(e,t,n=!0){t||(t='<li><a id="{{id}}" class="{{classes}}" href="{{href}}">{{name}}</a></li>'),super(e,t,n)}}class w extends n{constructor(e,t){t||(t='\n\t<div class="chat-form-page clear">\n\t\t<div class="chat-list-column" id="chatList">\n\t\t\t<div class="profile-block clear"></div>\n\t\t\t<ul class="menu-list none-block" id="menuBlock"></ul>\n\t\t\t\x3c!--<form class="search-wrapper">\n\t\t\t\t<input class="input-styles search-input" type="text" placeholder="Поиск" name="search">\n\t\t\t</form> --\x3e\n\t\t\t<div class="chat-list"></div>\n\t\t</div>\n\t\t<div class="chat-full-block" id="chatFullBlock">\n\t\t\t<div class="chat-full-name"></div>\n\t\t\t<div class="select-chat-wrapper" id="selectChat">\n\t\t\t\t<div class="select-chat-cell">\n\t\t\t\t\t<span>Выберите чат</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="chat-wrapper" id="chatWrapper"></div>\n\t\t</div>\n\t</div>\n\t'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);return n.inner&&n.wrapper&&n.wrapper.appendChild(n.inner),n}}class k extends n{constructor(e,t){t||(t='\n\t<div class="chat-block" id="{{id}}" data-user-name="{{name}}">\n\t\t<div class="chat-photo-wrapper">\n\t\t\t<img class="chat-photo" src="{{photoLink}}" alt="{{photoAlt}}">\n\t\t</div>\n\t\t<div class="chat-name">{{name}}</div>\n\t\t<div class="chat-preview-text">\n\t\t\t<strong class="{{fromMeHideClass}}">Вы: </strong>\n\t\t\t<span>{{text}}</span>\n\t\t</div>\n\t\t<div class="chat-time">{{time}}</div>\n\t\t<div class="new-messages-info {{newMessageHideClass}}">{{newMessageCount}}</div>\n\t\t<a class="delete-chat-button" href="#">X</a>\n\t</div>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner&&n.wrapper){const e=n.inner,t=n.wrapper;e.addEventListener("click",this.props.onClick),t.appendChild(e)}return n}}class b extends n{constructor(e,t){t||(t="{{name}}"),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner&&n.wrapper){const e=n.inner;n.wrapper.appendChild(e)}return n}}class x extends n{constructor(e,t){t||(t='<div class="files-names">{{name}}</div>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner&&n.wrapper){const e=n.inner;n.wrapper.appendChild(e)}return n}}class y extends n{constructor(e,t){t||(t='\n\t<div class="chat-message-wrapper {{toMeClass}}">\n\t\t<div class="chat-message-block">\n\t\t\t<div class="chat-message-time">{{time}}</div>\n\t\t\t<div>\n\t\t\t\t{{text}}\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner&&n.wrapper){const e=n.inner;n.wrapper.prepend(e)}return n}}class E extends n{constructor(e,t){t||(t='\n\t<div class="warning-message-wrapper warning-on" id="{{id}}">\n\t\t<div class="warning-message-table">\n\t\t\t<div class="warning-message-block">\n\t\t\t\t<div class="warning-message">\n\t\t\t\t\t\t<span>{{MessageText}}</span>\n\t\t\t\t\t\t\x3c!--<div class="form-block">\n\t\t\t\t\t\t\t<label>Логин</label>\n\t\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t\t<input class="form-control input-styles" type="text">\n\t\t\t\t\t\t\t\t<div class="error-text-block none-block"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>--\x3e\n\t\t\t\t\t<div class="warning-buttons-wrapper"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);return n.inner&&n.wrapper&&n.wrapper.appendChild(n.inner),n}}class B extends n{constructor(e,t){t||(t='\n\t<div class="warning-message-wrapper warning-on">\n\t\t<div class="warning-message-table">\n\t\t\t<div class="warning-message-block">\n\t\t\t\t<div class="loader none-block">//убрать none-block для показа</div>\n\t\t\t\t<div class="error-message warning-message">\n\t\t\t\t\t<div class="error-message-header">{{title}}</div>\n\t\t\t\t\t<span>{{errorText}}</span>\n\t\t\t\t\t<div class="warning-buttons-wrapper">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner&&n.wrapper){const e=n.inner;n.wrapper.appendChild(e)}return n}}const L={title:"Ошибка 404",errorText:"Страница не найдена"},T=[{element:".warning-buttons-wrapper",id:"",name:"Назад",classes:"warning-add warning-button",onClick:e=>{e.preventDefault(),C()}}];let C=function(){window.history.back()};function q(e,t,n){e||(e=L),n||(n=T),t&&(C=t),document.title="Ошибка: "+e.title,new B(e).insertBlock("#app",!0),T.forEach((function(e){new o(e).insertBlock(e.element)}))}class _ extends n{constructor(e,t){t||(t='\n\t<label class="image-form-block" for="{{id}}">\n\t\t<input class="load-image" hidden accept="image/*" type="file" id="{{id}}">\n\t\t<img id="{{id}}" src="{{imageLink}}" alt="{{imageAlt}}" title="{{imageTitle}}">\n\t</label>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);return n.inner&&n.wrapper&&n.wrapper.appendChild(n.inner),n}}const D={title:""},M=[{element:".reg-form-fieldset",id:"photoImageUpload",imageLink:"#",imageAlt:"",imageTitle:""}],S=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:""},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:""},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:""}],A=[{element:".reg-form-fieldset",id:"changePasswordButton",name:"Изменить пароль",classes:"reg-link",onClick:e=>{e.preventDefault();let t=document.getElementById(e.target.getAttribute("id")).nextElementSibling;for(;t;)t.classList.remove("none-block"),t=t.nextElementSibling}}],N=[{element:".reg-form-fieldset",id:"oldPassword",name:"old_password",label:"Старый пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"}],I=[{element:".buttons-wrapper",id:"",name:"Изменить данные",classes:"add-link",onClick:e=>{e.preventDefault(),a(".reg-form",(function(){m.default()}))}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),m.default()}}];function P(){document.title="Мой профиль",window.history.pushState("","","profile"),new r(D).insertBlock("#app",!0),M.forEach((function(e){new _(e).insertBlock(e.element)})),S.forEach((function(e){new l(e).insertBlock(e.element)})),A.forEach((function(e){new o(e).insertBlock(e.element)})),N.forEach((function(e){new l(e).insertBlock(e.element)})),I.forEach((function(e){new o(e).insertBlock(e.element)}))}const R={};let F;const W={element:".chat-full-name",name:""},U={title:""};let O,H;const V={element:".chat-send-box",name:""},$={element:".chat-send-box",id:"",name:" >",classes:"chat-send-button",onClick:e=>{e.preventDefault(),a(".chat-send-box",(function(){te()}))}};let z;const Z={element:".chat-send-box",id:"addFileToMessage",name:"📎",classes:"add-file-button",value:"",onClick:e=>e,onChange:e=>{if(e.target&&e.target.value){const t=e.target.value.split("\\");H.setProps({name:t[t.length-1]})}}},j=[{element:".menu-list",id:"",classes:"create-chat-link",name:"Создать чат",href:"#",onClick:e=>{e.preventDefault(),q({title:"Ошибка 400",errorText:"Неверный запрос"},void 0)}},{element:".menu-list",id:"",classes:"create-chat-link",name:"Мой профиль",href:"profile",onClick:e=>{e.preventDefault(),P()}},{element:".menu-list",id:"",classes:"create-chat-link",name:"Выход",href:"authorization",onClick:e=>{e.preventDefault(),de()}}],K=[{element:".profile-block",id:"",classes:"create-chat-link",name:"Меню",href:"#",onClick:e=>{e.preventDefault(),document.getElementById("menuBlock").classList.toggle("none-block")}},{element:".chat-full-name",id:"",classes:"chat-back-button",name:"Закрыть",href:"#",onClick:e=>{e.preventDefault(),document.getElementById("selectChat").classList.remove("none-block"),document.getElementById("chatList").classList.remove("chat-full-show"),document.getElementById("chatFullBlock").classList.remove("chat-full-show")}}],G=[{element:".chat-list",id:"1",photoLink:"",name:"Андрей Андрейченков",photoAlt:"",fromMeHideClass:"none-block",text:"Круто!",time:"15.04.2022 15:31",newMessageHideClass:"",newMessageCount:10,onClick:e=>{e.preventDefault(),ee(e)}},{element:".chat-list",id:"2",photoLink:"",name:"Михалыч",photoAlt:"",fromMeHideClass:"",text:"Отлично!",time:"15.04.2022 15:31",newMessageHideClass:"none-block",newMessageCount:0,onClick:e=>{e.preventDefault(),ee(e)}}],X=[{element:".chat-wrapper",toMeClass:"message-to-me",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",time:"15.04.2022 12:37"},{element:".chat-wrapper",toMeClass:"message-to-me",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",time:"15.04.2022 12:37"},{element:".chat-wrapper",toMeClass:"",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",time:"15.04.2022 12:37"}],J={element:".chat-send-box",id:"chatSendBox",name:"message",value:"",required:!0},Q={element:"#app",id:"deleteWarningMessage",MessageText:"Вы действительно хотите удалить этот чат?"},Y=[{element:".warning-buttons-wrapper",id:"",name:"Да",classes:"warning-add warning-button",onClick:e=>{e.preventDefault(),document.getElementById("deleteWarningMessage").remove()}},{element:".warning-buttons-wrapper",id:"",name:"Нет",classes:"warning-back warning-button",onClick:e=>{e.preventDefault(),document.getElementById("deleteWarningMessage").remove()}}];function ee(e){const t=e.target.closest(".chat-block"),n=document.getElementById("chatWrapper");t&&n&&(e.target.classList.contains("delete-chat-button")?(new E(Q).insertBlock("#app"),Y.forEach((function(e){new o(e,"").insertBlock(e.element)}))):(document.getElementById("chatList").classList.toggle("chat-full-show"),document.getElementById("menuBlock").classList.add("none-block"),document.getElementById("selectChat").classList.add("none-block"),document.getElementById("chatFullBlock").classList.toggle("chat-full-show"),n.innerHTML="",X.forEach((function(e){new y(e,"").insertBlock(e.element)})),te(),n.scrollTop=n.scrollHeight,F&&F.setProps({name:t.getAttribute("data-user-name")})))}function te(){O.setProps({value:""}),H.setProps({name:""})}function ne(){document.title="Чат",window.history.pushState("","","chat"),new w(R).insertBlock("#app",!0),F=new b(W),F.insertBlock(".chat-full-name"),K.forEach((function(e){new v(e,"").insertBlock(e.element)})),j.forEach((function(e){new g(e,"").insertBlock(e.element)})),G.forEach((function(e){new k(e,"").insertBlock(e.element)})),new r(U,'<form class="chat-send-box"></form>').insertBlock(".chat-full-block"),new o($).insertBlock(".chat-send-box"),z=new h(Z,""),z.insertBlock(".chat-send-box"),O=new f(J),O.insertBlock(".chat-send-box"),H=new x(V),H.insertBlock(".chat-send-box")}const se={title:"Регистрация"},ie=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:""},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:""},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:""},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:""}],re=[{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"add-link",onClick:e=>{e.preventDefault(),a(".reg-form",(function(){m.default()}))}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),de()}}];function ae(){document.title="Регистрация",window.history.pushState("","","registration"),new r(se).insertBlock("#app",!0),ie.forEach((function(e){new l(e).insertBlock(e.element)})),re.forEach((function(e){new o(e).insertBlock(e.element)}))}const le={title:"Вход"},oe=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Обязательное поле",validationType:"",classList:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Обязательное поле",validationType:"",classList:""}],ce=[{element:".buttons-wrapper",id:"",name:"Авторизоваться",classes:"add-link",onClick:e=>{e.preventDefault(),a(".reg-form",(function(){m.default()}))}},{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"reg-link",onClick:e=>{e.preventDefault(),ae()}}];function de(){document.title="Вход",window.history.pushState("","","/"),new r(le).insertBlock("#app",!0),oe.forEach((function(e){new l(e,"").insertBlock(e.element)})),ce.forEach((function(e){new o(e).insertBlock(e.element)}))}document.addEventListener("DOMContentLoaded",(function(){switch(window.location.pathname){case"/":de();break;case"/chat":m.default();break;case"/registration":ae();break;case"/profile":P();break;default:q(L,C,T)}}))})();
//# sourceMappingURL=index.051ad3b0.js.map
