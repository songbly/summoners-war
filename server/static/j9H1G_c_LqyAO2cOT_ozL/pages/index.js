module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "1mXb":
/***/ (function(module, exports) {



/***/ }),

/***/ "3UVQ":
/***/ (function(module, exports) {



/***/ }),

/***/ "5rRV":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "GqX/":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "QNhp":
/***/ (function(module, exports) {

module.exports = require("antd/lib/collapse");

/***/ }),

/***/ "QU2i":
/***/ (function(module, exports) {



/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/lib/collapse/style/css.js
var css = __webpack_require__("3UVQ");

// EXTERNAL MODULE: external "antd/lib/collapse"
var collapse_ = __webpack_require__("QNhp");
var collapse_default = /*#__PURE__*/__webpack_require__.n(collapse_);

// EXTERNAL MODULE: ./node_modules/antd/lib/tabs/style/css.js
var style_css = __webpack_require__("eosf");

// EXTERNAL MODULE: external "antd/lib/tabs"
var tabs_ = __webpack_require__("zkM6");
var tabs_default = /*#__PURE__*/__webpack_require__.n(tabs_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/antd/lib/card/style/css.js
var card_style_css = __webpack_require__("RV09");

// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__("5rRV");
var card_default = /*#__PURE__*/__webpack_require__.n(card_);

// CONCATENATED MODULE: ./components/Info.js




var __jsx = external_react_default.a.createElement;

const Info = () => {
  return __jsx("div", {
    className: "jsx-3392049485" + " " + "info"
  }, __jsx(style_default.a, {
    id: "3392049485"
  }, [".title.jsx-3392049485{margin:20px;font-size:24px;}"]), __jsx("div", {
    className: "jsx-3392049485" + " " + "title"
  }, "\uB1CC\uC194\uB4DC (\uB1CC\uC81C \uC194\uB85C \uB808\uC774\uB4DC)"), __jsx(card_default.a, {
    title: "1. \uACF5\uC18D \uC21C\uC11C",
    style: {
      margin: 10
    }
  }, __jsx("p", {
    className: "jsx-3392049485"
  }, "\uBE5B\uCE74\uC6B0\uAC78(\uBD88\uD558\uB974\uD4E8) \u2192 \uBD88\uD558\uB974\uD4E8(\uBE5B\uCE74\uC6B0\uAC78) \u2192 \uB1CC\uC81C \u2192 \uC554\uBC14\uC774\uD0B9 \u2192 \uBB3C\uC6CC\uBCA0\uC5B4", " ", __jsx("br", {
    className: "jsx-3392049485"
  }), "(\uB9AC\uB354\uBAB9\uACFC \uBB3C\uC6CC\uBCA0\uC5B4\uB294 \uC2DC\uC791\uD558\uC790\uB9C8\uC790 \uC0AC\uB9DD\uC774\uB77C \uACF5\uC18D \uC911\uC694x. \uB2E8, \uBA38\uB9AC\uBCF4\uB2E4 \uB290\uB9B4 \uAC83)")), __jsx(card_default.a, {
    title: "2. \uBAB9 \uB4B7\uC18D \uC81C\uD55C",
    style: {
      margin: 10
    }
  }, __jsx("p", {
    className: "jsx-3392049485"
  }, "\uBE5B\uCE74\uC6B0\uAC78 73 \uC774\uD558", __jsx("br", {
    className: "jsx-3392049485"
  }), "\uBD88\uD558\uB974\uD4E8 68 \uC774\uD558", __jsx("br", {
    className: "jsx-3392049485"
  }), "\uB1CC\uC81C 26 \uC774\uC0C1")), __jsx(card_default.a, {
    title: "3. \uB8EC\uC14B",
    style: {
      margin: 10
    }
  }, __jsx("p", {
    className: "jsx-3392049485"
  }, "\uBE5B\uCE74\uC6B0\uAC78, \uBD88\uD558\uB974\uD4E8, \uC554\uBC14\uC774\uD0B9, \uBB3C\uC6CC\uBCA0\uC5B4 : \uD22C\uD22C\uC758", __jsx("br", {
    className: "jsx-3392049485"
  }), "\uB9AC\uB354\uBAB9 : \uD22C\uD22C\uD22C", __jsx("br", {
    className: "jsx-3392049485"
  }), "\uB1CC\uC81C : \uACA9\uC758 or \uB9F9\uC758 (\uCE58\uD655 58 \u2191)")), __jsx(card_default.a, {
    title: "4. \uC8FC\uC758\uC0AC\uD56D",
    style: {
      margin: 10
    }
  }, __jsx("p", {
    className: "jsx-3392049485"
  }, "\u2460 \uB1CC\uC81C, \uBE5B\uCE74\uC6B0\uAC78, \uC554\uBC14\uC774\uD0B9 \uD0F1\uD0B9\uB825 \uC911\uC694 (\uC774 \uC14B\uC740 \uB05D\uAE4C\uC9C0 \uC0B4\uC544\uB0A8\uC544\uC57C \uD568)", __jsx("br", {
    className: "jsx-3392049485"
  }), "\u2461 \uBB3C\uC6CC\uBCA0\uC5B4, \uC554\uBC14\uC774\uD0B9 \uAC01\uC131 \uD544\uC218", __jsx("br", {
    className: "jsx-3392049485"
  }), "\u2462 \uBB3C\uC6CC\uBCA0\uC5B4 \uBC0F \uB9AC\uB354\uBAB9\uC740 \uB819\uC5C5 \uBC0F \uC9C4\uD654 x", __jsx("br", {
    className: "jsx-3392049485"
  }), "\u2463 \uBB3C\uC6CC\uBCA0\uC5B4 \uCCB4\uB825 \uC77C\uC758 \uC790\uB9AC(\uBC84\uD504 \uD3EC\uD568) 0,1,9 x (\uC62C\uB9BC, \uBC84\uB9BC \uBAA8\uB4E0 \uACBD\uC6B0 \uD3EC\uD568)", __jsx("br", {
    className: "jsx-3392049485"
  }), "\u2464 \uBD88\uD558\uD504\uB958 \uD615\uBCC0 \uAE08\uC9C0", __jsx("br", {
    className: "jsx-3392049485"
  }), "\u2465 \uBD88\uD558\uB974\uD4E8 \uCCB4\uBC29 \uD569 \uC8FC\uC758 : \uBE5B\uCE74\uC6B0\uAC78, \uC554\uBC14\uC774\uD0B9\uC758 \uC808\uBC18 \uC774\uD558 (1\uC810\uD504 \uD6C4 \uC8FD\uC5B4\uC57C \uD568) \u2192 3~4\uC131 \uB9CC\uB819 \uCD94\uCC9C", __jsx("br", {
    className: "jsx-3392049485"
  }), "\u2466 \uC2A4\uC791\uC740 \uB1CC\uC81C 3\uC2A4 \uD480\uC2A4\uC791, \uBD88\uD558\uB974\uD4E8 \uD790\uB7C9 \uBD80\uBD84\uAE4C\uC9C0 \uC2A4\uC791. \uB098\uBA38\uC9C0 \uBAB9\uC740 \uC2A4\uC791 \uBD88\uD544\uC694", __jsx("br", {
    className: "jsx-3392049485"
  }), "\u2467 \uC804\uC5F4\uBAB9 \uC218\uC5D0 \uB530\uB978 \uB1CC\uC81C, \uBE5B\uCE74\uC6B0\uAC78, \uC554\uBC14\uC774\uD0B9\uC758 \uD0F1\uD0B9\uB825 \uCC28\uC774 \uC8FC\uC758", __jsx("br", {
    className: "jsx-3392049485"
  }))), __jsx(card_default.a, {
    title: "5. \uB9E4\uCEE4\uB2C8\uC998",
    style: {
      margin: 10
    }
  }, __jsx("p", {
    className: "jsx-3392049485"
  }, "\uBA38\uB9AC \uACF5\uACA9 \u2192 \uBB3C\uC6CC\uBCA0\uC5B4 \uBC0F \uB9AC\uB354\uBAB9 \uC0AC\uB9DD \u2192 \uBB3C\uC6CC\uBCA0\uC5B4 \uBD80\uD65C \u2192 \uB1CC\uC81C 5\uC2A4\uD0DD \u2192 \uBD88\uD558\uB974\uD4E8 \uACF5\uC5C5 \uBC0F \uBE5B\uCE74\uC6B0\uAC78 \uBC29\uAE4E \u2192 \x0B   \uB1CC\uC81C 3\uC2A4  \u2192 1\uC810\uD504 \u2192 \uBB3C\uC6CC\uBCA0\uC5B4 \uBC0F \uBD88\uD558\uB974\uD4E8 \uC0AC\uB9DD \u2192 \uB1CC\uC81C 5\uC2A4\uD0DD \u2192 \uC554\uBC14\uC774\uD0B9 \uC804\uCCB4\uBD80\uD65C \u2192 \uBE5B\uCE74\uC6B0\uAC78 \uBC29\uAE4E \u2192 \uB1CC\uC81C 3\uC2A4 \u2192 \uB9C8\uBB34\uB9AC")));
};

/* harmony default export */ var components_Info = (Info);
// CONCATENATED MODULE: ./components/ spec/LightningEmperor-spec.js
const LIGHTNING_EMPEROR = {
  FIRE_BALEYAR: {
    HP: 10215,
    ATK: 790,
    DEF: 670,
    SPD: 102,
    CRI_RATE: 15,
    CRI_DMG: 50
  }
};
// EXTERNAL MODULE: ./node_modules/antd/lib/alert/style/css.js
var alert_style_css = __webpack_require__("rBGu");

// EXTERNAL MODULE: external "antd/lib/alert"
var alert_ = __webpack_require__("UpNC");
var alert_default = /*#__PURE__*/__webpack_require__.n(alert_);

// EXTERNAL MODULE: ./node_modules/antd/lib/row/style/css.js
var row_style_css = __webpack_require__("SoD3");

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: ./node_modules/antd/lib/form/style/css.js
var form_style_css = __webpack_require__("dBUF");

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__("foLw");
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: ./node_modules/antd/lib/col/style/css.js
var col_style_css = __webpack_require__("YKpo");

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: ./node_modules/antd/lib/tooltip/style/css.js
var tooltip_style_css = __webpack_require__("QU2i");

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__("z6+L");
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: ./node_modules/antd/lib/input-number/style/css.js
var input_number_style_css = __webpack_require__("cL9j");

// EXTERNAL MODULE: external "antd/lib/input-number"
var input_number_ = __webpack_require__("GqX/");
var input_number_default = /*#__PURE__*/__webpack_require__.n(input_number_);

// EXTERNAL MODULE: ./node_modules/antd/lib/input/style/css.js
var input_style_css = __webpack_require__("1mXb");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// CONCATENATED MODULE: ./components/base/Form.js















var Form_jsx = external_react_default.a.createElement;

const InputGroup = input_default.a.Group;

const BasicForm = ({
  defaultHp,
  defaultAtk,
  defaultDef,
  defaultSpd,
  defaultCriRate,
  defaultCriDmg,
  onChange
}) => {
  return Form_jsx("div", {
    className: "jsx-1223108615" + " " + "basic-form"
  }, Form_jsx(style_default.a, {
    id: "1223108615"
  }, [".basic-form.jsx-1223108615:global(.ant-input-number-input){margin-right:10px;}"]), Form_jsx(form_default.a, {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 14
    },
    layout: "horizontal"
  }, Form_jsx(form_default.a.Item, {
    label: "HP"
  }, Form_jsx(InputGroup, null, Form_jsx(row_default.a, {
    gutter: 16
  }, Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uAE30\uBCF8\uCCB4\uB825"
  }, Form_jsx(input_number_default.a, {
    disabled: true,
    defaultValue: defaultHp
  }))), Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(form_default.a.Item, {
    name: "addHp0",
    onChange: onChange
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uB4B7\uCCB4"
  }, Form_jsx(input_number_default.a, {
    name: "addHp0",
    placeholder: "\uB4B7\uCCB4"
  })))), Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(form_default.a.Item, {
    name: "addHp1",
    onChange: onChange
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uCD94\uAC00 \uCCB4%"
  }, Form_jsx(input_number_default.a, {
    name: "addHp1",
    placeholder: "\uCD94\uAC00 \uCCB4%",
    defaultValue: 0,
    formatter: value => `${value}%`
  })))), Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(form_default.a.Item, {
    name: "addHp2",
    onChange: onChange
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uCD94\uAC00 \uAE61\uCCB4"
  }, Form_jsx(input_number_default.a, {
    name: "addHp2",
    placeholder: "\uCD94\uAC00 \uAE61\uCCB4"
  })))))), Form_jsx(alert_default.a, {
    message: "Success",
    type: "success",
    showIcon: true
  })), Form_jsx(form_default.a.Item, {
    label: "DEF"
  }, Form_jsx(InputGroup, null, Form_jsx(row_default.a, {
    gutter: 16
  }, Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uAE30\uBCF8\uBC29"
  }, Form_jsx(input_number_default.a, {
    disabled: true,
    defaultValue: defaultDef
  }))), Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(form_default.a.Item, {
    name: "addDef0",
    onChange: onChange
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uB4B7\uBC29"
  }, Form_jsx(input_number_default.a, {
    name: "addDef0",
    placeholder: "\uB4B7\uBC29 "
  })))), Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(form_default.a.Item, {
    name: "addDef1",
    onChange: onChange
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uCD94\uAC00 \uBC29%"
  }, Form_jsx(input_number_default.a, {
    name: "addDef1",
    placeholder: "\uCD94\uAC00 \uBC29%",
    defaultValue: 0,
    formatter: value => `${value}%`
  })))), Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(form_default.a.Item, {
    name: "addDef2",
    onChange: onChange
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uCD94\uAC00 \uAE61\uBC29"
  }, Form_jsx(input_number_default.a, {
    name: "addDef2",
    placeholder: "\uCD94\uAC00 \uAE61\uBC29"
  })))))), Form_jsx(alert_default.a, {
    message: "Success",
    type: "success",
    showIcon: true
  })), Form_jsx(form_default.a.Item, {
    label: "ATK"
  }, Form_jsx(InputGroup, null, Form_jsx(row_default.a, {
    gutter: 16
  }, Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uAE30\uBCF8\uACF5"
  }, Form_jsx(input_number_default.a, {
    disabled: true,
    defaultValue: defaultAtk
  }))), Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(form_default.a.Item, {
    name: "addAtk0",
    onChange: onChange
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uB4B7\uACF5"
  }, Form_jsx(input_number_default.a, {
    name: "addAtk0",
    placeholder: "\uB4B7\uACF5"
  })))), Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(form_default.a.Item, {
    name: "addAtk1",
    onChange: onChange
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uCD94\uAC00 \uACF5%"
  }, Form_jsx(input_number_default.a, {
    name: "addAtk1",
    placeholder: "\uCD94\uAC00 \uACF5%",
    defaultValue: 0,
    formatter: value => `${value}%`
  })))), Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(form_default.a.Item, {
    name: "addAtk2",
    onChange: onChange
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uCD94\uAC00 \uAE61\uACF5"
  }, Form_jsx(input_number_default.a, {
    name: "addAtk2",
    placeholder: "\uCD94\uAC00 \uAE61\uACF5"
  })))))), Form_jsx(alert_default.a, {
    message: "Success",
    type: "success",
    showIcon: true
  })), Form_jsx(form_default.a.Item, {
    label: "SPD"
  }, Form_jsx(InputGroup, null, Form_jsx(row_default.a, {
    gutter: 16
  }, Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uAE30\uBCF8\uACF5\uC18D"
  }, Form_jsx(input_number_default.a, {
    disabled: true,
    defaultValue: defaultSpd
  }))), Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(form_default.a.Item, {
    name: "addSpd",
    onChange: onChange
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uB4B7\uC18D"
  }, Form_jsx(input_number_default.a, {
    name: "addSpd",
    placeholder: "\uB4B7\uC18D"
  })))), Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(form_default.a.Item, {
    name: "buffSpd",
    onChange: onChange
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uC18D\uBC84\uD504"
  }, Form_jsx(input_number_default.a, {
    disabled: true,
    placeholder: "\uC18D\uBC84\uD504"
  })))))), Form_jsx(alert_default.a, {
    message: "Success",
    type: "success",
    showIcon: true
  })), Form_jsx(form_default.a.Item, {
    label: "CRI_DMG"
  }, Form_jsx(InputGroup, null, Form_jsx(row_default.a, {
    gutter: 16
  }, Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uAE30\uBCF8\uCE58\uD53C"
  }, Form_jsx(input_number_default.a, {
    disabled: true,
    defaultValue: defaultCriDmg
  }))), Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(form_default.a.Item, {
    name: "addCriDmg1",
    onChange: onChange
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uB4B7\uCE58\uD53C"
  }, Form_jsx(input_number_default.a, {
    name: "addCriDmg1",
    placeholder: "\uB4B7\uCE58\uD53C"
  })))), Form_jsx(col_default.a, {
    span: 6
  }, Form_jsx(form_default.a.Item, {
    name: "addCriDmg2",
    onChange: onChange
  }, Form_jsx(form_default.a.Item, {
    name: "addCriDmg2",
    onChange: onChange
  }, Form_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uCD94\uAC00 \uCE58\uD53C"
  }, Form_jsx(input_number_default.a, {
    name: "addCriDmg2",
    placeholder: "\uCD94\uAC00 \uCE58\uD53C"
  }))))))), Form_jsx(alert_default.a, {
    message: "Success",
    type: "success",
    showIcon: true
  }))));
};

