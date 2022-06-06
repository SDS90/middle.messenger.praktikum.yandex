(()=>{class e{TEMPLATE_REGULAR=/\{\{(.*?)\}\}/;templateBlock="";constructor(e){this.templateBlock=e}generateTemplate(e){return e&&this.templateBlock?this.changeTemplateKeys(e,this.templateBlock,this.TEMPLATE_REGULAR):""}changeTemplateKeys(e,t,n){const s=n.exec(t);if(s&&s[1]){const n=s[1];if(n in e){let r=e[n];r="object"!=typeof r&&"function"!=typeof r?r.toString():"",t=t.replace(s[0],r)}else t=t.replace(s[0],"")}return n.exec(t)?this.changeTemplateKeys(e,t,n):t}}class t{constructor(){this.listeners={}}on(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}off(e,t){if(!this.listeners[e])throw new Error(`Нет события: ${e}`);this.listeners[e]=this.listeners[e].filter((e=>e!==t))}emit(e,...t){if(!this.listeners[e])throw new Event(`Нет события: ${e}`);this.listeners[e].forEach((function(e){e(...t)}))}}class n{static EVENTS={INIT:"init",FLOW_CDM:"flow:component-did-mount",FLOW_CDU:"flow:component-did-update",FLOW_RENDER:"flow:render"};_element=null;constructor(e,s,r,a="div"){this.template=s,this.noTagName=r;const o=new t;this._meta={tagName:a,params:e},this.props=this._makePropsProxy(e),this.eventBus=()=>o,this._registerEvents(o),o.emit(n.EVENTS.INIT)}_registerEvents(e){e.on(n.EVENTS.INIT,this.init.bind(this)),e.on(n.EVENTS.FLOW_CDM,this._componentDidMount.bind(this)),e.on(n.EVENTS.FLOW_CDU,this._componentDidUpdate.bind(this)),e.on(n.EVENTS.FLOW_RENDER,this._render.bind(this))}_createResources(){const{tagName:e}=this._meta;this._element=this._createDocumentElement(e),this._element}init(){this._createResources(),this.eventBus().emit(n.EVENTS.FLOW_CDM)}_componentDidMount(){this.componentDidMount(),this.eventBus().emit(n.EVENTS.FLOW_RENDER)}componentDidMount(){}dispatchComponentDidMoun(){}_componentDidUpdate(e,t){this.componentDidUpdate(e,t)&&this._render()}componentDidUpdate(e,t){return!0}setProps=e=>{e&&Object.assign(this.props,e)};get element(){return this._element}_render(){const e=this.render();this._element&&(this._element.innerHTML=e)}render(){return new e(this.template).generateTemplate(this.props)}getContent(){return this.element}_makePropsProxy(e){const t=this;return new Proxy(e,{get:(e,t)=>"function"==typeof e[t]?e[t].bind(e):e[t],set:(e,s,r)=>(e[s]=r,t.eventBus().emit(n.EVENTS.FLOW_CDU,{...e},e),!0),deleteProperty(){throw new Error("Нет доступа")}})}_createDocumentElement(e){return document.createElement(e)}show(){const e=this.getContent();e&&(e.style.display="block")}hide(){const e=this.getContent();e&&(e.style.display="none")}destroy(){this._element.remove(),this.onDestroy()}onDestroy(){}insertBlock(e,t,n){let s=this.getContent();const r=document.querySelector(e);if(!s||!r)return{};this.noTagName&&(s=s.children[0]);for(let e of r.querySelectorAll('[id=""]'))e.removeAttribute("id");return t&&(r.innerHTML=""),n?r.prepend(s):r.appendChild(s),{inner:s,wrapper:r}}}const s={email:new RegExp(/^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_\.-]+)\.([a-z\.]{2,6})$/),login:new RegExp(/^[A-Za-z0-9_\.-]{3,20}$/),name:new RegExp(/^[A-ZА-Я][a-zA-Zа-яА-Я-]+$/),phone:new RegExp(/^\+?\d{10,15}$/),password:new RegExp(/^((?=.*?[A-Z])(?=.*?[0-9])\S{8,40})\S$/)},r=function(e){const t=e.getAttribute("data-validation-type"),n=e.getAttribute("data-error-text"),r=e.value,a=s[t],o=e.parentElement,i=o.querySelector(".error-text-block");return a&&!a.test(r)?(o.classList.add("error-input"),i&&(i.textContent=n||"Возникла ошибка при заполнении формы. Пожалуйста, проверьте введённые данные."),!1):(o.classList.remove("error-input"),i&&(i.textContent=""),!0)};class a extends n{constructor(e,t){t||(t='\n\t<div class="reg-form-page">\n\t\t<div class="reg-form-wrapper">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<form class="reg-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="reg-form-fieldset"></div>\n\t\t\t\t\t<div class="form-block info-block" id="formInfoBlock"></div>\n\t\t\t\t\t<div class="form-block buttons-wrapper"></div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t</div>'),super(e,t)}}function o(e,t){const n=document.querySelector(e);if(n&&function(e){const t=e.querySelectorAll(".form-block"),n=e.querySelector(".info-block");let s=!0,a="",o="";return n&&(n.textContent=""),t.forEach((function(e){const t=e.querySelector("input")||e.querySelector("textarea")||e.querySelector("select");if(t){const i=t.getAttribute("data-error-text");if(e.classList.contains("none-block")||r(t)||(s=!1),!t.value&&t.getAttribute("data-required")&&!e.classList.contains("none-block")){s=!1;const e=t.closest(".wrapper-element");e&&(e.classList.add("error-input"),e.querySelector(".error-text-block").textContent=i||"Обязательное поле."),n&&(n.textContent="Не все обязательные поля заполнены.")}"password"==t.name&&(a=t.value),"repeat_password"==t.name&&(o=t.value)}})),a&&o&&a!=o&&(s=!1,n.textContent="Пароли не совпадают."),s}(n)){const e=new FormData(n);if(console.log(...e),t){let n={};for(let t of e.keys())n[t]=e.get(t);t(n)}}}class i extends n{constructor(e,t){t||(t='\n\t<div class="form-block {{classList}}">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="input-wrapper wrapper-element">\n\t\t\t<input class="form-control input-styles" data-required="{{required}}" data-error-text="{{errorText}}" \n\t\t\tdata-validation-type="{{validationType}}" id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">\n\t\t\t<div class="error-text-block"></div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t),s=this;if(n.inner){const e=n.inner.querySelector("input");e&&(e.addEventListener("focus",(function(){this.classList.add("focus-input")})),e.addEventListener("blur",(function(e){this.classList.remove("focus-input"),s.props.onBlur(e),r(this)})))}return n}}class l extends n{constructor(e,t){t||(t='<button id="{{id}}" class="button-link {{classes}}">{{name}}</button>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);return n.inner&&(n.inner.addEventListener("click",this.props.onClick),n.inner.addEventListener("touchstart",this.props.onClick)),n}}var c=class{constructor(e,t,n){this.pathname=e,this.blockClass=t,this.block=null,this.props=n}getPathname(){return this.pathname}leave(){this.block&&Object.keys(this.block).length&&this.block.destroy()}match(e){return t=e,n=this.pathname,t===n;var t,n}render(){this.block=new this.blockClass,function(e,t){const n=document.querySelector(e)}(this.props.rootQuery,this.block)}};class d{constructor(e){if(d.__instance)return d.__instance;this.routes=[],this._pathnames=[],this._unprotectedPaths=[],this.history=window.history,this._currentRoute=null,this._rootQuery=e,this._onRouteCallback=()=>{},d.__instance=this}get currentRoute(){return this._currentRoute}use(e,t){const n=new c(e,t,{rootQuery:this._rootQuery});return this.routes.push(n),this._pathnames.push(e),this}_hasRoute(e){return this._pathnames.includes(e)?e:"*"}start(){window.onpopstate=()=>{const e=this._hasRoute(window.location.pathname);this._onRoute(e)};const e=this._hasRoute(window.location.pathname);this._onRoute(e)}_onRoute(e){const t=this.getRoute(e);t&&(this._currentRoute&&this._currentRoute.leave(),this._currentRoute=t,t.render(),this._unprotectedPaths.includes(e)||this._onRouteCallback())}onRoute(e){return this._onRouteCallback=e,this}setUnprotectedPaths(e){return this._unprotectedPaths=e,this}go(e){this.history.pushState({},"",e),this._onRoute(e)}back(){this.history.back()}forward(){this.history.forward()}getRoute(e){return this.routes.find((t=>t.match(e)))}getLocationPathname(){return window.location.pathname}}const u=new d("#app"),h="GET",m="POST",p="PUT",f="DELETE";var g=new class{get=(e,t={})=>this.request(e,{...t,method:h},t.timeout);post=(e,t={})=>this.request(e,{...t,method:m},t.timeout);put=(e,t={})=>this.request(e,{...t,method:p},t.timeout);delete=(e,t={})=>this.request(e,{...t,method:f},t.timeout);request=(e,t={},n=5e3)=>new Promise((function(s,r){const a=new XMLHttpRequest;t.method==h&&t.data&&"object"==typeof t.data?a.open(t.method,function(e){let t="";if("object"==typeof e){t="";for(let n in e)t+=""==t?"?":"&",t=t+n+"="+e[n]}return t}(t.data)):a.open(t.method,e);for(let e in t.headers)a.setRequestHeader(e,t.headers[e]);t.withCredentials&&(a.withCredentials=!0),a.onload=function(){s(a)},a.onabort=r,a.onerror=r,a.timeout=n,a.ontimeout=r,t.method!==h&&t.data?a.send(t.data):a.send()}))};const v={"Content-type":"application/json"};var w=class{constructor(e,t,n){this.http=g,this.baseHref=e||"https://ya-praktikum.tech/api/v2",this.path=t||"",this.headers=v}getPath(){return this.baseHref+this.path}handleOptions(e){const t=e||{};return e.headers?t.headers=e.headers:t.headers=this.headers,t}handleResponse(e){if("OK"==e.response)return{ok:!0};return JSON.parse(e.response)}getHeaders(){return this.headers}get(e,t){return this.http.get(this.getPath()+e,this.handleOptions(t)).then(this.handleResponse)}post(e,t){return this.http.post(this.getPath()+e,this.handleOptions(t)).then(this.handleResponse)}put(e,t){return this.http.put(this.getPath()+e,this.handleOptions(t)).then(this.handleResponse)}delete(e,t){return this.http.delete(this.getPath()+e,this.handleOptions(t)).then(this.handleResponse)}};var k=new class extends w{constructor(){super("","/auth")}signIn(e){return this.post("/signin",{withCredentials:!0,data:JSON.stringify(e)})}signUp(e){return this.post("/signup",{data:JSON.stringify(e)})}checkAuth(){return this.get("/user",{withCredentials:!0})}signOut(){return this.post("/logout",{withCredentials:!0})}};var b=new class{signIn(e,t){return k.signIn(e).then((e=>{e.reason&&t?t(e.reason):u.go("/messenger")})).catch((e=>{e.response&&t?t(e.response):u.go("/500")}))}signUp(e){return console.log(e),k.signUp(e).then((e=>{console.log(e),u.go("/messenger")})).catch((()=>{u.go("/500")}))}signOut(){return k.signOut().then((()=>{u.go("/authorization")}))}checkAuth(){return k.checkAuth().then((e=>{console.log(e)})).catch((e=>{console.log(e),u.go("/sign-in")}))}};const C={title:"Вход"},y=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Обязательное поле",validationType:"",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Обязательное поле",validationType:"",classList:"",onBlur:e=>{}}],E=[{element:".buttons-wrapper",id:"",name:"Авторизоваться",classes:"add-link",onClick:e=>{e.preventDefault(),o(".reg-form",(function(e){b.signIn(e,(function(e){document.getElementById("formInfoBlock").textContent=e}))}))}},{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"reg-link",onClick:e=>{e.preventDefault(),u.go("/sign-up")}}];function x(){document.title="Вход",new a(C).insertBlock("#app",!0),y.forEach((function(e){new i(e,"").insertBlock(e.element)})),E.forEach((function(e){new l(e).insertBlock(e.element)}))}class B extends n{constructor(e,t){t||(t='\n\t<div class="form-block">\n\t\t<textarea id="{{id}}"  data-required="{{required}}" name="{{name}}" value="{{value}}"></textarea>\n\t</div>\n\t'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner){const e=n.inner.querySelector("textarea");e&&(e.addEventListener("focus",(function(){this.classList.add("focus-input")})),e.addEventListener("blur",(function(){this.classList.remove("focus-input")})))}return n}}class T extends n{constructor(e,t,n=!0){t||(t='\n\t<div class="form-block {{classList}}">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="select-wrapper  wrapper-element clear">\n\t\t\t<div class="select-block">\n\t\t\t\t<select id="{{id}}" name="{{name}}" data-required="{{required}}" data-error-text="{{errorText}}">\n\t\t\t\t\t<option value="" selected disabled></option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class="error-text-block"></div>\n\t\t</div>\n\t</div>'),super(e,t,n)}}class L extends n{constructor(e,t){t||(t='<option value="{{value}}">{{name}}</option>'),super(e,t,!0)}}class _ extends l{constructor(e,t){t||(t='\n<label for="{{id}}" title="Прикрепить файл" class="button-link {{classes}}">\n\t{{name}}\n\t<input class="load-image" hidden accept="image/*" type="file" id="{{id}}" value="{{value}}" name="file">\n</label>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner){const e=n.inner.querySelector("input");e&&e.addEventListener("change",this.props.onChange)}return n}}class U extends n{constructor(e,t,n=!1){t||(t='<a id="{{id}}" class="{{classes}}" href="{{href}}">{{name}}</a>'),super(e,t,n)}insertBlock(e,t){const n=super.insertBlock(e,t);return n.inner&&(n.inner.addEventListener("click",this.props.onClick),n.inner.addEventListener("touchstart",this.props.onClick)),n}}class I extends U{constructor(e,t,n=!0){t||(t='<li id="{{id}}" class="{{wrapClasses}}"><a class="{{classes}}" href="{{href}}">{{name}}</a></li>'),super(e,t,n)}}class q extends n{constructor(e,t){t||(t='\n\t<div class="chat-form-page clear">\n\t\t<div class="chat-list-column" id="chatList">\n\t\t\t<div class="profile-block clear"></div>\n\t\t\t<ul class="menu-list none-block" id="menuBlock"></ul>\n\t\t\t\x3c!--<form class="search-wrapper">\n\t\t\t\t<input class="input-styles search-input" type="text" placeholder="Поиск" name="search">\n\t\t\t</form> --\x3e\n\t\t\t<div class="chat-list" id="chatListBlock"></div>\n\t\t</div>\n\t\t<div class="chat-full-block" id="chatFullBlock">\n\t\t\t<div class="chat-full-name"></div>\n\t\t\t<div class="select-chat-wrapper" id="selectChat">\n\t\t\t\t<div class="select-chat-cell">\n\t\t\t\t\t<span>Выберите чат</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="chat-wrapper" id="chatWrapper"><div class="chat" id="chat"></div></div>\n\t\t</div>\n\t</div>\n\t'),super(e,t)}}class M extends n{constructor(e,t){t||(t='\n\t<div class="chat-block" id="{{id}}" data-user-name="{{title}}">\n\t\t<div class="chat-photo-wrapper">\n\t\t\t<img class="chat-photo" src="{{avatar}}" alt="">\n\t\t</div>\n\t\t<div class="chat-name">{{title}}</div>\n\t\t<div class="chat-preview-text">\n\t\t\t<strong class="{{fromMeHideClass}}">Вы: </strong>\n\t\t\t<span>{{text}}</span>\n\t\t</div>\n\t\t<div class="chat-time">{{time}}</div>\n\t\t<div class="new-messages-info {{newMessageHideClass}}">{{newMessageCount}}</div>\n\t\t<a class="delete-chat-button" href="#">X</a>\n\t</div>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);return n.inner&&n.inner.addEventListener("click",this.props.onClick),n}}class D extends n{constructor(e,t){t||(t="{{name}}"),super(e,t)}}class S extends n{constructor(e,t){t||(t='<div class="files-names">{{name}}</div>'),super(e,t)}}class P extends n{constructor(e,t){t||(t='\n\t<div class="chat-message-wrapper {{toMeClass}}">\n\t\t<div class="chat-message-block">\n\t\t\t<div class="chat-message-time">{{time}}</div>\n\t\t\t<div>\n\t\t\t\t{{text}}\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}}class O extends n{constructor(e,t){t||(t='\n\t<div class="warning-message-wrapper warning-on" id="{{id}}">\n\t\t<div class="warning-message-table">\n\t\t\t<div class="warning-message-block">\n\t\t\t\t<div class="warning-message" data-chatId="{{chatId}}">\n\t\t\t\t\t\t<span>{{MessageText}}</span>\n\t\t\t\t\t\t\x3c!--<div class="form-block">\n\t\t\t\t\t\t\t<label>Логин</label>\n\t\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t\t<input class="form-control input-styles" type="text">\n\t\t\t\t\t\t\t\t<div class="error-text-block none-block"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>--\x3e\n\t\t\t\t\t<div class="warning-buttons-wrapper"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}}function R(){document.getElementById("app").classList.add("loading")}function N(){document.getElementById("app").classList.remove("loading")}function A(e,t,n){e.error&&t?e.reason?t(e.reason):t(e.error):n&&u.go(n),N()}function F(e,t,n){e.response&&t?t(e.response):u.go(n),N()}var W=new class{signIn(e,t){return R(),k.signIn(e).then((e=>{A(e,t,"/messenger")})).catch((e=>{console.error(e),F(e,t,"/500")}))}signUp(e,t){return R(),k.signUp(e).then((e=>{A(e,t,"/messenger")})).catch((e=>{console.error(e),F(e,t,"/500")}))}signOut(){return R(),k.signOut().then((e=>{N(),u.go("/")}))}checkAuth(e){return k.checkAuth().then((t=>{e(t)})).catch((e=>{console.error(e),N(),u.go("/")}))}};var J=new class extends w{constructor(){super("","/chats")}createChat(e){return this.post("/",{withCredentials:!0,data:JSON.stringify(e)})}getChats(){return this.get("/",{withCredentials:!0})}deleteChat(e){return this.delete("/",{withCredentials:!0,data:JSON.stringify({chatId:e})})}addUsersToChat(e){return this.put("/users",{withCredentials:!0,data:JSON.stringify(e)})}deleteUsersFromChat(e){return this.delete("/users",{withCredentials:!0,data:JSON.stringify(e)})}getChatToken(e){return this.post(`/token/${e}`,{withCredentials:!0})}getChatUsers(e){return this.get(`/${e}/users`,{withCredentials:!0})}};function H(e,t,n){console.error(e),e.response&&t?t(e.response):u.go(n),N()}var $=new class{getChats(e){return R(),J.getChats().then((t=>{e(t),N()})).catch((e=>{H(e)}))}createChat(e,t){return R(),J.createChat(e).then((e=>{t(e.id),N()})).catch((e=>{H(e)}))}deleteChat(e,t){return J.deleteChat(e).then((e=>{t(e,t)})).catch((e=>{H(e,t)}))}getChatToken(e,t){return J.getChatToken(e).then((e=>{t(e)})).catch((e=>{H(e,t)}))}getChatUsers(e,t){return J.getChatUsers(e).then((e=>{t(e)})).catch((e=>{H(e,t)}))}addUsersToChat(e,t){J.addUsersToChat(e).then((e=>{t(e)})).catch((e=>{H(e,t)}))}deleteUserChat(e,t){J.deleteUsersFromChat(e).then((e=>{t(e)})).catch((e=>{H(e,t)}))}};var V=new class extends w{constructor(){super("","/user")}getUserData(e){return this.get(`/${e}/`,{withCredentials:!0})}searchUsers(e){return this.post("/search",{withCredentials:!0,data:JSON.stringify(e)})}updateUserProfile(e){return this.put("/profile",{withCredentials:!0,data:JSON.stringify(e)})}updateUserPassword(e){return this.put("/password",{withCredentials:!0,data:JSON.stringify(e)})}updateUserPhoto(e){return console.log(e),this.put("/profile/avatar",{headers:{},withCredentials:!0,data:e})}};function z(e,t,n){console.log(e),t(e),N()}function j(e,t,n){console.error(e),e.response&&t?t(e.response):u.go(n),N()}var Z=new class{searchUsers(e,t){return V.searchUsers(e).then((e=>{t(e)})).catch((e=>{afterChatError(e)}))}getUserData(e,t){return V.getUserData(e).then((e=>{t(e)})).catch((e=>{j(e,t)}))}updateUserProfile(e,t){return R(),V.updateUserProfile(e).then((e=>{z(e,t)})).catch((e=>{j(e)}))}updateUserPassword(e,t){return R(),V.updateUserPassword(e).then((e=>{z(e,t)})).catch((e=>{j(e)}))}updateUserPhoto(e,t){return R(),V.updateUserPhoto(e).then((e=>{z(e,t)})).catch((e=>{j(e)}))}};var K=new class{constructor(){this.onOpen=this.onOpen.bind(this),this.onMessage=this.onMessage.bind(this),this.onError=this.onError.bind(this),this.onClose=this.onClose.bind(this)}addEvents(){this.ws.addEventListener("open",this.onOpen),this.ws.addEventListener("message",this.onMessage),this.ws.addEventListener("error",this.onError),this.ws.addEventListener("close",this.onClose)}removeEvents(){this.ws.removeEventListener("open",this.onOpen),this.ws.removeEventListener("message",this.onMessage),this.ws.removeEventListener("error",this.onError),this.ws.removeEventListener("close",this.onClose)}onOpen(){console.log("onOpen"),this.getMessages({offset:0}),this.ping=setInterval((()=>{this.ws.send("")}),1e4)}onMessage(e){const t=JSON.parse(e.data);console.log(t)}onError(e){console.error(e.message)}onClose(e){this.removeEvents(),e.wasClean?console.log("Соединение закрыто чисто"):console.log("Проблемы с подключением"),1006===e.code&&this.reconnection()}reconnection(){this.connect({userId:this.userId,chatId:this.chatId,token:this.token})}connect(e){this.userId=e.userId,this.chatId=e.chatId,this.token=e.token,this.ws=new WebSocket("wss://ya-praktikum.tech/ws/chats/"+e.userId+"/"+e.chatId+"/"+e.token),this.addEvents()}getMessages(e){this.ws.send(JSON.stringify({content:e.offset.toString(),type:"get old"}))}closeChat(){clearInterval(this.ping),this.ws.close(),this.removeEvents()}sendMessage(e){this.ws.send(JSON.stringify({content:e,type:"message"}))}};let Q=0;const G={};let X,Y={element:".chat-full-name",name:"",id:0};const ee={title:""};let te,ne;const se={element:".chat-send-box",name:""},re={element:".chat-send-box",id:"",name:" >",classes:"chat-send-button",onClick:e=>{e.preventDefault(),o(".chat-send-box",(function(e){console.log(e),K.sendMessage(e.message),Le()}))}};let ae;const oe={element:".chat-send-box",id:"addFileToMessage",name:"📎",classes:"add-file-button",value:"",onClick:e=>e,onChange:e=>{if(e.target&&e.target.value){const t=e.target.value.split("\\");ne.setProps({name:t[t.length-1]})}}},ie=[{element:".menu-list",id:"",classes:"create-chat-link",wrapClasses:"",name:"Создать чат",href:"#",onClick:e=>{e.preventDefault(),new O(me).insertBlock("#app"),new a(pe).insertBlock("#createChatModal",!0),fe.forEach((function(e){new i(e,"").insertBlock(e.element)})),ge.forEach((function(e){new l(e).insertBlock(e.element)}))}},{element:".menu-list",id:"",classes:"create-chat-link",wrapClasses:"",name:"Мой профиль",href:"/settings",onClick:e=>{e.preventDefault(),u.go("/settings")}},{element:".menu-list",id:"addUserToChat",classes:"create-chat-link",wrapClasses:"none-block",name:"Добавить пользователя",href:"#",onClick:e=>{e.preventDefault(),function(){if(new O(ve).insertBlock("#app"),new a(we).insertBlock("#addUserToChatModal",!0),X&&X.props){parseInt(X.props.id);ke.forEach((function(e){new i(e,"").insertBlock(e.element)})),be.forEach((function(e){new T(e,"").insertBlock(e.element)}))}Ce.forEach((function(e){new l(e).insertBlock(e.element)}))}()}},{element:".menu-list",id:"deleteUserFromChat",classes:"create-chat-link",wrapClasses:"none-block",name:"Удалить пользователя",href:"#",onClick:e=>{e.preventDefault(),function(e){if(new O(ye).insertBlock("#app"),new a(Ee).insertBlock("#deleteUserFromChatModal",!0),X&&X.props){let e=parseInt(X.props.id);xe.forEach((function(e){new T(e,"").insertBlock(e.element)})),$.getChatUsers(e,(function(e){e.forEach((function(t,n){e[n].name=e[n].first_name+" "+e[n].second_name,e[n].value=e[n].id,new L(e[n],"").insertBlock("#selectUser")}))}))}Be.forEach((function(e){new l(e).insertBlock(e.element)}))}()}},{element:".menu-list",id:"",classes:"create-chat-link",wrapClasses:"",name:"Выход",href:"/",onClick:e=>{e.preventDefault(),W.signOut()}}],le=[{element:".profile-block",id:"",classes:"create-chat-link",name:"Меню",href:"#",onClick:e=>{e.preventDefault(),document.getElementById("menuBlock").classList.toggle("none-block")}},{element:".chat-full-name",id:"",classes:"chat-back-button",name:"Закрыть",href:"#",onClick:e=>{e.preventDefault(),function(){X&&X.setProps({name:"",id:0});document.getElementById("selectChat").classList.remove("none-block"),document.getElementById("chatList").classList.remove("chat-full-show"),document.getElementById("chatFullBlock").classList.remove("chat-full-show"),document.getElementById("deleteUserFromChat").classList.add("none-block"),document.getElementById("addUserToChat").classList.add("none-block")}()}}],ce=[{element:"#chat",toMeClass:"message-to-me",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",time:"15.04.2022 12:37"},{element:"#chat",toMeClass:"message-to-me",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",time:"15.04.2022 12:37"},{element:"#chat",toMeClass:"",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",time:"15.04.2022 12:37"}],de={element:".chat-send-box",id:"chatSendBox",name:"message",value:"",required:!0};let ue={element:"#app",id:"deleteWarningMessage",chatId:0,MessageText:"Вы действительно хотите удалить этот чат?"};const he=[{element:".warning-buttons-wrapper",id:"",name:"Да",classes:"warning-add warning-button",onClick:e=>{e.preventDefault(),$.deleteChat(ue.chatId,(function(e){Ue(),_e("deleteWarningMessage")}))}},{element:".warning-buttons-wrapper",id:"",name:"Нет",classes:"warning-back warning-button",onClick:e=>{e.preventDefault(),_e("deleteWarningMessage")}}],me={element:"#app",chatId:0,id:"createChatModal",MessageText:""},pe={title:"Создать чат"},fe=[{element:"#createChatModal .reg-form-fieldset",id:"chatName",name:"title",label:"Название",value:"",type:"text",required:!0,errorText:"Обязательное поле",validationType:"",classList:"",onBlur:e=>{}}],ge=[{element:"#createChatModal .buttons-wrapper",id:"",name:"Создать",classes:"add-link",onClick:e=>{e.preventDefault(),o("#createChatModal .reg-form",(function(e){$.createChat(e,(function(e){Ue(),_e("createChatModal")}))}))}},{element:"#createChatModal .buttons-wrapper",id:"",name:"Отмена",classes:"reg-link",onClick:e=>{e.preventDefault(),_e("createChatModal")}}],ve={element:"#app",id:"addUserToChatModal",chatId:0,MessageText:""},we={title:"Добавить пользователя"},ke=[{element:"#addUserToChatModal .reg-form-fieldset",id:"chatName",name:"title",label:"Поиск",value:"",type:"text",required:!1,errorText:"",validationType:"",classList:"",onBlur:e=>{e.target&&e.target.value&&Z.searchUsers({login:e.target.value},(function(e){document.getElementById("selectUser").textContent="",e.forEach((function(t,n){e[n].name=e[n].first_name+" "+e[n].second_name,e[n].value=e[n].id,new L(e[n],"").insertBlock("#selectUser")}))}))}}],be=[{element:"#addUserToChatModal .reg-form-fieldset",id:"selectUser",name:"user",label:"Пользователь",required:!0,errorText:"Пользователь не выбран",classList:""}],Ce=[{element:"#addUserToChatModal .buttons-wrapper",id:"",name:"Добавить",classes:"add-link",onClick:e=>{e.preventDefault(),o("#addUserToChatModal .reg-form",(function(e){const t={users:[e.user],chatId:parseInt(X.props.id)};$.addUsersToChat(t,(function(e){Ue(),_e("addUserToChatModal")}))}))}},{element:"#addUserToChatModal .buttons-wrapper",id:"",name:"Отмена",classes:"reg-link",onClick:e=>{e.preventDefault(),_e("addUserToChatModal")}}],ye={element:"#app",id:"deleteUserFromChatModal",chatId:0,MessageText:""},Ee={title:"Удалить пользователя"},xe=[{element:"#deleteUserFromChatModal .reg-form-fieldset",id:"selectUser",name:"user",label:"Пользователь",required:!0,errorText:"Пользователь не выбран",classList:""}],Be=[{element:"#deleteUserFromChatModal .buttons-wrapper",id:"",name:"Удалить",classes:"add-link",onClick:e=>{e.preventDefault(),o("#deleteUserFromChatModal .reg-form",(function(e){const t={users:[e.user],chatId:parseInt(X.props.id)};$.deleteUserChat(t,(function(e){Ue(),_e("deleteUserFromChatModal")}))}))}},{element:"#deleteUserFromChatModal .buttons-wrapper",id:"",name:"Отмена",classes:"reg-link",onClick:e=>{e.preventDefault(),_e("deleteUserFromChatModal")}}];function Te(e){const t=e.target.closest(".chat-block"),n=document.getElementById("chatWrapper");t&&n&&(e.target.classList.contains("delete-chat-button")&&t.id?(ue.chatId=t.id,new O(ue).insertBlock("#app"),he.forEach((function(e){new l(e,"").insertBlock(e.element)}))):(document.getElementById("chatList").classList.toggle("chat-full-show"),document.getElementById("menuBlock").classList.add("none-block"),document.getElementById("selectChat").classList.add("none-block"),document.getElementById("chatFullBlock").classList.toggle("chat-full-show"),document.getElementById("deleteUserFromChat").classList.remove("none-block"),document.getElementById("addUserToChat").classList.remove("none-block"),document.getElementById("chat").textContent="",$.getChatToken(t.id,(function(e){console.log(e),e&&e.token&&Q&&K.connect({userId:Q,chatId:parseInt(t.id),token:e.token})})),ce.forEach((function(e){new P(e,"").insertBlock(e.element,!1,!0)})),Le(),n.scrollTop=n.scrollHeight,X&&X.setProps({name:t.getAttribute("data-user-name"),id:t.id})))}function Le(){te.setProps({value:""}),ne.setProps({name:""})}function _e(e){document.getElementById(e).remove()}function Ue(){document.getElementById("chatListBlock").textContent="",$.getChats((function(e){e.forEach((function(t,n){e[n].element=".chat-list",e[n].photoAlt="",e[n].newMessageCount=0,e[n].fromMeHideClass="none-block",e[n].newMessageHideClass="none-block",e[n].onClick=function(e){e.preventDefault(),Te(e)},new M(e[n],"").insertBlock(e[n].element)}))}))}const Ie={title:"Регистрация"},qe=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"",onBlur:e=>{}}],Me=[{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"add-link",onClick:e=>{e.preventDefault(),o(".reg-form",(function(e){b.signUp(e,(function(e){document.getElementById("formInfoBlock").textContent=e}))}))}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),window.history.back()}}];class De extends n{constructor(e,t){t||(t='\n\t<label class="image-form-block" for="{{id}}">\n\t\t<input class="load-image" name="{{name}}" hidden accept="image/*" type="file" id="{{id}}">\n\t\t<img id="{{imageId}}" src="{{imageLink}}" alt="{{imageAlt}}" title="{{imageTitle}}">\n\t</label>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t),s=this;if(n.inner){const e=n.inner.querySelector("input");e&&e.addEventListener("change",(function(e){s.props.onChanged(e)}))}return n}}const Se={title:""},Pe=[{element:".reg-form-fieldset",id:"photoImageUpload",imageId:"userAvatar",name:"avatar",imageLink:"#",imageAlt:"",imageTitle:"",onChanged:e=>{e.preventDefault();const t=document.querySelector(".reg-form");if(!t)return;const n=new FormData(t);var s;console.log(n),s=n,Z.updateUserPhoto(s,(function(e){e&&e.avatar&&Je(e.avatar)}))}}],Oe=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:"",onBlur:e=>{}},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:"",onBlur:e=>{}}],Re=[{element:".reg-form-fieldset",id:"changePasswordButton",name:"Изменить пароль",classes:"reg-link",onClick:e=>{e.preventDefault();let t=document.getElementById(e.target.getAttribute("id")).parentElement.nextElementSibling;for(;t;)t.children[0].classList.remove("none-block"),t=t.nextElementSibling}}],Ne=[{element:".reg-form-fieldset",id:"oldPassword",name:"old_password",label:"Старый пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block",onBlur:e=>{}},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block",onBlur:e=>{}},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block",onBlur:e=>{}}],Ae=[{element:".buttons-wrapper",id:"",name:"Изменить данные",classes:"add-link",onClick:e=>{e.preventDefault(),o(".reg-form",(function(e){e.display_name=e.first_name,Z.updateUserProfile(e,(function(t){t?We(t):e.password&&e.old_password?function(e,t){Z.updateUserPassword({oldPassword:e.old_password,newPassword:e.password},(function(e){e?We(e):t(e)}))}(e,Fe):Fe()}))}))}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),window.history.back()}}];function Fe(){u.go("/messenger")}function We(e){document.getElementById("formInfoBlock").textContent=e,He()}function Je(e){document.getElementById("userAvatar").setAttribute("src","https://ya-praktikum.tech/api/v2/resources/"+e)}function He(){W.checkAuth((function(e){for(let t in e){let n=document.querySelector(".reg-form [name="+t+"]");n&&n.setAttribute("value",e[t]),"avatar"===t&&e[t]&&Je(e[t])}}))}class $e extends n{constructor(e,t){t||(t='\n\t<div class="warning-message-wrapper warning-on">\n\t\t<div class="warning-message-table">\n\t\t\t<div class="warning-message-block">\n\t\t\t\t<div class="loader none-block">//убрать none-block для показа</div>\n\t\t\t\t<div class="error-message warning-message">\n\t\t\t\t\t<div class="error-message-header">{{title}}</div>\n\t\t\t\t\t<span>{{errorText}}</span>\n\t\t\t\t\t<div class="warning-buttons-wrapper">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}}const Ve={title:"Ошибка 404",errorText:"Страница не найдена"},ze=[{element:".warning-buttons-wrapper",id:"",name:"Назад",classes:"warning-add warning-button",onClick:e=>{e.preventDefault(),je()}}];let je=function(){window.history.back()};u.use("/",x).use("/authorization",x).use("/messenger",(function(){document.title="Чат",new q(G).insertBlock("#app",!0),X=new D(Y),X.insertBlock(".chat-full-name"),le.forEach((function(e){new U(e,"").insertBlock(e.element)})),ie.forEach((function(e){new I(e,"").insertBlock(e.element)})),W.checkAuth((function(e){e.id&&(Q=e.id)})),Ue(),new a(ee,'<form class="chat-send-box"></form>').insertBlock(".chat-full-block"),new l(re).insertBlock(".chat-send-box"),ae=new _(oe,""),ae.insertBlock(".chat-send-box"),te=new B(de),te.insertBlock(".chat-send-box"),ne=new S(se),ne.insertBlock(".chat-send-box")})).use("/settings",(function(){document.title="Мой профиль",new a(Se).insertBlock("#app",!0),Pe.forEach((function(e){new De(e).insertBlock(e.element)})),Oe.forEach((function(e){new i(e).insertBlock(e.element)})),Re.forEach((function(e){new l(e).insertBlock(e.element)})),Ne.forEach((function(e){new i(e).insertBlock(e.element)})),Ae.forEach((function(e){new l(e).insertBlock(e.element)})),He()})).use("/sign-up",(function(){document.title="Регистрация",new a(Ie).insertBlock("#app",!0),qe.forEach((function(e){new i(e).insertBlock(e.element)})),Me.forEach((function(e){new l(e).insertBlock(e.element)}))})).use("*",(function(){var e,t,n;t=je,n=ze,(e=Ve)||(e=Ve),"/500"==window.location.pathname&&(e.title="Ошибка 500",e.errorText="Внутренняя ошибка сервера"),n||(n=ze),t&&(je=t),document.title="Ошибка: "+e.title,new $e(e).insertBlock("#app",!0),ze.forEach((function(e){new l(e).insertBlock(e.element)}))})).start(),W.checkAuth((function(e){const t=window.location.pathname.split("/");e.id&&""==t[1]&&u.go("/messenger")}))})();
//# sourceMappingURL=index.7e639c6d.js.map