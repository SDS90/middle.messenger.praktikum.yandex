class e{TEMPLATE_REGULAR=/\{\{(.*?)\}\}/;templateBlock="";constructor(e){this.templateBlock=e}generateTemplate(e){return e&&this.templateBlock?this.changeTemplateKeys(e,this.templateBlock,this.TEMPLATE_REGULAR):""}changeTemplateKeys(e,t,n){let r=n.exec(t);if(r&&r[1]){const n=r[1];for(let s in e)s==r[1]&&"string"==typeof e[n]&&(t=t.replace(r[0],e[n]))}return n.exec(t)?this.changeTemplateKeys(e,t,n):t}}const t='\n\t<div class="reg-form-page">\n\t\t<div class="reg-form-wrapper">\n\t\t\t<h2>{{title}}</h2>\n\t\t\t<form class="reg-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="reg-form-fieldset"></div>\n\t\t\t\t\t<div class="form-block info-block">{{errorInfo}}</div>\n\t\t\t\t\t<div class="form-block buttons-wrapper"></div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t</div>';class n{constructor(e){this.params=e}render(){return new e(t).generateTemplate(this.params)}insertBlock(n){const r=(new DOMParser).parseFromString(new e(t).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],s=document.querySelector(n);r&&s&&s.appendChild(r)}}const r='\n\t<div class="form-block">\n\t\t<label class="form-label" for="{{id}}">{{label}}</label>\n\t\t<div class="input-wrapper {{errorHightlightClass}}">\n\t\t\t<input class="form-control input-styles " id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">\n\t\t\t<div class="error-text-block">{{errorText}}</div>\n\t\t</div>\n\t</div>';class s{constructor(e){this.params=e}render(){return new e(r).generateTemplate(this.params)}insertBlock(t){const n=(new DOMParser).parseFromString(new e(r).generateTemplate(this.params),"text/html").getElementsByTagName("div")[0],s=document.querySelector(t);n&&s&&(n.querySelector("input").addEventListener("focus",(()=>n.classList.add("focus-input")),!0),s.appendChild(n))}}class a{constructor(e){this.params=e}render(){return new e('<button class="button-link {{classes}}">{{name}}</button>').generateTemplate(this.params)}insertBlock(t){const n=(new DOMParser).parseFromString(new e('<button class="button-link {{classes}}">{{name}}</button>').generateTemplate(this.params),"text/html").getElementsByTagName("button")[0],r=document.querySelector(t);n&&r&&(n.addEventListener("click",this.params.onClick),r.appendChild(n))}}const l={title:"Вход",errorInfo:""},o=[{element:".reg-form-fieldset",id:"login",name:"login",label:"Логин",value:"",type:"text",errorText:"",errorHightlightClass:""},{element:".reg-form-fieldset",id:"password",name:"password",label:"Пароль",value:"",type:"password",errorText:"",errorHightlightClass:""}],i=[{element:".buttons-wrapper",id:"",name:"Авторизоваться",classes:"add-link",onClick:e=>{e.preventDefault(),console.log(88)}},{element:".buttons-wrapper",id:"",name:"Зарегистрироваться",classes:"reg-link",onClick:e=>{console.log(99)}}];document.addEventListener("DOMContentLoaded",(function(){console.log("DOM готов"),document.getElementById("app"),new n(l).insertBlock("#app"),o.forEach((function(e){new s(e).insertBlock(e.element)})),i.forEach((function(e){new a(e).insertBlock(e.element)}))}));
//# sourceMappingURL=index.139c93cb.js.map