/* harmony default export */ var Form = (BasicForm);
// CONCATENATED MODULE: ./components/monsters/LightningEmperor.js
var LightningEmperor_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const LightningEmperor = () => {
  const {
    FIRE_BALEYAR
  } = LIGHTNING_EMPEROR;
  const {
    HP,
    ATK,
    DEF,
    SPD,
    CRI_RATE,
    CRI_DMG
  } = FIRE_BALEYAR;
  const {
    0: form,
    1: setForm
  } = Object(external_react_["useState"])({
    defaultHp: HP,
    addHp0: 0,
    addHp1: 0,
    addHp2: 0,
    expectHp: 0,
    defaultAtk: ATK,
    addAtk0: 0,
    addAtk1: 0,
    addAtk2: 0,
    expectAtk: 0,
    defaultDef: DEF,
    addDef0: 0,
    addDef1: 0,
    addDef2: 0,
    expectDef: 0,
    defaultSpd: SPD,
    addSpd: 0,
    buffSpd: 0,
    expectSpd: 0,
    defaultCriRate: CRI_RATE,
    addCriRate: 0,
    expectCriRate: 0,
    defaultCriDmg: CRI_DMG,
    addCriDmg1: 0,
    addCriDmg2: 0,
    expectCriDmg: 0
  });

  const updateField = e => {
    console.log("e.target", e, e.target);
    setForm(_objectSpread({}, form, {
      [e.target.name]: e.target.value
    }), console.log("실행되네"));
  };

  return LightningEmperor_jsx("div", null, LightningEmperor_jsx("p", null, "(baleygr)\uBD88\uB1CC\uC81C \uC2A4\uD399\uC2A4\uD399"), LightningEmperor_jsx(Form, {
    defaultHp: HP,
    defaultAtk: ATK,
    defaultDef: DEF,
    defaultSpd: SPD,
    defaultCriRate: CRI_RATE,
    defaultCriDmg: CRI_DMG,
    onChange: updateField
  }));
};

