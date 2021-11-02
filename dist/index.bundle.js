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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --anti-flash-white: hsl(195, 53%, 94%);\n    --chinese-silver: hsl(0, 0%, 80%);\n    --dark: hsl(0, 0%, 12%);\n    --dark-charcoal: hsl(0, 0%, 20%);\n    --light: hsl(0, 0%, 92%);\n    --light-red: hsl(0, 100%, 90%);\n}\n\n*, *:before, *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nbody {\n    min-height: 100vh;\n}\n\nbody,\nbutton,\ninput {\n    font-family:Verdana, Geneva, \"DejaVu Sans\", sans-serif;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    color: var(--dark);\n    background-color: var(--light);\n}\n\n.header {\n    font-size: clamp(2.2rem, 10vw, 5.2rem);\n    text-align: center;\n    text-transform: uppercase;\n    margin: 1rem;\n    word-wrap: break-word;\n}\n\n.name-form {\n    display: block;\n    padding: 0 1rem 0 1rem;\n}\n\n.name-fieldset {\n    max-width: 320px;\n    margin: auto;\n    border: 1px solid var(--dark);\n    border-radius: 5px;\n}\n\n.name-fieldset > * {\n    display: block;\n}\n\n.name-legend {\n    margin: 0 0 0 20px;\n}\n\n.name-input {\n    border: none;\n    border-radius: 3px;\n    outline: none;\n    width: calc(100% - 1rem);\n    height: 100%;\n    margin: .5rem;\n    padding: .5rem;\n}\n\n.name-input:focus {\n    outline: 1px solid gray;\n}\n\n.name-error {\n    display: none;\n    padding: .5rem;\n    border-radius: 3px;\n    color: var(--dark);\n    background-color: var(--light-red);\n}\n\n.name-error,\n.play-button {\n    margin: 0 .5rem .5rem .5rem;\n}\n\n.play-button {\n    float: right;\n    padding: .25rem .5rem;\n    text-transform: capitalize;\n}\n\n.sea {\n    display: none;\n    padding: .8rem;\n    flex: 1;\n    align-items: center;\n    justify-content: space-evenly;\n    overflow: auto;\n}\n\n.notifier {\n    display: none;\n    font-size: clamp(1rem, 10vw, 1.25rem);\n    text-align: center;\n    padding: .25rem;\n    color: var(--dark-charcoal);\n    background-color: var(--chinese-silver);\n}\n\n.player-board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    width: 500px;\n    height: 500px;\n    border: 5px solid var(--dark);\n    background-color: white;\n}\n\n.coord {\n    font-size: 9px;\n    padding: 2px 0 0 2px;\n    border: 1px solid var(--chinese-silver);\n    background-color: var(--anti-flash-white);\n}\n\n.harbor {\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n    min-width: 500px;\n    min-height: 500px;\n    background-color: white;\n}\n\n.dock {\n    padding: .25rem;\n    min-height: 120px;\n}\n\n.dock > *,\n.ship-form > * {\n    margin: .2rem;\n}\n\n.ship-name {\n    text-transform: capitalize;\n}\n\n.ship-body {\n    border: 1px solid var(--chinese-silver);\n    float: right;\n    display: flex;\n}\n\n.block {\n    width: 25px;\n    height: 25px;\n    border: 1px solid var(--chinese-silver);\n}\n\n.rotate-button,\n.deploy-button {\n    padding: .2rem;\n}\n\n.header.reduced {\n    font-size: clamp(2rem, 10vw, 3.5rem);\n    margin: .8rem;\n}\n\n.name-form.hidden {\n    display: none;\n}\n\n.name-error.visible,\n.notifier.visible {\n    display: block;\n}\n\n.sea.visible {\n    display: flex;\n}\n\n.ship-body.vertical {\n    flex-direction: column;\n}\n", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;IACI,sCAAsC;IACtC,iCAAiC;IACjC,uBAAuB;IACvB,gCAAgC;IAChC,wBAAwB;IACxB,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;IAC9B,2BAA2B;IAC3B,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;;IAGI,sDAAsD;AAC1D;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,wBAAwB;IACxB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,OAAO;IACP,mBAAmB;IACnB,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kBAAkB;IAClB,eAAe;IACf,2BAA2B;IAC3B,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,uCAAuC;IACvC,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,sBAAsB;IACtB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,uCAAuC;IACvC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uCAAuC;AAC3C;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":[":root {\n    --anti-flash-white: hsl(195, 53%, 94%);\n    --chinese-silver: hsl(0, 0%, 80%);\n    --dark: hsl(0, 0%, 12%);\n    --dark-charcoal: hsl(0, 0%, 20%);\n    --light: hsl(0, 0%, 92%);\n    --light-red: hsl(0, 100%, 90%);\n}\n\n*, *:before, *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nbody {\n    min-height: 100vh;\n}\n\nbody,\nbutton,\ninput {\n    font-family:Verdana, Geneva, \"DejaVu Sans\", sans-serif;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    color: var(--dark);\n    background-color: var(--light);\n}\n\n.header {\n    font-size: clamp(2.2rem, 10vw, 5.2rem);\n    text-align: center;\n    text-transform: uppercase;\n    margin: 1rem;\n    word-wrap: break-word;\n}\n\n.name-form {\n    display: block;\n    padding: 0 1rem 0 1rem;\n}\n\n.name-fieldset {\n    max-width: 320px;\n    margin: auto;\n    border: 1px solid var(--dark);\n    border-radius: 5px;\n}\n\n.name-fieldset > * {\n    display: block;\n}\n\n.name-legend {\n    margin: 0 0 0 20px;\n}\n\n.name-input {\n    border: none;\n    border-radius: 3px;\n    outline: none;\n    width: calc(100% - 1rem);\n    height: 100%;\n    margin: .5rem;\n    padding: .5rem;\n}\n\n.name-input:focus {\n    outline: 1px solid gray;\n}\n\n.name-error {\n    display: none;\n    padding: .5rem;\n    border-radius: 3px;\n    color: var(--dark);\n    background-color: var(--light-red);\n}\n\n.name-error,\n.play-button {\n    margin: 0 .5rem .5rem .5rem;\n}\n\n.play-button {\n    float: right;\n    padding: .25rem .5rem;\n    text-transform: capitalize;\n}\n\n.sea {\n    display: none;\n    padding: .8rem;\n    flex: 1;\n    align-items: center;\n    justify-content: space-evenly;\n    overflow: auto;\n}\n\n.notifier {\n    display: none;\n    font-size: clamp(1rem, 10vw, 1.25rem);\n    text-align: center;\n    padding: .25rem;\n    color: var(--dark-charcoal);\n    background-color: var(--chinese-silver);\n}\n\n.player-board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    width: 500px;\n    height: 500px;\n    border: 5px solid var(--dark);\n    background-color: white;\n}\n\n.coord {\n    font-size: 9px;\n    padding: 2px 0 0 2px;\n    border: 1px solid var(--chinese-silver);\n    background-color: var(--anti-flash-white);\n}\n\n.harbor {\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n    min-width: 500px;\n    min-height: 500px;\n    background-color: white;\n}\n\n.dock {\n    padding: .25rem;\n    min-height: 120px;\n}\n\n.dock > *,\n.ship-form > * {\n    margin: .2rem;\n}\n\n.ship-name {\n    text-transform: capitalize;\n}\n\n.ship-body {\n    border: 1px solid var(--chinese-silver);\n    float: right;\n    display: flex;\n}\n\n.block {\n    width: 25px;\n    height: 25px;\n    border: 1px solid var(--chinese-silver);\n}\n\n.rotate-button,\n.deploy-button {\n    padding: .2rem;\n}\n\n.header.reduced {\n    font-size: clamp(2rem, 10vw, 3.5rem);\n    margin: .8rem;\n}\n\n.name-form.hidden {\n    display: none;\n}\n\n.name-error.visible,\n.notifier.visible {\n    display: block;\n}\n\n.sea.visible {\n    display: flex;\n}\n\n.ship-body.vertical {\n    flex-direction: column;\n}\n"],"sourceRoot":""}]);
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


