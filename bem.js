(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bem"] = factory();
	else
		root["bem"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ClassOption = __webpack_require__(3);

var _ClassOption2 = _interopRequireDefault(_ClassOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClassNamesDeriver = function () {
  function ClassNamesDeriver(block, element) {
    _classCallCheck(this, ClassNamesDeriver);

    this.block = block;
    this.element = element;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.options = args;
  }

  _createClass(ClassNamesDeriver, [{
    key: 'toString',
    value: function toString() {
      return this.classes.join(' ');
    }
  }, {
    key: 'base',
    get: function get() {
      var block = this.block;
      var element = this.element;

      return element ? block + '__' + element : block;
    }
  }, {
    key: 'names',
    get: function get() {
      var _this = this;

      var options = this.options;
      var block = this.block;

      return options.map(function (option) {
        return new _ClassOption2.default(_this.base, option).toString();
      }).filter(function (string) {
        return string.length;
      });
    }
  }, {
    key: 'classes',
    get: function get() {
      var base = this.base;
      var names = this.names;

      return names.length ? [base].concat(names) : [base];
    }
  }]);

  return ClassNamesDeriver;
}();

exports.default = ClassNamesDeriver;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringOption = function () {
  function StringOption(base, option) {
    _classCallCheck(this, StringOption);

    this.base = base;
    this.option = option;
  }

  _createClass(StringOption, [{
    key: 'hasPrefix',
    value: function hasPrefix(character) {
      return this.option.indexOf(character) === 0;
    }
  }, {
    key: 'withoutPrefix',
    value: function withoutPrefix() {
      return this.option.substring(1);
    }
  }, {
    key: 'toModifier',
    value: function toModifier() {
      return this.base + '--' + this.withoutPrefix();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.isModifier ? this.toModifier() : this.option;
    }
  }, {
    key: 'isModifier',
    get: function get() {
      return this.hasPrefix('$') || this.hasPrefix('-');
    }
  }]);

  return StringOption;
}();

exports.default = StringOption;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ClassNamesDeriver = __webpack_require__(0);

var _ClassNamesDeriver2 = _interopRequireDefault(_ClassNamesDeriver);

var _elementClassNames = __webpack_require__(5);

var _elementClassNames2 = _interopRequireDefault(_elementClassNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bem(block) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var factory = function factory(element) {
    for (var _len2 = arguments.length, elementArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      elementArgs[_key2 - 1] = arguments[_key2];
    }

    return _elementClassNames2.default.apply(undefined, [block, element].concat(elementArgs));
  };

  factory.toString = function () {
    return new (Function.prototype.bind.apply(_ClassNamesDeriver2.default, [null].concat([block, false], args)))().toString();
  };

  return factory;
}

module.exports = bem;
exports.default = bem;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectOption = __webpack_require__(4);

var _ObjectOption2 = _interopRequireDefault(_ObjectOption);

var _StringOption = __webpack_require__(1);

var _StringOption2 = _interopRequireDefault(_StringOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClassOption = function () {
  function ClassOption(base, option) {
    _classCallCheck(this, ClassOption);

    this.base = base;
    this.option = option;

    if (this.isObject) {
      return new _ObjectOption2.default(base, option);
    } else if (this.isString) {
      return new _StringOption2.default(base, option);
    }

    return '';
  }

  _createClass(ClassOption, [{
    key: 'isObject',
    get: function get() {
      return this.option !== null && _typeof(this.option) === 'object';
    }
  }, {
    key: 'isString',
    get: function get() {
      return this.option instanceof String || typeof this.option === 'string';
    }
  }]);

  return ClassOption;
}();

exports.default = ClassOption;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StringOption = __webpack_require__(1);

var _StringOption2 = _interopRequireDefault(_StringOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectOption = function () {
  function ObjectOption(base, option) {
    _classCallCheck(this, ObjectOption);

    this.base = base;
    this.option = option;
  }

  _createClass(ObjectOption, [{
    key: 'keyToString',
    value: function keyToString(key) {
      return new _StringOption2.default(this.base, key).toString();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.classNames.join(' ');
    }
  }, {
    key: 'classNames',
    get: function get() {
      var _this = this;

      return Object.keys(this.option).reduce(function (names, key) {
        return _this.option[key] ? names.concat(_this.keyToString(key)) : names;
      }, []);
    }
  }]);

  return ObjectOption;
}();

exports.default = ObjectOption;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = elementClassNames;

var _ClassNamesDeriver = __webpack_require__(0);

var _ClassNamesDeriver2 = _interopRequireDefault(_ClassNamesDeriver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function elementClassNames(block, element) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var factory = function factory() {
    for (var _len2 = arguments.length, elementArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      elementArgs[_key2] = arguments[_key2];
    }

    return elementClassNames.apply(undefined, [block, element].concat(_toConsumableArray(args.concat(elementArgs))));
  };

  factory.toString = function () {
    return new (Function.prototype.bind.apply(_ClassNamesDeriver2.default, [null].concat([block, element], args)))().toString();
  };

  return factory;
}

/***/ })
/******/ ]);
});