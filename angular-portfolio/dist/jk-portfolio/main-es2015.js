(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"content-wrap\">\n        <h2>who am i?</h2>\n        <div>\n            <img src=\"https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/images/Screen+Shot+2020-04-24+at+5.05.12+PM.png\">\n            <div class=\"grid-container\">\n                <div class=\"grid-item\" id=\"about\">\n                    <p>\n                        My name is Jaime Kvaternik. I’m originally from Santa Cruz, California, \n                        but I’m currently a third year student at Northeastern University in Boston, Massachusetts. \n                        I enjoy designing and implementing front-end interfaces to solve and improve new and old problems. \n                        I’m looking for opportunities in ui/ux, app and web development.\n                    </p>\n                </div>\n                <div class=\"grid-item row2\" id=\"bubble-1\">\n                    <h4>Check this out!</h4>\n                    <ul>\n                        <li><a href=\"https://soundcloud.com/wayloud-recorders/sets/jaime-kvaternik\" target=\"_blank\" style=\"color:#FDFDFD;\">music</a></li>\n                        <li>photography (coming soon)</li>\n                    </ul>\n                </div>\n                <div class=\"grid-item row2\" id=\"bubble-2\">\n                    <h4>When I'm not working, I like to:</h4>\n                    <ul>\n                        <li>swim or play soccer</li>\n                        <li>cook and brew kombucha</li>\n                        <li>fix up bikes!</li>\n                        <li>travel and explore new places</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n    <app-landing></app-landing>\n    <app-about></app-about>\n    <app-projects></app-projects>\n    <app-contact></app-contact>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer style=\"z-index: -10;\">\n    <div class=\"content-wrap\">\n        <h2>let's keep in touch!</h2>\n        <div class=\"links-container\">\n            <a href=\"mailto:jaime.kvaternik17@gmail.com?Subject=Hello%20Jaime\">Email</a>\n            <a href=\"https://www.linkedin.com/in/jkvaternik/\" target=\"_blank\">LinkedIn</a>\n            <a href=\"https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/resume.v3.pdf\" target=\"_blank\">Resume</a>\n        </div>\n        <p id=\"copyright\">Built using Angular by me! 2020 :)</p>\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"content-wrap\">\n        <h1>\n            <span>hi, <br>my name is </span>\n            <span id=\"name\">Jaime Kvaternik</span>\n        </h1>\n        <p>I'm a computer science + interactive design student at Northeastern University</p>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"content-wrap\">\n        <h2>what do i do?</h2>\n        <ul class=\"grid-container\">\n            <li class=\"card\" *ngFor=\"let project of projects\">\n                <a class=\"card-container\" href=\"{{project.link}}\" target=\"_blank\">\n                    <span>\n                        <img [src]=\"project.image\" alt=\"Project Image\" width=\"100%\" style=\"overflow: hidden;\"> \n                        <div class=\"text-overlay\">\n                            <div style=\"width: 100%; overflow: hidden;\">\n                                <h4>{{project.title}}</h4>\n                            </div>\n                            <ul class=\"tag-list\">\n                                <li class=\"tag\" *ngFor=\"let tag of project.tags\">\n                                    <p>{{tag.name}}</p>\n                                </li>\n                            </ul>\n                        </div>\n                    </span>\n                </a>\n            </li>\n        </ul>\n        <p id=\"more-projects\">\n            Check out more of my work on \n            <a href=\"https://github.com/jkvaternik\">Github</a> and \n            <a href=\"https://www.behance.net/jaimekvatea11c\">Behance</a>.\n        </p> \n    </div>\n</section>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n    font-size: 18px;\n}\n\nimg {\n    position: relative;\n    border-radius: 50%;\n    width: 154px;\n    z-index: 10;\n}\n\n.grid-container {\n    margin-top: -80px;\n\n    padding-left: 85px;\n    width: 75%;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-areas: \"about about\"\n                         \"bubble1 bubble2\";\n    gap: 16px;\n    z-index: -1;\n}\n\n.grid-item {\n    border-radius: 15px;\n}\n\n#about {\n    background-color: #FCDE9C;\n    grid-area: about;\n}\n\n#about p {\n    margin: 35px 85px;\n}\n\n.grid-container > #bubble-1 {\n    grid-area: bubble1;\n}\n\n.grid-container > #bubble-2 {\n    grid-area: bubble2;\n}\n\n.row2 {\n    color: #FDFDFD;\n    background-color: #769184;\n    padding: 0 25px;\n}\n\n.row2 h4 {\n    margin: 25px 0px 0px 0px;\n}\n\n@media screen and (min-width: 500px) and (max-width: 1280px) {\n    section {\n        height: 100%;\n        margin-bottom: 35px;\n    }\n\n    .grid-container {\n        width: 100%;\n        display: grid;\n        top: 77px;\n        grid-template-rows: repeat(2, 1fr);\n        grid-template-columns: repeat(2, 1fr);\n        grid-template-areas: \"about about\"\n                             \"bubble1 bubble2\";\n        gap: 16px;\n        z-index: -1;\n    }\n}\n\n@media screen and (max-width: 500px) {\n    p {\n        font-size: 16px;\n    }\n\n    img {\n        display: inline-block;\n        border-radius: 50%;\n        width: 120px;\n        z-index: 10;\n\n        position: relative;\n        top: 50%;\n        left: 50%;\n        margin-left: -60px;\n    }\n\n    .grid-container {\n        margin-top: -20px;\n        padding-left: 0px;\n        width: 100%;\n        display: grid;\n        grid-template-rows: auto;\n        grid-template-columns: auto;\n        grid-template-areas: \"about\"\n                             \"bubble1\" \n                             \"bubble2\";\n        gap: 16px;\n        z-index: -1;\n    }\n\n    #about p {\n        margin: 30px 30px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7O0lBRWpCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckM7MENBQ3NDO0lBQ3RDLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixTQUFTO1FBQ1Qsa0NBQWtDO1FBQ2xDLHFDQUFxQztRQUNyQzs4Q0FDc0M7UUFDdEMsU0FBUztRQUNULFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVzs7UUFFWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUMzQjs7c0NBRThCO1FBQzlCLFNBQVM7UUFDVCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbmltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMTU0cHg7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogLTgwcHg7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDg1cHg7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFib3V0IGFib3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZTEgYnViYmxlMlwiO1xuICAgIGdhcDogMTZweDtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmdyaWQtaXRlbSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuI2Fib3V0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNERTlDO1xuICAgIGdyaWQtYXJlYTogYWJvdXQ7XG59XG5cbiNhYm91dCBwIHtcbiAgICBtYXJnaW46IDM1cHggODVweDtcbn1cblxuLmdyaWQtY29udGFpbmVyID4gI2J1YmJsZS0xIHtcbiAgICBncmlkLWFyZWE6IGJ1YmJsZTE7XG59XG5cbi5ncmlkLWNvbnRhaW5lciA+ICNidWJibGUtMiB7XG4gICAgZ3JpZC1hcmVhOiBidWJibGUyO1xufVxuXG4ucm93MiB7XG4gICAgY29sb3I6ICNGREZERkQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc2OTE4NDtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbi5yb3cyIGg0IHtcbiAgICBtYXJnaW46IDI1cHggMHB4IDBweCAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICB9XG5cbiAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgdG9wOiA3N3B4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFib3V0IGFib3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidWJibGUxIGJ1YmJsZTJcIjtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICB6LWluZGV4OiAxMDtcblxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgICB9XG5cbiAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhYm91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlMVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZTJcIjtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG5cbiAgICAjYWJvdXQgcCB7XG4gICAgICAgIG1hcmdpbjogMzBweCAzMHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n    background-image: url(https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/svg/steps.svg);\n    background-repeat: no-repeat;\n    background-position: 0vw 80vh;\n    background-size: 100% 2000px;\n}\n\n@media screen and (min-width: 500px) and (max-width: px) {    \n    \n}\n\n@media screen and (max-width: 740px) {\n    .background {\n        background-image: url(https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/svg/vertical-path.svg);\n        background-repeat: repeat-y;\n        background-position: 50vw 75vh;\n        background-size: 50%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpR0FBaUc7SUFDakcsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSTtRQUNJLHlHQUF5RztRQUN6RywyQkFBMkI7UUFDM0IsOEJBQThCO1FBQzlCLG9CQUFvQjtJQUN4QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vamFpbWVrdmF0ZXJuaWsuY29tL2Fzc2V0cy9zdmcvc3RlcHMuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDB2dyA4MHZoO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogcHgpIHsgICAgXG4gICAgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XG4gICAgLmJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9qYWltZWt2YXRlcm5pay5jb20vYXNzZXRzL3N2Zy92ZXJ0aWNhbC1wYXRoLnN2Zyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTB2dyA3NXZoO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Jaime Kvaternik | CS + Design Student';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n    background-color: #F0A268;\n    z-index: -100;\n}\n\nh2 {\n    margin: 0px 0px 45px 0px;\n    color: #FDFDFD;\n}\n\na {\n    background-color: #64A0AC;\n    border-radius: 15px;\n    color: #FDFDFD;\n    font-weight: 500;\n    font-size: 18px;\n    padding: 20px 40px;\n    margin: 16px 8px;\n    text-align: center;\n    text-decoration: none;\n    width: 154px;\n}\n\n.content-wrap {\n    padding: 50px 0px 30px 0px;\n}\n\n.links-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#copyright {\n    color: #FDFDFD;\n    text-align: center;\n    margin-top: 40px;\n}\n\n@media screen and (min-width: 500px) and (max-width: 1024px) {    \n    a {\n        background-color: #64A0AC;\n        border-radius: 15px;\n        color: #FDFDFD;\n        font-weight: 500;\n        font-size: 16px;\n        padding: 20px 40px;\n        margin: 16px 8px;\n        text-align: center;\n        text-decoration: none;\n        width: 154px;\n    }\n}\n\n@media screen and (max-width: 500px) {\n\n    .content-wrap {\n        max-width: 100%;\n    }\n\n    h2 {\n        margin: 0px 0px 25px 0px;\n        color: #FDFDFD;\n        text-align: center;\n    }\n\n    .links-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n    }\n    \n    a {\n        display: block;\n        font-weight: 500;\n        font-size: 14px;\n        padding: 20px 40px;\n        margin: 8px;\n        width: 250px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsY0FBYztRQUNkLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwQTI2ODtcbiAgICB6LWluZGV4OiAtMTAwO1xufVxuXG5oMiB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDQ1cHggMHB4O1xuICAgIGNvbG9yOiAjRkRGREZEO1xufVxuXG5hIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRBMEFDO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgY29sb3I6ICNGREZERkQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgIG1hcmdpbjogMTZweCA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aWR0aDogMTU0cHg7XG59XG5cbi5jb250ZW50LXdyYXAge1xuICAgIHBhZGRpbmc6IDUwcHggMHB4IDMwcHggMHB4O1xufVxuXG4ubGlua3MtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNjb3B5cmlnaHQge1xuICAgIGNvbG9yOiAjRkRGREZEO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgeyAgICBcbiAgICBhIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0QTBBQztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgY29sb3I6ICNGREZERkQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgICAgICBtYXJnaW46IDE2cHggOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgd2lkdGg6IDE1NHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcblxuICAgIC5jb250ZW50LXdyYXAge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBtYXJnaW46IDBweCAwcHggMjVweCAwcHg7XG4gICAgICAgIGNvbG9yOiAjRkRGREZEO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmxpbmtzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n    height: 100vh;\n    margin-bottom: 0px;\n}\n\nh1 {\n    color: #525252;\n    font-family: 'Didot', serif;\n    font-size: 3rem;\n    padding-top: 150px;\n    line-height: 46px;\n}\n\np {\n    font-weight: 100;\n    font-size: 20px;\n    max-width: 409px;\n}\n\n#name {\n    color: #64A0AC;\n}\n\n@media screen and (max-width: 740px) {\n    h1 {\n        width: 375px;\n    }\n}\n\n@media screen and (max-width: 375px) {\n    h1 {\n        width: 300px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUdBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5oMSB7XG4gICAgY29sb3I6ICM1MjUyNTI7XG4gICAgZm9udC1mYW1pbHk6ICdEaWRvdCcsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbnAge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1heC13aWR0aDogNDA5cHg7XG59XG5cblxuI25hbWUge1xuICAgIGNvbG9yOiAjNjRBMEFDO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDBweCkge1xuICAgIGgxIHtcbiAgICAgICAgd2lkdGg6IDM3NXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgICBoMSB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/mock-projects.ts":
/*!**********************************!*\
  !*** ./src/app/mock-projects.ts ***!
  \**********************************/
/*! exports provided: PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const PROJECTS = [
    {
        id: 1,
        image: 'https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/images/water-project.png',
        title: 'Water',
        desc: 'This is my second project.',
        tags: [
            {
                name: "d3.js"
            },
            {
                name: "HTML"
            },
            {
                name: "CSS"
            }
        ],
        link: 'https://github.com/jkvaternik/water'
    },
    {
        id: 2,
        image: 'https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/images/spreadsheets-ood.png',
        title: 'Spreadsheets.ood',
        desc: 'This is my second project.',
        tags: [
            {
                name: "Java"
            }
        ],
        link: 'https://github.com/jkvaternik/spreadsheetsOOD'
    },
    {
        id: 3,
        image: 'https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/images/presentation+%E2%80%93+15.png',
        title: 'Explore',
        desc: 'This is my first project.',
        tags: [
            {
                name: "XD"
            }
        ],
        link: 'https://www.behance.net/gallery/105198521/explore?share=1'
    },
    {
        id: 4,
        image: 'https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/images/Artboard+1%402x.png',
        title: 'Type & Systems',
        desc: 'This is my second project.',
        tags: [
            {
                name: "inDesign"
            }
        ],
        link: 'https://www.behance.net/gallery/105197727/CAMD-Brochure-Systems-Design?'
    },
    {
        id: 5,
        image: 'https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/images/redesign%402x.png',
        title: 'NU CampusRec Redesign',
        desc: 'This is my second project.',
        tags: [
            {
                name: "XD"
            }
        ],
        link: 'https://www.behance.net/gallery/87370301/Northeastern-Campus-Rec-Redesign'
    },
    {
        id: 7,
        image: 'https://s3-us-west-1.amazonaws.com/jaimekvaternik.com/assets/images/Screen+Shot+2020-09-29+at+10.45.05+PM.png',
        title: "Color Block Plug-in",
        desc: 'This is my first project.',
        tags: [
            {
                name: "JavaScript"
            },
        ],
        link: 'https://github.com/jkvaternik/colorBlock'
    },
];



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n    height: 115vh;\n}\n\nli {\n    list-style: none;\n}\n\nimg {\n    display: block;\n    border-radius: 15px 15px 0px 0px;\n    height: 200px;\n}\n\nh4 {\n    font-weight: 500;\n    margin-top: 15px;\n    margin-bottom: 0;\n\n    width: 250px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\na {\n    color: #F0A268;\n    text-decoration: none;\n}\n\n.grid-container {\n    padding-left: 255px;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    gap: 16px 16px;\n}\n\n.text-overlay {\n    background-color: #64A0AC;\n    color: #FDFDFD;\n    border-radius: 0px 0px 15px 15px;\n    padding: 2px 16px;\n}\n\n.tag-list {\n    width: 100%;\n    padding-left: 0;\n    display: inline-flex;\n    justify-content: flex-start;\n    flex-wrap: nowrap;\n}\n\n.tag p{\n    border: 1.5px solid #FDFDFD;\n    border-radius: 5px;\n    padding: 7.5px 15px;\n    font-size: 14px;\n    margin-right: 10px;\n}\n\n#more-projects {\n    font-weight: 500;\n    float: right;\n}\n\n#more-projects > a:hover {\n    color: #769184;\n    cursor: pointer;\n}\n\n@media screen and (min-width: 500px) and (max-width: 1280px) {\n    section {\n        height: 100%;\n        margin-bottom: 75px;\n    }\n\n    .grid-container {\n        padding-left: 0px;\n        display: grid;\n        grid-template-columns: auto auto;\n        grid-template-rows: repeat(3, 1fr);\n        gap: 16px 16px;\n    }\n}\n\n@media screen and (max-width: 550px) {\n\n    section {\n        height: 100%;\n        margin-bottom: 50px\n    }\n\n    h4 {\n        font-weight: 500;\n        margin-top: 15px;\n        margin-bottom: 0;\n    \n        width: 300px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n    .grid-container {\n        padding-left: 0px;\n        display: grid;\n        grid-template-columns: repeat(1, 1fr);\n        grid-template-rows: repeat(6, 1fr);\n        gap: 16px 16px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixnQ0FBZ0M7UUFDaEMsa0NBQWtDO1FBQ2xDLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLFlBQVk7UUFDWjtJQUNKOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixnQkFBZ0I7O1FBRWhCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IscUNBQXFDO1FBQ3JDLGtDQUFrQztRQUNsQyxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgaGVpZ2h0OiAxMTV2aDtcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4gXG5pbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbmg0IHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgIHdpZHRoOiAyNTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbmEge1xuICAgIGNvbG9yOiAjRjBBMjY4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1NXB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMTZweCAxNnB4O1xufVxuXG4udGV4dC1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRBMEFDO1xuICAgIGNvbG9yOiAjRkRGREZEO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xufVxuXG4udGFnLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi50YWcgcHtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNGREZERkQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDcuNXB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuI21vcmUtcHJvamVjdHMge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jbW9yZS1wcm9qZWN0cyA+IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjNzY5MTg0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xuICAgIH1cblxuICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgZ2FwOiAxNnB4IDE2cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweFxuICAgIH1cblxuICAgIGg0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcbiAgICAgICAgZ2FwOiAxNnB4IDE2cHg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mock_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-projects */ "./src/app/mock-projects.ts");



let ProjectsComponent = class ProjectsComponent {
    constructor() {
        this.projects = _mock_projects__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"];
    }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jaimekvaternik/Documents/projects/software/jk-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map