/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --light: hsl(0, 0%, 92%);\n    --dark: hsl(0, 0%, 12%);\n    --light-red: hsl(0, 100%, 90%);\n}\n\n*, *:before, *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nbody {\n    min-height: 100vh;\n}\n\nbody,\nbutton,\ninput {\n    font-family:Verdana, Geneva, \"DejaVu Sans\", sans-serif;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    color: var(--dark);\n    background-color: var(--light);\n}\n\n.header {\n    font-size: clamp(2.2rem, 10vw, 5.2rem);\n    text-align: center;\n    text-transform: uppercase;\n    margin: 1rem;\n    word-wrap: break-word;\n}\n\n.name-form {\n    display: block;\n    padding: 0 1rem 0 1rem;\n}\n\n.name-fieldset {\n    max-width: 320px;\n    margin: auto;\n    border: 1px solid var(--dark);\n    border-radius: 5px;\n}\n\n.name-fieldset > * {\n    display: block;\n}\n\n.name-legend {\n    margin: 0 0 0 20px;\n}\n\n.name-input {\n    border: none;\n    border-radius: 3px;\n    outline: none;\n    width: calc(100% - 1rem);\n    height: 100%;\n    margin: .5rem;\n    padding: .5rem;\n}\n\n.name-input:focus {\n    outline: 1px solid gray;\n}\n\n.name-error {\n    display: none;\n    padding: .5rem;\n    border-radius: 3px;\n    color: var(--dark);\n    background-color: var(--light-red);\n}\n\n.name-error,\n.play-button {\n    margin: 0 .5rem .5rem .5rem;\n}\n\n.play-button {\n    float: right;\n    padding: .25rem .5rem;\n    text-transform: capitalize;\n}\n\n.sea {\n    display: none;\n}\n\n.name-form.hidden {\n    display: none;\n}\n\n.name-error.visible,\n.sea.visible {\n    display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;IAC9B,2BAA2B;IAC3B,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;;IAGI,sDAAsD;AAC1D;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,wBAAwB;IACxB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,cAAc;AAClB","sourcesContent":[":root {\n    --light: hsl(0, 0%, 92%);\n    --dark: hsl(0, 0%, 12%);\n    --light-red: hsl(0, 100%, 90%);\n}\n\n*, *:before, *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nbody {\n    min-height: 100vh;\n}\n\nbody,\nbutton,\ninput {\n    font-family:Verdana, Geneva, \"DejaVu Sans\", sans-serif;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    color: var(--dark);\n    background-color: var(--light);\n}\n\n.header {\n    font-size: clamp(2.2rem, 10vw, 5.2rem);\n    text-align: center;\n    text-transform: uppercase;\n    margin: 1rem;\n    word-wrap: break-word;\n}\n\n.name-form {\n    display: block;\n    padding: 0 1rem 0 1rem;\n}\n\n.name-fieldset {\n    max-width: 320px;\n    margin: auto;\n    border: 1px solid var(--dark);\n    border-radius: 5px;\n}\n\n.name-fieldset > * {\n    display: block;\n}\n\n.name-legend {\n    margin: 0 0 0 20px;\n}\n\n.name-input {\n    border: none;\n    border-radius: 3px;\n    outline: none;\n    width: calc(100% - 1rem);\n    height: 100%;\n    margin: .5rem;\n    padding: .5rem;\n}\n\n.name-input:focus {\n    outline: 1px solid gray;\n}\n\n.name-error {\n    display: none;\n    padding: .5rem;\n    border-radius: 3px;\n    color: var(--dark);\n    background-color: var(--light-red);\n}\n\n.name-error,\n.play-button {\n    margin: 0 .5rem .5rem .5rem;\n}\n\n.play-button {\n    float: right;\n    padding: .25rem .5rem;\n    text-transform: capitalize;\n}\n\n.sea {\n    display: none;\n}\n\n.name-form.hidden {\n    display: none;\n}\n\n.name-error.visible,\n.sea.visible {\n    display: block;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/js/appendTo.js":
/*!****************************!*\
  !*** ./src/js/appendTo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendTo)
/* harmony export */ });
function appendTo(parent, element) {
    if (parent && element) {
        if (((typeof parent) === 'object') && Array.isArray(element)) {
            element.forEach((child) => {
                parent.appendChild(child);
            });
        } else if (((typeof parent) === 'string') && Array.isArray(element)) {
            element.forEach((child) => {
                document.querySelector(parent).appendChild(child);
            });
        } else if ((typeof parent) === 'object') {
            parent.appendChild(element);
        } else if ((typeof parent) === 'string') {
            document.querySelector(parent).appendChild(element);
        }
    }
}


