/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "./demo/static";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });



var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = (typeof Symbol!=='undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol!=='undefined' ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};


var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/;


var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process==='undefined' || !process.env || "development"!=='production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() { return null; }



// make react think we're react.
var VNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function() { return this.nodeName; },
	set: function(v) { this.nodeName = v; },
	configurable:true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function() { return this.attributes; },
	set: function(v) { this.attributes = v; },
	configurable:true
});



var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = function (e) {
	if (oldEventHook) { e = oldEventHook(e); }
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};


var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
			attrs = vnode.attributes = extend({}, vnode.attributes);

		if (typeof tag==='function') {
			if (tag[COMPONENT_WRAPPER_KEY]===true || (tag.prototype && 'isReactComponent' in tag.prototype)) {
				if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
				if (vnode.children) { attrs.children = vnode.children; }

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		}
		else {
			if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
			if (vnode.children) { attrs.children = vnode.children; }

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value!==0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) { oldVnodeHook(vnode); }
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
		a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) { extend(vnode.attributes, tag.defaultProps); }
	if (a) { extend(vnode.attributes, a); }
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) { if ((shouldSanitize = CAMEL_PROPS.test(i))) { break; } }
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[ CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i ] = a[i];
				}
			}
		}
	}
}



// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode!==parent) { prev = null; }

	// default to first Element child
	if (!prev) { prev = parent.children[0]; }

	// remove unaffected siblings
	for (var i=parent.childNodes.length; i--; ) {
		if (parent.childNodes[i]!==prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	if (parent) { parent._preactCompatRendered = out && (out._component || { base: out }); }
	if (typeof callback==='function') { callback(); }
	return out && out._component || out;
}


var ContextProvider = function () {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var c = render$1(wrap, container);
	if (callback) { callback(c); }
	return c._component || c.base;
}


function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode===container) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}



var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		return children.map(fn);
	},
	forEach: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		children.forEach(fn);
	},
	count: function(children) {
		return children && children.length || 0;
	},
	only: function(children) {
		children = Children.toArray(children);
		if (children.length!==1) { throw new Error('Children.only() expects only one child.'); }
		return children[0];
	},
	toArray: function(children) {
		if (children == null) { return []; }
		return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
	}
};


/** Track current render() component for ref assignment */
var currentComponent;


function createFactory(type) {
	return createElement.bind(null, type);
}


var DOM = {};
for (var i=ELEMENTS.length; i--; ) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i=offset || 0; i<arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		}
		else if (obj && typeof obj==='object' && !isValidElement(obj) && ((obj.props && obj.type) || (obj.attributes && obj.nodeName) || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c==='function' && !(c.prototype && c.prototype.render);
}


// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function() {
			return WrappedComponent(this.props, this.context);
		}
	});
}


function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) { return Wrapped===true ? Ctor : Wrapped; }

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable:true, value:true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable:true, value:Wrapped });

	return Wrapped;
}


function createElement() {
	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];

	upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(void 0, args));
}


function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
		type = ref && typeof ref;
	if (currentComponent && (type==='string' || type==='number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}


function cloneElement$1(element, props) {
	var children = [], len = arguments.length - 2;
	while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

	if (!isValidElement(element)) { return element; }
	var elementProps = element.attributes || element.props;
	var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(
		element.nodeName || element.type,
		elementProps,
		element.children || elementProps && elementProps.children
	);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	}
	else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(void 0, cloneArgs));
}


function isValidElement(element) {
	return element && ((element instanceof VNode) || element.$$typeof===REACT_ELEMENT_TYPE);
}


function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved===null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}


function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName!=='string') { return; }
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName==='textarea' || (nodeName.toLowerCase()==='input' && !/^fil|che|rad/i.test(attributes.type)))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}


function applyClassName(ref) {
	var attributes = ref.attributes;

	if (!attributes) { return; }
	var cl = attributes.className || attributes.class;
	if (cl) { attributes.className = cl; }
}


function extend(base, props) {
	for (var key in props) {
		if (props.hasOwnProperty(key)) {
			base[key] = props[key];
		}
	}
	return base;
}


function shallowDiffers(a, b) {
	for (var i in a) { if (!(i in b)) { return true; } }
	for (var i$1 in b) { if (a[i$1]!==b[i$1]) { return true; } }
	return false;
}


function findDOMNode(component) {
	return component && component.base || component;
}


function F(){}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps();
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}


// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i=0; i<mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key]==='function') {
				(keyed[key] || (keyed[key]=[])).push(mixin[key]);
			}
		}
	}
	return keyed;
}


// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) { if (mixins.hasOwnProperty(key)) {
		proto[key] = multihook(
			mixins[key].concat(proto[key] || ARR),
			key==='getDefaultProps' || key==='getInitialState' || key==='getChildContext'
		);
	} }
}


function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v==='function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}


function callMethod(ctx, m, args) {
	if (typeof m==='string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m==='function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function() {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i=0; i<hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r!=null) {
				if (!ret) { ret = {}; }
				for (var key in r) { if (r.hasOwnProperty(key)) {
					ret[key] = r[key];
				} }
			}
			else if (typeof r!=='undefined') { ret = r; }
		}
		return ret;
	};
}


function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}


function propsHook(props, context) {
	if (!props) { return; }

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length===1) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children==='object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this==='function' ? this : this.constructor,
			propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}


function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent===this) {
		currentComponent = null;
	}
}



function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts!==BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function() {
		return this.base;
	},

	isMounted: function() {
		return !!this.base;
	}
});



function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};



var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
};

/* harmony default export */ __webpack_exports__["default"] = index;
//# sourceMappingURL=preact-compat.es.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function() {
    'use strict';
    function VNode() {}
    function h(nodeName, attributes) {
        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && null != attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
            if (child === !0 || child === !1) child = null;
            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);
            lastSimple = simple;
        }
        var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || setTimeout)(rerender);
    }
    function rerender() {
        var p, list = items;
        items = [];
        while (p = list.pop()) if (p.__d) renderComponent(p);
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function getNodeProps(vnode) {
        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
        return node;
    }
    function removeNode(node) {
        if (node.parentNode) node.parentNode.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('key' === name) ; else if ('ref' === name) {
            if (old) old(null);
            if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && IS_NON_DIMENSIONAL.test(i) === !1 ? value[i] + 'px' : value[i];
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!old) node.addEventListener(name, eventProxy, useCapture);
            } else node.removeEventListener(name, eventProxy, useCapture);
            (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || value === !1) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('__preactattr_' in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom, prevSvgMode = isSvgMode;
        if (null == vnode) vnode = '';
        if ('string' == typeof vnode) {
            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                out = document.createTextNode(vnode);
                if (dom) {
                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                    recollectNodeTree(dom, !0);
                }
            }
            out.__preactattr_ = !0;
            return out;
        }
        if ('function' == typeof vnode.nodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
        isSvgMode = 'svg' === vnode.nodeName ? !0 : 'foreignObject' === vnode.nodeName ? !1 : isSvgMode;
        if (!dom || !isNamedNode(dom, String(vnode.nodeName))) {
            out = createNode(String(vnode.nodeName), isSvgMode);
            if (dom) {
                while (dom.firstChild) out.appendChild(dom.firstChild);
                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, !0);
            }
        }
        var fc = out.firstChild, props = out.__preactattr_ || (out.__preactattr_ = {}), vchildren = vnode.children;
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
        }
        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && void 0 !== keyed[key]) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
                child = c;
                children[j] = void 0;
                if (j === childrenLen - 1) childrenLen--;
                if (j === min) min++;
                break;
            }
            child = idiff(child, vchild, context, mountAll);
            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) if (child === originalChildren[i + 1]) removeNode(originalChildren[i]); else dom.insertBefore(child, originalChildren[i] || null);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component); else {
            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
            if (unmountOnly === !1 || null == node.__preactattr_) removeNode(node);
            removeChildren(node);
        }
    }
    function removeChildren(node) {
        node = node.lastChild;
        while (node) {
            var next = node.previousSibling;
            recollectNodeTree(node, !0);
            node = next;
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
    }
    function createComponent(Ctor, props, context) {
        var inst, list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, context);
            Component.call(inst, props, context);
        } else {
            inst = new Component(props, context);
            inst.constructor = Ctor;
            inst.render = doRender;
        }
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.__b = list[i].__b;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function doRender(props, state, context) {
        return this.constructor(props, context);
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            if (component.__r = props.ref) delete props.ref;
            if (component.__k = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.__c) component.__c = component.context;
                component.context = context;
            }
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            if (component.__r) component.__r(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component.__x) {
            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.__p = component.__s = component.__c = component.__b = null;
            component.__d = !1;
            if (!skip) {
                rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
                var toUnmount, base, childComponent = rendered && rendered.nodeName;
                if ('function' == typeof childComponent) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
                        toUnmount = inst;
                        component._component = inst = createComponent(childComponent, childProps, context);
                        inst.__b = inst.__b || nextBase;
                        inst.__u = component;
                        setComponentProps(inst, childProps, 0, context, !1);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase, !1);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component, t = component;
                    while (t = t.__u) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                flushMounts();
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.__b) {
                c.__b = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom, !1);
            }
        }
        return dom;
    }
    function unmountComponent(component) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component.__x = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner); else if (base) {
            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
            component.__b = base;
            removeNode(base);
            collectComponent(component);
            removeChildren(base);
        }
        if (component.__r) component.__r(null);
    }
    function Component(props, context) {
        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent, !1);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        setState: function(state, callback) {
            var s = this.state;
            if (!this.__s) this.__s = extend({}, s);
            extend(s, 'function' == typeof state ? state(s, this.props) : state);
            if (callback) (this.__h = this.__h || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function(callback) {
            if (callback) (this.__h = this.__h || []).push(callback);
            renderComponent(this, 2);
        },
        render: function() {}
    });
    var preact = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options
    };
    if (true) module.exports = preact; else self.preact = preact;
}();
//# sourceMappingURL=preact.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20).Buffer))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(32);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var PropTypes = __webpack_require__(0).PropTypes

