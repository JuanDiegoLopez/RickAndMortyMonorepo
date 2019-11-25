/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/router.js":
/*!***********************!*\
  !*** ./lib/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
  function Router() {
    _classCallCheck(this, Router);

    this.routes = [];
    this.mode = null;
    this.root = '/';
  }

  _createClass(Router, [{
    key: 'config',
    value: function config(options) {
      this.mode = options && options.mode && options.mode === 'history' && !!history.pushState ? 'history' : 'hash';
      this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';
    }
  }, {
    key: 'getFragment',
    value: function getFragment() {
      var fragment = '';

      if (this.mode === 'history') {
        fragment = this.clearSlashes(decodeURI(location.pathname));
        fragment = fragment.replace(/\?(.*)$/, '');
        fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
      } else {
        var match = window.location.href.match(/·(.*)$/);
        fragment = match ? match[1] : '';
      }

      return this.clearSlashes(fragment);
    }
  }, {
    key: 'clearSlashes',
    value: function clearSlashes(path) {
      return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }
  }, {
    key: 'add',
    value: function add(re, handler) {
      if (typeof re === 'function') {
        handler = re;
        re = '';
      }

      this.routes.push({ re: re, handler: handler });
    }
  }, {
    key: 'remove',
    value: function remove(param) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.routes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var route = _step.value;

          if (route.handler === param || route.re.toString() === param.toString()) {
            var index = this.routes.indexOf(route);
            this.routes.splice(index, 1);
            return;
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
    }
  }, {
    key: 'flush',
    value: function flush() {
      this.routes = [];
      this.mode = null;
      this.root = '/';
    }
  }, {
    key: 'check',
    value: function check(f) {
      var fragment = f || this.getFragment();

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.routes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var route = _step2.value;

          var match = fragment.match(route.re);

          if (match) {
            match.shift();
            route.handler.apply({}, match);
            return;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'listen',
    value: function listen() {
      var self = this;
      var current = self.getFragment();

      var fn = function fn() {
        if (current !== self.getFragment()) {
          current = self.getFragment();
          self.check(current);
        }
      };

      clearInterval(this.interval);
      this.interval = setInterval(fn, 50);
    }
  }, {
    key: 'navigate',
    value: function navigate(path) {
      path = path ? path : '';

      if (this.mode === 'history') {
        history.pushState(null, null, '' + this.root + this.clearSlashes(path));
      } else {
        window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
      }
    }
  }]);

  return Router;
}();

exports.default = Router;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "75509f2ec9725b3cef07eefe651a4a8f.png";

/***/ }),

/***/ "./src/components/characters/characters.js":
/*!*************************************************!*\
  !*** ./src/components/characters/characters.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _characters = __webpack_require__(/*! ./characters.pug */ "./src/components/characters/characters.pug");

var _characters2 = _interopRequireDefault(_characters);

var _characters3 = __webpack_require__(/*! ./characters.scss */ "./src/components/characters/characters.scss");

var _characters4 = _interopRequireDefault(_characters3);

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var _router = __webpack_require__(/*! ../../router */ "./src/router.js");

var _router2 = _interopRequireDefault(_router);

var _characters5 = __webpack_require__(/*! ../../services/characters */ "./src/services/characters.js");

var _characters6 = _interopRequireDefault(_characters5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paginationStart = 1;
var paginationEnd = 10;

var checkPagination = function checkPagination(currentPage, totalPages) {
  if (currentPage > paginationEnd && currentPage <= totalPages) {
    paginationStart = currentPage - 9;
    paginationEnd = currentPage;
  }

  if (currentPage < paginationStart) {
    paginationStart = currentPage;
    paginationEnd = currentPage + 9;
  }
};

var createComponent = function createComponent(data, currentPage) {
  var currentPageParsed = parseInt(currentPage, 10);
  checkPagination(currentPage, data.info.pages);

  var vars = {
    characters: data.results,
    pagination: {
      current: currentPageParsed,
      total: data.info.pages,
      start: paginationStart,
      end: paginationEnd
    }
  };

  _utils.elements.content.innerHTML = (0, _characters2.default)(vars);
  _utils.elements.content.style.cssText = _characters4.default;
};

var setupListeners = function setupListeners() {
  var links = _utils.elements.content.getElementsByTagName('a');
  var characters = _utils.elements.content.getElementsByClassName('character');

  Array.from(links).forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      _router2.default.navigate(link.getAttribute('href'));
    });
  });

  Array.from(characters).forEach(function (character) {
    character.addEventListener('click', function () {
      _router2.default.navigate('/details/' + character.id);
    });
  });
};

var CharactersComponent = async function CharactersComponent(page) {
  try {
    var response = await _characters6.default.getAllCharacters(page);
    var data = await response.json();

    createComponent(data, page);
    setupListeners();
  } catch (error) {
    (0, _utils.HandleError)(error);
  }
};

exports.default = CharactersComponent;

/***/ }),

