/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* reexport safe */ _Canvas__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   CircleContainer: () => (/* reexport safe */ _containers__WEBPACK_IMPORTED_MODULE_2__.CircleContainer),
/* harmony export */   Component: () => (/* reexport safe */ _Component__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   LeftLeaningContainer: () => (/* reexport safe */ _containers__WEBPACK_IMPORTED_MODULE_2__.LeftLeaningContainer),
/* harmony export */   RightLeaningContainer: () => (/* reexport safe */ _containers__WEBPACK_IMPORTED_MODULE_2__.RightLeaningContainer),
/* harmony export */   WidgetClick: () => (/* reexport safe */ _clicks__WEBPACK_IMPORTED_MODULE_3__.WidgetClick)
/* harmony export */ });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _clicks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);







/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Canvas)
/* harmony export */ });
class Canvas {
    constructor(parent, _state = {}) {
        this.parent = parent;
        this._state = _state;
        this._widgets = [];
        this.parent.innerHTML = '';
        this.parent.id = "canvas";
        const newStyle = {
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "repeat(12, 1fr)",
            height: "100vh",
            columnGap: "5px",
            rowGap: "5px",
            aspectRatio: "1 / 1"
        };
        Object.assign(this.parent.style, newStyle);
    }
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = Object.assign(Object.assign({}, this._state), value);
        this.rerender();
    }
    get widgets() {
        return this._widgets;
    }
    addWidget(widget) {
        this.widgets.push(widget);
        widget.canvas = this;
        this.render();
    }
    render() {
        this.parent.innerHTML = '';
        for (const widget of this.widgets) {
            this.buildWidget(widget);
        }
    }
    rerender() {
        for (const widget of this.widgets) {
            let div = document.getElementById(widget.id);
            if (this.injectContent(widget, div)) {
                this.buildWidget(widget);
            }
        }
    }
    buildWidget(widget) {
        var _a;
        const div = this.initializeDiv(widget);
        this.buildContainer(widget, div);
        this.placeContainer(widget, div);
        this.injectContent(widget, div);
        this.parent.append(div);
        (_a = widget.click) === null || _a === void 0 ? void 0 : _a.setClick();
    }
    initializeDiv(widget) {
        const div = document.createElement('div');
        div.id = widget.id;
        const newStyle = {
            margin: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            padding: "3%",
            aspectRatio: "1 / 1"
        };
        Object.assign(div.style, newStyle);
        return div;
    }
    buildContainer(widget, div) {
        Object.assign(div.style, widget.shape.attributes);
    }
    placeContainer(widget, div) {
        const newStyle = {
            gridColumnStart: widget.locationLeft.toString(),
            gridColumnEnd: "span " + widget.width,
            gridRowStart: widget.locationTop.toString(),
            gridRowEnd: "span " + widget.height
        };
        Object.assign(div.style, newStyle);
    }
    injectContent(widget, div) {
        let changeState = false;
        let key;
        div.innerHTML = widget.content;
        for (key in this.state) {
            if (div.innerHTML.includes(`{{ ${key} }}`)) {
                div.innerHTML = div.innerHTML.split(`{{ ${key} }}`).join(this.state[key]);
                changeState = true;
            }
        }
        return changeState;
    }
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


class Component {
    constructor(_id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(), _width = 2, _height = 2, _locationTop = 1, _locationLeft = 1, _content = "<div></div>", _shape = new _containers__WEBPACK_IMPORTED_MODULE_0__.LeftLeaningContainer(), _canvas, _click) {
        this._id = _id;
        this._width = _width;
        this._height = _height;
        this._locationTop = _locationTop;
        this._locationLeft = _locationLeft;
        this._content = _content;
        this._shape = _shape;
        this._canvas = _canvas;
        this._click = _click;
    }
    get click() {
        return this._click;
    }
    set click(value) {
        this._click = value;
    }
    get shape() {
        return this._shape;
    }
    set shape(value) {
        this._shape = value;
    }
    get canvas() {
        return this._canvas;
    }
    set canvas(value) {
        this._canvas = value;
    }
    get content() {
        return this._content;
    }
    set content(value) {
        this._content = value;
    }
    get locationLeft() {
        return this._locationLeft;
    }
    set locationLeft(value) {
        this._locationLeft = value;
    }
    get locationTop() {
        return this._locationTop;
    }
    set locationTop(value) {
        this._locationTop = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CircleContainer: () => (/* binding */ CircleContainer),
/* harmony export */   LeftLeaningContainer: () => (/* binding */ LeftLeaningContainer),
/* harmony export */   RightLeaningContainer: () => (/* binding */ RightLeaningContainer)
/* harmony export */ });
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

