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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 16px;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  --text-primary: #b6b6b6;\n  --text-secondary: #ececec;\n  --bg-primary: #23232e;\n  --bg-secondary: #141418;\n  --icon-hover: #ff7eee;\n  --transition-speed: 200ms ease;\n}\n\nbody {\n  color: black;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\nbody::-webkit-scrollbar {\n  width: 0.25rem;\n}\n\nbody::-webkit-scrollbar-track {\n  background: #1e1e1e24;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background: #6649b8;\n}\n\n.navbar {\n  position: fixed;\n  background-color: var(--bg-primary);\n  transition: var(--transition-speed);\n}\n\n.navbar-nav {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n\n.nav-link:hover {\n  filter: grayscale(0%) opacity(1);\n  background-color: var(--bg-secondary);\n  fill: var(--icon-hover);\n}\n\n.nav-item {\n  width: 100%;\n}\n\n.nav-item:last-child {\n  margin-top: auto;\n}\n\n.nav-link {\n  display: flex;\n  align-items: center;\n  height: 5rem;\n  color: var(--text-primary);\n  text-decoration: none;\n  filter: grayscale(100%) opacity(0.7);\n  transition: var(--transition-speed);\n}\n\n.link-text {\n  display: none;\n  margin-left: 1rem;\n}\n\n.nav-link svg {\n  width: 2rem;\n  min-width: 2rem;\n  margin: 0 1.5rem;\n  fill: var(--icon-hover);\n}\n\n#nav-link-0 {\n  flex-direction: row-reverse;\n}\n\n.logo {\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: var(--text-secondary);\n  background: var(--bg-secondary);\n  font-size: 1rem;\n  letter-spacing: 0.3ch;\n  width: 100%;\n}\n\n.logo svg {\n  transform: rotate(0deg);\n  transition: transform var(--transition-speed);\n}\n.navbar:hover .logo svg {\n  transform: rotate(-180deg);\n}\n\nmain {\n  margin-left: 5rem;\n  padding: 1rem;\n}\n\nbutton {\n  all: unset;\n  cursor: pointer;\n}\n\n/* small screens */\n@media only screen and (max-width: 600px) {\n  .navbar {\n    bottom: 0;\n    width: 100vw;\n    height: 5rem;\n    position: fixed;\n    background-color: var(--bg-primary);\n    transition: var(--transition-speed);\n  }\n\n  .logo {\n    display: none;\n  }\n\n  .navbar-nav {\n    flex-direction: row;\n  }\n\n  .nav-link {\n    justify-content: center;\n  }\n  main {\n    margin: 0;\n  }\n}\n/* Large screens */\n@media only screen and (min-width: 600px) {\n  .navbar {\n    top: 0;\n    width: 5rem;\n    height: 100vh;\n    position: fixed;\n    background-color: var(--bg-primary);\n    transition: var(--transition-speed);\n  }\n  .navbar:hover {\n    width: 16rem;\n  }\n  .navbar:hover .link-text {\n    display: inline;\n    transition: opacity var(--transition-speed);\n  }\n}\n\n/* \n#main {\n  display: flex;\n}\n#nav-bar-container {\n  background-color: antiquewhite;\n  height: 100vh;\n  width: max-content;\n}\n#nav-bar-container:hover {\n  animation: mymove 800ms;\n  animation-timing-function: ease-in-out;\n}\n@keyframes mymove {\n  from {\n    width: 50px;\n  }\n  to {\n    width: 100px;\n  }\n} */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,6EAA6E;EAC7E,uBAAuB;EACvB,yBAAyB;EACzB,qBAAqB;EACrB,uBAAuB;EACvB,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mCAAmC;EACnC,mCAAmC;AACrC;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;EAC1B,qBAAqB;EACrB,oCAAoC;EACpC,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;EAClB,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;EACf,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,6CAA6C;AAC/C;AACA;EACE,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA,kBAAkB;AAClB;EACE;IACE,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,mCAAmC;IACnC,mCAAmC;EACrC;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,uBAAuB;EACzB;EACA;IACE,SAAS;EACX;AACF;AACA,kBAAkB;AAClB;EACE;IACE,MAAM;IACN,WAAW;IACX,aAAa;IACb,eAAe;IACf,mCAAmC;IACnC,mCAAmC;EACrC;EACA;IACE,YAAY;EACd;EACA;IACE,eAAe;IACf,2CAA2C;EAC7C;AACF;;AAEA;;;;;;;;;;;;;;;;;;;;GAoBG","sourcesContent":[":root {\n  font-size: 16px;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  --text-primary: #b6b6b6;\n  --text-secondary: #ececec;\n  --bg-primary: #23232e;\n  --bg-secondary: #141418;\n  --icon-hover: #ff7eee;\n  --transition-speed: 200ms ease;\n}\n\nbody {\n  color: black;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\nbody::-webkit-scrollbar {\n  width: 0.25rem;\n}\n\nbody::-webkit-scrollbar-track {\n  background: #1e1e1e24;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background: #6649b8;\n}\n\n.navbar {\n  position: fixed;\n  background-color: var(--bg-primary);\n  transition: var(--transition-speed);\n}\n\n.navbar-nav {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n\n.nav-link:hover {\n  filter: grayscale(0%) opacity(1);\n  background-color: var(--bg-secondary);\n  fill: var(--icon-hover);\n}\n\n.nav-item {\n  width: 100%;\n}\n\n.nav-item:last-child {\n  margin-top: auto;\n}\n\n.nav-link {\n  display: flex;\n  align-items: center;\n  height: 5rem;\n  color: var(--text-primary);\n  text-decoration: none;\n  filter: grayscale(100%) opacity(0.7);\n  transition: var(--transition-speed);\n}\n\n.link-text {\n  display: none;\n  margin-left: 1rem;\n}\n\n.nav-link svg {\n  width: 2rem;\n  min-width: 2rem;\n  margin: 0 1.5rem;\n  fill: var(--icon-hover);\n}\n\n#nav-link-0 {\n  flex-direction: row-reverse;\n}\n\n.logo {\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: var(--text-secondary);\n  background: var(--bg-secondary);\n  font-size: 1rem;\n  letter-spacing: 0.3ch;\n  width: 100%;\n}\n\n.logo svg {\n  transform: rotate(0deg);\n  transition: transform var(--transition-speed);\n}\n.navbar:hover .logo svg {\n  transform: rotate(-180deg);\n}\n\nmain {\n  margin-left: 5rem;\n  padding: 1rem;\n}\n\nbutton {\n  all: unset;\n  cursor: pointer;\n}\n\n/* small screens */\n@media only screen and (max-width: 600px) {\n  .navbar {\n    bottom: 0;\n    width: 100vw;\n    height: 5rem;\n    position: fixed;\n    background-color: var(--bg-primary);\n    transition: var(--transition-speed);\n  }\n\n  .logo {\n    display: none;\n  }\n\n  .navbar-nav {\n    flex-direction: row;\n  }\n\n  .nav-link {\n    justify-content: center;\n  }\n  main {\n    margin: 0;\n  }\n}\n/* Large screens */\n@media only screen and (min-width: 600px) {\n  .navbar {\n    top: 0;\n    width: 5rem;\n    height: 100vh;\n    position: fixed;\n    background-color: var(--bg-primary);\n    transition: var(--transition-speed);\n  }\n  .navbar:hover {\n    width: 16rem;\n  }\n  .navbar:hover .link-text {\n    display: inline;\n    transition: opacity var(--transition-speed);\n  }\n}\n\n/* \n#main {\n  display: flex;\n}\n#nav-bar-container {\n  background-color: antiquewhite;\n  height: 100vh;\n  width: max-content;\n}\n#nav-bar-container:hover {\n  animation: mymove 800ms;\n  animation-timing-function: ease-in-out;\n}\n@keyframes mymove {\n  from {\n    width: 50px;\n  }\n  to {\n    width: 100px;\n  }\n} */\n"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


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
  const navMenu = buildElement("ul", "", ["navbar-nav"], "");
  navBar.appendChild(navMenu);

  //set the number of nav items including logo
  const navItemNum = 5;

  //set the nav item icons
  const navIcons = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>',
  ];

  //set the nav link text
  const navLinkText = ["Logo", "Link 1", "Link 2", "link 3", "Settings"];

  //set the nav link hrefs
  const navLinkHref = [
    "http://localhost:8080/",
    "http://localhost:8080/",
    "http://localhost:8080/",
    "http://localhost:8080/",
    "http://localhost:8080/",
  ];

  //build the nav items
  let i = 0;
  while (i < navItemNum) {
    let navItem = null;
    if (i === 0) {
      navItem = buildElement("li", "nav-" + i, ["logo"], "");
    } else {
      navItem = buildElement("li", "nav-" + i, ["nav-item"], "");
    }
    let navLink = buildElement("a", "nav-link-" + i, ["nav-link"], navIcons[i]);
    navLink.href = navLinkHref[i];
    let navLinkSpan = buildElement("span", "", ["link-text"], navLinkText[i]);
    navMenu.appendChild(navItem);
    navItem.appendChild(navLink);
    navLink.appendChild(navLinkSpan);
    i++;
  }
  document.body.append(navBar);
}

