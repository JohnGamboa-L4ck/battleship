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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --anti-flash-white: hsl(195, 53%, 94%);\n    --chinese-silver: hsl(0, 0%, 80%);\n    --crimson: hsl(348, 83%, 47%);\n    --dark: hsl(0, 0%, 12%);\n    --dark-charcoal: hsl(0, 0%, 20%);\n    --lavander-blush: hsl(340, 100%, 97%);\n    --light: hsl(0, 0%, 92%);\n    --light-red: hsl(0, 100%, 90%);\n}\n\n*, *:before, *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nbody {\n    min-height: 100vh;\n}\n\nbody,\nbutton,\ninput {\n    font-family:Verdana, Geneva, \"DejaVu Sans\", sans-serif;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    color: var(--dark);\n    background-color: var(--light);\n}\n\n.header {\n    font-size: clamp(2.2rem, 10vw, 5.2rem);\n    text-align: center;\n    text-transform: uppercase;\n    margin: 1rem;\n    word-wrap: break-word;\n}\n\n.name-form {\n    display: block;\n    padding: 0 1rem 0 1rem;\n}\n\n.name-fieldset {\n    max-width: 320px;\n    margin: auto;\n    border: 1px solid var(--dark);\n    border-radius: 5px;\n}\n\n.name-fieldset > * {\n    display: block;\n}\n\n.name-legend {\n    margin: 0 0 0 20px;\n}\n\n.name-input {\n    border: none;\n    border-radius: 3px;\n    outline: none;\n    width: calc(100% - 1rem);\n    height: 100%;\n    margin: .5rem;\n    padding: .5rem;\n}\n\n.name-input:focus {\n    outline: 1px solid gray;\n}\n\n.name-error {\n    display: none;\n    padding: .5rem;\n    border-radius: 3px;\n    color: var(--dark);\n    background-color: var(--light-red);\n}\n\n.name-error,\n.play-button {\n    margin: 0 .5rem .5rem .5rem;\n}\n\n.play-button {\n    float: right;\n    padding: .25rem .5rem;\n    text-transform: capitalize;\n}\n\n.notifier {\n    display: none;\n    font-size: clamp(1rem, 10vw, 1.25rem);\n    text-align: center;\n    line-height: 1.5em;\n    padding: .25rem;\n    color: var(--dark-charcoal);\n    background-color: var(--chinese-silver);\n}\n\n.notifier div {\n    font-weight: normal;\n    font-size: 1rem;\n    padding: 1rem;\n    margin: auto;\n    word-wrap: break-word;\n}\n\n.sea {\n    display: none;\n    padding: .8rem;\n    flex: 1;\n    align-items: center;\n    justify-content: space-evenly;\n    overflow: auto;\n    flex-wrap: wrap;\n}\n\n.sea > * {\n    margin: .25rem;\n}\n\n.player-board,\n.ai-board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    width: 500px;\n    height: 500px;\n    border: 5px solid var(--dark);\n    background-color: white;\n}\n\n.coord {\n    font-size: .8rem;\n    line-height: 1em;\n    user-select: none;\n    padding: 2px 0 0 2px;\n    border: 1px solid var(--chinese-silver);\n    background-color: var(--anti-flash-white);\n}\n\n.ai-board .coord {\n    background-color: var(--lavander-blush);\n    cursor: crosshair;\n}\n\n.harbor {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    min-width: 500px;\n    min-height: 500px;\n}\n\n.dock {\n    padding: .25rem;\n    min-height: 120px;\n}\n\n.dock > *,\n.ship-form > * {\n    margin: .2rem;\n}\n\n.ship-name {\n    text-transform: capitalize;\n}\n\n.ship-body {\n    float: right;\n    display: flex;\n    border: 1px solid var(--dark-charcoal);\n}\n\n.block {\n    width: 25px;\n    height: 25px;\n    border: 1px solid var(--dark-charcoal);\n}\n\n.home-button {\n    padding: .5rem;\n}\n\n.rotate-button,\n.deploy-button {\n    padding: .2rem;\n}\n\n.header.reduced {\n    font-size: clamp(2rem, 10vw, 3.5rem);\n    margin: .8rem;\n}\n\n.name-form.hidden {\n    display: none;\n}\n\n.name-error.visible,\n.notifier.visible {\n    display: block;\n}\n\n.sea.visible {\n    display: flex;\n}\n\n.coord.taken {\n    color: var(--light);\n}\n\n.ai-board .coord.hit,\n.ai-board .coord.miss {\n    cursor: not-allowed;\n}\n\n.ai-board .coord.taken {\n    background-color: var(--crimson);\n}\n\n.ship-body.vertical {\n    flex-direction: column;\n}\n", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;IACI,sCAAsC;IACtC,iCAAiC;IACjC,6BAA6B;IAC7B,uBAAuB;IACvB,gCAAgC;IAChC,qCAAqC;IACrC,wBAAwB;IACxB,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;IAC9B,2BAA2B;IAC3B,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;;IAGI,sDAAsD;AAC1D;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,wBAAwB;IACxB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,2BAA2B;IAC3B,uCAAuC;AAC3C;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,OAAO;IACP,mBAAmB;IACnB,6BAA6B;IAC7B,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,aAAa;IACb,sCAAsC;IACtC,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,uCAAuC;IACvC,yCAAyC;AAC7C;;AAEA;IACI,uCAAuC;IACvC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":[":root {\n    --anti-flash-white: hsl(195, 53%, 94%);\n    --chinese-silver: hsl(0, 0%, 80%);\n    --crimson: hsl(348, 83%, 47%);\n    --dark: hsl(0, 0%, 12%);\n    --dark-charcoal: hsl(0, 0%, 20%);\n    --lavander-blush: hsl(340, 100%, 97%);\n    --light: hsl(0, 0%, 92%);\n    --light-red: hsl(0, 100%, 90%);\n}\n\n*, *:before, *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nbody {\n    min-height: 100vh;\n}\n\nbody,\nbutton,\ninput {\n    font-family:Verdana, Geneva, \"DejaVu Sans\", sans-serif;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.app {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    color: var(--dark);\n    background-color: var(--light);\n}\n\n.header {\n    font-size: clamp(2.2rem, 10vw, 5.2rem);\n    text-align: center;\n    text-transform: uppercase;\n    margin: 1rem;\n    word-wrap: break-word;\n}\n\n.name-form {\n    display: block;\n    padding: 0 1rem 0 1rem;\n}\n\n.name-fieldset {\n    max-width: 320px;\n    margin: auto;\n    border: 1px solid var(--dark);\n    border-radius: 5px;\n}\n\n.name-fieldset > * {\n    display: block;\n}\n\n.name-legend {\n    margin: 0 0 0 20px;\n}\n\n.name-input {\n    border: none;\n    border-radius: 3px;\n    outline: none;\n    width: calc(100% - 1rem);\n    height: 100%;\n    margin: .5rem;\n    padding: .5rem;\n}\n\n.name-input:focus {\n    outline: 1px solid gray;\n}\n\n.name-error {\n    display: none;\n    padding: .5rem;\n    border-radius: 3px;\n    color: var(--dark);\n    background-color: var(--light-red);\n}\n\n.name-error,\n.play-button {\n    margin: 0 .5rem .5rem .5rem;\n}\n\n.play-button {\n    float: right;\n    padding: .25rem .5rem;\n    text-transform: capitalize;\n}\n\n.notifier {\n    display: none;\n    font-size: clamp(1rem, 10vw, 1.25rem);\n    text-align: center;\n    line-height: 1.5em;\n    padding: .25rem;\n    color: var(--dark-charcoal);\n    background-color: var(--chinese-silver);\n}\n\n.notifier div {\n    font-weight: normal;\n    font-size: 1rem;\n    padding: 1rem;\n    margin: auto;\n    word-wrap: break-word;\n}\n\n.sea {\n    display: none;\n    padding: .8rem;\n    flex: 1;\n    align-items: center;\n    justify-content: space-evenly;\n    overflow: auto;\n    flex-wrap: wrap;\n}\n\n.sea > * {\n    margin: .25rem;\n}\n\n.player-board,\n.ai-board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    width: 500px;\n    height: 500px;\n    border: 5px solid var(--dark);\n    background-color: white;\n}\n\n.coord {\n    font-size: .8rem;\n    line-height: 1em;\n    user-select: none;\n    padding: 2px 0 0 2px;\n    border: 1px solid var(--chinese-silver);\n    background-color: var(--anti-flash-white);\n}\n\n.ai-board .coord {\n    background-color: var(--lavander-blush);\n    cursor: crosshair;\n}\n\n.harbor {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    min-width: 500px;\n    min-height: 500px;\n}\n\n.dock {\n    padding: .25rem;\n    min-height: 120px;\n}\n\n.dock > *,\n.ship-form > * {\n    margin: .2rem;\n}\n\n.ship-name {\n    text-transform: capitalize;\n}\n\n.ship-body {\n    float: right;\n    display: flex;\n    border: 1px solid var(--dark-charcoal);\n}\n\n.block {\n    width: 25px;\n    height: 25px;\n    border: 1px solid var(--dark-charcoal);\n}\n\n.home-button {\n    padding: .5rem;\n}\n\n.rotate-button,\n.deploy-button {\n    padding: .2rem;\n}\n\n.header.reduced {\n    font-size: clamp(2rem, 10vw, 3.5rem);\n    margin: .8rem;\n}\n\n.name-form.hidden {\n    display: none;\n}\n\n.name-error.visible,\n.notifier.visible {\n    display: block;\n}\n\n.sea.visible {\n    display: flex;\n}\n\n.coord.taken {\n    color: var(--light);\n}\n\n.ai-board .coord.hit,\n.ai-board .coord.miss {\n    cursor: not-allowed;\n}\n\n.ai-board .coord.taken {\n    background-color: var(--crimson);\n}\n\n.ship-body.vertical {\n    flex-direction: column;\n}\n"],"sourceRoot":""}]);
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
        battleship.prepUI();
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
    let aiCoordsOption;

    const pvt = {
        colors: ['indigo', 'green', 'orange', 'blue', 'violet'],
        reset: () => {
            players = [];
            boards = [];
            aiCoordsOption = [];
            document.querySelector('#sea').innerHTML = '';
        },
        toggleNotifier: () => {
            document.querySelector('#notifier').classList.toggle('visible');
        },
        backToHome: () => {
            pvt.reset();
            pvt.toggleNotifier();
            document.querySelector('#header').classList.remove('reduced');
            document.querySelector('#nameForm').classList.remove('hidden');
        },
        notify: (string) => {
            document.querySelector('#notifier').innerHTML = string;
        },
        notifyPlus: (string) => {
            document.querySelector('#notifier').innerHTML += `<br>${string}`;
        },
        randomInteger: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
        aiRandomDeploy: () => {
            const axis = ['horizontal', 'vertical'];
            _gameData__WEBPACK_IMPORTED_MODULE_4__["default"].forEach((ship) => {
                let condition = false;
                while (condition === false) {
                    const result = boards[1].setShipCoords(ship.name,
                        _gameData__WEBPACK_IMPORTED_MODULE_4__.yAxis[pvt.randomInteger(0, 9)], Number(pvt.randomInteger(1, 10),
                            axis[pvt.randomInteger(0, 1)]));
                    if (result) condition = true;
                }
            });
        },
        createGameboardUI: (clsname, elementID) => {
            (0,_appendTo__WEBPACK_IMPORTED_MODULE_2__["default"])('#sea', (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('div', clsname, { id: elementID }));
            let x = 1;
            let y = 0;
            for (let counter = 1; counter <= 100; counter += 1) {
                const coord = `${_gameData__WEBPACK_IMPORTED_MODULE_4__.yAxis[y]}${x}`;
                if (aiCoordsOption.length < 100) aiCoordsOption.push(coord);

                (0,_appendTo__WEBPACK_IMPORTED_MODULE_2__["default"])(`#${elementID}`, (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('div', `coord ${coord}`,
                    { innerHTML: coord }));

                x += 1;
                if (x > 10) {
                    x = 1;
                    y += 1;
                }
            }
        },
        displayMissedShots: () => {
            const playerMissedAttacks = boards[1].getMissedAttacks();
            const aiMissedAttacks = boards[0].getMissedAttacks();
            document.querySelector('#notifier').innerHTML += `
                <div><strong>Admiral ${players[0].name.toUpperCase()}</strong>, <br>
                ${playerMissedAttacks.length}
                missed shots: ${playerMissedAttacks} <br>
                <strong>Computer ${players[1].name.toUpperCase()}</strong>, <br>
                ${aiMissedAttacks.length}
                missed shots: ${aiMissedAttacks}</div>`;
            (0,_appendTo__WEBPACK_IMPORTED_MODULE_2__["default"])('#notifier', (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('button', 'home-button', [
                { innerHTML: '< Home' },
                { id: 'home' },
            ]));
            document.querySelector('#home').onclick = pvt.backToHome;
        },
        checkWinner: () => {
            let result = false;
            if (boards[0].isDefeated() && boards[1].isDefeated()) {
                pvt.notify('Game ended with a draw!');
                result = true;
            } else if (boards[1].isDefeated()) {
                pvt.notify(`Game Over! Admiral ${players[0].name.toUpperCase()} wins!`);
                result = true;
            } else if (boards[0].isDefeated()) {
                pvt.notify(`Game Over! Computer ${players[1].name.toUpperCase()} wins!`);
                result = true;
            }
            if (result) {
                document.querySelector('#sea').classList.remove('visible');
                pvt.displayMissedShots();
            }
        },
        aiTurn: () => {
            const random = pvt.randomInteger(0, (aiCoordsOption.length - 1));
            const randomCoord = aiCoordsOption[random];
            const coordIndex = aiCoordsOption.indexOf(randomCoord);
            if (coordIndex > -1) {
                aiCoordsOption.splice(coordIndex, 1);
            }

            const tile = document.querySelector(`#playerBoard .${randomCoord}`);
            if (boards[0].receiveAttack(randomCoord)) {
                tile.classList.add('taken', 'hit');
                tile.innerHTML = '&#128293;';
                pvt.notifyPlus(`AI fired in ${randomCoord}, hit! &#128293;`);
            } else {
                tile.classList.add('miss');
                tile.innerHTML = '&#127754;';
                pvt.notifyPlus(`AI fired in ${randomCoord}, miss! &#127754;`);
            }
            pvt.checkWinner();
        },
    };

    const setPlayerAndBoards = (input) => {
        pvt.reset();
        players.push((0,_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(input));
        boards.push((0,_factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(input));
        players.push((0,_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('AI'));
        boards.push((0,_factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('AI'));
    };

    const updateUI = () => {
        document.querySelector('#playerHarbor').remove();
        pvt.notify('Game started! <br> Click anywhere in the right gameboard.');
        pvt.createGameboardUI('ai-board', 'aiBoard');

        const coords = boards[1].getAllCoords();
        const arrayOfAICoords = [];

        coords.forEach((coord) => {
            const array = coord.coords;
            array.forEach((combination) => {
                arrayOfAICoords.push(combination);
            });
        });

        const hundredTiles = document.querySelectorAll('#aiBoard .coord');
        hundredTiles.forEach((element) => {
            const currentCoord = element.className.split(' ')[1];
            const tile = element;
            tile.addEventListener('click', () => {
                if (arrayOfAICoords.includes(currentCoord)) {
                    tile.classList.add('taken', 'hit');
                    tile.innerHTML = '&#128293;';
                    if (boards[1].receiveAttack(currentCoord)) {
                        pvt.notify(`You fired in ${currentCoord}, hit! &#128293;`);
                    }
                } else {
                    tile.classList.add('miss');
                    tile.innerHTML = '&#127754;';
                    if (boards[1].receiveAttack(currentCoord) === false) {
                        pvt.notify(`You fired in ${currentCoord}, miss! &#127754;`);
                    }
                }
                pvt.aiTurn();
            }, { once: true });
        });
    };

    const prepUI = () => {
        pvt.toggleNotifier();
        pvt.notify(`Admiral ${players[0].name} deploy your ships!`);

        pvt.createGameboardUI('player-board', 'playerBoard');
        (0,_appendTo__WEBPACK_IMPORTED_MODULE_2__["default"])('#sea', (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('div', 'harbor', { id: 'playerHarbor' }));

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
                (0,_factories_elementFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('label', '', { innerHTML: 'Starting coord:' }),
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
                    result.forEach((coord) => {
                        document.querySelector(`#playerBoard .${coord}`).classList.add('taken');
                        document.querySelector(`#playerBoard .${coord}`).style
                            .backgroundColor = pvt.colors[index];
                    });
                } else {
                    pvt.notify(`Failed to deploy ${ship.name.toUpperCase()}!`);
                }
                if (boards[0].isReady()) pvt.aiRandomDeploy();
                if (boards[1].isReady()) updateUI();
            };
        });
    };

    return {
        setPlayerAndBoards,
        prepUI,
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFFQUFjO0FBQ3RCLGNBQWMsaUJBQWlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVEsa0JBQWtCLHFFQUFjLDBCQUEwQixpQkFBaUI7QUFDdkY7QUFDQSxJQUFJLHFEQUFRLGtCQUFrQixxRUFBYztBQUM1QyxVQUFVLGtCQUFrQjtBQUM1QixVQUFVLG1CQUFtQjtBQUM3QjtBQUNBOzs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QjtBQUNJO0FBQ0M7O0FBRTlCLG1EQUFLO0FBQ0wsbURBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3MvbWFpbi5jc3M/MmM5ZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvYXBwZW5kVG8uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9mYWN0b3JpZXMvZWxlbWVudEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9mYWN0b3JpZXMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2ZhY3Rvcmllcy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZmFjdG9yaWVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWVEYXRhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc3RhdGljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYW50aS1mbGFzaC13aGl0ZTogaHNsKDE5NSwgNTMlLCA5NCUpO1xcbiAgICAtLWNoaW5lc2Utc2lsdmVyOiBoc2woMCwgMCUsIDgwJSk7XFxuICAgIC0tY3JpbXNvbjogaHNsKDM0OCwgODMlLCA0NyUpO1xcbiAgICAtLWRhcms6IGhzbCgwLCAwJSwgMTIlKTtcXG4gICAgLS1kYXJrLWNoYXJjb2FsOiBoc2woMCwgMCUsIDIwJSk7XFxuICAgIC0tbGF2YW5kZXItYmx1c2g6IGhzbCgzNDAsIDEwMCUsIDk3JSk7XFxuICAgIC0tbGlnaHQ6IGhzbCgwLCAwJSwgOTIlKTtcXG4gICAgLS1saWdodC1yZWQ6IGhzbCgwLCAxMDAlLCA5MCUpO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7ICBcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5LFxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgXFxcIkRlamFWdSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMi4ycmVtLCAxMHZ3LCA1LjJyZW0pO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ubmFtZS1mb3JtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07XFxufVxcblxcbi5uYW1lLWZpZWxkc2V0IHtcXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubmFtZS1maWVsZHNldCA+ICoge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm5hbWUtbGVnZW5kIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xcbn1cXG5cXG4ubmFtZS1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5uYW1lLWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5uYW1lLWVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1yZWQpO1xcbn1cXG5cXG4ubmFtZS1lcnJvcixcXG4ucGxheS1idXR0b24ge1xcbiAgICBtYXJnaW46IDAgLjVyZW0gLjVyZW0gLjVyZW07XFxufVxcblxcbi5wbGF5LWJ1dHRvbiB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLm5vdGlmaWVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxMHZ3LCAxLjI1cmVtKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstY2hhcmNvYWwpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGluZXNlLXNpbHZlcik7XFxufVxcblxcbi5ub3RpZmllciBkaXYge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uc2VhIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogLjhyZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc2VhID4gKiB7XFxuICAgIG1hcmdpbjogLjI1cmVtO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkLFxcbi5haS1ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvb3JkIHtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDJweCAwIDAgMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jaGluZXNlLXNpbHZlcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFudGktZmxhc2gtd2hpdGUpO1xcbn1cXG5cXG4uYWktYm9hcmQgLmNvb3JkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2YW5kZXItYmx1c2gpO1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmhhcmJvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxufVxcblxcbi5kb2NrIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcXG59XFxuXFxuLmRvY2sgPiAqLFxcbi5zaGlwLWZvcm0gPiAqIHtcXG4gICAgbWFyZ2luOiAuMnJlbTtcXG59XFxuXFxuLnNoaXAtbmFtZSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4uc2hpcC1ib2R5IHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNoYXJjb2FsKTtcXG59XFxuXFxuLmJsb2NrIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1jaGFyY29hbCk7XFxufVxcblxcbi5ob21lLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4ucm90YXRlLWJ1dHRvbixcXG4uZGVwbG95LWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcbn1cXG5cXG4uaGVhZGVyLnJlZHVjZWQge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDEwdncsIDMuNXJlbSk7XFxuICAgIG1hcmdpbjogLjhyZW07XFxufVxcblxcbi5uYW1lLWZvcm0uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hbWUtZXJyb3IudmlzaWJsZSxcXG4ubm90aWZpZXIudmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2VhLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29vcmQudGFrZW4ge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG4uYWktYm9hcmQgLmNvb3JkLmhpdCxcXG4uYWktYm9hcmQgLmNvb3JkLm1pc3Mge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uYWktYm9hcmQgLmNvb3JkLnRha2VuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3JpbXNvbik7XFxufVxcblxcbi5zaGlwLWJvZHkudmVydGljYWwge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0NBQXNDO0lBQ3RDLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxxQ0FBcUM7SUFDckMsd0JBQXdCO0lBQ3hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7OztJQUdJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0NBQWtDO0FBQ3RDOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsT0FBTztJQUNQLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHVDQUF1QztJQUN2Qyx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1hbnRpLWZsYXNoLXdoaXRlOiBoc2woMTk1LCA1MyUsIDk0JSk7XFxuICAgIC0tY2hpbmVzZS1zaWx2ZXI6IGhzbCgwLCAwJSwgODAlKTtcXG4gICAgLS1jcmltc29uOiBoc2woMzQ4LCA4MyUsIDQ3JSk7XFxuICAgIC0tZGFyazogaHNsKDAsIDAlLCAxMiUpO1xcbiAgICAtLWRhcmstY2hhcmNvYWw6IGhzbCgwLCAwJSwgMjAlKTtcXG4gICAgLS1sYXZhbmRlci1ibHVzaDogaHNsKDM0MCwgMTAwJSwgOTclKTtcXG4gICAgLS1saWdodDogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWxpZ2h0LXJlZDogaHNsKDAsIDEwMCUsIDkwJSk7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgIFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBcXFwiRGVqYVZ1IFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hcHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgyLjJyZW0sIDEwdncsIDUuMnJlbSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5uYW1lLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcXG59XFxuXFxuLm5hbWUtZmllbGRzZXQge1xcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uYW1lLWZpZWxkc2V0ID4gKiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubmFtZS1sZWdlbmQge1xcbiAgICBtYXJnaW46IDAgMCAwIDIwcHg7XFxufVxcblxcbi5uYW1lLWlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLm5hbWUtaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLm5hbWUtZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXJlZCk7XFxufVxcblxcbi5uYW1lLWVycm9yLFxcbi5wbGF5LWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMCAuNXJlbSAuNXJlbSAuNXJlbTtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4ubm90aWZpZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEwdncsIDEuMjVyZW0pO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jaGFyY29hbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoaW5lc2Utc2lsdmVyKTtcXG59XFxuXFxuLm5vdGlmaWVyIGRpdiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5zZWEge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiAuOHJlbTtcXG4gICAgZmxleDogMTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5zZWEgPiAqIHtcXG4gICAgbWFyZ2luOiAuMjVyZW07XFxufVxcblxcbi5wbGF5ZXItYm9hcmQsXFxuLmFpLWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29vcmQge1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMWVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcGFkZGluZzogMnB4IDAgMCAycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNoaW5lc2Utc2lsdmVyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW50aS1mbGFzaC13aGl0ZSk7XFxufVxcblxcbi5haS1ib2FyZCAuY29vcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZhbmRlci1ibHVzaCk7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uaGFyYm9yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLmRvY2sge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG4uZG9jayA+ICosXFxuLnNoaXAtZm9ybSA+ICoge1xcbiAgICBtYXJnaW46IC4ycmVtO1xcbn1cXG5cXG4uc2hpcC1uYW1lIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5zaGlwLWJvZHkge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstY2hhcmNvYWwpO1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNoYXJjb2FsKTtcXG59XFxuXFxuLmhvbWUtYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uLFxcbi5kZXBsb3ktYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjJyZW07XFxufVxcblxcbi5oZWFkZXIucmVkdWNlZCB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMTB2dywgMy41cmVtKTtcXG4gICAgbWFyZ2luOiAuOHJlbTtcXG59XFxuXFxuLm5hbWUtZm9ybS5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmFtZS1lcnJvci52aXNpYmxlLFxcbi5ub3RpZmllci52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zZWEudmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb29yZC50YWtlbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbi5haS1ib2FyZCAuY29vcmQuaGl0LFxcbi5haS1ib2FyZCAuY29vcmQubWlzcyB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5haS1ib2FyZCAuY29vcmQudGFrZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcmltc29uKTtcXG59XFxuXFxuLnNoaXAtYm9keS52ZXJ0aWNhbCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kVG8ocGFyZW50LCBlbGVtZW50KSB7XG4gICAgaWYgKHBhcmVudCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGlmICgoKHR5cGVvZiBwYXJlbnQpID09PSAnb2JqZWN0JykgJiYgQXJyYXkuaXNBcnJheShlbGVtZW50KSkge1xuICAgICAgICAgICAgZWxlbWVudC5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoKHR5cGVvZiBwYXJlbnQpID09PSAnc3RyaW5nJykgJiYgQXJyYXkuaXNBcnJheShlbGVtZW50KSkge1xuICAgICAgICAgICAgZWxlbWVudC5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50KS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgodHlwZW9mIHBhcmVudCkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBwYXJlbnQpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcblxubGV0IGJhdHRsZXNoaXA7XG5cbmNvbnN0IHZhbGlkYXRvciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZUlucHV0JykudmFsdWUudHJpbSgpO1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWVFcnJvcicpO1xuXG4gICAgaWYgKChpbnB1dCB8fCAoaW5wdXQgPT09IDApKSAmJiAoKGlucHV0Lmxlbmd0aCA8PSAyMCkgJiYgKGlucHV0LnRvVXBwZXJDYXNlKCkgIT09ICdBSScpKSkge1xuICAgICAgICBlcnJvci5jbGFzc05hbWUgPSAnbmFtZS1lcnJvcic7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKS5jbGFzc0xpc3QuYWRkKCdyZWR1Y2VkJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lRm9ybScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhJykuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuXG4gICAgICAgIGJhdHRsZXNoaXAgPSBnYW1lKCk7XG4gICAgICAgIGJhdHRsZXNoaXAuc2V0UGxheWVyQW5kQm9hcmRzKGlucHV0KTtcbiAgICAgICAgYmF0dGxlc2hpcC5wcmVwVUkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvci5jbGFzc05hbWUgPSAnbmFtZS1lcnJvciB2aXNpYmxlJztcbiAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICBlcnJvci50ZXh0Q29udGVudCA9ICdBZG1pcmFsLCBzaG9ydGVuIHlvdXIgbmFtZSEnO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnRvVXBwZXJDYXNlKCkgPT09ICdBSScpIHtcbiAgICAgICAgICAgIGVycm9yLnRleHRDb250ZW50ID0gXCJBZG1pcmFsLCB5b3UgY2FuJ3QgdXNlIHRoYXQgbmFtZSFcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yLnRleHRDb250ZW50ID0gJ0FkbWlyYWwsIGVudGVyIHlvdXIgbmFtZSEnO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlbnRzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lRm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHZhbGlkYXRvcik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbGVtZW50RmFjdG9yeSh0eXBlLCBjbHNzTmFtZSwgb2JqZWN0KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgICBpZiAoY2xzc05hbWUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbHNzTmFtZTtcbiAgICB9XG5cbiAgICBpZiAob2JqZWN0KSB7XG4gICAgICAgIGlmICgodHlwZW9mIG9iamVjdCkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZSlbMF0gPT09ICdpbm5lckhUTUwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGAke09iamVjdC52YWx1ZXModmFsdWUpWzBdfWA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShPYmplY3Qua2V5cyh2YWx1ZSlbMF0sIE9iamVjdC52YWx1ZXModmFsdWUpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMob2JqZWN0KVswXSA9PT0gJ2lubmVySFRNTCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBgJHtPYmplY3QudmFsdWVzKG9iamVjdCl9YDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKE9iamVjdC5rZXlzKG9iamVjdCksIE9iamVjdC52YWx1ZXMob2JqZWN0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgbGlzdCwgeyB5QXhpcyB9IGZyb20gJy4uL2dhbWVEYXRhJztcbmltcG9ydCBzaGlwRmFjdG9yeSBmcm9tICcuL3NoaXBGYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZWJvYXJkRmFjdG9yeShhZG1pcmFsKSB7XG4gICAgY29uc3QgZmxlZXQgPSBbXTtcbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG5cbiAgICBsaXN0LmZvckVhY2goKHNoaXAsIGluZGV4KSA9PiB7XG4gICAgICAgIGZsZWV0LnB1c2goc2hpcEZhY3RvcnkobGlzdFtpbmRleF0ubmFtZSwgbGlzdFtpbmRleF0ubG9hKSk7XG4gICAgfSk7XG5cbiAgICAvLyBwdnQgPT09IHByaXZhdGVcbiAgICBjb25zdCBwdnQgPSB7XG4gICAgICAgIGdlbmVyYXRlQ29vcmRzKGF4aXMsIGluZGV4LCB5LCB4KSB7XG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGlmIChheGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmbGVldFtpbmRleF0uc2l6ZSk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHggKyBpKSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChgJHt5fSR7eCArIGl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmbGVldFtpbmRleF0uc2l6ZSk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHlBeGlzW3lBeGlzLmluZGV4T2YoeSkgKyBpXSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYCR7eUF4aXNbeUF4aXMuaW5kZXhPZih5KSArIGldfSR7eH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFsbENvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICAgICAgZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0Q29vcmRzKCkpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogc2hpcC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb29yZHM6IHNoaXAuZ2V0Q29vcmRzKCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFNoaXBDb29yZHMgPSAobmFtZSwgeSwgeCwgbmV3QXhpcykgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGZsZWV0LmZvckVhY2goKHNoaXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsQ29vcmRzID0gZ2V0QWxsQ29vcmRzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3QXhpcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcC5nZXRBeGlzKCkgIT09IG5ld0F4aXMpIHNoaXAubWFuZXV2ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZHNBcnJheSA9IHB2dC5nZW5lcmF0ZUNvb3JkcyhzaGlwLmdldEF4aXMoKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgsIHkudG9VcHBlckNhc2UoKSwgeCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29vcmRzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGR1cGxpY2F0ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkc0FycmF5LmZvckVhY2goKG5ld0Nvb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQ29vcmRzLmZvckVhY2goKHBsYWNlZENvb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGFjZWRDb29yZHMuY29vcmRzLmluY2x1ZGVzKG5ld0Nvb3JkcykpIGR1cGxpY2F0ZSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkdXBsaWNhdGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwLnNldENvb3Jkcyhjb29yZHNBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjb29yZHNBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0Q29vcmRzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSBzaGlwLmdldENvb3JkcygpO1xuICAgICAgICAgICAgICAgIGlmIChjb29yZHMuaW5jbHVkZXMoc3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdChzdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzdHJpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKHN0cmluZyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRNaXNzZWRBdHRhY2tzID0gKCkgPT4gbWlzc2VkQXR0YWNrcztcblxuICAgIGNvbnN0IGlzUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGdldEFsbENvb3JkcygpO1xuICAgICAgICBpZiAoY29vcmRzLmxlbmd0aCA9PT0gZmxlZXQubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0RlZmVhdGVkID0gKCkgPT4ge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGZsZWV0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSBjb3VudGVyICs9IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjb3VudGVyID09PSBmbGVldC5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkbWlyYWwsXG4gICAgICAgIHNldFNoaXBDb29yZHMsXG4gICAgICAgIGdldEFsbENvb3JkcyxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgZ2V0TWlzc2VkQXR0YWNrcyxcbiAgICAgICAgaXNSZWFkeSxcbiAgICAgICAgaXNEZWZlYXRlZCxcbiAgICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxheWVyRmFjdG9yeShuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcEZhY3RvcnkobmFtZSwgc2l6ZSkge1xuICAgIGxldCBheGlzID0gJ2hvcml6b250YWwnO1xuICAgIGxldCBjb29yZHM7XG4gICAgY29uc3QgcnVpbiA9IFtdO1xuXG4gICAgaWYgKHNpemUgPD0gMykgYXhpcyA9ICd2ZXJ0aWNhbCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBzaXplLFxuICAgICAgICBtYW5ldXZlcjogKCkgPT4ge1xuICAgICAgICAgICAgYXhpcyA9IChheGlzID09PSAnaG9yaXpvbnRhbCcpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QXhpczogKCkgPT4gYXhpcyxcbiAgICAgICAgc2V0Q29vcmRzOiAoYXJyYXkpID0+IHtcbiAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IHNpemUpIHtcbiAgICAgICAgICAgICAgICBjb29yZHMgPSBhcnJheTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q29vcmRzOiAoKSA9PiBjb29yZHMsXG4gICAgICAgIGhpdDogKHN0cmluZykgPT4ge1xuICAgICAgICAgICAgcnVpbi5wdXNoKHN0cmluZyk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpdHNSZWNpZXZlZDogKCkgPT4gcnVpbixcbiAgICAgICAgaXNTdW5rOiAoKSA9PiAocnVpbi5sZW5ndGggPT09IHNpemUpLFxuICAgIH07XG59XG4iLCJpbXBvcnQgcGxheWVyRmFjdG9yeSBmcm9tICcuL2ZhY3Rvcmllcy9wbGF5ZXJGYWN0b3J5JztcbmltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gJy4vZmFjdG9yaWVzL2dhbWVib2FyZEZhY3RvcnknO1xuaW1wb3J0IGFwcGVuZFRvIGZyb20gJy4vYXBwZW5kVG8nO1xuaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gJy4vZmFjdG9yaWVzL2VsZW1lbnRGYWN0b3J5JztcbmltcG9ydCBsaXN0LCB7IHlBeGlzIH0gZnJvbSAnLi9nYW1lRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWUoKSB7XG4gICAgbGV0IHBsYXllcnM7XG4gICAgbGV0IGJvYXJkcztcbiAgICBsZXQgYWlDb29yZHNPcHRpb247XG5cbiAgICBjb25zdCBwdnQgPSB7XG4gICAgICAgIGNvbG9yczogWydpbmRpZ28nLCAnZ3JlZW4nLCAnb3JhbmdlJywgJ2JsdWUnLCAndmlvbGV0J10sXG4gICAgICAgIHJlc2V0OiAoKSA9PiB7XG4gICAgICAgICAgICBwbGF5ZXJzID0gW107XG4gICAgICAgICAgICBib2FyZHMgPSBbXTtcbiAgICAgICAgICAgIGFpQ29vcmRzT3B0aW9uID0gW107XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZU5vdGlmaWVyOiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZpZXInKS5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGJhY2tUb0hvbWU6ICgpID0+IHtcbiAgICAgICAgICAgIHB2dC5yZXNldCgpO1xuICAgICAgICAgICAgcHZ0LnRvZ2dsZU5vdGlmaWVyKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJykuY2xhc3NMaXN0LnJlbW92ZSgncmVkdWNlZCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWVGb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG5vdGlmeTogKHN0cmluZykgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGlmaWVyJykuaW5uZXJIVE1MID0gc3RyaW5nO1xuICAgICAgICB9LFxuICAgICAgICBub3RpZnlQbHVzOiAoc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZpZXInKS5pbm5lckhUTUwgKz0gYDxicj4ke3N0cmluZ31gO1xuICAgICAgICB9LFxuICAgICAgICByYW5kb21JbnRlZ2VyOiAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW4sXG4gICAgICAgIGFpUmFuZG9tRGVwbG95OiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheGlzID0gWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ107XG4gICAgICAgICAgICBsaXN0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGNvbmRpdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYm9hcmRzWzFdLnNldFNoaXBDb29yZHMoc2hpcC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgeUF4aXNbcHZ0LnJhbmRvbUludGVnZXIoMCwgOSldLCBOdW1iZXIocHZ0LnJhbmRvbUludGVnZXIoMSwgMTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNbcHZ0LnJhbmRvbUludGVnZXIoMCwgMSldKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIGNvbmRpdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUdhbWVib2FyZFVJOiAoY2xzbmFtZSwgZWxlbWVudElEKSA9PiB7XG4gICAgICAgICAgICBhcHBlbmRUbygnI3NlYScsIGVsZW1lbnRGYWN0b3J5KCdkaXYnLCBjbHNuYW1lLCB7IGlkOiBlbGVtZW50SUQgfSkpO1xuICAgICAgICAgICAgbGV0IHggPSAxO1xuICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgY291bnRlciA9IDE7IGNvdW50ZXIgPD0gMTAwOyBjb3VudGVyICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZCA9IGAke3lBeGlzW3ldfSR7eH1gO1xuICAgICAgICAgICAgICAgIGlmIChhaUNvb3Jkc09wdGlvbi5sZW5ndGggPCAxMDApIGFpQ29vcmRzT3B0aW9uLnB1c2goY29vcmQpO1xuXG4gICAgICAgICAgICAgICAgYXBwZW5kVG8oYCMke2VsZW1lbnRJRH1gLCBlbGVtZW50RmFjdG9yeSgnZGl2JywgYGNvb3JkICR7Y29vcmR9YCxcbiAgICAgICAgICAgICAgICAgICAgeyBpbm5lckhUTUw6IGNvb3JkIH0pKTtcblxuICAgICAgICAgICAgICAgIHggKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSAxO1xuICAgICAgICAgICAgICAgICAgICB5ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkaXNwbGF5TWlzc2VkU2hvdHM6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllck1pc3NlZEF0dGFja3MgPSBib2FyZHNbMV0uZ2V0TWlzc2VkQXR0YWNrcygpO1xuICAgICAgICAgICAgY29uc3QgYWlNaXNzZWRBdHRhY2tzID0gYm9hcmRzWzBdLmdldE1pc3NlZEF0dGFja3MoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpZmllcicpLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgPGRpdj48c3Ryb25nPkFkbWlyYWwgJHtwbGF5ZXJzWzBdLm5hbWUudG9VcHBlckNhc2UoKX08L3N0cm9uZz4sIDxicj5cbiAgICAgICAgICAgICAgICAke3BsYXllck1pc3NlZEF0dGFja3MubGVuZ3RofVxuICAgICAgICAgICAgICAgIG1pc3NlZCBzaG90czogJHtwbGF5ZXJNaXNzZWRBdHRhY2tzfSA8YnI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Db21wdXRlciAke3BsYXllcnNbMV0ubmFtZS50b1VwcGVyQ2FzZSgpfTwvc3Ryb25nPiwgPGJyPlxuICAgICAgICAgICAgICAgICR7YWlNaXNzZWRBdHRhY2tzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICBtaXNzZWQgc2hvdHM6ICR7YWlNaXNzZWRBdHRhY2tzfTwvZGl2PmA7XG4gICAgICAgICAgICBhcHBlbmRUbygnI25vdGlmaWVyJywgZWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsICdob21lLWJ1dHRvbicsIFtcbiAgICAgICAgICAgICAgICB7IGlubmVySFRNTDogJzwgSG9tZScgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnaG9tZScgfSxcbiAgICAgICAgICAgIF0pKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJykub25jbGljayA9IHB2dC5iYWNrVG9Ib21lO1xuICAgICAgICB9LFxuICAgICAgICBjaGVja1dpbm5lcjogKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGJvYXJkc1swXS5pc0RlZmVhdGVkKCkgJiYgYm9hcmRzWzFdLmlzRGVmZWF0ZWQoKSkge1xuICAgICAgICAgICAgICAgIHB2dC5ub3RpZnkoJ0dhbWUgZW5kZWQgd2l0aCBhIGRyYXchJyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm9hcmRzWzFdLmlzRGVmZWF0ZWQoKSkge1xuICAgICAgICAgICAgICAgIHB2dC5ub3RpZnkoYEdhbWUgT3ZlciEgQWRtaXJhbCAke3BsYXllcnNbMF0ubmFtZS50b1VwcGVyQ2FzZSgpfSB3aW5zIWApO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkc1swXS5pc0RlZmVhdGVkKCkpIHtcbiAgICAgICAgICAgICAgICBwdnQubm90aWZ5KGBHYW1lIE92ZXIhIENvbXB1dGVyICR7cGxheWVyc1sxXS5uYW1lLnRvVXBwZXJDYXNlKCl9IHdpbnMhYCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhJykuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIHB2dC5kaXNwbGF5TWlzc2VkU2hvdHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWlUdXJuOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByYW5kb20gPSBwdnQucmFuZG9tSW50ZWdlcigwLCAoYWlDb29yZHNPcHRpb24ubGVuZ3RoIC0gMSkpO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tQ29vcmQgPSBhaUNvb3Jkc09wdGlvbltyYW5kb21dO1xuICAgICAgICAgICAgY29uc3QgY29vcmRJbmRleCA9IGFpQ29vcmRzT3B0aW9uLmluZGV4T2YocmFuZG9tQ29vcmQpO1xuICAgICAgICAgICAgaWYgKGNvb3JkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGFpQ29vcmRzT3B0aW9uLnNwbGljZShjb29yZEluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXJCb2FyZCAuJHtyYW5kb21Db29yZH1gKTtcbiAgICAgICAgICAgIGlmIChib2FyZHNbMF0ucmVjZWl2ZUF0dGFjayhyYW5kb21Db29yZCkpIHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3Rha2VuJywgJ2hpdCcpO1xuICAgICAgICAgICAgICAgIHRpbGUuaW5uZXJIVE1MID0gJyYjMTI4MjkzOyc7XG4gICAgICAgICAgICAgICAgcHZ0Lm5vdGlmeVBsdXMoYEFJIGZpcmVkIGluICR7cmFuZG9tQ29vcmR9LCBoaXQhICYjMTI4MjkzO2ApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmlubmVySFRNTCA9ICcmIzEyNzc1NDsnO1xuICAgICAgICAgICAgICAgIHB2dC5ub3RpZnlQbHVzKGBBSSBmaXJlZCBpbiAke3JhbmRvbUNvb3JkfSwgbWlzcyEgJiMxMjc3NTQ7YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwdnQuY2hlY2tXaW5uZXIoKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UGxheWVyQW5kQm9hcmRzID0gKGlucHV0KSA9PiB7XG4gICAgICAgIHB2dC5yZXNldCgpO1xuICAgICAgICBwbGF5ZXJzLnB1c2gocGxheWVyRmFjdG9yeShpbnB1dCkpO1xuICAgICAgICBib2FyZHMucHVzaChnYW1lYm9hcmRGYWN0b3J5KGlucHV0KSk7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXJGYWN0b3J5KCdBSScpKTtcbiAgICAgICAgYm9hcmRzLnB1c2goZ2FtZWJvYXJkRmFjdG9yeSgnQUknKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZVVJID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVySGFyYm9yJykucmVtb3ZlKCk7XG4gICAgICAgIHB2dC5ub3RpZnkoJ0dhbWUgc3RhcnRlZCEgPGJyPiBDbGljayBhbnl3aGVyZSBpbiB0aGUgcmlnaHQgZ2FtZWJvYXJkLicpO1xuICAgICAgICBwdnQuY3JlYXRlR2FtZWJvYXJkVUkoJ2FpLWJvYXJkJywgJ2FpQm9hcmQnKTtcblxuICAgICAgICBjb25zdCBjb29yZHMgPSBib2FyZHNbMV0uZ2V0QWxsQ29vcmRzKCk7XG4gICAgICAgIGNvbnN0IGFycmF5T2ZBSUNvb3JkcyA9IFtdO1xuXG4gICAgICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBjb29yZC5jb29yZHM7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKChjb21iaW5hdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGFycmF5T2ZBSUNvb3Jkcy5wdXNoKGNvbWJpbmF0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBodW5kcmVkVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYWlCb2FyZCAuY29vcmQnKTtcbiAgICAgICAgaHVuZHJlZFRpbGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb29yZCA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KCcgJylbMV07XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5T2ZBSUNvb3Jkcy5pbmNsdWRlcyhjdXJyZW50Q29vcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGFrZW4nLCAnaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUuaW5uZXJIVE1MID0gJyYjMTI4MjkzOyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZHNbMV0ucmVjZWl2ZUF0dGFjayhjdXJyZW50Q29vcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdnQubm90aWZ5KGBZb3UgZmlyZWQgaW4gJHtjdXJyZW50Q29vcmR9LCBoaXQhICYjMTI4MjkzO2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUuaW5uZXJIVE1MID0gJyYjMTI3NzU0Oyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZHNbMV0ucmVjZWl2ZUF0dGFjayhjdXJyZW50Q29vcmQpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHZ0Lm5vdGlmeShgWW91IGZpcmVkIGluICR7Y3VycmVudENvb3JkfSwgbWlzcyEgJiMxMjc3NTQ7YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHZ0LmFpVHVybigpO1xuICAgICAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJlcFVJID0gKCkgPT4ge1xuICAgICAgICBwdnQudG9nZ2xlTm90aWZpZXIoKTtcbiAgICAgICAgcHZ0Lm5vdGlmeShgQWRtaXJhbCAke3BsYXllcnNbMF0ubmFtZX0gZGVwbG95IHlvdXIgc2hpcHMhYCk7XG5cbiAgICAgICAgcHZ0LmNyZWF0ZUdhbWVib2FyZFVJKCdwbGF5ZXItYm9hcmQnLCAncGxheWVyQm9hcmQnKTtcbiAgICAgICAgYXBwZW5kVG8oJyNzZWEnLCBlbGVtZW50RmFjdG9yeSgnZGl2JywgJ2hhcmJvcicsIHsgaWQ6ICdwbGF5ZXJIYXJib3InIH0pKTtcblxuICAgICAgICBsaXN0LmZvckVhY2goKHNoaXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkb2NrTnVtID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgY29uc3QgZG9jayA9IGBkb2NrJHtkb2NrTnVtfWA7XG4gICAgICAgICAgICBjb25zdCBzaGlwQm9keSA9IGBzaGlwQm9keSR7ZG9ja051bX1gO1xuICAgICAgICAgICAgY29uc3QgZm9ybU5hbWUgPSBgc2hpcEZvcm0ke2RvY2tOdW19YDtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGBidXR0b24ke2RvY2tOdW19YDtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdFkgPSBgc2VsZWN0WSR7ZG9ja051bX1gO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0WCA9IGBzZWxlY3RYJHtkb2NrTnVtfWA7XG4gICAgICAgICAgICBjb25zdCBzdWJtaXQgPSBgc3VibWl0JHtkb2NrTnVtfWA7XG4gICAgICAgICAgICBsZXQgc2hpcEF4aXM7XG5cbiAgICAgICAgICAgIGFwcGVuZFRvKCcjcGxheWVySGFyYm9yJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnZGl2JywgJ2RvY2snLCB7IGlkOiBkb2NrIH0pKTtcbiAgICAgICAgICAgIGFwcGVuZFRvKGAjZG9jayR7ZG9ja051bX1gLCBbXG4gICAgICAgICAgICAgICAgZWxlbWVudEZhY3RvcnkoJ3AnLCAnc2hpcC1uYW1lJywgeyBpbm5lckhUTUw6IGAke3NoaXAubmFtZX0gKCR7c2hpcC5sb2F9KWAgfSksXG4gICAgICAgICAgICAgICAgZWxlbWVudEZhY3RvcnkoJ2RpdicsICdzaGlwLWJvZHknLCB7IGlkOiBzaGlwQm9keSB9KSxcbiAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnZm9ybScsICdzaGlwLWZvcm0nLCB7IGlkOiBmb3JtTmFtZSB9KSxcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICBjb25zdCBzaGlwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3NoaXBCb2R5fWApO1xuICAgICAgICAgICAgaWYgKHNoaXAubG9hIDw9IDMpIHtcbiAgICAgICAgICAgICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgICAgIHNoaXBBeGlzID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hpcEF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFwcGVuZFRvKGAjJHtmb3JtTmFtZX1gLCBbXG4gICAgICAgICAgICAgICAgZWxlbWVudEZhY3RvcnkoJ2xhYmVsJywgJycsIHsgaW5uZXJIVE1MOiAnU3RhcnRpbmcgY29vcmQ6JyB9KSxcbiAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnc2VsZWN0JywgJycsIHsgaWQ6IHNlbGVjdFkgfSksXG4gICAgICAgICAgICAgICAgZWxlbWVudEZhY3RvcnkoJ3NlbGVjdCcsICcnLCB7IGlkOiBzZWxlY3RYIH0pLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRGYWN0b3J5KCdicicsICcnKSxcbiAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnYnV0dG9uJywgJ3JvdGF0ZS1idXR0b24nLCBbXG4gICAgICAgICAgICAgICAgICAgIHsgaW5uZXJIVE1MOiAncm90YXRlJyB9LFxuICAgICAgICAgICAgICAgICAgICB7IGlkOiBidXR0b24gfSxcbiAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiAnYnV0dG9uJyB9LFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRGYWN0b3J5KCdidXR0b24nLCAnZGVwbG95LWJ1dHRvbicsIFtcbiAgICAgICAgICAgICAgICAgICAgeyBpbm5lckhUTUw6ICdkZXBsb3knIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6IHN1Ym1pdCB9LFxuICAgICAgICAgICAgICAgICAgICB7IHR5cGU6ICdzdWJtaXQnIH0sXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgeUF4aXMuZm9yRWFjaCgoYXhpcywgYXhpc0luZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgYXBwZW5kVG8oYCMke3NlbGVjdFl9YCxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEZhY3RvcnkoJ29wdGlvbicsICcnLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGlubmVySFRNTDogYXhpcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogYXhpcyB9LFxuICAgICAgICAgICAgICAgICAgICBdKSk7XG4gICAgICAgICAgICAgICAgYXBwZW5kVG8oYCMke3NlbGVjdFh9YCxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEZhY3RvcnkoJ29wdGlvbicsICcnLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGlubmVySFRNTDogYXhpc0luZGV4ICsgMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogYXhpc0luZGV4ICsgMSB9LFxuICAgICAgICAgICAgICAgICAgICBdKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcC5sb2E7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZFRvKGAjJHtzaGlwQm9keX1gLCBlbGVtZW50RmFjdG9yeSgnZGl2JywgJ2Jsb2NrJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtidXR0b259YCkub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCd2ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgICAgIGlmIChzaGlwRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcEF4aXMgPSAndmVydGljYWwnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBBeGlzID0gJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3N1Ym1pdH1gKS5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c2VsZWN0WX1gKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB4VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzZWxlY3RYfWApLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYm9hcmRzWzBdLnNldFNoaXBDb29yZHMoc2hpcC5uYW1lLCB5VmFsdWUsIE51bWJlcih4VmFsdWUpLCBzaGlwQXhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBwdnQubm90aWZ5KGAke3NoaXAubmFtZS50b1VwcGVyQ2FzZSgpfSBkZXBsb3llZCEgJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RvY2t9YCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyQm9hcmQgLiR7Y29vcmR9YCkuY2xhc3NMaXN0LmFkZCgndGFrZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXJCb2FyZCAuJHtjb29yZH1gKS5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iYWNrZ3JvdW5kQ29sb3IgPSBwdnQuY29sb3JzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHZ0Lm5vdGlmeShgRmFpbGVkIHRvIGRlcGxveSAke3NoaXAubmFtZS50b1VwcGVyQ2FzZSgpfSFgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkc1swXS5pc1JlYWR5KCkpIHB2dC5haVJhbmRvbURlcGxveSgpO1xuICAgICAgICAgICAgICAgIGlmIChib2FyZHNbMV0uaXNSZWFkeSgpKSB1cGRhdGVVSSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFBsYXllckFuZEJvYXJkcyxcbiAgICAgICAgcHJlcFVJLFxuICAgIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBPYmplY3QuZnJlZXplKFtcbiAgICB7IG5hbWU6ICdjYXJyaWVyJywgbG9hOiA1IH0sXG4gICAgeyBuYW1lOiAnYmF0dGxlc2hpcCcsIGxvYTogNCB9LFxuICAgIHsgbmFtZTogJ2Rlc3Ryb3llcicsIGxvYTogMyB9LFxuICAgIHsgbmFtZTogJ3N1Ym1hcmluZScsIGxvYTogMyB9LFxuICAgIHsgbmFtZTogJ3BhdHJvbCBib2F0JywgbG9hOiAyIH0sXG5dKTtcblxuZXhwb3J0IGNvbnN0IHlBeGlzID0gT2JqZWN0LmZyZWV6ZShbXG4gICAgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLFxuXSk7XG4iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi9mYWN0b3JpZXMvZWxlbWVudEZhY3RvcnknO1xuaW1wb3J0IGFwcGVuZFRvIGZyb20gJy4vYXBwZW5kVG8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAvLyBzZXQgbGFuZ3VhZ2VcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc2V0QXR0cmlidXRlKCdsYW5nJywgJ2VuJyk7XG4gICAgLy8gY3JlYXRlIGFwcCBtYWluIGNvbnRhaW5lclxuICAgIGFwcGVuZFRvKCdib2R5JywgZWxlbWVudEZhY3RvcnkoJ2RpdicsICdhcHAnLCB7IGlkOiAnYXBwJyB9KSk7XG4gICAgLy8gY3JlYXRlIGhlYWRlciwgZm9ybSBhbmQgZGl2XG4gICAgYXBwZW5kVG8oJyNhcHAnLCBbXG4gICAgICAgIGVsZW1lbnRGYWN0b3J5KCdoMScsICdoZWFkZXInLCBbXG4gICAgICAgICAgICB7IGlkOiAnaGVhZGVyJyB9LFxuICAgICAgICAgICAgeyBpbm5lckhUTUw6ICdiYXR0bGUmc2h5O3NoaXAnIH1dKSxcbiAgICAgICAgZWxlbWVudEZhY3RvcnkoJ2Zvcm0nLCAnbmFtZS1mb3JtJywgW1xuICAgICAgICAgICAgeyBpZDogJ25hbWVGb3JtJyB9LFxuICAgICAgICAgICAgeyBub3ZhbGlkYXRlOiAnJyB9XSksXG4gICAgICAgIGVsZW1lbnRGYWN0b3J5KCdoMicsICdub3RpZmllcicsIHsgaWQ6ICdub3RpZmllcicgfSksXG4gICAgICAgIGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnc2VhJywgeyBpZDogJ3NlYScgfSksXG4gICAgXSk7XG4gICAgLy8gY3JlYXRlIGZpZWxkc2V0XG4gICAgYXBwZW5kVG8oJyNuYW1lRm9ybScsIGVsZW1lbnRGYWN0b3J5KCdmaWVsZHNldCcsICduYW1lLWZpZWxkc2V0JyxcbiAgICAgICAgeyBpZDogJ25hbWVGaWVsZHNldCcgfSkpO1xuICAgIC8vIGNyZWF0ZSBpbnB1dCBmb3IgbmFtZVxuICAgIGFwcGVuZFRvKCcjbmFtZUZpZWxkc2V0JywgW1xuICAgICAgICBlbGVtZW50RmFjdG9yeSgnbGVnZW5kJywgJ25hbWUtbGVnZW5kJywgeyBpbm5lckhUTUw6ICdOYW1lOicgfSksXG4gICAgICAgIGVsZW1lbnRGYWN0b3J5KCdpbnB1dCcsICduYW1lLWlucHV0JywgW1xuICAgICAgICAgICAgeyBpZDogJ25hbWVJbnB1dCcgfSxcbiAgICAgICAgXSksXG4gICAgXSk7XG4gICAgLy8gY3JlYXRlIHNtYWxsIHRhZyBmb3IgaW5wdXQgZXJyb3JcbiAgICBhcHBlbmRUbygnI25hbWVGaWVsZHNldCcsIGVsZW1lbnRGYWN0b3J5KCdzbWFsbCcsICduYW1lLWVycm9yJywgeyBpZDogJ25hbWVFcnJvcicgfSkpO1xuICAgIC8vIGNyZWF0ZSBwbGF5IGJ1dHRvblxuICAgIGFwcGVuZFRvKCcjbmFtZUZpZWxkc2V0JywgZWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsICdwbGF5LWJ1dHRvbicsIFtcbiAgICAgICAgeyBpZDogJ3BsYXlCdXR0b24nIH0sXG4gICAgICAgIHsgaW5uZXJIVE1MOiAncGxheScgfSxcbiAgICBdKSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0IHNldHVwIGZyb20gJy4vc3RhdGljJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuXG5zZXR1cCgpO1xuZXZlbnRzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=