/***/ "./src/components/characters/characters.pug":
/*!**************************************************!*\
  !*** ./src/components/characters/characters.pug ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (characters, pagination, parseInt) {pug_html = pug_html + "\u003Capp-characters\u003E\u003Cdiv class=\"flex-container\"\u003E";
// iterate characters
;(function(){
  var $$obj = characters;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var character = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\"\u003E\u003Cdiv" + (" class=\"card hoverable character\""+pug.attr("id", character.id, true, true)) + "\u003E \u003Cdiv class=\"card-image\"\u003E\u003Cimg" + (pug.attr("src", character.image, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card-content\"\u003E\u003Cspan class=\"cart-title\"\u003E" + (pug.escape(null == (pug_interp = character.name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var character = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\"\u003E\u003Cdiv" + (" class=\"card hoverable character\""+pug.attr("id", character.id, true, true)) + "\u003E \u003Cdiv class=\"card-image\"\u003E\u003Cimg" + (pug.attr("src", character.image, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card-content\"\u003E\u003Cspan class=\"cart-title\"\u003E" + (pug.escape(null == (pug_interp = character.name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
const page = parseInt(pagination.current);
pug_html = pug_html + "\u003Cul class=\"pagination center\"\u003E";
if ((page - 1) === 0) {
pug_html = pug_html + "\u003Cli class=\"disabled\"\u003E\u003Ca href=\"#!\"\u003E\u003Ci class=\"material-icons\"\u003Echevron_left\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"waves-effect\"\u003E\u003Ca" + (pug.attr("href", `/characters/${page - 1}`, true, true)) + "\u003E\u003Ci class=\"material-icons\"\u003Echevron_left\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
for(let i = pagination.start; i <= pagination.end; i++) {
{
if (i == page) {
pug_html = pug_html + "\u003Cli class=\"active\"\u003E\u003Ca" + (" class=\"white-text\""+pug.attr("href", `/characters/${i}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = i) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"waves-effect\"\u003E\u003Ca" + (pug.attr("href", `/characters/${i}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = i) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
}
}
if (page === pagination.total) {
pug_html = pug_html + "\u003Cli class=\"disabled\"\u003E\u003Ca href=\"#!\"\u003E\u003Ci class=\"material-icons\"\u003Echevron_right\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"waves-effect\"\u003E\u003Ca" + (pug.attr("href", `/characters/${page + 1}`, true, true)) + "\u003E\u003Ci class=\"material-icons\"\u003Echevron_right\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fapp-characters\u003E";}.call(this,"characters" in locals_for_with?locals_for_with.characters:typeof characters!=="undefined"?characters:undefined,"pagination" in locals_for_with?locals_for_with.pagination:typeof pagination!=="undefined"?pagination:undefined,"parseInt" in locals_for_with?locals_for_with.parseInt:typeof parseInt!=="undefined"?parseInt:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/components/characters/characters.scss":
/*!***************************************************!*\
  !*** ./src/components/characters/characters.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/details/details.js":
/*!*******************************************!*\
  !*** ./src/components/details/details.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _details = __webpack_require__(/*! ./details.pug */ "./src/components/details/details.pug");

var _details2 = _interopRequireDefault(_details);

__webpack_require__(/*! ./details.scss */ "./src/components/details/details.scss");

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var _characters = __webpack_require__(/*! ../../services/characters */ "./src/services/characters.js");

var _characters2 = _interopRequireDefault(_characters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createComponent = function createComponent(character) {
  _utils.elements.content.innerHTML = (0, _details2.default)({ character: character });
};

var DetailsComponent = async function DetailsComponent(id) {
  try {
    var response = await _characters2.default.getCharacterById(id);
    var data = await response.json();

    createComponent(data);
  } catch (error) {
    (0, _utils.HandleError)(error);
  }
};

exports.default = DetailsComponent;

/***/ }),

/***/ "./src/components/details/details.pug":
/*!********************************************!*\
  !*** ./src/components/details/details.pug ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (character) {pug_html = pug_html + "\u003Capp-details\u003E\u003Cdiv class=\"flex-container\"\u003E\u003Cdiv class=\"col-xs-12 col-sm-6 col-md-4\"\u003E\u003Cdiv class=\"image-container\"\u003E\u003Ch4\u003E" + (pug.escape(null == (pug_interp = character.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E\u003Cimg" + (pug.attr("src", character.image, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-xs-12 col-sm-6 col-md-8\"\u003E\u003Ch4\u003ECharacter Data\u003C\u002Fh4\u003E\u003Cdiv class=\"collection\"\u003E\u003Cdiv class=\"collection-item\"\u003E\u003Cb\u003EStatus: \u003C\u002Fb\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = character.status) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"collection-item\"\u003E\u003Cb\u003ESpecie: \u003C\u002Fb\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = character.species) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"collection-item\"\u003E\u003Cb\u003EGender: \u003C\u002Fb\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = character.gender) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"collection-item\"\u003E\u003Cb\u003EOrigin: \u003C\u002Fb\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = character.origin.name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"collection-item\"\u003E\u003Cb\u003EDescription: \u003C\u002Fb\u003E\u003Cp\u003ELorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum tenetur voluptatum. Beatae magni perspiciatis culpa accusamus placeat voluptatem veniam voluptatibus dolorem! Enim, nulla! Officiis cumque saepe velit officia voluptates!\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fapp-details\u003E";}.call(this,"character" in locals_for_with?locals_for_with.character:typeof character!=="undefined"?character:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/components/details/details.scss":
/*!*********************************************!*\
  !*** ./src/components/details/details.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/home/home.js":
/*!*************************************!*\
  !*** ./src/components/home/home.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _characters = __webpack_require__(/*! ../../services/characters */ "./src/services/characters.js");

var _characters2 = _interopRequireDefault(_characters);

var _utils = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var _router = __webpack_require__(/*! ../../router */ "./src/router.js");

var _router2 = _interopRequireDefault(_router);

var _home = __webpack_require__(/*! ./home.pug */ "./src/components/home/home.pug");

var _home2 = _interopRequireDefault(_home);

__webpack_require__(/*! ./home.scss */ "./src/components/home/home.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createComponent = function createComponent(characters) {
  _utils.elements.content.innerHTML = (0, _home2.default)({ characters: characters });

  var button = _utils.elements.content.querySelector('.btn');
  button.addEventListener('click', function () {
    _router2.default.navigate('/characters/1');
  });
};