function buildMain() {
  document.body.append(buildElement("main", "", "", ""));
  const main = document.querySelector("main");
  main.appendChild(
    buildElement("h1", "", "", "This is a typical title on the page")
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

buildNav();
buildMain();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWR5bmFtaWN1aS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljdWkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tZHluYW1pY3VpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljdWkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tZHluYW1pY3VpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tZHluYW1pY3VpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tZHluYW1pY3VpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWR5bmFtaWN1aS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS10ZXh0LXByaW1hcnk6ICNiNmI2YjY7XFxuICAtLXRleHQtc2Vjb25kYXJ5OiAjZWNlY2VjO1xcbiAgLS1iZy1wcmltYXJ5OiAjMjMyMzJlO1xcbiAgLS1iZy1zZWNvbmRhcnk6ICMxNDE0MTg7XFxuICAtLWljb24taG92ZXI6ICNmZjdlZWU7XFxuICAtLXRyYW5zaXRpb24tc3BlZWQ6IDIwMG1zIGVhc2U7XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMC4yNXJlbTtcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogIzFlMWUxZTI0O1xcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjNjY0OWI4O1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XFxufVxcblxcbi5uYXZiYXItbmF2IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uYXYtbGluazpob3ZlciB7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSkgb3BhY2l0eSgxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeSk7XFxuICBmaWxsOiB2YXIoLS1pY29uLWhvdmVyKTtcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2LWl0ZW06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4ubmF2LWxpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIG9wYWNpdHkoMC43KTtcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbn1cXG5cXG4ubGluay10ZXh0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLm5hdi1saW5rIHN2ZyB7XFxuICB3aWR0aDogMnJlbTtcXG4gIG1pbi13aWR0aDogMnJlbTtcXG4gIG1hcmdpbjogMCAxLjVyZW07XFxuICBmaWxsOiB2YXIoLS1pY29uLWhvdmVyKTtcXG59XFxuXFxuI25hdi1saW5rLTAge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4zY2g7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxvZ28gc3ZnIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbn1cXG4ubmF2YmFyOmhvdmVyIC5sb2dvIHN2ZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGw6IHVuc2V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBzbWFsbCBzY3JlZW5zICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm5hdmJhciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbiAgfVxcblxcbiAgLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm5hdmJhci1uYXYge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLm5hdi1saW5rIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICBtYWluIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbn1cXG4vKiBMYXJnZSBzY3JlZW5zICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgLm5hdmJhciB7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbiAgfVxcbiAgLm5hdmJhcjpob3ZlciB7XFxuICAgIHdpZHRoOiAxNnJlbTtcXG4gIH1cXG4gIC5uYXZiYXI6aG92ZXIgLmxpbmstdGV4dCB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcXG4gIH1cXG59XFxuXFxuLyogXFxuI21haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI25hdi1iYXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcbiNuYXYtYmFyLWNvbnRhaW5lcjpob3ZlciB7XFxuICBhbmltYXRpb246IG15bW92ZSA4MDBtcztcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5Aa2V5ZnJhbWVzIG15bW92ZSB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICB9XFxuICB0byB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gIH1cXG59ICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZiw2RUFBNkU7RUFDN0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMscUNBQXFDO0VBQ3JDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDRjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFO0lBQ0UsTUFBTTtJQUNOLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLDJDQUEyQztFQUM3QztBQUNGOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIFxcXCJHaWxsIFNhbnMgTVRcXFwiLCBDYWxpYnJpLCBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tdGV4dC1wcmltYXJ5OiAjYjZiNmI2O1xcbiAgLS10ZXh0LXNlY29uZGFyeTogI2VjZWNlYztcXG4gIC0tYmctcHJpbWFyeTogIzIzMjMyZTtcXG4gIC0tYmctc2Vjb25kYXJ5OiAjMTQxNDE4O1xcbiAgLS1pY29uLWhvdmVyOiAjZmY3ZWVlO1xcbiAgLS10cmFuc2l0aW9uLXNwZWVkOiAyMDBtcyBlYXNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDAuMjVyZW07XFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICMxZTFlMWUyNDtcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogIzY2NDliODtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTtcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbn1cXG5cXG4ubmF2YmFyLW5hdiB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubmF2LWxpbms6aG92ZXIge1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCUpIG9wYWNpdHkoMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xcbiAgZmlsbDogdmFyKC0taWNvbi1ob3Zlcik7XFxufVxcblxcbi5uYXYtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLm5hdi1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBvcGFjaXR5KDAuNyk7XFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcXG59XFxuXFxuLmxpbmstdGV4dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5uYXYtbGluayBzdmcge1xcbiAgd2lkdGg6IDJyZW07XFxuICBtaW4td2lkdGg6IDJyZW07XFxuICBtYXJnaW46IDAgMS41cmVtO1xcbiAgZmlsbDogdmFyKC0taWNvbi1ob3Zlcik7XFxufVxcblxcbiNuYXYtbGluay0wIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM2NoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5sb2dvIHN2ZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcXG59XFxuLm5hdmJhcjpob3ZlciAubG9nbyBzdmcge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxufVxcblxcbm1haW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxsOiB1bnNldDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogc21hbGwgc2NyZWVucyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5uYXZiYXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcXG4gIH1cXG5cXG4gIC5sb2dvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5uYXZiYXItbmF2IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5uYXYtbGluayB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgbWFpbiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuLyogTGFyZ2Ugc2NyZWVucyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gIC5uYXZiYXIge1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcXG4gIH1cXG4gIC5uYXZiYXI6aG92ZXIge1xcbiAgICB3aWR0aDogMTZyZW07XFxuICB9XFxuICAubmF2YmFyOmhvdmVyIC5saW5rLXRleHQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XFxuICB9XFxufVxcblxcbi8qIFxcbiNtYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNuYXYtYmFyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG4jbmF2LWJhci1jb250YWluZXI6aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBteW1vdmUgODAwbXM7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuQGtleWZyYW1lcyBteW1vdmUge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICB9XFxufSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBidWlsZEVsZW1lbnQoZWxlbWVudFR5cGUsIGlkLCBjbGFzc0xpc3QsIGlubmVySFRNTCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWQgPSBcIlwiO1xuICB9XG4gIGlmIChjbGFzc0xpc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsYXNzTGlzdCA9IFwiXCI7XG4gIH1cbiAgaWYgKGlubmVySFRNTCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuICBlbGVtZW50LmlkID0gaWQ7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICBlbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTmF2KCkge1xuICBjb25zdCBuYXZCYXIgPSBidWlsZEVsZW1lbnQoXG4gICAgXCJuYXZcIixcbiAgICBcIlwiLFxuICAgIFtcIm5hdmJhclwiXSxcbiAgICAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREA0OCw0MDAsMCwwXCIgLz4nXG4gICk7XG4gIGNvbnN0IG5hdk1lbnUgPSBidWlsZEVsZW1lbnQoXCJ1bFwiLCBcIlwiLCBbXCJuYXZiYXItbmF2XCJdLCBcIlwiKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xuXG4gIC8vc2V0IHRoZSBudW1iZXIgb2YgbmF2IGl0ZW1zIGluY2x1ZGluZyBsb2dvXG4gIGNvbnN0IG5hdkl0ZW1OdW0gPSA1O1xuXG4gIC8vc2V0IHRoZSBuYXYgaXRlbSBpY29uc1xuICBjb25zdCBuYXZJY29ucyA9IFtcbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk00NzAuNiAyNzguNmMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM2wtMTYwLTE2MGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNMNDAyLjcgMjU2IDI2NS40IDM5My40Yy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM3MzMi44IDEyLjUgNDUuMyAwbDE2MC0xNjB6bS0zNTIgMTYwbDE2MC0xNjBjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNsLTE2MC0xNjBjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwcy0xMi41IDMyLjggMCA0NS4zTDIxMC43IDI1NiA3My40IDM5My40Yy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM3MzMi44IDEyLjUgNDUuMyAwelwiLz48L3N2Zz4nLFxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPVwiTTIyNCAyNTZBMTI4IDEyOCAwIDEgMCAyMjQgMGExMjggMTI4IDAgMSAwIDAgMjU2em0tNDUuNyA0OEM3OS44IDMwNCAwIDM4My44IDAgNDgyLjNDMCA0OTguNyAxMy4zIDUxMiAyOS43IDUxMkg0MTguM2MxNi40IDAgMjkuNy0xMy4zIDI5LjctMjkuN0M0NDggMzgzLjggMzY4LjIgMzA0IDI2OS43IDMwNEgxNzguM3pcIi8+PC9zdmc+JyxcbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NDAgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk0xMTIgMEM4NS41IDAgNjQgMjEuNSA2NCA0OFY5NkgxNmMtOC44IDAtMTYgNy4yLTE2IDE2czcuMiAxNiAxNiAxNkg2NCAyNzJjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZINjQgNDhjLTguOCAwLTE2IDcuMi0xNiAxNnM3LjIgMTYgMTYgMTZINjQgMjQwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2SDY0IDE2Yy04LjggMC0xNiA3LjItMTYgMTZzNy4yIDE2IDE2IDE2SDY0IDIwOGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNkg2NFY0MTZjMCA1MyA0MyA5NiA5NiA5NnM5Ni00MyA5Ni05NkgzODRjMCA1MyA0MyA5NiA5NiA5NnM5Ni00MyA5Ni05NmgzMmMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMlYyODggMjU2IDIzNy4zYzAtMTctNi43LTMzLjMtMTguNy00NS4zTDUxMiAxMTQuN2MtMTItMTItMjguMy0xOC43LTQ1LjMtMTguN0g0MTZWNDhjMC0yNi41LTIxLjUtNDgtNDgtNDhIMTEyek01NDQgMjM3LjNWMjU2SDQxNlYxNjBoNTAuN0w1NDQgMjM3LjN6TTE2MCAzNjhhNDggNDggMCAxIDEgMCA5NiA0OCA0OCAwIDEgMSAwLTk2em0yNzIgNDhhNDggNDggMCAxIDEgOTYgMCA0OCA0OCAwIDEgMSAtOTYgMHpcIi8+PC9zdmc+JyxcbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk0zMjAgMTkyaDE3LjFjMjIuMSAzOC4zIDYzLjUgNjQgMTEwLjkgNjRjMTEgMCAyMS44LTEuNCAzMi00djQgMzJWNDgwYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyVjMzOS4yTDI4MCA0NDhoNTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMTkyYy01MyAwLTk2LTQzLTk2LTk2VjE5Mi41YzAtMTYuMS0xMi0yOS44LTI4LTMxLjhsLTcuOS0xYy0xNy41LTIuMi0zMC0xOC4yLTI3LjgtMzUuN3MxOC4yLTMwIDM1LjctMjcuOGw3LjkgMWM0OCA2IDg0LjEgNDYuOCA4NC4xIDk1LjN2ODUuM2MzNC40LTUxLjcgOTMuMi04NS44IDE2MC04NS44em0xNjAgMjYuNXYwYy0xMCAzLjUtMjAuOCA1LjUtMzIgNS41Yy0yOC40IDAtNTQtMTIuNC03MS42LTMyaDBjLTMuNy00LjEtNy04LjUtOS45LTEzLjJDMzU3LjMgMTY0IDM1MiAxNDYuNiAzNTIgMTI4djBWMzIgMTIgMTAuN0MzNTIgNC44IDM1Ni43IC4xIDM2Mi42IDBoLjJjMy4zIDAgNi40IDEuNiA4LjQgNC4ybDAgLjFMMzg0IDIxLjNsMjcuMiAzNi4zTDQxNiA2NGg2NGw0LjgtNi40TDUxMiAyMS4zIDUyNC44IDQuM2wwLS4xYzItMi42IDUuMS00LjIgOC40LTQuMmguMkM1MzkuMyAuMSA1NDQgNC44IDU0NCAxMC43VjEyIDMydjk2YzAgMTcuMy00LjYgMzMuNi0xMi42IDQ3LjZjLTExLjMgMTkuOC0yOS42IDM1LjItNTEuNCA0Mi45ek00MzIgMTI4YTE2IDE2IDAgMSAwIC0zMiAwIDE2IDE2IDAgMSAwIDMyIDB6bTQ4IDE2YTE2IDE2IDAgMSAwIDAtMzIgMTYgMTYgMCAxIDAgMCAzMnpcIi8+PC9zdmc+JyxcbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk00OTUuOSAxNjYuNmMzLjIgOC43IC41IDE4LjQtNi40IDI0LjZsLTQzLjMgMzkuNGMxLjEgOC4zIDEuNyAxNi44IDEuNyAyNS40cy0uNiAxNy4xLTEuNyAyNS40bDQzLjMgMzkuNGM2LjkgNi4yIDkuNiAxNS45IDYuNCAyNC42Yy00LjQgMTEuOS05LjcgMjMuMy0xNS44IDM0LjNsLTQuNyA4LjFjLTYuNiAxMS0xNCAyMS40LTIyLjEgMzEuMmMtNS45IDcuMi0xNS43IDkuNi0yNC41IDYuOGwtNTUuNy0xNy43Yy0xMy40IDEwLjMtMjguMiAxOC45LTQ0IDI1LjRsLTEyLjUgNTcuMWMtMiA5LjEtOSAxNi4zLTE4LjIgMTcuOGMtMTMuOCAyLjMtMjggMy41LTQyLjUgMy41cy0yOC43LTEuMi00Mi41LTMuNWMtOS4yLTEuNS0xNi4yLTguNy0xOC4yLTE3LjhsLTEyLjUtNTcuMWMtMTUuOC02LjUtMzAuNi0xNS4xLTQ0LTI1LjRMODMuMSA0MjUuOWMtOC44IDIuOC0xOC42IC4zLTI0LjUtNi44Yy04LjEtOS44LTE1LjUtMjAuMi0yMi4xLTMxLjJsLTQuNy04LjFjLTYuMS0xMS0xMS40LTIyLjQtMTUuOC0zNC4zYy0zLjItOC43LS41LTE4LjQgNi40LTI0LjZsNDMuMy0zOS40QzY0LjYgMjczLjEgNjQgMjY0LjYgNjQgMjU2cy42LTE3LjEgMS43LTI1LjRMMjIuNCAxOTEuMmMtNi45LTYuMi05LjYtMTUuOS02LjQtMjQuNmM0LjQtMTEuOSA5LjctMjMuMyAxNS44LTM0LjNsNC43LTguMWM2LjYtMTEgMTQtMjEuNCAyMi4xLTMxLjJjNS45LTcuMiAxNS43LTkuNiAyNC41LTYuOGw1NS43IDE3LjdjMTMuNC0xMC4zIDI4LjItMTguOSA0NC0yNS40bDEyLjUtNTcuMWMyLTkuMSA5LTE2LjMgMTguMi0xNy44QzIyNy4zIDEuMiAyNDEuNSAwIDI1NiAwczI4LjcgMS4yIDQyLjUgMy41YzkuMiAxLjUgMTYuMiA4LjcgMTguMiAxNy44bDEyLjUgNTcuMWMxNS44IDYuNSAzMC42IDE1LjEgNDQgMjUuNGw1NS43LTE3LjdjOC44LTIuOCAxOC42LS4zIDI0LjUgNi44YzguMSA5LjggMTUuNSAyMC4yIDIyLjEgMzEuMmw0LjcgOC4xYzYuMSAxMSAxMS40IDIyLjQgMTUuOCAzNC4zek0yNTYgMzM2YTgwIDgwIDAgMSAwIDAtMTYwIDgwIDgwIDAgMSAwIDAgMTYwelwiLz48L3N2Zz4nLFxuICBdO1xuXG4gIC8vc2V0IHRoZSBuYXYgbGluayB0ZXh0XG4gIGNvbnN0IG5hdkxpbmtUZXh0ID0gW1wiTG9nb1wiLCBcIkxpbmsgMVwiLCBcIkxpbmsgMlwiLCBcImxpbmsgM1wiLCBcIlNldHRpbmdzXCJdO1xuXG4gIC8vc2V0IHRoZSBuYXYgbGluayBocmVmc1xuICBjb25zdCBuYXZMaW5rSHJlZiA9IFtcbiAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIixcbiAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIixcbiAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIixcbiAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIixcbiAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIixcbiAgXTtcblxuICAvL2J1aWxkIHRoZSBuYXYgaXRlbXNcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IG5hdkl0ZW1OdW0pIHtcbiAgICBsZXQgbmF2SXRlbSA9IG51bGw7XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIG5hdkl0ZW0gPSBidWlsZEVsZW1lbnQoXCJsaVwiLCBcIm5hdi1cIiArIGksIFtcImxvZ29cIl0sIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZJdGVtID0gYnVpbGRFbGVtZW50KFwibGlcIiwgXCJuYXYtXCIgKyBpLCBbXCJuYXYtaXRlbVwiXSwgXCJcIik7XG4gICAgfVxuICAgIGxldCBuYXZMaW5rID0gYnVpbGRFbGVtZW50KFwiYVwiLCBcIm5hdi1saW5rLVwiICsgaSwgW1wibmF2LWxpbmtcIl0sIG5hdkljb25zW2ldKTtcbiAgICBuYXZMaW5rLmhyZWYgPSBuYXZMaW5rSHJlZltpXTtcbiAgICBsZXQgbmF2TGlua1NwYW4gPSBidWlsZEVsZW1lbnQoXCJzcGFuXCIsIFwiXCIsIFtcImxpbmstdGV4dFwiXSwgbmF2TGlua1RleHRbaV0pO1xuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG4gICAgbmF2SXRlbS5hcHBlbmRDaGlsZChuYXZMaW5rKTtcbiAgICBuYXZMaW5rLmFwcGVuZENoaWxkKG5hdkxpbmtTcGFuKTtcbiAgICBpKys7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQobmF2QmFyKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRNYWluKCkge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChidWlsZEVsZW1lbnQoXCJtYWluXCIsIFwiXCIsIFwiXCIsIFwiXCIpKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKFxuICAgIGJ1aWxkRWxlbWVudChcImgxXCIsIFwiXCIsIFwiXCIsIFwiVGhpcyBpcyBhIHR5cGljYWwgdGl0bGUgb24gdGhlIHBhZ2VcIilcbiAgKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChcbiAgICBidWlsZEVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIFwiXCIsXG4gICAgICBcIlwiLFxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gcHVsdmluYXIgZG9sb3IgYXQgbG9yZW0gY29uZ3VlLCB1dCBtYWxlc3VhZGEgbG9yZW0gcG9ydHRpdG9yLiBTdXNwZW5kaXNzZSBhdCBtYXNzYSBjb21tb2RvLCBzY2VsZXJpc3F1ZSBpcHN1bSBzZWQsIHJ1dHJ1bSB0ZWxsdXMuIFBoYXNlbGx1cyBmYWNpbGlzaXMgc2VkIG5pc2kgYSBwdWx2aW5hci4gUGVsbGVudGVzcXVlIHZlc3RpYnVsdW0gZmV1Z2lhdCB0ZWxsdXMsIHV0IHVsdHJpY2VzIG1ldHVzIGhlbmRyZXJpdCBpZC4gRnVzY2UgZWdlc3RhcyBtaSBlc3QsIGF0IHVsdHJpY2VzIG9yY2kgY29tbW9kbyBxdWlzLiBJbnRlZ2VyIGluIHBoYXJldHJhIG5pYmgsIHRlbXBvciBsb2JvcnRpcyB0ZWxsdXMuIFByYWVzZW50IGVyb3MgbmVxdWUsIGFsaXF1YW0gZWdldCBmaW5pYnVzIGF0LCB1bHRyaWNlcyBpZCBzYXBpZW4uIE1hdXJpcyB2aXRhZSBsYWN1cyBuaXNpLkRvbmVjIGlhY3VsaXMsIGRvbG9yIGluIHBoYXJldHJhIGhlbmRyZXJpdCwgbnVuYyBlcm9zIHZpdmVycmEgbmlzaSwgc2VkIHNjZWxlcmlzcXVlIGVsaXQgdmVsaXQgdXQgZG9sb3IuIENyYXMgZnJpbmdpbGxhIG9kaW8gbGFjdXMsIHBsYWNlcmF0IGVsZW1lbnR1bSBmZWxpcyBwb3J0dGl0b3Igbm9uLiBQcm9pbiBkaWFtIGVzdCwgcnV0cnVtIHNpdCBhbWV0IGNvbnNlY3RldHVyIGlkLCB2aXZlcnJhIHV0IGlwc3VtLiBFdGlhbSBuZWMgdGluY2lkdW50IGV4LiBEdWlzIGN1cnN1cyB2aXZlcnJhIGRpZ25pc3NpbS4gUXVpc3F1ZSBudW5jIGxhY3VzLCBjdXJzdXMgdml0YWUgdmVsaXQgdml0YWUsIHRlbXB1cyBhdWN0b3IgbG9yZW0uIFBoYXNlbGx1cyBlZ2VzdGFzIG1ldHVzIG1hbGVzdWFkYSBtYXVyaXMgdWx0cmljZXMgdmVuZW5hdGlzLiBFdGlhbSBhIHBsYWNlcmF0IGxvcmVtLkFsaXF1YW0gc2VtcGVyIG9yY2kgZXQganVzdG8gcGVsbGVudGVzcXVlLCBhIGFsaXF1ZXQgbnVsbGEgZGFwaWJ1cy4gTnVsbGFtIGEgdHJpc3RpcXVlIHR1cnBpcywgYWMgc2NlbGVyaXNxdWUgbWV0dXMuIFNlZCBtYWxlc3VhZGEgdGVtcHVzIGVuaW0gdm9sdXRwYXQgcHVsdmluYXIuIEludGVnZXIgbmlzaSBsaWd1bGEsIHZ1bHB1dGF0ZSBhIGRpZ25pc3NpbSBpbiwgZGFwaWJ1cyBjb25ndWUgcHVydXMuIEN1cmFiaXR1ciBtb2xsaXMgbWF1cmlzIGF0IGxpZ3VsYSBhY2N1bXNhbiwgdXQgbHVjdHVzIGVuaW0gY29tbW9kby4gUHJvaW4gYmliZW5kdW0gYW50ZSBsYWN1cywgZXUgZGFwaWJ1cyBlbmltIHNlbXBlciBpZC4gU2VkIHZvbHV0cGF0IGF1Y3RvciBhdWd1ZSwgc2VkIHZlaGljdWxhIG5lcXVlIGdyYXZpZGEgYXQuICBTZWQgY29udmFsbGlzIGRpY3R1bSBtYWduYSwgdXQgcGxhY2VyYXQgdG9ydG9yIHByZXRpdW0gYXQuIE51bmMgbGFjaW5pYSBzaXQgYW1ldCBuaXNpIHZpdGFlIHNlbXBlci4gTWFlY2VuYXMgdml0YWUgZW5pbSBldSBhdWd1ZSByaG9uY3VzIGVmZmljaXR1ci4gQ3VyYWJpdHVyIGV0IHB1cnVzIHRyaXN0aXF1ZSwgZGlnbmlzc2ltIGVyYXQgdml0YWUsIG1vbGxpcyBlcm9zLiBWaXZhbXVzIHRpbmNpZHVudCB2aXZlcnJhIHRvcnRvciB2ZWwgc29kYWxlcy4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBEb25lYyBlbGVpZmVuZCBpcHN1bSBxdWFtLCBhYyBwb3J0dGl0b3IgbWFnbmEgdGVtcHVzIGV1LiBOYW0gZXggbWFnbmEsIHZlbmVuYXRpcyBldSBsYWN1cyBpbiwgc29kYWxlcyBzZW1wZXIgZmVsaXMuIERvbmVjIHV0IHJ1dHJ1bSBsZWN0dXMuIEV0aWFtIHBvc3VlcmUgc2FnaXR0aXMgbmlzbCBub24gY29udmFsbGlzLiBWZXN0aWJ1bHVtIGZhdWNpYnVzIGxpZ3VsYSByaXN1cywgaWQgdGVtcG9yIG5pc2wgdWx0cmljaWVzIHV0LiBJbiB2b2x1dHBhdCwgc2FwaWVuIGF0IHVsdHJpY2llcyBzb2RhbGVzLCBhcmN1IHR1cnBpcyByaG9uY3VzIGxvcmVtLCBhYyBoZW5kcmVyaXQgcXVhbSBlbGl0IGFjIGRvbG9yLiBJbnRlZ2VyIGV0IGxpZ3VsYSBhIGR1aSBncmF2aWRhIG9ybmFyZS4gRHVpcyBzaXQgYW1ldCBvcm5hcmUgcmlzdXMuIFByb2luIG5vbiBzY2VsZXJpc3F1ZSBqdXN0by4gTWF1cmlzIG5vbiB0ZWxsdXMgZWxpdC5WZXN0aWJ1bHVtIHRlbXB1cyBxdWlzIG1ldHVzIGlkIGNvbmd1ZS4gU2VkIGluIG9yY2kgc2VkIGxpZ3VsYSBwZWxsZW50ZXNxdWUgdWx0cmljaWVzLiBWaXZhbXVzIGV1IGN1cnN1cyBlcm9zLiBQcm9pbiBlZ2VzdGFzLCBqdXN0byB2aXRhZSBkaWduaXNzaW0gY29uZGltZW50dW0sIGlwc3VtIGZlbGlzIGJpYmVuZHVtIGR1aSwgdmVsIGFsaXF1ZXQgcmlzdXMgdHVycGlzIHNlZCBkdWkuIE1hZWNlbmFzIHNhZ2l0dGlzIG51bGxhIG1ldHVzLCB0aW5jaWR1bnQgbGFvcmVldCBlcmF0IGNvbnNlcXVhdCBub24uIFBoYXNlbGx1cyB2ZWwgZXN0IHV0IG1hc3NhIG9ybmFyZSBwb3N1ZXJlIHV0IHNlZCBlcmF0LiBNYXVyaXMgZXUgcmhvbmN1cyBtYXNzYS4gTmFtIHNlZCBsYWN1cyBmZXVnaWF0LCBjdXJzdXMgZWxpdCBmZXJtZW50dW0sIHBsYWNlcmF0IHNlbS4gTWFlY2VuYXMgYWMgdWxsYW1jb3JwZXIgZGlhbSwgbm9uIHNvbGxpY2l0dWRpbiBhcmN1LiBEb25lYyBzZW0gZXJhdCwgcG9ydGEgbmVjIGR1aSBpZCwgbWF4aW11cyB2ZWhpY3VsYSB1cm5hLiBRdWlzcXVlIGV1IGRhcGlidXMgZXN0LCBzaXQgYW1ldCBtYXhpbXVzIHRlbGx1cy4gRG9uZWMgcmhvbmN1cyB1cm5hIG1hdHRpcyBlZmZpY2l0dXIgc3VzY2lwaXQuIEN1cmFiaXR1ciBhY2N1bXNhbiBudWxsYSB2aXRhZSBsb3JlbSBkaWduaXNzaW0gaW1wZXJkaWV0LiBcIlxuICAgIClcbiAgKTtcbn1cblxuYnVpbGROYXYoKTtcbmJ1aWxkTWFpbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9