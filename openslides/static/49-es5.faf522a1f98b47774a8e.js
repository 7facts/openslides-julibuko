function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"9st3":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n("Ri39");var r=n("fXoL"),o=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Ob({type:t,inputs:{data:"data",projector:"projector"}}),t}()},pj9O:function(t,e,n){"use strict";n.r(e),n.d(e,"MediafileSlideModule",(function(){return _}));var r=n("ofXK"),o=n("PCNd"),i=n("DGVe"),c=n("NKB5"),a=n("9st3"),s=n("fXoL"),u=n("IkSl");function f(t,e){if(1&t&&(s.Zb(0,"div",3),s.Ub(1,"img",4),s.Yb()),2&t){var n=s.lc(2);s.tc("ngClass",n.data.element.fullscreen?"fullscreen":"nofullscreen"),s.Gb(1),s.tc("src",n.url,s.Kc)}}function l(t,e){if(1&t&&(s.Zb(0,"div",5),s.Ub(1,"pdf-viewer",6),s.Yb()),2&t){var n=s.lc(2);s.Gb(1),s.tc("show-all",!1)("original-size",!1)("fit-to-page",!0)("autoresize",!0)("page",n.data.element.page||1)("zoom",n.zoom)("src",n.url)}}function p(t,e){if(1&t&&(s.Zb(0,"div"),s.Qc(1,f,2,2,"div",1),s.Qc(2,l,2,7,"div",2),s.Yb()),2&t){var n=s.lc();s.Gb(1),s.tc("ngIf",n.isImage),s.Gb(1),s.tc("ngIf",n.isPdf)}}var d,g,h=((g=function(t){_inherits(n,t);var e=_createSuper(n);function n(){return _classCallCheck(this,n),e.call(this)}return _createClass(n,[{key:"url",get:function(){return"".concat(this.data.data.media_url_prefix).concat(this.data.data.path)}},{key:"zoom",get:function(){return Math.pow(1.1,this.data.element.zoom||0)}},{key:"isImage",get:function(){return c.a.includes(this.data.data.mimetype)}},{key:"isPdf",get:function(){return c.b.includes(this.data.data.mimetype)}}]),n}(a.a)).\u0275fac=function(t){return new(t||g)},g.\u0275cmp=s.Nb({type:g,selectors:[["os-mediafile-slide"]],features:[s.Db],decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngClass",4,"ngIf"],["class","fullscreen",4,"ngIf"],[3,"ngClass"],["alt","",3,"src"],[1,"fullscreen"],[2,"display","block",3,"show-all","original-size","fit-to-page","autoresize","page","zoom","src"]],template:function(t,e){1&t&&s.Qc(0,p,3,2,"div",0),2&t&&s.tc("ngIf",e.data)},directives:[r.t,r.q,u.a],styles:[".fullscreen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .nofullscreen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:fixed;top:0;bottom:0;left:0;right:0;margin:auto}.fullscreen[_ngcontent-%COMP%]{z-index:100;width:100%;height:100%;background-color:#fff;position:fixed;top:0;left:0}.fullscreen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.nofullscreen[_ngcontent-%COMP%]{max-width:100%;max-height:100%;width:auto;height:auto}"]}),g),_=((d=function t(){_classCallCheck(this,t)}).\u0275mod=s.Rb({type:d}),d.\u0275inj=s.Qb({factory:function(t){return new(t||d)},providers:[{provide:i.a.token,useValue:h}],imports:[[r.c,o.a]]}),d)}}]);