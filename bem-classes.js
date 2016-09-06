'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function isBemModifier(name) {
  return name.indexOf('$') == 0 || name.indexOf('-') == 0;
}

function isBemElement(name) {
  return name.indexOf('_') == 0;
}

function withoutPrefix(name) {
  return name.substring(1);
}

function toBemElement(base, string) {
  return base + '__' + string;
}

function toBemModifier(base, string) {
  return base + '--' + string;
}

function classFromString(base, string) {
  if (isBemElement(string)) {
    return toBemElement(base, withoutPrefix(string));
  } else if (isBemModifier(string)) {
    return toBemModifier(base, withoutPrefix(string));
  } else {
    return string;
  }
}

function classFromObject(base, object) {
  var classes = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(object)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (object[key]) {
        classes.push(classFromString(base, key));
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return classes;
}

var BemClasses = function () {
  function BemClasses() {
    _classCallCheck(this, BemClasses);

    this.classes = [];

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var i = 0; i < args.length; i++) {
      if (_typeof(args[i]) == 'object') {
        var _classes;

        (_classes = this.classes).push.apply(_classes, _toConsumableArray(classFromObject(this.base, args[i])));
      } else if (_typeof(args[i] == 'string')) {
        this.classes.push(classFromString(this.base, args[i]));
      }
    }
  }

  _createClass(BemClasses, [{
    key: Symbol.iterator,
    value: function value() {
      return this.classes;
    }
  }, {
    key: 'element',
    value: function element() {
      return this.e.apply(this, arguments);
    }
  }, {
    key: 'elem',
    value: function elem() {
      return this.e.apply(this, arguments);
    }
  }, {
    key: 'e',
    value: function e() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var element = toBemElement(this.base, args.shift());
      return new (Function.prototype.bind.apply(BemClasses, [null].concat([element], args)))();
    }
  }, {
    key: 'base',
    get: function get() {
      return this.classes[0] || '';
    }
  }, {
    key: 'string',
    get: function get() {
      return this.s;
    }
  }, {
    key: 's',
    get: function get() {
      return this.classes.join(' ');
    }
  }]);

  return BemClasses;
}();

function createInstance() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return new (Function.prototype.bind.apply(BemClasses, [null].concat(args)))();
}

module.exports = createInstance;
exports.default = createInstance;
