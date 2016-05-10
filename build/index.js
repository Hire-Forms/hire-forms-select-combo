(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsSelectCombo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsInput = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var Input = (function (_React$Component) {
	_inherits(Input, _React$Component);

	function Input(props) {
		_classCallCheck(this, Input);

		_get(Object.getPrototypeOf(Input.prototype), "constructor", this).call(this, props);

		this.state = {
			valid: true,
			invalidMessage: null
		};
	}

	_createClass(Input, [{
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (this.props.value === nextProps.value) {
				return;
			}

			if (nextProps.value === "") {
				if (!this.state.valid) {
					this.setState({
						valid: true,
						invalidMessage: null
					});
				}

				return;
			} else if (this.props.validate) {
				var validator = this.props.validate(nextProps.value);

				this.setState({
					valid: validator.isValid,
					invalidMessage: validator.message
				});

				if (!validator.isValid && this.props.onInvalid) {
					this.props.onInvalid(validator.message, nextProps.value);
				}
			}
		}
	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps, nextState) {
			return this.props.value !== nextProps.value;
		}
	}, {
		key: "handleChange",
		value: function handleChange(ev) {
			this.props.onChange(ev.currentTarget.value, ev);
		}
	}, {
		key: "render",
		value: function render() {
			var invalidMessage = this.state.invalidMessage ? _react2["default"].createElement(
				"div",
				{ className: "hire-forms-invalid-message" },
				this.state.invalidMessage
			) : null;

			return _react2["default"].createElement(
				"div",
				{
					className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }) },
				_react2["default"].createElement("input", {
					onBlur: this.props.onBlur,
					onChange: this.handleChange.bind(this),
					onFocus: this.props.onFocus,
					onKeyDown: this.props.onKeyDown,
					onKeyUp: this.props.onKeyUp,
					placeholder: this.props.placeholder,
					style: this.props.style,
					value: this.props.value }),
				invalidMessage
			);
		}
	}]);

	return Input;
})(_react2["default"].Component);

Input.propTypes = {
	onBlur: _react2["default"].PropTypes.func,
	onChange: _react2["default"].PropTypes.func.isRequired,
	onFocus: _react2["default"].PropTypes.func,
	onInvalid: _react2["default"].PropTypes.func,
	onKeyDown: _react2["default"].PropTypes.func,
	onKeyUp: _react2["default"].PropTypes.func,
	placeholder: _react2["default"].PropTypes.string,
	style: _react2["default"].PropTypes.object,
	valid: _react2["default"].PropTypes.bool,
	validate: _react2["default"].PropTypes.func,
	value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
};

Input.defaultProps = {
	value: ""
};

exports["default"] = Input;
module.exports = exports["default"];

},{"classnames":"classnames","react":"react"}]},{},[1])(1)
});
},{}],2:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = _dereq_('react');

var _react2 = _interopRequireDefault(_react);

var _hireFormsSelect = _dereq_('hire-forms-select');

var _hireFormsSelect2 = _interopRequireDefault(_hireFormsSelect);

var _hireFormsInput = _dereq_('hire-forms-input');

var _hireFormsInput2 = _interopRequireDefault(_hireFormsInput);