var HomeComponent = async function HomeComponent() {
  try {
    var response = await _characters2.default.getMainCharacters();
    var data = await response.json();

    createComponent(data);
  } catch (error) {
    (0, _utils.HandleError)(error);
  }
};

exports.default = HomeComponent;

/***/ }),

/***/ "./src/components/home/home.pug":
/*!**************************************!*\
  !*** ./src/components/home/home.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (characters) {pug_html = pug_html + "\u003Capp-home\u003E\u003Cdiv class=\"flex-container\"\u003E";
// iterate characters
;(function(){
  var $$obj = characters;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var character = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"col-xs-12 col-sm-4\"\u003E\u003Cdiv class=\"card\"\u003E\u003Cdiv class=\"card-image\"\u003E\u003Cimg" + (pug.attr("src", character.image, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card-content\"\u003E\u003Cspan class=\"card-title\"\u003E" + (pug.escape(null == (pug_interp = character.name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var character = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"col-xs-12 col-sm-4\"\u003E\u003Cdiv class=\"card\"\u003E\u003Cdiv class=\"card-image\"\u003E\u003Cimg" + (pug.attr("src", character.image, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card-content\"\u003E\u003Cspan class=\"card-title\"\u003E" + (pug.escape(null == (pug_interp = character.name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cbutton class=\"btn waves-effect waves-light right\"\u003EVer todos\u003C\u002Fbutton\u003E\u003C\u002Fapp-home\u003E";}.call(this,"characters" in locals_for_with?locals_for_with.characters:typeof characters!=="undefined"?characters:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/components/home/home.scss":
/*!***************************************!*\
  !*** ./src/components/home/home.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONFIG = {
  API_URL: 'https://rickandmortyapi.com/api'
};

exports.default = CONFIG;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");

__webpack_require__(/*! ./scss/grid.scss */ "./src/scss/grid.scss");

var _logo = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");

var _logo2 = _interopRequireDefault(_logo);

var _router = __webpack_require__(/*! ./router */ "./src/router.js");

var _router2 = _interopRequireDefault(_router);

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _home = __webpack_require__(/*! ./components/home/home */ "./src/components/home/home.js");

var _home2 = _interopRequireDefault(_home);

var _characters = __webpack_require__(/*! ./components/characters/characters */ "./src/components/characters/characters.js");

var _characters2 = _interopRequireDefault(_characters);

var _details = __webpack_require__(/*! ./components/details/details */ "./src/components/details/details.js");

var _details2 = _interopRequireDefault(_details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setupRouter = function setupRouter() {
  _router2.default.config({
    mode: 'history'
  });

  _router2.default.add(/home/, _home2.default);
  _router2.default.add(/characters\/(.*)/, _characters2.default);
  _router2.default.add(/details\/(.*)/, _details2.default);
  _router2.default.listen();
};

var init = function init() {
  var navbarItems = _utils.elements.navbar.getElementsByTagName('a');

  Array.from(navbarItems).forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      _router2.default.navigate(element.getAttribute('href'));
    });
  });

  var logoImage = new Image();
  logoImage.src = _logo2.default;

  var logoElement = document.getElementsByClassName('brand-logo')[0];
  logoElement.appendChild(logoImage);

  setupRouter();
  _router2.default.navigate('/home');
};

init();

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = __webpack_require__(/*! ../lib/router */ "./lib/router.js");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _router2.default();

exports.default = router;

/***/ }),

/***/ "./src/scss/grid.scss":
/*!****************************!*\
  !*** ./src/scss/grid.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/services/characters.js":
/*!************************************!*\
  !*** ./src/services/characters.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(/*! ../config */ "./src/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CharactersService = {
  getMainCharacters: function getMainCharacters() {
    return fetch(_config2.default.API_URL + '/character/1,2,3');
  },
  getAllCharacters: function getAllCharacters(page) {
    return fetch(_config2.default.API_URL + '/character/?page=' + page);
  },
  getCharacterById: function getCharacterById(id) {
    return fetch(_config2.default.API_URL + '/character/' + id);
  }
};

exports.default = CharactersService;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HandleError = function HandleError(error) {
  console.error(error);
};

var elements = {
  app: document.getElementById('app'),
  content: document.getElementById('content'),
  navbar: document.getElementById('navbar'),
  footer: document.getElementById('footer')
};

