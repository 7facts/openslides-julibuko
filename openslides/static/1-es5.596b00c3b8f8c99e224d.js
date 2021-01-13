function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function _iterableToArrayLimit(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var o=[],n=!0,c=!1,i=void 0;try{for(var r,a=t[Symbol.iterator]();!(n=(r=a.next()).done)&&(o.push(r.value),!e||o.length!==e);n=!0);}catch(s){c=!0,i=s}finally{try{n||null==a.return||a.return()}finally{if(c)throw i}}return o}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6sZz":function(t,e,o){"use strict";o.d(e,"a",(function(){return u}));var n=o("mrSG"),c=o("FefE"),i=o("GiMW"),r=o("+KbT"),a=o("+WZz"),s=o("fXoL"),l=o("0IaG"),u=function(){var t=function(){function t(e,o,n){_classCallCheck(this,t),this.dialog=e,this.projectorService=o,this.configService=n}return _createClass(t,[{key:"openProjectDialogFor",value:function(t){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var o,n,r,a,s,l,u,b=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Object(i.a)(t)?t.getSlide(this.configService):t,n=this.dialog.open(c.a,{maxHeight:"90vh",autoFocus:!1,data:o}),e.next=4,n.afterClosed().toPromise();case 4:if(!(r=e.sent)){e.next=11;break}if(a=_slicedToArray(r,3),s=a[0],l=a[1],u=a[2],"project"!==s){e.next=9;break}return e.abrupt("return",(this.projectorService.projectOnMultiple(l,u),{fullscreen:u.fullscreen,displayType:u.displayType}));case 9:if("addToPreview"!==s){e.next=11;break}return e.abrupt("return",(l.forEach((function(t){b.projectorService.addElementToPreview(t,u)})),null));case 11:case"end":return e.stop()}}),e,this)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.dc(l.b),s.dc(a.a),s.dc(r.a))},t.\u0275prov=s.Pb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},FefE:function(t,e,o){"use strict";o.d(e,"a",(function(){return M}));var n=o("0IaG"),c=o("xTJg"),i=o("+WZz"),r=o("fXoL"),a=o("ofXK"),s=o("f0Cb"),l=o("bTqV"),u=o("IZUe"),b=o("bSwM"),d=o("NFeN"),f=o("Qu3c"),p=o("QibW"),h=o("3Pt+"),v=o("sYmb");function m(t,e){if(1&t&&(r.Zb(0,"div",6),r.Sc(1),r.Yb()),2&t){var o=r.lc();r.Gb(1),r.Uc(" ",o.projectorElementBuildDescriptor.getDialogTitle(),"\n")}}function g(t,e){1&t&&(r.Zb(0,"span",10),r.Zb(1,"mat-icon",11),r.mc(2,"translate"),r.Sc(3,"videocam"),r.Yb(),r.Yb()),2&t&&(r.Gb(1),r.uc("matTooltip",r.nc(2,1,"Is already projected")))}function j(t,e){if(1&t){var o=r.ac();r.Zb(0,"div",7),r.Zb(1,"mat-checkbox",8),r.hc("change",(function(){r.Ic(o);var t=e.$implicit;return r.lc().toggleProjector(t)})),r.Sc(2),r.mc(3,"translate"),r.Yb(),r.Qc(4,g,4,3,"span",9),r.Yb()}if(2&t){var n=e.$implicit,c=r.lc();r.tc("ngClass",c.isProjectedOn(n)?"projected":""),r.Gb(1),r.tc("checked",c.isProjectorSelected(n)),r.Gb(1),r.Uc(" ",r.nc(3,4,n.name)," "),r.Gb(2),r.tc("ngIf",c.isProjectedOn(n))}}function k(t,e){if(1&t){var o=r.ac();r.Zb(0,"div",14),r.Zb(1,"mat-checkbox",8),r.hc("change",(function(){r.Ic(o);var t=r.lc().$implicit,e=r.lc(2);return e.optionValues[t.key]=!e.optionValues[t.key]})),r.Sc(2),r.mc(3,"translate"),r.Yb(),r.Yb()}if(2&t){var n=r.lc().$implicit,c=r.lc(2);r.Gb(1),r.tc("checked",c.optionValues[n.key]),r.Gb(1),r.Uc(" ",r.nc(3,2,n.displayName)," ")}}function y(t,e){if(1&t&&(r.Zb(0,"mat-radio-button",17),r.Sc(1),r.mc(2,"translate"),r.Yb()),2&t){var o=e.$implicit;r.tc("value",o.value),r.Gb(1),r.Uc(" ",r.nc(2,2,o.displayName)," ")}}function S(t,e){if(1&t){var o=r.ac();r.Zb(0,"div"),r.Zb(1,"h3"),r.Sc(2),r.mc(3,"translate"),r.Yb(),r.Zb(4,"mat-radio-group",15),r.hc("ngModelChange",(function(t){r.Ic(o);var e=r.lc().$implicit;return r.lc(2).optionValues[e.key]=t})),r.Qc(5,y,3,4,"mat-radio-button",16),r.Yb(),r.Yb()}if(2&t){var n=r.lc().$implicit,c=r.lc(2);r.Gb(2),r.Tc(r.nc(3,4,n.displayName)),r.Gb(2),r.tc("name",n.key)("ngModel",c.optionValues[n.key]),r.Gb(1),r.tc("ngForOf",n.choices)}}function I(t,e){if(1&t&&(r.Zb(0,"div"),r.Qc(1,k,4,4,"div",13),r.Qc(2,S,6,6,"div",3),r.Yb()),2&t){var o=e.$implicit,n=r.lc(2);r.Gb(1),r.tc("ngIf",n.isDecisionOption(o)),r.Gb(1),r.tc("ngIf",n.isChoiceOption(o))}}function E(t,e){if(1&t&&(r.Zb(0,"div"),r.Qc(1,I,3,2,"div",12),r.Yb()),2&t){var o=r.lc();r.Gb(1),r.tc("ngForOf",o.options)}}var P,M=((P=function(){function t(e,o,n,c){var i=this;if(_classCallCheck(this,t),this.dialogRef=e,this.projectorElementBuildDescriptor=o,this.DS=n,this.projectorService=c,this.selectedProjectors=[],this.optionValues={},this.projectors=this.DS.getAll("core/projector"),o){if(this.selectedProjectors=this.projectorService.getProjectorsWhichAreProjecting(this.projectorElementBuildDescriptor),this.projectorElementBuildDescriptor.projectionDefaultName){var r=this.projectorService.getProjectorForDefault(this.projectorElementBuildDescriptor.projectionDefaultName);r&&!this.selectedProjectors.includes(r)&&this.selectedProjectors.push(r)}this.projectorElementBuildDescriptor.slideOptions.forEach((function(t){i.optionValues[t.key]=t.default})),this.options=this.projectorElementBuildDescriptor.slideOptions}}return _createClass(t,[{key:"toggleProjector",value:function(t){var e=this.selectedProjectors.indexOf(t);e<0?this.selectedProjectors.push(t):this.selectedProjectors.splice(e,1)}},{key:"isProjectorSelected",value:function(t){return this.selectedProjectors.includes(t)}},{key:"isProjectedOn",value:function(t){return this.projectorService.isProjectedOn(this.projectorElementBuildDescriptor,t)}},{key:"isDecisionOption",value:function(t){return void 0!==(e=t).key&&void 0!==e.displayName&&void 0!==e.default&&void 0===e.choices;var e}},{key:"isChoiceOption",value:function(t){return void 0!==(e=t).key&&void 0!==e.displayName&&void 0!==e.default&&void 0!==e.choices;var e}},{key:"onProject",value:function(){var t=this.projectorElementBuildDescriptor.getBasicProjectorElement(this.optionValues);t=Object.assign(Object.assign({},t),this.optionValues),this.dialogRef.close(["project",this.selectedProjectors,t])}},{key:"onAddToPreview",value:function(){var t=this.projectorElementBuildDescriptor.getBasicProjectorElement(this.optionValues);t=Object.assign(Object.assign({},t),this.optionValues),this.dialogRef.close(["addToPreview",this.selectedProjectors,t])}},{key:"onCancel",value:function(){this.dialogRef.close()}}]),t}()).\u0275fac=function(t){return new(t||P)(r.Tb(n.h),r.Tb(n.a),r.Tb(c.a),r.Tb(i.a))},P.\u0275cmp=r.Nb({type:P,selectors:[["os-projection-dialog"]],decls:19,vars:15,consts:[["mat-dialog-title",""],["class","element-name",4,"ngIf"],["class","projectors",3,"ngClass",4,"ngFor","ngForOf"],[4,"ngIf"],["mat-button","","osAutofocus","","color","accent",3,"click"],["mat-button","",3,"click"],[1,"element-name"],[1,"projectors",3,"ngClass"],[3,"checked","change"],["class","right",4,"ngIf"],[1,"right"],["matTooltipPosition","above",3,"matTooltip"],[4,"ngFor","ngForOf"],["class","spacer-top-10 spacer-left-10",4,"ngIf"],[1,"spacer-top-10","spacer-left-10"],[3,"name","ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){1&t&&(r.Zb(0,"h2",0),r.Zb(1,"span"),r.Sc(2),r.mc(3,"translate"),r.Yb(),r.Yb(),r.Qc(4,m,2,1,"div",1),r.Zb(5,"mat-dialog-content"),r.Qc(6,j,5,6,"div",2),r.Ub(7,"mat-divider"),r.Qc(8,E,2,1,"div",3),r.Yb(),r.Zb(9,"mat-dialog-actions"),r.Zb(10,"button",4),r.hc("click",(function(){return e.onProject()})),r.Sc(11),r.mc(12,"translate"),r.Yb(),r.Zb(13,"button",5),r.hc("click",(function(){return e.onAddToPreview()})),r.Sc(14),r.mc(15,"translate"),r.Yb(),r.Zb(16,"button",5),r.hc("click",(function(){return e.onCancel()})),r.Sc(17),r.mc(18,"translate"),r.Yb(),r.Yb()),2&t&&(r.Gb(2),r.Tc(r.nc(3,7,"Project selection?")),r.Gb(2),r.tc("ngIf",e.projectorElementBuildDescriptor),r.Gb(2),r.tc("ngForOf",e.projectors),r.Gb(2),r.tc("ngIf",e.options&&e.options.length),r.Gb(3),r.Tc(r.nc(12,9,"Project")),r.Gb(3),r.Tc(r.nc(15,11,"Add to queue")),r.Gb(3),r.Tc(r.nc(18,13,"Cancel")))},directives:[n.i,a.t,n.f,a.s,s.a,n.c,l.b,u.a,a.q,b.a,d.a,f.c,p.b,h.s,h.v,p.a],pipes:[v.j],styles:["h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{margin-bottom:5px}.element-name[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]{overflow:inherit;min-width:auto}mat-dialog-content[_ngcontent-%COMP%]   div.projectors[_ngcontent-%COMP%]{padding:15px 0}mat-dialog-content[_ngcontent-%COMP%]   div.projectors[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{padding:0 10px}mat-dialog-content[_ngcontent-%COMP%]   div.projectors[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{float:right;padding-right:10px}"]}),P)},Tp2j:function(t,e,o){"use strict";o.d(e,"a",(function(){return y}));var n=o("mrSG"),c=o("fXoL"),i=o("/uUt"),r=o("+WZz"),a=o("AqIO"),s=o("3moa"),l=o("6sZz"),u=(o("GIVM"),o("GiMW")),b=o("3Xi6"),d=o("ofXK"),f=o("bTqV"),p=o("NFeN"),h=o("STbY"),v=o("sYmb");function m(t,e){if(1&t){var o=c.ac();c.Zb(0,"button",4),c.hc("click",(function(t){return c.Ic(o),c.lc(2).onClick(t)})),c.Zb(1,"mat-icon"),c.Sc(2,"videocam"),c.Yb(),c.Yb()}}function g(t,e){if(1&t){var o=c.ac();c.Zb(0,"button",5),c.hc("click",(function(t){return c.Ic(o),c.lc(2).onClick(t)})),c.Zb(1,"mat-icon"),c.Sc(2,"videocam"),c.Yb(),c.Sc(3),c.mc(4,"translate"),c.Yb()}if(2&t){var n=c.lc(2);c.Gb(3),c.Uc(" ",c.nc(4,1,n.text)," ")}}function j(t,e){if(1&t){var o=c.ac();c.Zb(0,"button",6),c.hc("click",(function(){return c.Ic(o),c.lc(2).onClick()})),c.Zb(1,"mat-icon"),c.Sc(2,"videocam"),c.Yb(),c.Sc(3),c.mc(4,"translate"),c.Yb()}if(2&t){var n=c.lc(2);c.tc("ngClass",n.checkIsProjected()?"projector-active":"projector-inactive"),c.Gb(3),c.Uc(" ",c.nc(4,2,n.text||"Project")," ")}}function k(t,e){if(1&t&&(c.Xb(0),c.Qc(1,m,3,0,"button",1),c.Qc(2,g,5,3,"button",2),c.Qc(3,j,5,4,"button",3),c.Wb()),2&t){var o=c.lc();c.Gb(1),c.tc("ngIf",!o.text&&!o.menuItem&&o.checkIsProjected()),c.Gb(1),c.tc("ngIf",!o.text&&!o.menuItem&&!o.checkIsProjected()),c.Gb(1),c.tc("ngIf",o.menuItem)}}var y=function(){var t=function(){function t(e,o,n,i){_classCallCheck(this,t),this.projectorRepo=e,this.projectionDialogService=o,this.projectorService=n,this.storage=i,this.menuItem=!1,this.changeEvent=new c.p}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.projectorRepoSub=this.projectorRepo.getGeneralViewModelObservable().pipe(Object(i.a)()).subscribe((function(){t.changeEvent.next()}))}},{key:"ngOnDestroy",value:function(){this.projectorRepoSub&&(this.projectorRepoSub.unsubscribe(),this.projectorRepoSub=null)}},{key:"onClick",value:function(t){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.stopPropagation(),!this.object){e.next=15;break}if(!this.projector){e.next=14;break}if(!this.checkIsProjected()){e.next=6;break}this.projectorService.removeFrom(this.projector,this.object),e.next=12;break;case 6:return e.t0=this,e.next=9,this.storage.get("projectorElementOptions");case 9:e.t1=e.sent,o=e.t0.getProjectorElement.call(e.t0,e.t1),this.projectorService.projectOn(this.projector,o||this.object);case 12:e.next=15;break;case 14:this.projectionDialogService.openProjectDialogFor(this.object);case 15:case"end":return e.stop()}}),e,this)})))}},{key:"checkIsProjected",value:function(){return!!this.object&&(this.projector?this.projectorService.isProjectedOn(this.object,this.projector):this.projectorService.isProjected(this.object))}},{key:"getProjectorElement",value:function(t){var e=null;return Object(u.a)(this.object)?e=this.object.getSlide().getBasicProjectorElement(t):Object(u.b)(this.object)&&(e=this.object.getBasicProjectorElement(t)),Object.assign(e,t)}},{key:"object",get:function(){return this._object},set:function(t){this._object=Object(u.a)(t)||Object(u.b)(t)?t:null}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Tb(s.a),c.Tb(l.a),c.Tb(r.a),c.Tb(a.a))},t.\u0275cmp=c.Nb({type:t,selectors:[["os-projector-button"]],inputs:{object:"object",text:"text",menuItem:"menuItem",projector:"projector"},outputs:{changeEvent:"changeEvent"},decls:1,vars:1,consts:[[4,"osPerms"],["type","button","class","projector-active","mat-mini-fab","",3,"click",4,"ngIf"],["type","button","class","projector-inactive","mat-mini-fab","",3,"click",4,"ngIf"],["type","button","mat-menu-item","",3,"ngClass","click",4,"ngIf"],["type","button","mat-mini-fab","",1,"projector-active",3,"click"],["type","button","mat-mini-fab","",1,"projector-inactive",3,"click"],["type","button","mat-menu-item","",3,"ngClass","click"]],template:function(t,e){1&t&&c.Qc(0,k,4,3,"ng-container",0),2&t&&c.tc("osPerms","core.can_manage_projector")},directives:[b.a,d.t,f.b,p.a,h.c,d.q],pipes:[v.j],styles:[""]}),t}()},mksl:function(t,e,o){"use strict";o.d(e,"a",(function(){return C}));var n=o("fXoL"),c=o("VR2Q"),i=o("7dBR"),r=o("gsQk"),a=o("KL36"),s=o("tyNb"),l=o("/t3+"),u=o("ofXK"),b=o("bTqV"),d=o("NFeN"),f=o("Qu3c"),p=o("sYmb");function h(t,e){if(1&t){var o=n.ac();n.Zb(0,"button",12),n.hc("click",(function(){return n.Ic(o),n.lc().clickHamburgerMenu()})),n.Zb(1,"mat-icon"),n.Sc(2,"menu"),n.Yb(),n.Yb()}}function v(t,e){if(1&t){var o=n.ac();n.Zb(0,"button",12),n.hc("click",(function(){return n.Ic(o),n.lc().onBackButton()})),n.Zb(1,"mat-icon"),n.Sc(2,"arrow_back"),n.Yb(),n.Yb()}}function m(t,e){if(1&t){var o=n.ac();n.Zb(0,"button",12),n.hc("click",(function(){n.Ic(o);var t=n.lc();return t.isCancelEditUsed?t.sendCancelEditEvent():t.sendMainEvent()})),n.Zb(1,"mat-icon"),n.Sc(2,"close"),n.Yb(),n.Yb()}}function g(t,e){1&t&&(n.Zb(0,"div",13),n.rc(1,1),n.Yb())}function j(t,e){1&t&&n.Ub(0,"div",6)}function k(t,e){1&t&&(n.Zb(0,"div",14),n.rc(1,2),n.Yb())}function y(t,e){if(1&t){var o=n.ac();n.Zb(0,"button",12),n.hc("click",(function(){return n.Ic(o),n.lc().openSearch()})),n.Zb(1,"mat-icon"),n.Sc(2,"search"),n.Yb(),n.Yb()}}function S(t,e){if(1&t){var o=n.ac();n.Zb(0,"button",15),n.hc("click",(function(){return n.Ic(o),n.lc().sendMainEvent()})),n.mc(1,"translate"),n.Zb(2,"mat-icon"),n.Sc(3),n.Yb(),n.Yb()}if(2&t){var c=n.lc();n.uc("matTooltip",n.nc(1,3,c.mainActionTooltip)),n.tc("disabled",!c.isMainButtonEnabled),n.Gb(3),n.Tc(c.mainButtonIcon)}}function I(t,e){if(1&t){var o=n.ac();n.Zb(0,"button",16),n.hc("click",(function(){return n.Ic(o),n.lc().save()})),n.Zb(1,"strong",17),n.Sc(2),n.mc(3,"translate"),n.Yb(),n.Yb()}if(2&t){var c=n.lc();n.tc("disabled",!c.isSaveButtonEnabled),n.Gb(2),n.Tc(n.nc(3,2,c.saveText))}}function E(t,e){1&t&&n.rc(0,3,["*ngIf","!editMode"])}function P(t,e){1&t&&(n.Zb(0,"mat-icon"),n.Sc(1," add "),n.Yb())}function M(t,e){if(1&t&&(n.Zb(0,"mat-icon"),n.Sc(1),n.Yb()),2&t){var o=n.lc(2);n.Gb(1),n.Uc(" ",o.mainButtonIcon," ")}}function T(t,e){if(1&t){var o=n.ac();n.Zb(0,"button",18),n.hc("click",(function(){return n.Ic(o),n.lc().sendMainEvent()})),n.mc(1,"translate"),n.Qc(2,P,2,0,"mat-icon",10),n.Qc(3,M,2,1,"mat-icon",10),n.Yb()}if(2&t){var c=n.lc();n.uc("matTooltip",n.nc(1,4,c.mainActionTooltip)),n.tc("disabled",!c.isMainButtonEnabled),n.Gb(2),n.tc("ngIf","add_circle"===c.mainButtonIcon),n.Gb(1),n.tc("ngIf","add_circle"!==c.mainButtonIcon)}}var x=[[["",8,"extra-controls-slot"]],[["",8,"title-slot"]],[["",8,"central-info-slot"]],[["",8,"menu-slot"]]],O=[".extra-controls-slot",".title-slot",".central-info-slot",".menu-slot"],C=function(){var t=function(){function t(e,o,c,i,r,a){_classCallCheck(this,t),this.vp=e,this.menu=o,this.router=c,this.route=i,this.routingState=r,this.overlayService=a,this.nav=!0,this.mainButtonIcon="add_circle",this.saveText="Save",this.editMode=!1,this.isSearchEnabled=!0,this.isSaveButtonEnabled=!0,this.multiSelectMode=!1,this.hasMainButton=!1,this.isMainButtonEnabled=!0,this.goBack=!1,this.prevUrl="../",this.mainEvent=new n.p,this.cancelEditEvent=new n.p,this.isCancelEditUsed=!1,this.saveEvent=new n.p}return _createClass(t,[{key:"ngOnInit",value:function(){this.isCancelEditUsed=this.cancelEditEvent.observers.length>0}},{key:"sendMainEvent",value:function(){this.mainEvent.next()}},{key:"sendCancelEditEvent",value:function(){this.cancelEditEvent.next()}},{key:"clickHamburgerMenu",value:function(){this.menu.toggleMenu()}},{key:"save",value:function(){this.saveEvent.next(!0)}},{key:"openSearch",value:function(){this.overlayService.showSearch()}},{key:"onBackButton",value:function(){this.goBack?this.routingState.goBack():this.router.navigate(this.routingState.customOrigin&&this.routingState.customOrigin!==this.router.url?[this.routingState.customOrigin]:[this.prevUrl],{relativeTo:this.route})}},{key:"showBackButton",get:function(){return!this.nav&&!this.multiSelectMode&&(this.routingState.isSafePrevUrl||!this.goBack)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(n.Tb(a.a),n.Tb(c.a),n.Tb(s.f),n.Tb(s.a),n.Tb(r.a),n.Tb(i.a))},t.\u0275cmp=n.Nb({type:t,selectors:[["os-head-bar"]],inputs:{nav:"nav",mainButtonIcon:"mainButtonIcon",saveText:"saveText",editMode:"editMode",isSearchEnabled:"isSearchEnabled",isSaveButtonEnabled:"isSaveButtonEnabled",multiSelectMode:"multiSelectMode",hasMainButton:"hasMainButton",isMainButtonEnabled:"isMainButtonEnabled",goBack:"goBack",prevUrl:"prevUrl",mainActionTooltip:"mainActionTooltip"},outputs:{mainEvent:"mainEvent",cancelEditEvent:"cancelEditEvent",saveEvent:"saveEvent"},ngContentSelectors:O,decls:16,vars:12,consts:[["color","primary",1,"sticky-toolbar",3,"ngClass"],[1,"toolbar-left"],["mat-icon-button","",3,"click",4,"ngIf"],["class","toolbar-left-text",4,"ngIf"],["class","spacer",4,"ngIf"],["class","toolbar-centered",4,"ngIf"],[1,"spacer"],[1,"toolbar-right"],["mat-icon-button","",3,"disabled","matTooltip","click",4,"ngIf"],["mat-button","",3,"disabled","click",4,"ngIf"],[4,"ngIf"],["mat-fab","","class","head-button",3,"disabled","matTooltip","click",4,"ngIf"],["mat-icon-button","",3,"click"],[1,"toolbar-left-text"],[1,"toolbar-centered"],["mat-icon-button","",3,"disabled","matTooltip","click"],["mat-button","",3,"disabled","click"],[1,"upper"],["mat-fab","",1,"head-button",3,"disabled","matTooltip","click"]],template:function(t,e){1&t&&(n.sc(x),n.Zb(0,"mat-toolbar",0),n.Zb(1,"div",1),n.Qc(2,h,3,0,"button",2),n.Qc(3,v,3,0,"button",2),n.Qc(4,m,3,0,"button",2),n.Qc(5,g,2,0,"div",3),n.Yb(),n.Qc(6,j,1,0,"div",4),n.Qc(7,k,2,0,"div",5),n.Ub(8,"div",6),n.Qc(9,y,3,0,"button",2),n.Zb(10,"div",7),n.rc(11),n.Qc(12,S,4,5,"button",8),n.Qc(13,I,4,4,"button",9),n.Qc(14,E,1,0,void 0,10),n.Yb(),n.Yb(),n.Qc(15,T,4,6,"button",11)),2&t&&(n.tc("ngClass",e.multiSelectMode?"multi-select":""),n.Gb(2),n.tc("ngIf",e.vp.isMobile&&!e.showBackButton&&!e.editMode),n.Gb(1),n.tc("ngIf",e.showBackButton&&!e.editMode),n.Gb(1),n.tc("ngIf",e.editMode),n.Gb(1),n.tc("ngIf",!e.multiSelectMode),n.Gb(1),n.tc("ngIf",!e.multiSelectMode),n.Gb(1),n.tc("ngIf",e.multiSelectMode),n.Gb(2),n.tc("ngIf",!e.editMode&&e.isSearchEnabled),n.Gb(3),n.tc("ngIf",e.hasMainButton&&!e.editMode&&!e.vp.isMobile&&!e.multiSelectMode),n.Gb(1),n.tc("ngIf",e.editMode),n.Gb(1),n.tc("ngIf",!e.editMode),n.Gb(1),n.tc("ngIf",e.hasMainButton&&!e.editMode&&e.vp.isMobile&&!e.multiSelectMode))},directives:[l.a,u.q,u.t,b.b,d.a,f.c],pipes:[p.j],styles:[".head-button{position:fixed;z-index:10;right:20px;bottom:55px}.sticky-toolbar{top:0;z-index:5;position:-webkit-sticky;position:sticky;height:64px!important}.sticky-toolbar .toolbar-left{display:-ms-flexbox;display:flex;max-width:calc(100% - 100px)}.sticky-toolbar .toolbar-left button{margin:12px 0}.sticky-toolbar .toolbar-left .toolbar-left-text{margin-left:10px;width:100%;overflow:hidden}.sticky-toolbar .toolbar-left .toolbar-left-text .title-slot{margin:16px 0;display:block}.sticky-toolbar .toolbar-left .toolbar-left-text .title-slot h2{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sticky-toolbar .toolbar-centered{margin:auto;vertical-align:baseline}.sticky-toolbar .toolbar-right,.sticky-toolbar .toolbar-right .extra-controls-slot{display:-ms-flexbox;display:flex}mat-toolbar.multi-select{background-color:#757575!important}"],encapsulation:2}),t}()}}]);