var SelectCombo = (function (_React$Component) {
	_inherits(SelectCombo, _React$Component);

	function SelectCombo(props) {
		_classCallCheck(this, SelectCombo);

		_get(Object.getPrototypeOf(SelectCombo.prototype), 'constructor', this).call(this, props);

		this.state = {
			value: ''
		};
	}

	_createClass(SelectCombo, [{
		key: 'handleChange',
		value: function handleChange(value, a) {
			this.setState({ value: value });
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(ev) {
			if (ev.keyCode === 13) {
				this.props.onChange(this.state.value);
				this.setState({
					value: ''
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				_hireFormsSelect2['default'],
				this.props,
				_react2['default'].createElement(_hireFormsInput2['default'], {
					onChange: this.handleChange.bind(this),
					onKeyDown: this.handleKeyDown.bind(this),
					placeholder: this.props.inputPlaceholder ? this.props.inputPlaceholder : 'Add',
					style: { width: '100%' },
					value: this.state.value
				})
			);
		}
	}]);

	return SelectCombo;
})(_react2['default'].Component);

exports['default'] = SelectCombo;
module.exports = exports['default'];

},{"hire-forms-input":1,"hire-forms-select":3,"react":"react"}],3:[function(_dereq_,module,exports){
"use strict";

(function (f) {
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f();
	} else if (typeof define === "function" && define.amd) {
		define([], f);
	} else {
		var g;if (typeof window !== "undefined") {
			g = window;
		} else if (typeof global !== "undefined") {
			g = global;
		} else if (typeof self !== "undefined") {
			g = self;
		} else {
			g = this;
		}g.HireFormsSelect = f();
	}
})(function () {
	var define, module, exports;return (function e(t, n, r) {
		function s(o, u) {
			if (!n[o]) {
				if (!t[o]) {
					var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
				}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
					var n = t[o][1][e];return s(n ? n : e);
				}, l, l.exports, e, t, n, r);
			}return n[o].exports;
		}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
	})({ 1: [function (_dereq_, module, exports) {
			"use strict";

			(function (f) {
				if (typeof exports === "object" && typeof module !== "undefined") {
					module.exports = f();
				} else if (typeof define === "function" && define.amd) {
					define([], f);
				} else {
					var g;if (typeof window !== "undefined") {
						g = window;
					} else if (typeof global !== "undefined") {
						g = global;
					} else if (typeof self !== "undefined") {
						g = self;
					} else {
						g = this;
					}g.HireFormsOptions = f();
				}
			})(function () {
				var define, module, exports;return (function e(t, n, r) {
					function s(o, u) {
						if (!n[o]) {
							if (!t[o]) {
								var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
							}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
								var n = t[o][1][e];return s(n ? n : e);
							}, l, l.exports, e, t, n, r);
						}return n[o].exports;
					}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
				})({ 1: [function (_dereq_, module, exports) {
						(function (f) {
							if (typeof exports === "object" && typeof module !== "undefined") {
								module.exports = f();
							} else if (typeof define === "function" && define.amd) {
								define([], f);
							} else {
								var g;if (typeof window !== "undefined") {
									g = window;
								} else if (typeof global !== "undefined") {
									g = global;
								} else if (typeof self !== "undefined") {
									g = self;
								} else {
									g = this;
								}g.HireFormsOptions = f();
							}
						})(function () {
							var define, module, exports;return (function e(t, n, r) {
								function s(o, u) {
									if (!n[o]) {
										if (!t[o]) {
											var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
										}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
											var n = t[o][1][e];return s(n ? n : e);
										}, l, l.exports, e, t, n, r);
									}return n[o].exports;
								}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
							})({ 1: [function (_dereq_, module, exports) {
									"use strict";

									Object.defineProperty(exports, "__esModule", {
										value: true
									});

									function _interopRequireDefault(obj) {
										return obj && obj.__esModule ? obj : { "default": obj };
									}

									var _react = _dereq_("react");

									var _react2 = _interopRequireDefault(_react);

									var keyValueMap = _react2["default"].PropTypes.shape({
										key: _react2["default"].PropTypes.string.isRequired,
										value: _react2["default"].PropTypes.string.isRequired
									});

									exports.keyValueMap = keyValueMap;
									// ARRAY OF

									var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

									exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
									var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

									exports.arrayOfStrings = arrayOfStrings;
									var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

									exports.arrayOfElements = arrayOfElements;
									// OR

									var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

									exports.stringOrArray = stringOrArray;
									var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

									exports.stringOrKeyValueMap = stringOrKeyValueMap;
									var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

									exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
									var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

									exports.elementOrArrayOfElement = elementOrArrayOfElement;
									var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

									exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
									var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
									exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
								}, { "react": "react" }] }, {}, [1])(1);
						});
					}, { "react": "react" }], 2: [function (_dereq_, module, exports) {

						/*
       * @param {Array} list
       * @returns {Boolean}
       */
						"use strict";

						Object.defineProperty(exports, "__esModule", {
							value: true
						});
						exports.isListOfStrings = isListOfStrings;
						exports.isKeyValueMap = isKeyValueMap;
						exports.castArray = castArray;
						exports.castKeyValue = castKeyValue;
						exports.castKeyValueArray = castKeyValueArray;

						function isListOfStrings(list) {
							if (!Array.isArray(list) || !list.length) {
								return false;
							}

							return list.every(function (item) {
								return typeof item === "string";
							});
						}

						/*
       * @param {Object} map
       * @returns {Boolean}
       */

						function isKeyValueMap(map) {
							if (map == null) {
								return false;
							}

							return map.hasOwnProperty("key") && map.hasOwnProperty("value");
						}

						/*
       * Always return an array.
       *
       * @param {String|Array} arr
       * @returns {Array}
       */

						function castArray(arr) {
							return Array.isArray(arr) ? arr : [arr];
						}

						;

						/*
       * Always return a key/value map.
       *
       * @param {Number|String|Boolean|Object} item
       * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
       */

						function castKeyValue(item) {
							return isKeyValueMap(item) ? item : {
								key: item,
								value: item
							};
						}

						/*
       * Always return an array of key/value maps.
       *
       * @param {Number|String|Boolean|Array|Object} list
       * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
       */

						function castKeyValueArray(list) {
							list = castArray(list);

							return list.map(castKeyValue);
						}
					}, {}], 3: [function (_dereq_, module, exports) {
						// TODO move listitem to seperate component (so we don't have to store data-key and data-value as attributes)
						// Move util functions to seperate module

						"use strict";

						Object.defineProperty(exports, "__esModule", {
							value: true
						});

						var _createClass = (function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
								}
							}return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
							};
						})();

						var _get = function get(_x, _x2, _x3) {
							var _again = true;_function: while (_again) {
								var object = _x,
								    property = _x2,
								    receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
									var parent = Object.getPrototypeOf(object);if (parent === null) {
										return undefined;
									} else {
										_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
									}
								} else if ("value" in desc) {
									return desc.value;
								} else {
									var getter = desc.get;if (getter === undefined) {
										return undefined;
									}return getter.call(receiver);
								}
							}
						};

						function _interopRequireDefault(obj) {
							return obj && obj.__esModule ? obj : { "default": obj };
						}

						function _classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						function _inherits(subClass, superClass) {
							if (typeof superClass !== "function" && superClass !== null) {
								throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
							}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
						}

						var _react = _dereq_("react");

						var _react2 = _interopRequireDefault(_react);

						var _reactDom = _dereq_("react-dom");

						var _reactDom2 = _interopRequireDefault(_reactDom);

						var _classnames = _dereq_("classnames");

						var _classnames2 = _interopRequireDefault(_classnames);

						var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

						var _hireFormsUtils = _dereq_("hire-forms-utils");

						var hasKeyValue = function hasKeyValue(list, item) {
							return list.filter(function (li) {
								return li.key === item.key;
							}).length > 0;
						};

						/**
       * Options are rendered beneath the autocomplete and select components.
       *
       * @class
       * @extends React.Component
       */

						var Options = (function (_React$Component) {
							_inherits(Options, _React$Component);

							function Options() {
								_classCallCheck(this, Options);

								_get(Object.getPrototypeOf(Options.prototype), "constructor", this).apply(this, arguments);
							}

							_createClass(Options, [{
								key: "componentDidMount",
								value: function componentDidMount() {
									var node = _reactDom2["default"].findDOMNode(this);

									if (node) {
										node.style.zIndex = 1000;
									}
								}
							}, {
								key: "componentWillUnmount",
								value: function componentWillUnmount() {
									var node = _reactDom2["default"].findDOMNode(this);
									node.style.zIndex = 0;
								}

								/**
         * Sort values on relevance. A result is more relevant when the search
         * query is more at the beginning of the string. In other words:
         * String.indexOf(props.query): lower is better.
         * @param {Array<Object>} value An array of key/value maps
         * @param {String} query A search query
         * @returns {Array<Object>} Sorted values on relevance
         */
							}, {
								key: "sortRelevance",
								value: function sortRelevance(values, query) {
									return values.sort(function (a, b) {
										a = a.value.toLowerCase();
										b = b.value.toLowerCase();

										var indexA = a.indexOf(query);
										var indexB = b.indexOf(query);

										if (indexA > indexB) {
											return 1;
										}

										if (indexA < indexB) {
											return -1;
										}

										if (indexA === indexB) {
											if (a > b) {
												return 1;
											}

											if (a < b) {
												return -1;
											}
										}

										return 0;
									});
								}

								/*
         * highlight the currently highlighted option.
         *
         * @param {Object} target An HTMLElement or event object
         * @param {String} className Name of the highlight class
         */
							}, {
								key: "highlight",
								value: function highlight(target, className) {
									// Check if target is an event object.
									if (target.hasOwnProperty("currentTarget")) {
										target = target.currentTarget;
									}

									target.classList.add(className);
								}

								/**
         * Unhighlight the currently highlighted option.
         *
         * @param {String} className Name of the highlight class
         * @return {Object} The unhighlighted HTMLElement
         */
							}, {
								key: "unhighlight",
								value: function unhighlight(className) {
									var el = undefined;
									var node = _reactDom2["default"].findDOMNode(this);

									if (node) {
										el = node.querySelector("li." + className);

										if (el) {
											el.classList.remove(className);
										}
									}

									return el;
								}
							}, {
								key: "handleClick",
								value: function handleClick(ev) {
									this.props.onChange(this.getOptionData(ev.currentTarget));
								}
							}, {
								key: "highlightPrev",
								value: function highlightPrev() {
									var prev = undefined;
									var current = this.unhighlight(this.props.highlightClass);

									if (current) {
										prev = current.previousElementSibling;
									}

									// If current and prev aren't found, start at the top.
									// Current is not found if there is no list item highlighted.
									// Prev is not found if the first list item is highlighted.
									if (!prev) {
										prev = _reactDom2["default"].findDOMNode(this).lastChild;
									}

									this.highlight(prev, this.props.highlightClass);
								}
							}, {
								key: "highlightNext",
								value: function highlightNext() {
									var next = undefined;
									var current = this.unhighlight(this.props.highlightClass);

									if (current) {
										next = current.nextElementSibling;
									}

									// If current and next aren't found, start at the top.
									// Current is not found if there is no list item highlighted.
									// Next is not found if the last list item is highlighted.
									if (!next) {
										next = _reactDom2["default"].findDOMNode(this).firstChild;
									}

									this.highlight(next, this.props.highlightClass);
								}
							}, {
								key: "select",
								value: function select() {
									var current = this.unhighlight(this.props.highlightClass);

									if (current) {
										this.props.onChange(this.getOptionData(current));
									}
								}

								/**
         * Get the key (id) and value (display name) of an option DOM element.
         *
         * @param {Object} el - Option DOM element
         * @returns {Object}
         */
							}, {
								key: "getOptionData",
								value: function getOptionData(el) {
									return {
										key: el.getAttribute("data-key"),
										value: el.getAttribute("data-value")
									};
								}
							}, {
								key: "render",
								value: function render() {
									var _this = this;

									if (this.props.values.length === 0) {
										return null;
									}

									var values = this.props.sort || this.props.sortRelevance && this.props.query !== "" ? this.sortRelevance(this.props.values, this.props.querySelector) : this.props.values;

									var listitems = values.map(function (data, index) {
										var displayValue = data.value;

										if (_this.props.query.length) {
											var re = new RegExp(_this.props.query, 'ig');
											displayValue = data.value.replace(re, '<span class="highlight">$&</span>');
										}

										return _react2["default"].createElement("li", {
											className: (0, _classnames2["default"])({
												'hire-forms-option': true,
												selected: hasKeyValue((0, _hireFormsUtils.castArray)(_this.props.value), data)
											}),
											dangerouslySetInnerHTML: { __html: displayValue },
											"data-key": data.key,
											"data-value": data.value,
											key: index,
											onClick: _this.handleClick.bind(_this) });
									});

									var children = this.props.children != null ? _react2["default"].createElement("li", null, this.props.children) : null;

									return _react2["default"].createElement("ul", {
										className: "hire-options"
									}, children, listitems);
								}
							}]);

							return Options;
						})(_react2["default"].Component);

						Options.defaultProps = {
							highlightClass: 'highlight',
							query: '',
							sort: false,
							sortRelevance: true,
							value: { key: '', value: '' },
							values: []
						};

						Options.propTypes = {
							children: _react2["default"].PropTypes.node,
							highlightClass: _react2["default"].PropTypes.string,
							onChange: _react2["default"].PropTypes.func.isRequired,
							query: _react2["default"].PropTypes.string,
							sort: _react2["default"].PropTypes.bool,
							sortRelevance: _react2["default"].PropTypes.bool,
							value: _hireFormsPropTypes.keyValueMapOrArrayOfKeyValueMaps,
							values: _hireFormsPropTypes.arrayOfKeyValueMaps
						};

						exports["default"] = Options;
						module.exports = exports["default"];
					}, { "classnames": "classnames", "hire-forms-prop-types": 1, "hire-forms-utils": 2, "react": "react", "react-dom": "react-dom" }] }, {}, [3])(3);
			});
		}, { "classnames": "classnames", "hire-forms-prop-types": 2, "hire-forms-utils": 3, "react": "react", "react-dom": "react-dom" }], 2: [function (_dereq_, module, exports) {
			(function (f) {
				if (typeof exports === "object" && typeof module !== "undefined") {
					module.exports = f();
				} else if (typeof define === "function" && define.amd) {
					define([], f);
				} else {
					var g;if (typeof window !== "undefined") {
						g = window;
					} else if (typeof global !== "undefined") {
						g = global;
					} else if (typeof self !== "undefined") {
						g = self;
					} else {
						g = this;
					}g.HireFormsOptions = f();
				}
			})(function () {
				var define, module, exports;return (function e(t, n, r) {
					function s(o, u) {
						if (!n[o]) {
							if (!t[o]) {
								var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
							}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
								var n = t[o][1][e];return s(n ? n : e);
							}, l, l.exports, e, t, n, r);
						}return n[o].exports;
					}var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
				})({ 1: [function (_dereq_, module, exports) {
						"use strict";

						Object.defineProperty(exports, "__esModule", {
							value: true
						});

						function _interopRequireDefault(obj) {
							return obj && obj.__esModule ? obj : { "default": obj };
						}

						var _react = _dereq_("react");

						var _react2 = _interopRequireDefault(_react);

						var keyValueMap = _react2["default"].PropTypes.shape({
							key: _react2["default"].PropTypes.string.isRequired,
							value: _react2["default"].PropTypes.string.isRequired
						});

						exports.keyValueMap = keyValueMap;
						// ARRAY OF

						var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

						exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
						var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

						exports.arrayOfStrings = arrayOfStrings;
						var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

						exports.arrayOfElements = arrayOfElements;
						// OR

						var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

						exports.stringOrArray = stringOrArray;
						var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

						exports.stringOrKeyValueMap = stringOrKeyValueMap;
						var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

						exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
						var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

						exports.elementOrArrayOfElement = elementOrArrayOfElement;
						var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

						exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
						var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
						exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;
					}, { "react": "react" }] }, {}, [1])(1);
			});
		}, { "react": "react" }], 3: [function (_dereq_, module, exports) {

			/*
    * @param {Array} list
    * @returns {Boolean}
    */
			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.isListOfStrings = isListOfStrings;
			exports.isKeyValueMap = isKeyValueMap;
			exports.castArray = castArray;
			exports.castKeyValue = castKeyValue;
			exports.castKeyValueArray = castKeyValueArray;

			function isListOfStrings(list) {
				if (!Array.isArray(list) || !list.length) {
					return false;
				}

				return list.every(function (item) {
					return typeof item === "string";
				});
			}

			/*
    * @param {Object} map
    * @returns {Boolean}
    */

			function isKeyValueMap(map) {
				if (map == null) {
					return false;
				}

				return map.hasOwnProperty("key") && map.hasOwnProperty("value");
			}

			/*
    * Always return an array.
    *
    * @param {String|Array} arr
    * @returns {Array}
    */

			function castArray(arr) {
				return Array.isArray(arr) ? arr : [arr];
			}

			;

			/*
    * Always return a key/value map.
    *
    * @param {Number|String|Boolean|Object} item
    * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
    */

			function castKeyValue(item) {
				return isKeyValueMap(item) ? item : {
					key: item,
					value: item
				};
			}

			/*
    * Always return an array of key/value maps.
    *
    * @param {Number|String|Boolean|Array|Object} list
    * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
    */

			function castKeyValueArray(list) {
				list = castArray(list);

				return list.map(castKeyValue);
			}
		}, {}], 4: [function (_dereq_, module, exports) {
			arguments[4][2][0].apply(exports, arguments);
		}, { "dup": 2, "react": "react" }], 5: [function (_dereq_, module, exports) {
			arguments[4][3][0].apply(exports, arguments);
		}, { "dup": 3 }], 6: [function (_dereq_, module, exports) {
			'use strict';

			Object.defineProperty(exports, '__esModule', {
				value: true
			});

			var _createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			})();

			var _get = function get(_x, _x2, _x3) {
				var _again = true;_function: while (_again) {
					var object = _x,
					    property = _x2,
					    receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
						var parent = Object.getPrototypeOf(object);if (parent === null) {
							return undefined;
						} else {
							_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
						}
					} else if ('value' in desc) {
						return desc.value;
					} else {
						var getter = desc.get;if (getter === undefined) {
							return undefined;
						}return getter.call(receiver);
					}
				}
			};

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { 'default': obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== 'function' && superClass !== null) {
					throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			var _react = _dereq_('react');

			var _react2 = _interopRequireDefault(_react);

			var _classnames = _dereq_('classnames');

			var _classnames2 = _interopRequireDefault(_classnames);

			var _hireFormsOptions = _dereq_('hire-forms-options');

			var _hireFormsOptions2 = _interopRequireDefault(_hireFormsOptions);

			var _hireFormsPropTypes = _dereq_('hire-forms-prop-types');

			var _hireFormsUtils = _dereq_('hire-forms-utils');

			var Select = (function (_React$Component) {
				_inherits(Select, _React$Component);

				function Select(props) {
					_classCallCheck(this, Select);

					_get(Object.getPrototypeOf(Select.prototype), 'constructor', this).call(this, props);

					this.handleDocumentClick = this.handleDocumentClick.bind(this);

					this.state = {
						options: props.options,
						visible: false
					};
				}

				_createClass(Select, [{
					key: 'componentDidMount',
					value: function componentDidMount() {
						var _this = this;

						document.addEventListener('click', this.handleDocumentClick, false);

						if (this.props.async != null) {
							this.props.async(function (response) {
								_this.setState({
									options: response
								});
							});
						}
					}
				}, {
					key: 'componentWillReceiveProps',
					value: function componentWillReceiveProps(nextProps) {
						if (nextProps.options && nextProps.options.length) {
							this.setState({
								options: nextProps.options
							});
						}
					}
				}, {
					key: 'componentWillUnmount',
					value: function componentWillUnmount() {
						document.removeEventListener('click', this.handleDocumentClick, false);
					}
				}, {
					key: 'handleDocumentClick',
					value: function handleDocumentClick(ev) {
						if (this.state.visible && !this.refs.select.contains(ev.target)) {
							this.setState({
								visible: false
							});
						}
					}
				}, {
					key: 'handleInputClick',
					value: function handleInputClick(ev) {
						// Visible state shouldn't change when there are no options.
						if (this.state.options.length > 0) {
							this.setState({ visible: !this.state.visible });
						}
					}

					/**
      * @method
      * @param {object} value Map of key and value: {key: "somekey", value: "somevalue"}
      */
				}, {
					key: 'handleOptionsChange',
					value: function handleOptionsChange(value) {
						this.setState({ visible: false });

						// If the options prop is an array of strings, return a string.
						if ((0, _hireFormsUtils.isListOfStrings)(this.state.options)) {
							value = value.value;
						}

						this.props.onChange(value);
					}
				}, {
					key: 'render',
					value: function render() {
						var options = this.state.visible ? _react2['default'].createElement(_hireFormsOptions2['default'], {
							onChange: this.handleOptionsChange.bind(this),
							sort: this.props.sort,
							sortRelevance: this.props.sortRelevance,
							value: (0, _hireFormsUtils.castKeyValue)(this.props.value),
							values: (0, _hireFormsUtils.castKeyValueArray)(this.state.options)
						}, this.props.children) : null;

						// If value prop is a key/value map, extract the value.
						var value = (0, _hireFormsUtils.isKeyValueMap)(this.props.value) ? this.props.value.value : this.props.value;

						// Create new var so we can check value in cx()
						var inputValue = value === '' ? this.props.placeholder : value;

						return _react2['default'].createElement('div', { className: 'hire-select', ref: 'select' }, _react2['default'].createElement('div', {
							className: 'input-container',
							onClick: this.handleInputClick.bind(this) }, _react2['default'].createElement('div', { className: (0, _classnames2['default'])({
								"input": true,
								"placeholder": value === "" }) }, inputValue), _react2['default'].createElement('button', null, '▾')), options);
					}
				}]);

				return Select;
			})(_react2['default'].Component);

			Select.defaultProps = {
				options: [],
				value: ''
			};

			Select.propTypes = {
				async: _react2['default'].PropTypes.func,
				children: _react2['default'].PropTypes.node,
				onChange: _react2['default'].PropTypes.func.isRequired,
				options: _hireFormsPropTypes.arrayOfStringsOrArrayOfKeyValueMaps,
				placeholder: _react2['default'].PropTypes.string,
				sort: _react2['default'].PropTypes.bool,
				sortRelevance: _react2['default'].PropTypes.bool,
				value: _hireFormsPropTypes.stringOrKeyValueMap
			};

			exports['default'] = Select;
			module.exports = exports['default'];
		}, { "classnames": "classnames", "hire-forms-options": 1, "hire-forms-prop-types": 4, "hire-forms-utils": 5, "react": "react" }] }, {}, [6])(6);
});

},{}]},{},[2])(2)
});