/***/ }),

/***/ "./src/js/events.js":
/*!**************************!*\
  !*** ./src/js/events.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ events)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/js/game.js");


const validator = (event) => {
    event.preventDefault();
    const input = document.querySelector('#nameInput').value.trim();
    const error = document.querySelector('#nameError');

    if ((input || input === 0) && input.length <= 20) {
        error.className = 'name-error';
        document.querySelector('#nameForm').classList.add('hidden');
        document.querySelector('#sea').classList.add('visible');
        console.log(input);
        // how can we export the form data
    } else {
        error.className = 'name-error visible';
        if (input.length > 20) {
            error.textContent = 'Admiral, shorten your name!';
        } else {
            error.textContent = 'Admiral, enter your name!';
        }
    }
};

function events() {
    document.querySelector('#nameForm').addEventListener('submit', validator);
}


/***/ }),

/***/ "./src/js/factories/elementFactory.js":
/*!********************************************!*\
  !*** ./src/js/factories/elementFactory.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ elementFactory)
/* harmony export */ });
function elementFactory(type, clssName, object) {
    const element = document.createElement(type);

    if (clssName) {
        element.className = clssName;
    }

    if (object) {
        if ((typeof object) === 'object') {
            if (Array.isArray(object)) {
                object.forEach((value) => {
                    if (Object.keys(value)[0] === 'innerHTML') {
                        element.innerHTML = `${Object.values(value)[0]}`;
                    } else {
                        element.setAttribute(Object.keys(value)[0], Object.values(value)[0]);
                    }
                });
            } else {
                if (Object.keys(object)[0] === 'innerHTML') {
                    element.innerHTML = `${Object.values(object)}`;
                    return element;
                }
                element.setAttribute(Object.keys(object), Object.values(object));
            }
        }
    }
    return element;
}


/***/ }),

/***/ "./src/js/factories/gameboardFactory.js":
/*!**********************************************!*\
  !*** ./src/js/factories/gameboardFactory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameboardFactory)
/* harmony export */ });
/* harmony import */ var _gameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameData */ "./src/js/gameData.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ "./src/js/factories/shipFactory.js");



function gameboardFactory(admiral) {
    const fleet = [];
    const missedAttacks = [];

    _gameData__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((ship, index) => {
        fleet.push((0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(_gameData__WEBPACK_IMPORTED_MODULE_0__["default"][index].name, _gameData__WEBPACK_IMPORTED_MODULE_0__["default"][index].loa));
    });

    // pvt === private
    const pvt = {
        generateCoords(axis, index, y, x) {
            let array = [];
            if (axis === 'horizontal') {
                for (let i = 0; i < (fleet[index].size); i += 1) {
                    if ((x + i) > 10) {
                        array = false;
                        break;
                    }
                    array.push(`${y}${x + i}`);
                }
            } else {
                for (let i = 0; i < (fleet[index].size); i += 1) {
                    if ((_gameData__WEBPACK_IMPORTED_MODULE_0__.yAxis[_gameData__WEBPACK_IMPORTED_MODULE_0__.yAxis.indexOf(y) + i]) === undefined) {
                        array = false;
                        break;
                    }
                    array.push(`${_gameData__WEBPACK_IMPORTED_MODULE_0__.yAxis[_gameData__WEBPACK_IMPORTED_MODULE_0__.yAxis.indexOf(y) + i]}${x}`);
                }
            }
            return array;
        },
    };

    const getAllCoords = () => {
        const array = [];
        fleet.forEach((ship) => {
            if (ship.getCoords()) {
                array.push({
                    name: ship.name,
                    coords: ship.getCoords(),
                });
            }
        });
        return array;
    };

    const setShipCoords = (name, y, x) => {
        let result = false;
        fleet.forEach((ship, index) => {
            if (ship.name === name) {
                const allCoords = getAllCoords();
                const coordsArray = pvt.generateCoords(ship.getAxis(),
                    index, y.toUpperCase(), x);

                if (coordsArray) {
                    let duplicate = 0;
                    coordsArray.forEach((newCoords) => {
                        allCoords.forEach((placedCoords) => {
                            if (placedCoords.coords.includes(newCoords)) duplicate += 1;
                        });
                    });

                    if (duplicate === 0) {
                        if (ship.setCoords(coordsArray)) {
                            result = coordsArray;
                        }
                    }
                }
            }
        });
        return result;
    };

    const receiveAttack = (string) => {
        let result = false;
        fleet.forEach((ship) => {
            if (ship.getCoords()) {
                const coords = ship.getCoords();
                if (coords.includes(string)) {
                    ship.hit(string);
                    result = string;
                }
            }
        });

        if (result === false) {
            missedAttacks.push(string);
        }

        return result;
    };

    const getMissedAttacks = () => missedAttacks;

    const isReady = () => {
        const coords = getAllCoords();
        if (coords.length === fleet.length) return true;
        return false;
    };

    const isDefeated = () => {
        let counter = 0;
        fleet.forEach((ship) => {
            if (ship.isSunk()) counter += 1;
        });

        if (counter === fleet.length) return true;
        return false;
    };

    return {
        admiral,
        setShipCoords,
        getAllCoords,
        receiveAttack,
        getMissedAttacks,
        isReady,
        isDefeated,
    };
}


/***/ }),

