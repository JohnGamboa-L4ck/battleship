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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUVBQWM7QUFDdEIsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBUSxrQkFBa0IscUVBQWMsMEJBQTBCLGlCQUFpQjtBQUN2RjtBQUNBLElBQUkscURBQVEsa0JBQWtCLHFFQUFjO0FBQzVDLFVBQVUsa0JBQWtCO0FBQzVCLFVBQVUsbUJBQW1CO0FBQzdCO0FBQ0E7Ozs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnlCO0FBQ0k7QUFDQzs7QUFFOUIsbURBQUs7QUFDTCxtREFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9hcHBlbmRUby5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2ZhY3Rvcmllcy9lbGVtZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2ZhY3Rvcmllcy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZmFjdG9yaWVzL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9mYWN0b3JpZXMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZURhdGEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zdGF0aWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1hbnRpLWZsYXNoLXdoaXRlOiBoc2woMTk1LCA1MyUsIDk0JSk7XFxuICAgIC0tY2hpbmVzZS1zaWx2ZXI6IGhzbCgwLCAwJSwgODAlKTtcXG4gICAgLS1jcmltc29uOiBoc2woMzQ4LCA4MyUsIDQ3JSk7XFxuICAgIC0tZGFyazogaHNsKDAsIDAlLCAxMiUpO1xcbiAgICAtLWRhcmstY2hhcmNvYWw6IGhzbCgwLCAwJSwgMjAlKTtcXG4gICAgLS1sYXZhbmRlci1ibHVzaDogaHNsKDM0MCwgMTAwJSwgOTclKTtcXG4gICAgLS1saWdodDogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWxpZ2h0LXJlZDogaHNsKDAsIDEwMCUsIDkwJSk7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgIFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBcXFwiRGVqYVZ1IFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hcHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgyLjJyZW0sIDEwdncsIDUuMnJlbSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5uYW1lLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcXG59XFxuXFxuLm5hbWUtZmllbGRzZXQge1xcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uYW1lLWZpZWxkc2V0ID4gKiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubmFtZS1sZWdlbmQge1xcbiAgICBtYXJnaW46IDAgMCAwIDIwcHg7XFxufVxcblxcbi5uYW1lLWlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLm5hbWUtaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLm5hbWUtZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXJlZCk7XFxufVxcblxcbi5uYW1lLWVycm9yLFxcbi5wbGF5LWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMCAuNXJlbSAuNXJlbSAuNXJlbTtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4ubm90aWZpZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEwdncsIDEuMjVyZW0pO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jaGFyY29hbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoaW5lc2Utc2lsdmVyKTtcXG59XFxuXFxuLm5vdGlmaWVyIGRpdiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5zZWEge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiAuOHJlbTtcXG4gICAgZmxleDogMTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5zZWEgPiAqIHtcXG4gICAgbWFyZ2luOiAuMjVyZW07XFxufVxcblxcbi5wbGF5ZXItYm9hcmQsXFxuLmFpLWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29vcmQge1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMWVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcGFkZGluZzogMnB4IDAgMCAycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNoaW5lc2Utc2lsdmVyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW50aS1mbGFzaC13aGl0ZSk7XFxufVxcblxcbi5haS1ib2FyZCAuY29vcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZhbmRlci1ibHVzaCk7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uaGFyYm9yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLmRvY2sge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG4uZG9jayA+ICosXFxuLnNoaXAtZm9ybSA+ICoge1xcbiAgICBtYXJnaW46IC4ycmVtO1xcbn1cXG5cXG4uc2hpcC1uYW1lIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5zaGlwLWJvZHkge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstY2hhcmNvYWwpO1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNoYXJjb2FsKTtcXG59XFxuXFxuLmhvbWUtYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5yb3RhdGUtYnV0dG9uLFxcbi5kZXBsb3ktYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjJyZW07XFxufVxcblxcbi5oZWFkZXIucmVkdWNlZCB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMTB2dywgMy41cmVtKTtcXG4gICAgbWFyZ2luOiAuOHJlbTtcXG59XFxuXFxuLm5hbWUtZm9ybS5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmFtZS1lcnJvci52aXNpYmxlLFxcbi5ub3RpZmllci52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zZWEudmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb29yZC50YWtlbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbi5haS1ib2FyZCAuY29vcmQuaGl0LFxcbi5haS1ib2FyZCAuY29vcmQubWlzcyB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5haS1ib2FyZCAuY29vcmQudGFrZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcmltc29uKTtcXG59XFxuXFxuLnNoaXAtYm9keS52ZXJ0aWNhbCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLHFDQUFxQztJQUNyQyx3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0ksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsdUNBQXVDO0lBQ3ZDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWFudGktZmxhc2gtd2hpdGU6IGhzbCgxOTUsIDUzJSwgOTQlKTtcXG4gICAgLS1jaGluZXNlLXNpbHZlcjogaHNsKDAsIDAlLCA4MCUpO1xcbiAgICAtLWNyaW1zb246IGhzbCgzNDgsIDgzJSwgNDclKTtcXG4gICAgLS1kYXJrOiBoc2woMCwgMCUsIDEyJSk7XFxuICAgIC0tZGFyay1jaGFyY29hbDogaHNsKDAsIDAlLCAyMCUpO1xcbiAgICAtLWxhdmFuZGVyLWJsdXNoOiBoc2woMzQwLCAxMDAlLCA5NyUpO1xcbiAgICAtLWxpZ2h0OiBoc2woMCwgMCUsIDkyJSk7XFxuICAgIC0tbGlnaHQtcmVkOiBoc2woMCwgMTAwJSwgOTAlKTtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyAgXFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSxcXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFxcXCJEZWphVnUgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFwcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDIuMnJlbSwgMTB2dywgNS4ycmVtKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLm5hbWUtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcbn1cXG5cXG4ubmFtZS1maWVsZHNldCB7XFxuICAgIG1heC13aWR0aDogMzIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm5hbWUtZmllbGRzZXQgPiAqIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5uYW1lLWxlZ2VuZCB7XFxuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcXG59XFxuXFxuLm5hbWUtaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogLjVyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4ubmFtZS1pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4ubmFtZS1lcnJvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcmVkKTtcXG59XFxuXFxuLm5hbWUtZXJyb3IsXFxuLnBsYXktYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwIC41cmVtIC41cmVtIC41cmVtO1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5ub3RpZmllciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMTB2dywgMS4yNXJlbSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNoYXJjb2FsKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hpbmVzZS1zaWx2ZXIpO1xcbn1cXG5cXG4ubm90aWZpZXIgZGl2IHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnNlYSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IC44cmVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnNlYSA+ICoge1xcbiAgICBtYXJnaW46IC4yNXJlbTtcXG59XFxuXFxuLnBsYXllci1ib2FyZCxcXG4uYWktYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb29yZCB7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwYWRkaW5nOiAycHggMCAwIDJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2hpbmVzZS1zaWx2ZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbnRpLWZsYXNoLXdoaXRlKTtcXG59XFxuXFxuLmFpLWJvYXJkIC5jb29yZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmFuZGVyLWJsdXNoKTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5oYXJib3Ige1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4uZG9jayB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG4gICAgbWluLWhlaWdodDogMTIwcHg7XFxufVxcblxcbi5kb2NrID4gKixcXG4uc2hpcC1mb3JtID4gKiB7XFxuICAgIG1hcmdpbjogLjJyZW07XFxufVxcblxcbi5zaGlwLW5hbWUge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnNoaXAtYm9keSB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1jaGFyY29hbCk7XFxufVxcblxcbi5ibG9jayB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstY2hhcmNvYWwpO1xcbn1cXG5cXG4uaG9tZS1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLnJvdGF0ZS1idXR0b24sXFxuLmRlcGxveS1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMnJlbTtcXG59XFxuXFxuLmhlYWRlci5yZWR1Y2VkIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCAxMHZ3LCAzLjVyZW0pO1xcbiAgICBtYXJnaW46IC44cmVtO1xcbn1cXG5cXG4ubmFtZS1mb3JtLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYW1lLWVycm9yLnZpc2libGUsXFxuLm5vdGlmaWVyLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNlYS52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNvb3JkLnRha2VuIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XFxuXFxuLmFpLWJvYXJkIC5jb29yZC5oaXQsXFxuLmFpLWJvYXJkIC5jb29yZC5taXNzIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmFpLWJvYXJkIC5jb29yZC50YWtlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyaW1zb24pO1xcbn1cXG5cXG4uc2hpcC1ib2R5LnZlcnRpY2FsIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRUbyhwYXJlbnQsIGVsZW1lbnQpIHtcbiAgICBpZiAocGFyZW50ICYmIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCgodHlwZW9mIHBhcmVudCkgPT09ICdvYmplY3QnKSAmJiBBcnJheS5pc0FycmF5KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCgodHlwZW9mIHBhcmVudCkgPT09ICdzdHJpbmcnKSAmJiBBcnJheS5pc0FycmF5KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCh0eXBlb2YgcGFyZW50KSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICgodHlwZW9mIHBhcmVudCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnO1xuXG5sZXQgYmF0dGxlc2hpcDtcblxuY29uc3QgdmFsaWRhdG9yID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lSW5wdXQnKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZUVycm9yJyk7XG5cbiAgICBpZiAoKGlucHV0IHx8IChpbnB1dCA9PT0gMCkpICYmICgoaW5wdXQubGVuZ3RoIDw9IDIwKSAmJiAoaW5wdXQudG9VcHBlckNhc2UoKSAhPT0gJ0FJJykpKSB7XG4gICAgICAgIGVycm9yLmNsYXNzTmFtZSA9ICduYW1lLWVycm9yJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpLmNsYXNzTGlzdC5hZGQoJ3JlZHVjZWQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWVGb3JtJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWEnKS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG5cbiAgICAgICAgYmF0dGxlc2hpcCA9IGdhbWUoKTtcbiAgICAgICAgYmF0dGxlc2hpcC5zZXRQbGF5ZXJBbmRCb2FyZHMoaW5wdXQpO1xuICAgICAgICBiYXR0bGVzaGlwLnByZXBVSSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yLmNsYXNzTmFtZSA9ICduYW1lLWVycm9yIHZpc2libGUnO1xuICAgICAgICBpZiAoaW5wdXQubGVuZ3RoID4gMjApIHtcbiAgICAgICAgICAgIGVycm9yLnRleHRDb250ZW50ID0gJ0FkbWlyYWwsIHNob3J0ZW4geW91ciBuYW1lISc7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQudG9VcHBlckNhc2UoKSA9PT0gJ0FJJykge1xuICAgICAgICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSBcIkFkbWlyYWwsIHlvdSBjYW4ndCB1c2UgdGhhdCBuYW1lIVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnQWRtaXJhbCwgZW50ZXIgeW91ciBuYW1lISc7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBldmVudHMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWVGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdmFsaWRhdG9yKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVsZW1lbnRGYWN0b3J5KHR5cGUsIGNsc3NOYW1lLCBvYmplY3QpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICAgIGlmIChjbHNzTmFtZSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsc3NOYW1lO1xuICAgIH1cblxuICAgIGlmIChvYmplY3QpIHtcbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0KSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3QuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlKVswXSA9PT0gJ2lubmVySFRNTCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYCR7T2JqZWN0LnZhbHVlcyh2YWx1ZSlbMF19YDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKE9iamVjdC5rZXlzKHZhbHVlKVswXSwgT2JqZWN0LnZhbHVlcyh2YWx1ZSlbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhvYmplY3QpWzBdID09PSAnaW5uZXJIVE1MJykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGAke09iamVjdC52YWx1ZXMob2JqZWN0KX1gO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoT2JqZWN0LmtleXMob2JqZWN0KSwgT2JqZWN0LnZhbHVlcyhvYmplY3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCBsaXN0LCB7IHlBeGlzIH0gZnJvbSAnLi4vZ2FtZURhdGEnO1xuaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gJy4vc2hpcEZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lYm9hcmRGYWN0b3J5KGFkbWlyYWwpIHtcbiAgICBjb25zdCBmbGVldCA9IFtdO1xuICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcblxuICAgIGxpc3QuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgZmxlZXQucHVzaChzaGlwRmFjdG9yeShsaXN0W2luZGV4XS5uYW1lLCBsaXN0W2luZGV4XS5sb2EpKTtcbiAgICB9KTtcblxuICAgIC8vIHB2dCA9PT0gcHJpdmF0ZVxuICAgIGNvbnN0IHB2dCA9IHtcbiAgICAgICAgZ2VuZXJhdGVDb29yZHMoYXhpcywgaW5kZXgsIHksIHgpIHtcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICAgICAgaWYgKGF4aXMgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGZsZWV0W2luZGV4XS5zaXplKTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoeCArIGkpID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGAke3l9JHt4ICsgaX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGZsZWV0W2luZGV4XS5zaXplKTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoeUF4aXNbeUF4aXMuaW5kZXhPZih5KSArIGldKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChgJHt5QXhpc1t5QXhpcy5pbmRleE9mKHkpICsgaV19JHt4fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QWxsQ29vcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgICAgICBmbGVldC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5nZXRDb29yZHMoKSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBzaGlwLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkczogc2hpcC5nZXRDb29yZHMoKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0U2hpcENvb3JkcyA9IChuYW1lLCB5LCB4LCBuZXdBeGlzKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgZmxlZXQuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxDb29yZHMgPSBnZXRBbGxDb29yZHMoKTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXdBeGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwLmdldEF4aXMoKSAhPT0gbmV3QXhpcykgc2hpcC5tYW5ldXZlcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3Jkc0FycmF5ID0gcHZ0LmdlbmVyYXRlQ29vcmRzKHNoaXAuZ2V0QXhpcygpLFxuICAgICAgICAgICAgICAgICAgICBpbmRleCwgeS50b1VwcGVyQ2FzZSgpLCB4KTtcblxuICAgICAgICAgICAgICAgIGlmIChjb29yZHNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZHVwbGljYXRlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzQXJyYXkuZm9yRWFjaCgobmV3Q29vcmRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxDb29yZHMuZm9yRWFjaCgocGxhY2VkQ29vcmRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYWNlZENvb3Jkcy5jb29yZHMuaW5jbHVkZXMobmV3Q29vcmRzKSkgZHVwbGljYXRlICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGR1cGxpY2F0ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXAuc2V0Q29vcmRzKGNvb3Jkc0FycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvb3Jkc0FycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBmbGVldC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5nZXRDb29yZHMoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHNoaXAuZ2V0Q29vcmRzKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvb3Jkcy5pbmNsdWRlcyhzdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KHN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHN0cmluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtaXNzZWRBdHRhY2tzLnB1c2goc3RyaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE1pc3NlZEF0dGFja3MgPSAoKSA9PiBtaXNzZWRBdHRhY2tzO1xuXG4gICAgY29uc3QgaXNSZWFkeSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmRzID0gZ2V0QWxsQ29vcmRzKCk7XG4gICAgICAgIGlmIChjb29yZHMubGVuZ3RoID09PSBmbGVldC5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzRGVmZWF0ZWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIGNvdW50ZXIgKz0gMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvdW50ZXIgPT09IGZsZWV0Lmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRtaXJhbCxcbiAgICAgICAgc2V0U2hpcENvb3JkcyxcbiAgICAgICAgZ2V0QWxsQ29vcmRzLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBnZXRNaXNzZWRBdHRhY2tzLFxuICAgICAgICBpc1JlYWR5LFxuICAgICAgICBpc0RlZmVhdGVkLFxuICAgIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5ZXJGYWN0b3J5KG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwRmFjdG9yeShuYW1lLCBzaXplKSB7XG4gICAgbGV0IGF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgbGV0IGNvb3JkcztcbiAgICBjb25zdCBydWluID0gW107XG5cbiAgICBpZiAoc2l6ZSA8PSAzKSBheGlzID0gJ3ZlcnRpY2FsJztcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHNpemUsXG4gICAgICAgIG1hbmV1dmVyOiAoKSA9PiB7XG4gICAgICAgICAgICBheGlzID0gKGF4aXMgPT09ICdob3Jpem9udGFsJykgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgICB9LFxuICAgICAgICBnZXRBeGlzOiAoKSA9PiBheGlzLFxuICAgICAgICBzZXRDb29yZHM6IChhcnJheSkgPT4ge1xuICAgICAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gc2l6ZSkge1xuICAgICAgICAgICAgICAgIGNvb3JkcyA9IGFycmF5O1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDb29yZHM6ICgpID0+IGNvb3JkcyxcbiAgICAgICAgaGl0OiAoc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBydWluLnB1c2goc3RyaW5nKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGl0c1JlY2lldmVkOiAoKSA9PiBydWluLFxuICAgICAgICBpc1N1bms6ICgpID0+IChydWluLmxlbmd0aCA9PT0gc2l6ZSksXG4gICAgfTtcbn1cbiIsImltcG9ydCBwbGF5ZXJGYWN0b3J5IGZyb20gJy4vZmFjdG9yaWVzL3BsYXllckZhY3RvcnknO1xuaW1wb3J0IGdhbWVib2FyZEZhY3RvcnkgZnJvbSAnLi9mYWN0b3JpZXMvZ2FtZWJvYXJkRmFjdG9yeSc7XG5pbXBvcnQgYXBwZW5kVG8gZnJvbSAnLi9hcHBlbmRUbyc7XG5pbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi9mYWN0b3JpZXMvZWxlbWVudEZhY3RvcnknO1xuaW1wb3J0IGxpc3QsIHsgeUF4aXMgfSBmcm9tICcuL2dhbWVEYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZSgpIHtcbiAgICBsZXQgcGxheWVycztcbiAgICBsZXQgYm9hcmRzO1xuICAgIGxldCBhaUNvb3Jkc09wdGlvbjtcblxuICAgIGNvbnN0IHB2dCA9IHtcbiAgICAgICAgY29sb3JzOiBbJ2luZGlnbycsICdncmVlbicsICdvcmFuZ2UnLCAnYmx1ZScsICd2aW9sZXQnXSxcbiAgICAgICAgcmVzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHBsYXllcnMgPSBbXTtcbiAgICAgICAgICAgIGJvYXJkcyA9IFtdO1xuICAgICAgICAgICAgYWlDb29yZHNPcHRpb24gPSBbXTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWEnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlTm90aWZpZXI6ICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpZmllcicpLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmFja1RvSG9tZTogKCkgPT4ge1xuICAgICAgICAgICAgcHZ0LnJlc2V0KCk7XG4gICAgICAgICAgICBwdnQudG9nZ2xlTm90aWZpZXIoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdyZWR1Y2VkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZUZvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfSxcbiAgICAgICAgbm90aWZ5OiAoc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZpZXInKS5pbm5lckhUTUwgPSBzdHJpbmc7XG4gICAgICAgIH0sXG4gICAgICAgIG5vdGlmeVBsdXM6IChzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpZmllcicpLmlubmVySFRNTCArPSBgPGJyPiR7c3RyaW5nfWA7XG4gICAgICAgIH0sXG4gICAgICAgIHJhbmRvbUludGVnZXI6IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbixcbiAgICAgICAgYWlSYW5kb21EZXBsb3k6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBbJ2hvcml6b250YWwnLCAndmVydGljYWwnXTtcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoY29uZGl0aW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBib2FyZHNbMV0uc2V0U2hpcENvb3JkcyhzaGlwLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB5QXhpc1twdnQucmFuZG9tSW50ZWdlcigwLCA5KV0sIE51bWJlcihwdnQucmFuZG9tSW50ZWdlcigxLCAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpc1twdnQucmFuZG9tSW50ZWdlcigwLCAxKV0pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkgY29uZGl0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlR2FtZWJvYXJkVUk6IChjbHNuYW1lLCBlbGVtZW50SUQpID0+IHtcbiAgICAgICAgICAgIGFwcGVuZFRvKCcjc2VhJywgZWxlbWVudEZhY3RvcnkoJ2RpdicsIGNsc25hbWUsIHsgaWQ6IGVsZW1lbnRJRCB9KSk7XG4gICAgICAgICAgICBsZXQgeCA9IDE7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBjb3VudGVyID0gMTsgY291bnRlciA8PSAxMDA7IGNvdW50ZXIgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gYCR7eUF4aXNbeV19JHt4fWA7XG4gICAgICAgICAgICAgICAgaWYgKGFpQ29vcmRzT3B0aW9uLmxlbmd0aCA8IDEwMCkgYWlDb29yZHNPcHRpb24ucHVzaChjb29yZCk7XG5cbiAgICAgICAgICAgICAgICBhcHBlbmRUbyhgIyR7ZWxlbWVudElEfWAsIGVsZW1lbnRGYWN0b3J5KCdkaXYnLCBgY29vcmQgJHtjb29yZH1gLFxuICAgICAgICAgICAgICAgICAgICB7IGlubmVySFRNTDogY29vcmQgfSkpO1xuXG4gICAgICAgICAgICAgICAgeCArPSAxO1xuICAgICAgICAgICAgICAgIGlmICh4ID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHkgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BsYXlNaXNzZWRTaG90czogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyTWlzc2VkQXR0YWNrcyA9IGJvYXJkc1sxXS5nZXRNaXNzZWRBdHRhY2tzKCk7XG4gICAgICAgICAgICBjb25zdCBhaU1pc3NlZEF0dGFja3MgPSBib2FyZHNbMF0uZ2V0TWlzc2VkQXR0YWNrcygpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGlmaWVyJykuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICA8ZGl2PjxzdHJvbmc+QWRtaXJhbCAke3BsYXllcnNbMF0ubmFtZS50b1VwcGVyQ2FzZSgpfTwvc3Ryb25nPiwgPGJyPlxuICAgICAgICAgICAgICAgICR7cGxheWVyTWlzc2VkQXR0YWNrcy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgbWlzc2VkIHNob3RzOiAke3BsYXllck1pc3NlZEF0dGFja3N9IDxicj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkNvbXB1dGVyICR7cGxheWVyc1sxXS5uYW1lLnRvVXBwZXJDYXNlKCl9PC9zdHJvbmc+LCA8YnI+XG4gICAgICAgICAgICAgICAgJHthaU1pc3NlZEF0dGFja3MubGVuZ3RofVxuICAgICAgICAgICAgICAgIG1pc3NlZCBzaG90czogJHthaU1pc3NlZEF0dGFja3N9PC9kaXY+YDtcbiAgICAgICAgICAgIGFwcGVuZFRvKCcjbm90aWZpZXInLCBlbGVtZW50RmFjdG9yeSgnYnV0dG9uJywgJ2hvbWUtYnV0dG9uJywgW1xuICAgICAgICAgICAgICAgIHsgaW5uZXJIVE1MOiAnPCBIb21lJyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdob21lJyB9LFxuICAgICAgICAgICAgXSkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKS5vbmNsaWNrID0gcHZ0LmJhY2tUb0hvbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrV2lubmVyOiAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoYm9hcmRzWzBdLmlzRGVmZWF0ZWQoKSAmJiBib2FyZHNbMV0uaXNEZWZlYXRlZCgpKSB7XG4gICAgICAgICAgICAgICAgcHZ0Lm5vdGlmeSgnR2FtZSBlbmRlZCB3aXRoIGEgZHJhdyEnKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChib2FyZHNbMV0uaXNEZWZlYXRlZCgpKSB7XG4gICAgICAgICAgICAgICAgcHZ0Lm5vdGlmeShgR2FtZSBPdmVyISBBZG1pcmFsICR7cGxheWVyc1swXS5uYW1lLnRvVXBwZXJDYXNlKCl9IHdpbnMhYCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm9hcmRzWzBdLmlzRGVmZWF0ZWQoKSkge1xuICAgICAgICAgICAgICAgIHB2dC5ub3RpZnkoYEdhbWUgT3ZlciEgQ29tcHV0ZXIgJHtwbGF5ZXJzWzFdLm5hbWUudG9VcHBlckNhc2UoKX0gd2lucyFgKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWEnKS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgcHZ0LmRpc3BsYXlNaXNzZWRTaG90cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhaVR1cm46ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbSA9IHB2dC5yYW5kb21JbnRlZ2VyKDAsIChhaUNvb3Jkc09wdGlvbi5sZW5ndGggLSAxKSk7XG4gICAgICAgICAgICBjb25zdCByYW5kb21Db29yZCA9IGFpQ29vcmRzT3B0aW9uW3JhbmRvbV07XG4gICAgICAgICAgICBjb25zdCBjb29yZEluZGV4ID0gYWlDb29yZHNPcHRpb24uaW5kZXhPZihyYW5kb21Db29yZCk7XG4gICAgICAgICAgICBpZiAoY29vcmRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgYWlDb29yZHNPcHRpb24uc3BsaWNlKGNvb3JkSW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllckJvYXJkIC4ke3JhbmRvbUNvb3JkfWApO1xuICAgICAgICAgICAgaWYgKGJvYXJkc1swXS5yZWNlaXZlQXR0YWNrKHJhbmRvbUNvb3JkKSkge1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGFrZW4nLCAnaGl0Jyk7XG4gICAgICAgICAgICAgICAgdGlsZS5pbm5lckhUTUwgPSAnJiMxMjgyOTM7JztcbiAgICAgICAgICAgICAgICBwdnQubm90aWZ5UGx1cyhgQUkgZmlyZWQgaW4gJHtyYW5kb21Db29yZH0sIGhpdCEgJiMxMjgyOTM7YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgICAgIHRpbGUuaW5uZXJIVE1MID0gJyYjMTI3NzU0Oyc7XG4gICAgICAgICAgICAgICAgcHZ0Lm5vdGlmeVBsdXMoYEFJIGZpcmVkIGluICR7cmFuZG9tQ29vcmR9LCBtaXNzISAmIzEyNzc1NDtgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB2dC5jaGVja1dpbm5lcigpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBzZXRQbGF5ZXJBbmRCb2FyZHMgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgcHZ0LnJlc2V0KCk7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXJGYWN0b3J5KGlucHV0KSk7XG4gICAgICAgIGJvYXJkcy5wdXNoKGdhbWVib2FyZEZhY3RvcnkoaW5wdXQpKTtcbiAgICAgICAgcGxheWVycy5wdXNoKHBsYXllckZhY3RvcnkoJ0FJJykpO1xuICAgICAgICBib2FyZHMucHVzaChnYW1lYm9hcmRGYWN0b3J5KCdBSScpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlVUkgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJIYXJib3InKS5yZW1vdmUoKTtcbiAgICAgICAgcHZ0Lm5vdGlmeSgnR2FtZSBzdGFydGVkISA8YnI+IENsaWNrIGFueXdoZXJlIGluIHRoZSByaWdodCBnYW1lYm9hcmQuJyk7XG4gICAgICAgIHB2dC5jcmVhdGVHYW1lYm9hcmRVSSgnYWktYm9hcmQnLCAnYWlCb2FyZCcpO1xuXG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGJvYXJkc1sxXS5nZXRBbGxDb29yZHMoKTtcbiAgICAgICAgY29uc3QgYXJyYXlPZkFJQ29vcmRzID0gW107XG5cbiAgICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcnJheSA9IGNvb3JkLmNvb3JkcztcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goKGNvbWJpbmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgYXJyYXlPZkFJQ29vcmRzLnB1c2goY29tYmluYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGh1bmRyZWRUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNhaUJvYXJkIC5jb29yZCcpO1xuICAgICAgICBodW5kcmVkVGlsZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudENvb3JkID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoJyAnKVsxXTtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlPZkFJQ29vcmRzLmluY2x1ZGVzKGN1cnJlbnRDb29yZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0YWtlbicsICdoaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5pbm5lckhUTUwgPSAnJiMxMjgyOTM7JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkc1sxXS5yZWNlaXZlQXR0YWNrKGN1cnJlbnRDb29yZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB2dC5ub3RpZnkoYFlvdSBmaXJlZCBpbiAke2N1cnJlbnRDb29yZH0sIGhpdCEgJiMxMjgyOTM7YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5pbm5lckhUTUwgPSAnJiMxMjc3NTQ7JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkc1sxXS5yZWNlaXZlQXR0YWNrKGN1cnJlbnRDb29yZCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdnQubm90aWZ5KGBZb3UgZmlyZWQgaW4gJHtjdXJyZW50Q29vcmR9LCBtaXNzISAmIzEyNzc1NDtgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwdnQuYWlUdXJuKCk7XG4gICAgICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBwcmVwVUkgPSAoKSA9PiB7XG4gICAgICAgIHB2dC50b2dnbGVOb3RpZmllcigpO1xuICAgICAgICBwdnQubm90aWZ5KGBBZG1pcmFsICR7cGxheWVyc1swXS5uYW1lfSBkZXBsb3kgeW91ciBzaGlwcyFgKTtcblxuICAgICAgICBwdnQuY3JlYXRlR2FtZWJvYXJkVUkoJ3BsYXllci1ib2FyZCcsICdwbGF5ZXJCb2FyZCcpO1xuICAgICAgICBhcHBlbmRUbygnI3NlYScsIGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnaGFyYm9yJywgeyBpZDogJ3BsYXllckhhcmJvcicgfSkpO1xuXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRvY2tOdW0gPSBpbmRleCArIDE7XG4gICAgICAgICAgICBjb25zdCBkb2NrID0gYGRvY2ske2RvY2tOdW19YDtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBCb2R5ID0gYHNoaXBCb2R5JHtkb2NrTnVtfWA7XG4gICAgICAgICAgICBjb25zdCBmb3JtTmFtZSA9IGBzaGlwRm9ybSR7ZG9ja051bX1gO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gYGJ1dHRvbiR7ZG9ja051bX1gO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0WSA9IGBzZWxlY3RZJHtkb2NrTnVtfWA7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RYID0gYHNlbGVjdFgke2RvY2tOdW19YDtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IGBzdWJtaXQke2RvY2tOdW19YDtcbiAgICAgICAgICAgIGxldCBzaGlwQXhpcztcblxuICAgICAgICAgICAgYXBwZW5kVG8oJyNwbGF5ZXJIYXJib3InLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnZG9jaycsIHsgaWQ6IGRvY2sgfSkpO1xuICAgICAgICAgICAgYXBwZW5kVG8oYCNkb2NrJHtkb2NrTnVtfWAsIFtcbiAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgncCcsICdzaGlwLW5hbWUnLCB7IGlubmVySFRNTDogYCR7c2hpcC5uYW1lfSAoJHtzaGlwLmxvYX0pYCB9KSxcbiAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnZGl2JywgJ3NoaXAtYm9keScsIHsgaWQ6IHNoaXBCb2R5IH0pLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRGYWN0b3J5KCdmb3JtJywgJ3NoaXAtZm9ybScsIHsgaWQ6IGZvcm1OYW1lIH0pLFxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c2hpcEJvZHl9YCk7XG4gICAgICAgICAgICBpZiAoc2hpcC5sb2EgPD0gMykge1xuICAgICAgICAgICAgICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgICAgICAgICAgc2hpcEF4aXMgPSAndmVydGljYWwnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGlwQXhpcyA9ICdob3Jpem9udGFsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXBwZW5kVG8oYCMke2Zvcm1OYW1lfWAsIFtcbiAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnbGFiZWwnLCAnJywgeyBpbm5lckhUTUw6ICdTdGFydGluZyBjb29yZDonIH0pLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRGYWN0b3J5KCdzZWxlY3QnLCAnJywgeyBpZDogc2VsZWN0WSB9KSxcbiAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnc2VsZWN0JywgJycsIHsgaWQ6IHNlbGVjdFggfSksXG4gICAgICAgICAgICAgICAgZWxlbWVudEZhY3RvcnkoJ2JyJywgJycpLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRGYWN0b3J5KCdidXR0b24nLCAncm90YXRlLWJ1dHRvbicsIFtcbiAgICAgICAgICAgICAgICAgICAgeyBpbm5lckhUTUw6ICdyb3RhdGUnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6IGJ1dHRvbiB9LFxuICAgICAgICAgICAgICAgICAgICB7IHR5cGU6ICdidXR0b24nIH0sXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgZWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsICdkZXBsb3ktYnV0dG9uJywgW1xuICAgICAgICAgICAgICAgICAgICB7IGlubmVySFRNTDogJ2RlcGxveScgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogc3VibWl0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogJ3N1Ym1pdCcgfSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICB5QXhpcy5mb3JFYWNoKChheGlzLCBheGlzSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBhcHBlbmRUbyhgIyR7c2VsZWN0WX1gLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnb3B0aW9uJywgJycsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaW5uZXJIVE1MOiBheGlzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiBheGlzIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pKTtcbiAgICAgICAgICAgICAgICBhcHBlbmRUbyhgIyR7c2VsZWN0WH1gLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50RmFjdG9yeSgnb3B0aW9uJywgJycsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaW5uZXJIVE1MOiBheGlzSW5kZXggKyAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiBheGlzSW5kZXggKyAxIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwLmxvYTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kVG8oYCMke3NoaXBCb2R5fWAsIGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnYmxvY2snKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2J1dHRvbn1gKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3ZlcnRpY2FsJyk7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwQXhpcyA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcEF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c3VibWl0fWApLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzZWxlY3RZfWApLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHhWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3NlbGVjdFh9YCkudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBib2FyZHNbMF0uc2V0U2hpcENvb3JkcyhzaGlwLm5hbWUsIHlWYWx1ZSwgTnVtYmVyKHhWYWx1ZSksIHNoaXBBeGlzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHB2dC5ub3RpZnkoYCR7c2hpcC5uYW1lLnRvVXBwZXJDYXNlKCl9IGRlcGxveWVkISAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZG9ja31gKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXJCb2FyZCAuJHtjb29yZH1gKS5jbGFzc0xpc3QuYWRkKCd0YWtlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllckJvYXJkIC4ke2Nvb3JkfWApLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJhY2tncm91bmRDb2xvciA9IHB2dC5jb2xvcnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwdnQubm90aWZ5KGBGYWlsZWQgdG8gZGVwbG95ICR7c2hpcC5uYW1lLnRvVXBwZXJDYXNlKCl9IWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRzWzBdLmlzUmVhZHkoKSkgcHZ0LmFpUmFuZG9tRGVwbG95KCk7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkc1sxXS5pc1JlYWR5KCkpIHVwZGF0ZVVJKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0UGxheWVyQW5kQm9hcmRzLFxuICAgICAgICBwcmVwVUksXG4gICAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IE9iamVjdC5mcmVlemUoW1xuICAgIHsgbmFtZTogJ2NhcnJpZXInLCBsb2E6IDUgfSxcbiAgICB7IG5hbWU6ICdiYXR0bGVzaGlwJywgbG9hOiA0IH0sXG4gICAgeyBuYW1lOiAnZGVzdHJveWVyJywgbG9hOiAzIH0sXG4gICAgeyBuYW1lOiAnc3VibWFyaW5lJywgbG9hOiAzIH0sXG4gICAgeyBuYW1lOiAncGF0cm9sIGJvYXQnLCBsb2E6IDIgfSxcbl0pO1xuXG5leHBvcnQgY29uc3QgeUF4aXMgPSBPYmplY3QuZnJlZXplKFtcbiAgICAnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsXG5dKTtcbiIsImltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tICcuL2ZhY3Rvcmllcy9lbGVtZW50RmFjdG9yeSc7XG5pbXBvcnQgYXBwZW5kVG8gZnJvbSAnLi9hcHBlbmRUbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwKCkge1xuICAgIC8vIHNldCBsYW5ndWFnZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCAnZW4nKTtcbiAgICAvLyBjcmVhdGUgYXBwIG1haW4gY29udGFpbmVyXG4gICAgYXBwZW5kVG8oJ2JvZHknLCBlbGVtZW50RmFjdG9yeSgnZGl2JywgJ2FwcCcsIHsgaWQ6ICdhcHAnIH0pKTtcbiAgICAvLyBjcmVhdGUgaGVhZGVyLCBmb3JtIGFuZCBkaXZcbiAgICBhcHBlbmRUbygnI2FwcCcsIFtcbiAgICAgICAgZWxlbWVudEZhY3RvcnkoJ2gxJywgJ2hlYWRlcicsIFtcbiAgICAgICAgICAgIHsgaWQ6ICdoZWFkZXInIH0sXG4gICAgICAgICAgICB7IGlubmVySFRNTDogJ2JhdHRsZSZzaHk7c2hpcCcgfV0pLFxuICAgICAgICBlbGVtZW50RmFjdG9yeSgnZm9ybScsICduYW1lLWZvcm0nLCBbXG4gICAgICAgICAgICB7IGlkOiAnbmFtZUZvcm0nIH0sXG4gICAgICAgICAgICB7IG5vdmFsaWRhdGU6ICcnIH1dKSxcbiAgICAgICAgZWxlbWVudEZhY3RvcnkoJ2gyJywgJ25vdGlmaWVyJywgeyBpZDogJ25vdGlmaWVyJyB9KSxcbiAgICAgICAgZWxlbWVudEZhY3RvcnkoJ2RpdicsICdzZWEnLCB7IGlkOiAnc2VhJyB9KSxcbiAgICBdKTtcbiAgICAvLyBjcmVhdGUgZmllbGRzZXRcbiAgICBhcHBlbmRUbygnI25hbWVGb3JtJywgZWxlbWVudEZhY3RvcnkoJ2ZpZWxkc2V0JywgJ25hbWUtZmllbGRzZXQnLFxuICAgICAgICB7IGlkOiAnbmFtZUZpZWxkc2V0JyB9KSk7XG4gICAgLy8gY3JlYXRlIGlucHV0IGZvciBuYW1lXG4gICAgYXBwZW5kVG8oJyNuYW1lRmllbGRzZXQnLCBbXG4gICAgICAgIGVsZW1lbnRGYWN0b3J5KCdsZWdlbmQnLCAnbmFtZS1sZWdlbmQnLCB7IGlubmVySFRNTDogJ05hbWU6JyB9KSxcbiAgICAgICAgZWxlbWVudEZhY3RvcnkoJ2lucHV0JywgJ25hbWUtaW5wdXQnLCBbXG4gICAgICAgICAgICB7IGlkOiAnbmFtZUlucHV0JyB9LFxuICAgICAgICBdKSxcbiAgICBdKTtcbiAgICAvLyBjcmVhdGUgc21hbGwgdGFnIGZvciBpbnB1dCBlcnJvclxuICAgIGFwcGVuZFRvKCcjbmFtZUZpZWxkc2V0JywgZWxlbWVudEZhY3RvcnkoJ3NtYWxsJywgJ25hbWUtZXJyb3InLCB7IGlkOiAnbmFtZUVycm9yJyB9KSk7XG4gICAgLy8gY3JlYXRlIHBsYXkgYnV0dG9uXG4gICAgYXBwZW5kVG8oJyNuYW1lRmllbGRzZXQnLCBlbGVtZW50RmFjdG9yeSgnYnV0dG9uJywgJ3BsYXktYnV0dG9uJywgW1xuICAgICAgICB7IGlkOiAncGxheUJ1dHRvbicgfSxcbiAgICAgICAgeyBpbm5lckhUTUw6ICdwbGF5JyB9LFxuICAgIF0pKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgc2V0dXAgZnJvbSAnLi9zdGF0aWMnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5cbnNldHVwKCk7XG5ldmVudHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==