module.exports = {
	contextTypes: {
		_intui_slide: PropTypes.bool,
		total_beta: PropTypes.number,
		vertical: PropTypes.bool,
		auto_h: PropTypes.bool,
		auto_w: PropTypes.bool,
		path: PropTypes.string
	},

	childContextTypes: {
		_intui_slide: PropTypes.bool,
		vertical: PropTypes.bool,
		total_beta: PropTypes.number,
		vertical: PropTypes.bool,
		auto_h: PropTypes.bool,
		auto_w: PropTypes.bool
	},
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(6);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

ONE_SECOND = 1000
ONE_MINUTE = ONE_SECOND*60
ONE_HOUR = ONE_MINUTE*60
ONE_DAY = ONE_HOUR*24
window.log = console.log

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

if (typeof Object.assign != 'function') {
  Object.assign = function(target, varArgs) { // .length of function is 2
    'use strict';
    if (target == null) { // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) { // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}


Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};


// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
Dependecies : React, React-DOM


Handler: (default_state, root_react_component, wrapper div)
  set: (new_state_object) -> new state

*/

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}


var preact = __webpack_require__(2);

render = preact.render
h = preact.h



function StateHandle(component,wrapper,initial_state){
  this.state = {};
  this.component = component;
  this.wrapper = wrapper
  this.root;
  this.watch_keys = []
  this.watch_calls = []
  this.empty = {}
  this.set = function(new_state,opt){
    opt = opt || this.empty


    if(new_state){
      for(var key in new_state){

        if( (!opt.overwrite) && typeof new_state[key] == 'object' && new_state[key] != null){
          // console.log('obj' new_state[key])
          // console.log(this.state[key])
          this.state[key] = Object.assign({},this.state[key],new_state[key]);
          // this.state = Object.assign({},this.state,new_state);
        }else{
          this.state[key] = new_state[key];
          log(new_state[key]);
        }
      }

      // this.state = Object.assign({},this.state,new_state);
      for (var i in this.watch_keys){
        if( new_state[this.watch_keys[i]] !== undefined ){
          this.watch_calls[i](new_state[this.watch_keys[i]])
        }
      }
    }
    
    this.root = render(
      h(this.component,this.state),
      this.wrapper,
      this.root
    )     
  

    return this
  }

  this.on = function(key,cb){
    this.watch_keys.push(key)
    this.watch_calls.push(cb)
  }
  if(initial_state){
    this.set(initial_state)
  }
  return this;
}

module.exports = StateHandle

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* 
	tetris grid  

	parses through items and arranges them into a grid, resizing and positioning based on index and w/h amount.

	NOTE:
		FIXED GRIDS:
			do not cycle through many offsets at once, this will result in grid resets!
			gradually increase the offset, you may increase the max offset but beware that offsetting more than an optimal amount may result in visual glitching depending on grid size!
			
			It is recommended to NOT use hard_sync. Keep your data lists consistent, if you want to display unique data, its best not to replace existing list items but add new ones with custom settings!
		ALL GRIDS:
			hard_sync matches and diffs all cached list items and prop children to make sure that child indecies do not go out of sync with the index_array.
		SCROLLABLE GRIDS:

	NOTE:
		if you do not use hard_sync which defaults to easy sync by default, IF you switch or shuffle the prop children, the grid will BREAK!!

	NOTE:
		remember to change grid ID (props.list_id) if you are working with different sets of children.
*/
window.ty = 'matrix3d(0,0,1.00,0,0.00,0.6,0.00,0,-1,0,0,0,0,0,0,1)';
__webpack_require__(34);
var React = __webpack_require__(0);

// console.log(React)
Mixin = {
	contextTypes: {
		animate: React.PropTypes.bool,
		scroll: React.PropTypes.object,
		fixed: React.PropTypes.bool,
		diam: React.PropTypes.number,
		vertical: React.PropTypes.bool,
		outerWidth: React.PropTypes.number,
		outerHeight: React.PropTypes.number,
		w: React.PropTypes.number,
		h: React.PropTypes.number,
	}
}



function clamp(n,min,max){
	if (n <= min) return min
	if(n >= max) return max
	return n
}





/* pass -1 for w/h to set size based on amount of children and grid dimentions */
var GridItem = React.createClass({
	displayName: 'GridItem',

	mixins: [Mixin],
	hidden: null,
	getDefaultProps: function getDefaultProps() {
		this.hide_t = null;
		return {
			show_beta: 1,
			render_beta: 2,
			animate: false,
			end: false,

			w: null,
			h: null,
			grid_shifts: 0,
			r: null,
			c: null,

			ease_dur: 0.4
		};
	},

	// getInitialState: function(){

	// },

	checkHidden: function checkHidden() {
		// console.log(-this.context.scroll.y);
		// console.log(this.props.end);
		var ch = this.context.outerHeight;
		if (this.context.vertical) {
			var top = (this.props.r - this.props.grid_shifts) * this.context.diam;
			var h = this.context.diam * this.props.h;
			var scroll = -this.context.scroll.y;

			if (scroll < top + h + ch * this.props.show_beta && scroll > top - ch - ch * this.props.show_beta) return 1;
			if (scroll < top + h + ch * this.props.render_beta && scroll > top - ch - ch * this.props.render_beta) return 0;
		} else {
			var left = (this.props.c - this.props.grid_shifts) * this.context.diam;
			var w = this.context.diam * this.props.w;
			var scroll = -this.context.scroll.x;
			if (scroll < left + w + ch * this.props.show_beta && scroll > left - ch - ch * this.props.show_beta) return 1;
			if (scroll < left + w + ch * this.props.render_beta && scroll > left - ch - ch * this.props.render_beta) return 0;
		}

		return -1;
	},

	// componentDidUpdate: function(props,state){
	// 	var check = this.checkHidden();
	// 	var hidden = check < 0;
	// 	if(this.hidden == hidden) return
	// 	if(check == -1){
	// 		this.hide(true);		
	// 	}else{
	// 		this.show(check == 0)
	// 	}
	// },

	hide: function hide(set) {

		this.hidden = true;
		// this.refs.item.style.visibility = 'hidden';
		this.refs.item.style.display = 'none';
	},

	show: function show(set, delay) {

		this.hidden = false;

		if(this.hide_t){
			clearTimeout(this.hide_t);
			this.hide_t = null;
		}

		// set = true

		if (set == true) {
			// this.refs.item.style.visibility = 'visible'
			this.refs.item.style.display = 'block';
			this.refs.item.style.transition = '';
			this.refs.item.style.transform = '';
			this.hide_t = setTimeout(function () {
				this.refs.item.style.transition = 'transform ' + this.props.ease_dur + 's cubic-bezier(.29,.3,.08,1)';
			}.bind(this), 1);
			return;
		} else {
			var x = this.props.w > this.props.h;

			var t_x = 'matrix3d(0.6,0,0.00,'+(-0.001+Math.random()*0.002)+',0.00,0,1.00,-0.003,0,-1,0,0,0,0,0,1)';
			var t_y = 'matrix3d(0,0,1,'+(-0.001+Math.random()*0.002)+',0.00,0.6,0.00,0.001,-1,0,0,0,0,0,0,1)';

			this.refs.item.style.transition = '';
			this.refs.item.style.transform = '' + (x ? t_x : t_y);
			// this.refs.item.style.visibility = 'visible'
			this.refs.item.style.display = 'block';

			this.hide_t = setTimeout(function () {
				this.refs.item.style.transition = 'transform ' + this.props.ease_dur + 's cubic-bezier(.29,.3,.08,1)';
				this.refs.item.style.transform = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)';
			}.bind(this),50);
		}

		if (this.props.onShow != null) {
			this.props.onShow();
		}
	},

	componentDidMount: function componentDidMount() {
		if (this.props.animate == false) {
			return this.show(false);
		}
		var check = this.checkHidden();
		this.hidden = true;

		if (this.context.fixed) {
			return this.show(false);
		}

		if (check < 0) {
			this.hide();
		} else {
			this.show(check == 0);
		}

		if(this.props.animate){
			this.update_scroll_interval = setInterval(this.scrollUpdate, 100 + Math.random() * 300);
		}
	},

	componentWillUnmount: function componentWillUnmount() {
		if (this.context.animate == false) {
			return;
		}
		// console.log("UNMOUNT ITEM")
		this.hidden = true;
		clearInterval(this.update_scroll_interval);
	},

	scrollUpdate: function scrollUpdate() {
		var check = this.checkHidden();
		var hidden = check < 0;
		if (this.hidden == hidden) return;
		if (check < 0) this.hide(true);else this.show(check == 0);
	},

	render: function render() {

		if (!this.context.fixed) {
			var left = this.props.c * this.context.diam + 'px';
			var top = (this.props.r - this.props.grid_shifts) * this.context.diam + 'px';
			var h = this.context.diam * this.props.h + 'px';
			var w = this.context.diam * this.props.w + 'px';
		} else {
			var left = 100 / this.context.w * this.props.c + '%';
			var top = 100 / this.context.h * this.props.r + '%';
			var w = 100 / this.context.w * this.props.w + '%';
			var h = 100 / this.context.h * this.props.h + '%';
		}

		var style = {
			left: left,
			top: top,
			height: h,
			width: w
		};

		return React.createElement(
			'div',
			{ className: '-i-grid-item-outer ' + this.props.outerClassName, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave, ref: 'item', style: style },
			this.props.children
		);
	}
});

module.exports.GridItem = GridItem;


var Grid = React.createClass({
	displayName: 'Grid',


	getDefaultProps: function getDefaultProps() {
		var defaults = {
			toggle_reset: false,
			bottom_pad: 150,
			auto : false,
			_id: null,
			show_beta: 1,
			render_beta: 2,
			animate: true,
			hard_sync: false, // hard sync checks props children against buffered children on every update (not recommended with large amounts of children elements)
			update_offset_beta: 1,
			max_reached: false,
			native_scroll: true,
			max_grid_height_beta: 3,
			pause_scroll: false,
			fixed: false,
			ease_dur: 0.4,
			vertical: true,
			offset: 0, //grid buffer offset.
			fill_up: true, //fill empty spots
			h: 2, //width of grid
			w: 2 
		};
		return defaults;
	},

	childContextTypes: {
		animate: React.PropTypes.bool,
		fixed: React.PropTypes.bool,
		diam: React.PropTypes.number,
		vertical: React.PropTypes.bool,
		scroll: React.PropTypes.object,
		outerWidth: React.PropTypes.number,
		outerHeight: React.PropTypes.number,
		w: React.PropTypes.number,
		h: React.PropTypes.number
	},

	getChildContext: function getChildContext() {
		// console.log(this.refs);
		return {
			animate: this.props.animate,
			fixed: this.props.fixed,
			vertical: this.props.vertical,
			scroll: this.stage,
			outerHeight: this.refs.outer ? this.refs.outer.clientHeight : 0,
			outerWidth: this.refs.outer ? this.refs.outer.clientWidth : 0,
			w: this.props.w,
			h: this.props.h,
			diam: this.getDiam()
		};
	},

	getInitialState: function getInitialState() {
		this.init(null,true);
		return {};
	},

	init: function init(props,force_scroll_reset) {
		if(this.refs && this.refs.outer){
			this.refs.outer.scrollTop = 0
		}
		this.index_array = [];
		this.max_reached = false;
		this.grid_shifts = 0;
		this.total_max_pos = 0;
		this.max_pos = 1;
		this.display_grid = [];
		this.children = [];
		this.grid = [];
		this.grid_keys = []; //array of grid children keys, used to find the grid index more efficiently.
		this.max_scroll_pos = 0; //minimum scroll position allowed.
		this.min_scroll_pos = 0; //maximum scroll position allowed.
		this.scroll_check_pos = 0;
		this.scrolling = false;
		this.check_end_interval = null;
		this.last_grid_index = 0;


		if(force_scroll_reset){
			this.stage = {
				y: 0,
				x: 0
			};
			this.scroll_pos = 0; //scroll position
			this.scroll_ppos = 0; // scroll previous position needed to check scroll
		}

		// console.log('init index array',props && props.w,props && props.h)
		this.initIndexArray(props && props.w || this.props.w ,props && props.h || this.props.h );
		
	},

	/* initialize the index array with a set width and height */
	initIndexArray: function initIndexArray(w, h) {


		for (var r = 0; r < h; r++) {
			var row = [];
			for (var c = 0; c < w; c++) {
				row[c] = -1;
			}
			this.index_array[r] = row;
		}


		this.last_grid_index = 0;
		this.min_scroll_pos = 0;

		this.greatest_index = 0;
		this.lowest_index = 0;
	},

	//diameter for positioning.
	getDiam: function getDiam() {
		if (this.refs.inner == null) return 0;

		if (this.props.fixed) {
			return null;
		} else {
			return this.refs.outer.clientWidth / this.props.w;
		}
	},

	findAdjacentSpot: function findAdjacentSpot() {
		alert('not implemented');
	},

	fillUpGrid: function fillUpGrid(props) {
		// console.log('fill up')
		var offset = props.offest || 0
		// console.log(this.children.length)
		// console.log('FILL',offset)
		for (var i = offset; i < this.children.length; i++) {
			var c = this.children[i];

			if (this.gridIndex(c) != -1) continue;
			// console.log(this.children);
			var spot = this.findFreeSpot(c.props.w, c.props.h, false,props);
			

			if (spot == null) return;
			this.fillSpot(i, spot[0], spot[1], c.props.w, c.props.h,props);
			this.addToGrid(c, spot[0], spot[1], i,props);
		}
	},

	findIndex: function findIndex(item_index) {
		var spots = [];
		for (var r = 0; r < col.length - 1; r++) {
			for (var c = 0; c < col[r].length - 1; c++) {
				if (col[r][c] == item_index) {
					spots.push([r, c]);
				}
			}
		}
	},

	/* sync props children with static child buffer array*/
	/* grid doesnt care what arrangement the prop children are in, 
 it will append to the buffer if new children are discovered and set null to buffer indecies that are not part of child props */
	// hardSyncChildren: function hardSyncChildren(new_children) {

	// 	//remove any buffer children that arent part of new children
	// 	for (var i = 0; i < this.children.length; i++) {
	// 		var c = this.children[i];
	// 		if (c == null) continue;
	// 		var found = false;
	// 		for (var j = 0; j < new_children.length; j++) {
	// 			if (c.key == new_children[j].key) {
	// 				found = true;
	// 			}
	// 		}
	// 		if (!found) this.removeChild(c);
	// 	}

	// 	//add new children that are not part of the buffer
	// 	for (var j = 0; j < new_children.length; j++) {
	// 		var n_c = new_children[j];
	// 		if (n_c == null) continue;
	// 		var found = false;
	// 		for (var i = 0; i < this.children.length; i++) {
	// 			if (this.children[i].key == n_c.key) {
	// 				found = true;
	// 			}
	// 		}
	// 		if (found == false) this.addChild(n_c);
	// 	}
	// },

	//remove child from buffer
	removeChild: function removeChild(index) {
		var child = this.children[index];
		if (child == null) throw 'cant remove child that doesnt exist.';
		this.children[index] = null;

		//we also need to check if the desynced child is part of the grid, and remove it.
		var gi = this.gridIndex(child);
		if (gi != -1) {
			var c = this.grid[gi];
			this.makeFreeSpot(c.props.r, c.props.c, c.props.w, c.props.h);
		}
	},

	//add child to buffer
	addChild: function addChild(child) {
		this.children.push(child);
	},

	/*
		do not check children against new_children 
		NOTE:
		keep in mind that if prop children are shuffled or rearranged, grid WILL break.
 	*/
	easySyncChildren: function easySyncChildren(props) {
		//	console.log("EASEY SYNC",new_children)
		// console.log("EASY SYNC",this.last_grid_index,new_children.length);
		this.children = props.children.slice(this.last_grid_index, this.last_grid_index + props.children.length);
		// console.log(this.children)
	},

	/* set the lowest and greatest indecies of the children */
	setMarkers: function setMarkers() {
		var g = null;
		var l = null;
		for (var r = 0; r < this.index_array.length; r++) {
			for (var c = 0; c < this.index_array[r].length; c++) {
				l = l == null ? this.index_array[r][c] : this.index_array[r][c] < l ? this.index_array[r][c] : l;
				g = g == null ? this.index_array[r][c] : this.index_array[r][c] > g ? this.index_array[r][c] : g;
			}
		}
		this.lowest_index = l;
		this.greatest_index = g;
	},

	/* add to grid */
	addToGrid: function addToGrid(child, r, c, index,props) {
	
		// console.log(child.props.w,child.props.h)
		var n_child = React.cloneElement(child, {
			key: child.props.key,
			show_beta: props.show_beta,
			render_beta: props.render_beta,
			animate: props.animate,
			ease_dur: props.ease_dur + Math.random()*0.3,
			w: child.props.w,
			h: child.props.h,
			end: false,
			r: r,
			c: c
		});
		this.grid.push(n_child);
		this.grid_keys.push(n_child.key);
	},

	//the final remove element from the grid index
	removeFromGrid: function removeFromGrid(child) {
		var i = this.gridIndex(child);
		if (i == -1) throw 'cant remove grid child, it does not exist';
		this.grid[i] = React.cloneElement(this.grid[i], { end: true });
	},

	/* get the grid index of a child, returning -1 if none is found */
	gridIndex: function gridIndex(child) {
		return this.grid_keys.indexOf(child.key);
	},

	/* remove any children within the passed spot boundries and set the now empty array spots to -1 */
	makeFreeSpot: function makeFreeSpot(r, c, w, h) {

		for (var n_h_i = 0; n_h_i < h; n_h_i++) {
			for (var n_w_i = 0; n_w_i < w; n_w_i++) {
				this.makeFreeSpot(r + n_h_i, c + n_w_i, 0, 0);
			}
		}

		var o_c_i = this.index_array[r][c]; //old child index
		if (o_c_i == -1) return true; //already free spot.

		var o_c = this.children[o_c_i]; //old child

		this.removeFromGrid(o_c); //remove old child from grid.

		var o_w = o_c.props.w; //old child width
		var o_h = o_c.props.h; //old child height

		var arr = this.index_array;

		var l = arr.length;

		//remove the indecies of old child in r,c position from index array

		for (var r = 0; r < l; r++) {
			var rl = arr[r].length;
			for (var c = 0; c < rl; c++) {
				if (arr[r][c] == o_c_i) {
					// //console.log("index ",o_c_i,"emptied for",r,c)
					arr[r][c] = -1;
				}
			}
		}
	},

	/* find the lowest or highest index spot on the grid */
	// findMaxIndexSpot: function findMaxIndexSpot(w, h, reverse) {

	// 	var arr = this.index_array;
	// 	var spot = [];
	// 	var l = arr.length;
	// 	var lai = null; //lowest average index


	// 	for (var r = 0; r < l; r++) {
	// 		var rl = arr[r].length;
	// 		for (var c = 0; c < rl; c++) {
	// 			var index_total = -1;
	// 			for (var h_i = 0; h_i < h && r + h_i < l; h_i++) {
	// 				for (var w_i = 0; w_i < w && c + w_i < rl; w_i++) {
	// 					index_total += arr[r + h_i][c + w_i];
	// 				}
	// 			}

	// 			if (c + w <= rl && r + h <= l && (lai == null || (reverse ? index_total > lai : index_total < lai))) {
	// 				lai = index_total;
	// 				spot = [r, c];
	// 			}
	// 		}
	// 	}

	// 	if (spot.length == 0) {
	// 		throw ' could not find lowest index spot ? ';
	// 	}

	// 	return spot;
	// },

	//find and index spot from BOTTOM to TOP
	findFreeSpot: function findFreeSpot(w, h, reverse,props) {
		// console.log(this.index_array[0][8])
		// var reverse = true
		var self = this;
		var max_r = 0;
		var min_r = 10;
		var col = this.index_array;
		var l = col.length;

		var l_min = l - min_r;
		if (l_min < 0) l_min = 0;
		function find() {
			for (var r = reverse ? l - 1 : l_min; (reverse ? r >= 0 : r < l) && (max_r ? reverse ? r >= l - max_r : r <= max_r : true /* WAT */); reverse ? r-- : r++) {
				// console.log(l,r)
				var rl = col[r].length;
				for (var c = 0; c < rl; c++) {
					if (r + h > l || c + w > rl) continue;

					var found = true;
					for (var h_i = 0; h_i < h && found == true; h_i++) {
						for (var w_i = 0; w_i < w && found == true; w_i++) {
							if (col[r + h_i][c + w_i] == -1) {
								found = true;
							} else {
								found = false;
							}
						}
					}
					if (found == true) return [r, c];
				}
			}

			if (props.fixed) return null;

			if (props.vertical) {
				var row = [];
				for (var c = 0; c < props.w; c++) {
					row.push(-1);
				}

				self.index_array.push(row);
			} else {
				for (var r = 0; r < props.h; r++) {
					col[r].push(-1);
				}
			}

			l = self.index_array.length;

			return find();
		}

		return find();
	},

	//from ANY free SPOT
	findFreeSpots: function findFreeSpots() {
		var arr = this.index_array;
		var l = arr.length;
		var spots = [];
		for (var r = 0; r < l; r++) {
			var rl = arr[r].length;
			for (var c = 0; c < rl; c++) {
				if (arr[r][c] != -1) continue;
				var h_i = 0;
				var w_i = 0;

				while (c + w_i + 1 < rl && arr[r + h_i][c + w_i + 1] == -1) {
					spots.push({
						r: r,
						c: c,
						h: h_i + 1,
						w: w_i + 1
					});
					w_i += 1;
				}

				while (r + h_i + 1 < l && arr[r + h_i + 1][c + w_i] == -1) {
					spots.push({
						r: r,
						c: c,
						h: h_i + 1,
						w: w_i + 1
					});
					h_i += 1;
				}

				spots.push({
					r: r,
					c: c,
					h: h_i + 1,
					w: w_i + 1
				});
			}
		}

		return spots;
	},

	/* add a row to the grid */
	// insertIndexRow: function(r){
	// 	if(this.props.fixed) throw 'cant add index rows to fixed index array, disable fixed index array option.'

	// 	this.grid_shifts ++;
	// 	var row = []
	// 	for(var i = 0;i<this.props.w;i++){
	// 		row.push(-1)
	// 	}
	// 	this.index_array.splice(r,row)

	// },

	/* fill spot */
	fillSpot: function fillSpot(child_i, r, c, w, h,props) {
		//	console.log('fill spot',r,c,w,h,'#'+child_i)


		var col = this.index_array;

		for (var h_i = 0; h_i < h; h_i++) {
			if (col[r + h_i] == null) throw 'fill spot error: row does not exist not empty ' + r + ',' + c + '';
			for (var w_i = 0; w_i < w; w_i++) {
				if (col[r + h_i][c + w_i] == null) throw 'fill spot error: column does not exist not empty ' + r + ',' + c + '';
				if (col[r + h_i][c + w_i] != -1) throw 'fill spot error: not empty ' + r + ',' + c + '';else col[r + h_i][c + w_i] = child_i;
				//	console.log("filled spot",r+h_i,c+w_i,"with",child_i)
			}
		}
		this.setMarkers();
		return true;
	},

	/* reset the grid, removing all state children and setting outer prop children to end their life cycle on the next update */
	resetGrid: function resetGrid(w, h) {

		this.initIndexArray(w, h);

		for (var i = 0; i < this.grid.length; i++) {
			this.grid[i] = React.cloneElement(this.grid[i], { end: true });
		}
		// this.grid = [];

		this.children = [];
	},

	/* child index */
	childIndex: function childIndex(key) {
		for (var c = 0; c < this.children.length; c++) {
			if (this.children[c].key == key) return c;
		}
		return -1;
	},

	/* fill empty spots */
	fillEmptySpots: function fillEmptySpots(props) {
		var offset = props.offset
		if (offset == null) throw 'cant fill empty spots with no offset';

		var spots = this.findFreeSpots();

		if (spots.length == 0) return;

		var spots = spots.sort(function (s1, s2) {
			if (s1.w * s2.h < s2.w * s2.h) return -1;else return 1;
		});

		/* first go back from offset and try and fill. */
		for (var i = offset; i >= 0; i--) {
			var c = this.children[i];
			if (this.gridIndex(c) != -1) continue;
			for (var j = 0; j < spots.length && found == false; j++) {
				var s = spots[j];
				if (s == null) continue;
				if (s.w == c.props.w && s.h == c.props.h) {
					//yey we found a free spot!
					this.fillSpot(i, s.r, s.c, s.w, s.h,props);
					this.addToGrid(c, s.r, s.c, i,props);
					found = true;
				}
			}
			if (found) spots = this.findFreeSpots();
		}

		//filter out nulls.
		spots = this.findFreeSpots();
		if (spots.length == 0) return;

		/*
  If we failed to fill the grid up by going back from offset, 
  go forwards from offset and if child is not in grid fill up all the way until no children remaining
  */
		//	console.log("FIND FW",spots)
		for (var i = offset; i < this.children.length; i++) {
			var c = this.children[i];
			if (this.gridIndex(c) != -1) continue;
			// //console.log('GRID INDEX OF',i,this.gridIndex(c))
			var found = false;
			for (var j = 0; j < spots.length && found == false; j++) {
				var s = spots[j];
				if (s == null) continue;
				if (s.w == c.props.w && s.h == c.props.h) {
					//yey we found a free spot!
					this.fillSpot(i, s.r, s.c, s.w, s.h,props);
					this.addToGrid(c, s.r, s.c, i,props);
					found = true;
				}
			}
			if (found) spots = this.findFreeSpots();
		}

		/*done*/
		return;
	},

	/* grid state sync has to happen before the render happens, the grid elements need to be rendered */
	componentWillUpdate: function(props, state){
		if(!Array.isArray(props.children)){
			if(props.children){
				props.children = [props.children]
			}else{
				props.children = []
			}
		}
		
		if (this.props._id != props._id || this.props.w != props.w){
			this.pause_scroll = true
			this.init(props,true);
			this.easySyncChildren(props);
			this.fillUpGrid(props);
			
				

		}

		//resync if children lengths dont match
		else if (this.children.length < props.children.length) {
			// console.log(props.children)
			this.pause_scroll = true
			this.easySyncChildren(props);
			if (props.fixed == true) {
				this.fillUpGrid(props);
				this.fillEmptySpots(props);
			} else {
				this.fillUpGrid(props);
			}
		}else if (props.children.length < this.children.length){
			this.pause_scroll = true
			// console.log('init with new screoll')
			this.init(props,true);
			this.easySyncChildren(props);
			this.fillUpGrid(props);
		}else if(this.props.toggle_reset != props.toggle_reset){
			this.pause_scroll = true
			this.init(props);
			this.easySyncChildren(props);
			this.fillUpGrid(props);
		}


		//if offset changed go back or forwards.
		// if (this.props.offset != props.offset && this.props.fixed) {
		// 	var d = props.offset - this.props.offset;
		// 	if (Math.abs(d) > props.max_offset) {
		// 		this.resetGrid(props.w, props.h);
		// 		// this.fillInitialGrid(props.offset);
		// 	} else if (d > 0) {
		// 		for (var i = 0; i < d; i++) {
		// 			this.goForward();
		// 		}
		// 	} else if (d < 0) {
		// 		for (var i = 0; i < d; i++) {
		// 			this.goBack();
		// 		}
		// 	}
		// 	this.fillEmptySpots(props.offset);
		// }
		// this.getMinMax();
		if (!this.props.fixed) {
			this.display_grid = this.getScrollGrid();
		}
		this.pause_scroll = false
	},

	getScrollGrid: function getScrollGrid(off) {
		// console.log('get scroll grid')

		var scroll = this.scroll_pos;
		var d = this.getDiam();
		var grid = [];
		var min_c, max_c, t_max_c;

		// console.log("GET GRID",this.grid);
		var min = scroll - this.refs.outer.clientHeight * this.props.max_grid_height_beta;
		var max = scroll + this.refs.outer.clientHeight * (this.props.max_grid_height_beta + 1);
		// var current_max = false
		for (var i = 0; i < this.grid.length; i++) {
			if (!t_max_c || c.props.r > t_max_c.props.r) {
				t_max_c = c;
			}

			var c = this.grid[i];
			var pos = c.props.r * d;

			// console.log(pos,min,max);
			if (pos <= max && pos >= min) {
				grid.push(c);
				if (!min_c || c.props.r < min_c.props.r) {
					min_c = c;
				}
				if (!max_c || c.props.r > max_c.props.r) {
					max_c = c;
				}
				// if(i == this.grid.length){
				// 	current_max = true
				// }
			} else {
				if (c.props.end != false) {
					this.removeFromGrid(c);
					grid.push(c);
				}
			}
		}

		// this.current_max = current_max;
		// console.log(max_c.props.r * d + d * max_c.props.h);
		this.max_pos = max_c ? (max_c.props.r * d + d) : 0
		this.min_scroll_pos = min_c ? min_c.props.r * d - 50 : this.min_scroll_pos;
		this.max_scroll_pos = max_c ? max_c.props.r * d + d * max_c.props.h - this.refs.outer.clientHeight : this.max_scroll_pos;
		this.total_max_pos = t_max_c ? t_max_c.props.r * d + d * t_max_c.props.h - this.refs.outer.clientHeight : this.total_max_pos;
		if (this.total_max_pos < 0) this.total_max_pos = 0;
		if (this.max_scroll_pos < 0) this.max_scroll_pos = 0;

		// if(this.props.auto){
		// 	this.max_scroll_pos = d * max_c.props.h
		// 	this.total_max_pos = d * max_c.props.h
		// }

		return grid;
	},

	// resetGridPos: function(){
	// 	this.scroll_pos = 0;
	// 	this.refs.outer.scrollTop = 0;
	// 	this.stage.y = 0
	// 	this.stage.x = 0
	// 	this.min_scroll_pos = 0
	// 	this.max_scroll_pos = 0
	// },


	onMouseWheel: function onMouseWheel(e) {
		e = e || window.event;
		if (this.scroll_pos <= this.min_scroll_pos && (e.deltaY || e.detail) < 0) {

			if (this.scrolling == true) {
				this.refs.outer.scrollTop = this.min_scroll_pos;
				if (this.refs.outer.scrollTo) this.refs.outer.scrollTo(0, this.min_scroll_pos);
				e.preventDefault();
				e.stopPropagation();
				e.returnValue = false;
			}else if(this.pause_scroll){
				e.preventDefault();
				e.stopPropagation();
				e.returnValue = false;
			}
			return false;
		}
	},

	/* 
 	update scroll position for further calculations
 	be aware that  high cpu usage may cause scroll bottlenecks 
 */
	onScroll: function onScroll(e) {
		this.scroll_pos = e.target.scrollTop;
		this.stage.y = -e.target.scrollTop;
		this.stage.x = -e.target.scrollLeft;

		if (this.scrolling == false) {
			if (this.props.onScrollStart) this.props.onScrollStart(this.scroll_pos, r_max - this.scroll_pos);
			this.scrolling = true;
		}
		if(this.pause_scroll){
			e.preventDefault();
			e.stopPropagation();
			e.returnValue = false;
			return false
		}
	},

	componentDidMount: function componentDidMount() {

		/*
  	if grid is not fixed (scrollable) we set an interval to check 
  	if the container has stopped scrolling, 
  	this is needed for updating the grid buffer
  */
		if (!this.props.fixed) this.check_end_interval = setInterval(this.checkEndScroll, 200);

		/*
  	if native scroll is true, we need to freeze container scrolling 
  	if we reach a min and also update the scroll position variable
  	the scroll position variable is used in other methods and should be up to date.
  */
		if (this.props.native_scroll == true && !this.props.fixed) {
			this.refs.outer.addEventListener('DOMMouseScroll', this.onMouseWheel, false);
			this.refs.outer.addEventListener('mousewheel', this.onMouseWheel);
			this.refs.outer.addEventListener('scroll', this.onScroll);
		}

		//check if need to update after mounting.
		if (!this.props.fixed) {
			setTimeout(function () {
				if (this.checkGridUpdate() && this.props.onUpdate && !this.props.max_reached) this.props.onUpdate();
			}.bind(this));
		}

		this.forceUpdate();
	},

	componentWillUnmount: function componentWillUnmount() {

		this.refs.outer.removeEventListener('mousewheel', this.onMouseWheel);
		this.refs.outer.removeEventListener('scroll', this.onScroll);
		clearInterval(this.check_end_interval);
	},

	/*
 	update grid check
 	-1: no update
 	0: grid needs update
 	1: needs update
 */
	checkGridUpdate: function checkGridUpdate() {
		var oh = this.refs.outer.clientHeight;
		var off = this.props.update_offset_beta;
		var scroll = this.scroll_pos;
		var min = this.min_scroll_pos;
		var max = this.max_scroll_pos;
		var total_max = this.total_max_pos;
		var ret = -1;

		if (max - scroll <= oh * off && !this.props.max_reached && max >= total_max) {
			ret = 1;
		} else if (min > -50 && scroll - min <= oh * off || max - scroll <= oh * off && max != total_max) {
			ret = 0;
		}

		// console.log('grid needs update? ',ret,'|max:',max,'|min:',min,'|pos:',scroll,'reached:',this.props.max_reached,'off',off,'oh',oh,total_max)

		return ret;
	},

	scrollTo: function scrollTo() {},

	checkEndScroll: function checkEndScroll() {
		//console.log(this.scrolling);
		if (this.scroll_check_pos == this.scroll_pos && this.scrolling == true) {
			this.scrolling = false;

			//if the grid needs more children and max has not been reached return 1 if grid just needs update return 0 else return 1
			var upd = this.checkGridUpdate();
			// console.log(upd);
			if (upd == 1) {
				if (this.props.onUpdate) this.props.onUpdate();
			} else if (upd == 0) {
				this.forceUpdate();
			}
		}
		this.scroll_check_pos = this.scroll_pos;
	},

	/* render */
	render: function render() {
		// console.log(this.refs.outer && this.refs.outer.clientHeight);
		// console.log(this.props.max_reached && this.max_scroll_pos <= this.total_max_pos,this.props.max_reached,this.max_scroll_pos,this.total_max_pos)
		// console.log('render grid count:',this.display_grid.length);
		// console.log(this.props.fixed)
		var inner_style, inner, outer_style, top_loader;

		// var load_circle_style = {
		// 	position: 'absolute',
		// 	left: 'calc( 50% - 5px )',
		// 	bottom: (this.refs.outer ? this.refs.outer.clientHeight / 4 / 2 : 0) + 'px'
		// };

		//fixed grid render options
		if (this.props.fixed) {

			//set fixed width and height property
			if (this.props.width || this.props.height) {
				outer_style = { width: this.props.width, height: this.props.height };
			}
			inner = this.grid;

			//scrollable grid render options	
		} else {
			if (this.props.vertical) {
				inner_style = {
					height: this.props.fixed ? '100%' : ( this.max_pos || this.refs.outer && (this.refs.outer.clientHeight / 2 - this.props.bottom_pad/2) || 0 ) + this.props.bottom_pad + 'px',
					transform: '',
					perspective: ''
				};
			}
			var inner = React.createElement(
				'div',
				{ style: inner_style, ref: 'inner', className: '-i-grid-inner' },
				this.display_grid,
				React.createElement('div', { className: '-i-loader ' + (this.props.max_reached && this.max_scroll_pos >= this.total_max_pos ? '-i-loader-stop' : '')})
			);
		}

		return React.createElement(
			'div',
			{ key: this.key, ref: 'outer', style: outer_style, className: '-i-grid ' + (this.props.native_scroll ? '-i-grid-scroll' : '') + ' ' + this.props.className || this.props.c },
			inner
		);
	}
});

module.exports.Grid = Grid
module.exports.GridMixin = Mixin







/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Component, Slide, _extends, cn, h, ref1,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

_extends = __webpack_require__(37);

ref1 = __webpack_require__(2), h = ref1.h, Component = ref1.Component;

cn = __webpack_require__(1);

if (!Object.assign) {
  throw 'Object.assign not found, use polyfill';
}

if (!cn) {
  throw 'classnames not found';
}

Slide = (function(superClass) {
  extend(Slide, superClass);

  function Slide(props) {
    this.setIndex = bind(this.setIndex, this);
    this.toIndex = bind(this.toIndex, this);
    Slide.__super__.constructor.call(this, props);
    this.state = {
      ok: true
    };
  }

  Slide.prototype.isSlide = function(child) {
    if (!child) {
      return false;
    }
    if (!child.nodeName) {
      return false;
    }
    if (child.nodeName.name === 'Slide') {
      return true;
    }
    return false;
  };

  Slide.prototype.isChild = function(child) {
    if (!child) {
      return false;
    }
    if (child.getAttribute('class') && child.getAttribute('class').match(/-i-slide-outer|-i-slide-static/) !== null) {
      return true;
    }
    return false;
  };

  Slide.prototype.rect = function() {
    var rect;
    return rect = {
      width: this.props.width || this._outer.clientWidth,
      height: this.props.height || this._outer.clientHeight
    };
  };

  Slide.prototype.events = ['onClick', 'onMouseEnter', 'onMouseLeave'];

  Slide.prototype.passProps = function() {
    this.pass_props = {};
    return this.events.forEach((function(_this) {
      return function(e) {
        if (_this.props[e]) {
          return _this.pass_props[e] = _this.props[e];
        }
      };
    })(this));
  };

  Slide.prototype.getIndexXY = function(pos) {
    var child, max_x, max_y, o_h, o_w, x, y;
    o_w = this._outer.clientWidth;
    o_h = this._outer.clientHeight;
    child = this._inner.children[pos];
    max_x = Math.abs(child.offsetLeft);
    max_y = Math.abs(child.offsetTop);
    if (!this.props.vertical) {
      x = child.offsetLeft;
      y = 0;
    } else {
      y = child.offsetTop;
      x = 0;
    }
    if (this.props.vertical && child.offsetTop > max_y) {
      y = max_y;
    } else if (child.offsetLeft > max_x) {
      x = max_x;
    }
    if (this.props.index_offset) {
      if (this.props.vertical) {
        y += this.props.index_offset;
      } else {
        x += this.props.index_offset;
      }
    }
    return [-x, -y];
  };

  Slide.prototype.toIndex = function() {
    var pos;
    pos = this.getIndexXY(this.props.pos);
    console.log(pos);
    this._inner.style.transition = !this.props.scroll && ('transform ' + this.props.ease_dur + 's ' + this.props.ease) || '';
    return this._inner.style.transform = 'matrix(1, 0, 0, 1, ' + pos[0] + ', ' + pos[1] + ')';
  };

  Slide.prototype.setIndex = function() {
    var pos;
    pos = this.getIndexXY(this.props.pos);
    console.log(pos);
    this._inner.style.transition = '';
    return this._inner.style.transform = 'matrix(1, 0, 0, 1, ' + pos[0] + ', ' + pos[1] + ')';
  };

  Slide.prototype.diffAnimation = function(props, state) {
    if (this.props.slide && (this.props.pos !== null || this.props.index_offset !== null)) {
      if (props.pos !== this.props.pos || props.index_offset !== this.props.index_offset) {
        return setTimeout(this.toIndex, 100);
      }
    }
  };

  Slide.prototype.componentDidUpdate = function(props, state) {
    return this.diffAnimation(props, state);
  };

  Slide.prototype.componentDidMount = function(props, state) {
    if (this.props.slide && this.props.pos) {
      return setTimeout(this.setIndex, 0);
    }
  };

  Slide.prototype.componentWillMount = function() {
    return this.passProps();
  };

  Slide.prototype.getBeta = function() {
    var beta, ref2;
    beta = this.props.beta + '%';
    if (this.props.offset) {
      return 'calc(' + beta + ' ' + ((ref2 = this.props.offset > 0) != null ? ref2 : {
        '+ ': '- '
      }) + Math.abs(this.props.offset) + 'px)';
    } else {
      return beta;
    }
  };

  Slide.prototype.componentWillUnUnmount = function() {};

  Slide.prototype.getOuterHW = function(w, h) {
    w = (!this.context.vertical && this.props.size) || this.props.width;
    h = (this.context.vertical && this.props.size) || this.props.height;
    h = (this.context.vertical && this.props.auto) && 'auto' || (h && h + 'px');
    w = (!this.context.vertical && this.props.auto) && 'auto' || (w && w + 'px');
    if (this.context.vertical) {
      w = w || '100%';
      h = h || this.getBeta();
    } else {
      w = w || this.getBeta();
      h = h || '100%';
    }
    return [w, h];
  };

  Slide.prototype.render = function(props, state) {
    var i, inner, item, len, o_c, outer, outer_hw, ref2, ret;
    o_c = cn('-i-slide-outer', this.props.className, this.props.outerClassName, (this.props.height !== null || this.props.width !== null) && ' -i-slide-fixed');
    outer_hw = this.getOuterHW();
    if (this.props.slide) {
      inner = [];
      outer = [];
      ref2 = props.children;
      for (i = 0, len = ref2.length; i < len; i++) {
        item = ref2[i];
        if (this.isSlide(item)) {
          inner.push(item);
        } else {
          outer.push(item);
        }
      }
      ret = h('div', {
        className: o_c,
        style: _extends({}, this.props.outerStyle, {
          width: outer_hw[0],
          height: outer_hw[1]
        }),
        ref: (function(_this) {
          return function(ref) {
            return _this._outer = ref;
          };
        })(this)
      }, h('div', _extends({}, this.pass_props, {
        ref: (function(_this) {
          return function(ref) {
            return _this._inner = ref;
          };
        })(this),
        className: cn('-i-slide-inner', this.props.vertical && '-i-slide-vertical', this.props.innerClassName, this.props.center && '-i-slide-center'),
        style: _extends({}, {
          width: this.props.vertical && '100%' || 'auto',
          height: this.props.vertical && 'auto' || '100%'
        }, this.props.innerStyle)
      }), inner), outer);
    } else {
      ret = h('div', _extends({}, this.pass_props, {
        className: o_c,
        style: _extends({}, this.props.outerStyle, {
          width: outer_hw[0],
          height: outer_hw[1]
        })
      }), this.props.children);
    }
    return ret;
  };

  return Slide;

})(Component);

Slide.defaultProps = {
  scroll: false,
  ease: 'cubic-bezier(0.25, 0.34, 0, 1)',
  ease_dur: 0.4,
  pos: 0,
  animate: false,
  offset: 0,
  slide: false,
  beta: 100,
  width: null,
  height: null,
  center: false,
  vert: false,
  inverse: false
};

module.exports = Slide;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Button, Component, SlideButton, SquareButton, cn, createElement, el, ref,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

cn = __webpack_require__(1);

SlideButton = __webpack_require__(22);

Button = __webpack_require__(21);

ref = __webpack_require__(0), createElement = ref.createElement, Component = ref.Component;

el = createElement;

SquareButton = (function(superClass) {
  extend(SquareButton, superClass);

  function SquareButton(props) {
    this.render = bind(this.render, this);
    SquareButton.__super__.constructor.call(this, props);
  }

  SquareButton.prototype.render = function(props, state) {
    var class1, class2, offset, pos;
    if (this.props.inverse) {
      class1 = this.props.staticClass;
      class2 = this.props.activeClass;
      if (this.props.active) {
        pos = 0;
        offset = 0;
      } else {
        pos = 1;
        offset = -this.props.offset;
      }
    } else {
      class2 = this.props.staticClass;
      class1 = this.props.activeClass;
      if (this.props.active) {
        pos = 1;
        offset = 0;
      } else {
        pos = 0;
        offset = this.props.offset;
      }
    }
    return el(SlideButton, {
      width: this.props.width || null,
      height: this.props.height || null,
      className: 'btn ' + this.props.className,
      onClick: this.props.onClick,
      vertical: this.props.vertical,
      hover: true,
      disabled: props.disabled,
      index_offset: offset,
      pos: pos
    }, el(Button, {
      i: this.props.i,
      className: cn('btn', class2)
    }), el(Button, {
      i: this.props.i,
      className: cn('btn', class1)
    }));
  };

  return SquareButton;

})(Component);

SquareButton.defaultProps = {
  offset: 5
};

module.exports = SquareButton;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(__webpack_require__(2)) :
	typeof define === 'function' && define.amd ? define(['preact'], factory) :
	(factory(global.preact));
}(this, (function (preact) { 'use strict';

// render modes

var ATTR_KEY = '__preactattr_';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */

// Internal helpers from preact
/**
 * Return a ReactElement-compatible object for the current state of a preact
 * component.
 */
function createReactElement(component) {
	return {
		type: component.constructor,
		key: component.key,
		ref: null, // Unsupported
		props: component.props
	};
}

/**
 * Create a ReactDOMComponent-compatible object for a given DOM node rendered
 * by preact.
 *
 * This implements the subset of the ReactDOMComponent interface that
 * React DevTools requires in order to display DOM nodes in the inspector with
 * the correct type and properties.
 *
 * @param {Node} node
 */
function createReactDOMComponent(node) {
	var childNodes = node.nodeType === Node.ELEMENT_NODE ? Array.from(node.childNodes) : [];

	var isText = node.nodeType === Node.TEXT_NODE;

	return {
		// --- ReactDOMComponent interface
		_currentElement: isText ? node.textContent : {
			type: node.nodeName.toLowerCase(),
			props: node[ATTR_KEY]
		},
		_renderedChildren: childNodes.map(function (child) {
			if (child._component) {
				return updateReactComponent(child._component);
			}
			return updateReactComponent(child);
		}),
		_stringText: isText ? node.textContent : null,

		// --- Additional properties used by preact devtools

		// A flag indicating whether the devtools have been notified about the
		// existence of this component instance yet.
		// This is used to send the appropriate notifications when DOM components
		// are added or updated between composite component updates.
		_inDevTools: false,
		node: node
	};
}

/**
 * Return the name of a component created by a `ReactElement`-like object.
 *
 * @param {ReactElement} element
 */
function typeName(element) {
	if (typeof element.type === 'function') {
		return element.type.displayName || element.type.name;
	}
	return element.type;
}

/**
 * Return a ReactCompositeComponent-compatible object for a given preact
 * component instance.
 *
 * This implements the subset of the ReactCompositeComponent interface that
 * the DevTools requires in order to walk the component tree and inspect the
 * component's properties.
 *
 * See https://github.com/facebook/react-devtools/blob/e31ec5825342eda570acfc9bcb43a44258fceb28/backend/getData.js
 */
function createReactCompositeComponent(component) {
	var _currentElement = createReactElement(component);
	var node = component.base;

	var instance = {
		// --- ReactDOMComponent properties
		getName: function getName() {
			return typeName(_currentElement);
		},
		_currentElement: createReactElement(component),
		props: component.props,
		state: component.state,
		forceUpdate: component.forceUpdate && component.forceUpdate.bind(component),
		setState: component.setState && component.setState.bind(component),

		// --- Additional properties used by preact devtools
		node: node
	};

	// React DevTools exposes the `_instance` field of the selected item in the
	// component tree as `$r` in the console.  `_instance` must refer to a
	// React Component (or compatible) class instance with `props` and `state`
	// fields and `setState()`, `forceUpdate()` methods.
	instance._instance = component;

	// If the root node returned by this component instance's render function
	// was itself a composite component, there will be a `_component` property
	// containing the child component instance.
	if (component._component) {
		instance._renderedComponent = updateReactComponent(component._component);
	} else {
		// Otherwise, if the render() function returned an HTML/SVG element,
		// create a ReactDOMComponent-like object for the DOM node itself.
		instance._renderedComponent = updateReactComponent(node);
	}

	return instance;
}

/**
 * Map of Component|Node to ReactDOMComponent|ReactCompositeComponent-like
 * object.
 *
 * The same React*Component instance must be used when notifying devtools
 * about the initial mount of a component and subsequent updates.
 */
var instanceMap = typeof Map === 'function' && new Map();

/**
 * Update (and create if necessary) the ReactDOMComponent|ReactCompositeComponent-like
 * instance for a given preact component instance or DOM Node.
 *
 * @param {Component|Node} componentOrNode
 */
function updateReactComponent(componentOrNode) {
	var newInstance = componentOrNode instanceof Node ? createReactDOMComponent(componentOrNode) : createReactCompositeComponent(componentOrNode);
	if (instanceMap.has(componentOrNode)) {
		var inst = instanceMap.get(componentOrNode);
		Object.assign(inst, newInstance);
		return inst;
	}
	instanceMap.set(componentOrNode, newInstance);
	return newInstance;
}

function nextRootKey(roots) {
	return '.' + Object.keys(roots).length;
}

/**
 * Find all root component instances rendered by preact in `node`'s children
 * and add them to the `roots` map.
 *
 * @param {DOMElement} node
 * @param {[key: string] => ReactDOMComponent|ReactCompositeComponent}
 */
function findRoots(node, roots) {
	Array.from(node.childNodes).forEach(function (child) {
		if (child._component) {
			roots[nextRootKey(roots)] = updateReactComponent(child._component);
		} else {
			findRoots(child, roots);
		}
	});
}

/**
 * Create a bridge for exposing preact's component tree to React DevTools.
 *
 * It creates implementations of the interfaces that ReactDOM passes to
 * devtools to enable it to query the component tree and hook into component
 * updates.
 *
 * See https://github.com/facebook/react/blob/59ff7749eda0cd858d5ee568315bcba1be75a1ca/src/renderers/dom/ReactDOM.js
 * for how ReactDOM exports its internals for use by the devtools and
 * the `attachRenderer()` function in
 * https://github.com/facebook/react-devtools/blob/e31ec5825342eda570acfc9bcb43a44258fceb28/backend/attachRenderer.js
 * for how the devtools consumes the resulting objects.
 */
function createDevToolsBridge() {
	// The devtools has different paths for interacting with the renderers from
	// React Native, legacy React DOM and current React DOM.
	//
	// Here we emulate the interface for the current React DOM (v15+) lib.

	// ReactDOMComponentTree-like object
	var ComponentTree = {
		getNodeFromInstance: function getNodeFromInstance(instance) {
			return instance.node;
		},
		getClosestInstanceFromNode: function getClosestInstanceFromNode(node) {
			while (node && !node._component) {
				node = node.parentNode;
			}
			return node ? updateReactComponent(node._component) : null;
		}
	};

	// Map of root ID (the ID is unimportant) to component instance.
	var roots = {};
	findRoots(document.body, roots);

	// ReactMount-like object
	//
	// Used by devtools to discover the list of root component instances and get
	// notified when new root components are rendered.
	var Mount = {
		_instancesByReactRootID: roots,

		// Stub - React DevTools expects to find this method and replace it
		// with a wrapper in order to observe new root components being added
		_renderNewRootComponent: function _renderNewRootComponent() /* instance, ... */{}
	};

	// ReactReconciler-like object
	var Reconciler = {
		// Stubs - React DevTools expects to find these methods and replace them
		// with wrappers in order to observe components being mounted, updated and
		// unmounted
		mountComponent: function mountComponent() /* instance, ... */{},
		performUpdateIfNecessary: function performUpdateIfNecessary() /* instance, ... */{},
		receiveComponent: function receiveComponent() /* instance, ... */{},
		unmountComponent: function unmountComponent() /* instance, ... */{}
	};

	/** Notify devtools that a new component instance has been mounted into the DOM. */
	var componentAdded = function componentAdded(component) {
		var instance = updateReactComponent(component);
		if (isRootComponent(component)) {
			instance._rootID = nextRootKey(roots);
			roots[instance._rootID] = instance;
			Mount._renderNewRootComponent(instance);
		}
		visitNonCompositeChildren(instance, function (childInst) {
			childInst._inDevTools = true;
			Reconciler.mountComponent(childInst);
		});
		Reconciler.mountComponent(instance);
	};

	/** Notify devtools that a component has been updated with new props/state. */
	var componentUpdated = function componentUpdated(component) {
		var prevRenderedChildren = [];
		visitNonCompositeChildren(instanceMap.get(component), function (childInst) {
			prevRenderedChildren.push(childInst);
		});

		// Notify devtools about updates to this component and any non-composite
		// children
		var instance = updateReactComponent(component);
		Reconciler.receiveComponent(instance);
		visitNonCompositeChildren(instance, function (childInst) {
			if (!childInst._inDevTools) {
				// New DOM child component
				childInst._inDevTools = true;
				Reconciler.mountComponent(childInst);
			} else {
				// Updated DOM child component
				Reconciler.receiveComponent(childInst);
			}
		});

		// For any non-composite children that were removed by the latest render,
		// remove the corresponding ReactDOMComponent-like instances and notify
		// the devtools
		prevRenderedChildren.forEach(function (childInst) {
			if (!document.body.contains(childInst.node)) {
				instanceMap['delete'](childInst.node);
				Reconciler.unmountComponent(childInst);
			}
		});
	};

	/** Notify devtools that a component has been unmounted from the DOM. */
	var componentRemoved = function componentRemoved(component) {
		var instance = updateReactComponent(component);
		visitNonCompositeChildren(function (childInst) {
			instanceMap['delete'](childInst.node);
			Reconciler.unmountComponent(childInst);
		});
		Reconciler.unmountComponent(instance);
		instanceMap['delete'](component);
		if (instance._rootID) {
			delete roots[instance._rootID];
		}
	};

	return {
		componentAdded: componentAdded,
		componentUpdated: componentUpdated,
		componentRemoved: componentRemoved,

		// Interfaces passed to devtools via __REACT_DEVTOOLS_GLOBAL_HOOK__.inject()
		ComponentTree: ComponentTree,
		Mount: Mount,
		Reconciler: Reconciler
	};
}

/**
 * Return `true` if a preact component is a top level component rendered by
 * `render()` into a container Element.
 */
function isRootComponent(component) {
	// `_parentComponent` is actually `__u` after minification
	if (component._parentComponent || component.__u) {
		// Component with a composite parent
		return false;
	}
	if (component.base.parentElement && component.base.parentElement[ATTR_KEY]) {
		// Component with a parent DOM element rendered by Preact
		return false;
	}
	return true;
}

/**
 * Visit all child instances of a ReactCompositeComponent-like object that are
 * not composite components (ie. they represent DOM elements or text)
 *
 * @param {Component} component
 * @param {(Component) => void} visitor
 */
function visitNonCompositeChildren(component, visitor) {
	if (component._renderedComponent) {
		if (!component._renderedComponent._component) {
			visitor(component._renderedComponent);
			visitNonCompositeChildren(component._renderedComponent, visitor);
		}
	} else if (component._renderedChildren) {
		component._renderedChildren.forEach(function (child) {
			visitor(child);
			if (!child._component) visitNonCompositeChildren(child, visitor);
		});
	}
}

/**
 * Create a bridge between the preact component tree and React's dev tools
 * and register it.
 *
 * After this function is called, the React Dev Tools should be able to detect
 * "React" on the page and show the component tree.
 *
 * This function hooks into preact VNode creation in order to expose functional
 * components correctly, so it should be called before the root component(s)
 * are rendered.
 *
 * Returns a cleanup function which unregisters the hooks.
 */

function initDevTools() {
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
		// React DevTools are not installed
		return;
	}

	// Notify devtools when preact components are mounted, updated or unmounted
	var bridge = createDevToolsBridge();

	var nextAfterMount = preact.options.afterMount;
	preact.options.afterMount = function (component) {
		bridge.componentAdded(component);
		if (nextAfterMount) nextAfterMount(component);
	};

	var nextAfterUpdate = preact.options.afterUpdate;
	preact.options.afterUpdate = function (component) {
		bridge.componentUpdated(component);
		if (nextAfterUpdate) nextAfterUpdate(component);
	};

	var nextBeforeUnmount = preact.options.beforeUnmount;
	preact.options.beforeUnmount = function (component) {
		bridge.componentRemoved(component);
		if (nextBeforeUnmount) nextBeforeUnmount(component);
	};

	// Notify devtools about this instance of "React"
	__REACT_DEVTOOLS_GLOBAL_HOOK__.inject(bridge);

	return function () {
		preact.options.afterMount = nextAfterMount;
		preact.options.afterUpdate = nextAfterUpdate;
		preact.options.beforeUnmount = nextBeforeUnmount;
	};
}

initDevTools();

})));
//# sourceMappingURL=devtools.js.map


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(19)
var ieee754 = __webpack_require__(26)
var isArray = __webpack_require__(27)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Button, Component, SlideMixin, cn, createElement, el, ref,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

