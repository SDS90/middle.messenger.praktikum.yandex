(()=>{class e{TEMPLATE_REGULAR=/\{\{(.*?)\}\}/;templateBlock="";constructor(e){this.templateBlock=e}generateTemplate(e){return e&&this.templateBlock?this.changeTemplateKeys(e,this.templateBlock,this.TEMPLATE_REGULAR):""}changeTemplateKeys(e,t,n){const s=n.exec(t);if(s&&s[1]){const n=s[1];if(n in e){let r=e[n];r="object"!=typeof r&&"function"!=typeof r?r.toString():"",t=t.replace(s[0],r)}else t=t.replace(s[0],"")}return n.exec(t)?this.changeTemplateKeys(e,t,n):t}}class t{constructor(){this.listeners={}}on(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}off(e,t){if(!this.listeners[e])throw new Error(`Нет события: ${e}`);this.listeners[e]=this.listeners[e].filter((e=>e!==t))}emit(e,...t){if(!this.listeners[e])throw new Event(`Нет события: ${e}`);this.listeners[e].forEach((function(e){e(...t)}))}}class n{static EVENTS={INIT:"init",FLOW_CDM:"flow:component-did-mount",FLOW_CDU:"flow:component-did-update",FLOW_RENDER:"flow:render"};_element=null;constructor(e,s,r,a="div"){this.template=s,this.noTagName=r;const o=new t;this._meta={tagName:a,params:e},this.props=this._makePropsProxy(e),this.eventBus=()=>o,this._registerEvents(o),o.emit(n.EVENTS.INIT)}_registerEvents(e){e.on(n.EVENTS.INIT,this.init.bind(this)),e.on(n.EVENTS.FLOW_CDM,this._componentDidMount.bind(this)),e.on(n.EVENTS.FLOW_CDU,this._componentDidUpdate.bind(this)),e.on(n.EVENTS.FLOW_RENDER,this._render.bind(this))}_createResources(){const{tagName:e}=this._meta;this._element=this._createDocumentElement(e),this._element}init(){this._createResources(),this.eventBus().emit(n.EVENTS.FLOW_CDM)}_componentDidMount(){this.componentDidMount(),this.eventBus().emit(n.EVENTS.FLOW_RENDER)}componentDidMount(){}dispatchComponentDidMoun(){}_componentDidUpdate(e,t){this.componentDidUpdate(e,t)&&this._render()}componentDidUpdate(e,t){return!0}setProps=e=>{e&&Object.assign(this.props,e)};get element(){return this._element}_render(){const e=this.render();this._element&&(this._element.innerHTML=e)}render(){return new e(this.template).generateTemplate(this.props)}getContent(){return this.element}_makePropsProxy(e){const t=this;return new Proxy(e,{get:(e,t)=>"function"==typeof e[t]?e[t].bind(e):e[t],set:(e,s,r)=>(e[s]=r,t.eventBus().emit(n.EVENTS.FLOW_CDU,{...e},e),!0),deleteProperty(){throw new Error("Нет доступа")}})}_createDocumentElement(e){return document.createElement(e)}show(){const e=this.getContent();e&&(e.style.display="block")}hide(){const e=this.getContent();e&&(e.style.display="none")}destroy(){this._element.remove(),this.onDestroy()}onDestroy(){}insertBlock(e,t,n){let s=this.getContent();const r=document.querySelector(e);if(!s||!r)return{};this.noTagName&&(s=s.children[0]);for(let e of r.querySelectorAll('[id=""]'))e.removeAttribute("id");return t&&(r.innerHTML=""),n?r.prepend(s):r.appendChild(s),{inner:s,wrapper:r}}}const s={email:new RegExp(/^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_\.-]+)\.([a-z\.]{2,6})$/),login:new RegExp(/^[A-Za-z0-9_\.-]{3,20}$/),name:new RegExp(/^[A-ZА-Я][a-zA-Zа-яА-Я-]+$/),phone:new RegExp(/^\+?\d{10,15}$/),password:new RegExp(/^((?=.*?[A-Z])(?=.*?[0-9])\S{8,40})\S$/)},r=function(e){const t=e.getAttribute("data-validation-type"),n=e.getAttribute("data-error-text"),r=e.value,a=s[t],o=e.parentElement,i=o.querySelector(".error-text-block");return a&&!a.test(r)?(o.classList.add("error-input"),i&&(i.textContent=n||"Возникла ошибка при заполнении формы. Пожалуйста, проверьте введённые данные."),!1):(o.classList.remove("error-input"),i&&(i.textContent=""),!0)};class a extends n{constructor(e,t){t||(t='\n\t<div class="reg-form-page">\n\t\t<div class="reg-form-wrapper">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<form class="reg-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="reg-form-fieldset"></div>\n\t\t\t\t\t<div class="form-block info-block" id="formInfoBlock"></div>\n\t\t\t\t\t<div class="form-block buttons-wrapper"></div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t</div>'),super(e,t)}}function o(e,t){const n=document.querySelector(e);if(n&&function(e){const t=e.querySelectorAll(".form-block"),n=e.querySelector(".info-block");let s=!0,a="",o="";return n&&(n.textContent=""),t.forEach((function(e){const t=e.querySelector("input")||e.querySelector("textarea")||e.querySelector("select");if(t){const i=t.getAttribute("data-error-text");if(e.classList.contains("none-block")||r(t)||(s=!1),!t.value&&t.getAttribute("data-required")&&!e.classList.contains("none-block")){s=!1;const e=t.closest(".wrapper-element");e&&(e.classList.add("error-input"),e.querySelector(".error-text-block").textContent=i||"Обязательное поле."),n&&(n.textContent="Не все обязательные поля заполнены.")}"password"==t.name&&(a=t.value),"repeat_password"==t.name&&(o=t.value)}})),a&&o&&a!=o&&(s=!1,n.textContent="Пароли не совпадают."),s}(n)){const e=new FormData(n);if(console.log(...e),t){let n={};for(let t of e.keys())n[t]=e.get(t);t(n)}}}class i extends n{constructor(e,t){t||(t='\n\t<div class="form-block {{classList}}">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="input-wrapper wrapper-element">\n\t\t\t<input class="form-control input-styles" data-required="{{required}}" data-error-text="{{errorText}}" \n\t\t\tdata-validation-type="{{validationType}}" id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">\n\t\t\t<div class="error-text-block"></div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t),s=this;if(n.inner){const e=n.inner.querySelector("input");e&&(e.addEventListener("focus",(function(){this.classList.add("focus-input")})),e.addEventListener("blur",(function(e){this.classList.remove("focus-input"),s.props.onBlur(e),r(this)})))}return n}}class l extends n{constructor(e,t){t||(t='<button id="{{id}}" class="button-link {{classes}}">{{name}}</button>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);return n.inner&&(n.inner.addEventListener("click",this.props.onClick),n.inner.addEventListener("touchstart",this.props.onClick)),n}}var c=class{constructor(e,t,n){this.pathname=e,this.blockClass=t,this.block=null,this.props=n}getPathname(){return this.pathname}leave(){this.block&&Object.keys(this.block).length&&this.block.destroy()}match(e){return t=e,n=this.pathname,t===n;var t,n}render(){this.block=new this.blockClass,function(e,t){const n=document.querySelector(e)}(this.props.rootQuery,this.block)}};class d{constructor(e){if(d.__instance)return d.__instance;this.routes=[],this._pathnames=[],this._unprotectedPaths=[],this.history=window.history,this._currentRoute=null,this._rootQuery=e,this._onRouteCallback=()=>{},d.__instance=this}get currentRoute(){return this._currentRoute}use(e,t){const n=new c(e,t,{rootQuery:this._rootQuery});return this.routes.push(n),this._pathnames.push(e),this}_hasRoute(e){return this._pathnames.includes(e)?e:"*"}start(){window.onpopstate=()=>{const e=this._hasRoute(window.location.pathname);this._onRoute(e)};const e=this._hasRoute(window.location.pathname);this._onRoute(e)}_onRoute(e){const t=this.getRoute(e);t&&(this._currentRoute&&this._currentRoute.leave(),this._currentRoute=t,t.render(),this._unprotectedPaths.includes(e)||this._onRouteCallback())}onRoute(e){return this._onRouteCallback=e,this}setUnprotectedPaths(e){return this._unprotectedPaths=e,this}go(e){this.history.pushState({},"",e),this._onRoute(e)}back(){this.history.back()}forward(){this.history.forward()}getRoute(e){return this.routes.find((t=>t.match(e)))}getLocationPathname(){return window.location.pathname}}const u=new d("#app"),h="GET",p="POST",m="PUT",f="DELETE";var g=new class{get=(e,t={})=>this.request(e,{...t,method:h},t.timeout);post=(e,t={})=>this.request(e,{...t,method:p},t.timeout);put=(e,t={})=>this.request(e,{...t,method:m},t.timeout);delete=(e,t={})=>this.request(e,{...t,method:f},t.timeout);request=(e,t={},n=5e3)=>new Promise((function(s,r){const a=new XMLHttpRequest;t.method==h&&t.data&&"object"==typeof t.data?a.open(t.method,function(e){let t="";if("object"==typeof e){t="";for(let n in e)t+=""==t?"?":"&",t=t+n+"="+e[n]}return t}(t.data)):a.open(t.method,e);for(let e in t.headers)a.setRequestHeader(e,t.headers[e]);t.withCredentials&&(a.withCredentials=!0),a.onload=function(){s(a)},a.onabort=r,a.onerror=r,a.timeout=n,a.ontimeout=r,t.method!==h&&t.data?a.send(t.data):a.send()}))};const v={"Content-type":"application/json"};var w=class{constructor(e,t,n){this.http=g,this.baseHref=e||"https://ya-praktikum.tech/api/v2",this.path=t||"",this.headers=v}getPath(){return this.baseHref+this.path}handleOptions(e){const t=e||{};return e.headers?t.headers=e.headers:t.headers=this.headers,t}handleResponse(e){if("OK"==e.response)return{ok:!0};return JSON.parse(e.response)}getHeaders(){return this.headers}get(e,t){return this.http.get(this.getPath()+e,this.handleOptions(t)).then(this.handleResponse)}post(e,t){return this.http.post(this.getPath()+e,this.handleOptions(t)).then(this.handleResponse)}put(e,t){return this.http.put(this.getPath()+e,this.handleOptions(t)).then(this.handleResponse)}delete(e,t){return this.http.delete(this.getPath()+e,this.handleOptions(t)).then(this.handleResponse)}};var k=new class extends w{constructor(){super("","/auth")}signIn(e){return this.post("/signin",{withCredentials:!0,data:JSON.stringify(e)})}signUp(e){return this.post("/signup",{data:JSON.stringify(e)})}checkAuth(){return this.get("/user",{withCredentials:!0})}signOut(){return this.post("/logout",{withCredentials:!0})}};function b(){document.getElementById("app").classList.add("loading")}function C(){document.getElementById("app").classList.remove("loading")}function y(e,t,n){e.error&&t?e.reason?t(e.reason):t(e.error):n&&u.go(n),C()}function E(e,t,n){e.response&&t?t(e.response):u.go(n),C()}var B=new class{signIn(e,t){return b(),k.signIn(e).then((e=>{y(e,t,"/messenger")})).catch((e=>{console.error(e),E(e,t,"/500")}))}signUp(e,t){return b(),k.signUp(e).then((e=>{y(e,t,"/messenger")})).catch((e=>{console.error(e),E(e,t,"/500")}))}signOut(){return b(),k.signOut().then((e=>{C(),u.go("/")}))}checkAuth(e){return k.checkAuth().then((t=>{e(t)})).catch((e=>{console.error(e),C(),u.go("/")}))}};const x={title:"Вход"},T=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Обязательное поле",validationType:"",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Обязательное поле",validationType:"",classList:"",onBlur:e=>{}}],L=[{element:".buttons-wrapper",id:"",name:"Авторизоваться",classes:"add-link",onClick:e=>{e.preventDefault(),o(".reg-form",(function(e){B.signIn(e,(function(e){document.getElementById("formInfoBlock").textContent=e}))}))}},{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"reg-link",onClick:e=>{e.preventDefault(),u.go("/sign-up")}}];function _(){document.title="Вход",new a(x).insertBlock("#app",!0),T.forEach((function(e){new i(e,"").insertBlock(e.element)})),L.forEach((function(e){new l(e).insertBlock(e.element)}))}class U extends n{constructor(e,t){t||(t='\n\t<div class="form-block">\n\t\t<textarea id="{{id}}"  data-required="{{required}}" name="{{name}}" value="{{value}}"></textarea>\n\t</div>\n\t'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner){const e=n.inner.querySelector("textarea");e&&(e.addEventListener("focus",(function(){this.classList.add("focus-input")})),e.addEventListener("blur",(function(){this.classList.remove("focus-input")})))}return n}}class I extends n{constructor(e,t,n=!0){t||(t='\n\t<div class="form-block {{classList}}">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="select-wrapper  wrapper-element clear">\n\t\t\t<div class="select-block">\n\t\t\t\t<select id="{{id}}" name="{{name}}" data-required="{{required}}" data-error-text="{{errorText}}">\n\t\t\t\t\t<option value="" selected disabled></option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class="error-text-block"></div>\n\t\t</div>\n\t</div>'),super(e,t,n)}}class M extends n{constructor(e,t){t||(t='<option value="{{value}}">{{name}}</option>'),super(e,t,!0)}}class D extends n{constructor(e,t,n=!1){t||(t='<a id="{{id}}" class="{{classes}}" href="{{href}}">{{name}}</a>'),super(e,t,n)}insertBlock(e,t){const n=super.insertBlock(e,t);return n.inner&&(n.inner.addEventListener("click",this.props.onClick),n.inner.addEventListener("touchstart",this.props.onClick)),n}}class q extends D{constructor(e,t,n=!0){t||(t='<li id="{{id}}" class="{{wrapClasses}}"><a class="{{classes}}" href="{{href}}">{{name}}</a></li>'),super(e,t,n)}}class S extends n{constructor(e,t){t||(t='\n\t<div class="chat-form-page clear">\n\t\t<div class="chat-list-column" id="chatList">\n\t\t\t<div class="profile-block clear"></div>\n\t\t\t<ul class="menu-list none-block" id="menuBlock"></ul>\n\t\t\t\x3c!--<form class="search-wrapper">\n\t\t\t\t<input class="input-styles search-input" type="text" placeholder="Поиск" name="search">\n\t\t\t</form> --\x3e\n\t\t\t<div class="chat-list" id="chatListBlock"></div>\n\t\t</div>\n\t\t<div class="chat-full-block" id="chatFullBlock">\n\t\t\t<div class="chat-full-name"></div>\n\t\t\t<div class="select-chat-wrapper" id="selectChat">\n\t\t\t\t<div class="select-chat-cell">\n\t\t\t\t\t<span>Выберите чат</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="chat-wrapper" id="chatWrapper"><div class="chat" id="chat"></div></div>\n\t\t</div>\n\t</div>\n\t'),super(e,t)}}class P extends n{constructor(e,t){t||(t='\n\t<div class="chat-block" id="{{id}}" data-user-name="{{title}}">\n\t\t<div class="chat-photo-wrapper">\n\t\t\t<img class="chat-photo" src="{{avatar}}" alt="">\n\t\t</div>\n\t\t<div class="chat-name">{{title}}</div>\n\t\t<div class="chat-preview-text">\n\t\t\t<strong class="{{fromMeHideClass}}">Вы: </strong>\n\t\t\t<span>{{text}}</span>\n\t\t</div>\n\t\t<div class="chat-time">{{time}}</div>\n\t\t<div class="new-messages-info {{newMessageHideClass}}">{{newMessageCount}}</div>\n\t\t<a class="delete-chat-button" href="#">X</a>\n\t</div>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);return n.inner&&n.inner.addEventListener("click",this.props.onClick),n}}class R extends n{constructor(e,t){t||(t="{{name}}"),super(e,t)}}class O extends n{constructor(e,t){t||(t='<div class="files-names">{{name}}</div>'),super(e,t)}}class N extends n{constructor(e,t){t||(t='\n\t<div class="chat-message-wrapper {{toMeClass}}">\n\t\t<div class="chat-message-block">\n\t\t\t<div class="chat-message-time">{{time}}</div>\n\t\t\t<div>\n\t\t\t\t{{text}}\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}}class A extends n{constructor(e,t){t||(t='\n\t<div class="warning-message-wrapper warning-on" id="{{id}}">\n\t\t<div class="warning-message-table">\n\t\t\t<div class="warning-message-block">\n\t\t\t\t<div class="warning-message" data-chatId="{{chatId}}">\n\t\t\t\t\t\t<span>{{MessageText}}</span>\n\t\t\t\t\t\t\x3c!--<div class="form-block">\n\t\t\t\t\t\t\t<label>Логин</label>\n\t\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t\t<input class="form-control input-styles" type="text">\n\t\t\t\t\t\t\t\t<div class="error-text-block none-block"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>--\x3e\n\t\t\t\t\t<div class="warning-buttons-wrapper"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}}var F=new class extends w{constructor(){super("","/chats")}createChat(e){return this.post("/",{withCredentials:!0,data:JSON.stringify(e)})}getChats(){return this.get("/",{withCredentials:!0})}deleteChat(e){return this.delete("/",{withCredentials:!0,data:JSON.stringify({chatId:e})})}addUsersToChat(e){return this.put("/users",{withCredentials:!0,data:JSON.stringify(e)})}deleteUsersFromChat(e){return this.delete("/users",{withCredentials:!0,data:JSON.stringify(e)})}getChatToken(e){return this.post(`/token/${e}`,{withCredentials:!0})}getChatUsers(e){return this.get(`/${e}/users`,{withCredentials:!0})}};function W(e,t,n){console.error(e),e.response&&t?t(e.response):u.go(n),C()}var J=new class{getChats(e){return b(),F.getChats().then((t=>{e(t),C()})).catch((e=>{W(e)}))}createChat(e,t){return b(),F.createChat(e).then((e=>{t(e.id),C()})).catch((e=>{W(e)}))}deleteChat(e,t){return F.deleteChat(e).then((e=>{t(e,t)})).catch((e=>{W(e,t)}))}getChatToken(e,t){return F.getChatToken(e).then((e=>{t(e)})).catch((e=>{W(e,t)}))}getChatUsers(e,t){return F.getChatUsers(e).then((e=>{t(e)})).catch((e=>{W(e,t)}))}addUsersToChat(e,t){F.addUsersToChat(e).then((e=>{t(e)})).catch((e=>{W(e,t)}))}deleteUserChat(e,t){F.deleteUsersFromChat(e).then((e=>{t(e)})).catch((e=>{W(e,t)}))}};var H=new class extends w{constructor(){super("","/user")}getUserData(e){return this.get(`/${e}/`,{withCredentials:!0})}searchUsers(e){return this.post("/search",{withCredentials:!0,data:JSON.stringify(e)})}updateUserProfile(e){return this.put("/profile",{withCredentials:!0,data:JSON.stringify(e)})}updateUserPassword(e){return this.put("/password",{withCredentials:!0,data:JSON.stringify(e)})}updateUserPhoto(e){return console.log(e),this.put("/profile/avatar",{headers:{},withCredentials:!0,data:e})}};function $(e,t,n){console.log(e),t(e),C()}function V(e,t,n){console.error(e),e.response&&t?t(e.response):u.go(n),C()}var j=new class{searchUsers(e,t){return H.searchUsers(e).then((e=>{t(e)})).catch((e=>{afterChatError(e)}))}getUserData(e,t){return H.getUserData(e).then((e=>{t(e)})).catch((e=>{V(e,t)}))}updateUserProfile(e,t){return b(),H.updateUserProfile(e).then((e=>{$(e,t)})).catch((e=>{V(e)}))}updateUserPassword(e,t){return b(),H.updateUserPassword(e).then((e=>{$(e,t)})).catch((e=>{V(e)}))}updateUserPhoto(e,t){return b(),H.updateUserPhoto(e).then((e=>{$(e,t)})).catch((e=>{V(e)}))}};var z=new class{constructor(){this.onOpen=this.onOpen.bind(this),this.onMessage=this.onMessage.bind(this),this.onError=this.onError.bind(this),this.onClose=this.onClose.bind(this)}addEvents(){this.ws.addEventListener("open",this.onOpen),this.ws.addEventListener("message",this.onMessage),this.ws.addEventListener("error",this.onError),this.ws.addEventListener("close",this.onClose)}removeEvents(){this.ws.removeEventListener("open",this.onOpen),this.ws.removeEventListener("message",this.onMessage),this.ws.removeEventListener("error",this.onError),this.ws.removeEventListener("close",this.onClose)}onOpen(){console.log("onOpen"),this.getMessages({offset:0})}onMessage(e){const t=JSON.parse(e.data);console.log(t),function(e){console.log(e),Array.isArray(e)&&e.length&&e.forEach((function(e){Te(e,!0)}));"object"==typeof e&&"message"===e.type&&Te(e,!1)}(t)}onError(e){console.error(e.message)}onClose(e){this.removeEvents(),e.wasClean?console.log("Соединение закрыто чисто"):console.log("Проблемы с подключением"),1006===e.code&&this.reconnection()}reconnection(){this.connect({userId:this.userId,chatId:this.chatId,token:this.token})}connect(e){this.userId=e.userId,this.chatId=e.chatId,this.token=e.token,this.ws=new WebSocket("wss://ya-praktikum.tech/ws/chats/"+e.userId+"/"+e.chatId+"/"+e.token),this.addEvents()}getMessages(e){this.ws.send(JSON.stringify({content:e.offset.toString(),type:"get old"}))}closeChat(){clearInterval(this.ping),this.ws.close(),this.removeEvents()}sendMessage(e){this.ws.send(JSON.stringify({content:e,type:"message"}))}};let Z=0,K=0;const Q={};let G,X={element:".chat-full-name",name:"",id:0};const Y={title:""};let ee,te;const ne={element:".chat-send-box",name:""},se={element:".chat-send-box",id:"",name:" >",classes:"chat-send-button",onClick:e=>{e.preventDefault(),o(".chat-send-box",(function(e){console.log(e),z.sendMessage(e.message),Ee()}))}};const re=[{element:".menu-list",id:"",classes:"create-chat-link",wrapClasses:"",name:"Создать чат",href:"#",onClick:e=>{e.preventDefault(),new A(ce).insertBlock("#app"),new a(de).insertBlock("#createChatModal",!0),ue.forEach((function(e){new i(e,"").insertBlock(e.element)})),he.forEach((function(e){new l(e).insertBlock(e.element)}))}},{element:".menu-list",id:"",classes:"create-chat-link",wrapClasses:"",name:"Мой профиль",href:"/settings",onClick:e=>{e.preventDefault(),u.go("/settings")}},{element:".menu-list",id:"addUserToChat",classes:"create-chat-link",wrapClasses:"none-block",name:"Добавить пользователя",href:"#",onClick:e=>{e.preventDefault(),function(){if(new A(pe).insertBlock("#app"),new a(me).insertBlock("#addUserToChatModal",!0),G&&G.props){parseInt(G.props.id);fe.forEach((function(e){new i(e,"").insertBlock(e.element)})),ge.forEach((function(e){new I(e,"").insertBlock(e.element)}))}ve.forEach((function(e){new l(e).insertBlock(e.element)}))}()}},{element:".menu-list",id:"deleteUserFromChat",classes:"create-chat-link",wrapClasses:"none-block",name:"Удалить пользователя",href:"#",onClick:e=>{e.preventDefault(),function(e){if(new A(we).insertBlock("#app"),new a(ke).insertBlock("#deleteUserFromChatModal",!0),G&&G.props){let e=parseInt(G.props.id);be.forEach((function(e){new I(e,"").insertBlock(e.element)})),J.getChatUsers(e,(function(e){e.forEach((function(t,n){e[n].name=e[n].first_name+" "+e[n].second_name,e[n].value=e[n].id,new M(e[n],"").insertBlock("#selectUser")}))}))}Ce.forEach((function(e){new l(e).insertBlock(e.element)}))}()}},{element:".menu-list",id:"",classes:"create-chat-link",wrapClasses:"",name:"Выход",href:"/",onClick:e=>{e.preventDefault(),B.signOut()}}],ae=[{element:".profile-block",id:"",classes:"create-chat-link",name:"Меню",href:"#",onClick:e=>{e.preventDefault(),document.getElementById("menuBlock").classList.toggle("none-block")}},{element:".chat-full-name",id:"",classes:"chat-back-button",name:"Закрыть",href:"#",onClick:e=>{e.preventDefault(),function(){G&&G.setProps({name:"",id:0});document.getElementById("selectChat").classList.remove("none-block"),document.getElementById("chatList").classList.remove("chat-full-show"),document.getElementById("chatFullBlock").classList.remove("chat-full-show"),document.getElementById("deleteUserFromChat").classList.add("none-block"),document.getElementById("addUserToChat").classList.add("none-block")}()}}];const oe={element:".chat-send-box",id:"chatSendBox",name:"message",value:"",required:!0};let ie={element:"#app",id:"deleteWarningMessage",chatId:0,MessageText:"Вы действительно хотите удалить этот чат?"};const le=[{element:".warning-buttons-wrapper",id:"",name:"Да",classes:"warning-add warning-button",onClick:e=>{e.preventDefault(),J.deleteChat(ie.chatId,(function(e){xe(),Be("deleteWarningMessage")}))}},{element:".warning-buttons-wrapper",id:"",name:"Нет",classes:"warning-back warning-button",onClick:e=>{e.preventDefault(),Be("deleteWarningMessage")}}],ce={element:"#app",chatId:0,id:"createChatModal",MessageText:""},de={title:"Создать чат"},ue=[{element:"#createChatModal .reg-form-fieldset",id:"chatName",name:"title",label:"Название",value:"",type:"text",required:!0,errorText:"Обязательное поле",validationType:"",classList:"",onBlur:e=>{}}],he=[{element:"#createChatModal .buttons-wrapper",id:"",name:"Создать",classes:"add-link",onClick:e=>{e.preventDefault(),o("#createChatModal .reg-form",(function(e){J.createChat(e,(function(e){xe(),Be("createChatModal")}))}))}},{element:"#createChatModal .buttons-wrapper",id:"",name:"Отмена",classes:"reg-link",onClick:e=>{e.preventDefault(),Be("createChatModal")}}],pe={element:"#app",id:"addUserToChatModal",chatId:0,MessageText:""},me={title:"Добавить пользователя"},fe=[{element:"#addUserToChatModal .reg-form-fieldset",id:"chatName",name:"title",label:"Поиск",value:"",type:"text",required:!1,errorText:"",validationType:"",classList:"",onBlur:e=>{e.target&&e.target.value&&j.searchUsers({login:e.target.value},(function(e){document.getElementById("selectUser").textContent="",e.forEach((function(t,n){e[n].name=e[n].first_name+" "+e[n].second_name,e[n].value=e[n].id,new M(e[n],"").insertBlock("#selectUser")}))}))}}],ge=[{element:"#addUserToChatModal .reg-form-fieldset",id:"selectUser",name:"user",label:"Пользователь",required:!0,errorText:"Пользователь не выбран",classList:""}],ve=[{element:"#addUserToChatModal .buttons-wrapper",id:"",name:"Добавить",classes:"add-link",onClick:e=>{e.preventDefault(),o("#addUserToChatModal .reg-form",(function(e){const t={users:[e.user],chatId:parseInt(G.props.id)};J.addUsersToChat(t,(function(e){xe(),Be("addUserToChatModal")}))}))}},{element:"#addUserToChatModal .buttons-wrapper",id:"",name:"Отмена",classes:"reg-link",onClick:e=>{e.preventDefault(),Be("addUserToChatModal")}}],we={element:"#app",id:"deleteUserFromChatModal",chatId:0,MessageText:""},ke={title:"Удалить пользователя"},be=[{element:"#deleteUserFromChatModal .reg-form-fieldset",id:"selectUser",name:"user",label:"Пользователь",required:!0,errorText:"Пользователь не выбран",classList:""}],Ce=[{element:"#deleteUserFromChatModal .buttons-wrapper",id:"",name:"Удалить",classes:"add-link",onClick:e=>{e.preventDefault(),o("#deleteUserFromChatModal .reg-form",(function(e){const t={users:[e.user],chatId:parseInt(G.props.id)};J.deleteUserChat(t,(function(e){xe(),Be("deleteUserFromChatModal")}))}))}},{element:"#deleteUserFromChatModal .buttons-wrapper",id:"",name:"Отмена",classes:"reg-link",onClick:e=>{e.preventDefault(),Be("deleteUserFromChatModal")}}];function ye(e){const t=e.target.closest(".chat-block"),n=document.getElementById("chatWrapper");t&&n&&(e.target.classList.contains("delete-chat-button")&&t.id?(ie.chatId=t.id,new A(ie).insertBlock("#app"),le.forEach((function(e){new l(e,"").insertBlock(e.element)}))):(document.getElementById("chatList").classList.toggle("chat-full-show"),document.getElementById("menuBlock").classList.add("none-block"),document.getElementById("selectChat").classList.add("none-block"),document.getElementById("chatFullBlock").classList.toggle("chat-full-show"),document.getElementById("deleteUserFromChat").classList.remove("none-block"),document.getElementById("addUserToChat").classList.remove("none-block"),document.getElementById("chat").textContent="",K=0,J.getChatToken(t.id,(function(e){console.log(e),e&&e.token&&Z&&z.connect({userId:Z,chatId:parseInt(t.id),token:e.token})})),Ee(),Le(),G&&G.setProps({name:t.getAttribute("data-user-name"),id:t.id})))}function Ee(){ee.setProps({value:""}),te.setProps({name:""})}function Be(e){document.getElementById(e).remove()}function xe(){document.getElementById("chatListBlock").textContent="",J.getChats((function(e){e.forEach((function(t,n){e[n].element=".chat-list",e[n].photoAlt="",e[n].newMessageCount=0,e[n].fromMeHideClass="none-block",e[n].newMessageHideClass="none-block",e[n].onClick=function(e){e.preventDefault(),ye(e)},new P(e[n],"").insertBlock(e[n].element)}))}))}function Te(e,t){if(e.id>K){let n="";e.user_id==Z&&(n="message-to-me"),K=e.id,new N({element:"#chat",text:e.content,time:e.time,toMeClass:n},"").insertBlock("#chat",!1,t),Le()}}function Le(){const e=document.getElementById("chatWrapper");e&&(e.scrollTop=e.scrollHeight)}const _e={title:"Регистрация"},Ue=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"",onBlur:e=>{}}],Ie=[{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"add-link",onClick:e=>{e.preventDefault(),o(".reg-form",(function(e){B.signUp(e,(function(e){document.getElementById("formInfoBlock").textContent=e}))}))}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),window.history.back()}}];class Me extends n{constructor(e,t){t||(t='\n\t<label class="image-form-block" for="{{id}}">\n\t\t<input class="load-image" name="{{name}}" hidden accept="image/*" type="file" id="{{id}}">\n\t\t<img id="{{imageId}}" src="{{imageLink}}" alt="{{imageAlt}}" title="{{imageTitle}}">\n\t</label>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t),s=this;if(n.inner){const e=n.inner.querySelector("input");e&&e.addEventListener("change",(function(e){s.props.onChanged(e)}))}return n}}const De={title:""},qe=[{element:".reg-form-fieldset",id:"photoImageUpload",imageId:"userAvatar",name:"avatar",imageLink:"#",imageAlt:"",imageTitle:"",onChanged:e=>{e.preventDefault();const t=document.querySelector(".reg-form");if(!t)return;const n=new FormData(t);var s;console.log(n),s=n,j.updateUserPhoto(s,(function(e){e&&e.avatar&&Fe(e.avatar)}))}}],Se=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:"",onBlur:e=>{}}],Pe=[{element:".reg-form-fieldset",id:"changePasswordButton",name:"Изменить пароль",classes:"reg-link",onClick:e=>{e.preventDefault();let t=document.getElementById(e.target.getAttribute("id")).parentElement.nextElementSibling;for(;t;)t.children[0].classList.remove("none-block"),t=t.nextElementSibling}}],Re=[{element:".reg-form-fieldset",id:"oldPassword",name:"old_password",label:"Старый пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block",onBlur:e=>{}},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block",onBlur:e=>{}},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block",onBlur:e=>{}}],Oe=[{element:".buttons-wrapper",id:"",name:"Изменить данные",classes:"add-link",onClick:e=>{e.preventDefault(),o(".reg-form",(function(e){e.display_name=e.first_name,j.updateUserProfile(e,(function(t){t?Ae(t):e.password&&e.old_password?function(e,t){j.updateUserPassword({oldPassword:e.old_password,newPassword:e.password},(function(e){e?Ae(e):t(e)}))}(e,Ne):Ne()}))}))}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),window.history.back()}}];function Ne(){u.go("/messenger")}function Ae(e){document.getElementById("formInfoBlock").textContent=e,We()}function Fe(e){document.getElementById("userAvatar").setAttribute("src","https://ya-praktikum.tech/api/v2/resources/"+e)}function We(){B.checkAuth((function(e){for(let t in e){let n=document.querySelector(".reg-form [name="+t+"]");n&&n.setAttribute("value",e[t]),"avatar"===t&&e[t]&&Fe(e[t])}}))}class Je extends n{constructor(e,t){t||(t='\n\t<div class="warning-message-wrapper warning-on">\n\t\t<div class="warning-message-table">\n\t\t\t<div class="warning-message-block">\n\t\t\t\t<div class="loader none-block">//убрать none-block для показа</div>\n\t\t\t\t<div class="error-message warning-message">\n\t\t\t\t\t<div class="error-message-header">{{title}}</div>\n\t\t\t\t\t<span>{{errorText}}</span>\n\t\t\t\t\t<div class="warning-buttons-wrapper">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}}const He={title:"Ошибка 404",errorText:"Страница не найдена"},$e=[{element:".warning-buttons-wrapper",id:"",name:"Назад",classes:"warning-add warning-button",onClick:e=>{e.preventDefault(),Ve()}}];let Ve=function(){window.history.back()};u.use("/",_).use("/authorization",_).use("/messenger",(function(){document.title="Чат",new S(Q).insertBlock("#app",!0),G=new R(X),G.insertBlock(".chat-full-name"),ae.forEach((function(e){new D(e,"").insertBlock(e.element)})),re.forEach((function(e){new q(e,"").insertBlock(e.element)})),B.checkAuth((function(e){e.id&&(Z=e.id)})),xe(),new a(Y,'<form class="chat-send-box"></form>').insertBlock(".chat-full-block"),new l(se).insertBlock(".chat-send-box"),ee=new U(oe),ee.insertBlock(".chat-send-box"),te=new O(ne),te.insertBlock(".chat-send-box")})).use("/settings",(function(){document.title="Мой профиль",new a(De).insertBlock("#app",!0),qe.forEach((function(e){new Me(e).insertBlock(e.element)})),Se.forEach((function(e){new i(e).insertBlock(e.element)})),Pe.forEach((function(e){new l(e).insertBlock(e.element)})),Re.forEach((function(e){new i(e).insertBlock(e.element)})),Oe.forEach((function(e){new l(e).insertBlock(e.element)})),We()})).use("/sign-up",(function(){document.title="Регистрация",new a(_e).insertBlock("#app",!0),Ue.forEach((function(e){new i(e).insertBlock(e.element)})),Ie.forEach((function(e){new l(e).insertBlock(e.element)}))})).use("*",(function(){var e,t,n;t=Ve,n=$e,(e=He)||(e=He),"/500"==window.location.pathname&&(e.title="Ошибка 500",e.errorText="Внутренняя ошибка сервера"),n||(n=$e),t&&(Ve=t),document.title="Ошибка: "+e.title,new Je(e).insertBlock("#app",!0),$e.forEach((function(e){new l(e).insertBlock(e.element)}))})).start(),B.checkAuth((function(e){const t=window.location.pathname.split("/");e.id&&""==t[1]&&u.go("/messenger")}))})();
//# sourceMappingURL=index.a6b43121.js.map
