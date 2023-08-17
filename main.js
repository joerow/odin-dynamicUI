"use strict";
(self["webpackChunkodin_dynamicui"] = self["webpackChunkodin_dynamicui"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 16px;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  --text-primary: #b6b6b6;\n  --text-secondary: #ececec;\n  --bg-primary: #23232e;\n  --bg-secondary: #141418;\n  --icon-hover: #ff7eee;\n  --transition-speed: 200ms ease;\n}\n\nbody {\n  color: black;\n  background-color: rgb(134, 134, 134);\n  margin: 0;\n  padding: 0;\n}\n\nbody::-webkit-scrollbar {\n  width: 0.25rem;\n}\n\nbody::-webkit-scrollbar-track {\n  background: #1e1e1e24;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background: #6649b8;\n}\n\n.navbar {\n  position: fixed;\n  background-color: var(--bg-primary);\n  transition: var(--transition-speed);\n}\n\n.navbar-nav {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n\n.nav-link:hover {\n  filter: grayscale(0%) opacity(1);\n  background-color: var(--bg-secondary);\n  fill: var(--icon-hover);\n}\n\n.nav-item {\n  width: 100%;\n}\n\n.nav-item:last-child {\n  margin-top: auto;\n}\n\n.nav-link {\n  display: flex;\n  align-items: center;\n  height: 5rem;\n  color: var(--text-primary);\n  text-decoration: none;\n  filter: grayscale(100%) opacity(0.7);\n  transition: var(--transition-speed);\n}\n\n.link-text {\n  display: none;\n  margin-left: 1rem;\n}\n\n.nav-link svg {\n  width: 2rem;\n  min-width: 2rem;\n  margin: 0 1.5rem;\n  fill: var(--icon-hover);\n}\n\n#nav-link-0 {\n  flex-direction: row-reverse;\n}\n\n.logo {\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: var(--text-secondary);\n  background: var(--bg-secondary);\n  font-size: 1rem;\n  letter-spacing: 0.3ch;\n  width: 100%;\n}\n\n.logo svg {\n  transform: rotate(0deg);\n  transition: transform var(--transition-speed);\n}\n.navbar:hover .logo svg {\n  transform: rotate(-180deg);\n}\n\nmain {\n  margin-left: 5rem;\n  margin-bottom: 5rem;\n  padding: 1rem;\n}\n\nbutton {\n  all: unset;\n  cursor: pointer;\n}\n\n#img-slider {\n  display: flex;\n  padding: 0;\n  justify-content: center;\n  align-content: center;\n}\n#img-window {\n  display: flex;\n  margin: 5rem;\n  height: calc(100vh - 10rem);\n  border: 1px solid #141418;\n  overflow: hidden;\n}\n\n#img-holder {\n  display: flex;\n  height: inherit;\n  background-color: #6649b8;\n  transition: 500ms;\n}\n\n.images {\n  height: calc(100vh - 10rem);\n  color: #141418;\n}\n\n.scroller {\n  margin: 1rem;\n}\n\n/* small screens */\n@media only screen and (max-width: 600px) {\n  .navbar {\n    bottom: 0;\n    width: 100vw;\n    height: 5rem;\n    position: fixed;\n    background-color: var(--bg-primary);\n    transition: var(--transition-speed);\n  }\n\n  .logo {\n    display: none;\n  }\n\n  .navbar-nav {\n    flex-direction: row;\n  }\n\n  .nav-link {\n    justify-content: center;\n  }\n  main {\n    margin: 0;\n  }\n}\n/* Large screens */\n@media only screen and (min-width: 600px) {\n  .navbar {\n    top: 0;\n    width: 5rem;\n    height: 100vh;\n    position: fixed;\n    background-color: var(--bg-primary);\n    transition: var(--transition-speed);\n  }\n  .navbar:hover {\n    width: 16rem;\n  }\n  .navbar:hover .link-text {\n    display: inline;\n    transition: opacity var(--transition-speed);\n  }\n}\n\n/* \n#main {\n  display: flex;\n}\n#nav-bar-container {\n  background-color: antiquewhite;\n  height: 100vh;\n  width: max-content;\n}\n#nav-bar-container:hover {\n  animation: mymove 800ms;\n  animation-timing-function: ease-in-out;\n}\n@keyframes mymove {\n  from {\n    width: 50px;\n  }\n  to {\n    width: 100px;\n  }\n} */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,6EAA6E;EAC7E,uBAAuB;EACvB,yBAAyB;EACzB,qBAAqB;EACrB,uBAAuB;EACvB,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mCAAmC;EACnC,mCAAmC;AACrC;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;EAC1B,qBAAqB;EACrB,oCAAoC;EACpC,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;EAClB,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;EACf,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,6CAA6C;AAC/C;AACA;EACE,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,uBAAuB;EACvB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,YAAY;EACZ,2BAA2B;EAC3B,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA,kBAAkB;AAClB;EACE;IACE,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,mCAAmC;IACnC,mCAAmC;EACrC;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,uBAAuB;EACzB;EACA;IACE,SAAS;EACX;AACF;AACA,kBAAkB;AAClB;EACE;IACE,MAAM;IACN,WAAW;IACX,aAAa;IACb,eAAe;IACf,mCAAmC;IACnC,mCAAmC;EACrC;EACA;IACE,YAAY;EACd;EACA;IACE,eAAe;IACf,2CAA2C;EAC7C;AACF;;AAEA;;;;;;;;;;;;;;;;;;;;GAoBG","sourcesContent":[":root {\n  font-size: 16px;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  --text-primary: #b6b6b6;\n  --text-secondary: #ececec;\n  --bg-primary: #23232e;\n  --bg-secondary: #141418;\n  --icon-hover: #ff7eee;\n  --transition-speed: 200ms ease;\n}\n\nbody {\n  color: black;\n  background-color: rgb(134, 134, 134);\n  margin: 0;\n  padding: 0;\n}\n\nbody::-webkit-scrollbar {\n  width: 0.25rem;\n}\n\nbody::-webkit-scrollbar-track {\n  background: #1e1e1e24;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background: #6649b8;\n}\n\n.navbar {\n  position: fixed;\n  background-color: var(--bg-primary);\n  transition: var(--transition-speed);\n}\n\n.navbar-nav {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n\n.nav-link:hover {\n  filter: grayscale(0%) opacity(1);\n  background-color: var(--bg-secondary);\n  fill: var(--icon-hover);\n}\n\n.nav-item {\n  width: 100%;\n}\n\n.nav-item:last-child {\n  margin-top: auto;\n}\n\n.nav-link {\n  display: flex;\n  align-items: center;\n  height: 5rem;\n  color: var(--text-primary);\n  text-decoration: none;\n  filter: grayscale(100%) opacity(0.7);\n  transition: var(--transition-speed);\n}\n\n.link-text {\n  display: none;\n  margin-left: 1rem;\n}\n\n.nav-link svg {\n  width: 2rem;\n  min-width: 2rem;\n  margin: 0 1.5rem;\n  fill: var(--icon-hover);\n}\n\n#nav-link-0 {\n  flex-direction: row-reverse;\n}\n\n.logo {\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: var(--text-secondary);\n  background: var(--bg-secondary);\n  font-size: 1rem;\n  letter-spacing: 0.3ch;\n  width: 100%;\n}\n\n.logo svg {\n  transform: rotate(0deg);\n  transition: transform var(--transition-speed);\n}\n.navbar:hover .logo svg {\n  transform: rotate(-180deg);\n}\n\nmain {\n  margin-left: 5rem;\n  margin-bottom: 5rem;\n  padding: 1rem;\n}\n\nbutton {\n  all: unset;\n  cursor: pointer;\n}\n\n#img-slider {\n  display: flex;\n  padding: 0;\n  justify-content: center;\n  align-content: center;\n}\n#img-window {\n  display: flex;\n  margin: 5rem;\n  height: calc(100vh - 10rem);\n  border: 1px solid #141418;\n  overflow: hidden;\n}\n\n#img-holder {\n  display: flex;\n  height: inherit;\n  background-color: #6649b8;\n  transition: 500ms;\n}\n\n.images {\n  height: calc(100vh - 10rem);\n  color: #141418;\n}\n\n.scroller {\n  margin: 1rem;\n}\n\n/* small screens */\n@media only screen and (max-width: 600px) {\n  .navbar {\n    bottom: 0;\n    width: 100vw;\n    height: 5rem;\n    position: fixed;\n    background-color: var(--bg-primary);\n    transition: var(--transition-speed);\n  }\n\n  .logo {\n    display: none;\n  }\n\n  .navbar-nav {\n    flex-direction: row;\n  }\n\n  .nav-link {\n    justify-content: center;\n  }\n  main {\n    margin: 0;\n  }\n}\n/* Large screens */\n@media only screen and (min-width: 600px) {\n  .navbar {\n    top: 0;\n    width: 5rem;\n    height: 100vh;\n    position: fixed;\n    background-color: var(--bg-primary);\n    transition: var(--transition-speed);\n  }\n  .navbar:hover {\n    width: 16rem;\n  }\n  .navbar:hover .link-text {\n    display: inline;\n    transition: opacity var(--transition-speed);\n  }\n}\n\n/* \n#main {\n  display: flex;\n}\n#nav-bar-container {\n  background-color: antiquewhite;\n  height: 100vh;\n  width: max-content;\n}\n#nav-bar-container:hover {\n  animation: mymove 800ms;\n  animation-timing-function: ease-in-out;\n}\n@keyframes mymove {\n  from {\n    width: 50px;\n  }\n  to {\n    width: 100px;\n  }\n} */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img-slider.js":
/*!***************************!*\
  !*** ./src/img-slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slider": () => (/* binding */ slider)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _images_alexander_london_mJaD10XeD7w_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .//images/alexander-london-mJaD10XeD7w-unsplash.jpg */ "./src/images/alexander-london-mJaD10XeD7w-unsplash.jpg");
/* harmony import */ var _images_lloyd_henneman_mBRfYA0dYYE_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//images/lloyd-henneman-mBRfYA0dYYE-unsplash.jpg */ "./src/images/lloyd-henneman-mBRfYA0dYYE-unsplash.jpg");
/* harmony import */ var _images_zoe_gayah_jonker_uhnbTZC7N9k_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//images/zoe-gayah-jonker-uhnbTZC7N9k-unsplash.jpg */ "./src/images/zoe-gayah-jonker-uhnbTZC7N9k-unsplash.jpg");




/* import nachosImage from "./nachos.png";
import tacosImage from "./tacos.png"; */

const slider = () => {
  document.body.append((0,_index__WEBPACK_IMPORTED_MODULE_0__.buildElement)("main", "img-slider", "", ""));
  const main = document.querySelector("main");
  main.appendChild(
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.buildElement)(
      "button",
      "scroll-back",
      ["scroller"],
      '<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>'
    )
  );
  let imgWindow = main.appendChild((0,_index__WEBPACK_IMPORTED_MODULE_0__.buildElement)("div", "img-window", "", ""));
  imgWindow.appendChild((0,_index__WEBPACK_IMPORTED_MODULE_0__.buildElement)("div", "img-holder", "", ""));
  main.appendChild(
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.buildElement)(
      "button",
      "scroll-forward",
      ["scroller"],
      '<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>'
    )
  );

  const loadImages = () => {
    let imgHolder = document.getElementById("img-holder");
    let image1 = new Image();
    image1.src = _images_alexander_london_mJaD10XeD7w_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__;
    image1.classList.add("images");
    image1.id = "image1";
    imgHolder.appendChild(
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.buildElement)("div", "img-cont-1", ["image-container"])
    );
    document.getElementById("img-cont-1").appendChild(image1);

    let image2 = new Image();
    image2.src = _images_lloyd_henneman_mBRfYA0dYYE_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__;
    image2.classList.add("images");
    image2.id = "image2";
    imgHolder.appendChild(
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.buildElement)("div", "img-cont-2", ["image-container"])
    );
    document.getElementById("img-cont-2").appendChild(image2);

    let image3 = new Image();
    image3.src = _images_zoe_gayah_jonker_uhnbTZC7N9k_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__;
    image3.classList.add("images");
    image3.id = "image3";
    imgHolder.appendChild(
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.buildElement)("div", "img-cont-3", ["image-container"])
    );
    document.getElementById("img-cont-3").appendChild(image3);
  };
  loadImages();

  let currentPosition = 1;
  let previousPosition = 0;
  let imageWindow = document.getElementById("img-window");
  let imageHolder = document.getElementById("img-holder");
  let translateValue = 0;

  //set the next image function
  let next = document.getElementById("scroll-forward");
  next.onclick = function () {
    if (document.getElementById("img-cont-" + (currentPosition + 1)) == null) {
      console.log("No img " + currentPosition + " found. Returning to start");
      currentPosition = 1;
      translateValue = 0;
      previousPosition = 0;
      imageHolder.style.translate = "-" + translateValue.toString() + "px";
    } else {
      let currentWidth = document.getElementById(
        "img-cont-" + currentPosition
      ).clientWidth;
      translateValue += currentWidth;
      console.log("img " + currentPosition + " width:" + currentWidth);
      imageHolder.style.translate = "-" + translateValue.toString() + "px";
      console.log("translate value set to: " + imageHolder.style.translate);
      currentPosition++;
      console.log("current position: " + currentPosition);
      previousPosition++;
      console.log("previous position: " + previousPosition);
    }
  };

  //set the previous next image function
  let back = document.getElementById("scroll-back");
  back.onclick = function () {
    if (
      document.getElementById("img-cont-" + previousPosition) == null ||
      document.getElementById("img-cont-" + (previousPosition - 1)) == null
    ) {
      console.log("No img " + previousPosition + " found. Returning to start");
      currentPosition = 1;
      translateValue = 0;
      previousPosition = 0;
      imageHolder.style.translate = "-" + translateValue.toString() + "px";
    } else {
      previousPosition = currentPosition - 1;
      let previousWidth = document.getElementById(
        "img-cont-" + previousPosition
      ).clientWidth;
      console.log("previous width= " + previousWidth);
      translateValue -= previousWidth;
      console.log("translate value" + translateValue);
      console.log("img " + previousPosition + " width:" + previousWidth);
      imageHolder.style.translate = "-" + translateValue.toString() + "px";
      console.log("translate value set to: " + imageHolder.style.translate);
      currentPosition--;
      console.log("current position: " + currentPosition);
    }
  };
};

