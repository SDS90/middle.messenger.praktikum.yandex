// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lBgj1":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jeorp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _initScss = require("./scss/init.scss");
var _authorization = require("./pages/authorization");
var _authorizationDefault = parcelHelpers.interopDefault(_authorization);
var _chat = require("./pages/chat");
var _registration = require("./pages/registration");
var _registrationDefault = parcelHelpers.interopDefault(_registration);
var _profile = require("./pages/profile");
var _profileDefault = parcelHelpers.interopDefault(_profile);
var _error = require("./pages/error");
var _errorDefault = parcelHelpers.interopDefault(_error);
function ready() {
    switch(window.location.pathname){
        case '/':
            _authorizationDefault.default();
            break;
        case '/chat':
            _chat.chat();
            break;
        case '/registration':
            _registrationDefault.default();
            break;
        case '/profile':
            _profileDefault.default();
            break;
        default:
            _errorDefault.default();
    }
}
document.addEventListener('DOMContentLoaded', ready);

},{"./scss/init.scss":"2Eqp0","./pages/authorization":"lw0Ql","./pages/chat":"eKBYg","./pages/registration":"24NEt","./pages/profile":"1uafS","./pages/error":"kP9mv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Eqp0":[function() {},{}],"lw0Ql":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Страница авторизации
var _formBlock = require("../elements/form-block");
var _formBlockDefault = parcelHelpers.interopDefault(_formBlock);
var _inputBlock = require("../elements/input-block");
var _inputBlockDefault = parcelHelpers.interopDefault(_inputBlock);
var _buttonBlock = require("../elements/button-block");
var _buttonBlockDefault = parcelHelpers.interopDefault(_buttonBlock);
var _registration = require("./registration");
var _registrationDefault = parcelHelpers.interopDefault(_registration);
var _chat = require("./chat");
const documentTitle = "Вход";
const authorizationForm = {
    title: 'Вход'
};
const authorizationInputs = [
    {
        element: '.reg-form-fieldset',
        id: 'login',
        name: 'login',
        label: 'Логин',
        value: '',
        type: 'text',
        required: true,
        errorText: 'Обязательное поле',
        validationType: '',
        classList: ''
    },
    {
        element: '.reg-form-fieldset',
        id: 'password',
        name: 'password',
        label: 'Пароль',
        value: '',
        type: 'password',
        required: true,
        errorText: 'Обязательное поле',
        validationType: '',
        classList: ''
    }, 
];
const authorizationButtons = [
    {
        element: '.buttons-wrapper',
        id: '',
        name: 'Авторизоваться',
        classes: 'add-link',
        onClick: (event)=>{
            event.preventDefault();
            _formBlock.onSubmitForm('.reg-form', function() {
                _chat.chat();
            });
        }
    },
    {
        element: '.buttons-wrapper',
        id: '',
        name: 'Зарегистрироваться',
        classes: 'reg-link',
        onClick: (event)=>{
            event.preventDefault();
            _registrationDefault.default();
        }
    }, 
];
exports.default = function() {
    document.title = documentTitle;
    window.history.pushState('', '', '/');
    new _formBlockDefault.default(authorizationForm).insertBlock("#app", true);
    authorizationInputs.forEach(function(input) {
        new _inputBlockDefault.default(input, '').insertBlock(input.element);
    });
    authorizationButtons.forEach(function(button) {
        new _buttonBlockDefault.default(button).insertBlock(button.element);
    });
};

},{"../elements/form-block":"53Dkh","../elements/input-block":"iQASN","../elements/button-block":"kgv9I","./registration":"24NEt","./chat":"eKBYg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"53Dkh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onSubmitForm", ()=>onSubmitForm
);
//Блок input
var _block = require("../elements/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _validation = require("../utilities/validation");
const formBlockTemplate = `
	<div class="reg-form-page">
		<div class="reg-form-wrapper">
			<h2>{{title}}</h2>
			<form class="reg-form">
				<fieldset>
					<div class="reg-form-fieldset"></div>
					<div class="form-block info-block"></div>
					<div class="form-block buttons-wrapper"></div>
				</fieldset>
			</form>
		</div>
	</div>`;
class Form extends _blockDefault.default {
    constructor(params, template){
        if (!template) template = formBlockTemplate;
        super(params, template);
    }
}
exports.default = Form;
function onSubmitForm(selector, callback) {
    const form = document.querySelector(selector);
    if (!form) return;
    if (_validation.validForm(form)) {
        const data = new FormData(form);
        console.log(...data);
        if (callback) callback();
    }
    return;
}

},{"../elements/block":"9C7tL","../utilities/validation":"83N4p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9C7tL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Блоки - общее
var _templateGen = require("../utilities/TemplateGen");
var _templateGenDefault = parcelHelpers.interopDefault(_templateGen);
var _eventbus = require("../utilities/eventbus");
class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };
    _element = null;
    constructor(params, template, noTagName, tagName = 'div'){
        this.template = template;
        this.noTagName = noTagName;
        const eventBus = new _eventbus.EventBus();
        this._meta = {
            tagName,
            params
        };
        this.props = this._makePropsProxy(params);
        this.eventBus = ()=>eventBus
        ;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    _createResources() {
        const { tagName  } = this._meta;
        this._element = this._createDocumentElement(tagName);
        this._element;
    }
    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
    _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    componentDidMount() {
        return;
    }
    dispatchComponentDidMoun() {
        return;
    }
    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) return;
        this._render();
    }
    componentDidUpdate(oldProps, newProps) {
        return true;
    }
    setProps = (nextProps)=>{
        if (!nextProps) return;
        Object.assign(this.props, nextProps);
    };
    get element() {
        return this._element;
    }
    _render() {
        const block = this.render();
        if (this._element) this._element.innerHTML = block;
    }
    render() {
        return new _templateGenDefault.default(this.template).generateTemplate(this.props);
    }
    getContent() {
        return this.element;
    }
    _makePropsProxy(props) {
        const self = this;
        return new Proxy(props, {
            get (target, property) {
                if (typeof target[property] == 'function') return target[property].bind(target);
                else return target[property];
            },
            set (target, property, value) {
                target[property] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, {
                    ...target
                }, target);
                return true;
            },
            deleteProperty () {
                throw new Error("Нет доступа");
            }
        });
    }
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
    show() {
        const element = this.getContent();
        if (element) element.style.display = "block";
    }
    hide() {
        const element = this.getContent();
        if (element) element.style.display = "none";
    }
    insertBlock(element, clean, prepend) {
        let inner = this.getContent(); //new DOMParser().parseFromString(new TemplateGen(this.template).generateTemplate(this.props), "text/html").getElementsByTagName("body")[0].childNodes[0];
        const wrapper = document.querySelector(element);
        if (!inner || !wrapper) return {};
        if (this.noTagName) inner = inner.children[0];
        for (let el of wrapper.querySelectorAll('[id=""]'))el.removeAttribute('id');
        if (clean) wrapper.innerHTML = "";
        if (prepend) wrapper.prepend(inner);
        else wrapper.appendChild(inner);
        return {
            inner: inner,
            wrapper: wrapper
        };
    }
}
exports.default = Block;

},{"../utilities/TemplateGen":"49M5E","../utilities/eventbus":"fONFC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49M5E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class TemplateGen {
    TEMPLATE_REGULAR = /\{\{(.*?)\}\}/;
    templateBlock = "";
    constructor(templateBlock){
        this.templateBlock = templateBlock;
    }
    generateTemplate(template) {
        if (template && this.templateBlock) return this.changeTemplateKeys(template, this.templateBlock, this.TEMPLATE_REGULAR);
        return "";
    }
    changeTemplateKeys(template, tmp, templateRegular) {
        const templateKeys = templateRegular.exec(tmp);
        if (templateKeys && templateKeys[1]) {
            const templateKey = templateKeys[1];
            if (templateKey in template) {
                let templateValue = template[templateKey];
                if (typeof templateValue != "object" && typeof templateValue != "function") templateValue = templateValue.toString();
                else templateValue = "";
                tmp = tmp.replace(templateKeys[0], templateValue);
            } else tmp = tmp.replace(templateKeys[0], "");
        }
        if (templateRegular.exec(tmp)) return this.changeTemplateKeys(template, tmp, templateRegular);
        else return tmp;
    }
}
exports.default = TemplateGen;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fONFC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Шина событий
parcelHelpers.export(exports, "EventBus", ()=>EventBus
);
class EventBus {
    constructor(){
        this.listeners = {};
    }
    on(event, callback) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event].push(callback);
    }
    off(event, callback) {
        if (!this.listeners[event]) throw new Error(`Нет события: ${event}`);
        this.listeners[event] = this.listeners[event].filter((listener)=>listener !== callback
        );
    }
    emit(event, ...args) {
        if (!this.listeners[event]) throw new Event(`Нет события: ${event}`);
        this.listeners[event].forEach(function(listener) {
            listener(...args);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"83N4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validValue", ()=>validValue
);
parcelHelpers.export(exports, "validForm", ()=>validForm
);
//Валидация
const defaultValidationErrorMessage = "Возникла ошибка при заполнении формы. Пожалуйста, проверьте введённые данные.";
const repeatPasswordErrorMessage = "Пароли не совпадают.";
const requiredFieldsErrorMessage = "Не все обязательные поля заполнены.";
const requiredFieldMessage = "Обязательное поле.";
const validationRegex = {
    email: new RegExp(/^([A-Za-z0-9_\.-]+)@([A-Za-z0-9_\.-]+)\.([a-z\.]{2,6})$/),
    login: new RegExp(/^[A-Za-z0-9_\.-]{3,20}$/),
    name: new RegExp(/^[A-ZА-Я][a-zA-Zа-яА-Я-]+$/),
    phone: new RegExp(/^\+?\d{10,15}$/),
    password: new RegExp(/^((?=.*?[A-Z])(?=.*?[0-9])\S{8,40})\S$/)
};
const validValue = function(input) {
    const validationType = input.getAttribute("data-validation-type");
    const errorText = input.getAttribute("data-error-text");
    const value = input.value;
    const regex = validationRegex[validationType];
    const inputWrapper = input.parentElement;
    const errorBlock = inputWrapper.querySelector(".error-text-block");
    if (regex && !regex.test(value)) {
        inputWrapper.classList.add('error-input');
        if (errorBlock) {
            if (errorText) errorBlock.textContent = errorText;
            else errorBlock.textContent = defaultValidationErrorMessage;
        }
        return false;
    }
    inputWrapper.classList.remove('error-input');
    if (errorBlock) errorBlock.textContent = "";
    return true;
};
const validForm = function(form) {
    const formBlocks = form.querySelectorAll('.form-block');
    const infoBlock = form.querySelector(".info-block");
    let isFormValid = true;
    let password = "", repeatPassword = "";
    if (infoBlock) infoBlock.textContent = "";
    formBlocks.forEach(function(formBlock) {
        const input = formBlock.querySelector("input") || formBlock.querySelector("textarea");
        if (input) {
            const errorText = input.getAttribute("data-error-text");
            if (!formBlock.classList.contains("none-block") && !validValue(input)) isFormValid = false;
            if (!input.value && input.getAttribute("data-required") && !formBlock.classList.contains("none-block")) {
                isFormValid = false;
                const errorWrapper = input.parentElement;
                if (errorWrapper) {
                    errorWrapper.classList.add("error-input");
                    if (errorText) errorWrapper.querySelector(".error-text-block").textContent = errorText;
                    else errorWrapper.querySelector(".error-text-block").textContent = requiredFieldMessage;
                }
                if (infoBlock) infoBlock.textContent = requiredFieldsErrorMessage;
            }
            if (input.name == "password") password = input.value;
            if (input.name == "repeat_password") repeatPassword = input.value;
        }
    });
    if (password && repeatPassword && password != repeatPassword) {
        isFormValid = false;
        infoBlock.textContent = repeatPasswordErrorMessage;
    }
    return isFormValid;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQASN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Блок input
var _block = require("../elements/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _validation = require("../utilities/validation");
const inputBlockTemplate = `
	<div class="form-block {{classList}}">
		<label class="form-label" for="{{id}}">{{label}}</label>
		<div class="input-wrapper">
			<input class="form-control input-styles" data-required="{{required}}" data-error-text="{{errorText}}" 
			data-validation-type="{{validationType}}" id="{{id}}" type="{{type}}" value="{{value}}" name="{{name}}">
			<div class="error-text-block"></div>
		</div>
	</div>`;
class Input extends _blockDefault.default {
    //params: InputParams
    constructor(params, template){
        if (!template) template = inputBlockTemplate;
        super(params, template);
    }
    insertBlock(element, clean) {
        const insertedBlock = super.insertBlock(element, clean);
        if (insertedBlock.inner) {
            const input = insertedBlock.inner.querySelector('input');
            if (input) {
                input.addEventListener('focus', function() {
                    this.classList.add('focus-input');
                });
                input.addEventListener('blur', function() {
                    this.classList.remove('focus-input');
                    _validation.validValue(this);
                });
            }
        }
        return insertedBlock;
    }
}
exports.default = Input;

},{"../elements/block":"9C7tL","../utilities/validation":"83N4p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kgv9I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Блок кнопки
var _block = require("../elements/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
const buttonBlockTemplate = `<button id="{{id}}" class="button-link {{classes}}">{{name}}</button>`;
class Button extends _blockDefault.default {
    constructor(params, template){
        if (!template) template = buttonBlockTemplate;
        super(params, template);
    }
    insertBlock(element, clean) {
        const insertedBlock = super.insertBlock(element, clean);
        if (insertedBlock.inner) {
            insertedBlock.inner.addEventListener('click', this.props.onClick);
            insertedBlock.inner.addEventListener('touchstart', this.props.onClick);
        }
        return insertedBlock;
    }
}
exports.default = Button;

},{"../elements/block":"9C7tL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"24NEt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Страница регистрации
var _formBlock = require("../elements/form-block");
var _formBlockDefault = parcelHelpers.interopDefault(_formBlock);
var _inputBlock = require("../elements/input-block");
var _inputBlockDefault = parcelHelpers.interopDefault(_inputBlock);
var _buttonBlock = require("../elements/button-block");
var _buttonBlockDefault = parcelHelpers.interopDefault(_buttonBlock);
var _authorization = require("./authorization");
var _authorizationDefault = parcelHelpers.interopDefault(_authorization);
var _chat = require("./chat");
const documentTitle = "Регистрация";
const registrationForm = {
    title: 'Регистрация'
};
const registrationInputs = [
    {
        element: '.reg-form-fieldset',
        id: 'email',
        name: 'email',
        label: 'E-mail',
        value: '',
        type: 'text',
        required: true,
        errorText: 'Неверный формат email',
        validationType: 'email',
        classList: ''
    },
    {
        element: '.reg-form-fieldset',
        id: 'login',
        name: 'login',
        label: 'Логин',
        value: '',
        type: 'text',
        required: true,
        errorText: 'Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов',
        validationType: 'login',
        classList: ''
    },
    {
        element: '.reg-form-fieldset',
        id: 'secondName',
        name: 'second_name',
        label: 'Фамилия',
        value: '',
        type: 'text',
        required: true,
        errorText: 'Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса',
        validationType: 'name',
        classList: ''
    },
    {
        element: '.reg-form-fieldset',
        id: 'firstName',
        name: 'first_name',
        label: 'Имя',
        value: '',
        type: 'text',
        required: true,
        errorText: 'Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса',
        validationType: 'name',
        classList: ''
    },
    {
        element: '.reg-form-fieldset',
        id: 'phone',
        name: 'phone',
        label: 'Телефон',
        value: '',
        type: 'text',
        required: true,
        errorText: 'Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса',
        validationType: 'phone',
        classList: ''
    },
    {
        element: '.reg-form-fieldset',
        id: 'password',
        name: 'password',
        label: 'Пароль',
        value: '',
        type: 'password',
        required: true,
        errorText: 'Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру',
        validationType: 'password',
        classList: ''
    },
    {
        element: '.reg-form-fieldset',
        id: 'repeatPassword',
        name: 'repeat_password',
        label: 'Повторите пароль',
        value: '',
        type: 'password',
        required: true,
        errorText: 'Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру',
        validationType: 'password',
        classList: ''
    }, 
];
const registrationButtons = [
    {
        element: '.buttons-wrapper',
        id: '',
        name: 'Зарегистрироваться',
        classes: 'add-link',
        onClick: (event)=>{
            event.preventDefault();
            _formBlock.onSubmitForm('.reg-form', function() {
                _chat.chat();
            });
        }
    },
    {
        element: '.buttons-wrapper',
        id: '',
        name: 'Назад',
        classes: 'reg-link',
        onClick: (event)=>{
            event.preventDefault();
            _authorizationDefault.default();
        }
    }, 
];
exports.default = function() {
    document.title = documentTitle;
    window.history.pushState('', '', 'registration');
    new _formBlockDefault.default(registrationForm).insertBlock("#app", true);
    registrationInputs.forEach(function(input) {
        new _inputBlockDefault.default(input).insertBlock(input.element);
    });
    registrationButtons.forEach(function(button) {
        new _buttonBlockDefault.default(button).insertBlock(button.element);
    });
};

},{"../elements/form-block":"53Dkh","../elements/input-block":"iQASN","../elements/button-block":"kgv9I","./authorization":"lw0Ql","./chat":"eKBYg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKBYg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chat", ()=>chat
);
//Страница чата
var _formBlock = require("../elements/form-block");
var _formBlockDefault = parcelHelpers.interopDefault(_formBlock);
var _textareaBlock = require("../elements/textarea-block");
var _textareaBlockDefault = parcelHelpers.interopDefault(_textareaBlock);
var _buttonBlock = require("../elements/button-block");
var _buttonBlockDefault = parcelHelpers.interopDefault(_buttonBlock);
var _addFileBlock = require("../elements/add-file-block");
var _addFileBlockDefault = parcelHelpers.interopDefault(_addFileBlock);
var _linkBlock = require("../elements/link-block");
var _linkBlockDefault = parcelHelpers.interopDefault(_linkBlock);
var _menuLinkBlock = require("../elements/menu-link-block");
var _menuLinkBlockDefault = parcelHelpers.interopDefault(_menuLinkBlock);
var _chatWrapper = require("../elements/chat-wrapper");
var _chatWrapperDefault = parcelHelpers.interopDefault(_chatWrapper);
var _chatBlock = require("../elements/chat-block");
var _chatBlockDefault = parcelHelpers.interopDefault(_chatBlock);
var _chatName = require("../elements/chat-name");
var _chatNameDefault = parcelHelpers.interopDefault(_chatName);
var _filesName = require("../elements/files-name");
var _filesNameDefault = parcelHelpers.interopDefault(_filesName);
var _messageBlock = require("../elements/message-block");
var _messageBlockDefault = parcelHelpers.interopDefault(_messageBlock);
var _modalBlock = require("../elements/modal-block");
var _modalBlockDefault = parcelHelpers.interopDefault(_modalBlock);
var _authorization = require("./authorization");
var _authorizationDefault = parcelHelpers.interopDefault(_authorization);
var _error = require("./error"); //может пригодиться передача параметров ошибки в {showError}
var _profile = require("./profile");
var _profileDefault = parcelHelpers.interopDefault(_profile);
const documentTitle = "Чат";
const chatParams = {};
let chatName;
const chatNameParams = {
    element: '.chat-full-name',
    name: ''
};
const sendForm = {
    title: ''
};
let textArea;
let filesName;
const filesNameParams = {
    element: '.chat-send-box',
    name: ''
};
const sendButton = {
    element: '.chat-send-box',
    id: '',
    name: ' >',
    classes: 'chat-send-button',
    onClick: (event)=>{
        event.preventDefault();
        _formBlock.onSubmitForm('.chat-send-box', function() {
            reloadChatSender();
        });
    }
};
let addFile;
const addFileButton = {
    element: '.chat-send-box',
    id: 'addFileToMessage',
    name: '📎',
    classes: 'add-file-button',
    value: '',
    onClick: (event)=>{
        return event;
    },
    onChange: (event)=>{
        if (event.target && event.target.value) {
            const valueArray = event.target.value.split("\\");
            filesName.setProps({
                name: valueArray[valueArray.length - 1]
            });
        }
    }
};
const menuLinks = [
    {
        element: '.menu-list',
        id: '',
        classes: 'create-chat-link',
        name: 'Создать чат',
        href: '#',
        onClick: (event)=>{
            event.preventDefault();
            _error.showError({
                title: 'Ошибка 400',
                errorText: 'Неверный запрос'
            }, chat); //передача параметров ошибки
        }
    },
    {
        element: '.menu-list',
        id: '',
        classes: 'create-chat-link',
        name: 'Мой профиль',
        href: 'profile',
        onClick: (event)=>{
            event.preventDefault();
            _profileDefault.default();
        }
    },
    {
        element: '.menu-list',
        id: '',
        classes: 'create-chat-link',
        name: 'Выход',
        href: 'authorization',
        onClick: (event)=>{
            event.preventDefault();
            _authorizationDefault.default();
        }
    }, 
];
const chatProfileLinks = [
    {
        element: '.profile-block',
        id: '',
        classes: 'create-chat-link',
        name: 'Меню',
        href: '#',
        onClick: (event)=>{
            event.preventDefault();
            document.getElementById('menuBlock').classList.toggle('none-block');
        }
    },
    {
        element: '.chat-full-name',
        id: '',
        classes: 'chat-back-button',
        name: 'Закрыть',
        href: '#',
        onClick: (event)=>{
            event.preventDefault();
            document.getElementById("selectChat").classList.remove("none-block");
            document.getElementById("chatList").classList.remove('chat-full-show');
            document.getElementById("chatFullBlock").classList.remove('chat-full-show');
        }
    }, 
];
const chatList = [
    {
        element: '.chat-list',
        id: '1',
        photoLink: '',
        name: 'Андрей Андрейченков',
        photoAlt: '',
        fromMeHideClass: 'none-block',
        text: 'Круто!',
        time: '15.04.2022 15:31',
        newMessageHideClass: '',
        newMessageCount: 10,
        onClick: (event)=>{
            event.preventDefault();
            onChatClick(event);
        }
    },
    {
        element: '.chat-list',
        id: '2',
        photoLink: '',
        name: 'Михалыч',
        photoAlt: '',
        fromMeHideClass: '',
        text: 'Отлично!',
        time: '15.04.2022 15:31',
        newMessageHideClass: 'none-block',
        newMessageCount: 0,
        onClick: (event)=>{
            event.preventDefault();
            onChatClick(event);
        }
    }, 
];
const messageList = [
    {
        element: '#chat',
        toMeClass: 'message-to-me',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
        time: '15.04.2022 12:37'
    },
    {
        element: '#chat',
        toMeClass: 'message-to-me',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
        time: '15.04.2022 12:37'
    },
    {
        element: '#chat',
        toMeClass: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
        time: '15.04.2022 12:37'
    }, 
];
const textareaParams = {
    element: '.chat-send-box',
    id: 'chatSendBox',
    name: 'message',
    value: '',
    required: true
};
const deleteWarningMessage = {
    element: '#app',
    id: 'deleteWarningMessage',
    MessageText: 'Вы действительно хотите удалить этот чат?'
};
const deleteButtons = [
    {
        element: '.warning-buttons-wrapper',
        id: '',
        name: 'Да',
        classes: 'warning-add warning-button',
        onClick: (event)=>{
            event.preventDefault();
            //Вызывать удаление
            document.getElementById("deleteWarningMessage").remove();
        }
    },
    {
        element: '.warning-buttons-wrapper',
        id: '',
        name: 'Нет',
        classes: 'warning-back warning-button',
        onClick: (event)=>{
            event.preventDefault();
            document.getElementById("deleteWarningMessage").remove();
        }
    }, 
];
function onChatClick(event) {
    const chatBlock = event.target.closest(".chat-block");
    const chatWrapper = document.getElementById("chatWrapper");
    if (!chatBlock || !chatWrapper) return;
    if (event.target.classList.contains("delete-chat-button")) {
        new _modalBlockDefault.default(deleteWarningMessage).insertBlock("#app");
        deleteButtons.forEach(function(button) {
            new _buttonBlockDefault.default(button, '').insertBlock(button.element);
        });
    } else {
        document.getElementById("chatList").classList.toggle('chat-full-show');
        document.getElementById('menuBlock').classList.add('none-block');
        document.getElementById("selectChat").classList.add("none-block");
        document.getElementById("chatFullBlock").classList.toggle('chat-full-show');
        document.getElementById("chat").innerHTML = "";
        messageList.forEach(function(message) {
            new _messageBlockDefault.default(message, '').insertBlock(message.element, false, true);
        });
        reloadChatSender();
        chatWrapper.scrollTop = chatWrapper.scrollHeight;
        if (chatName) chatName.setProps({
            name: chatBlock.getAttribute("data-user-name")
        });
    }
}
function reloadChatSender() {
    textArea.setProps({
        value: ""
    });
    filesName.setProps({
        name: ""
    });
}
function chat() {
    document.title = documentTitle;
    window.history.pushState('', '', 'chat');
    new _chatWrapperDefault.default(chatParams).insertBlock("#app", true);
    chatName = new _chatNameDefault.default(chatNameParams);
    chatName.insertBlock('.chat-full-name');
    chatProfileLinks.forEach(function(link) {
        new _linkBlockDefault.default(link, '').insertBlock(link.element);
    });
    menuLinks.forEach(function(link) {
        new _menuLinkBlockDefault.default(link, '').insertBlock(link.element);
    });
    chatList.forEach(function(chat1) {
        new _chatBlockDefault.default(chat1, '').insertBlock(chat1.element);
    });
    new _formBlockDefault.default(sendForm, '<form class="chat-send-box"></form>').insertBlock(".chat-full-block");
    new _buttonBlockDefault.default(sendButton).insertBlock(".chat-send-box");
    addFile = new _addFileBlockDefault.default(addFileButton, '');
    addFile.insertBlock(".chat-send-box");
    textArea = new _textareaBlockDefault.default(textareaParams);
    textArea.insertBlock(".chat-send-box");
    filesName = new _filesNameDefault.default(filesNameParams);
    filesName.insertBlock(".chat-send-box");
}

},{"../elements/form-block":"53Dkh","../elements/textarea-block":"iquh5","../elements/button-block":"kgv9I","../elements/add-file-block":"aiXiZ","../elements/link-block":"knjia","../elements/menu-link-block":"2qAyd","../elements/chat-wrapper":"ksvwI","../elements/chat-block":"irlHs","../elements/chat-name":"7ZTd2","../elements/files-name":"kP0u0","../elements/message-block":"awzvX","../elements/modal-block":"2wd2M","./authorization":"lw0Ql","./error":"kP9mv","./profile":"1uafS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iquh5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Блок textarea
var _block = require("../elements/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
const textareaBlockTemplate = `
	<div class="form-block">
		<textarea id="{{id}}"  data-required="{{required}}" name="{{name}}" value="{{value}}"></textarea>
	</div>
	`;
class Textarea extends _blockDefault.default {
    //params: InputParams
    constructor(params, template){
        if (!template) template = textareaBlockTemplate;
        super(params, template);
    }
    insertBlock(element, clean) {
        const insertedBlock = super.insertBlock(element, clean);
        if (insertedBlock.inner) {
            const textarea = insertedBlock.inner.querySelector('textarea');
            if (textarea) {
                textarea.addEventListener('focus', function() {
                    this.classList.add('focus-input');
                });
                textarea.addEventListener('blur', function() {
                    this.classList.remove('focus-input');
                });
            }
        }
        return insertedBlock;
    }
}
exports.default = Textarea;

},{"../elements/block":"9C7tL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aiXiZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Блок кнопки добавления файла
var _buttonBlock = require("../elements/button-block");
var _buttonBlockDefault = parcelHelpers.interopDefault(_buttonBlock);
const addFileBlockTemplate = `
<label for="{{id}}" title="Прикрепить файл" class="button-link {{classes}}">
	{{name}}
	<input class="load-image" hidden accept="image/*" type="file" id="{{id}}" value="{{value}}" name="file">
</label>`;
class AddFileButton extends _buttonBlockDefault.default {
    constructor(params, template){
        if (!template) template = addFileBlockTemplate;
        super(params, template);
    }
    insertBlock(element, clean) {
        const insertedBlock = super.insertBlock(element, clean);
        if (insertedBlock.inner) {
            const innerInput = insertedBlock.inner.querySelector('input');
            if (innerInput) innerInput.addEventListener('change', this.props.onChange);
        }
        return insertedBlock;
    }
}
exports.default = AddFileButton;

},{"../elements/button-block":"kgv9I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knjia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Блок ссылки
var _block = require("../elements/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
const linkBlockTemplate = `<a id="{{id}}" class="{{classes}}" href="{{href}}">{{name}}</a>`;
class Link extends _blockDefault.default {
    constructor(params, template, noTagName = false){
        if (!template) template = linkBlockTemplate;
        super(params, template, noTagName);
    }
    insertBlock(element, clean) {
        const insertedBlock = super.insertBlock(element, clean);
        if (insertedBlock.inner) {
            insertedBlock.inner.addEventListener('click', this.props.onClick);
            insertedBlock.inner.addEventListener('touchstart', this.props.onClick);
        }
        return insertedBlock;
    }
}
exports.default = Link;

},{"../elements/block":"9C7tL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qAyd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Блок ссылки в меню
var _linkBlock = require("../elements/link-block");
var _linkBlockDefault = parcelHelpers.interopDefault(_linkBlock);
const menuLinkBlockTemplate = `<li><a id="{{id}}" class="{{classes}}" href="{{href}}">{{name}}</a></li>`;
class MenuLink extends _linkBlockDefault.default {
    constructor(params, template, noTagName = true){
        if (!template) template = menuLinkBlockTemplate;
        super(params, template, noTagName);
    }
}
exports.default = MenuLink;

},{"../elements/link-block":"knjia","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ksvwI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Блок чата (общий)
var _block = require("../elements/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
const chatWrapperTemplate = `
	<div class="chat-form-page clear">
		<div class="chat-list-column" id="chatList">
			<div class="profile-block clear"></div>
			<ul class="menu-list none-block" id="menuBlock"></ul>
			<!--<form class="search-wrapper">
				<input class="input-styles search-input" type="text" placeholder="Поиск" name="search">
			</form> -->
			<div class="chat-list"></div>
		</div>
		<div class="chat-full-block" id="chatFullBlock">
			<div class="chat-full-name"></div>
			<div class="select-chat-wrapper" id="selectChat">
				<div class="select-chat-cell">
					<span>Выберите чат</span>
				</div>
			</div>
			<div class="chat-wrapper" id="chatWrapper"><div class="chat" id="chat"></div></div>
		</div>
	</div>
	`;
class Chat extends _blockDefault.default {
    constructor(params, template){
        if (!template) template = chatWrapperTemplate;
        super(params, template);
    }
}
exports.default = Chat;

},{"../elements/block":"9C7tL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"irlHs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Блок чата (пользователь)
var _block = require("../elements/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
const chatBlockTemplate = `
	<div class="chat-block" id="{{id}}" data-user-name="{{name}}">
		<div class="chat-photo-wrapper">
			<img class="chat-photo" src="{{photoLink}}" alt="{{photoAlt}}">
		</div>
		<div class="chat-name">{{name}}</div>
		<div class="chat-preview-text">
			<strong class="{{fromMeHideClass}}">Вы: </strong>
			<span>{{text}}</span>
		</div>
		<div class="chat-time">{{time}}</div>
		<div class="new-messages-info {{newMessageHideClass}}">{{newMessageCount}}</div>
		<a class="delete-chat-button" href="#">X</a>
	</div>`;
class ChatBlock extends _blockDefault.default {
    constructor(params, template){
        if (!template) template = chatBlockTemplate;
        super(params, template);
    }
    insertBlock(element, clean) {
        const insertedBlock = super.insertBlock(element, clean);
        if (insertedBlock.inner) insertedBlock.inner.addEventListener('click', this.props.onClick);
        return insertedBlock;
    }
}
exports.default = ChatBlock;

},{"../elements/block":"9C7tL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ZTd2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Имя чата
var _block = require("../elements/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
const chatNameTemplate = `{{name}}`;
class ChatName extends _blockDefault.default {
    constructor(params, template){
        if (!template) template = chatNameTemplate;
        super(params, template);
    }
}
exports.default = ChatName;

},{"../elements/block":"9C7tL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kP0u0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Названия файлов
var _block = require("../elements/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
const filesNameTemplate = `<div class="files-names">{{name}}</div>`;
class FilesName extends _blockDefault.default {
    constructor(params, template){
        if (!template) template = filesNameTemplate;
        super(params, template);
    }
}
exports.default = FilesName;

},{"../elements/block":"9C7tL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"awzvX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Блок сообщения
var _block = require("../elements/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
const messageBlockTemplate = `
	<div class="chat-message-wrapper {{toMeClass}}">
		<div class="chat-message-block">
			<div class="chat-message-time">{{time}}</div>
			<div>
				{{text}}
			</div>
		</div>
	</div>`;
class MessageBlock extends _blockDefault.default {
    constructor(params, template){
        if (!template) template = messageBlockTemplate;
        super(params, template);
    }
}
exports.default = MessageBlock;

},{"../elements/block":"9C7tL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wd2M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Блок модального окна
var _block = require("../elements/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
//import Input, { InputParams } from '../elements/input-block'; - может пригодиться позже при использовании форм в окне
const modalTemplate = `
	<div class="warning-message-wrapper warning-on" id="{{id}}">
		<div class="warning-message-table">
			<div class="warning-message-block">
				<div class="warning-message">
						<span>{{MessageText}}</span>
						<!--<div class="form-block">
							<label>Логин</label>
							<div class="input-wrapper">
								<input class="form-control input-styles" type="text">
								<div class="error-text-block none-block"></div>
							</div>
						</div>-->
					<div class="warning-buttons-wrapper"></div>
				</div>
			</div>
		</div>
	</div>`;
class Modal extends _blockDefault.default {
    constructor(params, template){
        if (!template) template = modalTemplate;
        super(params, template);
    }
}
exports.default = Modal;

},{"../elements/block":"9C7tL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kP9mv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showError", ()=>showError
);
//Страница ошибки
var _buttonBlock = require("../elements/button-block");
var _buttonBlockDefault = parcelHelpers.interopDefault(_buttonBlock);
var _errorBlock = require("../elements/error-block");
var _errorBlockDefault = parcelHelpers.interopDefault(_errorBlock);
const documentTitle = "Ошибка";
const errorBlock = {
    title: 'Ошибка 404',
    errorText: 'Страница не найдена'
};
const errorButtons = [
    {
        element: '.warning-buttons-wrapper',
        id: '',
        name: 'Назад',
        classes: 'warning-add warning-button',
        onClick: (event)=>{
            event.preventDefault();
            errorBackFunction();
        }
    }, 
];
let errorBackFunction = function() {
    window.history.back();
};
function showError(InnerErrorParams, innerBackFunction, innerErrorButtons) {
    if (!InnerErrorParams) InnerErrorParams = errorBlock;
    if (!innerErrorButtons) innerErrorButtons = errorButtons;
    if (innerBackFunction) errorBackFunction = innerBackFunction;
    document.title = documentTitle + ': ' + InnerErrorParams.title;
    new _errorBlockDefault.default(InnerErrorParams).insertBlock("#app", true);
    errorButtons.forEach(function(button) {
        new _buttonBlockDefault.default(button).insertBlock(button.element);
    });
}
exports.default = function() {
    showError(errorBlock, errorBackFunction, errorButtons);
};

},{"../elements/button-block":"kgv9I","../elements/error-block":"gzG1G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzG1G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Блок ошибки
var _block = require("../elements/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
//<a class="warning-add warning-button" href="chat.html">Назад</a>-
const errorBlockTemplate = `
	<div class="warning-message-wrapper warning-on">
		<div class="warning-message-table">
			<div class="warning-message-block">
				<div class="loader none-block">//убрать none-block для показа</div>
				<div class="error-message warning-message">
					<div class="error-message-header">{{title}}</div>
					<span>{{errorText}}</span>
					<div class="warning-buttons-wrapper">
					</div>
				</div>
			</div>
		</div>
	</div>`;
class Error extends _blockDefault.default {
    constructor(params, template){
        if (!template) template = errorBlockTemplate;
        super(params, template);
    }
}
exports.default = Error;

},{"../elements/block":"9C7tL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1uafS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Страница профиля
var _formBlock = require("../elements/form-block");
var _formBlockDefault = parcelHelpers.interopDefault(_formBlock);
var _inputBlock = require("../elements/input-block");
var _inputBlockDefault = parcelHelpers.interopDefault(_inputBlock);
var _buttonBlock = require("../elements/button-block");
var _buttonBlockDefault = parcelHelpers.interopDefault(_buttonBlock);
var _imageInputBlock = require("../elements/image-input-block");
var _imageInputBlockDefault = parcelHelpers.interopDefault(_imageInputBlock);
var _chat = require("./chat");
const documentTitle = "Мой профиль";
const profileForm = {
    title: ''
};
const profileImageInputs = [
    {
        element: '.reg-form-fieldset',
        id: 'photoImageUpload',
        imageLink: '#',
        imageAlt: '',
        imageTitle: ''
    }
];
const profileInputs = [
    {
        element: '.reg-form-fieldset',
        id: 'email',
        name: 'email',
        label: 'E-mail',
        value: '',
        type: 'text',
        required: true,
        errorText: 'Неверный формат email',
        validationType: 'email',
        classList: ''
    },
    {
        element: '.reg-form-fieldset',
        id: 'login',
        name: 'login',
        label: 'Логин',
        value: '',
        type: 'text',
        required: true,
        errorText: 'Логин должен содержать от 3 до 20 латинских символов, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов',
        validationType: 'login',
        classList: ''
    },
    {
        element: '.reg-form-fieldset',
        id: 'secondName',
        name: 'second_name',
        label: 'Фамилия',
        value: '',
        type: 'text',
        required: true,
        errorText: 'Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса',
        validationType: 'name',
        classList: ''
    },
    {
        element: '.reg-form-fieldset',
        id: 'firstName',
        name: 'first_name',
        label: 'Имя',
        value: '',
        type: 'text',
        required: true,
        errorText: 'Первая буква должна быть заглавной, без пробелов, цифр и спецсимволов, кроме дефиса',
        validationType: 'name',
        classList: ''
    },
    {
        element: '.reg-form-fieldset',
        id: 'phone',
        name: 'phone',
        label: 'Телефон',
        value: '',
        type: 'text',
        required: true,
        errorText: 'Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса',
        validationType: 'phone',
        classList: ''
    }, 
];
const changePasswordButtons = [
    {
        element: '.reg-form-fieldset',
        id: 'changePasswordButton',
        name: 'Изменить пароль',
        classes: 'reg-link',
        onClick: (event)=>{
            event.preventDefault();
            const changePasswordButton = document.getElementById(event.target.getAttribute('id'));
            let showElement = changePasswordButton.parentElement.nextElementSibling;
            while(showElement){
                showElement.children[0].classList.remove("none-block");
                showElement = showElement.nextElementSibling;
            }
        }
    }, 
];
const changePasswordInputs = [
    {
        element: '.reg-form-fieldset',
        id: 'oldPassword',
        name: 'old_password',
        label: 'Старый пароль',
        value: '',
        type: 'password',
        required: true,
        errorText: 'Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру',
        validationType: 'password',
        classList: 'none-block'
    },
    {
        element: '.reg-form-fieldset',
        id: 'password',
        name: 'password',
        label: 'Пароль',
        value: '',
        type: 'password',
        required: true,
        errorText: 'Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру',
        validationType: 'password',
        classList: 'none-block'
    },
    {
        element: '.reg-form-fieldset',
        id: 'repeatPassword',
        name: 'repeat_password',
        label: 'Повторите пароль',
        value: '',
        type: 'password',
        required: true,
        errorText: 'Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру',
        validationType: 'password',
        classList: 'none-block'
    }, 
];
const profileButtons = [
    {
        element: '.buttons-wrapper',
        id: '',
        name: 'Изменить данные',
        classes: 'add-link',
        onClick: (event)=>{
            event.preventDefault();
            _formBlock.onSubmitForm('.reg-form', function() {
                _chat.chat();
            });
        }
    },
    {
        element: '.buttons-wrapper',
        id: '',
        name: 'Назад',
        classes: 'reg-link',
        onClick: (event)=>{
            event.preventDefault();
            _chat.chat();
        }
    }, 
];
exports.default = function() {
    document.title = documentTitle;
    window.history.pushState('', '', 'profile');
    new _formBlockDefault.default(profileForm).insertBlock("#app", true);
    profileImageInputs.forEach(function(imageInput) {
        new _imageInputBlockDefault.default(imageInput).insertBlock(imageInput.element);
    });
    profileInputs.forEach(function(input) {
        new _inputBlockDefault.default(input).insertBlock(input.element);
    });
    changePasswordButtons.forEach(function(button) {
        new _buttonBlockDefault.default(button).insertBlock(button.element);
    });
    changePasswordInputs.forEach(function(input) {
        new _inputBlockDefault.default(input).insertBlock(input.element);
    });
    profileButtons.forEach(function(button) {
        new _buttonBlockDefault.default(button).insertBlock(button.element);
    });
};

},{"../elements/form-block":"53Dkh","../elements/input-block":"iQASN","../elements/button-block":"kgv9I","../elements/image-input-block":"6z7C3","./chat":"eKBYg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7C3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Блок загрузки изображения
var _block = require("../elements/block");
var _blockDefault = parcelHelpers.interopDefault(_block);
const inputImageTemplate = `
	<label class="image-form-block" for="{{id}}">
		<input class="load-image" hidden accept="image/*" type="file" id="{{id}}">
		<img id="{{id}}" src="{{imageLink}}" alt="{{imageAlt}}" title="{{imageTitle}}">
	</label>`;
class ImageInput extends _blockDefault.default {
    constructor(params, template){
        if (!template) template = inputImageTemplate;
        super(params, template);
    }
}
exports.default = ImageInput;

},{"../elements/block":"9C7tL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lBgj1","jeorp"], "jeorp", "parcelRequireab20")

//# sourceMappingURL=index.b7a05eb9.js.map