/* harmony default export */ var monsters_LightningEmperor = (LightningEmperor);
// CONCATENATED MODULE: ./components/monsters/CowGirl.js

var CowGirl_jsx = external_react_default.a.createElement;

const CowGirl = () => {
  return CowGirl_jsx("div", null, "(Loren) \uBE5B \uCE74\uC6B0\uAC78 \uC2A4\uD399\uC2A4\uD399");
};

/* harmony default export */ var monsters_CowGirl = (CowGirl);
// CONCATENATED MODULE: ./components/monsters/Viking.js

var Viking_jsx = external_react_default.a.createElement;

const Viking = () => {
  return Viking_jsx("div", null, Viking_jsx("p", null, "(Janssen)\uC554\uBC14\uC774\uD0B9 \uC2A4\uD399\uC2A4\uD399"));
};

/* harmony default export */ var monsters_Viking = (Viking);
// CONCATENATED MODULE: ./components/monsters/WarBear.js

var WarBear_jsx = external_react_default.a.createElement;

const WarBear = () => {
  return WarBear_jsx("div", null, WarBear_jsx("p", null, "(Dagora)\uBB3C\uC6CC\uBCA0\uC5B4 \uC2A4\uD399\uC2A4\uD399"));
};

/* harmony default export */ var monsters_WarBear = (WarBear);
// CONCATENATED MODULE: ./components/status/Glory.js