class LeftLeaningContainer extends _Container__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.borderRadius = "10% 25%";
    }
}
class RightLeaningContainer extends _Container__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.borderRadius = "25% 10%";
    }
}
class CircleContainer extends _Container__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.borderRadius = "50%";
    }
}



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
class Container {
    constructor(_backgroundColor = 'white', _borderColor = 'black', _borderRadius = '0px', _borderWidth = '1px', _borderStyle = 'solid', _zIndex = 0) {
        this._backgroundColor = _backgroundColor;
        this._borderColor = _borderColor;
        this._borderRadius = _borderRadius;
        this._borderWidth = _borderWidth;
        this._borderStyle = _borderStyle;
        this._zIndex = _zIndex;
    }
    get attributes() {
        return {
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderRadius: this.borderRadius,
            borderWidth: this.borderWidth,
            borderStyle: this.borderStyle,
            zIndex: this.zIndex
        };
    }
    get backgroundColor() {
        return this._backgroundColor;
    }
    set backgroundColor(value) {
        this._backgroundColor = value;
    }
    get borderColor() {
        return this._borderColor;
    }
    set borderColor(value) {
        this._borderColor = value;
    }
    get borderRadius() {
        return this._borderRadius;
    }
    set borderRadius(value) {
        this._borderRadius = value;
    }
    get borderWidth() {
        return this._borderWidth;
    }
    set borderWidth(value) {
        this._borderWidth = value;
    }
    get borderStyle() {
        return this._borderStyle;
    }
    set borderStyle(value) {
        this._borderStyle = value;
    }
    get zIndex() {
        return this._zIndex;
    }
    set zIndex(value) {
        this._zIndex = value;
    }
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetClick: () => (/* binding */ WidgetClick)
/* harmony export */ });
/* harmony import */ var _Click__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

class WidgetClick extends _Click__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(widget, _callback) {
        super(widget);
        this._callback = _callback;
    }
    setClick() {
        const div = document.getElementById(this.widget.id);
        if (div !== null) {
            console.log(div);
            div.addEventListener('click', (e) => {
                console.log('Hello');
                this._callback(e, this.widget);
            });
        }
    }
}



/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Click)
/* harmony export */ });
class Click {
    constructor(_widget) {
        this._widget = _widget;
        this._widget.click = this;
    }
    get widget() {
        return this._widget;
    }
    setClick() {
        throw new Error('Method not implemented');
    }
}


/***/ })
/******/ 	]);
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
/******/ 			// no module.id needed
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

const canvas = new _Widget__WEBPACK_IMPORTED_MODULE_0__.Canvas(document.body);
canvas.state = { className: 'Kekambas', firstName: 'Kevin' };
const myWidget = new _Widget__WEBPACK_IMPORTED_MODULE_0__.Component();
canvas.addWidget(myWidget);
const rightWidget = new _Widget__WEBPACK_IMPORTED_MODULE_0__.Component();
rightWidget.shape = new _Widget__WEBPACK_IMPORTED_MODULE_0__.RightLeaningContainer();
rightWidget.locationLeft = 6;
rightWidget.locationTop = 6;
rightWidget.shape.zIndex = 99;
rightWidget.content = '<h1>My name is {{ firstName }}</h1>';
canvas.addWidget(rightWidget);
const circleWidget = new _Widget__WEBPACK_IMPORTED_MODULE_0__.Component();
circleWidget.shape = new _Widget__WEBPACK_IMPORTED_MODULE_0__.CircleContainer();
circleWidget.locationTop = 1;
circleWidget.locationLeft = 5;
circleWidget.width = 4;
circleWidget.height = 4;
circleWidget.content = '<h4>Hello {{ className }}</h4>';
new _Widget__WEBPACK_IMPORTED_MODULE_0__.WidgetClick(circleWidget, (_, widget) => {
    var _a;
    console.log(widget);
    (_a = widget.canvas) === null || _a === void 0 ? void 0 : _a.render();
});
canvas.addWidget(circleWidget);
canvas.state = { firstName: 'Brian' };

})();

/******/ })()
;