/***/ "./src/js/factories/playerFactory.js":
/*!*******************************************!*\
  !*** ./src/js/factories/playerFactory.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ playerFactory)
/* harmony export */ });
function playerFactory(name) {
    return {
        name,
    };
}


/***/ }),

/***/ "./src/js/factories/shipFactory.js":
/*!*****************************************!*\
  !*** ./src/js/factories/shipFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipFactory)
/* harmony export */ });
function shipFactory(name, size) {
    let axis = 'horizontal';
    let coords;
    const ruin = [];

    if (size <= 3) axis = 'vertical';

    return {
        name,
        size,
        maneuver: () => {
            axis = (axis === 'horizontal') ? 'vertical' : 'horizontal';
        },
        getAxis: () => axis,
        setCoords: (array) => {
            if (array.length === size) {
                coords = array;
                return true;
            }
            return false;
        },
        getCoords: () => coords,
        hit: (string) => {
            ruin.push(string);
        },
        hitsRecieved: () => ruin,
        isSunk: () => (ruin.length === size),
    };
}


/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/playerFactory */ "./src/js/factories/playerFactory.js");
/* harmony import */ var _factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/gameboardFactory */ "./src/js/factories/gameboardFactory.js");



function game() {
    //
}


/***/ }),

/***/ "./src/js/gameData.js":
/*!****************************!*\
  !*** ./src/js/gameData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "yAxis": () => (/* binding */ yAxis)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze([
    { name: 'carrier', loa: 5 },
    { name: 'battleship', loa: 4 },
    { name: 'destroyer', loa: 3 },
    { name: 'submarine', loa: 3 },
    { name: 'patrol boat', loa: 2 },
]));

const yAxis = Object.freeze([
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
]);


/***/ }),

/***/ "./src/js/static.js":
/*!**************************!*\
  !*** ./src/js/static.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var _factories_elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/elementFactory */ "./src/js/factories/elementFactory.js");
/* harmony import */ var _appendTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendTo */ "./src/js/appendTo.js");



