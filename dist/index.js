'use strict';

var jsxRuntime = require('react/jsx-runtime');
var antd = require('antd');
var React = require('react');
var framerMotion = require('framer-motion');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function useEventListener(eventType, callback, element) {
    if (element === void 0) { element = window; }
    var callbackRef = React.useRef(callback);
    React.useEffect(function () {
        callbackRef.current = callback;
    }, [callback]);
    React.useEffect(function () {
        if (element == null)
            return;
        var handler = function (e) { return callbackRef.current(e); };
        element.addEventListener(eventType, handler);
        return function () { return element.removeEventListener(eventType, handler); };
    }, [eventType, element]);
}

function useWindowSize() {
    var _a = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    }), windowSize = _a[0], setWindowSize = _a[1];
    useEventListener("resize", function () {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });
    return windowSize;
}

function useTimeout(callback, delay) {
    var callbackRef = React.useRef(callback);
    var timeoutRef = React.useRef();
    React.useEffect(function () {
        callbackRef.current = callback;
    }, [callback]);
    var set = React.useCallback(function () {
        timeoutRef.current = setTimeout(function () { return callbackRef.current(); }, delay);
    }, [delay]);
    var clear = React.useCallback(function () {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);
    React.useEffect(function () {
        set();
        return clear;
    }, [delay, set, clear]);
    var reset = React.useCallback(function () {
        clear();
        set();
    }, [clear, set]);
    return { reset: reset, clear: clear };
}

function useDebounce(callback, delay, dependencies) {
    var _a = useTimeout(callback, delay), reset = _a.reset, clear = _a.clear;
    React.useEffect(reset, __spreadArray(__spreadArray([], dependencies, true), [reset], false));
    React.useEffect(clear, []);
}

function useClickOutside(ref, cb) {
    var protectedRef = React.useRef(false);
    var clickEventProtected = function () {
        protectedRef.current = true;
    };
    useEventListener("click", function (e) {
        if (ref.current == null ||
            ref.current.contains(e.target) ||
            protectedRef.current) {
            protectedRef.current = false;
            return;
        }
        cb(e);
        protectedRef.current = false;
    }, document);
    return { clickEventProtected: clickEventProtected };
}

var useEffectSkipFirst = (function (cb, dependencies) {
    var ref = React.useRef(true);
    React.useEffect(function () {
        if (ref.current === false)
            cb();
        ref.current = false;
    }, __spreadArray([], dependencies, true));
});

var useLoading = (function (onSubmit) {
    var _a = React.useState(false), isLoading = _a[0], setIsLoading = _a[1];
    var callRef = React.useRef(0);
    var load = function () { return setIsLoading(true); };
    var notLoad = function () { return setIsLoading(false); };
    var handleActionLoad = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        load();
                        return [4 /*yield*/, onSubmit.apply(void 0, params)];
                    case 1:
                        result = _a.sent();
                        notLoad();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    var groupLoad = function (fun) {
        return function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            callRef.current += 1;
                            load();
                            return [4 /*yield*/, fun.apply(void 0, params)];
                        case 1:
                            result = _a.sent();
                            callRef.current -= 1;
                            if (callRef.current === 0) {
                                notLoad();
                            }
                            return [2 /*return*/, result];
                    }
                });
            });
        };
    };
    return {
        isLoading: isLoading,
        load: load,
        notLoad: notLoad,
        handleActionLoad: handleActionLoad,
        groupLoad: groupLoad,
    };
});

function useToggle(firstValue, secondValue) {
    var _a = React.useState(firstValue), value = _a[0], setValue = _a[1];
    var toggle = function () {
        return setValue(function (v) { return (v === firstValue ? secondValue : firstValue); });
    };
    var reset = function () { return setValue(firstValue); };
    return [value, toggle, reset];
}