var Glory_jsx = external_react_default.a.createElement;

function Glory_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Glory_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Glory_ownKeys(Object(source), true).forEach(function (key) { Glory_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Glory_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Glory_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Glory = () => {
  const {
    0: building,
    1: setBuilding
  } = Object(external_react_["useState"])({
    fire: 0,
    spd: 0,
    atk: 0,
    hp: 0,
    def: 0,
    criDmg: 0
  });

  const updateField = e => {
    console.log("e.target", e, e.target);
    setBuilding(Glory_objectSpread({}, building, {
      [e.target.name]: e.target.value
    }), console.log("실행되네"));
  };

  return Glory_jsx("div", {
    className: "glory"
  }, Glory_jsx("p", null, "(Glory building) \uBA85\uAC74\uC791"), Glory_jsx(form_default.a, {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 14
    },
    layout: "horizontal"
  }, Glory_jsx(form_default.a.Item, {
    label: "Fire Building"
  }, Glory_jsx(form_default.a.Item, {
    name: "fire",
    onChange: updateField
  }, Glory_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uBD88\uC18D\uC131 \uACF5\uACA9\uB825 \uAC74\uBB3C"
  }, Glory_jsx(input_number_default.a, {
    name: "fire",
    placeholder: "\uBD88\uC18D\uC131 \uACF5\uACA9\uB825 \uAC74\uBB3C",
    max: 10
  })))), Glory_jsx(form_default.a.Item, {
    label: "SPD"
  }, Glory_jsx(form_default.a.Item, {
    name: "spd",
    onChange: updateField
  }, Glory_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uACF5\uC18D\uAC74\uBB3C"
  }, Glory_jsx(input_number_default.a, {
    name: "spd",
    placeholder: "\uACF5\uC18D",
    max: 10
  })))), Glory_jsx(form_default.a.Item, {
    label: "ATK"
  }, Glory_jsx(form_default.a.Item, {
    name: "atk",
    onChange: updateField
  }, Glory_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uACF5\uACA9\uB825 \uAC74\uBB3C"
  }, Glory_jsx(input_number_default.a, {
    name: "atk",
    placeholder: "\uACF5\uACA9\uB825",
    max: 10
  })))), Glory_jsx(form_default.a.Item, {
    label: "HP"
  }, Glory_jsx(form_default.a.Item, {
    name: "atk",
    onChange: updateField
  }, Glory_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uCCB4\uB825 \uAC74\uBB3C"
  }, Glory_jsx(input_number_default.a, {
    name: "hp",
    placeholder: "\uCCB4\uB825",
    max: 10
  })))), Glory_jsx(form_default.a.Item, {
    label: "DEF"
  }, Glory_jsx(form_default.a.Item, {
    name: "def",
    onChange: updateField
  }, Glory_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uBC29\uC5B4\uB825 \uAC74\uBB3C"
  }, Glory_jsx(input_number_default.a, {
    name: "def",
    placeholder: "\uBC29\uC5B4\uB825",
    max: 10
  })))), Glory_jsx(form_default.a.Item, {
    label: "CRI_DMG"
  }, Glory_jsx(form_default.a.Item, {
    name: "criDmg",
    onChange: updateField
  }, Glory_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uCE58\uD53C \uAC74\uBB3C"
  }, Glory_jsx(input_number_default.a, {
    name: "criDmg",
    placeholder: "\uCE58\uD53C",
    max: 10
  }))))));
};

