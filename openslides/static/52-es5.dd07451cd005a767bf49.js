function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"9st3":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n("Ri39");var r=n("fXoL"),o=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Ob({type:t,inputs:{data:"data",projector:"projector"}}),t}()},v00c:function(t,e,n){"use strict";n.r(e),n.d(e,"TopicSlideModule",(function(){return _}));var r=n("ofXK"),o=n("PCNd"),c=n("DGVe"),i=n("9st3"),a=n("fXoL"),s=n("7jBc");function u(t,e){if(1&t&&(a.Zb(0,"span"),a.Sc(1),a.Yb()),2&t){var n=a.lc(2);a.Gb(1),a.Uc(" ",n.data.data.item_number," \xb7 ")}}function f(t,e){if(1&t&&(a.Zb(0,"div"),a.Zb(1,"h1"),a.Qc(2,u,2,1,"span",0),a.Sc(3),a.Yb(),a.Ub(4,"div",1),a.mc(5,"trust"),a.Yb()),2&t){var n=a.lc();a.Gb(2),a.tc("ngIf",n.data.data.item_number),a.Gb(1),a.Uc(" ",n.data.data.title," "),a.Gb(1),a.tc("innerHTML",a.oc(5,3,n.data.data.text,"html"),a.Jc)}}var p,l,d=((p=function(t){_inherits(n,t);var e=_createSuper(n);function n(){return _classCallCheck(this,n),e.apply(this,arguments)}return n}(i.a)).\u0275fac=function(t){return b(t||p)},p.\u0275cmp=a.Nb({type:p,selectors:[["os-topic-slide"]],features:[a.Db],decls:1,vars:1,consts:[[4,"ngIf"],[3,"innerHTML"]],template:function(t,e){1&t&&a.Qc(0,f,6,6,"div",0),2&t&&a.tc("ngIf",e.data)},directives:[r.t],pipes:[s.a],styles:[""]}),p),b=a.bc(d),_=((l=function t(){_classCallCheck(this,t)}).\u0275mod=a.Rb({type:l}),l.\u0275inj=a.Qb({factory:function(t){return new(t||l)},providers:[{provide:c.a.token,useValue:d}],imports:[[r.c,o.a]]}),l)}}]);