function useMousePosition(ref, absolute) {
    if (absolute === void 0) { absolute = true; }
    var _a = React.useState({ x: 0, y: 0 }), coords = _a[0], setCoords = _a[1];
    var _b = useWindowSize(); _b.width; _b.height;
    React.useEffect(function () {
        var handleMouseMove = function (event) {
            setCoords({
                x: absolute ? event.clientX : event.offsetX,
                y: absolute ? event.clientY : event.offsetY,
            });
        };
        if (ref.current) {
            ref.current.addEventListener("mousemove", handleMouseMove);
        }
        return function () {
            if (ref.current) {
                ref.current.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, [ref]);
    return { x: coords.x, y: coords.y };
}

function useLeavePageNotification(active, config) {
    var icon = config.icon, text = config.text;
    var permRef = React.useRef(false);
    var notificationRef = React.useRef();
    var popNote = React.useCallback(function () {
        if (document.visibilityState === "hidden") {
            notificationRef.current = new Notification(text, {
                tag: "leave note",
                icon: icon,
            });
        }
        else {
            if (notificationRef.current)
                notificationRef.current.close();
        }
    }, []);
    React.useEffect(function () {
        if (active) {
            Notification.requestPermission().then(function (perm) {
                permRef.current = perm === "granted";
            });
            document.addEventListener("visibilitychange", popNote, true);
        }
        else {
            document.removeEventListener("visibilitychange", popNote, true);
        }
        return function () {
            permRef.current = false;
            document.removeEventListener("visibilitychange", popNote, true);
        };
    }, [active]);
}

function useThrottle(value, interval) {
    if (interval === void 0) { interval = 500; }
    var _a = React.useState(value), throttledValue = _a[0], setThrottledValue = _a[1];
    var lastExecuted = React.useRef(Date.now());
    React.useEffect(function () {
        if (Date.now() >= lastExecuted.current + interval) {
            lastExecuted.current = Date.now();
            setThrottledValue(value);
        }
        else {
            var timerId_1 = setTimeout(function () {
                lastExecuted.current = Date.now();
                setThrottledValue(value);
            }, interval);
            return function () { return clearTimeout(timerId_1); };
        }
    }, [value, interval]);
    return throttledValue;
}

var AsyncBtn = function (_a) {
    var children = _a.children, onClick = _a.onClick, loading = _a.loading, btnConfigs = __rest(_a, ["children", "onClick", "loading"]);
    var _b = useLoading(onClick), isLoading = _b.isLoading, handleActionLoad = _b.handleActionLoad;
    return (jsxRuntime.jsx(antd.Button, __assign({}, btnConfigs, { onClick: handleActionLoad, loading: loading || isLoading }, { children: children })));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = ".double-confirm-btn {\n  display: grid;\n  width: 100%;\n  overflow: hidden;\n  font-size: 12px;\n  border: 1px var(--gray-3) solid;\n  border-radius: var(--radius-2);\n  box-shadow: none;\n  place-items: center;\n  border: 1px solid #000;\n}\n.double-confirm-btn > span {\n  grid-row-start: 1;\n  grid-column-start: 1;\n}\n.double-confirm-btn:hover {\n  color: #000;\n  border-color: var(--gray-3);\n  box-shadow: var(--inner-shadow-2);\n}\n.double-confirm-btn .ant-btn {\n  border: none;\n}\n.double-confirm-btn .ant-btn:hover {\n  color: #000;\n  border-color: var(--gray-3);\n  box-shadow: var(--inner-shadow-2);\n}\n.double-confirm-btn .ant-btn-loading-icon {\n  margin-right: 0.5em;\n}\n\n.double-confirm-btn.ant-btn-dangerous.ant-btn-loading,\n.double-confirm-btn.ant-btn-dangerous {\n  background: var(--red-7);\n}\n.double-confirm-btn.ant-btn-dangerous.ant-btn-loading:hover,\n.double-confirm-btn.ant-btn-dangerous:hover {\n  background: var(--red-8);\n  box-shadow: var(--inner-shadow-2);\n}\n\n.double-confirm-btn.ant-btn-save.ant-btn-loading,\n.double-confirm-btn.ant-btn-save {\n  background: var(--green-7);\n}\n.double-confirm-btn.ant-btn-save.ant-btn-loading:hover,\n.double-confirm-btn.ant-btn-save:hover {\n  background: var(--green-8);\n  box-shadow: var(--inner-shadow-2);\n}\n";
styleInject(css_248z$3);

var IconContext = /*#__PURE__*/React.createContext({});
var Context = IconContext;

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

var classnamesExports = {};
var classnames = {
  get exports(){ return classnamesExports; },
  set exports(v){ classnamesExports = v; },
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var classNames = classnamesExports;

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];

// Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`
function toHsv(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`


function toHex(_ref2) {
  var r = _ref2.r,
      g = _ref2.g,
      b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.


function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间


  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate$1(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));

    patterns.push(_colorString);
  } // dark theme patterns


  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
          opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1677FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate$1(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});

/* eslint-disable no-console */
var warned = {};
function warning$1(valid, message) {
  // Support uglify
  if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning$1, valid, message);
}
/* eslint-enable */

function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

function contains(root, n) {
  if (!root) {
    return false;
  }

  // Use native if support
  if (root.contains) {
    return root.contains(n);
  }

  // `document.contains` not support with IE11
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

var APPEND_ORDER = 'data-rc-order';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    mark = _ref.mark;
  if (mark) {
    return mark.startsWith('data-') ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector('head');
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }
  return prepend ? 'prepend' : 'append';
}

/**
 * Find style which inject by rc-util
 */
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function (node) {
    return node.tagName === 'STYLE';
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option.csp,
    prepend = option.prepend;
  var styleNode = document.createElement('style');
  styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    // If is queue `prepend`, it will prepend first style and then append rest style
    if (prepend === 'queue') {
      var existStyle = findStyles(container).filter(function (node) {
        return ['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER));
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }

    // Use `insertBefore` as `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function (node) {
    return node.getAttribute(getMark(option)) === key;
  });
}

/**
 * qiankun will inject `appendChild` to insert into other
 */
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);

  // Find real container when not cached or cached container removed
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(option);

  // Sync real parent
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

function warning(valid, message) {
  warningOnce(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        acc[key] = val;
    }
    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/React.createElement(node.tag, _objectSpread2({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  return /*#__PURE__*/React.createElement(node.tag, _objectSpread2(_objectSpread2({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;
  var _useContext = React.useContext(Context),
    csp = _useContext.csp,
    prefixCls = _useContext.prefixCls;
  var mergedStyleStr = styleStr;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  React.useEffect(function () {
    updateCSS(mergedStyleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp
    });
  }, []);
};

var _excluded$1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
    secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase(props) {
  var icon = props.icon,
    className = props.className,
    onClick = props.onClick,
    style = props.style,
    primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor,
    restProps = _objectWithoutProperties(props, _excluded$1);
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles();
  warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === 'function') {
    target = _objectSpread2(_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate(target.icon, "svg-".concat(target.name), _objectSpread2({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps));
};
IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var ReactIcon = IconBase;

function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return ReactIcon.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = ReactIcon.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}

var _excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
// Initial setting
// should move it to antd main repo?
setTwoToneColor('#1890ff');
var Icon = /*#__PURE__*/React__namespace.forwardRef(function (props, ref) {
  var _classNames;
  var className = props.className,
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    twoToneColor = props.twoToneColor,
    restProps = _objectWithoutProperties(props, _excluded);
  var _React$useContext = React__namespace.useContext(Context),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = classNames(rootClassName, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return /*#__PURE__*/React__namespace.createElement("span", _objectSpread2(_objectSpread2({
    role: "img",
    "aria-label": icon.name
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/React__namespace.createElement(ReactIcon, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon = Icon;

// This icon file is generated automatically.
var CheckOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
var CheckOutlinedSvg = CheckOutlined$2;

var CheckOutlined = function CheckOutlined(props, ref) {
  return /*#__PURE__*/React__namespace.createElement(AntdIcon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    icon: CheckOutlinedSvg
  }));
};
CheckOutlined.displayName = 'CheckOutlined';
var CheckOutlined$1 = /*#__PURE__*/React__namespace.forwardRef(CheckOutlined);

// This icon file is generated automatically.
var CopyOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, "name": "copy", "theme": "outlined" };
var CopyOutlinedSvg = CopyOutlined$2;

var CopyOutlined = function CopyOutlined(props, ref) {
  return /*#__PURE__*/React__namespace.createElement(AntdIcon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    icon: CopyOutlinedSvg
  }));
};
CopyOutlined.displayName = 'CopyOutlined';
var CopyOutlined$1 = /*#__PURE__*/React__namespace.forwardRef(CopyOutlined);

// This icon file is generated automatically.
var LoadingOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
var LoadingOutlinedSvg = LoadingOutlined$2;

var LoadingOutlined = function LoadingOutlined(props, ref) {
  return /*#__PURE__*/React__namespace.createElement(AntdIcon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    icon: LoadingOutlinedSvg
  }));
};
LoadingOutlined.displayName = 'LoadingOutlined';
var LoadingOutlined$1 = /*#__PURE__*/React__namespace.forwardRef(LoadingOutlined);

// This icon file is generated automatically.
var PlusOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
var PlusOutlinedSvg = PlusOutlined$2;

var PlusOutlined = function PlusOutlined(props, ref) {
  return /*#__PURE__*/React__namespace.createElement(AntdIcon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    icon: PlusOutlinedSvg
  }));
};
PlusOutlined.displayName = 'PlusOutlined';
var PlusOutlined$1 = /*#__PURE__*/React__namespace.forwardRef(PlusOutlined);

var DoubleConfirmBtn = function (_a) {
    var _b = _a.loading, loading = _b === void 0 ? false : _b, label = _a.label, secondaryText = _a.secondaryText, _c = _a.secondaryType, secondaryType = _c === void 0 ? "danger" : _c, // DANGER OR SAVE, default to DANGER
    _d = _a.size, // DANGER OR SAVE, default to DANGER
    size = _d === void 0 ? "middle" : _d, onConfirm = _a.onConfirm, shape = _a.shape, _e = _a.disabled, disabled = _e === void 0 ? false : _e;
    var btnRef = React.useRef(null);
    var _f = React.useState(0), state = _f[0], setState = _f[1];
    var _g = useLoading(onConfirm), isLoading = _g.isLoading, handleActionLoad = _g.handleActionLoad;
    useClickOutside(btnRef, function () { return setState(0); });
    return (jsxRuntime.jsx(antd.Spin, __assign({ spinning: isLoading || loading, indicator: jsxRuntime.jsx(LoadingOutlined$1, { style: { fontSize: 16 }, spin: true }) }, { children: jsxRuntime.jsxs(antd.Button, __assign({ ref: btnRef, className: state === 0
                ? "double-confirm-btn"
                : secondaryType === "save"
                    ? "double-confirm-btn ant-btn-save"
                    : "double-confirm-btn ant-btn-dangerous", shape: shape, onClick: function (e) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            e.stopPropagation();
                            if (state === 0) {
                                setState(1);
                            }
                            if (!(state === 1)) return [3 /*break*/, 2];
                            return [4 /*yield*/, handleActionLoad()];
                        case 1:
                            _a.sent();
                            setState(0);
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); }, size: size, disabled: isLoading || loading || disabled }, { children: [jsxRuntime.jsx("span", __assign({ style: { visibility: state === 0 ? "visible" : "hidden" } }, { children: label })), jsxRuntime.jsx("span", __assign({ style: { visibility: state === 1 ? "visible" : "hidden" } }, { children: secondaryText }))] })) })));
};

var css_248z$2 = ".em__movable__tooltip__title {\n  position: fixed;\n  z-index: 1000;\n  padding: 8px 10px;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.8);\n  border-radius: 5px;\n  box-shadow: var(--shadow-4);\n}\n";
styleInject(css_248z$2);

var offsetX = 5; // positive to move right
var offsetY = -5; // negative to move up
var EMPTY_TEXT_REPLACER = "-";
var MovableTitle = function (_a) {
    var title = _a.title, parentRef = _a.parentRef, style = _a.style;
    var elRef = React.useRef(null);
    var _b = React.useState(0), elHeight = _b[0], setElHeight = _b[1];
    var _c = React.useState(0), elWidth = _c[0], setElWidth = _c[1];
    var _d = useMousePosition(parentRef), x = _d.x, y = _d.y;
    React.useEffect(function () {
        console.log(1);
        if (elRef && elRef.current) {
            setElHeight(elRef.current.offsetHeight);
            setElWidth(elRef.current.offsetWidth);
        }
    }, [title]);
    return (jsxRuntime.jsx("div", __assign({ className: "em__movable__tooltip__title", style: __assign(__assign({}, style), { top: y - (elHeight || 0) + offsetY, left: x - (elWidth / 2 || 0) + offsetX, opacity: elHeight }), ref: elRef }, { children: title })));
};
var MovableTooltip = function (_a) {
    var children = _a.children, title = _a.title, floatContentStyle = _a.floatContentStyle;
    var elRef = React.useRef(null);
    var _b = React.useState(false), visible = _b[0], setVisible = _b[1];
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [visible && title && title !== EMPTY_TEXT_REPLACER && (jsxRuntime.jsx(MovableTitle, { title: title, parentRef: elRef, style: __assign({ fontSize: 12, fontWeight: "normal" }, floatContentStyle) })), jsxRuntime.jsx("div", __assign({ style: { display: "inline-block" }, ref: elRef, onMouseEnter: function () { return setVisible(true); }, onMouseLeave: function () { return setVisible(false); } }, { children: children }))] }));
};

var AbbrText = function (_a) {
    var trans = _a.trans, id = _a.id, _b = _a.movable, movable = _b === void 0 ? false : _b;
    return movable ? (jsxRuntime.jsx(MovableTooltip, __assign({ title: trans(id) }, { children: trans("".concat(id, ".abbr")) }))) : (jsxRuntime.jsx(antd.Tooltip, __assign({ title: trans(id) }, { children: trans("".concat(id, ".abbr")) })));
};

var LongTextColumn = function (props) {
    var _a = props.copy, copy = _a === void 0 ? false : _a, text = props.text, _b = props.hoverShow, hoverShow = _b === void 0 ? true : _b, maxWidth = props.maxWidth, _c = props.movable, movable = _c === void 0 ? false : _c, style = props.style;
    var _d = React.useState(false), copied = _d[0], setCopied = _d[1];
    return hoverShow ? (jsxRuntime.jsxs("div", __assign({ style: { display: "flex", alignItems: "center" } }, { children: [movable ? (jsxRuntime.jsx(MovableTooltip, __assign({ title: text }, { children: jsxRuntime.jsx("div", __assign({ style: __assign(__assign({}, style), { textOverflow: "ellipsis", maxWidth: maxWidth, whiteSpace: "nowrap", overflow: "hidden" }) }, { children: text })) }))) : (jsxRuntime.jsx(antd.Tooltip, __assign({ title: text }, { children: jsxRuntime.jsx("div", __assign({ style: __assign(__assign({}, style), { textOverflow: "ellipsis", maxWidth: maxWidth, whiteSpace: "nowrap", overflow: "hidden" }) }, { children: text })) }))), text && text !== "-" && copy && (jsxRuntime.jsxs("a", __assign({ onClick: function (e) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                e.stopPropagation();
                                return [4 /*yield*/, navigator.clipboard.writeText(text)];
                            case 1:
                                _a.sent();
                                setCopied(true);
                                window.setTimeout(function () {
                                    setCopied(false);
                                }, 3000);
                                return [2 /*return*/];
                        }
                    });
                }); } }, { children: [" ", copied ? jsxRuntime.jsx(CheckOutlined$1, {}) : jsxRuntime.jsx(CopyOutlined$1, {})] })))] }))) : (jsxRuntime.jsxs("div", __assign({ style: { display: "flex", alignItems: "center" } }, { children: [jsxRuntime.jsx("div", __assign({ style: __assign(__assign({}, style), { textOverflow: "ellipsis", maxWidth: maxWidth, whiteSpace: "nowrap", overflow: "hidden" }) }, { children: text })), text && text !== "-" && copy && (jsxRuntime.jsxs("a", __assign({ onClick: function (e) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                e.stopPropagation();
                                return [4 /*yield*/, navigator.clipboard.writeText(text)];
                            case 1:
                                _a.sent();
                                setCopied(true);
                                window.setTimeout(function () {
                                    setCopied(false);
                                }, 3000);
                                return [2 /*return*/];
                        }
                    });
                }); } }, { children: [" ", copied ? jsxRuntime.jsx(CheckOutlined$1, {}) : jsxRuntime.jsx(CopyOutlined$1, {})] })))] })));
};