/* harmony default export */ var status_Glory = (Glory);
// CONCATENATED MODULE: ./components/status/Guild.js














var Guild_jsx = external_react_default.a.createElement;

function Guild_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Guild_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Guild_ownKeys(Object(source), true).forEach(function (key) { Guild_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Guild_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Guild_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Guild_InputGroup = input_default.a.Group;

const Guild = () => {
  const {
    0: building,
    1: setBuilding
  } = Object(external_react_["useState"])({
    fire: 0,
    spd: 0,
    atk: 0,
    hp: 0,
    def: 0,
    criDmg: 0
  });

  const updateField = e => {
    console.log("e.target", e, e.target);
    setBuilding(Guild_objectSpread({}, building, {
      [e.target.name]: e.target.value
    }), console.log("실행되네"));
  };

  return Guild_jsx("div", {
    className: "glory"
  }, Guild_jsx("p", null, "(Glory building) \uBA85\uAC74\uC791"), Guild_jsx(form_default.a, {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 14
    },
    layout: "horizontal"
  }, Guild_jsx(form_default.a.Item, {
    label: "CRI_DMG"
  }, Guild_jsx(Guild_InputGroup, null, Guild_jsx(row_default.a, {
    gutter: 16
  }, Guild_jsx(col_default.a, {
    span: 6
  }, Guild_jsx(form_default.a.Item, {
    name: "addCriDmg1",
    onChange: updateField
  }, Guild_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uB4B7\uCE58\uD53C"
  }, Guild_jsx(input_number_default.a, {
    name: "addCriDmg1",
    placeholder: "\uB4B7\uCE58\uD53C"
  })))), Guild_jsx(col_default.a, {
    span: 6
  }, Guild_jsx(form_default.a.Item, {
    name: "addCriDmg2",
    onChange: updateField
  }, Guild_jsx(form_default.a.Item, {
    name: "addCriDmg2",
    onChange: updateField
  }, Guild_jsx(tooltip_default.a, {
    placement: "topLeft",
    title: "\uCD94\uAC00 \uCE58\uD53C"
  }, Guild_jsx(input_number_default.a, {
    name: "addCriDmg2",
    placeholder: "\uCD94\uAC00 \uCE58\uD53C"
  }))))))), Guild_jsx(alert_default.a, {
    message: "Success",
    type: "success",
    showIcon: true
  }))));
};