/* const setWidth = () => {
  let imageWindow = document.getElementById("img-window");
  let newWidth =
    document.getElementById("image1").clientWidth.toString() + "px";
  console.log(newWidth);
  console.log(imageWindow);
  //imageWindow.style.width = newWidth;
}; */




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildElement": () => (/* binding */ buildElement)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img-slider */ "./src/img-slider.js");



function buildElement(elementType, id, classList, innerHTML) {
  const element = document.createElement(elementType);
  if (id === undefined) {
    id = "";
  }
  if (classList === undefined) {
    classList = "";
  }
  if (innerHTML === undefined) {
    innerHTML = "";
  }
  element.id = id;
  element.classList.add(...classList);
  element.innerHTML = innerHTML;
  return element;
}

function buildNav() {
  const navBar = buildElement(
    "nav",
    "",
    ["navbar"],
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />'
  );
  const navMenu = buildElement("div", "", ["navbar-nav"], "");
  navBar.appendChild(navMenu);

  //set the number of nav items including logo
  const navItemNum = 5;

  //set the nav item icons
  const navIcons = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>',
  ];

  //set the nav link text
  const navLinkText = ["Logo", "Home", "Images", "link 3", "Settings"];

  //build the nav items
  let i = 0;
  while (i < navItemNum) {
    let navItem = null;
    if (i === 0) {
      navItem = buildElement("button", "nav-" + i, ["logo"], "");
    } else {
      navItem = buildElement("button", "nav-" + i, ["nav-item"], "");
    }
    let navLink = buildElement("a", "nav-link-" + i, ["nav-link"], navIcons[i]);
    let navLinkSpan = buildElement("span", "", ["link-text"], navLinkText[i]);
    navMenu.appendChild(navItem);
    navItem.appendChild(navLink);
    navLink.appendChild(navLinkSpan);
    i++;
  }
  document.body.append(navBar);

  //set the first nav function
  let navItems = document.getElementsByClassName("nav-item");
  navItems[0].onclick = function () {
    if (document.querySelector("main")) {
      document.querySelector("main").remove();
      console.log("removed");
      buildMain("default");
      console.log("rebuilt");
    } else {
      console.log("nothing to remove");
      buildMain("default");
      console.log("rebuilt");
    }
  };

  //set the second nav function
  navItems[1].onclick = function () {
    if (document.querySelector("main")) {
      document.querySelector("main").remove();
      console.log("removed");
      buildMain("images");
    } else {
      console.log("nothing to remove");
      buildMain("images");
      console.log("rebuilt");
    }
  };
}