var css_248z$1 = ".better-text-wrap.sliding {\n  position: relative;\n  color: grey;\n}\n\n.ellipsis-tag {\n  position: absolute;\n  right: 0;\n  bottom: 1px;\n  width: 3px;\n  height: 30px;\n  background: var(--blue-7);\n}\n\n.ant-select .ellipsis-tag {\n  display: none;\n}\n";
styleInject(css_248z$1);

var Text$1 = antd.Typography.Text;
var useResizeEffect = function (onResize, deps) {
    if (deps === void 0) { deps = []; }
    React.useEffect(function () {
        onResize();
        window.addEventListener("resize", onResize);
        return function () { return window.removeEventListener("resize", onResize); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, __spreadArray(__spreadArray([], deps, true), [onResize], false));
};
var TextAutoScroll = function (_a) {
    var _b, _c, _d, _e;
    var children = _a.children, style = _a.style;
    // this has to be done by ref so when window event resize listener will trigger - we will get the current element
    var containerRef = React.useRef(null);
    var _f = React.useState(false), isScrollable = _f[0], setIsScrollable = _f[1];
    var _g = React.useState("better-text-wrap"), className = _g[0], setClassName = _g[1];
    var _h = React.useState(false), hovering = _h[0], setHovering = _h[1];
    var setScrollableOnResize = function () {
        if (!containerRef.current)
            return;
        var _a = containerRef.current, clientWidth = _a.clientWidth, scrollWidth = _a.scrollWidth;
        setIsScrollable(scrollWidth > clientWidth);
    };
    useResizeEffect(setScrollableOnResize, [containerRef]);
    return (jsxRuntime.jsxs(framerMotion.motion.div, __assign({ whileHover: isScrollable
            ? {
                x: ((_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth) &&
                    ((_c = containerRef.current) === null || _c === void 0 ? void 0 : _c.scrollWidth)
                    ? ((_d = containerRef.current) === null || _d === void 0 ? void 0 : _d.clientWidth) -
                        ((_e = containerRef.current) === null || _e === void 0 ? void 0 : _e.scrollWidth)
                    : 0,
                transition: { duration: 0.8 },
            }
            : {}, className: className, onMouseEnter: function () {
            setHovering(true);
            if (isScrollable) {
                setClassName("better-text-wrap sliding");
            }
            else {
                setClassName("better-text-wrap");
            }
        }, onMouseLeave: function () {
            setHovering(false);
            setClassName("better-text-wrap");
        }, ref: containerRef }, { children: [jsxRuntime.jsx(Text$1, __assign({ style: __assign({}, style) }, { children: children })), jsxRuntime.jsx(framerMotion.AnimatePresence, { children: isScrollable && !hovering && (jsxRuntime.jsx(framerMotion.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1, transition: { delay: 0.5 } }, className: "ellipsis-tag" })) })] })));
};

var css_248z = ".speed-dial-wrap {\n  position: fixed;\n  right: min(8vw, 50px);\n  bottom: min(8vw, 50px);\n  z-index: 1001;\n  transition: right 300ms ease-in-out;\n}\n.speed-dial-wrap ul {\n  border: none !important;\n}\n.speed-dial-wrap button {\n  padding: 0 !important;\n  display: grid;\n  place-items: center;\n}\n.speed-dial-wrap.hidden {\n  right: -35px;\n}\n\n.speed-dial-menu {\n  position: absolute;\n  left: -15px;\n  padding-bottom: 20px;\n  overflow: visible;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n}\n.speed-dial-menu:hover {\n  background: transparent;\n  box-shadow: none;\n}\n.speed-dial-menu .ant-btn {\n  filter: drop-shadow(0 1px 2px rgba(32, 52, 89, 0.6));\n}\n.speed-dial-menu .ant-menu-item {\n  overflow: visible;\n}\n.speed-dial-menu .ant-menu-item-selected,\n.speed-dial-menu .ant-menu-item-active {\n  background-color: transparent !important;\n}\n.speed-dial-menu .action-tooltip-container {\n  position: absolute;\n  top: 5px;\n  left: -195px;\n  width: 200px;\n  text-align: end;\n  cursor: default;\n}\n.speed-dial-menu .action-tooltip-container .action-tooltip {\n  padding: 5px;\n  color: #fff;\n  font-size: 12px;\n  background: #0006;\n  border-radius: 4px;\n}\n\n.speed-dial-trigger {\n  transition: all 0.5s linear;\n}\n.speed-dial-trigger .trigger-btn,\n.speed-dial-trigger .trigger-btn-with-file {\n  width: 50px;\n  height: 50px;\n  filter: drop-shadow(0 0.5px 5px rgba(32, 52, 89, 0.6));\n}\n.speed-dial-trigger div {\n  transition: all 0.15s linear;\n}\n\n@keyframes file {\n  from {\n    background-size: 0% 0%;\n  }\n  to {\n    background-size: 100% 100%;\n  }\n}\n";
styleInject(css_248z);

var Text = antd.Typography.Text;
var SpeedDial = function (_a) {
    var actionArray = _a.actionArray, style = _a.style, _b = _a.alwaysShow, alwaysShow = _b === void 0 ? true : _b;
    var wrapRef = React.useRef(null);
    var _c = React.useState(false), visible = _c[0], handleVisible = _c[1];
    var _d = React.useState(false), hidden = _d[0], setHidden = _d[1];
    var handleVisibleTrue = function () { return handleVisible(true); };
    var handleVisibleFalse = function () {
        handleVisible(false);
    };
    var handleHide = React.useCallback(function () {
        if (!alwaysShow)
            setHidden(true);
    }, [alwaysShow]);
    var _e = useTimeout(function () {
        handleVisibleFalse();
        handleHide();
    }, 800), reset = _e.reset, clear = _e.clear;
    useClickOutside(wrapRef, function () {
        if (visible) {
            handleVisibleFalse();
        }
    });
    return (jsxRuntime.jsxs(framerMotion.motion.div, __assign({ className: hidden ? "speed-dial-wrap hidden" : "speed-dial-wrap", ref: wrapRef, style: style }, { children: [jsxRuntime.jsx(antd.Space, __assign({ className: "speed-dial-trigger" }, { children: jsxRuntime.jsx(framerMotion.motion.div, __assign({ onClick: function () {
                        if (visible) {
                            handleVisibleFalse();
                        }
                        else {
                            handleVisibleTrue();
                        }
                    }, onMouseLeave: reset, onMouseEnter: function () {
                        clear();
                        setHidden(false);
                    }, 
                    // @ts-ignore
                    style: { transform: visible ? "rotate(45deg)" : null } }, { children: jsxRuntime.jsx(antd.Button, { type: "primary", shape: "circle", icon: jsxRuntime.jsx(PlusOutlined$1, { style: { fontSize: 20 } }), onClick: function () { return handleVisible(function (v) { return !v; }); }, className: "trigger-btn" }) })) })), jsxRuntime.jsx(framerMotion.AnimatePresence, { children: visible && (jsxRuntime.jsx(antd.Menu, __assign({ className: "speed-dial-menu", style: { top: -(actionArray.length * 60) - 5 } }, { children: actionArray.map(function (action, index) { return (jsxRuntime.jsx(antd.Menu.Item, __assign({ style: { height: 50, display: "flex", alignItems: "center" } }, { children: jsxRuntime.jsxs(framerMotion.motion.div, __assign({ onMouseEnter: clear, onMouseLeave: reset, style: { backgroundColor: "transparent" }, transition: {
                                duration: 0.12,
                                delay: 0.05 * (actionArray.length - index),
                                type: "tween",
                            }, initial: { scale: 0, opacity: 0.1 }, animate: { scale: 1, opacity: 1 }, exit: {
                                scale: 0,
                                opacity: 0.1,
                                transition: {
                                    duration: 0.15,
                                    delay: 0.05 * index,
                                    type: "tween",
                                },
                            } }, { children: [jsxRuntime.jsx(antd.Button, { size: "large", icon: action.icon, shape: "circle", onClick: action.onClick, disabled: action.disabled }), jsxRuntime.jsx(framerMotion.motion.div, __assign({ initial: { scale: 0, opacity: 0.1 }, animate: {
                                        scale: 1,
                                        opacity: 1,
                                        transition: {
                                            duration: 0.25,
                                            delay: 0.1 * (actionArray.length - index),
                                        },
                                    }, exit: {
                                        opacity: 0,
                                        transition: { duration: 0.15 },
                                    }, className: "action-tooltip-container" }, { children: jsxRuntime.jsx(Text, __assign({ className: "action-tooltip" }, { children: action.tooltip })) }))] })) }), index)); }) }))) })] })));
};

exports.AbbrText = AbbrText;
exports.AsyncButton = AsyncBtn;
exports.DoubleConfirmBtn = DoubleConfirmBtn;
exports.LongTextColumn = LongTextColumn;
exports.MovableTooltip = MovableTooltip;
exports.SpeedDial = SpeedDial;
exports.TextAutoScroll = TextAutoScroll;
exports.useClickOutside = useClickOutside;
exports.useDebounce = useDebounce;
exports.useEffectSkipFirst = useEffectSkipFirst;
exports.useEventListener = useEventListener;
exports.useLeavePageNotification = useLeavePageNotification;
exports.useLoading = useLoading;
exports.useMousePosition = useMousePosition;
exports.useThrottle = useThrottle;
exports.useTimeout = useTimeout;
exports.useToggle = useToggle;
exports.useWindowSize = useWindowSize;
//# sourceMappingURL=index.js.map