/* harmony default export */ var status_Guild = (Guild);
// CONCATENATED MODULE: ./pages/index.js





var pages_jsx = external_react_default.a.createElement;










function callback(key) {
  console.log(key);
}

const {
  TabPane
} = tabs_default.a;
const {
  Panel
} = collapse_default.a;

const Index = () => {
  return pages_jsx("div", {
    className: "jsx-3687671499" + " " + "index"
  }, pages_jsx(style_default.a, {
    id: "3687671499"
  }, [".index.jsx-3687671499{padding:20px;}"]), pages_jsx("p", {
    className: "jsx-3687671499"
  }, "\uB1CC\uC194\uB4DC \uB371\uC744 \uB9CC\uB4E4\uC790"), pages_jsx("div", {
    className: "jsx-3687671499" + " " + "info"
  }, pages_jsx("p", {
    className: "jsx-3687671499"
  }, "'\uCD94\uAC00' \uD56D\uBAA9\uB4E4\uC740 \uB8EC\uAC15\uC774\uB098 \uC5F0\uB9C8, \uBCC0\uD658 \uB4F1\uC744 \uD1B5\uD574 \uC608\uC0C1\uB418\uB294 \uCD5C\uC885 \uC2A4\uD399\uC744 \uC54C\uC544\uBCF4\uAE30 \uC704\uD568."), pages_jsx("p", {
    className: "jsx-3687671499"
  }, " ", "(\uC608: \uB1CC\uC81C \uACF5% \uC5F0\uB9C8 2%, \uAE61\uACF5 \uC5F0\uB9C8 18 \uAC00\uB2A5 -> \uCD94\uAC00 \uACF5%\uC5D0 '2%' \uC785\uB825, \uCD94\uAC00 \uAE61\uACF5\uC5D0 '18' \uC785\uB825)"), pages_jsx("p", {
    className: "jsx-3687671499"
  }, " \uD574\uB2F9 \uC5C6\uAC70\uB098 \uD604\uC7AC \uC2A4\uD399 \uADF8\uB300\uB85C \uBCF4\uAE30 \uC704\uD574\uC120 \uBAA8\uB450 '0' \uC785\uB825")), pages_jsx(collapse_default.a, {
    defaultActiveKey: ['1'],
    onChange: callback
  }, pages_jsx(Panel, {
    header: "\uB0B4 \uC0C1\uD0DC\uB97C \uC785\uB825\uD558\uC790 @_@",
    key: "1"
  }, pages_jsx("div", {
    className: "jsx-3687671499"
  }, pages_jsx(tabs_default.a, {
    defaultActiveKey: "1",
    onChange: callback
  }, pages_jsx(TabPane, {
    tab: "Glory",
    key: "1"
  }, pages_jsx(status_Glory, null)), pages_jsx(TabPane, {
    tab: "Guild",
    key: "2"
  }, pages_jsx(status_Guild, null)), pages_jsx(TabPane, {
    tab: "CowGirl",
    key: "3"
  }, pages_jsx(monsters_CowGirl, null)), pages_jsx(TabPane, {
    tab: "Viking",
    key: "4"
  }, pages_jsx(monsters_Viking, null)), pages_jsx(TabPane, {
    tab: "WarBear",
    key: "5"
  }, pages_jsx(monsters_WarBear, null))))), pages_jsx(Panel, {
    header: "\uBAB9\uB4E4\uC758 \uC2A4\uD399\uC744 \uB9DE\uCD94\uC790!",
    key: "2"
  }, pages_jsx("div", {
    className: "jsx-3687671499"
  }, pages_jsx(tabs_default.a, {
    defaultActiveKey: "1",
    onChange: callback
  }, pages_jsx(TabPane, {
    tab: "Info",
    key: "1"
  }, pages_jsx(components_Info, null)), pages_jsx(TabPane, {
    tab: "Emperor",
    key: "2"
  }, pages_jsx(monsters_LightningEmperor, null)), pages_jsx(TabPane, {
    tab: "CowGirl",
    key: "3"
  }, pages_jsx(monsters_CowGirl, null)), pages_jsx(TabPane, {
    tab: "Viking",
    key: "4"
  }, pages_jsx(monsters_Viking, null)), pages_jsx(TabPane, {
    tab: "WarBear",
    key: "5"
  }, pages_jsx(monsters_WarBear, null)))))));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "RV09":
/***/ (function(module, exports) {



/***/ }),

/***/ "SoD3":
/***/ (function(module, exports) {



/***/ }),

/***/ "UpNC":
/***/ (function(module, exports) {

module.exports = require("antd/lib/alert");

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "YKpo":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cL9j":
/***/ (function(module, exports) {



/***/ }),

/***/ "dBUF":
/***/ (function(module, exports) {



/***/ }),

/***/ "eosf":
/***/ (function(module, exports) {



/***/ }),

/***/ "foLw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "rBGu":
/***/ (function(module, exports) {



/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "z6+L":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "zkM6":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ })

/******/ });