__webpack_require__(33);

ref = __webpack_require__(0), createElement = ref.createElement, Component = ref.Component;

el = createElement;

cn = __webpack_require__(1);

SlideMixin = __webpack_require__(5);

Button = (function(superClass) {
  extend(Button, superClass);

  function Button() {
    return Button.__super__.constructor.apply(this, arguments);
  }

  Button.prototype.mixins = [SlideMixin];

  Button.prototype.render = function() {
    var label, style;
    if (this.props.label) {
      label = el('span', {
        className: 'label'
      }, this.props.label);
    } else if (this.props.children && this.props.children.length) {
      label = this.props.children;
    } else if (this.props.i) {
      label = el('i', {
        className: 'material-icons'
      }, this.props.i);
    }
    if (this.props.size) {
      style = {
        width: this.props.size + 'px',
        height: this.props.size + 'px'
      };
    }
    return el('div', Object.assign(this.props, {
      onClick: this.props.onClick,
      className: cn('-i-btn', this.props.big && 'big', this.props.square && 'square', this.props.className, this.props.disabled && 'disabled'),
      style: style
    }), this.props.pre, label);
  };

  return Button;

})(Component);

module.exports = Button;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Component, Slide, SlideButton, cn, createElement, el, ref,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = __webpack_require__(0), createElement = ref.createElement, Component = ref.Component;