function buildMain(param) {
  if (param === "default") {
    defaultMain();
  } else if (param === "images") {
    (0,_img_slider__WEBPACK_IMPORTED_MODULE_1__.slider)();
  }

  function defaultMain() {
    document.body.append(buildElement("main", "", "", ""));
    const main = document.querySelector("main");
    main.appendChild(
      buildElement("h1", "", "", "This is an atypical title on the page")
    );
    main.appendChild(
      buildElement(
        "p",
        "",
        "",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dolor at lorem congue, ut malesuada lorem porttitor. Suspendisse at massa commodo, scelerisque ipsum sed, rutrum tellus. Phasellus facilisis sed nisi a pulvinar. Pellentesque vestibulum feugiat tellus, ut ultrices metus hendrerit id. Fusce egestas mi est, at ultrices orci commodo quis. Integer in pharetra nibh, tempor lobortis tellus. Praesent eros neque, aliquam eget finibus at, ultrices id sapien. Mauris vitae lacus nisi.Donec iaculis, dolor in pharetra hendrerit, nunc eros viverra nisi, sed scelerisque elit velit ut dolor. Cras fringilla odio lacus, placerat elementum felis porttitor non. Proin diam est, rutrum sit amet consectetur id, viverra ut ipsum. Etiam nec tincidunt ex. Duis cursus viverra dignissim. Quisque nunc lacus, cursus vitae velit vitae, tempus auctor lorem. Phasellus egestas metus malesuada mauris ultrices venenatis. Etiam a placerat lorem.Aliquam semper orci et justo pellentesque, a aliquet nulla dapibus. Nullam a tristique turpis, ac scelerisque metus. Sed malesuada tempus enim volutpat pulvinar. Integer nisi ligula, vulputate a dignissim in, dapibus congue purus. Curabitur mollis mauris at ligula accumsan, ut luctus enim commodo. Proin bibendum ante lacus, eu dapibus enim semper id. Sed volutpat auctor augue, sed vehicula neque gravida at.  Sed convallis dictum magna, ut placerat tortor pretium at. Nunc lacinia sit amet nisi vitae semper. Maecenas vitae enim eu augue rhoncus efficitur. Curabitur et purus tristique, dignissim erat vitae, mollis eros. Vivamus tincidunt viverra tortor vel sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eleifend ipsum quam, ac porttitor magna tempus eu. Nam ex magna, venenatis eu lacus in, sodales semper felis. Donec ut rutrum lectus. Etiam posuere sagittis nisl non convallis. Vestibulum faucibus ligula risus, id tempor nisl ultricies ut. In volutpat, sapien at ultricies sodales, arcu turpis rhoncus lorem, ac hendrerit quam elit ac dolor. Integer et ligula a dui gravida ornare. Duis sit amet ornare risus. Proin non scelerisque justo. Mauris non tellus elit.Vestibulum tempus quis metus id congue. Sed in orci sed ligula pellentesque ultricies. Vivamus eu cursus eros. Proin egestas, justo vitae dignissim condimentum, ipsum felis bibendum dui, vel aliquet risus turpis sed dui. Maecenas sagittis nulla metus, tincidunt laoreet erat consequat non. Phasellus vel est ut massa ornare posuere ut sed erat. Mauris eu rhoncus massa. Nam sed lacus feugiat, cursus elit fermentum, placerat sem. Maecenas ac ullamcorper diam, non sollicitudin arcu. Donec sem erat, porta nec dui id, maximus vehicula urna. Quisque eu dapibus est, sit amet maximus tellus. Donec rhoncus urna mattis efficitur suscipit. Curabitur accumsan nulla vitae lorem dignissim imperdiet. "
      )
    );
  }
}

buildNav();
/* buildMain("default"); */
buildMain("images");
//resizer();

/* let imageWindow = document.getElementById("img-window");
console.log(imageWindow);
let newWidth = document.getElementById("image1").clientWidth.toString() + "px";
console.log(newWidth);
console.log(imageWindow);
imageWindow.style.width = newWidth; */




/***/ }),

/***/ "./src/images/alexander-london-mJaD10XeD7w-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/images/alexander-london-mJaD10XeD7w-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cfc1732399c876b80a8.jpg";

/***/ }),

/***/ "./src/images/lloyd-henneman-mBRfYA0dYYE-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/images/lloyd-henneman-mBRfYA0dYYE-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26447a994355b4f9104c.jpg";

/***/ }),