exports.HandleError = HandleError;
exports.elements = elements;

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hhcmFjdGVycy9jaGFyYWN0ZXJzLnB1ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMuc2Nzcz80MTA4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldGFpbHMvZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWxzL2RldGFpbHMucHVnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldGFpbHMvZGV0YWlscy5zY3NzP2JiYTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUvaG9tZS5wdWciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9ob21lLnNjc3M/NDFlNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2dyaWQuc2Nzcz80MzhiIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/OThhZiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY2hhcmFjdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2ZzIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyb3V0ZXMiLCJtb2RlIiwicm9vdCIsIm9wdGlvbnMiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiY2xlYXJTbGFzaGVzIiwiZnJhZ21lbnQiLCJkZWNvZGVVUkkiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVwbGFjZSIsIm1hdGNoIiwid2luZG93IiwiaHJlZiIsInBhdGgiLCJ0b1N0cmluZyIsInJlIiwiaGFuZGxlciIsInB1c2giLCJwYXJhbSIsInJvdXRlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZiIsImdldEZyYWdtZW50Iiwic2hpZnQiLCJhcHBseSIsInNlbGYiLCJjdXJyZW50IiwiZm4iLCJjaGVjayIsImNsZWFySW50ZXJ2YWwiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicGFnaW5hdGlvblN0YXJ0IiwicGFnaW5hdGlvbkVuZCIsImNoZWNrUGFnaW5hdGlvbiIsImN1cnJlbnRQYWdlIiwidG90YWxQYWdlcyIsImNyZWF0ZUNvbXBvbmVudCIsImRhdGEiLCJjdXJyZW50UGFnZVBhcnNlZCIsInBhcnNlSW50IiwiaW5mbyIsInBhZ2VzIiwidmFycyIsImNoYXJhY3RlcnMiLCJyZXN1bHRzIiwicGFnaW5hdGlvbiIsInRvdGFsIiwic3RhcnQiLCJlbmQiLCJlbGVtZW50cyIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzdHlsZSIsImNzc1RleHQiLCJzZXR1cExpc3RlbmVycyIsImxpbmtzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImxpbmsiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJvdXRlciIsIm5hdmlnYXRlIiwiZ2V0QXR0cmlidXRlIiwiY2hhcmFjdGVyIiwiaWQiLCJDaGFyYWN0ZXJzQ29tcG9uZW50IiwicGFnZSIsInJlc3BvbnNlIiwiQ2hhcmFjdGVyc1NlcnZpY2UiLCJnZXRBbGxDaGFyYWN0ZXJzIiwianNvbiIsImVycm9yIiwiRGV0YWlsc0NvbXBvbmVudCIsImdldENoYXJhY3RlckJ5SWQiLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yIiwiSG9tZUNvbXBvbmVudCIsImdldE1haW5DaGFyYWN0ZXJzIiwiQ09ORklHIiwiQVBJX1VSTCIsInNldHVwUm91dGVyIiwiY29uZmlnIiwiYWRkIiwibGlzdGVuIiwiaW5pdCIsIm5hdmJhckl0ZW1zIiwibmF2YmFyIiwiZWxlbWVudCIsImxvZ29JbWFnZSIsIkltYWdlIiwic3JjIiwiTG9nbyIsImxvZ29FbGVtZW50IiwiZG9jdW1lbnQiLCJhcHBlbmRDaGlsZCIsImZldGNoIiwiQ29uZmlnIiwiSGFuZGxlRXJyb3IiLCJjb25zb2xlIiwiYXBwIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZNQSxNO0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFL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O0FBQzdCMkIsVUFBUTNCLEtBQVIsQ0FBY0EsS0FBZDtBQUNELENBRkQ7O0FBSUEsSUFBTTNCLFdBQVc7QUFDZnVELE9BQUtOLFNBQVNPLGNBQVQsQ0FBd0IsS0FBeEIsQ0FEVTtBQUVmdkQsV0FBU2dELFNBQVNPLGNBQVQsQ0FBd0IsU0FBeEIsQ0FGTTtBQUdmZCxVQUFRTyxTQUFTTyxjQUFULENBQXdCLFFBQXhCLENBSE87QUFJZkMsVUFBUVIsU0FBU08sY0FBVCxDQUF3QixRQUF4QjtBQUpPLENBQWpCOztRQVFFSCxXLEdBQUFBLFc7UUFDQXJELFEsR0FBQUEsUTs7Ozs7Ozs7Ozs7QUNiRixlIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNsYXNzIFJvdXRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcclxuICAgIHRoaXMubW9kZSA9IG51bGw7XHJcbiAgICB0aGlzLnJvb3QgPSAnLyc7XHJcbiAgfVxyXG5cclxuICBjb25maWcob3B0aW9ucykge1xyXG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucyAmJiBvcHRpb25zLm1vZGUgJiYgb3B0aW9ucy5tb2RlID09PSAnaGlzdG9yeScgJiYgISEoaGlzdG9yeS5wdXNoU3RhdGUpID8gJ2hpc3RvcnknIDogJ2hhc2gnO1xyXG4gICAgdGhpcy5yb290ID0gb3B0aW9ucyAmJiBvcHRpb25zLnJvb3QgPyBgLyR7dGhpcy5jbGVhclNsYXNoZXMob3B0aW9ucy5yb290KX0vYCA6ICcvJztcclxuICB9XHJcblxyXG4gIGdldEZyYWdtZW50KCkge1xyXG4gICAgbGV0IGZyYWdtZW50ID0gJyc7XHJcbiAgXHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnaGlzdG9yeScpIHtcclxuICAgICAgZnJhZ21lbnQgPSB0aGlzLmNsZWFyU2xhc2hlcyhkZWNvZGVVUkkobG9jYXRpb24ucGF0aG5hbWUpKTtcclxuICAgICAgZnJhZ21lbnQgPSBmcmFnbWVudC5yZXBsYWNlKC9cXD8oLiopJC8sICcnKTtcclxuICAgICAgZnJhZ21lbnQgPSB0aGlzLnJvb3QgIT09ICcvJyA/IGZyYWdtZW50LnJlcGxhY2UodGhpcy5yb290LCAnJykgOiBmcmFnbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1hdGNoID0gd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goL8K3KC4qKSQvKTtcclxuICAgICAgZnJhZ21lbnQgPSBtYXRjaCA/IG1hdGNoWzFdIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2xlYXJTbGFzaGVzKGZyYWdtZW50KTtcclxuICB9XHJcblxyXG4gIGNsZWFyU2xhc2hlcyhwYXRoKSB7XHJcbiAgICByZXR1cm4gcGF0aC50b1N0cmluZygpLnJlcGxhY2UoL1xcLyQvLCAnJykucmVwbGFjZSgvXlxcLy8sICcnKTtcclxuICB9XHJcblxyXG4gIGFkZChyZSwgaGFuZGxlcikge1xyXG4gICAgaWYgKHR5cGVvZiByZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBoYW5kbGVyID0gcmU7XHJcbiAgICAgIHJlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yb3V0ZXMucHVzaCh7IHJlLCBoYW5kbGVyIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKHBhcmFtKSB7XHJcbiAgICBmb3IgKGxldCByb3V0ZSBvZiB0aGlzLnJvdXRlcykge1xyXG4gICAgICBpZiAocm91dGUuaGFuZGxlciA9PT0gcGFyYW0gfHwgcm91dGUucmUudG9TdHJpbmcoKSA9PT0gcGFyYW0udG9TdHJpbmcoKSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yb3V0ZXMuaW5kZXhPZihyb3V0ZSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZsdXNoKCkge1xyXG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcclxuICAgIHRoaXMubW9kZSA9IG51bGw7XHJcbiAgICB0aGlzLnJvb3QgPSAnLyc7XHJcbiAgfVxyXG5cclxuICBjaGVjayhmKSB7XHJcbiAgICBjb25zdCBmcmFnbWVudCA9IGYgfHwgdGhpcy5nZXRGcmFnbWVudCgpO1xyXG5cclxuICAgIGZvciAoY29uc3Qgcm91dGUgb2YgdGhpcy5yb3V0ZXMpIHtcclxuICAgICAgY29uc3QgbWF0Y2ggPSBmcmFnbWVudC5tYXRjaChyb3V0ZS5yZSk7XHJcblxyXG4gICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICBtYXRjaC5zaGlmdCgpO1xyXG4gICAgICAgIHJvdXRlLmhhbmRsZXIuYXBwbHkoe30sIG1hdGNoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxpc3RlbigpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IGN1cnJlbnQgPSBzZWxmLmdldEZyYWdtZW50KCk7XHJcblxyXG4gICAgY29uc3QgZm4gPSAoKSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50ICE9PSBzZWxmLmdldEZyYWdtZW50KCkpIHtcclxuICAgICAgICBjdXJyZW50ID0gc2VsZi5nZXRGcmFnbWVudCgpO1xyXG4gICAgICAgIHNlbGYuY2hlY2soY3VycmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmbiwgNTApO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGUocGF0aCkge1xyXG4gICAgcGF0aCA9IHBhdGggPyBwYXRoIDogJyc7XHJcblxyXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hpc3RvcnknKSB7XHJcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAke3RoaXMucm9vdH0ke3RoaXMuY2xlYXJTbGFzaGVzKHBhdGgpfWApO1xyXG4gICAgfSAgZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7d2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvIyguKikkLywgJycpfSMke3BhdGh9YDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzU1MDlmMmVjOTcyNWIzY2VmMDdlZWZlNjUxYTRhOGYucG5nXCI7IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vY2hhcmFjdGVycy5wdWcnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vY2hhcmFjdGVycy5zY3NzJztcblxuaW1wb3J0IHsgSGFuZGxlRXJyb3IsIGVsZW1lbnRzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi8uLi9yb3V0ZXInO1xuaW1wb3J0IENoYXJhY3RlcnNTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoYXJhY3RlcnMnO1xuXG5sZXQgcGFnaW5hdGlvblN0YXJ0ID0gMTtcbmxldCBwYWdpbmF0aW9uRW5kID0gMTA7XG5cbmNvbnN0IGNoZWNrUGFnaW5hdGlvbiA9IChjdXJyZW50UGFnZSwgdG90YWxQYWdlcykgPT4ge1xuICBpZiAoY3VycmVudFBhZ2UgPiBwYWdpbmF0aW9uRW5kICYmIGN1cnJlbnRQYWdlIDw9IHRvdGFsUGFnZXMpIHtcbiAgICBwYWdpbmF0aW9uU3RhcnQgPSBjdXJyZW50UGFnZSAtIDk7XG4gICAgcGFnaW5hdGlvbkVuZCA9IGN1cnJlbnRQYWdlO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRQYWdlIDwgcGFnaW5hdGlvblN0YXJ0KSB7XG4gICAgcGFnaW5hdGlvblN0YXJ0ID0gY3VycmVudFBhZ2U7XG4gICAgcGFnaW5hdGlvbkVuZCA9IGN1cnJlbnRQYWdlICsgOTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlQ29tcG9uZW50ID0gKGRhdGEsIGN1cnJlbnRQYWdlKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRQYWdlUGFyc2VkID0gcGFyc2VJbnQoY3VycmVudFBhZ2UsIDEwKTtcbiAgY2hlY2tQYWdpbmF0aW9uKGN1cnJlbnRQYWdlLCBkYXRhLmluZm8ucGFnZXMpO1xuXG4gIGNvbnN0IHZhcnMgPSB7XG4gICAgY2hhcmFjdGVyczogZGF0YS5yZXN1bHRzLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGN1cnJlbnQ6IGN1cnJlbnRQYWdlUGFyc2VkLFxuICAgICAgdG90YWw6IGRhdGEuaW5mby5wYWdlcyxcbiAgICAgIHN0YXJ0OiBwYWdpbmF0aW9uU3RhcnQsXG4gICAgICBlbmQ6IHBhZ2luYXRpb25FbmQsXG4gICAgfSxcbiAgfTtcblxuICBlbGVtZW50cy5jb250ZW50LmlubmVySFRNTCA9IHRlbXBsYXRlKHZhcnMpO1xuICBlbGVtZW50cy5jb250ZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZTtcbn07XG5cbmNvbnN0IHNldHVwTGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBsaW5rcyA9IGVsZW1lbnRzLmNvbnRlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcbiAgY29uc3QgY2hhcmFjdGVycyA9IGVsZW1lbnRzLmNvbnRlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hhcmFjdGVyJyk7XG5cbiAgQXJyYXkuZnJvbShsaW5rcykuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByb3V0ZXIubmF2aWdhdGUobGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIEFycmF5LmZyb20oY2hhcmFjdGVycykuZm9yRWFjaCgoY2hhcmFjdGVyKSA9PiB7XG4gICAgY2hhcmFjdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcm91dGVyLm5hdmlnYXRlKGAvZGV0YWlscy8ke2NoYXJhY3Rlci5pZH1gKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBDaGFyYWN0ZXJzQ29tcG9uZW50ID0gYXN5bmMgKHBhZ2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IENoYXJhY3RlcnNTZXJ2aWNlLmdldEFsbENoYXJhY3RlcnMocGFnZSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNyZWF0ZUNvbXBvbmVudChkYXRhLCBwYWdlKTtcbiAgICBzZXR1cExpc3RlbmVycygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIEhhbmRsZUVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyc0NvbXBvbmVudDtcbiIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOzt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChjaGFyYWN0ZXJzLCBwYWdpbmF0aW9uLCBwYXJzZUludCkge3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NhcHAtY2hhcmFjdGVyc1xcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmbGV4LWNvbnRhaW5lclxcXCJcXHUwMDNFXCI7XG4vLyBpdGVyYXRlIGNoYXJhY3RlcnNcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gY2hhcmFjdGVycztcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIHB1Z19pbmRleDAgPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7IHB1Z19pbmRleDAgPCAkJGw7IHB1Z19pbmRleDArKykge1xuICAgICAgICB2YXIgY2hhcmFjdGVyID0gJCRvYmpbcHVnX2luZGV4MF07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTNcXFwiXFx1MDAzRVxcdTAwM0NkaXZcIiArIChcIiBjbGFzcz1cXFwiY2FyZCBob3ZlcmFibGUgY2hhcmFjdGVyXFxcIlwiK3B1Zy5hdHRyKFwiaWRcIiwgY2hhcmFjdGVyLmlkLCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZC1pbWFnZVxcXCJcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwic3JjXCIsIGNoYXJhY3Rlci5pbWFnZSwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIlxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwiY2FydC10aXRsZVxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gY2hhcmFjdGVyLm5hbWUpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xuICAgICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyIHB1Z19pbmRleDAgaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIGNoYXJhY3RlciA9ICQkb2JqW3B1Z19pbmRleDBdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0zXFxcIlxcdTAwM0VcXHUwMDNDZGl2XCIgKyAoXCIgY2xhc3M9XFxcImNhcmQgaG92ZXJhYmxlIGNoYXJhY3RlclxcXCJcIitwdWcuYXR0cihcImlkXCIsIGNoYXJhY3Rlci5pZCwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmQtaW1hZ2VcXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcInNyY1wiLCBjaGFyYWN0ZXIuaW1hZ2UsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcImNhcnQtdGl0bGVcXFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGNoYXJhY3Rlci5uYW1lKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbiAgICB9XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xuY29uc3QgcGFnZSA9IHBhcnNlSW50KHBhZ2luYXRpb24uY3VycmVudCk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDdWwgY2xhc3M9XFxcInBhZ2luYXRpb24gY2VudGVyXFxcIlxcdTAwM0VcIjtcbmlmICgocGFnZSAtIDEpID09PSAwKSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDbGkgY2xhc3M9XFxcImRpc2FibGVkXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjIVxcXCJcXHUwMDNFXFx1MDAzQ2kgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIlxcdTAwM0VjaGV2cm9uX2xlZnRcXHUwMDNDXFx1MDAyRmlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXCI7XG59XG5lbHNlIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NsaSBjbGFzcz1cXFwid2F2ZXMtZWZmZWN0XFxcIlxcdTAwM0VcXHUwMDNDYVwiICsgKHB1Zy5hdHRyKFwiaHJlZlwiLCBgL2NoYXJhY3RlcnMvJHtwYWdlIC0gMX1gLCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDaSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiXFx1MDAzRWNoZXZyb25fbGVmdFxcdTAwM0NcXHUwMDJGaVxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcIjtcbn1cbmZvcihsZXQgaSA9IHBhZ2luYXRpb24uc3RhcnQ7IGkgPD0gcGFnaW5hdGlvbi5lbmQ7IGkrKykge1xue1xuaWYgKGkgPT0gcGFnZSkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2xpIGNsYXNzPVxcXCJhY3RpdmVcXFwiXFx1MDAzRVxcdTAwM0NhXCIgKyAoXCIgY2xhc3M9XFxcIndoaXRlLXRleHRcXFwiXCIrcHVnLmF0dHIoXCJocmVmXCIsIGAvY2hhcmFjdGVycy8ke2l9YCwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcIjtcbn1cbmVsc2Uge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2xpIGNsYXNzPVxcXCJ3YXZlcy1lZmZlY3RcXFwiXFx1MDAzRVxcdTAwM0NhXCIgKyAocHVnLmF0dHIoXCJocmVmXCIsIGAvY2hhcmFjdGVycy8ke2l9YCwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcIjtcbn1cbn1cbn1cbmlmIChwYWdlID09PSBwYWdpbmF0aW9uLnRvdGFsKSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDbGkgY2xhc3M9XFxcImRpc2FibGVkXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjIVxcXCJcXHUwMDNFXFx1MDAzQ2kgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIlxcdTAwM0VjaGV2cm9uX3JpZ2h0XFx1MDAzQ1xcdTAwMkZpXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVwiO1xufVxuZWxzZSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDbGkgY2xhc3M9XFxcIndhdmVzLWVmZmVjdFxcXCJcXHUwMDNFXFx1MDAzQ2FcIiArIChwdWcuYXR0cihcImhyZWZcIiwgYC9jaGFyYWN0ZXJzLyR7cGFnZSArIDF9YCwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ2kgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIlxcdTAwM0VjaGV2cm9uX3JpZ2h0XFx1MDAzQ1xcdTAwMkZpXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZ1bFxcdTAwM0VcXHUwMDNDXFx1MDAyRmFwcC1jaGFyYWN0ZXJzXFx1MDAzRVwiO30uY2FsbCh0aGlzLFwiY2hhcmFjdGVyc1wiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguY2hhcmFjdGVyczp0eXBlb2YgY2hhcmFjdGVycyE9PVwidW5kZWZpbmVkXCI/Y2hhcmFjdGVyczp1bmRlZmluZWQsXCJwYWdpbmF0aW9uXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5wYWdpbmF0aW9uOnR5cGVvZiBwYWdpbmF0aW9uIT09XCJ1bmRlZmluZWRcIj9wYWdpbmF0aW9uOnVuZGVmaW5lZCxcInBhcnNlSW50XCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5wYXJzZUludDp0eXBlb2YgcGFyc2VJbnQhPT1cInVuZGVmaW5lZFwiP3BhcnNlSW50OnVuZGVmaW5lZCkpOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZGV0YWlscy5wdWcnO1xuaW1wb3J0ICcuL2RldGFpbHMuc2Nzcyc7XG5cbmltcG9ydCB7IGVsZW1lbnRzLCBIYW5kbGVFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBDaGFyYWN0ZXJzU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGFyYWN0ZXJzJztcblxuY29uc3QgY3JlYXRlQ29tcG9uZW50ID0gKGNoYXJhY3RlcikgPT4ge1xuICBlbGVtZW50cy5jb250ZW50LmlubmVySFRNTCA9IHRlbXBsYXRlKHsgY2hhcmFjdGVyIH0pO1xufTtcblxuY29uc3QgRGV0YWlsc0NvbXBvbmVudCA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQ2hhcmFjdGVyc1NlcnZpY2UuZ2V0Q2hhcmFjdGVyQnlJZChpZCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNyZWF0ZUNvbXBvbmVudChkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBIYW5kbGVFcnJvcihlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHNDb21wb25lbnQ7XG4iLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoY2hhcmFjdGVyKSB7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2FwcC1kZXRhaWxzXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZsZXgtY29udGFpbmVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImltYWdlLWNvbnRhaW5lclxcXCJcXHUwMDNFXFx1MDAzQ2g0XFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGNoYXJhY3Rlci5uYW1lKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGaDRcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwic3JjXCIsIGNoYXJhY3Rlci5pbWFnZSwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC04XFxcIlxcdTAwM0VcXHUwMDNDaDRcXHUwMDNFQ2hhcmFjdGVyIERhdGFcXHUwMDNDXFx1MDAyRmg0XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbGxlY3Rpb25cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbGxlY3Rpb24taXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2JcXHUwMDNFU3RhdHVzOiBcXHUwMDNDXFx1MDAyRmJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gY2hhcmFjdGVyLnN0YXR1cykgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29sbGVjdGlvbi1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYlxcdTAwM0VTcGVjaWU6IFxcdTAwM0NcXHUwMDJGYlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBjaGFyYWN0ZXIuc3BlY2llcykgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29sbGVjdGlvbi1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYlxcdTAwM0VHZW5kZXI6IFxcdTAwM0NcXHUwMDJGYlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBjaGFyYWN0ZXIuZ2VuZGVyKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb2xsZWN0aW9uLWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NiXFx1MDAzRU9yaWdpbjogXFx1MDAzQ1xcdTAwMkZiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGNoYXJhY3Rlci5vcmlnaW4ubmFtZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29sbGVjdGlvbi1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYlxcdTAwM0VEZXNjcmlwdGlvbjogXFx1MDAzQ1xcdTAwMkZiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRUxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBvc3NpbXVzIG5vc3RydW0gdGVuZXR1ciB2b2x1cHRhdHVtLiBCZWF0YWUgbWFnbmkgcGVyc3BpY2lhdGlzIGN1bHBhIGFjY3VzYW11cyBwbGFjZWF0IHZvbHVwdGF0ZW0gdmVuaWFtIHZvbHVwdGF0aWJ1cyBkb2xvcmVtISBFbmltLCBudWxsYSEgT2ZmaWNpaXMgY3VtcXVlIHNhZXBlIHZlbGl0IG9mZmljaWEgdm9sdXB0YXRlcyFcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhcHAtZGV0YWlsc1xcdTAwM0VcIjt9LmNhbGwodGhpcyxcImNoYXJhY3RlclwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguY2hhcmFjdGVyOnR5cGVvZiBjaGFyYWN0ZXIhPT1cInVuZGVmaW5lZFwiP2NoYXJhY3Rlcjp1bmRlZmluZWQpKTs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBDaGFyYWN0ZXJzU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGFyYWN0ZXJzJztcbmltcG9ydCB7IGVsZW1lbnRzLCBIYW5kbGVFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vLi4vcm91dGVyJztcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaG9tZS5wdWcnO1xuaW1wb3J0ICcuL2hvbWUuc2Nzcyc7XG5cbmNvbnN0IGNyZWF0ZUNvbXBvbmVudCA9IChjaGFyYWN0ZXJzKSA9PiB7XG4gIGVsZW1lbnRzLmNvbnRlbnQuaW5uZXJIVE1MID0gdGVtcGxhdGUoeyBjaGFyYWN0ZXJzIH0pO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGVsZW1lbnRzLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcm91dGVyLm5hdmlnYXRlKCcvY2hhcmFjdGVycy8xJyk7XG4gIH0pO1xufTtcblxuY29uc3QgSG9tZUNvbXBvbmVudCA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IENoYXJhY3RlcnNTZXJ2aWNlLmdldE1haW5DaGFyYWN0ZXJzKCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNyZWF0ZUNvbXBvbmVudChkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBIYW5kbGVFcnJvcihlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVDb21wb25lbnQ7XG4iLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoY2hhcmFjdGVycykge3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NhcHAtaG9tZVxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmbGV4LWNvbnRhaW5lclxcXCJcXHUwMDNFXCI7XG4vLyBpdGVyYXRlIGNoYXJhY3RlcnNcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gY2hhcmFjdGVycztcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIHB1Z19pbmRleDAgPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7IHB1Z19pbmRleDAgPCAkJGw7IHB1Z19pbmRleDArKykge1xuICAgICAgICB2YXIgY2hhcmFjdGVyID0gJCRvYmpbcHVnX2luZGV4MF07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmQtaW1hZ2VcXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcInNyY1wiLCBjaGFyYWN0ZXIuaW1hZ2UsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGNoYXJhY3Rlci5uYW1lKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbiAgICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgJCRsID0gMDtcbiAgICBmb3IgKHZhciBwdWdfaW5kZXgwIGluICQkb2JqKSB7XG4gICAgICAkJGwrKztcbiAgICAgIHZhciBjaGFyYWN0ZXIgPSAkJG9ialtwdWdfaW5kZXgwXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tNFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZC1pbWFnZVxcXCJcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwic3JjXCIsIGNoYXJhY3Rlci5pbWFnZSwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIlxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gY2hhcmFjdGVyLm5hbWUpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xuICAgIH1cbiAgfVxufSkuY2FsbCh0aGlzKTtcblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2J1dHRvbiBjbGFzcz1cXFwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCByaWdodFxcXCJcXHUwMDNFVmVyIHRvZG9zXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXFx1MDAzQ1xcdTAwMkZhcHAtaG9tZVxcdTAwM0VcIjt9LmNhbGwodGhpcyxcImNoYXJhY3RlcnNcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLmNoYXJhY3RlcnM6dHlwZW9mIGNoYXJhY3RlcnMhPT1cInVuZGVmaW5lZFwiP2NoYXJhY3RlcnM6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBDT05GSUcgPSB7XG4gIEFQSV9VUkw6ICdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENPTkZJRztcbiIsImltcG9ydCAnLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL3Njc3MvZ3JpZC5zY3NzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vYXNzZXRzL2xvZ28ucG5nJztcblxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcic7XG5cbmltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCBIb21lQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUnO1xuaW1wb3J0IENoYXJhY3RlcnNDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2NoYXJhY3RlcnMvY2hhcmFjdGVycyc7XG5pbXBvcnQgRGV0YWlsc0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvZGV0YWlscy9kZXRhaWxzJztcblxuY29uc3Qgc2V0dXBSb3V0ZXIgPSAoKSA9PiB7XG4gIHJvdXRlci5jb25maWcoe1xuICAgIG1vZGU6ICdoaXN0b3J5JyxcbiAgfSk7XG5cbiAgcm91dGVyLmFkZCgvaG9tZS8sIEhvbWVDb21wb25lbnQpO1xuICByb3V0ZXIuYWRkKC9jaGFyYWN0ZXJzXFwvKC4qKS8sIENoYXJhY3RlcnNDb21wb25lbnQpO1xuICByb3V0ZXIuYWRkKC9kZXRhaWxzXFwvKC4qKS8sIERldGFpbHNDb21wb25lbnQpO1xuICByb3V0ZXIubGlzdGVuKCk7XG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBjb25zdCBuYXZiYXJJdGVtcyA9IGVsZW1lbnRzLm5hdmJhci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xuXG4gIEFycmF5LmZyb20obmF2YmFySXRlbXMpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcm91dGVyLm5hdmlnYXRlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBsb2dvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgbG9nb0ltYWdlLnNyYyA9IExvZ287XG5cbiAgY29uc3QgbG9nb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdicmFuZC1sb2dvJylbMF07XG4gIGxvZ29FbGVtZW50LmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XG5cbiAgc2V0dXBSb3V0ZXIoKTtcbiAgcm91dGVyLm5hdmlnYXRlKCcvaG9tZScpO1xufTtcblxuaW5pdCgpO1xuIiwiaW1wb3J0IFJvdXRlciBmcm9tICcuLi9saWIvcm91dGVyJztcblxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IENoYXJhY3RlcnNTZXJ2aWNlID0ge1xuICBnZXRNYWluQ2hhcmFjdGVyczogKCkgPT4gZmV0Y2goYCR7Q29uZmlnLkFQSV9VUkx9L2NoYXJhY3Rlci8xLDIsM2ApLFxuICBnZXRBbGxDaGFyYWN0ZXJzOiAocGFnZSkgPT4gZmV0Y2goYCR7Q29uZmlnLkFQSV9VUkx9L2NoYXJhY3Rlci8/cGFnZT0ke3BhZ2V9YCksXG4gIGdldENoYXJhY3RlckJ5SWQ6IChpZCkgPT4gZmV0Y2goYCR7Q29uZmlnLkFQSV9VUkx9L2NoYXJhY3Rlci8ke2lkfWApLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyc1NlcnZpY2U7XG4iLCJjb25zdCBIYW5kbGVFcnJvciA9IChlcnJvcikgPT4ge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbn07XG5cbmNvbnN0IGVsZW1lbnRzID0ge1xuICBhcHA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSxcbiAgY29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSxcbiAgbmF2YmFyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyksXG4gIGZvb3RlcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpLFxufTtcblxuZXhwb3J0IHtcbiAgSGFuZGxlRXJyb3IsXG4gIGVsZW1lbnRzLFxufTtcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=