el = createElement;

cn = __webpack_require__(1);

Slide = __webpack_require__(14);

SlideButton = (function(superClass) {
  extend(SlideButton, superClass);

  function SlideButton(props) {
    this.render = bind(this.render, this);
    this.componentWillUpdate = bind(this.componentWillUpdate, this);
    this.onLeave = bind(this.onLeave, this);
    this.onEnter = bind(this.onEnter, this);
    this.onClick = bind(this.onClick, this);
    SlideButton.__super__.constructor.call(this, props);
    this.state = {
      pos: props.start || 0
    };
  }

  SlideButton.prototype.onClick = function(e) {
    if (this.props.disabled) {
      return false;
    }
    this.onEnter();
    return this.props.onClick && this.props.onClick();
  };

  SlideButton.prototype.onEnter = function(e) {
    if (this.props.disabled) {
      return false;
    }
    return this.setState({
      hover: true,
      pos: 1 - (this.props.start || 0)
    });
  };

  SlideButton.prototype.onLeave = function(e) {
    return this.setState({
      hover: false,
      pos: this.props.start || 0
    });
  };

  SlideButton.prototype.componentWillUpdate = function(props, state) {
    if (this.props.toggle !== props.toggle) {
      return this.setState({
        pos: props.toggle
      });
    }
  };

  SlideButton.prototype.render = function() {
    var pos;
    if (this.props.pos !== null && this.props.pos !== void 0) {
      pos = this.props.pos;
    } else {
      pos = this.state.pos;
    }
    return el('div', {
      className: cn('-i-slide-btn', this.props.className, this.props.disabled && 'disabled', this.props.square && 'square'),
      onMouseEnter: this.props.hover && this.onEnter,
      onMouseLeave: this.props.hover && this.onLeave,
      onClick: this.onClick
    }, el(Slide, {
      flip: false,
      width: this.props.width,
      height: this.props.height,
      pos: pos,
      slide: true,
      index_offset: this.state.hover && this.props.index_offset || 0,
      vertical: this.props.vertical || false
    }, el(Slide, {}, this.props.children[this.props.inverse && 1 || 0]), el(Slide, {}, this.props.children[!this.props.inverse && 1 || 0])));
  };

  return SlideButton;

})(Component);