/***/ "./src/images/zoe-gayah-jonker-uhnbTZC7N9k-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/images/zoe-gayah-jonker-uhnbTZC7N9k-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8061619ecb6e07fa131.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSUc7QUFDMEI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUksbURBQU07QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRVoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWR5bmFtaWN1aS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljdWkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tZHluYW1pY3VpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljdWkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tZHluYW1pY3VpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tZHluYW1pY3VpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tZHluYW1pY3VpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWR5bmFtaWN1aS8uL3NyYy9pbWctc2xpZGVyLmpzIiwid2VicGFjazovL29kaW4tZHluYW1pY3VpLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIHNhbnMtc2VyaWY7XFxuICAtLXRleHQtcHJpbWFyeTogI2I2YjZiNjtcXG4gIC0tdGV4dC1zZWNvbmRhcnk6ICNlY2VjZWM7XFxuICAtLWJnLXByaW1hcnk6ICMyMzIzMmU7XFxuICAtLWJnLXNlY29uZGFyeTogIzE0MTQxODtcXG4gIC0taWNvbi1ob3ZlcjogI2ZmN2VlZTtcXG4gIC0tdHJhbnNpdGlvbi1zcGVlZDogMjAwbXMgZWFzZTtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM0LCAxMzQsIDEzNCk7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMC4yNXJlbTtcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogIzFlMWUxZTI0O1xcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjNjY0OWI4O1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XFxufVxcblxcbi5uYXZiYXItbmF2IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uYXYtbGluazpob3ZlciB7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSkgb3BhY2l0eSgxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeSk7XFxuICBmaWxsOiB2YXIoLS1pY29uLWhvdmVyKTtcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2LWl0ZW06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4ubmF2LWxpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIG9wYWNpdHkoMC43KTtcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbn1cXG5cXG4ubGluay10ZXh0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLm5hdi1saW5rIHN2ZyB7XFxuICB3aWR0aDogMnJlbTtcXG4gIG1pbi13aWR0aDogMnJlbTtcXG4gIG1hcmdpbjogMCAxLjVyZW07XFxuICBmaWxsOiB2YXIoLS1pY29uLWhvdmVyKTtcXG59XFxuXFxuI25hdi1saW5rLTAge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4zY2g7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxvZ28gc3ZnIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbn1cXG4ubmF2YmFyOmhvdmVyIC5sb2dvIHN2ZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxsOiB1bnNldDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2ltZy1zbGlkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI2ltZy13aW5kb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogNXJlbTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwcmVtKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNDE0MTg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jaW1nLWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NDliODtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbn1cXG5cXG4uaW1hZ2VzIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwcmVtKTtcXG4gIGNvbG9yOiAjMTQxNDE4O1xcbn1cXG5cXG4uc2Nyb2xsZXIge1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4vKiBzbWFsbCBzY3JlZW5zICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm5hdmJhciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbiAgfVxcblxcbiAgLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm5hdmJhci1uYXYge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLm5hdi1saW5rIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICBtYWluIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbn1cXG4vKiBMYXJnZSBzY3JlZW5zICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgLm5hdmJhciB7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbiAgfVxcbiAgLm5hdmJhcjpob3ZlciB7XFxuICAgIHdpZHRoOiAxNnJlbTtcXG4gIH1cXG4gIC5uYXZiYXI6aG92ZXIgLmxpbmstdGV4dCB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcXG4gIH1cXG59XFxuXFxuLyogXFxuI21haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI25hdi1iYXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcbiNuYXYtYmFyLWNvbnRhaW5lcjpob3ZlciB7XFxuICBhbmltYXRpb246IG15bW92ZSA4MDBtcztcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5Aa2V5ZnJhbWVzIG15bW92ZSB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICB9XFxuICB0byB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gIH1cXG59ICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZiw2RUFBNkU7RUFDN0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMscUNBQXFDO0VBQ3JDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDRjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFO0lBQ0UsTUFBTTtJQUNOLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLDJDQUEyQztFQUM3QztBQUNGOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIFxcXCJHaWxsIFNhbnMgTVRcXFwiLCBDYWxpYnJpLCBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tdGV4dC1wcmltYXJ5OiAjYjZiNmI2O1xcbiAgLS10ZXh0LXNlY29uZGFyeTogI2VjZWNlYztcXG4gIC0tYmctcHJpbWFyeTogIzIzMjMyZTtcXG4gIC0tYmctc2Vjb25kYXJ5OiAjMTQxNDE4O1xcbiAgLS1pY29uLWhvdmVyOiAjZmY3ZWVlO1xcbiAgLS10cmFuc2l0aW9uLXNwZWVkOiAyMDBtcyBlYXNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzQsIDEzNCwgMTM0KTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAwLjI1cmVtO1xcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjMWUxZTFlMjQ7XFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6ICM2NjQ5Yjg7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcXG59XFxuXFxuLm5hdmJhci1uYXYge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5hdi1saW5rOmhvdmVyIHtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDAlKSBvcGFjaXR5KDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctc2Vjb25kYXJ5KTtcXG4gIGZpbGw6IHZhcigtLWljb24taG92ZXIpO1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5uYXYtbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgb3BhY2l0eSgwLjcpO1xcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XFxufVxcblxcbi5saW5rLXRleHQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ubmF2LWxpbmsgc3ZnIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgbWluLXdpZHRoOiAycmVtO1xcbiAgbWFyZ2luOiAwIDEuNXJlbTtcXG4gIGZpbGw6IHZhcigtLWljb24taG92ZXIpO1xcbn1cXG5cXG4jbmF2LWxpbmstMCB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjNjaDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubG9nbyBzdmcge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XFxufVxcbi5uYXZiYXI6aG92ZXIgLmxvZ28gc3ZnIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGw6IHVuc2V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaW1nLXNsaWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4jaW1nLXdpbmRvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiA1cmVtO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTByZW0pO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE0MTQxODtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNpbWctaG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY0OWI4O1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxufVxcblxcbi5pbWFnZXMge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTByZW0pO1xcbiAgY29sb3I6ICMxNDE0MTg7XFxufVxcblxcbi5zY3JvbGxlciB7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi8qIHNtYWxsIHNjcmVlbnMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubmF2YmFyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XFxuICB9XFxuXFxuICAubG9nbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubmF2YmFyLW5hdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAubmF2LWxpbmsge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIG1haW4ge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxufVxcbi8qIExhcmdlIHNjcmVlbnMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAubmF2YmFyIHtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XFxuICB9XFxuICAubmF2YmFyOmhvdmVyIHtcXG4gICAgd2lkdGg6IDE2cmVtO1xcbiAgfVxcbiAgLm5hdmJhcjpob3ZlciAubGluay10ZXh0IHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbiAgfVxcbn1cXG5cXG4vKiBcXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jbmF2LWJhci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuI25hdi1iYXItY29udGFpbmVyOmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogbXltb3ZlIDgwMG1zO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcbkBrZXlmcmFtZXMgbXltb3ZlIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgfVxcbn0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYnVpbGRFbGVtZW50IH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBhbGV4YW5kZXIgZnJvbSBcIi4vL2ltYWdlcy9hbGV4YW5kZXItbG9uZG9uLW1KYUQxMFhlRDd3LXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IGxsb3lkIGZyb20gXCIuLy9pbWFnZXMvbGxveWQtaGVubmVtYW4tbUJSZllBMGRZWUUtdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgem9lIGZyb20gXCIuLy9pbWFnZXMvem9lLWdheWFoLWpvbmtlci11aG5iVFpDN045ay11bnNwbGFzaC5qcGdcIjtcbi8qIGltcG9ydCBuYWNob3NJbWFnZSBmcm9tIFwiLi9uYWNob3MucG5nXCI7XG5pbXBvcnQgdGFjb3NJbWFnZSBmcm9tIFwiLi90YWNvcy5wbmdcIjsgKi9cblxuY29uc3Qgc2xpZGVyID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChidWlsZEVsZW1lbnQoXCJtYWluXCIsIFwiaW1nLXNsaWRlclwiLCBcIlwiLCBcIlwiKSk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChcbiAgICBidWlsZEVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJzY3JvbGwtYmFja1wiLFxuICAgICAgW1wic2Nyb2xsZXJcIl0sXG4gICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMmVtXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIEZyZWUgNi40LjIgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjMgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9XCJNNTEyIDI1NkEyNTYgMjU2IDAgMSAwIDAgMjU2YTI1NiAyNTYgMCAxIDAgNTEyIDB6TTI3MSAxMzVjOS40LTkuNCAyNC42LTkuNCAzMy45IDBzOS40IDI0LjYgMCAzMy45bC04NyA4NyA4NyA4N2M5LjQgOS40IDkuNCAyNC42IDAgMzMuOXMtMjQuNiA5LjQtMzMuOSAwTDE2NyAyNzNjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDI3MSAxMzV6XCIvPjwvc3ZnPidcbiAgICApXG4gICk7XG4gIGxldCBpbWdXaW5kb3cgPSBtYWluLmFwcGVuZENoaWxkKGJ1aWxkRWxlbWVudChcImRpdlwiLCBcImltZy13aW5kb3dcIiwgXCJcIiwgXCJcIikpO1xuICBpbWdXaW5kb3cuYXBwZW5kQ2hpbGQoYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiaW1nLWhvbGRlclwiLCBcIlwiLCBcIlwiKSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoXG4gICAgYnVpbGRFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwic2Nyb2xsLWZvcndhcmRcIixcbiAgICAgIFtcInNjcm9sbGVyXCJdLFxuICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjJlbVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjwhLS0hIEZvbnQgQXdlc29tZSBGcmVlIDYuNC4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPVwiTTAgMjU2YTI1NiAyNTYgMCAxIDAgNTEyIDBBMjU2IDI1NiAwIDEgMCAwIDI1NnpNMjQxIDM3N2MtOS40IDkuNC0yNC42IDkuNC0zMy45IDBzLTkuNC0yNC42IDAtMzMuOWw4Ny04Ny04Ny04N2MtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlzMjQuNi05LjQgMzMuOSAwTDM0NSAyMzljOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMjQxIDM3N3pcIi8+PC9zdmc+J1xuICAgIClcbiAgKTtcblxuICBjb25zdCBsb2FkSW1hZ2VzID0gKCkgPT4ge1xuICAgIGxldCBpbWdIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1ob2xkZXJcIik7XG4gICAgbGV0IGltYWdlMSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlMS5zcmMgPSBhbGV4YW5kZXI7XG4gICAgaW1hZ2UxLmNsYXNzTGlzdC5hZGQoXCJpbWFnZXNcIik7XG4gICAgaW1hZ2UxLmlkID0gXCJpbWFnZTFcIjtcbiAgICBpbWdIb2xkZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBidWlsZEVsZW1lbnQoXCJkaXZcIiwgXCJpbWctY29udC0xXCIsIFtcImltYWdlLWNvbnRhaW5lclwiXSlcbiAgICApO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWNvbnQtMVwiKS5hcHBlbmRDaGlsZChpbWFnZTEpO1xuXG4gICAgbGV0IGltYWdlMiA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlMi5zcmMgPSBsbG95ZDtcbiAgICBpbWFnZTIuY2xhc3NMaXN0LmFkZChcImltYWdlc1wiKTtcbiAgICBpbWFnZTIuaWQgPSBcImltYWdlMlwiO1xuICAgIGltZ0hvbGRlci5hcHBlbmRDaGlsZChcbiAgICAgIGJ1aWxkRWxlbWVudChcImRpdlwiLCBcImltZy1jb250LTJcIiwgW1wiaW1hZ2UtY29udGFpbmVyXCJdKVxuICAgICk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctY29udC0yXCIpLmFwcGVuZENoaWxkKGltYWdlMik7XG5cbiAgICBsZXQgaW1hZ2UzID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2UzLnNyYyA9IHpvZTtcbiAgICBpbWFnZTMuY2xhc3NMaXN0LmFkZChcImltYWdlc1wiKTtcbiAgICBpbWFnZTMuaWQgPSBcImltYWdlM1wiO1xuICAgIGltZ0hvbGRlci5hcHBlbmRDaGlsZChcbiAgICAgIGJ1aWxkRWxlbWVudChcImRpdlwiLCBcImltZy1jb250LTNcIiwgW1wiaW1hZ2UtY29udGFpbmVyXCJdKVxuICAgICk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctY29udC0zXCIpLmFwcGVuZENoaWxkKGltYWdlMyk7XG4gIH07XG4gIGxvYWRJbWFnZXMoKTtcblxuICBsZXQgY3VycmVudFBvc2l0aW9uID0gMTtcbiAgbGV0IHByZXZpb3VzUG9zaXRpb24gPSAwO1xuICBsZXQgaW1hZ2VXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy13aW5kb3dcIik7XG4gIGxldCBpbWFnZUhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWhvbGRlclwiKTtcbiAgbGV0IHRyYW5zbGF0ZVZhbHVlID0gMDtcblxuICAvL3NldCB0aGUgbmV4dCBpbWFnZSBmdW5jdGlvblxuICBsZXQgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Nyb2xsLWZvcndhcmRcIik7XG4gIG5leHQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctY29udC1cIiArIChjdXJyZW50UG9zaXRpb24gKyAxKSkgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coXCJObyBpbWcgXCIgKyBjdXJyZW50UG9zaXRpb24gKyBcIiBmb3VuZC4gUmV0dXJuaW5nIHRvIHN0YXJ0XCIpO1xuICAgICAgY3VycmVudFBvc2l0aW9uID0gMTtcbiAgICAgIHRyYW5zbGF0ZVZhbHVlID0gMDtcbiAgICAgIHByZXZpb3VzUG9zaXRpb24gPSAwO1xuICAgICAgaW1hZ2VIb2xkZXIuc3R5bGUudHJhbnNsYXRlID0gXCItXCIgKyB0cmFuc2xhdGVWYWx1ZS50b1N0cmluZygpICsgXCJweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY3VycmVudFdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIFwiaW1nLWNvbnQtXCIgKyBjdXJyZW50UG9zaXRpb25cbiAgICAgICkuY2xpZW50V2lkdGg7XG4gICAgICB0cmFuc2xhdGVWYWx1ZSArPSBjdXJyZW50V2lkdGg7XG4gICAgICBjb25zb2xlLmxvZyhcImltZyBcIiArIGN1cnJlbnRQb3NpdGlvbiArIFwiIHdpZHRoOlwiICsgY3VycmVudFdpZHRoKTtcbiAgICAgIGltYWdlSG9sZGVyLnN0eWxlLnRyYW5zbGF0ZSA9IFwiLVwiICsgdHJhbnNsYXRlVmFsdWUudG9TdHJpbmcoKSArIFwicHhcIjtcbiAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRlIHZhbHVlIHNldCB0bzogXCIgKyBpbWFnZUhvbGRlci5zdHlsZS50cmFuc2xhdGUpO1xuICAgICAgY3VycmVudFBvc2l0aW9uKys7XG4gICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgcG9zaXRpb246IFwiICsgY3VycmVudFBvc2l0aW9uKTtcbiAgICAgIHByZXZpb3VzUG9zaXRpb24rKztcbiAgICAgIGNvbnNvbGUubG9nKFwicHJldmlvdXMgcG9zaXRpb246IFwiICsgcHJldmlvdXNQb3NpdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIC8vc2V0IHRoZSBwcmV2aW91cyBuZXh0IGltYWdlIGZ1bmN0aW9uXG4gIGxldCBiYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY3JvbGwtYmFja1wiKTtcbiAgYmFjay5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWNvbnQtXCIgKyBwcmV2aW91c1Bvc2l0aW9uKSA9PSBudWxsIHx8XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1jb250LVwiICsgKHByZXZpb3VzUG9zaXRpb24gLSAxKSkgPT0gbnVsbFxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coXCJObyBpbWcgXCIgKyBwcmV2aW91c1Bvc2l0aW9uICsgXCIgZm91bmQuIFJldHVybmluZyB0byBzdGFydFwiKTtcbiAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IDE7XG4gICAgICB0cmFuc2xhdGVWYWx1ZSA9IDA7XG4gICAgICBwcmV2aW91c1Bvc2l0aW9uID0gMDtcbiAgICAgIGltYWdlSG9sZGVyLnN0eWxlLnRyYW5zbGF0ZSA9IFwiLVwiICsgdHJhbnNsYXRlVmFsdWUudG9TdHJpbmcoKSArIFwicHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJldmlvdXNQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbiAtIDE7XG4gICAgICBsZXQgcHJldmlvdXNXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBcImltZy1jb250LVwiICsgcHJldmlvdXNQb3NpdGlvblxuICAgICAgKS5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnNvbGUubG9nKFwicHJldmlvdXMgd2lkdGg9IFwiICsgcHJldmlvdXNXaWR0aCk7XG4gICAgICB0cmFuc2xhdGVWYWx1ZSAtPSBwcmV2aW91c1dpZHRoO1xuICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGUgdmFsdWVcIiArIHRyYW5zbGF0ZVZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW1nIFwiICsgcHJldmlvdXNQb3NpdGlvbiArIFwiIHdpZHRoOlwiICsgcHJldmlvdXNXaWR0aCk7XG4gICAgICBpbWFnZUhvbGRlci5zdHlsZS50cmFuc2xhdGUgPSBcIi1cIiArIHRyYW5zbGF0ZVZhbHVlLnRvU3RyaW5nKCkgKyBcInB4XCI7XG4gICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0ZSB2YWx1ZSBzZXQgdG86IFwiICsgaW1hZ2VIb2xkZXIuc3R5bGUudHJhbnNsYXRlKTtcbiAgICAgIGN1cnJlbnRQb3NpdGlvbi0tO1xuICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHBvc2l0aW9uOiBcIiArIGN1cnJlbnRQb3NpdGlvbik7XG4gICAgfVxuICB9O1xufTtcblxuLyogY29uc3Qgc2V0V2lkdGggPSAoKSA9PiB7XG4gIGxldCBpbWFnZVdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLXdpbmRvd1wiKTtcbiAgbGV0IG5ld1dpZHRoID1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlMVwiKS5jbGllbnRXaWR0aC50b1N0cmluZygpICsgXCJweFwiO1xuICBjb25zb2xlLmxvZyhuZXdXaWR0aCk7XG4gIGNvbnNvbGUubG9nKGltYWdlV2luZG93KTtcbiAgLy9pbWFnZVdpbmRvdy5zdHlsZS53aWR0aCA9IG5ld1dpZHRoO1xufTsgKi9cblxuZXhwb3J0IHsgc2xpZGVyIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgc2xpZGVyLCByZXNpemVyIH0gZnJvbSBcIi4vaW1nLXNsaWRlclwiO1xuXG5mdW5jdGlvbiBidWlsZEVsZW1lbnQoZWxlbWVudFR5cGUsIGlkLCBjbGFzc0xpc3QsIGlubmVySFRNTCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWQgPSBcIlwiO1xuICB9XG4gIGlmIChjbGFzc0xpc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsYXNzTGlzdCA9IFwiXCI7XG4gIH1cbiAgaWYgKGlubmVySFRNTCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuICBlbGVtZW50LmlkID0gaWQ7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICBlbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTmF2KCkge1xuICBjb25zdCBuYXZCYXIgPSBidWlsZEVsZW1lbnQoXG4gICAgXCJuYXZcIixcbiAgICBcIlwiLFxuICAgIFtcIm5hdmJhclwiXSxcbiAgICAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREA0OCw0MDAsMCwwXCIgLz4nXG4gICk7XG4gIGNvbnN0IG5hdk1lbnUgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgW1wibmF2YmFyLW5hdlwiXSwgXCJcIik7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChuYXZNZW51KTtcblxuICAvL3NldCB0aGUgbnVtYmVyIG9mIG5hdiBpdGVtcyBpbmNsdWRpbmcgbG9nb1xuICBjb25zdCBuYXZJdGVtTnVtID0gNTtcblxuICAvL3NldCB0aGUgbmF2IGl0ZW0gaWNvbnNcbiAgY29uc3QgbmF2SWNvbnMgPSBbXG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi40LjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjMgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9XCJNNDcwLjYgMjc4LjZjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNsLTE2MC0xNjBjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwcy0xMi41IDMyLjggMCA0NS4zTDQwMi43IDI1NiAyNjUuNCAzOTMuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMGwxNjAtMTYwem0tMzUyIDE2MGwxNjAtMTYwYzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zbC0xNjAtMTYwYy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHMtMTIuNSAzMi44IDAgNDUuM0wyMTAuNyAyNTYgNzMuNCAzOTMuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMHpcIi8+PC9zdmc+JyxcbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk01NzUuOCAyNTUuNWMwIDE4LTE1IDMyLjEtMzIgMzIuMWgtMzJsLjcgMTYwLjJjMCAyLjctLjIgNS40LS41IDguMVY0NzJjMCAyMi4xLTE3LjkgNDAtNDAgNDBINDU2Yy0xLjEgMC0yLjIgMC0zLjMtLjFjLTEuNCAuMS0yLjggLjEtNC4yIC4xSDQxNiAzOTJjLTIyLjEgMC00MC0xNy45LTQwLTQwVjQ0OCAzODRjMC0xNy43LTE0LjMtMzItMzItMzJIMjU2Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnY2NCAyNGMwIDIyLjEtMTcuOSA0MC00MCA0MEgxNjAgMTI4LjFjLTEuNSAwLTMtLjEtNC41LS4yYy0xLjIgLjEtMi40IC4yLTMuNiAuMkgxMDRjLTIyLjEgMC00MC0xNy45LTQwLTQwVjM2MGMwLS45IDAtMS45IC4xLTIuOFYyODcuNkgzMmMtMTggMC0zMi0xNC0zMi0zMi4xYzAtOSAzLTE3IDEwLTI0TDI2Ni40IDhjNy03IDE1LTggMjItOHMxNSAyIDIxIDdMNTY0LjggMjMxLjVjOCA3IDEyIDE1IDExIDI0elwiLz48L3N2Zz4nLFxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPVwiTTE2MCA4MEg1MTJjOC44IDAgMTYgNy4yIDE2IDE2VjMyMGMwIDguOC03LjIgMTYtMTYgMTZINDkwLjhMMzg4LjEgMTc4LjljLTQuNC02LjgtMTItMTAuOS0yMC4xLTEwLjlzLTE1LjcgNC4xLTIwLjEgMTAuOWwtNTIuMiA3OS44LTEyLjQtMTYuOWMtNC41LTYuMi0xMS43LTkuOC0xOS40LTkuOHMtMTQuOCAzLjYtMTkuNCA5LjhMMTc1LjYgMzM2SDE2MGMtOC44IDAtMTYtNy4yLTE2LTE2Vjk2YzAtOC44IDcuMi0xNiAxNi0xNnpNOTYgOTZWMzIwYzAgMzUuMyAyOC43IDY0IDY0IDY0SDUxMmMzNS4zIDAgNjQtMjguNyA2NC02NFY5NmMwLTM1LjMtMjguNy02NC02NC02NEgxNjBjLTM1LjMgMC02NCAyOC43LTY0IDY0ek00OCAxMjBjMC0xMy4zLTEwLjctMjQtMjQtMjRTMCAxMDYuNyAwIDEyMFYzNDRjMCA3NS4xIDYwLjkgMTM2IDEzNiAxMzZINDU2YzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0SDEzNmMtNDguNiAwLTg4LTM5LjQtODgtODhWMTIwem0yMDggMjRhMzIgMzIgMCAxIDAgLTY0IDAgMzIgMzIgMCAxIDAgNjQgMHpcIi8+PC9zdmc+JyxcbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk0zMjAgMTkyaDE3LjFjMjIuMSAzOC4zIDYzLjUgNjQgMTEwLjkgNjRjMTEgMCAyMS44LTEuNCAzMi00djQgMzJWNDgwYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyVjMzOS4yTDI4MCA0NDhoNTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMTkyYy01MyAwLTk2LTQzLTk2LTk2VjE5Mi41YzAtMTYuMS0xMi0yOS44LTI4LTMxLjhsLTcuOS0xYy0xNy41LTIuMi0zMC0xOC4yLTI3LjgtMzUuN3MxOC4yLTMwIDM1LjctMjcuOGw3LjkgMWM0OCA2IDg0LjEgNDYuOCA4NC4xIDk1LjN2ODUuM2MzNC40LTUxLjcgOTMuMi04NS44IDE2MC04NS44em0xNjAgMjYuNXYwYy0xMCAzLjUtMjAuOCA1LjUtMzIgNS41Yy0yOC40IDAtNTQtMTIuNC03MS42LTMyaDBjLTMuNy00LjEtNy04LjUtOS45LTEzLjJDMzU3LjMgMTY0IDM1MiAxNDYuNiAzNTIgMTI4djBWMzIgMTIgMTAuN0MzNTIgNC44IDM1Ni43IC4xIDM2Mi42IDBoLjJjMy4zIDAgNi40IDEuNiA4LjQgNC4ybDAgLjFMMzg0IDIxLjNsMjcuMiAzNi4zTDQxNiA2NGg2NGw0LjgtNi40TDUxMiAyMS4zIDUyNC44IDQuM2wwLS4xYzItMi42IDUuMS00LjIgOC40LTQuMmguMkM1MzkuMyAuMSA1NDQgNC44IDU0NCAxMC43VjEyIDMydjk2YzAgMTcuMy00LjYgMzMuNi0xMi42IDQ3LjZjLTExLjMgMTkuOC0yOS42IDM1LjItNTEuNCA0Mi45ek00MzIgMTI4YTE2IDE2IDAgMSAwIC0zMiAwIDE2IDE2IDAgMSAwIDMyIDB6bTQ4IDE2YTE2IDE2IDAgMSAwIDAtMzIgMTYgMTYgMCAxIDAgMCAzMnpcIi8+PC9zdmc+JyxcbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk00OTUuOSAxNjYuNmMzLjIgOC43IC41IDE4LjQtNi40IDI0LjZsLTQzLjMgMzkuNGMxLjEgOC4zIDEuNyAxNi44IDEuNyAyNS40cy0uNiAxNy4xLTEuNyAyNS40bDQzLjMgMzkuNGM2LjkgNi4yIDkuNiAxNS45IDYuNCAyNC42Yy00LjQgMTEuOS05LjcgMjMuMy0xNS44IDM0LjNsLTQuNyA4LjFjLTYuNiAxMS0xNCAyMS40LTIyLjEgMzEuMmMtNS45IDcuMi0xNS43IDkuNi0yNC41IDYuOGwtNTUuNy0xNy43Yy0xMy40IDEwLjMtMjguMiAxOC45LTQ0IDI1LjRsLTEyLjUgNTcuMWMtMiA5LjEtOSAxNi4zLTE4LjIgMTcuOGMtMTMuOCAyLjMtMjggMy41LTQyLjUgMy41cy0yOC43LTEuMi00Mi41LTMuNWMtOS4yLTEuNS0xNi4yLTguNy0xOC4yLTE3LjhsLTEyLjUtNTcuMWMtMTUuOC02LjUtMzAuNi0xNS4xLTQ0LTI1LjRMODMuMSA0MjUuOWMtOC44IDIuOC0xOC42IC4zLTI0LjUtNi44Yy04LjEtOS44LTE1LjUtMjAuMi0yMi4xLTMxLjJsLTQuNy04LjFjLTYuMS0xMS0xMS40LTIyLjQtMTUuOC0zNC4zYy0zLjItOC43LS41LTE4LjQgNi40LTI0LjZsNDMuMy0zOS40QzY0LjYgMjczLjEgNjQgMjY0LjYgNjQgMjU2cy42LTE3LjEgMS43LTI1LjRMMjIuNCAxOTEuMmMtNi45LTYuMi05LjYtMTUuOS02LjQtMjQuNmM0LjQtMTEuOSA5LjctMjMuMyAxNS44LTM0LjNsNC43LTguMWM2LjYtMTEgMTQtMjEuNCAyMi4xLTMxLjJjNS45LTcuMiAxNS43LTkuNiAyNC41LTYuOGw1NS43IDE3LjdjMTMuNC0xMC4zIDI4LjItMTguOSA0NC0yNS40bDEyLjUtNTcuMWMyLTkuMSA5LTE2LjMgMTguMi0xNy44QzIyNy4zIDEuMiAyNDEuNSAwIDI1NiAwczI4LjcgMS4yIDQyLjUgMy41YzkuMiAxLjUgMTYuMiA4LjcgMTguMiAxNy44bDEyLjUgNTcuMWMxNS44IDYuNSAzMC42IDE1LjEgNDQgMjUuNGw1NS43LTE3LjdjOC44LTIuOCAxOC42LS4zIDI0LjUgNi44YzguMSA5LjggMTUuNSAyMC4yIDIyLjEgMzEuMmw0LjcgOC4xYzYuMSAxMSAxMS40IDIyLjQgMTUuOCAzNC4zek0yNTYgMzM2YTgwIDgwIDAgMSAwIDAtMTYwIDgwIDgwIDAgMSAwIDAgMTYwelwiLz48L3N2Zz4nLFxuICBdO1xuXG4gIC8vc2V0IHRoZSBuYXYgbGluayB0ZXh0XG4gIGNvbnN0IG5hdkxpbmtUZXh0ID0gW1wiTG9nb1wiLCBcIkhvbWVcIiwgXCJJbWFnZXNcIiwgXCJsaW5rIDNcIiwgXCJTZXR0aW5nc1wiXTtcblxuICAvL2J1aWxkIHRoZSBuYXYgaXRlbXNcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IG5hdkl0ZW1OdW0pIHtcbiAgICBsZXQgbmF2SXRlbSA9IG51bGw7XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIG5hdkl0ZW0gPSBidWlsZEVsZW1lbnQoXCJidXR0b25cIiwgXCJuYXYtXCIgKyBpLCBbXCJsb2dvXCJdLCBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2SXRlbSA9IGJ1aWxkRWxlbWVudChcImJ1dHRvblwiLCBcIm5hdi1cIiArIGksIFtcIm5hdi1pdGVtXCJdLCBcIlwiKTtcbiAgICB9XG4gICAgbGV0IG5hdkxpbmsgPSBidWlsZEVsZW1lbnQoXCJhXCIsIFwibmF2LWxpbmstXCIgKyBpLCBbXCJuYXYtbGlua1wiXSwgbmF2SWNvbnNbaV0pO1xuICAgIGxldCBuYXZMaW5rU3BhbiA9IGJ1aWxkRWxlbWVudChcInNwYW5cIiwgXCJcIiwgW1wibGluay10ZXh0XCJdLCBuYXZMaW5rVGV4dFtpXSk7XG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChuYXZJdGVtKTtcbiAgICBuYXZJdGVtLmFwcGVuZENoaWxkKG5hdkxpbmspO1xuICAgIG5hdkxpbmsuYXBwZW5kQ2hpbGQobmF2TGlua1NwYW4pO1xuICAgIGkrKztcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChuYXZCYXIpO1xuXG4gIC8vc2V0IHRoZSBmaXJzdCBuYXYgZnVuY3Rpb25cbiAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdi1pdGVtXCIpO1xuICBuYXZJdGVtc1swXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikucmVtb3ZlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlbW92ZWRcIik7XG4gICAgICBidWlsZE1haW4oXCJkZWZhdWx0XCIpO1xuICAgICAgY29uc29sZS5sb2coXCJyZWJ1aWx0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vdGhpbmcgdG8gcmVtb3ZlXCIpO1xuICAgICAgYnVpbGRNYWluKFwiZGVmYXVsdFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVidWlsdFwiKTtcbiAgICB9XG4gIH07XG5cbiAgLy9zZXQgdGhlIHNlY29uZCBuYXYgZnVuY3Rpb25cbiAgbmF2SXRlbXNbMV0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLnJlbW92ZSgpO1xuICAgICAgY29uc29sZS5sb2coXCJyZW1vdmVkXCIpO1xuICAgICAgYnVpbGRNYWluKFwiaW1hZ2VzXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vdGhpbmcgdG8gcmVtb3ZlXCIpO1xuICAgICAgYnVpbGRNYWluKFwiaW1hZ2VzXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJyZWJ1aWx0XCIpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRNYWluKHBhcmFtKSB7XG4gIGlmIChwYXJhbSA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICBkZWZhdWx0TWFpbigpO1xuICB9IGVsc2UgaWYgKHBhcmFtID09PSBcImltYWdlc1wiKSB7XG4gICAgc2xpZGVyKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0TWFpbigpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChidWlsZEVsZW1lbnQoXCJtYWluXCIsIFwiXCIsIFwiXCIsIFwiXCIpKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChcbiAgICAgIGJ1aWxkRWxlbWVudChcImgxXCIsIFwiXCIsIFwiXCIsIFwiVGhpcyBpcyBhbiBhdHlwaWNhbCB0aXRsZSBvbiB0aGUgcGFnZVwiKVxuICAgICk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChcbiAgICAgIGJ1aWxkRWxlbWVudChcbiAgICAgICAgXCJwXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIHB1bHZpbmFyIGRvbG9yIGF0IGxvcmVtIGNvbmd1ZSwgdXQgbWFsZXN1YWRhIGxvcmVtIHBvcnR0aXRvci4gU3VzcGVuZGlzc2UgYXQgbWFzc2EgY29tbW9kbywgc2NlbGVyaXNxdWUgaXBzdW0gc2VkLCBydXRydW0gdGVsbHVzLiBQaGFzZWxsdXMgZmFjaWxpc2lzIHNlZCBuaXNpIGEgcHVsdmluYXIuIFBlbGxlbnRlc3F1ZSB2ZXN0aWJ1bHVtIGZldWdpYXQgdGVsbHVzLCB1dCB1bHRyaWNlcyBtZXR1cyBoZW5kcmVyaXQgaWQuIEZ1c2NlIGVnZXN0YXMgbWkgZXN0LCBhdCB1bHRyaWNlcyBvcmNpIGNvbW1vZG8gcXVpcy4gSW50ZWdlciBpbiBwaGFyZXRyYSBuaWJoLCB0ZW1wb3IgbG9ib3J0aXMgdGVsbHVzLiBQcmFlc2VudCBlcm9zIG5lcXVlLCBhbGlxdWFtIGVnZXQgZmluaWJ1cyBhdCwgdWx0cmljZXMgaWQgc2FwaWVuLiBNYXVyaXMgdml0YWUgbGFjdXMgbmlzaS5Eb25lYyBpYWN1bGlzLCBkb2xvciBpbiBwaGFyZXRyYSBoZW5kcmVyaXQsIG51bmMgZXJvcyB2aXZlcnJhIG5pc2ksIHNlZCBzY2VsZXJpc3F1ZSBlbGl0IHZlbGl0IHV0IGRvbG9yLiBDcmFzIGZyaW5naWxsYSBvZGlvIGxhY3VzLCBwbGFjZXJhdCBlbGVtZW50dW0gZmVsaXMgcG9ydHRpdG9yIG5vbi4gUHJvaW4gZGlhbSBlc3QsIHJ1dHJ1bSBzaXQgYW1ldCBjb25zZWN0ZXR1ciBpZCwgdml2ZXJyYSB1dCBpcHN1bS4gRXRpYW0gbmVjIHRpbmNpZHVudCBleC4gRHVpcyBjdXJzdXMgdml2ZXJyYSBkaWduaXNzaW0uIFF1aXNxdWUgbnVuYyBsYWN1cywgY3Vyc3VzIHZpdGFlIHZlbGl0IHZpdGFlLCB0ZW1wdXMgYXVjdG9yIGxvcmVtLiBQaGFzZWxsdXMgZWdlc3RhcyBtZXR1cyBtYWxlc3VhZGEgbWF1cmlzIHVsdHJpY2VzIHZlbmVuYXRpcy4gRXRpYW0gYSBwbGFjZXJhdCBsb3JlbS5BbGlxdWFtIHNlbXBlciBvcmNpIGV0IGp1c3RvIHBlbGxlbnRlc3F1ZSwgYSBhbGlxdWV0IG51bGxhIGRhcGlidXMuIE51bGxhbSBhIHRyaXN0aXF1ZSB0dXJwaXMsIGFjIHNjZWxlcmlzcXVlIG1ldHVzLiBTZWQgbWFsZXN1YWRhIHRlbXB1cyBlbmltIHZvbHV0cGF0IHB1bHZpbmFyLiBJbnRlZ2VyIG5pc2kgbGlndWxhLCB2dWxwdXRhdGUgYSBkaWduaXNzaW0gaW4sIGRhcGlidXMgY29uZ3VlIHB1cnVzLiBDdXJhYml0dXIgbW9sbGlzIG1hdXJpcyBhdCBsaWd1bGEgYWNjdW1zYW4sIHV0IGx1Y3R1cyBlbmltIGNvbW1vZG8uIFByb2luIGJpYmVuZHVtIGFudGUgbGFjdXMsIGV1IGRhcGlidXMgZW5pbSBzZW1wZXIgaWQuIFNlZCB2b2x1dHBhdCBhdWN0b3IgYXVndWUsIHNlZCB2ZWhpY3VsYSBuZXF1ZSBncmF2aWRhIGF0LiAgU2VkIGNvbnZhbGxpcyBkaWN0dW0gbWFnbmEsIHV0IHBsYWNlcmF0IHRvcnRvciBwcmV0aXVtIGF0LiBOdW5jIGxhY2luaWEgc2l0IGFtZXQgbmlzaSB2aXRhZSBzZW1wZXIuIE1hZWNlbmFzIHZpdGFlIGVuaW0gZXUgYXVndWUgcmhvbmN1cyBlZmZpY2l0dXIuIEN1cmFiaXR1ciBldCBwdXJ1cyB0cmlzdGlxdWUsIGRpZ25pc3NpbSBlcmF0IHZpdGFlLCBtb2xsaXMgZXJvcy4gVml2YW11cyB0aW5jaWR1bnQgdml2ZXJyYSB0b3J0b3IgdmVsIHNvZGFsZXMuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gRG9uZWMgZWxlaWZlbmQgaXBzdW0gcXVhbSwgYWMgcG9ydHRpdG9yIG1hZ25hIHRlbXB1cyBldS4gTmFtIGV4IG1hZ25hLCB2ZW5lbmF0aXMgZXUgbGFjdXMgaW4sIHNvZGFsZXMgc2VtcGVyIGZlbGlzLiBEb25lYyB1dCBydXRydW0gbGVjdHVzLiBFdGlhbSBwb3N1ZXJlIHNhZ2l0dGlzIG5pc2wgbm9uIGNvbnZhbGxpcy4gVmVzdGlidWx1bSBmYXVjaWJ1cyBsaWd1bGEgcmlzdXMsIGlkIHRlbXBvciBuaXNsIHVsdHJpY2llcyB1dC4gSW4gdm9sdXRwYXQsIHNhcGllbiBhdCB1bHRyaWNpZXMgc29kYWxlcywgYXJjdSB0dXJwaXMgcmhvbmN1cyBsb3JlbSwgYWMgaGVuZHJlcml0IHF1YW0gZWxpdCBhYyBkb2xvci4gSW50ZWdlciBldCBsaWd1bGEgYSBkdWkgZ3JhdmlkYSBvcm5hcmUuIER1aXMgc2l0IGFtZXQgb3JuYXJlIHJpc3VzLiBQcm9pbiBub24gc2NlbGVyaXNxdWUganVzdG8uIE1hdXJpcyBub24gdGVsbHVzIGVsaXQuVmVzdGlidWx1bSB0ZW1wdXMgcXVpcyBtZXR1cyBpZCBjb25ndWUuIFNlZCBpbiBvcmNpIHNlZCBsaWd1bGEgcGVsbGVudGVzcXVlIHVsdHJpY2llcy4gVml2YW11cyBldSBjdXJzdXMgZXJvcy4gUHJvaW4gZWdlc3RhcywganVzdG8gdml0YWUgZGlnbmlzc2ltIGNvbmRpbWVudHVtLCBpcHN1bSBmZWxpcyBiaWJlbmR1bSBkdWksIHZlbCBhbGlxdWV0IHJpc3VzIHR1cnBpcyBzZWQgZHVpLiBNYWVjZW5hcyBzYWdpdHRpcyBudWxsYSBtZXR1cywgdGluY2lkdW50IGxhb3JlZXQgZXJhdCBjb25zZXF1YXQgbm9uLiBQaGFzZWxsdXMgdmVsIGVzdCB1dCBtYXNzYSBvcm5hcmUgcG9zdWVyZSB1dCBzZWQgZXJhdC4gTWF1cmlzIGV1IHJob25jdXMgbWFzc2EuIE5hbSBzZWQgbGFjdXMgZmV1Z2lhdCwgY3Vyc3VzIGVsaXQgZmVybWVudHVtLCBwbGFjZXJhdCBzZW0uIE1hZWNlbmFzIGFjIHVsbGFtY29ycGVyIGRpYW0sIG5vbiBzb2xsaWNpdHVkaW4gYXJjdS4gRG9uZWMgc2VtIGVyYXQsIHBvcnRhIG5lYyBkdWkgaWQsIG1heGltdXMgdmVoaWN1bGEgdXJuYS4gUXVpc3F1ZSBldSBkYXBpYnVzIGVzdCwgc2l0IGFtZXQgbWF4aW11cyB0ZWxsdXMuIERvbmVjIHJob25jdXMgdXJuYSBtYXR0aXMgZWZmaWNpdHVyIHN1c2NpcGl0LiBDdXJhYml0dXIgYWNjdW1zYW4gbnVsbGEgdml0YWUgbG9yZW0gZGlnbmlzc2ltIGltcGVyZGlldC4gXCJcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cbmJ1aWxkTmF2KCk7XG4vKiBidWlsZE1haW4oXCJkZWZhdWx0XCIpOyAqL1xuYnVpbGRNYWluKFwiaW1hZ2VzXCIpO1xuLy9yZXNpemVyKCk7XG5cbi8qIGxldCBpbWFnZVdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLXdpbmRvd1wiKTtcbmNvbnNvbGUubG9nKGltYWdlV2luZG93KTtcbmxldCBuZXdXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2UxXCIpLmNsaWVudFdpZHRoLnRvU3RyaW5nKCkgKyBcInB4XCI7XG5jb25zb2xlLmxvZyhuZXdXaWR0aCk7XG5jb25zb2xlLmxvZyhpbWFnZVdpbmRvdyk7XG5pbWFnZVdpbmRvdy5zdHlsZS53aWR0aCA9IG5ld1dpZHRoOyAqL1xuXG5leHBvcnQgeyBidWlsZEVsZW1lbnQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==