function setup() {
    // set language
    document.querySelector('html').setAttribute('lang', 'en');
    // create app main container
    (0,_appendTo__WEBPACK_IMPORTED_MODULE_1__["default"])('body', (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'app', { id: 'app' }));
    // create header, form and div
    (0,_appendTo__WEBPACK_IMPORTED_MODULE_1__["default"])('#app', [
        (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', 'header', [
            { id: 'header' },
            { innerHTML: 'battle&shy;ship' }]),
        (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('form', 'name-form', [
            { id: 'nameForm' },
            { novalidate: '' }]),
        (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'sea', { id: 'sea' }),
    ]);
    // create fieldset
    (0,_appendTo__WEBPACK_IMPORTED_MODULE_1__["default"])('#nameForm', (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('fieldset', 'name-fieldset',
        { id: 'nameFieldset' }));
    // create input for name
    (0,_appendTo__WEBPACK_IMPORTED_MODULE_1__["default"])('#nameFieldset', [
        (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('legend', 'name-legend', { innerHTML: 'Name:' }),
        (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('input', 'name-input', [
            { id: 'nameInput' },
        ]),
    ]);
    // create small tag for input error
    (0,_appendTo__WEBPACK_IMPORTED_MODULE_1__["default"])('#nameFieldset', (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('small', 'name-error', { id: 'nameError' }));
    // create play button
    (0,_appendTo__WEBPACK_IMPORTED_MODULE_1__["default"])('#nameFieldset', (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'play-button', [
        { id: 'playButton' },
        { innerHTML: 'play' },
    ]));
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static */ "./src/js/static.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/js/events.js");




(0,_static__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_events__WEBPACK_IMPORTED_MODULE_2__["default"])();

// When all of the squares of a ship have been hit, the ship's owner announces the sinking of
// the Carrier, Submarine, Cruiser/Destroyer/Patrol Boat, or the titular Battleship. If all of
// a player's ships have been sunk, the game is over and their opponent wins. If all ships of
// both players are sunk by the end of the round, the game is a draw.

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnlCO0FBQ0k7QUFDQzs7QUFFOUIsbURBQUs7QUFDTCxtREFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9hcHBlbmRUby5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2ZhY3Rvcmllcy9lbGVtZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2ZhY3Rvcmllcy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZmFjdG9yaWVzL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9mYWN0b3JpZXMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZURhdGEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zdGF0aWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1saWdodDogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWRhcms6IGhzbCgwLCAwJSwgMTIlKTtcXG4gICAgLS1saWdodC1yZWQ6IGhzbCgwLCAxMDAlLCA5MCUpO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7ICBcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5LFxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgXFxcIkRlamFWdSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMi4ycmVtLCAxMHZ3LCA1LjJyZW0pO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ubmFtZS1mb3JtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07XFxufVxcblxcbi5uYW1lLWZpZWxkc2V0IHtcXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubmFtZS1maWVsZHNldCA+ICoge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm5hbWUtbGVnZW5kIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xcbn1cXG5cXG4ubmFtZS1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5uYW1lLWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5uYW1lLWVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1yZWQpO1xcbn1cXG5cXG4ubmFtZS1lcnJvcixcXG4ucGxheS1idXR0b24ge1xcbiAgICBtYXJnaW46IDAgLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5wbGF5LWJ1dHRvbiB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnNlYSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYW1lLWZvcm0uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hbWUtZXJyb3IudmlzaWJsZSxcXG4uc2VhLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0ksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1saWdodDogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWRhcms6IGhzbCgwLCAwJSwgMTIlKTtcXG4gICAgLS1saWdodC1yZWQ6IGhzbCgwLCAxMDAlLCA5MCUpO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7ICBcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5LFxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgXFxcIkRlamFWdSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMi4ycmVtLCAxMHZ3LCA1LjJyZW0pO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ubmFtZS1mb3JtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07XFxufVxcblxcbi5uYW1lLWZpZWxkc2V0IHtcXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubmFtZS1maWVsZHNldCA+ICoge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm5hbWUtbGVnZW5kIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xcbn1cXG5cXG4ubmFtZS1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5uYW1lLWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5uYW1lLWVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1yZWQpO1xcbn1cXG5cXG4ubmFtZS1lcnJvcixcXG4ucGxheS1idXR0b24ge1xcbiAgICBtYXJnaW46IDAgLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5wbGF5LWJ1dHRvbiB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnNlYSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYW1lLWZvcm0uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hbWUtZXJyb3IudmlzaWJsZSxcXG4uc2VhLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRUbyhwYXJlbnQsIGVsZW1lbnQpIHtcbiAgICBpZiAocGFyZW50ICYmIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCgodHlwZW9mIHBhcmVudCkgPT09ICdvYmplY3QnKSAmJiBBcnJheS5pc0FycmF5KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCgodHlwZW9mIHBhcmVudCkgPT09ICdzdHJpbmcnKSAmJiBBcnJheS5pc0FycmF5KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCh0eXBlb2YgcGFyZW50KSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICgodHlwZW9mIHBhcmVudCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jb25zdCB2YWxpZGF0b3IgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWVJbnB1dCcpLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lRXJyb3InKTtcblxuICAgIGlmICgoaW5wdXQgfHwgaW5wdXQgPT09IDApICYmIGlucHV0Lmxlbmd0aCA8PSAyMCkge1xuICAgICAgICBlcnJvci5jbGFzc05hbWUgPSAnbmFtZS1lcnJvcic7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lRm9ybScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhJykuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgICAgIC8vIGhvdyBjYW4gd2UgZXhwb3J0IHRoZSBmb3JtIGRhdGFcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvci5jbGFzc05hbWUgPSAnbmFtZS1lcnJvciB2aXNpYmxlJztcbiAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICBlcnJvci50ZXh0Q29udGVudCA9ICdBZG1pcmFsLCBzaG9ydGVuIHlvdXIgbmFtZSEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnQWRtaXJhbCwgZW50ZXIgeW91ciBuYW1lISc7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBldmVudHMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWVGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdmFsaWRhdG9yKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVsZW1lbnRGYWN0b3J5KHR5cGUsIGNsc3NOYW1lLCBvYmplY3QpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICAgIGlmIChjbHNzTmFtZSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsc3NOYW1lO1xuICAgIH1cblxuICAgIGlmIChvYmplY3QpIHtcbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0KSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3QuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlKVswXSA9PT0gJ2lubmVySFRNTCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYCR7T2JqZWN0LnZhbHVlcyh2YWx1ZSlbMF19YDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKE9iamVjdC5rZXlzKHZhbHVlKVswXSwgT2JqZWN0LnZhbHVlcyh2YWx1ZSlbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhvYmplY3QpWzBdID09PSAnaW5uZXJIVE1MJykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGAke09iamVjdC52YWx1ZXMob2JqZWN0KX1gO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoT2JqZWN0LmtleXMob2JqZWN0KSwgT2JqZWN0LnZhbHVlcyhvYmplY3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCBsaXN0LCB7IHlBeGlzIH0gZnJvbSAnLi4vZ2FtZURhdGEnO1xuaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gJy4vc2hpcEZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lYm9hcmRGYWN0b3J5KGFkbWlyYWwpIHtcbiAgICBjb25zdCBmbGVldCA9IFtdO1xuICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcblxuICAgIGxpc3QuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgZmxlZXQucHVzaChzaGlwRmFjdG9yeShsaXN0W2luZGV4XS5uYW1lLCBsaXN0W2luZGV4XS5sb2EpKTtcbiAgICB9KTtcblxuICAgIC8vIHB2dCA9PT0gcHJpdmF0ZVxuICAgIGNvbnN0IHB2dCA9IHtcbiAgICAgICAgZ2VuZXJhdGVDb29yZHMoYXhpcywgaW5kZXgsIHksIHgpIHtcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICAgICAgaWYgKGF4aXMgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGZsZWV0W2luZGV4XS5zaXplKTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoeCArIGkpID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGAke3l9JHt4ICsgaX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGZsZWV0W2luZGV4XS5zaXplKTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoeUF4aXNbeUF4aXMuaW5kZXhPZih5KSArIGldKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChgJHt5QXhpc1t5QXhpcy5pbmRleE9mKHkpICsgaV19JHt4fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QWxsQ29vcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgICAgICBmbGVldC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5nZXRDb29yZHMoKSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBzaGlwLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkczogc2hpcC5nZXRDb29yZHMoKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0U2hpcENvb3JkcyA9IChuYW1lLCB5LCB4KSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgZmxlZXQuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxDb29yZHMgPSBnZXRBbGxDb29yZHMoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZHNBcnJheSA9IHB2dC5nZW5lcmF0ZUNvb3JkcyhzaGlwLmdldEF4aXMoKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgsIHkudG9VcHBlckNhc2UoKSwgeCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29vcmRzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGR1cGxpY2F0ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkc0FycmF5LmZvckVhY2goKG5ld0Nvb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQ29vcmRzLmZvckVhY2goKHBsYWNlZENvb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGFjZWRDb29yZHMuY29vcmRzLmluY2x1ZGVzKG5ld0Nvb3JkcykpIGR1cGxpY2F0ZSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkdXBsaWNhdGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwLnNldENvb3Jkcyhjb29yZHNBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjb29yZHNBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0Q29vcmRzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSBzaGlwLmdldENvb3JkcygpO1xuICAgICAgICAgICAgICAgIGlmIChjb29yZHMuaW5jbHVkZXMoc3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdChzdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzdHJpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKHN0cmluZyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRNaXNzZWRBdHRhY2tzID0gKCkgPT4gbWlzc2VkQXR0YWNrcztcblxuICAgIGNvbnN0IGlzUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGdldEFsbENvb3JkcygpO1xuICAgICAgICBpZiAoY29vcmRzLmxlbmd0aCA9PT0gZmxlZXQubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0RlZmVhdGVkID0gKCkgPT4ge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGZsZWV0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSBjb3VudGVyICs9IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjb3VudGVyID09PSBmbGVldC5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkbWlyYWwsXG4gICAgICAgIHNldFNoaXBDb29yZHMsXG4gICAgICAgIGdldEFsbENvb3JkcyxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgZ2V0TWlzc2VkQXR0YWNrcyxcbiAgICAgICAgaXNSZWFkeSxcbiAgICAgICAgaXNEZWZlYXRlZCxcbiAgICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxheWVyRmFjdG9yeShuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcEZhY3RvcnkobmFtZSwgc2l6ZSkge1xuICAgIGxldCBheGlzID0gJ2hvcml6b250YWwnO1xuICAgIGxldCBjb29yZHM7XG4gICAgY29uc3QgcnVpbiA9IFtdO1xuXG4gICAgaWYgKHNpemUgPD0gMykgYXhpcyA9ICd2ZXJ0aWNhbCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBzaXplLFxuICAgICAgICBtYW5ldXZlcjogKCkgPT4ge1xuICAgICAgICAgICAgYXhpcyA9IChheGlzID09PSAnaG9yaXpvbnRhbCcpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QXhpczogKCkgPT4gYXhpcyxcbiAgICAgICAgc2V0Q29vcmRzOiAoYXJyYXkpID0+IHtcbiAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IHNpemUpIHtcbiAgICAgICAgICAgICAgICBjb29yZHMgPSBhcnJheTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q29vcmRzOiAoKSA9PiBjb29yZHMsXG4gICAgICAgIGhpdDogKHN0cmluZykgPT4ge1xuICAgICAgICAgICAgcnVpbi5wdXNoKHN0cmluZyk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpdHNSZWNpZXZlZDogKCkgPT4gcnVpbixcbiAgICAgICAgaXNTdW5rOiAoKSA9PiAocnVpbi5sZW5ndGggPT09IHNpemUpLFxuICAgIH07XG59XG4iLCJpbXBvcnQgcGxheWVyRmFjdG9yeSBmcm9tICcuL2ZhY3Rvcmllcy9wbGF5ZXJGYWN0b3J5JztcbmltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gJy4vZmFjdG9yaWVzL2dhbWVib2FyZEZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lKCkge1xuICAgIC8vXG59XG4iLCJleHBvcnQgZGVmYXVsdCBPYmplY3QuZnJlZXplKFtcbiAgICB7IG5hbWU6ICdjYXJyaWVyJywgbG9hOiA1IH0sXG4gICAgeyBuYW1lOiAnYmF0dGxlc2hpcCcsIGxvYTogNCB9LFxuICAgIHsgbmFtZTogJ2Rlc3Ryb3llcicsIGxvYTogMyB9LFxuICAgIHsgbmFtZTogJ3N1Ym1hcmluZScsIGxvYTogMyB9LFxuICAgIHsgbmFtZTogJ3BhdHJvbCBib2F0JywgbG9hOiAyIH0sXG5dKTtcblxuZXhwb3J0IGNvbnN0IHlBeGlzID0gT2JqZWN0LmZyZWV6ZShbXG4gICAgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLFxuXSk7XG4iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi9mYWN0b3JpZXMvZWxlbWVudEZhY3RvcnknO1xuaW1wb3J0IGFwcGVuZFRvIGZyb20gJy4vYXBwZW5kVG8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAvLyBzZXQgbGFuZ3VhZ2VcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc2V0QXR0cmlidXRlKCdsYW5nJywgJ2VuJyk7XG4gICAgLy8gY3JlYXRlIGFwcCBtYWluIGNvbnRhaW5lclxuICAgIGFwcGVuZFRvKCdib2R5JywgZWxlbWVudEZhY3RvcnkoJ2RpdicsICdhcHAnLCB7IGlkOiAnYXBwJyB9KSk7XG4gICAgLy8gY3JlYXRlIGhlYWRlciwgZm9ybSBhbmQgZGl2XG4gICAgYXBwZW5kVG8oJyNhcHAnLCBbXG4gICAgICAgIGVsZW1lbnRGYWN0b3J5KCdoMScsICdoZWFkZXInLCBbXG4gICAgICAgICAgICB7IGlkOiAnaGVhZGVyJyB9LFxuICAgICAgICAgICAgeyBpbm5lckhUTUw6ICdiYXR0bGUmc2h5O3NoaXAnIH1dKSxcbiAgICAgICAgZWxlbWVudEZhY3RvcnkoJ2Zvcm0nLCAnbmFtZS1mb3JtJywgW1xuICAgICAgICAgICAgeyBpZDogJ25hbWVGb3JtJyB9LFxuICAgICAgICAgICAgeyBub3ZhbGlkYXRlOiAnJyB9XSksXG4gICAgICAgIGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnc2VhJywgeyBpZDogJ3NlYScgfSksXG4gICAgXSk7XG4gICAgLy8gY3JlYXRlIGZpZWxkc2V0XG4gICAgYXBwZW5kVG8oJyNuYW1lRm9ybScsIGVsZW1lbnRGYWN0b3J5KCdmaWVsZHNldCcsICduYW1lLWZpZWxkc2V0JyxcbiAgICAgICAgeyBpZDogJ25hbWVGaWVsZHNldCcgfSkpO1xuICAgIC8vIGNyZWF0ZSBpbnB1dCBmb3IgbmFtZVxuICAgIGFwcGVuZFRvKCcjbmFtZUZpZWxkc2V0JywgW1xuICAgICAgICBlbGVtZW50RmFjdG9yeSgnbGVnZW5kJywgJ25hbWUtbGVnZW5kJywgeyBpbm5lckhUTUw6ICdOYW1lOicgfSksXG4gICAgICAgIGVsZW1lbnRGYWN0b3J5KCdpbnB1dCcsICduYW1lLWlucHV0JywgW1xuICAgICAgICAgICAgeyBpZDogJ25hbWVJbnB1dCcgfSxcbiAgICAgICAgXSksXG4gICAgXSk7XG4gICAgLy8gY3JlYXRlIHNtYWxsIHRhZyBmb3IgaW5wdXQgZXJyb3JcbiAgICBhcHBlbmRUbygnI25hbWVGaWVsZHNldCcsIGVsZW1lbnRGYWN0b3J5KCdzbWFsbCcsICduYW1lLWVycm9yJywgeyBpZDogJ25hbWVFcnJvcicgfSkpO1xuICAgIC8vIGNyZWF0ZSBwbGF5IGJ1dHRvblxuICAgIGFwcGVuZFRvKCcjbmFtZUZpZWxkc2V0JywgZWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsICdwbGF5LWJ1dHRvbicsIFtcbiAgICAgICAgeyBpZDogJ3BsYXlCdXR0b24nIH0sXG4gICAgICAgIHsgaW5uZXJIVE1MOiAncGxheScgfSxcbiAgICBdKSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0IHNldHVwIGZyb20gJy4vc3RhdGljJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuXG5zZXR1cCgpO1xuZXZlbnRzKCk7XG5cbi8vIFdoZW4gYWxsIG9mIHRoZSBzcXVhcmVzIG9mIGEgc2hpcCBoYXZlIGJlZW4gaGl0LCB0aGUgc2hpcCdzIG93bmVyIGFubm91bmNlcyB0aGUgc2lua2luZyBvZlxuLy8gdGhlIENhcnJpZXIsIFN1Ym1hcmluZSwgQ3J1aXNlci9EZXN0cm95ZXIvUGF0cm9sIEJvYXQsIG9yIHRoZSB0aXR1bGFyIEJhdHRsZXNoaXAuIElmIGFsbCBvZlxuLy8gYSBwbGF5ZXIncyBzaGlwcyBoYXZlIGJlZW4gc3VuaywgdGhlIGdhbWUgaXMgb3ZlciBhbmQgdGhlaXIgb3Bwb25lbnQgd2lucy4gSWYgYWxsIHNoaXBzIG9mXG4vLyBib3RoIHBsYXllcnMgYXJlIHN1bmsgYnkgdGhlIGVuZCBvZiB0aGUgcm91bmQsIHRoZSBnYW1lIGlzIGEgZHJhdy5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==