let battleship;

const validator = (event) => {
    event.preventDefault();
    const input = document.querySelector('#nameInput').value.trim();
    const error = document.querySelector('#nameError');

    if ((input || (input === 0)) && ((input.length <= 20) && (input.toUpperCase() !== 'AI'))) {
        error.className = 'name-error';
        document.querySelector('#header').classList.add('reduced');
        document.querySelector('#nameForm').classList.add('hidden');
        document.querySelector('#sea').classList.add('visible');

        battleship = (0,_game__WEBPACK_IMPORTED_MODULE_0__["default"])();
        battleship.setPlayerAndBoards(input);
        battleship.createUI();
    } else {
        error.className = 'name-error visible';
        if (input.length > 20) {
            error.textContent = 'Admiral, shorten your name!';
        } else if (input.toUpperCase() === 'AI') {
            error.textContent = "Admiral, you can't use that name!";
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

    const setShipCoords = (name, y, x, newAxis) => {
        let result = false;
        fleet.forEach((ship, index) => {
            if (ship.name === name) {
                const allCoords = getAllCoords();

                if (newAxis) {
                    if (ship.getAxis() !== newAxis) ship.maneuver();
                }

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
/* harmony import */ var _appendTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appendTo */ "./src/js/appendTo.js");
/* harmony import */ var _factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factories/elementFactory */ "./src/js/factories/elementFactory.js");
/* harmony import */ var _gameData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameData */ "./src/js/gameData.js");






function game() {
    let players;
    let boards;

    const pvt = {
        reset: () => {
            players = [];
            boards = [];
            document.querySelector('#sea').innerHTML = '';
        },
        toggleNotifier: () => {
            document.querySelector('#notifier').classList.toggle('visible');
        },
        notify: (string) => {
            document.querySelector('#notifier').innerHTML = string;
        },
    };

    const setPlayerAndBoards = (input) => {
        pvt.reset();
        players.push((0,_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(input));
        boards.push((0,_factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(input));
        players.push((0,_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('AI'));
        boards.push((0,_factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('AI'));
    };

    const getPlayers = () => players;
    const getBoards = () => boards;

    const createUI = () => {
        pvt.toggleNotifier();
        pvt.notify(`Admiral ${players[0].name} deploy your ships!`);

        (0,_appendTo__WEBPACK_IMPORTED_MODULE_2__["default"])('#sea', [
            (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('div', 'player-board', { id: 'playerBoard' }),
            (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('div', 'harbor', { id: 'playerHarbor' }),
        ]);

        let x = 1;
        let y = 0;
        for (let counter = 1; counter <= 100; counter += 1) {
            const coord = `${_gameData__WEBPACK_IMPORTED_MODULE_4__.yAxis[y]}${x}`;

            (0,_appendTo__WEBPACK_IMPORTED_MODULE_2__["default"])('#playerBoard', (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('div', 'coord', { innerHTML: coord }));

            x += 1;
            if (x > 10) {
                x = 1;
                y += 1;
            }
        }

        _gameData__WEBPACK_IMPORTED_MODULE_4__["default"].forEach((ship, index) => {
            const dockNum = index + 1;
            const dock = `dock${dockNum}`;
            const shipBody = `shipBody${dockNum}`;
            const formName = `shipForm${dockNum}`;
            const button = `button${dockNum}`;
            const selectY = `selectY${dockNum}`;
            const selectX = `selectX${dockNum}`;
            const submit = `submit${dockNum}`;
            let shipAxis;

            (0,_appendTo__WEBPACK_IMPORTED_MODULE_2__["default"])('#playerHarbor',
                (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('div', 'dock', { id: dock }));
            (0,_appendTo__WEBPACK_IMPORTED_MODULE_2__["default"])(`#dock${dockNum}`, [
                (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('p', 'ship-name', { innerHTML: `${ship.name} (${ship.loa})` }),
                (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('div', 'ship-body', { id: shipBody }),
                (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('form', 'ship-form', { id: formName }),
            ]);

            const shipElement = document.querySelector(`#${shipBody}`);
            if (ship.loa <= 3) {
                shipElement.classList.add('vertical');
                shipAxis = 'vertical';
            } else {
                shipAxis = 'horizontal';
            }

            (0,_appendTo__WEBPACK_IMPORTED_MODULE_2__["default"])(`#${formName}`, [
                (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('label', '', { innerHTML: 'Starting point: ' }),
                (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('select', '', { id: selectY }),
                (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('select', '', { id: selectX }),
                (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('br', ''),
                (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('button', 'rotate-button', [
                    { innerHTML: 'rotate' },
                    { id: button },
                    { type: 'button' },
                ]),
                (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('button', 'deploy-button', [
                    { innerHTML: 'deploy' },
                    { id: submit },
                    { type: 'submit' },
                ]),
            ]);

            _gameData__WEBPACK_IMPORTED_MODULE_4__.yAxis.forEach((axis, axisIndex) => {
                (0,_appendTo__WEBPACK_IMPORTED_MODULE_2__["default"])(`#${selectY}`,
                    (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('option', '', [
                        { innerHTML: axis },
                        { value: axis },
                    ]));
                (0,_appendTo__WEBPACK_IMPORTED_MODULE_2__["default"])(`#${selectX}`,
                    (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('option', '', [
                        { innerHTML: axisIndex + 1 },
                        { value: axisIndex + 1 },
                    ]));
            });

            for (let i = 1; i <= ship.loa; i += 1) {
                (0,_appendTo__WEBPACK_IMPORTED_MODULE_2__["default"])(`#${shipBody}`, (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('div', 'block'));
            }

            document.querySelector(`#${button}`).onclick = () => {
                shipElement.classList.toggle('vertical');
                if (shipElement.classList.contains('vertical')) {
                    shipAxis = 'vertical';
                } else {
                    shipAxis = 'horizontal';
                }
            };

            document.querySelector(`#${submit}`).onclick = (e) => {
                e.preventDefault();
                const yValue = document.querySelector(`#${selectY}`).value;
                const xValue = document.querySelector(`#${selectX}`).value;

                const result = boards[0].setShipCoords(ship.name, yValue, Number(xValue), shipAxis);
                if (result) {
                    pvt.notify(`${ship.name.toUpperCase()} deployed! ${result}`);
                    document.querySelector(`#${dock}`).style.display = 'none';
                } else {
                    pvt.notify(`Failed to deploy ${ship.name.toUpperCase()}!`);
                }
            };
        });
    };

    return {
        setPlayerAndBoards,
        getPlayers,
        getBoards,
        createUI,
        // start,
        // over,
        // reset,
    };
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
        (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'notifier', { id: 'notifier' }),
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

document.querySelector('#nameInput').value = 'dfdsf';
document.querySelector('#playButton').click();
// When all of the squares of a ship have been hit, the ship's owner announces the sinking of
// the Carrier, Submarine, Cruiser/Destroyer/Patrol Boat, or the titular Battleship. If all of
// a player's ships have been sunk, the game is over and their opponent wins. If all ships of
// both players are sunk by the end of the round, the game is a draw.

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBYyxnQkFBZ0I7QUFDOUIsUUFBUSxxRUFBYyxxQkFBcUIsZ0JBQWdCO0FBQzNELFFBQVEscUVBQWMsaUJBQWlCLFdBQVc7QUFDbEQ7QUFDQTtBQUNBLElBQUkscURBQVEsY0FBYyxxRUFBYztBQUN4QyxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBLElBQUkscURBQVE7QUFDWixRQUFRLHFFQUFjLDRCQUE0QixvQkFBb0I7QUFDdEUsUUFBUSxxRUFBYztBQUN0QixjQUFjLGlCQUFpQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFRLGtCQUFrQixxRUFBYywwQkFBMEIsaUJBQWlCO0FBQ3ZGO0FBQ0EsSUFBSSxxREFBUSxrQkFBa0IscUVBQWM7QUFDNUMsVUFBVSxrQkFBa0I7QUFDNUIsVUFBVSxtQkFBbUI7QUFDN0I7QUFDQTs7Ozs7OztVQ3BDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFDSTtBQUNDOztBQUU5QixtREFBSztBQUNMLG1EQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9hcHBlbmRUby5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2ZhY3Rvcmllcy9lbGVtZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2ZhY3Rvcmllcy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZmFjdG9yaWVzL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9mYWN0b3JpZXMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZURhdGEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zdGF0aWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1hbnRpLWZsYXNoLXdoaXRlOiBoc2woMTk1LCA1MyUsIDk0JSk7XFxuICAgIC0tY2hpbmVzZS1zaWx2ZXI6IGhzbCgwLCAwJSwgODAlKTtcXG4gICAgLS1kYXJrOiBoc2woMCwgMCUsIDEyJSk7XFxuICAgIC0tZGFyay1jaGFyY29hbDogaHNsKDAsIDAlLCAyMCUpO1xcbiAgICAtLWxpZ2h0OiBoc2woMCwgMCUsIDkyJSk7XFxuICAgIC0tbGlnaHQtcmVkOiBoc2woMCwgMTAwJSwgOTAlKTtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyAgXFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSxcXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFxcXCJEZWphVnUgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFwcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDIuMnJlbSwgMTB2dywgNS4ycmVtKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLm5hbWUtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbn1cXG5cXG4ubmFtZS1maWVsZHNldCB7XFxuICAgIG1heC13aWR0aDogMzIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm5hbWUtZmllbGRzZXQgPiAqIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5uYW1lLWxlZ2VuZCB7XFxuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcXG59XFxuXFxuLm5hbWUtaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogLjVyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4ubmFtZS1pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4ubmFtZS1lcnJvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcmVkKTtcXG59XFxuXFxuLm5hbWUtZXJyb3IsXFxuLnBsYXktYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwIC41cmVtIC41cmVtIC41cmVtO1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5zZWEge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiAuOHJlbTtcXG4gICAgZmxleDogMTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubm90aWZpZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEwdncsIDEuMjVyZW0pO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstY2hhcmNvYWwpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGluZXNlLXNpbHZlcik7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb29yZCB7XFxuICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICBwYWRkaW5nOiAycHggMCAwIDJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2hpbmVzZS1zaWx2ZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbnRpLWZsYXNoLXdoaXRlKTtcXG59XFxuXFxuLmhhcmJvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5kb2NrIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcXG59XFxuXFxuLmRvY2sgPiAqLFxcbi5zaGlwLWZvcm0gPiAqIHtcXG4gICAgbWFyZ2luOiAuMnJlbTtcXG59XFxuXFxuLnNoaXAtbmFtZSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4uc2hpcC1ib2R5IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2hpbmVzZS1zaWx2ZXIpO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ibG9jayB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNoaW5lc2Utc2lsdmVyKTtcXG59XFxuXFxuLnJvdGF0ZS1idXR0b24sXFxuLmRlcGxveS1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMnJlbTtcXG59XFxuXFxuLmhlYWRlci5yZWR1Y2VkIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCAxMHZ3LCAzLjVyZW0pO1xcbiAgICBtYXJnaW46IC44cmVtO1xcbn1cXG5cXG4ubmFtZS1mb3JtLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYW1lLWVycm9yLnZpc2libGUsXFxuLm5vdGlmaWVyLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNlYS52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNoaXAtYm9keS52ZXJ0aWNhbCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7OztJQUdJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0NBQWtDO0FBQ3RDOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsdUNBQXVDO0lBQ3ZDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1Q0FBdUM7QUFDM0M7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYW50aS1mbGFzaC13aGl0ZTogaHNsKDE5NSwgNTMlLCA5NCUpO1xcbiAgICAtLWNoaW5lc2Utc2lsdmVyOiBoc2woMCwgMCUsIDgwJSk7XFxuICAgIC0tZGFyazogaHNsKDAsIDAlLCAxMiUpO1xcbiAgICAtLWRhcmstY2hhcmNvYWw6IGhzbCgwLCAwJSwgMjAlKTtcXG4gICAgLS1saWdodDogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWxpZ2h0LXJlZDogaHNsKDAsIDEwMCUsIDkwJSk7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgIFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBcXFwiRGVqYVZ1IFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hcHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgyLjJyZW0sIDEwdncsIDUuMnJlbSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5uYW1lLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcXG59XFxuXFxuLm5hbWUtZmllbGRzZXQge1xcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uYW1lLWZpZWxkc2V0ID4gKiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubmFtZS1sZWdlbmQge1xcbiAgICBtYXJnaW46IDAgMCAwIDIwcHg7XFxufVxcblxcbi5uYW1lLWlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLm5hbWUtaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLm5hbWUtZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXJlZCk7XFxufVxcblxcbi5uYW1lLWVycm9yLFxcbi5wbGF5LWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMCAuNXJlbSAuNXJlbSAuNXJlbTtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4uc2VhIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogLjhyZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLm5vdGlmaWVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxMHZ3LCAxLjI1cmVtKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNoYXJjb2FsKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hpbmVzZS1zaWx2ZXIpO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29vcmQge1xcbiAgICBmb250LXNpemU6IDlweDtcXG4gICAgcGFkZGluZzogMnB4IDAgMCAycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNoaW5lc2Utc2lsdmVyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW50aS1mbGFzaC13aGl0ZSk7XFxufVxcblxcbi5oYXJib3Ige1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZG9jayB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG4gICAgbWluLWhlaWdodDogMTIwcHg7XFxufVxcblxcbi5kb2NrID4gKixcXG4uc2hpcC1mb3JtID4gKiB7XFxuICAgIG1hcmdpbjogLjJyZW07XFxufVxcblxcbi5zaGlwLW5hbWUge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnNoaXAtYm9keSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNoaW5lc2Utc2lsdmVyKTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jaGluZXNlLXNpbHZlcik7XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uLFxcbi5kZXBsb3ktYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjJyZW07XFxufVxcblxcbi5oZWFkZXIucmVkdWNlZCB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMTB2dywgMy41cmVtKTtcXG4gICAgbWFyZ2luOiAuOHJlbTtcXG59XFxuXFxuLm5hbWUtZm9ybS5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmFtZS1lcnJvci52aXNpYmxlLFxcbi5ub3RpZmllci52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zZWEudmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaGlwLWJvZHkudmVydGljYWwge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZFRvKHBhcmVudCwgZWxlbWVudCkge1xuICAgIGlmIChwYXJlbnQgJiYgZWxlbWVudCkge1xuICAgICAgICBpZiAoKCh0eXBlb2YgcGFyZW50KSA9PT0gJ29iamVjdCcpICYmIEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKCh0eXBlb2YgcGFyZW50KSA9PT0gJ3N0cmluZycpICYmIEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCkuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBwYXJlbnQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKCh0eXBlb2YgcGFyZW50KSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50KS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmxldCBiYXR0bGVzaGlwO1xuXG5jb25zdCB2YWxpZGF0b3IgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWVJbnB1dCcpLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lRXJyb3InKTtcblxuICAgIGlmICgoaW5wdXQgfHwgKGlucHV0ID09PSAwKSkgJiYgKChpbnB1dC5sZW5ndGggPD0gMjApICYmIChpbnB1dC50b1VwcGVyQ2FzZSgpICE9PSAnQUknKSkpIHtcbiAgICAgICAgZXJyb3IuY2xhc3NOYW1lID0gJ25hbWUtZXJyb3InO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJykuY2xhc3NMaXN0LmFkZCgncmVkdWNlZCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZUZvcm0nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYScpLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblxuICAgICAgICBiYXR0bGVzaGlwID0gZ2FtZSgpO1xuICAgICAgICBiYXR0bGVzaGlwLnNldFBsYXllckFuZEJvYXJkcyhpbnB1dCk7XG4gICAgICAgIGJhdHRsZXNoaXAuY3JlYXRlVUkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvci5jbGFzc05hbWUgPSAnbmFtZS1lcnJvciB2aXNpYmxlJztcbiAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICBlcnJvci50ZXh0Q29udGVudCA9ICdBZG1pcmFsLCBzaG9ydGVuIHlvdXIgbmFtZSEnO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnRvVXBwZXJDYXNlKCkgPT09ICdBSScpIHtcbiAgICAgICAgICAgIGVycm9yLnRleHRDb250ZW50ID0gXCJBZG1pcmFsLCB5b3UgY2FuJ3QgdXNlIHRoYXQgbmFtZSFcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yLnRleHRDb250ZW50ID0gJ0FkbWlyYWwsIGVudGVyIHlvdXIgbmFtZSEnO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlbnRzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lRm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHZhbGlkYXRvcik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbGVtZW50RmFjdG9yeSh0eXBlLCBjbHNzTmFtZSwgb2JqZWN0KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgICBpZiAoY2xzc05hbWUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbHNzTmFtZTtcbiAgICB9XG5cbiAgICBpZiAob2JqZWN0KSB7XG4gICAgICAgIGlmICgodHlwZW9mIG9iamVjdCkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZSlbMF0gPT09ICdpbm5lckhUTUwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGAke09iamVjdC52YWx1ZXModmFsdWUpWzBdfWA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShPYmplY3Qua2V5cyh2YWx1ZSlbMF0sIE9iamVjdC52YWx1ZXModmFsdWUpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMob2JqZWN0KVswXSA9PT0gJ2lubmVySFRNTCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBgJHtPYmplY3QudmFsdWVzKG9iamVjdCl9YDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKE9iamVjdC5rZXlzKG9iamVjdCksIE9iamVjdC52YWx1ZXMob2JqZWN0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgbGlzdCwgeyB5QXhpcyB9IGZyb20gJy4uL2dhbWVEYXRhJztcbmltcG9ydCBzaGlwRmFjdG9yeSBmcm9tICcuL3NoaXBGYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZWJvYXJkRmFjdG9yeShhZG1pcmFsKSB7XG4gICAgY29uc3QgZmxlZXQgPSBbXTtcbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG5cbiAgICBsaXN0LmZvckVhY2goKHNoaXAsIGluZGV4KSA9PiB7XG4gICAgICAgIGZsZWV0LnB1c2goc2hpcEZhY3RvcnkobGlzdFtpbmRleF0ubmFtZSwgbGlzdFtpbmRleF0ubG9hKSk7XG4gICAgfSk7XG5cbiAgICAvLyBwdnQgPT09IHByaXZhdGVcbiAgICBjb25zdCBwdnQgPSB7XG4gICAgICAgIGdlbmVyYXRlQ29vcmRzKGF4aXMsIGluZGV4LCB5LCB4KSB7XG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGlmIChheGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmbGVldFtpbmRleF0uc2l6ZSk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHggKyBpKSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChgJHt5fSR7eCArIGl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmbGVldFtpbmRleF0uc2l6ZSk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHlBeGlzW3lBeGlzLmluZGV4T2YoeSkgKyBpXSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYCR7eUF4aXNbeUF4aXMuaW5kZXhPZih5KSArIGldfSR7eH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFsbENvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICAgICAgZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0Q29vcmRzKCkpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogc2hpcC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb29yZHM6IHNoaXAuZ2V0Q29vcmRzKCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFNoaXBDb29yZHMgPSAobmFtZSwgeSwgeCwgbmV3QXhpcykgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGZsZWV0LmZvckVhY2goKHNoaXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsQ29vcmRzID0gZ2V0QWxsQ29vcmRzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3QXhpcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcC5nZXRBeGlzKCkgIT09IG5ld0F4aXMpIHNoaXAubWFuZXV2ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZHNBcnJheSA9IHB2dC5nZW5lcmF0ZUNvb3JkcyhzaGlwLmdldEF4aXMoKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgsIHkudG9VcHBlckNhc2UoKSwgeCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29vcmRzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGR1cGxpY2F0ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkc0FycmF5LmZvckVhY2goKG5ld0Nvb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQ29vcmRzLmZvckVhY2goKHBsYWNlZENvb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGFjZWRDb29yZHMuY29vcmRzLmluY2x1ZGVzKG5ld0Nvb3JkcykpIGR1cGxpY2F0ZSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkdXBsaWNhdGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwLnNldENvb3Jkcyhjb29yZHNBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjb29yZHNBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0Q29vcmRzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSBzaGlwLmdldENvb3JkcygpO1xuICAgICAgICAgICAgICAgIGlmIChjb29yZHMuaW5jbHVkZXMoc3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdChzdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzdHJpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKHN0cmluZyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRNaXNzZWRBdHRhY2tzID0gKCkgPT4gbWlzc2VkQXR0YWNrcztcblxuICAgIGNvbnN0IGlzUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGdldEFsbENvb3JkcygpO1xuICAgICAgICBpZiAoY29vcmRzLmxlbmd0aCA9PT0gZmxlZXQubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0RlZmVhdGVkID0gKCkgPT4ge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGZsZWV0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSBjb3VudGVyICs9IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjb3VudGVyID09PSBmbGVldC5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkbWlyYWwsXG4gICAgICAgIHNldFNoaXBDb29yZHMsXG4gICAgICAgIGdldEFsbENvb3JkcyxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgZ2V0TWlzc2VkQXR0YWNrcyxcbiAgICAgICAgaXNSZWFkeSxcbiAgICAgICAgaXNEZWZlYXRlZCxcbiAgICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxheWVyRmFjdG9yeShuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcEZhY3RvcnkobmFtZSwgc2l6ZSkge1xuICAgIGxldCBheGlzID0gJ2hvcml6b250YWwnO1xuICAgIGxldCBjb29yZHM7XG4gICAgY29uc3QgcnVpbiA9IFtdO1xuXG4gICAgaWYgKHNpemUgPD0gMykgYXhpcyA9ICd2ZXJ0aWNhbCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBzaXplLFxuICAgICAgICBtYW5ldXZlcjogKCkgPT4ge1xuICAgICAgICAgICAgYXhpcyA9IChheGlzID09PSAnaG9yaXpvbnRhbCcpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QXhpczogKCkgPT4gYXhpcyxcbiAgICAgICAgc2V0Q29vcmRzOiAoYXJyYXkpID0+IHtcbiAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IHNpemUpIHtcbiAgICAgICAgICAgICAgICBjb29yZHMgPSBhcnJheTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q29vcmRzOiAoKSA9PiBjb29yZHMsXG4gICAgICAgIGhpdDogKHN0cmluZykgPT4ge1xuICAgICAgICAgICAgcnVpbi5wdXNoKHN0cmluZyk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpdHNSZWNpZXZlZDogKCkgPT4gcnVpbixcbiAgICAgICAgaXNTdW5rOiAoKSA9PiAocnVpbi5sZW5ndGggPT09IHNpemUpLFxuICAgIH07XG59XG4iLCJpbXBvcnQgcGxheWVyRmFjdG9yeSBmcm9tICcuL2ZhY3Rvcmllcy9wbGF5ZXJGYWN0b3J5JztcbmltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gJy4vZmFjdG9yaWVzL2dhbWVib2FyZEZhY3RvcnknO1xuaW1wb3J0IGFwcGVuZFRvIGZyb20gJy4vYXBwZW5kVG8nO1xuaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gJy4vZmFjdG9yaWVzL2VsZW1lbnRGYWN0b3J5JztcbmltcG9ydCBsaXN0LCB7IHlBeGlzIH0gZnJvbSAnLi9nYW1lRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWUoKSB7XG4gICAgbGV0IHBsYXllcnM7XG4gICAgbGV0IGJvYXJkcztcblxuICAgIGNvbnN0IHB2dCA9IHtcbiAgICAgICAgcmVzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHBsYXllcnMgPSBbXTtcbiAgICAgICAgICAgIGJvYXJkcyA9IFtdO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYScpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9LFxuICAgICAgICB0b2dnbGVOb3RpZmllcjogKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGlmaWVyJykuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xuICAgICAgICB9LFxuICAgICAgICBub3RpZnk6IChzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpZmllcicpLmlubmVySFRNTCA9IHN0cmluZztcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UGxheWVyQW5kQm9hcmRzID0gKGlucHV0KSA9PiB7XG4gICAgICAgIHB2dC5yZXNldCgpO1xuICAgICAgICBwbGF5ZXJzLnB1c2gocGxheWVyRmFjdG9yeShpbnB1dCkpO1xuICAgICAgICBib2FyZHMucHVzaChnYW1lYm9hcmRGYWN0b3J5KGlucHV0KSk7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXJGYWN0b3J5KCdBSScpKTtcbiAgICAgICAgYm9hcmRzLnB1c2goZ2FtZWJvYXJkRmFjdG9yeSgnQUknKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBsYXllcnMgPSAoKSA9PiBwbGF5ZXJzO1xuICAgIGNvbnN0IGdldEJvYXJkcyA9ICgpID0+IGJvYXJkcztcblxuICAgIGNvbnN0IGNyZWF0ZVVJID0gKCkgPT4ge1xuICAgICAgICBwdnQudG9nZ2xlTm90aWZpZXIoKTtcbiAgICAgICAgcHZ0Lm5vdGlmeShgQWRtaXJhbCAke3BsYXllcnNbMF0ubmFtZX0gZGVwbG95IHlvdXIgc2hpcHMhYCk7XG5cbiAgICAgICAgYXBwZW5kVG8oJyNzZWEnLCBbXG4gICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnZGl2JywgJ3BsYXllci1ib2FyZCcsIHsgaWQ6ICdwbGF5ZXJCb2FyZCcgfSksXG4gICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnZGl2JywgJ2hhcmJvcicsIHsgaWQ6ICdwbGF5ZXJIYXJib3InIH0pLFxuICAgICAgICBdKTtcblxuICAgICAgICBsZXQgeCA9IDE7XG4gICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgZm9yIChsZXQgY291bnRlciA9IDE7IGNvdW50ZXIgPD0gMTAwOyBjb3VudGVyICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gYCR7eUF4aXNbeV19JHt4fWA7XG5cbiAgICAgICAgICAgIGFwcGVuZFRvKCcjcGxheWVyQm9hcmQnLCBlbGVtZW50RmFjdG9yeSgnZGl2JywgJ2Nvb3JkJywgeyBpbm5lckhUTUw6IGNvb3JkIH0pKTtcblxuICAgICAgICAgICAgeCArPSAxO1xuICAgICAgICAgICAgaWYgKHggPiAxMCkge1xuICAgICAgICAgICAgICAgIHggPSAxO1xuICAgICAgICAgICAgICAgIHkgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRvY2tOdW0gPSBpbmRleCArIDE7XG4gICAgICAgICAgICBjb25zdCBkb2NrID0gYGRvY2ske2RvY2tOdW19YDtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBCb2R5ID0gYHNoaXBCb2R5JHtkb2NrTnVtfWA7XG4gICAgICAgICAgICBjb25zdCBmb3JtTmFtZSA9IGBzaGlwRm9ybSR7ZG9ja051bX1gO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gYGJ1dHRvbiR7ZG9ja051bX1gO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0WSA9IGBzZWxlY3RZJHtkb2NrTnVtfWA7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RYID0gYHNlbGVjdFgke2RvY2tOdW19YDtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IGBzdWJtaXQke2RvY2tOdW19YDtcbiAgICAgICAgICAgIGxldCBzaGlwQXhpcztcblxuICAgICAgICAgICAgYXBwZW5kVG8oJyNwbGF5ZXJIYXJib3InLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnZG9jaycsIHsgaWQ6IGRvY2sgfSkpO1xuICAgICAgICAgICAgYXBwZW5kVG8oYCNkb2NrJHtkb2NrTnVtfWAsIFtcbiAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgncCcsICdzaGlwLW5hbWUnLCB7IGlubmVySFRNTDogYCR7c2hpcC5uYW1lfSAoJHtzaGlwLmxvYX0pYCB9KSxcbiAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnZGl2JywgJ3NoaXAtYm9keScsIHsgaWQ6IHNoaXBCb2R5IH0pLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRGYWN0b3J5KCdmb3JtJywgJ3NoaXAtZm9ybScsIHsgaWQ6IGZvcm1OYW1lIH0pLFxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c2hpcEJvZHl9YCk7XG4gICAgICAgICAgICBpZiAoc2hpcC5sb2EgPD0gMykge1xuICAgICAgICAgICAgICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgICAgICAgICAgc2hpcEF4aXMgPSAndmVydGljYWwnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGlwQXhpcyA9ICdob3Jpem9udGFsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXBwZW5kVG8oYCMke2Zvcm1OYW1lfWAsIFtcbiAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnbGFiZWwnLCAnJywgeyBpbm5lckhUTUw6ICdTdGFydGluZyBwb2ludDogJyB9KSxcbiAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnc2VsZWN0JywgJycsIHsgaWQ6IHNlbGVjdFkgfSksXG4gICAgICAgICAgICAgICAgZWxlbWVudEZhY3RvcnkoJ3NlbGVjdCcsICcnLCB7IGlkOiBzZWxlY3RYIH0pLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRGYWN0b3J5KCdicicsICcnKSxcbiAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnYnV0dG9uJywgJ3JvdGF0ZS1idXR0b24nLCBbXG4gICAgICAgICAgICAgICAgICAgIHsgaW5uZXJIVE1MOiAncm90YXRlJyB9LFxuICAgICAgICAgICAgICAgICAgICB7IGlkOiBidXR0b24gfSxcbiAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiAnYnV0dG9uJyB9LFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRGYWN0b3J5KCdidXR0b24nLCAnZGVwbG95LWJ1dHRvbicsIFtcbiAgICAgICAgICAgICAgICAgICAgeyBpbm5lckhUTUw6ICdkZXBsb3knIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6IHN1Ym1pdCB9LFxuICAgICAgICAgICAgICAgICAgICB7IHR5cGU6ICdzdWJtaXQnIH0sXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgeUF4aXMuZm9yRWFjaCgoYXhpcywgYXhpc0luZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgYXBwZW5kVG8oYCMke3NlbGVjdFl9YCxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEZhY3RvcnkoJ29wdGlvbicsICcnLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGlubmVySFRNTDogYXhpcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogYXhpcyB9LFxuICAgICAgICAgICAgICAgICAgICBdKSk7XG4gICAgICAgICAgICAgICAgYXBwZW5kVG8oYCMke3NlbGVjdFh9YCxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEZhY3RvcnkoJ29wdGlvbicsICcnLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGlubmVySFRNTDogYXhpc0luZGV4ICsgMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogYXhpc0luZGV4ICsgMSB9LFxuICAgICAgICAgICAgICAgICAgICBdKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcC5sb2E7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZFRvKGAjJHtzaGlwQm9keX1gLCBlbGVtZW50RmFjdG9yeSgnZGl2JywgJ2Jsb2NrJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtidXR0b259YCkub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCd2ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgICAgIGlmIChzaGlwRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcEF4aXMgPSAndmVydGljYWwnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBBeGlzID0gJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3N1Ym1pdH1gKS5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c2VsZWN0WX1gKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB4VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzZWxlY3RYfWApLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYm9hcmRzWzBdLnNldFNoaXBDb29yZHMoc2hpcC5uYW1lLCB5VmFsdWUsIE51bWJlcih4VmFsdWUpLCBzaGlwQXhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBwdnQubm90aWZ5KGAke3NoaXAubmFtZS50b1VwcGVyQ2FzZSgpfSBkZXBsb3llZCEgJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RvY2t9YCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwdnQubm90aWZ5KGBGYWlsZWQgdG8gZGVwbG95ICR7c2hpcC5uYW1lLnRvVXBwZXJDYXNlKCl9IWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRQbGF5ZXJBbmRCb2FyZHMsXG4gICAgICAgIGdldFBsYXllcnMsXG4gICAgICAgIGdldEJvYXJkcyxcbiAgICAgICAgY3JlYXRlVUksXG4gICAgICAgIC8vIHN0YXJ0LFxuICAgICAgICAvLyBvdmVyLFxuICAgICAgICAvLyByZXNldCxcbiAgICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZShbXG4gICAgeyBuYW1lOiAnY2FycmllcicsIGxvYTogNSB9LFxuICAgIHsgbmFtZTogJ2JhdHRsZXNoaXAnLCBsb2E6IDQgfSxcbiAgICB7IG5hbWU6ICdkZXN0cm95ZXInLCBsb2E6IDMgfSxcbiAgICB7IG5hbWU6ICdzdWJtYXJpbmUnLCBsb2E6IDMgfSxcbiAgICB7IG5hbWU6ICdwYXRyb2wgYm9hdCcsIGxvYTogMiB9LFxuXSk7XG5cbmV4cG9ydCBjb25zdCB5QXhpcyA9IE9iamVjdC5mcmVlemUoW1xuICAgICdBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJyxcbl0pO1xuIiwiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gJy4vZmFjdG9yaWVzL2VsZW1lbnRGYWN0b3J5JztcbmltcG9ydCBhcHBlbmRUbyBmcm9tICcuL2FwcGVuZFRvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgLy8gc2V0IGxhbmd1YWdlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLnNldEF0dHJpYnV0ZSgnbGFuZycsICdlbicpO1xuICAgIC8vIGNyZWF0ZSBhcHAgbWFpbiBjb250YWluZXJcbiAgICBhcHBlbmRUbygnYm9keScsIGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnYXBwJywgeyBpZDogJ2FwcCcgfSkpO1xuICAgIC8vIGNyZWF0ZSBoZWFkZXIsIGZvcm0gYW5kIGRpdlxuICAgIGFwcGVuZFRvKCcjYXBwJywgW1xuICAgICAgICBlbGVtZW50RmFjdG9yeSgnaDEnLCAnaGVhZGVyJywgW1xuICAgICAgICAgICAgeyBpZDogJ2hlYWRlcicgfSxcbiAgICAgICAgICAgIHsgaW5uZXJIVE1MOiAnYmF0dGxlJnNoeTtzaGlwJyB9XSksXG4gICAgICAgIGVsZW1lbnRGYWN0b3J5KCdmb3JtJywgJ25hbWUtZm9ybScsIFtcbiAgICAgICAgICAgIHsgaWQ6ICduYW1lRm9ybScgfSxcbiAgICAgICAgICAgIHsgbm92YWxpZGF0ZTogJycgfV0pLFxuICAgICAgICBlbGVtZW50RmFjdG9yeSgnaDInLCAnbm90aWZpZXInLCB7IGlkOiAnbm90aWZpZXInIH0pLFxuICAgICAgICBlbGVtZW50RmFjdG9yeSgnZGl2JywgJ3NlYScsIHsgaWQ6ICdzZWEnIH0pLFxuICAgIF0pO1xuICAgIC8vIGNyZWF0ZSBmaWVsZHNldFxuICAgIGFwcGVuZFRvKCcjbmFtZUZvcm0nLCBlbGVtZW50RmFjdG9yeSgnZmllbGRzZXQnLCAnbmFtZS1maWVsZHNldCcsXG4gICAgICAgIHsgaWQ6ICduYW1lRmllbGRzZXQnIH0pKTtcbiAgICAvLyBjcmVhdGUgaW5wdXQgZm9yIG5hbWVcbiAgICBhcHBlbmRUbygnI25hbWVGaWVsZHNldCcsIFtcbiAgICAgICAgZWxlbWVudEZhY3RvcnkoJ2xlZ2VuZCcsICduYW1lLWxlZ2VuZCcsIHsgaW5uZXJIVE1MOiAnTmFtZTonIH0pLFxuICAgICAgICBlbGVtZW50RmFjdG9yeSgnaW5wdXQnLCAnbmFtZS1pbnB1dCcsIFtcbiAgICAgICAgICAgIHsgaWQ6ICduYW1lSW5wdXQnIH0sXG4gICAgICAgIF0pLFxuICAgIF0pO1xuICAgIC8vIGNyZWF0ZSBzbWFsbCB0YWcgZm9yIGlucHV0IGVycm9yXG4gICAgYXBwZW5kVG8oJyNuYW1lRmllbGRzZXQnLCBlbGVtZW50RmFjdG9yeSgnc21hbGwnLCAnbmFtZS1lcnJvcicsIHsgaWQ6ICduYW1lRXJyb3InIH0pKTtcbiAgICAvLyBjcmVhdGUgcGxheSBidXR0b25cbiAgICBhcHBlbmRUbygnI25hbWVGaWVsZHNldCcsIGVsZW1lbnRGYWN0b3J5KCdidXR0b24nLCAncGxheS1idXR0b24nLCBbXG4gICAgICAgIHsgaWQ6ICdwbGF5QnV0dG9uJyB9LFxuICAgICAgICB7IGlubmVySFRNTDogJ3BsYXknIH0sXG4gICAgXSkpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vY3NzL21haW4uY3NzJztcbmltcG9ydCBzZXR1cCBmcm9tICcuL3N0YXRpYyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzJztcblxuc2V0dXAoKTtcbmV2ZW50cygpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZUlucHV0JykudmFsdWUgPSAnZGZkc2YnO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXlCdXR0b24nKS5jbGljaygpO1xuLy8gV2hlbiBhbGwgb2YgdGhlIHNxdWFyZXMgb2YgYSBzaGlwIGhhdmUgYmVlbiBoaXQsIHRoZSBzaGlwJ3Mgb3duZXIgYW5ub3VuY2VzIHRoZSBzaW5raW5nIG9mXG4vLyB0aGUgQ2FycmllciwgU3VibWFyaW5lLCBDcnVpc2VyL0Rlc3Ryb3llci9QYXRyb2wgQm9hdCwgb3IgdGhlIHRpdHVsYXIgQmF0dGxlc2hpcC4gSWYgYWxsIG9mXG4vLyBhIHBsYXllcidzIHNoaXBzIGhhdmUgYmVlbiBzdW5rLCB0aGUgZ2FtZSBpcyBvdmVyIGFuZCB0aGVpciBvcHBvbmVudCB3aW5zLiBJZiBhbGwgc2hpcHMgb2Zcbi8vIGJvdGggcGxheWVycyBhcmUgc3VuayBieSB0aGUgZW5kIG9mIHRoZSByb3VuZCwgdGhlIGdhbWUgaXMgYSBkcmF3LlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9