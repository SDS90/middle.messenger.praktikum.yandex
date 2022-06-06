(()=>{class e{TEMPLATE_REGULAR=/\{\{(.*?)\}\}/;templateBlock="";constructor(e){this.templateBlock=e}generateTemplate(e){return e&&this.templateBlock?this.changeTemplateKeys(e,this.templateBlock,this.TEMPLATE_REGULAR):""}changeTemplateKeys(e,t,n){const s=n.exec(t);if(s&&s[1]){const n=s[1];if(n in e){let a=e[n];a="object"!=typeof a&&"function"!=typeof a?a.toString():"",t=t.replace(s[0],a)}else t=t.replace(s[0],"")}return n.exec(t)?this.changeTemplateKeys(e,t,n):t}}class t{constructor(){this.listeners={}}on(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}off(e,t){if(!this.listeners[e])throw new Error(`Нет события: ${e}`);this.listeners[e]=this.listeners[e].filter((e=>e!==t))}emit(e,...t){if(!this.listeners[e])throw new Event(`Нет события: ${e}`);this.listeners[e].forEach((function(e){e(...t)}))}}class n{static EVENTS={INIT:"init",FLOW_CDM:"flow:component-did-mount",FLOW_CDU:"flow:component-did-update",FLOW_RENDER:"flow:render"};_element=null;constructor(e,s,a,i="div"){this.template=s,this.noTagName=a;const r=new t;this._meta={tagName:i,params:e},this.props=this._makePropsProxy(e),this.eventBus=()=>r,this._registerEvents(r),r.emit(n.EVENTS.INIT)}_registerEvents(e){e.on(n.EVENTS.INIT,this.init.bind(this)),e.on(n.EVENTS.FLOW_CDM,this._componentDidMount.bind(this)),e.on(n.EVENTS.FLOW_CDU,this._componentDidUpdate.bind(this)),e.on(n.EVENTS.FLOW_RENDER,this._render.bind(this))}_createResources(){const{tagName:e}=this._meta;this._element=this._createDocumentElement(e),this._element}init(){this._createResources(),this.eventBus().emit(n.EVENTS.FLOW_CDM)}_componentDidMount(){this.componentDidMount(),this.eventBus().emit(n.EVENTS.FLOW_RENDER)}componentDidMount(){}dispatchComponentDidMoun(){}_componentDidUpdate(e,t){this.componentDidUpdate(e,t)&&this._render()}componentDidUpdate(e,t){return!0}setProps=e=>{e&&Object.assign(this.props,e)};get element(){return this._element}_render(){const e=this.render();this._element&&(this._element.innerHTML=e)}render(){return new e(this.template).generateTemplate(this.props)}getContent(){return this.element}_makePropsProxy(e){const t=this;return new Proxy(e,{get:(e,t)=>"function"==typeof e[t]?e[t].bind(e):e[t],set:(e,s,a)=>(e[s]=a,t.eventBus().emit(n.EVENTS.FLOW_CDU,{...e},e),!0),deleteProperty(){throw new Error("Нет доступа")}})}_createDocumentElement(e){return document.createElement(e)}show(){const e=this.getContent();e&&(e.style.display="block")}hide(){const e=this.getContent();e&&(e.style.display="none")}destroy(){this._element.remove(),this.onDestroy()}onDestroy(){}insertBlock(e,t,n){let s=this.getContent();const a=document.querySelector(e);if(!s||!a)return{};this.noTagName&&(s=s.children[0]);for(let e of a.querySelectorAll('[id=""]'))e.removeAttribute("id");return t&&(a.innerHTML=""),n?a.prepend(s):a.appendChild(s),{inner:s,wrapper:a}}}const s={email:new RegExp(/^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_\.-]+)\.([a-z\.]{2,6})$/),login:new RegExp(/^[A-Za-z0-9_\.-]{3,20}$/),name:new RegExp(/^[A-ZА-Я][a-zA-Zа-яА-Я-]+$/),phone:new RegExp(/^\+?\d{10,15}$/),password:new RegExp(/^((?=.*?[A-Z])(?=.*?[0-9])\S{8,40})\S$/)},a=function(e){const t=e.getAttribute("data-validation-type"),n=e.getAttribute("data-error-text"),a=e.value,i=s[t],r=e.parentElement,o=r.querySelector(".error-text-block");return i&&!i.test(a)?(r.classList.add("error-input"),o&&(o.textContent=n||"Возникла ошибка при заполнении формы. Пожалуйста, проверьте введённые данные."),!1):(r.classList.remove("error-input"),o&&(o.textContent=""),!0)};class i extends n{constructor(e,t){t||(t='\n\t<div class="reg-form-page">\n\t\t<div class="reg-form-wrapper">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<form class="reg-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="reg-form-fieldset"></div>\n\t\t\t\t\t<div class="form-block info-block" id="formInfoBlock"></div>\n\t\t\t\t\t<div class="form-block buttons-wrapper"></div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t</div>'),super(e,t)}}function r(e,t){const n=document.querySelector(e);if(n&&function(e){const t=e.querySelectorAll(".form-block"),n=e.querySelector(".info-block");let s=!0,i="",r="";return n&&(n.textContent=""),t.forEach((function(e){const t=e.querySelector("input")||e.querySelector("textarea")||e.querySelector("select");if(t){const o=t.getAttribute("data-error-text");if(e.classList.contains("none-block")||a(t)||(s=!1),!t.value&&t.getAttribute("data-required")&&!e.classList.contains("none-block")){s=!1;const e=t.closest(".wrapper-element");e&&(e.classList.add("error-input"),e.querySelector(".error-text-block").textContent=o||"Обязательное поле."),n&&(n.textContent="Не все обязательные поля заполнены.")}"password"==t.name&&(i=t.value),"repeat_password"==t.name&&(r=t.value)}})),i&&r&&i!=r&&(s=!1,n.textContent="Пароли не совпадают."),s}(n)){const e=new FormData(n);if(console.log(...e),t){let n={};for(let t of e.keys())n[t]=e.get(t);t(n)}}}class o extends n{constructor(e,t){t||(t='\n\t<div class="form-block {{classList}}">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="input-wrapper wrapper-element">\n\t\t\t<input class="form-control input-styles" data-required="{{required}}" data-error-text="{{errorText}}" \n\t\t\tdata-validation-type="{{validationType}}" id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">\n\t\t\t<div class="error-text-block"></div>\n\t\t</div>\n\t</div>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner){const e=n.inner.querySelector("input");e&&(e.addEventListener("focus",(function(){this.classList.add("focus-input")})),e.addEventListener("blur",(function(){this.classList.remove("focus-input"),a(this)})))}return n}}class l extends n{constructor(e,t){t||(t='<button id="{{id}}" class="button-link {{classes}}">{{name}}</button>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);return n.inner&&(n.inner.addEventListener("click",this.props.onClick),n.inner.addEventListener("touchstart",this.props.onClick)),n}}var c=class{constructor(e,t,n){this.pathname=e,this.blockClass=t,this.block=null,this.props=n}getPathname(){return this.pathname}leave(){this.block&&Object.keys(this.block).length&&this.block.destroy()}match(e){return t=e,n=this.pathname,t===n;var t,n}render(){this.block=new this.blockClass,function(e,t){const n=document.querySelector(e)}(this.props.rootQuery,this.block)}};class d{constructor(e){if(d.__instance)return d.__instance;this.routes=[],this._pathnames=[],this._unprotectedPaths=[],this.history=window.history,this._currentRoute=null,this._rootQuery=e,this._onRouteCallback=()=>{},d.__instance=this}get currentRoute(){return this._currentRoute}use(e,t){const n=new c(e,t,{rootQuery:this._rootQuery});return this.routes.push(n),this._pathnames.push(e),this}_hasRoute(e){return this._pathnames.includes(e)?e:"*"}start(){window.onpopstate=()=>{const e=this._hasRoute(window.location.pathname);this._onRoute(e)};const e=this._hasRoute(window.location.pathname);this._onRoute(e)}_onRoute(e){const t=this.getRoute(e);t&&(this._currentRoute&&this._currentRoute.leave(),this._currentRoute=t,t.render(),this._unprotectedPaths.includes(e)||this._onRouteCallback())}onRoute(e){return this._onRouteCallback=e,this}setUnprotectedPaths(e){return this._unprotectedPaths=e,this}go(e){this.history.pushState({},"",e),this._onRoute(e)}back(){this.history.back()}forward(){this.history.forward()}getRoute(e){return this.routes.find((t=>t.match(e)))}getLocationPathname(){return window.location.pathname}}const u=new d("#app"),m="GET",h="POST",p="PUT",f="DELETE";var g=new class{get=(e,t={})=>this.request(e,{...t,method:m},t.timeout);post=(e,t={})=>this.request(e,{...t,method:h},t.timeout);put=(e,t={})=>this.request(e,{...t,method:p},t.timeout);delete=(e,t={})=>this.request(e,{...t,method:f},t.timeout);request=(e,t={},n=5e3)=>new Promise((function(s,a){const i=new XMLHttpRequest;t.method==m&&t.data&&"object"==typeof t.data?i.open(t.method,function(e){let t="";if("object"==typeof e){t="";for(let n in e)t+=""==t?"?":"&",t=t+n+"="+e[n]}return t}(t.data)):i.open(t.method,e);for(let e in t.headers)i.setRequestHeader(e,t.headers[e]);t.withCredentials&&(i.withCredentials=!0),i.onload=function(){s(i)},i.onabort=a,i.onerror=a,i.timeout=n,i.ontimeout=a,t.method!==m&&t.data?i.send(t.data):i.send()}))};const v={"Content-type":"application/json"};var k=class{constructor(e,t,n){this.http=g,this.baseHref=e||"https://ya-praktikum.tech/api/v2",this.path=t||"",this.headers=v}getPath(){return this.baseHref+this.path}handleOptions(e){const t=e||{};return e.headers?t.headers=e.headers:t.headers=this.headers,t}handleResponse(e){if("OK"==e.response)return{ok:!0};return JSON.parse(e.response)}getHeaders(){return this.headers}get(e,t){return this.http.get(this.getPath()+e,this.handleOptions(t)).then(this.handleResponse)}post(e,t){return this.http.post(this.getPath()+e,this.handleOptions(t)).then(this.handleResponse)}put(e,t){return this.http.put(this.getPath()+e,this.handleOptions(t)).then(this.handleResponse)}delete(e,t){return this.http.delete(this.getPath()+e,this.handleOptions(t)).then(this.handleResponse)}};var w=new class extends k{constructor(){super("","/auth")}signIn(e){return this.post("/signin",{withCredentials:!0,data:JSON.stringify(e)})}signUp(e){return this.post("/signup",{data:JSON.stringify(e)})}checkAuth(){return this.get("/user",{withCredentials:!0})}signOut(){return this.post("/logout",{withCredentials:!0})}};var b=new class{signIn(e,t){return w.signIn(e).then((e=>{e.reason&&t?t(e.reason):u.go("/messenger")})).catch((e=>{e.response&&t?t(e.response):u.go("/500")}))}signUp(e){return console.log(e),w.signUp(e).then((e=>{console.log(e),u.go("/messenger")})).catch((()=>{u.go("/500")}))}signOut(){return w.signOut().then((()=>{u.go("/authorization")}))}checkAuth(){return w.checkAuth().then((e=>{console.log(e)})).catch((e=>{console.log(e),u.go("/sign-in")}))}};const C={title:"Вход"},x=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Обязательное поле",validationType:"",classList:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Обязательное поле",validationType:"",classList:""}],y=[{element:".buttons-wrapper",id:"",name:"Авторизоваться",classes:"add-link",onClick:e=>{e.preventDefault(),r(".reg-form",(function(e){b.signIn(e,(function(e){document.getElementById("formInfoBlock").textContent=e}))}))}},{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"reg-link",onClick:e=>{e.preventDefault(),u.go("/sign-up")}}];function E(){document.title="Вход",new i(C).insertBlock("#app",!0),x.forEach((function(e){new o(e,"").insertBlock(e.element)})),y.forEach((function(e){new l(e).insertBlock(e.element)}))}class B extends n{constructor(e,t){t||(t='\n\t<div class="form-block">\n\t\t<textarea id="{{id}}"  data-required="{{required}}" name="{{name}}" value="{{value}}"></textarea>\n\t</div>\n\t'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner){const e=n.inner.querySelector("textarea");e&&(e.addEventListener("focus",(function(){this.classList.add("focus-input")})),e.addEventListener("blur",(function(){this.classList.remove("focus-input")})))}return n}}class T extends n{constructor(e,t,n=!0){t||(t='\n\t<div class="form-block {{classList}}">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="select-wrapper  wrapper-element clear">\n\t\t\t<div class="select-block">\n\t\t\t\t<select id="{{id}}" name="{{name}}" data-required="{{required}}" data-error-text="{{errorText}}">\n\t\t\t\t\t<option value="" selected disabled></option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class="error-text-block"></div>\n\t\t</div>\n\t</div>'),super(e,t,n)}}class L extends n{constructor(e,t){t||(t='<option value="{{value}}">{{name}}</option>'),super(e,t,!0)}}class _ extends l{constructor(e,t){t||(t='\n<label for="{{id}}" title="Прикрепить файл" class="button-link {{classes}}">\n\t{{name}}\n\t<input class="load-image" hidden accept="image/*" type="file" id="{{id}}" value="{{value}}" name="file">\n</label>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);if(n.inner){const e=n.inner.querySelector("input");e&&e.addEventListener("change",this.props.onChange)}return n}}class q extends n{constructor(e,t,n=!1){t||(t='<a id="{{id}}" class="{{classes}}" href="{{href}}">{{name}}</a>'),super(e,t,n)}insertBlock(e,t){const n=super.insertBlock(e,t);return n.inner&&(n.inner.addEventListener("click",this.props.onClick),n.inner.addEventListener("touchstart",this.props.onClick)),n}}class D extends q{constructor(e,t,n=!0){t||(t='<li id="{{id}}" class="{{wrapClasses}}"><a class="{{classes}}" href="{{href}}">{{name}}</a></li>'),super(e,t,n)}}class M extends n{constructor(e,t){t||(t='\n\t<div class="chat-form-page clear">\n\t\t<div class="chat-list-column" id="chatList">\n\t\t\t<div class="profile-block clear"></div>\n\t\t\t<ul class="menu-list none-block" id="menuBlock"></ul>\n\t\t\t\x3c!--<form class="search-wrapper">\n\t\t\t\t<input class="input-styles search-input" type="text" placeholder="Поиск" name="search">\n\t\t\t</form> --\x3e\n\t\t\t<div class="chat-list" id="chatListBlock"></div>\n\t\t</div>\n\t\t<div class="chat-full-block" id="chatFullBlock">\n\t\t\t<div class="chat-full-name"></div>\n\t\t\t<div class="select-chat-wrapper" id="selectChat">\n\t\t\t\t<div class="select-chat-cell">\n\t\t\t\t\t<span>Выберите чат</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="chat-wrapper" id="chatWrapper"><div class="chat" id="chat"></div></div>\n\t\t</div>\n\t</div>\n\t'),super(e,t)}}class I extends n{constructor(e,t){t||(t='\n\t<div class="chat-block" id="{{id}}" data-user-name="{{title}}">\n\t\t<div class="chat-photo-wrapper">\n\t\t\t<img class="chat-photo" src="{{avatar}}" alt="">\n\t\t</div>\n\t\t<div class="chat-name">{{title}}</div>\n\t\t<div class="chat-preview-text">\n\t\t\t<strong class="{{fromMeHideClass}}">Вы: </strong>\n\t\t\t<span>{{text}}</span>\n\t\t</div>\n\t\t<div class="chat-time">{{time}}</div>\n\t\t<div class="new-messages-info {{newMessageHideClass}}">{{newMessageCount}}</div>\n\t\t<a class="delete-chat-button" href="#">X</a>\n\t</div>'),super(e,t)}insertBlock(e,t){const n=super.insertBlock(e,t);return n.inner&&n.inner.addEventListener("click",this.props.onClick),n}}class R extends n{constructor(e,t){t||(t="{{name}}"),super(e,t)}}class U extends n{constructor(e,t){t||(t='<div class="files-names">{{name}}</div>'),super(e,t)}}class S extends n{constructor(e,t){t||(t='\n\t<div class="chat-message-wrapper {{toMeClass}}">\n\t\t<div class="chat-message-block">\n\t\t\t<div class="chat-message-time">{{time}}</div>\n\t\t\t<div>\n\t\t\t\t{{text}}\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}}class P extends n{constructor(e,t){t||(t='\n\t<div class="warning-message-wrapper warning-on" id="{{id}}">\n\t\t<div class="warning-message-table">\n\t\t\t<div class="warning-message-block">\n\t\t\t\t<div class="warning-message" data-chatId="{{chatId}}">\n\t\t\t\t\t\t<span>{{MessageText}}</span>\n\t\t\t\t\t\t\x3c!--<div class="form-block">\n\t\t\t\t\t\t\t<label>Логин</label>\n\t\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t\t<input class="form-control input-styles" type="text">\n\t\t\t\t\t\t\t\t<div class="error-text-block none-block"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>--\x3e\n\t\t\t\t\t<div class="warning-buttons-wrapper"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}}var N=new class extends k{constructor(){super("","/chats")}createChat(e){return this.post("/",{withCredentials:!0,data:JSON.stringify(e)})}getChats(){return this.get("/",{withCredentials:!0})}deleteChat(e){return this.delete("/",{withCredentials:!0,data:JSON.stringify({chatId:e})})}addUsersToChat(e){return this.put("/users",{withCredentials:!0,data:JSON.stringify(e)})}deleteUsersFromChat(e){return this.delete("/users",{withCredentials:!0,data:JSON.stringify(e)})}requestTokenToConnect(e){return this.post(`/token/${e}`,{withCredentials:!0})}getChatUsers(e){return this.get(`/${e}/users`,{withCredentials:!0})}};function O(){document.getElementById("app").classList.add("loading")}function A(){document.getElementById("app").classList.remove("loading")}function F(e,t,n){e.response&&t?t(e.response):u.go(n),A()}var W=new class{getChats(e){return O(),N.getChats().then((t=>{console.log(t),e(t),A()})).catch((e=>{u.go("/"),console.error(e),F(e)}))}createChat(e,t){return O(),N.createChat(e).then((e=>{t(e.id),A()})).catch((e=>{console.error(e),F(e)}))}deleteChat(e,t){return N.deleteChat(e).then((e=>{t(e,t)})).catch((e=>{console.error(e),F(e,t)}))}getChatUsers(e,t){return N.getChatUsers(e).then((e=>{t(e)})).catch((e=>{console.error(e),F(e,t)}))}deleteUserChat(e,t){N.deleteUsersFromChat(e).then((e=>{t(e)})).catch((e=>{console.error(e),F(e,t)}))}};const H={};let V,$={element:".chat-full-name",name:"",id:0};const z={title:""};let J,j;const Z={element:".chat-send-box",name:""},K={element:".chat-send-box",id:"",name:" >",classes:"chat-send-button",onClick:e=>{e.preventDefault(),r(".chat-send-box",(function(){he()}))}};let Q;const G={element:".chat-send-box",id:"addFileToMessage",name:"📎",classes:"add-file-button",value:"",onClick:e=>e,onChange:e=>{if(e.target&&e.target.value){const t=e.target.value.split("\\");j.setProps({name:t[t.length-1]})}}},X=[{element:".menu-list",id:"",classes:"create-chat-link",wrapClasses:"",name:"Создать чат",href:"#",onClick:e=>{e.preventDefault(),new P(ae).insertBlock("#app"),new i(ie).insertBlock("#createChatModal",!0),re.forEach((function(e){new o(e,"").insertBlock(e.element)})),oe.forEach((function(e){new l(e).insertBlock(e.element)}))}},{element:".menu-list",id:"",classes:"create-chat-link",wrapClasses:"",name:"Мой профиль",href:"/settings",onClick:e=>{e.preventDefault(),u.go("/settings")}},{element:".menu-list",id:"deleteUserFromChat",classes:"create-chat-link",wrapClasses:"none-block",name:"Удалить пользователя",href:"#",onClick:e=>{e.preventDefault(),function(e){if(new P(le).insertBlock("#app"),new i(ce).insertBlock("#deleteUserFromChatModal",!0),V&&V.props){let e=parseInt(V.props.id);de.forEach((function(e){new T(e,"").insertBlock(e.element)})),W.getChatUsers(e,(function(e){e.forEach((function(t,n){e[n].name=e[n].first_name+" "+e[n].second_name,e[n].value=e[n].id,new L(e[n],"").insertBlock("#selectUser")}))}))}ue.forEach((function(e){new l(e).insertBlock(e.element)}))}()}},{element:".menu-list",id:"",classes:"create-chat-link",wrapClasses:"",name:"Выход",href:"/",onClick:e=>{e.preventDefault(),b.signOut()}}],Y=[{element:".profile-block",id:"",classes:"create-chat-link",name:"Меню",href:"#",onClick:e=>{e.preventDefault(),document.getElementById("menuBlock").classList.toggle("none-block")}},{element:".chat-full-name",id:"",classes:"chat-back-button",name:"Закрыть",href:"#",onClick:e=>{e.preventDefault(),function(){V&&V.setProps({name:"",id:0});document.getElementById("selectChat").classList.remove("none-block"),document.getElementById("chatList").classList.remove("chat-full-show"),document.getElementById("chatFullBlock").classList.remove("chat-full-show"),document.getElementById("deleteUserFromChat").classList.add("none-block")}()}}],ee=[{element:"#chat",toMeClass:"message-to-me",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",time:"15.04.2022 12:37"},{element:"#chat",toMeClass:"message-to-me",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",time:"15.04.2022 12:37"},{element:"#chat",toMeClass:"",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",time:"15.04.2022 12:37"}],te={element:".chat-send-box",id:"chatSendBox",name:"message",value:"",required:!0};let ne={element:"#app",id:"deleteWarningMessage",chatId:0,MessageText:"Вы действительно хотите удалить этот чат?"};const se=[{element:".warning-buttons-wrapper",id:"",name:"Да",classes:"warning-add warning-button",onClick:e=>{e.preventDefault(),console.log(e.target),W.deleteChat(ne.chatId,(function(e){fe(),pe("deleteWarningMessage")}))}},{element:".warning-buttons-wrapper",id:"",name:"Нет",classes:"warning-back warning-button",onClick:e=>{e.preventDefault(),pe("deleteWarningMessage")}}],ae={element:"#app",chatId:0,id:"createChatModal",MessageText:""},ie={title:"Создать чат"},re=[{element:"#createChatModal .reg-form-fieldset",id:"chatName",name:"title",label:"Название",value:"",type:"text",required:!0,errorText:"Обязательное поле",validationType:"",classList:""}],oe=[{element:"#createChatModal .buttons-wrapper",id:"",name:"Создать",classes:"add-link",onClick:e=>{e.preventDefault(),r("#createChatModal .reg-form",(function(e){W.createChat(e,(function(e){fe(),pe("createChatModal")}))}))}},{element:"#createChatModal .buttons-wrapper",id:"",name:"Отмена",classes:"reg-link",onClick:e=>{e.preventDefault(),pe("createChatModal")}}],le={element:"#app",id:"deleteUserFromChatModal",chatId:0,MessageText:""},ce={title:"Удалить пользователя"},de=[{element:"#deleteUserFromChatModal .reg-form-fieldset",id:"selectUser",name:"user",label:"Пользователь",required:!0,errorText:"Пользователь не выбран",classList:""}],ue=[{element:"#deleteUserFromChatModal .buttons-wrapper",id:"",name:"Удалить",classes:"add-link",onClick:e=>{e.preventDefault(),r("#deleteUserFromChatModal .reg-form",(function(e){const t={users:[e.user],chatId:parseInt(V.props.id)};W.deleteUserChat(t,(function(e){fe(),pe("deleteUserFromChatModal")}))}))}},{element:"#deleteUserFromChatModal .buttons-wrapper",id:"",name:"Отмена",classes:"reg-link",onClick:e=>{e.preventDefault(),pe("deleteUserFromChatModal")}}];function me(e){const t=e.target.closest(".chat-block"),n=document.getElementById("chatWrapper");t&&n&&(e.target.classList.contains("delete-chat-button")&&t.id?(ne.chatId=t.id,new P(ne).insertBlock("#app"),se.forEach((function(e){new l(e,"").insertBlock(e.element)}))):(document.getElementById("chatList").classList.toggle("chat-full-show"),document.getElementById("menuBlock").classList.add("none-block"),document.getElementById("selectChat").classList.add("none-block"),document.getElementById("chatFullBlock").classList.toggle("chat-full-show"),document.getElementById("deleteUserFromChat").classList.remove("none-block"),document.getElementById("chat").textContent="",ee.forEach((function(e){new S(e,"").insertBlock(e.element,!1,!0)})),he(),n.scrollTop=n.scrollHeight,V&&V.setProps({name:t.getAttribute("data-user-name"),id:t.id})))}function he(){J.setProps({value:""}),j.setProps({name:""})}function pe(e){document.getElementById(e).remove()}function fe(){document.getElementById("chatListBlock").textContent="",W.getChats((function(e){e.forEach((function(t,n){e[n].element=".chat-list",e[n].photoAlt="",e[n].newMessageCount=0,e[n].fromMeHideClass="none-block",e[n].newMessageHideClass="none-block",e[n].onClick=function(e){e.preventDefault(),me(e)},new I(e[n],"").insertBlock(e[n].element)}))}))}const ge={title:"Регистрация"},ve=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:""},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:""},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:""},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:""}],ke=[{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"add-link",onClick:e=>{e.preventDefault(),r(".reg-form",(function(e){b.signUp(e,(function(e){document.getElementById("formInfoBlock").textContent=e}))}))}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault(),window.history.back()}}];class we extends n{constructor(e,t){t||(t='\n\t<label class="image-form-block" for="{{id}}">\n\t\t<input class="load-image" hidden accept="image/*" type="file" id="{{id}}">\n\t\t<img id="{{id}}" src="{{imageLink}}" alt="{{imageAlt}}" title="{{imageTitle}}">\n\t</label>'),super(e,t)}}const be={title:""},Ce=[{element:".reg-form-fieldset",id:"photoImageUpload",imageLink:"#",imageAlt:"",imageTitle:""}],xe=[{element:".reg-form-fieldset",id:"email",name:"email",label:"E-mail",value:"",type:"text",required:!0,errorText:"Неверный формат email",validationType:"email",classList:""},{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",required:!0,errorText:"Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов",validationType:"login",classList:""},{element:".reg-form-fieldset",id:"secondName",name:"second_name",label:"Фамилия",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"firstName",name:"first_name",label:"Имя",value:"",type:"text",required:!0,errorText:"Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса",validationType:"name",classList:""},{element:".reg-form-fieldset",id:"phone",name:"phone",label:"Телефон",value:"",type:"text",required:!0,errorText:"Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса",validationType:"phone",classList:""}],ye=[{element:".reg-form-fieldset",id:"changePasswordButton",name:"Изменить пароль",classes:"reg-link",onClick:e=>{e.preventDefault();let t=document.getElementById(e.target.getAttribute("id")).parentElement.nextElementSibling;for(;t;)t.children[0].classList.remove("none-block"),t=t.nextElementSibling}}],Ee=[{element:".reg-form-fieldset",id:"oldPassword",name:"old_password",label:"Старый пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"},{element:".reg-form-fieldset",id:"repeatPassword",name:"repeat_password",label:"Повторите пароль",value:"",type:"password",required:!0,errorText:"Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру",validationType:"password",classList:"none-block"}],Be=[{element:".buttons-wrapper",id:"",name:"Изменить данные",classes:"add-link",onClick:e=>{e.preventDefault(),r(".reg-form",(function(e){console.log(e)}))}},{element:".buttons-wrapper",id:"",name:"Назад",classes:"reg-link",onClick:e=>{e.preventDefault()}}];class Te extends n{constructor(e,t){t||(t='\n\t<div class="warning-message-wrapper warning-on">\n\t\t<div class="warning-message-table">\n\t\t\t<div class="warning-message-block">\n\t\t\t\t<div class="loader none-block">//убрать none-block для показа</div>\n\t\t\t\t<div class="error-message warning-message">\n\t\t\t\t\t<div class="error-message-header">{{title}}</div>\n\t\t\t\t\t<span>{{errorText}}</span>\n\t\t\t\t\t<div class="warning-buttons-wrapper">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>'),super(e,t)}}const Le={title:"Ошибка 404",errorText:"Страница не найдена"},_e=[{element:".warning-buttons-wrapper",id:"",name:"Назад",classes:"warning-add warning-button",onClick:e=>{e.preventDefault(),qe()}}];let qe=function(){window.history.back()};u.use("/",E).use("/authorization",E).use("/messenger",(function(){document.title="Чат",new M(H).insertBlock("#app",!0),V=new R($),V.insertBlock(".chat-full-name"),Y.forEach((function(e){new q(e,"").insertBlock(e.element)})),X.forEach((function(e){new D(e,"").insertBlock(e.element)})),fe(),new i(z,'<form class="chat-send-box"></form>').insertBlock(".chat-full-block"),new l(K).insertBlock(".chat-send-box"),Q=new _(G,""),Q.insertBlock(".chat-send-box"),J=new B(te),J.insertBlock(".chat-send-box"),j=new U(Z),j.insertBlock(".chat-send-box")})).use("/settings",(function(){document.title="Мой профиль",b.checkAuth(),new i(be).insertBlock("#app",!0),Ce.forEach((function(e){new we(e).insertBlock(e.element)})),xe.forEach((function(e){new o(e).insertBlock(e.element)})),ye.forEach((function(e){new l(e).insertBlock(e.element)})),Ee.forEach((function(e){new o(e).insertBlock(e.element)})),Be.forEach((function(e){new l(e).insertBlock(e.element)}))})).use("/sign-up",(function(){document.title="Регистрация",new i(ge).insertBlock("#app",!0),ve.forEach((function(e){new o(e).insertBlock(e.element)})),ke.forEach((function(e){new l(e).insertBlock(e.element)}))})).use("*",(function(){var e,t,n;t=qe,n=_e,(e=Le)||(e=Le),"/500"==window.location.pathname&&(e.title="Ошибка 500",e.errorText="Внутренняя ошибка сервера"),n||(n=_e),t&&(qe=t),document.title="Ошибка: "+e.title,new Te(e).insertBlock("#app",!0),_e.forEach((function(e){new l(e).insertBlock(e.element)}))})).start(),AuthorizationController.checkAuth((function(e){console.log(e);const t=window.location.pathname.split("/");e.id&&""==t[1]&&u.go("/messenger")}))})();
//# sourceMappingURL=index.7ec3de9b.js.map