SlideButton.defaultProps = {
  pos: null,
  hover: true
};

module.exports = SlideButton;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\n.full-w {\n  width: 100%; }\n\n.hidden {\n  display: none; }\n\n.center {\n  align-items: center;\n  display: flex;\n  align-content: center;\n  justify-content: center; }\n\nhtml {\n  background: #1f292e; }\n\nbody {\n  height: 100vh;\n  background: #1f292e;\n  color: #a3daf5;\n  text-rendering: geometricPrecision;\n  font-size: 14px; }\n\n.elements-panel {\n  background: #171a1c; }\n\n.btn {\n  height: 50px;\n  width: 50px; }\n\n.active {\n  background: #a3daf5; }\n", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\n.full-w {\n  width: 100%; }\n\n.hidden {\n  display: none; }\n\n.center {\n  align-items: center;\n  display: flex;\n  align-content: center;\n  justify-content: center; }\n\n.-i-btn {\n  cursor: pointer;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  display: inline-flex; }\n  .-i-btn i {\n    font-size: 22px; }\n  .-i-btn.disabled {\n    cursor: default;\n    pointer-events: none;\n    opacity: 0.3; }\n", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\n.full-w {\n  width: 100%; }\n\n.hidden {\n  display: none; }\n\n.center {\n  align-items: center;\n  display: flex;\n  align-content: center;\n  justify-content: center; }\n\n.flex {\n  display: flex; }\n  .flex.down {\n    flex-direction: column; }\n  .flex.right {\n    flex-direction: row; }\n\n.s1 {\n  float: left;\n  width: 8.33333%; }\n\n.s2 {\n  float: left;\n  width: 16.66667%; }\n\n.s3 {\n  float: left;\n  width: 25%; }\n\n.s4 {\n  float: left;\n  width: 33.33333%; }\n\n.s5 {\n  float: left;\n  width: 41.66667%; }\n\n.s6 {\n  float: left;\n  width: 50%; }\n\n.s7 {\n  float: left;\n  width: 58.33333%; }\n\n.s8 {\n  float: left;\n  width: 66.66667%; }\n\n.s9 {\n  float: left;\n  width: 75%; }\n\n.s10 {\n  float: left;\n  width: 83.33333%; }\n\n.s11 {\n  float: left;\n  width: 91.66667%; }\n\n.s12 {\n  float: left;\n  width: 100%; }\n\n.m1 {\n  float: left;\n  width: 8.33333%; }\n\n.m2 {\n  float: left;\n  width: 16.66667%; }\n\n.m3 {\n  float: left;\n  width: 25%; }\n\n.m4 {\n  float: left;\n  width: 33.33333%; }\n\n.m5 {\n  float: left;\n  width: 41.66667%; }\n\n.m6 {\n  float: left;\n  width: 50%; }\n\n.m7 {\n  float: left;\n  width: 58.33333%; }\n\n.m8 {\n  float: left;\n  width: 66.66667%; }\n\n.m9 {\n  float: left;\n  width: 75%; }\n\n.m10 {\n  float: left;\n  width: 83.33333%; }\n\n.m11 {\n  float: left;\n  width: 91.66667%; }\n\n.m12 {\n  float: left;\n  width: 100%; }\n\n.pad-0-0 {\n  padding: 0px 0px; }\n\n.pad-0-5 {\n  padding: 0px 5px; }\n\n.pad-0-10 {\n  padding: 0px 10px; }\n\n.pad-0-15 {\n  padding: 0px 15px; }\n\n.pad-0-20 {\n  padding: 0px 20px; }\n\n.pad-0-25 {\n  padding: 0px 25px; }\n\n.pad-0-30 {\n  padding: 0px 30px; }\n\n.pad-0-35 {\n  padding: 0px 35px; }\n\n.pad-0-40 {\n  padding: 0px 40px; }\n\n.pad-0-45 {\n  padding: 0px 45px; }\n\n.pad-0-50 {\n  padding: 0px 50px; }\n\n.pad-5-0 {\n  padding: 5px 0px; }\n\n.pad-5-5 {\n  padding: 5px 5px; }\n\n.pad-5-10 {\n  padding: 5px 10px; }\n\n.pad-5-15 {\n  padding: 5px 15px; }\n\n.pad-5-20 {\n  padding: 5px 20px; }\n\n.pad-5-25 {\n  padding: 5px 25px; }\n\n.pad-5-30 {\n  padding: 5px 30px; }\n\n.pad-5-35 {\n  padding: 5px 35px; }\n\n.pad-5-40 {\n  padding: 5px 40px; }\n\n.pad-5-45 {\n  padding: 5px 45px; }\n\n.pad-5-50 {\n  padding: 5px 50px; }\n\n.pad-10-0 {\n  padding: 10px 0px; }\n\n.pad-10-5 {\n  padding: 10px 5px; }\n\n.pad-10-10 {\n  padding: 10px 10px; }\n\n.pad-10-15 {\n  padding: 10px 15px; }\n\n.pad-10-20 {\n  padding: 10px 20px; }\n\n.pad-10-25 {\n  padding: 10px 25px; }\n\n.pad-10-30 {\n  padding: 10px 30px; }\n\n.pad-10-35 {\n  padding: 10px 35px; }\n\n.pad-10-40 {\n  padding: 10px 40px; }\n\n.pad-10-45 {\n  padding: 10px 45px; }\n\n.pad-10-50 {\n  padding: 10px 50px; }\n\n.pad-15-0 {\n  padding: 15px 0px; }\n\n.pad-15-5 {\n  padding: 15px 5px; }\n\n.pad-15-10 {\n  padding: 15px 10px; }\n\n.pad-15-15 {\n  padding: 15px 15px; }\n\n.pad-15-20 {\n  padding: 15px 20px; }\n\n.pad-15-25 {\n  padding: 15px 25px; }\n\n.pad-15-30 {\n  padding: 15px 30px; }\n\n.pad-15-35 {\n  padding: 15px 35px; }\n\n.pad-15-40 {\n  padding: 15px 40px; }\n\n.pad-15-45 {\n  padding: 15px 45px; }\n\n.pad-15-50 {\n  padding: 15px 50px; }\n\n.pad-20-0 {\n  padding: 20px 0px; }\n\n.pad-20-5 {\n  padding: 20px 5px; }\n\n.pad-20-10 {\n  padding: 20px 10px; }\n\n.pad-20-15 {\n  padding: 20px 15px; }\n\n.pad-20-20 {\n  padding: 20px 20px; }\n\n.pad-20-25 {\n  padding: 20px 25px; }\n\n.pad-20-30 {\n  padding: 20px 30px; }\n\n.pad-20-35 {\n  padding: 20px 35px; }\n\n.pad-20-40 {\n  padding: 20px 40px; }\n\n.pad-20-45 {\n  padding: 20px 45px; }\n\n.pad-20-50 {\n  padding: 20px 50px; }\n\n.pad-25-0 {\n  padding: 25px 0px; }\n\n.pad-25-5 {\n  padding: 25px 5px; }\n\n.pad-25-10 {\n  padding: 25px 10px; }\n\n.pad-25-15 {\n  padding: 25px 15px; }\n\n.pad-25-20 {\n  padding: 25px 20px; }\n\n.pad-25-25 {\n  padding: 25px 25px; }\n\n.pad-25-30 {\n  padding: 25px 30px; }\n\n.pad-25-35 {\n  padding: 25px 35px; }\n\n.pad-25-40 {\n  padding: 25px 40px; }\n\n.pad-25-45 {\n  padding: 25px 45px; }\n\n.pad-25-50 {\n  padding: 25px 50px; }\n\n.pad-30-0 {\n  padding: 30px 0px; }\n\n.pad-30-5 {\n  padding: 30px 5px; }\n\n.pad-30-10 {\n  padding: 30px 10px; }\n\n.pad-30-15 {\n  padding: 30px 15px; }\n\n.pad-30-20 {\n  padding: 30px 20px; }\n\n.pad-30-25 {\n  padding: 30px 25px; }\n\n.pad-30-30 {\n  padding: 30px 30px; }\n\n.pad-30-35 {\n  padding: 30px 35px; }\n\n.pad-30-40 {\n  padding: 30px 40px; }\n\n.pad-30-45 {\n  padding: 30px 45px; }\n\n.pad-30-50 {\n  padding: 30px 50px; }\n\n.pad-35-0 {\n  padding: 35px 0px; }\n\n.pad-35-5 {\n  padding: 35px 5px; }\n\n.pad-35-10 {\n  padding: 35px 10px; }\n\n.pad-35-15 {\n  padding: 35px 15px; }\n\n.pad-35-20 {\n  padding: 35px 20px; }\n\n.pad-35-25 {\n  padding: 35px 25px; }\n\n.pad-35-30 {\n  padding: 35px 30px; }\n\n.pad-35-35 {\n  padding: 35px 35px; }\n\n.pad-35-40 {\n  padding: 35px 40px; }\n\n.pad-35-45 {\n  padding: 35px 45px; }\n\n.pad-35-50 {\n  padding: 35px 50px; }\n\n.pad-40-0 {\n  padding: 40px 0px; }\n\n.pad-40-5 {\n  padding: 40px 5px; }\n\n.pad-40-10 {\n  padding: 40px 10px; }\n\n.pad-40-15 {\n  padding: 40px 15px; }\n\n.pad-40-20 {\n  padding: 40px 20px; }\n\n.pad-40-25 {\n  padding: 40px 25px; }\n\n.pad-40-30 {\n  padding: 40px 30px; }\n\n.pad-40-35 {\n  padding: 40px 35px; }\n\n.pad-40-40 {\n  padding: 40px 40px; }\n\n.pad-40-45 {\n  padding: 40px 45px; }\n\n.pad-40-50 {\n  padding: 40px 50px; }\n\n.pad-45-0 {\n  padding: 45px 0px; }\n\n.pad-45-5 {\n  padding: 45px 5px; }\n\n.pad-45-10 {\n  padding: 45px 10px; }\n\n.pad-45-15 {\n  padding: 45px 15px; }\n\n.pad-45-20 {\n  padding: 45px 20px; }\n\n.pad-45-25 {\n  padding: 45px 25px; }\n\n.pad-45-30 {\n  padding: 45px 30px; }\n\n.pad-45-35 {\n  padding: 45px 35px; }\n\n.pad-45-40 {\n  padding: 45px 40px; }\n\n.pad-45-45 {\n  padding: 45px 45px; }\n\n.pad-45-50 {\n  padding: 45px 50px; }\n\n.pad-50-0 {\n  padding: 50px 0px; }\n\n.pad-50-5 {\n  padding: 50px 5px; }\n\n.pad-50-10 {\n  padding: 50px 10px; }\n\n.pad-50-15 {\n  padding: 50px 15px; }\n\n.pad-50-20 {\n  padding: 50px 20px; }\n\n.pad-50-25 {\n  padding: 50px 25px; }\n\n.pad-50-30 {\n  padding: 50px 30px; }\n\n.pad-50-35 {\n  padding: 50px 35px; }\n\n.pad-50-40 {\n  padding: 50px 40px; }\n\n.pad-50-45 {\n  padding: 50px 45px; }\n\n.pad-50-50 {\n  padding: 50px 50px; }\n\n.mar-0-0 {\n  margin: 0px 0px; }\n\n.mar-0-5 {\n  margin: 0px 5px; }\n\n.mar-0-10 {\n  margin: 0px 10px; }\n\n.mar-0-15 {\n  margin: 0px 15px; }\n\n.mar-0-20 {\n  margin: 0px 20px; }\n\n.mar-0-25 {\n  margin: 0px 25px; }\n\n.mar-0-30 {\n  margin: 0px 30px; }\n\n.mar-0-35 {\n  margin: 0px 35px; }\n\n.mar-0-40 {\n  margin: 0px 40px; }\n\n.mar-0-45 {\n  margin: 0px 45px; }\n\n.mar-0-50 {\n  margin: 0px 50px; }\n\n.mar-5-0 {\n  margin: 5px 0px; }\n\n.mar-5-5 {\n  margin: 5px 5px; }\n\n.mar-5-10 {\n  margin: 5px 10px; }\n\n.mar-5-15 {\n  margin: 5px 15px; }\n\n.mar-5-20 {\n  margin: 5px 20px; }\n\n.mar-5-25 {\n  margin: 5px 25px; }\n\n.mar-5-30 {\n  margin: 5px 30px; }\n\n.mar-5-35 {\n  margin: 5px 35px; }\n\n.mar-5-40 {\n  margin: 5px 40px; }\n\n.mar-5-45 {\n  margin: 5px 45px; }\n\n.mar-5-50 {\n  margin: 5px 50px; }\n\n.mar-10-0 {\n  margin: 10px 0px; }\n\n.mar-10-5 {\n  margin: 10px 5px; }\n\n.mar-10-10 {\n  margin: 10px 10px; }\n\n.mar-10-15 {\n  margin: 10px 15px; }\n\n.mar-10-20 {\n  margin: 10px 20px; }\n\n.mar-10-25 {\n  margin: 10px 25px; }\n\n.mar-10-30 {\n  margin: 10px 30px; }\n\n.mar-10-35 {\n  margin: 10px 35px; }\n\n.mar-10-40 {\n  margin: 10px 40px; }\n\n.mar-10-45 {\n  margin: 10px 45px; }\n\n.mar-10-50 {\n  margin: 10px 50px; }\n\n.mar-15-0 {\n  margin: 15px 0px; }\n\n.mar-15-5 {\n  margin: 15px 5px; }\n\n.mar-15-10 {\n  margin: 15px 10px; }\n\n.mar-15-15 {\n  margin: 15px 15px; }\n\n.mar-15-20 {\n  margin: 15px 20px; }\n\n.mar-15-25 {\n  margin: 15px 25px; }\n\n.mar-15-30 {\n  margin: 15px 30px; }\n\n.mar-15-35 {\n  margin: 15px 35px; }\n\n.mar-15-40 {\n  margin: 15px 40px; }\n\n.mar-15-45 {\n  margin: 15px 45px; }\n\n.mar-15-50 {\n  margin: 15px 50px; }\n\n.mar-20-0 {\n  margin: 20px 0px; }\n\n.mar-20-5 {\n  margin: 20px 5px; }\n\n.mar-20-10 {\n  margin: 20px 10px; }\n\n.mar-20-15 {\n  margin: 20px 15px; }\n\n.mar-20-20 {\n  margin: 20px 20px; }\n\n.mar-20-25 {\n  margin: 20px 25px; }\n\n.mar-20-30 {\n  margin: 20px 30px; }\n\n.mar-20-35 {\n  margin: 20px 35px; }\n\n.mar-20-40 {\n  margin: 20px 40px; }\n\n.mar-20-45 {\n  margin: 20px 45px; }\n\n.mar-20-50 {\n  margin: 20px 50px; }\n\n.mar-25-0 {\n  margin: 25px 0px; }\n\n.mar-25-5 {\n  margin: 25px 5px; }\n\n.mar-25-10 {\n  margin: 25px 10px; }\n\n.mar-25-15 {\n  margin: 25px 15px; }\n\n.mar-25-20 {\n  margin: 25px 20px; }\n\n.mar-25-25 {\n  margin: 25px 25px; }\n\n.mar-25-30 {\n  margin: 25px 30px; }\n\n.mar-25-35 {\n  margin: 25px 35px; }\n\n.mar-25-40 {\n  margin: 25px 40px; }\n\n.mar-25-45 {\n  margin: 25px 45px; }\n\n.mar-25-50 {\n  margin: 25px 50px; }\n\n.mar-30-0 {\n  margin: 30px 0px; }\n\n.mar-30-5 {\n  margin: 30px 5px; }\n\n.mar-30-10 {\n  margin: 30px 10px; }\n\n.mar-30-15 {\n  margin: 30px 15px; }\n\n.mar-30-20 {\n  margin: 30px 20px; }\n\n.mar-30-25 {\n  margin: 30px 25px; }\n\n.mar-30-30 {\n  margin: 30px 30px; }\n\n.mar-30-35 {\n  margin: 30px 35px; }\n\n.mar-30-40 {\n  margin: 30px 40px; }\n\n.mar-30-45 {\n  margin: 30px 45px; }\n\n.mar-30-50 {\n  margin: 30px 50px; }\n\n.mar-35-0 {\n  margin: 35px 0px; }\n\n.mar-35-5 {\n  margin: 35px 5px; }\n\n.mar-35-10 {\n  margin: 35px 10px; }\n\n.mar-35-15 {\n  margin: 35px 15px; }\n\n.mar-35-20 {\n  margin: 35px 20px; }\n\n.mar-35-25 {\n  margin: 35px 25px; }\n\n.mar-35-30 {\n  margin: 35px 30px; }\n\n.mar-35-35 {\n  margin: 35px 35px; }\n\n.mar-35-40 {\n  margin: 35px 40px; }\n\n.mar-35-45 {\n  margin: 35px 45px; }\n\n.mar-35-50 {\n  margin: 35px 50px; }\n\n.mar-40-0 {\n  margin: 40px 0px; }\n\n.mar-40-5 {\n  margin: 40px 5px; }\n\n.mar-40-10 {\n  margin: 40px 10px; }\n\n.mar-40-15 {\n  margin: 40px 15px; }\n\n.mar-40-20 {\n  margin: 40px 20px; }\n\n.mar-40-25 {\n  margin: 40px 25px; }\n\n.mar-40-30 {\n  margin: 40px 30px; }\n\n.mar-40-35 {\n  margin: 40px 35px; }\n\n.mar-40-40 {\n  margin: 40px 40px; }\n\n.mar-40-45 {\n  margin: 40px 45px; }\n\n.mar-40-50 {\n  margin: 40px 50px; }\n\n.mar-45-0 {\n  margin: 45px 0px; }\n\n.mar-45-5 {\n  margin: 45px 5px; }\n\n.mar-45-10 {\n  margin: 45px 10px; }\n\n.mar-45-15 {\n  margin: 45px 15px; }\n\n.mar-45-20 {\n  margin: 45px 20px; }\n\n.mar-45-25 {\n  margin: 45px 25px; }\n\n.mar-45-30 {\n  margin: 45px 30px; }\n\n.mar-45-35 {\n  margin: 45px 35px; }\n\n.mar-45-40 {\n  margin: 45px 40px; }\n\n.mar-45-45 {\n  margin: 45px 45px; }\n\n.mar-45-50 {\n  margin: 45px 50px; }\n\n.mar-50-0 {\n  margin: 50px 0px; }\n\n.mar-50-5 {\n  margin: 50px 5px; }\n\n.mar-50-10 {\n  margin: 50px 10px; }\n\n.mar-50-15 {\n  margin: 50px 15px; }\n\n.mar-50-20 {\n  margin: 50px 20px; }\n\n.mar-50-25 {\n  margin: 50px 25px; }\n\n.mar-50-30 {\n  margin: 50px 30px; }\n\n.mar-50-35 {\n  margin: 50px 35px; }\n\n.mar-50-40 {\n  margin: 50px 40px; }\n\n.mar-50-45 {\n  margin: 50px 45px; }\n\n.mar-50-50 {\n  margin: 50px 50px; }\n\n@media only screen and (max-width: 600px) {\n  .s1 {\n    float: left;\n    width: 8.33333%; }\n  .s2 {\n    float: left;\n    width: 16.66667%; }\n  .s3 {\n    float: left;\n    width: 25%; }\n  .s4 {\n    float: left;\n    width: 33.33333%; }\n  .s5 {\n    float: left;\n    width: 41.66667%; }\n  .s6 {\n    float: left;\n    width: 50%; }\n  .s7 {\n    float: left;\n    width: 58.33333%; }\n  .s8 {\n    float: left;\n    width: 66.66667%; }\n  .s9 {\n    float: left;\n    width: 75%; }\n  .s10 {\n    float: left;\n    width: 83.33333%; }\n  .s11 {\n    float: left;\n    width: 91.66667%; }\n  .s12 {\n    float: left;\n    width: 100%; } }\n\n.-i-slide-btn {\n  cursor: pointer;\n  float: left; }\n  .-i-slide-btn.disabled {\n    pointer-events: none;\n    opacity: 0.3;\n    cursor: default; }\n    .-i-slide-btn.disabled i {\n      cursor: default; }\n\n.-i-slide-fixed {\n  flex-shrink: 0; }\n\n.-i-slide-center {\n  align-items: center;\n  display: flex;\n  align-content: center;\n  justify-content: center; }\n\n.-i-slide-static {\n  box-sizing: border-box;\n  position: relative;\n  flex-direction: row;\n  display: flex;\n  overflow: hidden; }\n\n.-i-slide-outer {\n  position: relative;\n  overflow: hidden; }\n  .-i-slide-outer ::-webkit-scrollbar {\n    display: none; }\n\n.-i-slide-inner {\n  min-height: 100%;\n  display: flex; }\n  .-i-slide-inner > .-i-slide-in {\n    transition: transform 0.3s cubic-bezier(0, 0.93, 0.27, 1);\n    transform: scale(1) rotateY(0deg) !important; }\n  .-i-slide-inner > .-i-slide-in_pre.-i-slide-right {\n    transform-origin: 0% 50%;\n    transform: scale(1) rotateY(10deg); }\n  .-i-slide-inner > .-i-slide-in_pre.-i-slide-left {\n    transform-origin: 100% 50%;\n    transform: scale(1) rotateY(-10deg); }\n\n.-i-slide-inner > .-i-slide-outer {\n  flex-shrink: 0; }\n\n.-i-slide-inner > .-i-slide-static {\n  flex-shrink: 0; }\n\n.-i-slide-horizontal {\n  flex-direction: row; }\n\n.-i-slide-vertical {\n  flex-direction: column; }\n  .-i-slide-vertical > .-i-slide-in_pre.-i-slide-right {\n    transform-origin: 50% 0%;\n    transform: scale(1) rotateX(-60deg); }\n  .-i-slide-vertical > .-i-slide-in_pre.-i-slide-left {\n    transform-origin: 50% 100%;\n    transform: scale(1) rotateX(60deg); }\n\n.-i-loader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  width: 10px;\n  height: 10px;\n  background-color: #FFFFFF;\n  animation: rotate 1s infinite ease-in-out;\n  transition: opacity 1s ease; }\n\n.-i-loader-stop {\n  animation-iteration-count: 0;\n  opacity: 0.2;\n  transform: scale(0.5); }\n\n@keyframes rotate {\n  0% {\n    transform: perspective(20px) rotateX(0deg) rotateY(0deg); }\n  50% {\n    transform: perspective(20px) rotateX(-180deg) rotateY(0deg); }\n  100% {\n    transform: perspective(20px) rotateX(-180deg) rotateY(-180deg); } }\n\n.-i-grid {\n  -webkit-overflow-scrolling: touch;\n  transform: translateZ(0);\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 100%; }\n  .-i-grid .-i-grid-item-outer {\n    transform-origin: center center 0px;\n    -webkit-transform-origin: center center 0px;\n    position: absolute;\n    box-sizing: border-box;\n    backface-visibility: hidden; }\n    .-i-grid .-i-grid-item-outer::before {\n      will-change: transform; }\n  .-i-grid .-i-grid-item-inner {\n    backface-visibility: hidden;\n    transform-style: preserve-3d;\n    width: 100%;\n    height: 100%;\n    position: relative; }\n  .-i-grid .-i-grid-inner {\n    -webkit-overflow-scrolling: touch;\n    width: 100%;\n    height: auto;\n    position: relative; }\n  .-i-grid .-i-loader {\n    position: absolute;\n    left: calc( 50% - 5px);\n    bottom: 80px; }\n\n.-i-grid-scroll {\n  overflow: scroll; }\n", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (true) {
  var invariant = __webpack_require__(7);
  var warning = __webpack_require__(8);
  var ReactPropTypesSecret = __webpack_require__(9);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var warning = __webpack_require__(8);

var ReactPropTypesSecret = __webpack_require__(9);
var checkPropTypes = __webpack_require__(29);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(30)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	var fixedCss = css.replace(/url *\( *(.+?) *\)/g, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./Button.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./Button.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./TetrisGrid.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./TetrisGrid.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var Component, ElementsPanel, Grid, Slide, SquareButton, View, actions, cn, h, ref, render, state, stateHandle,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

__webpack_require__(11);

__webpack_require__(10);

stateHandle = __webpack_require__(12);

ref = __webpack_require__(2), h = ref.h, render = ref.render, Component = ref.Component;

cn = __webpack_require__(1);

__webpack_require__(16);

Slide = __webpack_require__(14);

Grid = __webpack_require__(13);

SquareButton = __webpack_require__(15);

window.g = {
  isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
  colors: ['#aa00ff', '#ff0000', '#0088ff', '#e55c00', '#00d991', '#3600cc', '#bf0000', '#0077b3', '#ff0044', '#00ccff', '#00f2e2', '#d9ca00', '#36cc00', '#bf00b3', '#b27700', '#b20047'],
  dim: 50,
  dark: '#171a1c',
  light: '#fff',
  gain_c: '#1294bf',
  loss_c: '#FF5027',
  slide_duration: 400,
  mouse: [0, 0]
};

document.addEventListener('mousemove', function(e) {
  g.mouse[0] = e.clientX;
  return g.mouse[1] = e.clientY;
});

ElementsPanel = (function(superClass) {
  extend(ElementsPanel, superClass);

  function ElementsPanel() {
    return ElementsPanel.__super__.constructor.apply(this, arguments);
  }

  ElementsPanel.prototype.render = function(props, state) {
    var elements, options;
    elements = [];
    options = [
      h(SquareButton, {
        className: 'btn',
        activeClass: 'active',
        width: g.dim,
        active: false,
        vertical: true,
        inverse: true,
        onClick: function() {
          return actions.resetGrid;
        },
        i: 'refresh'
      })
    ];
    return h(Slide, {
      className: 'elements-panel',
      vertical: true,
      beta: 100
    }, h(Slide, {
      vertical: false,
      height: g.dim
    }, options));
  };

  return ElementsPanel;

})(Component);

View = (function(superClass) {
  extend(View, superClass);

  function View() {
    return View.__super__.constructor.apply(this, arguments);
  }

  View.prototype.render = function(props, state) {
    var grid_items;
    grid_items = [];
    return h(Slide, {
      beta: 100,
      slide: true,
      pos: this.props.show_grid && 1 || 0
    }, h(Slide, {
      width: g.dim * 6
    }, h(ElementsPanel, this.props)), h(Slide, {
      beta: 100
    }));
  };

  return View;

})(Component);

actions = {
  resetGrid: function() {
    return state.set({
      grid_items: []
    });
  }
};

state = {
  show_grid: false,
  grid_items: [],
  page: 0
};

window.state = new stateHandle(View, document.body, state);

__webpack_require__(17);


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map