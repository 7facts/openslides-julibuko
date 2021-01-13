function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,n=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw n}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0Obk":function(e,t,r){"use strict";r.d(t,"a",(function(){return R}));var i=r("mrSG"),o=r("fXoL"),n=r("tyNb"),a=r("dRZP"),s=r("pLZG"),l=r("/uUt"),c=r("OwvW"),u=r("+WZz"),b=r("AqIO"),f=(r("+8Rz"),r("A6Ob"),r("KL36")),h=r("ofXK"),p=r("XhcP"),d=r("1yIO"),v=r("SOyc"),m=r("XROA"),S=r("3Xi6"),g=r("Tp2j"),w=r("NFeN"),y=r("Qu3c"),k=r("40uZ"),O=r("sYmb");function C(e,t){if(1&e){var r=o.ac();o.Zb(0,"os-sort-filter-bar",9),o.hc("searchFieldChange",(function(e){return o.Ic(r),o.lc(2).searchFilter(e)})),o.Yb()}if(2&e){var i=o.lc(2);o.tc("totalCount",i.totalCount)("filterCount",i.countFilter)("filterService",i.filterService)("sortService",i.sortService)("searchFieldInput",i.inputValue)}}function j(e,t){if(1&e){var r=o.ac();o.Zb(0,"os-projector-button",13),o.hc("changeEvent",(function(){return o.Ic(r),o.lc(3).viewUpdateEvent()})),o.Yb()}if(2&e){var i=o.lc().row,n=o.lc(2);o.tc("object",n.getProjectable(i))}}function x(e,t){1&e&&(o.Zb(0,"mat-icon",16),o.mc(1,"translate"),o.Sc(2," videocam "),o.Yb()),2&e&&o.uc("matTooltip",o.nc(1,1,"Currently projected"))}function P(e,t){if(1&e&&(o.Zb(0,"div",14),o.Qc(1,x,3,3,"mat-icon",15),o.Yb()),2&e){var r=o.lc().row,i=o.lc(2);o.Gb(1),o.tc("ngIf",i.projectorService.isProjected(i.getProjectable(r)))}}function I(e,t){1&e&&(o.Zb(0,"div",10),o.Qc(1,j,1,1,"os-projector-button",11),o.Qc(2,P,2,1,"div",12),o.Yb()),2&e&&(o.Gb(1),o.tc("osPerms","core.can_manage_projector"),o.Gb(1),o.tc("osPerms","core.can_manage_projector")("osPermsComplement",!0))}function _(e,t){1&e&&(o.Zb(0,"div",17),o.Zb(1,"span"),o.Sc(2),o.mc(3,"translate"),o.Yb(),o.Yb()),2&e&&(o.Gb(2),o.Tc(o.nc(3,1,"No data")))}function F(e,t){if(1&e&&(o.Zb(0,"div",18),o.Ub(1,"os-speaker-button",19),o.Yb()),2&e){var r=t.row,i=o.lc(2);o.Gb(1),o.tc("object",r.contentObjectData?r.contentObjectData:r)("disabled",i.multiSelect)}}function T(e,t){if(1&e){var r=o.ac();o.Zb(0,"mat-drawer-container",1),o.Zb(1,"div",2),o.Qc(2,C,1,5,"os-sort-filter-bar",3),o.Zb(3,"pbl-ngrid",4),o.hc("rowClick",(function(e){return o.Ic(r),o.lc().onSelectRow(e)})),o.Qc(4,I,3,3,"div",5),o.Qc(5,_,4,3,"div",6),o.Zb(6,"div",null,7),o.rc(8,0,["class","ngrid-lg"]),o.Yb(),o.Qc(9,F,2,2,"div",8),o.Yb(),o.Yb(),o.Yb()}if(2&e){var i=o.lc();o.Gb(2),o.tc("ngIf",i.showFilterBar),o.Gb(1),o.tc("showHeader",!i.showFilterBar||!i.fullScreen)("showHeader",!1)("dataSource",i.dataSource)("columns",i.columnSet)("hideColumns",i.hiddenColumns)("rowClassUpdate",i.isElementProjected),o.Hb("vScrollFixed",-1!==i.vScrollFixed&&i.vScrollFixed)("vScrollAuto",-1===i.vScrollFixed),o.Gb(1),o.tc("pblNgridCellDef","projector"),o.Gb(5),o.tc("pblNgridCellDef","speaker")}}var L=[[["",8,"cell-slot"]]],A=[".cell-slot"],R=function(){var e=function(){function e(t,r,i,a,l,c){var u=this;_classCallCheck(this,e),this.operator=t,this.store=a,this.cd=l,this.projectorService=c,this.multiSelect=!1,this.allowProjector=!0,this.selectedRowsChange=new o.p,this.columns=[],this.showFilterBar=!0,this.alwaysShowMenu=!1,this.showListOfSpeakers=!0,this.showMenu=!0,this.vScrollFixed=110,this.fullScreen=!0,this.dataSourceChange=new o.p,this.subs=[],this.isElementProjected=function(e){if(u.allowProjector&&u.projectorService.isProjected(u.getProjectable(e.$implicit)))return"projected"},r.isMobileSubject.subscribe((function(e){e!==u.isMobile&&u.cd.markForCheck(),u.isMobile=e})),this.subs.push(i.events.pipe(Object(s.a)((function(e){return e instanceof n.d}))).subscribe((function(){u.saveScrollOffset()})))}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.getListObservable(),e.next=3,this.restoreSearchQuery();case 3:this.createDataSource(),this.changeRowHeight(),this.cd.detectChanges(),this.scrollToPreviousPosition();case 7:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnDestroy",value:function(){this.cd.detach();var e,t=_createForOfIteratorHelper(this.subs);try{for(t.s();!(e=t.n()).done;){e.value.unsubscribe()}}catch(r){t.e(r)}finally{t.f()}this.subs=[]}},{key:"createDataSource",value:function(){var e,t=this;this.dataSource=Object(a.q)().onTrigger((function(){return t.dataListObservable?t.dataListObservable:[]})).create(),this.dataSource.onSourceChanged.subscribe((function(){t.dataSourceChange.next(t.dataSource),t.checkSelection()})),this.dataSource.selection.changed.subscribe((function(e){t.selectedRows=e.source.selected,t.selectedRowsChange.emit(t.selectedRows)})),this.columnSet=(e=Object(a.p)().default({width:"60px"})).table.apply(e,_toConsumableArray(this.defaultStartColumns).concat(_toConsumableArray(this.columns),_toConsumableArray(this.defaultEndColumns))).build(),this.dataSource.setFilter(this.getFilterPredicate()),this.filterService&&this.subs.push(this.filterService.outputObservable.pipe(Object(l.a)()).subscribe((function(){t.dataSource.refresh()}))),this.sortService&&this.subs.push(this.sortService.outputObservable.subscribe((function(){t.dataSource.refresh()})))}},{key:"getListObservable",value:function(){if(this.listObservableProvider||this.listObservable){var e=this.listObservableProvider?this.listObservableProvider.getViewModelListObservable():this.listObservable;this.filterService&&this.sortService?(this.filterService.initFilters(e),this.sortService.initSorting(this.filterService.outputObservable),this.dataListObservable=this.sortService.outputObservable):this.filterService?(this.filterService.initFilters(e),this.dataListObservable=this.filterService.outputObservable):this.sortService?(this.sortService.initSorting(e),this.dataListObservable=this.sortService.outputObservable):this.dataListObservable=e}}},{key:"viewUpdateEvent",value:function(){this.cd.markForCheck()}},{key:"getFilterPredicate",value:function(){var e=this;return function(t){if(!e.inputValue)return!0;var r=e.inputValue.trim().toLowerCase();if(-1!==(""+t.id).trim().toLowerCase().indexOf(r))return!0;if(e.filterProps&&e.filterProps.length){var i,o=_createForOfIteratorHelper(e.filterProps);try{for(o.s();!(i=o.n()).done;){var n,a=i.value.split("."),s=t,l=_createForOfIteratorHelper(a);try{for(l.s();!(n=l.n()).done;){var c=n.value;s&&(s=s[c])}}catch(b){l.e(b)}finally{l.f()}if(s){var u="";if((u="function"==typeof s?""+s():s.constructor===Array?s.join(""):""+s)&&-1!==u.trim().toLowerCase().indexOf(r))return!0}}}catch(b){o.e(b)}finally{o.f()}}}}},{key:"onSelectRow",value:function(e){if(this.multiSelect){var t=e.row;this.dataSource.selection.isSelected(t)?this.dataSource.selection.deselect(t):this.dataSource.selection.select(t)}}},{key:"getProjectable",value:function(e){var t,r;return null!==(r=null===(t=e)||void 0===t?void 0:t.contentObject)&&void 0!==r?r:e}},{key:"searchFilter",value:function(e){this.listStorageKey&&this.saveSearchQuery(this.listStorageKey,e),this.inputValue=e,this.dataSource.syncFilter()}},{key:"getScrollOffset",value:function(e){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.store.get("scroll_"+e);case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=0;case 5:return t.abrupt("return",t.t0);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"saveScrollOffset",value:function(){var e=this.ngrid.viewport.measureScrollOffset();this.store.set("scroll_"+this.listStorageKey,e)}},{key:"saveSearchQuery",value:function(e,t){this.store.set("query_"+e,t)}},{key:"restoreSearchQuery",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.store.get("query_"+this.listStorageKey);case 2:this.inputValue=e.sent;case 3:case"end":return e.stop()}}),e,this)})))}},{key:"scrollToPreviousPosition",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.ngrid){e.next=5;break}return e.next=3,this.getScrollOffset(this.listStorageKey);case 3:t=e.sent,this.ngrid.viewport.scrollToOffset(t);case 5:case"end":return e.stop()}}),e,this)})))}},{key:"changeRowHeight",value:function(){this.vScrollFixed>0&&document.documentElement.style.setProperty("--pbl-height",this.vScrollFixed+"px")}},{key:"checkSelection",value:function(){var e=this;if(this.multiSelect){var t,r=[];this.selectedRows.forEach((function(t){var i=e.dataSource.source.find((function(e){return e.id===t.id}));i&&r.push(i)})),this.dataSource.selection.clear(),(t=this.dataSource.selection).select.apply(t,r)}}},{key:"projectorColumnWidth",get:function(){return this.operator.hasPerms(c.b.coreCanManageProjector)?60:24}},{key:"defaultStartColumns",get:function(){return[{prop:"selection",label:"",width:"40px"},{prop:"projector",label:"",width:this.projectorColumnWidth+"px"}]}},{key:"defaultEndColumns",get:function(){return[{prop:"speaker",label:"",width:"45px"},{prop:"menu",label:"",width:"40px"}]}},{key:"countFilter",get:function(){return this.dataSource.filteredData.length}},{key:"totalCount",get:function(){return this.dataSource.length}},{key:"hiddenColumns",get:function(){var e=this,t=[];if(this.multiSelect||t.push("selection"),(this.alwaysShowMenu||this.isMobile)&&this.showMenu||t.push("menu"),(this.multiSelect||this.isMobile||!this.allowProjector)&&t.push("projector"),!this.isMobile&&this.operator.hasPerms(c.b.agendaCanSeeListOfSpeakers)&&this.showListOfSpeakers||t.push("speaker"),this.restricted&&this.restricted.length){var r=this.restricted.filter((function(t){return!e.operator.hasPerms(t.permission)})).map((function(e){return e.columnName}));t=t.concat(r)}return this.isMobile&&this.hiddenInMobile&&this.hiddenInMobile.length&&(t=t.concat(this.hiddenInMobile)),t}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Tb(c.a),o.Tb(f.a),o.Tb(n.f),o.Tb(b.a),o.Tb(o.h),o.Tb(u.a))},e.\u0275cmp=o.Nb({type:e,selectors:[["os-list-view-table"]],viewQuery:function(e,t){var r;1&e&&o.Zc(a.e,!0),2&e&&o.Dc(r=o.ic())&&(t.ngrid=r.first)},inputs:{listObservableProvider:"listObservableProvider",listObservable:"listObservable",sortService:"sortService",filterService:"filterService",multiSelect:"multiSelect",allowProjector:"allowProjector",hiddenInMobile:"hiddenInMobile",restricted:"restricted",selectedRows:"selectedRows",columns:"columns",filterProps:"filterProps",listStorageKey:"listStorageKey",showFilterBar:"showFilterBar",alwaysShowMenu:"alwaysShowMenu",showListOfSpeakers:"showListOfSpeakers",showMenu:"showMenu",vScrollFixed:"vScrollFixed",fullScreen:"fullScreen"},outputs:{selectedRowsChange:"selectedRowsChange",dataSourceChange:"dataSourceChange"},ngContentSelectors:A,decls:1,vars:1,consts:[["class","list-view-frame",4,"ngIf"],[1,"list-view-frame"],[1,"list-view-table-wrapper"],["class","sort-filter-bar",3,"totalCount","filterCount","filterService","sortService","searchFieldInput","searchFieldChange",4,"ngIf"],["matCheckboxSelection","selection","rowClassUpdateFreq","ngDoCheck",1,"vscroll-list-view",3,"showHeader","dataSource","columns","hideColumns","rowClassUpdate","rowClick"],["class","fill ngrid-lg",4,"pblNgridCellDef"],["class","pbl-ngrid-no-data",4,"pblNgridNoDataRef"],["contentWrapper",""],["class","fill",4,"pblNgridCellDef"],[1,"sort-filter-bar",3,"totalCount","filterCount","filterService","sortService","searchFieldInput","searchFieldChange"],[1,"fill","ngrid-lg"],["class","projector-button",3,"object","changeEvent",4,"osPerms"],["class","projector-button",4,"osPerms","osPermsComplement"],[1,"projector-button",3,"object","changeEvent"],[1,"projector-button"],["color","accent",3,"matTooltip",4,"ngIf"],["color","accent",3,"matTooltip"],[1,"pbl-ngrid-no-data"],[1,"fill"],[3,"object","disabled"]],template:function(e,t){1&e&&(o.sc(L),o.Qc(0,T,10,11,"mat-drawer-container",0)),2&e&&o.tc("ngIf",t.columns&&t.columnSet)},directives:[h.t,p.b,a.e,d.b,a.A,v.b,a.c,a.l,m.a,S.a,g.a,w.a,y.c,k.a],pipes:[O.j],styles:[".title-line{font-weight:500;font-size:16px}.title-line .icon-prefix .mat-icon{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;font-size:16px;height:16px;width:16px}.title-line .favorite-star{padding-right:3px}.mat-table{width:100%}.mat-table .mat-header-row .mat-column-anchor{display:none}.mat-table .mat-row{position:relative}.mat-table .mat-row .mat-column-anchor{position:absolute!important;top:0;right:0;bottom:0;left:0;opacity:.1;z-index:1}.mat-table .mat-row .mat-column-anchor a{display:block;height:100%;width:100%}.mat-table .mat-cell{position:relative}.mat-table .mat-cell .fill{position:absolute;display:inherit;height:100%;width:100%;line-height:0}.mat-table .mat-cell .fill *{margin-top:auto;margin-bottom:auto}.mat-table .mat-cell>*{z-index:2}.mat-table .mat-table-sticky{z-index:3!important}.list-view-frame{height:calc(100vh - 64px)}.list-view-table-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;height:100%}.list-view-table-wrapper .sort-filter-bar{-ms-flex:0 1 auto;flex:0 1 auto;display:block}.list-view-table-wrapper .vscroll-list-view{-ms-flex:1 1 auto;flex:1 1 auto;height:100%}.list-view-table-wrapper .vscroll-list-view .projector-button{margin:auto;display:-ms-flexbox;display:flex}.list-view-table-wrapper .vscroll-list-view .pbl-ngrid-row{height:var(--pbl-height)}.list-view-table-wrapper .vscroll-list-view .pbl-ngrid-row:last-of-type{margin-bottom:60px!important}.list-view-table-wrapper .vscroll-list-view .pbl-ngrid-cell{height:inherit}.list-view-table-wrapper .vscroll-list-view .multiselect .pbl-ngrid-cell{cursor:pointer}"],encapsulation:2,changeDetection:0}),e}()},"40uZ":function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var i=r("/uUt"),o=r("3Y/2"),n=r("J/o/"),a=r("fXoL"),s=r("3Xi6"),l=r("ofXK"),c=r("tyNb"),u=r("bTqV"),b=r("Qu3c"),f=r("NFeN"),h=r("TU8p"),p=r("STbY"),d=r("A5z7"),v=r("sYmb");function m(e,t){if(1&e&&(a.Zb(0,"a",4),a.Zb(1,"button",5),a.mc(2,"translate"),a.Zb(3,"mat-icon",6),a.Sc(4),a.Yb(),a.Yb(),a.Yb()),2&e){var r=a.lc(3);a.tc("routerLink",r.listOfSpeakersUrl),a.Gb(1),a.tc("disabled",r.disabled)("matTooltip",a.nc(2,5,r.tooltip)),a.Gb(2),a.tc("matBadge",r.listOfSpeakers.waitingSpeakerAmount>0?r.listOfSpeakers.waitingSpeakerAmount:null),a.Gb(1),a.Uc(" ",r.icon," ")}}function S(e,t){if(1&e&&(a.Zb(0,"mat-basic-chip",9),a.Zb(1,"span"),a.Sc(2),a.Yb(),a.Yb()),2&e){var r=a.lc(4);a.Gb(2),a.Tc(r.listOfSpeakers.waitingSpeakerAmount)}}function g(e,t){if(1&e&&(a.Zb(0,"button",7),a.Zb(1,"mat-icon"),a.Sc(2),a.Yb(),a.Zb(3,"span"),a.Sc(4),a.mc(5,"translate"),a.Yb(),a.Zb(6,"span"),a.Sc(7,"\xa0"),a.Yb(),a.Qc(8,S,3,1,"mat-basic-chip",8),a.Yb()),2&e){var r=a.lc(3);a.tc("routerLink",r.listOfSpeakers.listOfSpeakersUrl),a.Gb(2),a.Tc(r.icon),a.Gb(2),a.Tc(a.nc(5,4,"List of speakers")),a.Gb(4),a.tc("ngIf",r.listOfSpeakers.waitingSpeakerAmount>0)}}function w(e,t){if(1&e&&(a.Xb(0),a.Qc(1,m,5,7,"a",2),a.Qc(2,g,9,6,"button",3),a.Wb()),2&e){var r=a.lc(2);a.Gb(1),a.tc("ngIf",!r.menuItem),a.Gb(1),a.tc("ngIf",r.menuItem)}}function y(e,t){if(1&e&&(a.Xb(0),a.Qc(1,w,3,2,"ng-container",1),a.Wb()),2&e){var r=a.lc();a.Gb(1),a.tc("ngIf",r.listOfSpeakers)}}var k,O=((k=function(){function e(t){_classCallCheck(this,e),this.listOfSpeakersRepo=t,this.menuItem=!1}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.cleanLosSub()}},{key:"cleanLosSub",value:function(){this.losSub&&(this.losSub.unsubscribe(),this.losSub=null)}},{key:"object",set:function(e){var t,r=this;t=Object(n.b)(e)?e.listOfSpeakers:function(e){return!!e&&void 0!==e.id&&void 0!==e.collection}(e)?this.listOfSpeakersRepo.findByContentObject(e):null,this.cleanLosSub(),t&&(this.losSub=this.listOfSpeakersRepo.getViewModelObservable(t.id).pipe(Object(i.a)()).subscribe((function(e){r.listOfSpeakers=e})))}},{key:"listOfSpeakersUrl",get:function(){if(!this.disabled)return this.listOfSpeakers.listOfSpeakersUrl}},{key:"icon",get:function(){return this.listOfSpeakers.closed?"voice_over_off":"record_voice_over"}},{key:"tooltip",get:function(){return this.listOfSpeakers.closed?"The list of speakers is closed.":"List of speakers"}}]),e}()).\u0275fac=function(e){return new(e||k)(a.Tb(o.a))},k.\u0275cmp=a.Nb({type:k,selectors:[["os-speaker-button"]],inputs:{object:"object",disabled:"disabled",menuItem:"menuItem"},decls:1,vars:1,consts:[[4,"osPerms"],[4,"ngIf"],["class","anchor-button",3,"routerLink",4,"ngIf"],["type","button","mat-menu-item","",3,"routerLink",4,"ngIf"],[1,"anchor-button",3,"routerLink"],["type","button","mat-icon-button","",3,"disabled","matTooltip"],["matBadgeColor","accent",3,"matBadge"],["type","button","mat-menu-item","",3,"routerLink"],["disableRipple","","class","lightblue",4,"ngIf"],["disableRipple","",1,"lightblue"]],template:function(e,t){1&e&&a.Qc(0,y,2,1,"ng-container",0),2&e&&a.tc("osPerms","agenda.can_see_list_of_speakers")},directives:[s.a,l.t,c.i,u.b,b.c,f.a,h.a,p.c,c.g,d.a],pipes:[v.j],styles:[".mat-basic-chip .mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],encapsulation:2}),k)}}]);