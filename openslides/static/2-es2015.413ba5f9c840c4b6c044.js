(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0Obk":function(e,t,i){"use strict";i.d(t,"a",(function(){return M}));var s=i("mrSG"),r=i("fXoL"),o=i("tyNb"),l=i("dRZP"),c=i("pLZG"),a=i("/uUt"),n=i("OwvW"),b=i("+WZz"),h=i("AqIO"),u=(i("+8Rz"),i("A6Ob"),i("KL36")),d=i("ofXK"),p=i("XhcP"),f=i("1yIO"),m=i("SOyc"),v=i("XROA"),S=i("3Xi6"),g=i("Tp2j"),w=i("NFeN"),O=i("Qu3c"),j=i("40uZ"),k=i("sYmb");function y(e,t){if(1&e){const e=r.ac();r.Zb(0,"os-sort-filter-bar",9),r.hc("searchFieldChange",(function(t){return r.Ic(e),r.lc(2).searchFilter(t)})),r.Yb()}if(2&e){const e=r.lc(2);r.tc("totalCount",e.totalCount)("filterCount",e.countFilter)("filterService",e.filterService)("sortService",e.sortService)("searchFieldInput",e.inputValue)}}function C(e,t){if(1&e){const e=r.ac();r.Zb(0,"os-projector-button",13),r.hc("changeEvent",(function(){return r.Ic(e),r.lc(3).viewUpdateEvent()})),r.Yb()}if(2&e){const e=r.lc().row,t=r.lc(2);r.tc("object",t.getProjectable(e))}}function x(e,t){1&e&&(r.Zb(0,"mat-icon",16),r.mc(1,"translate"),r.Sc(2," videocam "),r.Yb()),2&e&&r.uc("matTooltip",r.nc(1,1,"Currently projected"))}function P(e,t){if(1&e&&(r.Zb(0,"div",14),r.Qc(1,x,3,3,"mat-icon",15),r.Yb()),2&e){const e=r.lc().row,t=r.lc(2);r.Gb(1),r.tc("ngIf",t.projectorService.isProjected(t.getProjectable(e)))}}function F(e,t){1&e&&(r.Zb(0,"div",10),r.Qc(1,C,1,1,"os-projector-button",11),r.Qc(2,P,2,1,"div",12),r.Yb()),2&e&&(r.Gb(1),r.tc("osPerms","core.can_manage_projector"),r.Gb(1),r.tc("osPerms","core.can_manage_projector")("osPermsComplement",!0))}function I(e,t){1&e&&(r.Zb(0,"div",17),r.Zb(1,"span"),r.Sc(2),r.mc(3,"translate"),r.Yb(),r.Yb()),2&e&&(r.Gb(2),r.Tc(r.nc(3,1,"No data")))}function L(e,t){if(1&e&&(r.Zb(0,"div",18),r.Ub(1,"os-speaker-button",19),r.Yb()),2&e){const e=t.row,i=r.lc(2);r.Gb(1),r.tc("object",e.contentObjectData?e.contentObjectData:e)("disabled",i.multiSelect)}}function Z(e,t){if(1&e){const e=r.ac();r.Zb(0,"mat-drawer-container",1),r.Zb(1,"div",2),r.Qc(2,y,1,5,"os-sort-filter-bar",3),r.Zb(3,"pbl-ngrid",4),r.hc("rowClick",(function(t){return r.Ic(e),r.lc().onSelectRow(t)})),r.Qc(4,F,3,3,"div",5),r.Qc(5,I,4,3,"div",6),r.Zb(6,"div",null,7),r.rc(8,0,["class","ngrid-lg"]),r.Yb(),r.Qc(9,L,2,2,"div",8),r.Yb(),r.Yb(),r.Yb()}if(2&e){const e=r.lc();r.Gb(2),r.tc("ngIf",e.showFilterBar),r.Gb(1),r.tc("showHeader",!e.showFilterBar||!e.fullScreen)("showHeader",!1)("dataSource",e.dataSource)("columns",e.columnSet)("hideColumns",e.hiddenColumns)("rowClassUpdate",e.isElementProjected),r.Hb("vScrollFixed",-1!==e.vScrollFixed&&e.vScrollFixed)("vScrollAuto",-1===e.vScrollFixed),r.Gb(1),r.tc("pblNgridCellDef","projector"),r.Gb(5),r.tc("pblNgridCellDef","speaker")}}const T=[[["",8,"cell-slot"]]],Y=[".cell-slot"];let M=(()=>{class e{constructor(e,t,i,s,l,a){this.operator=e,this.store=s,this.cd=l,this.projectorService=a,this.multiSelect=!1,this.allowProjector=!0,this.selectedRowsChange=new r.p,this.columns=[],this.showFilterBar=!0,this.alwaysShowMenu=!1,this.showListOfSpeakers=!0,this.showMenu=!0,this.vScrollFixed=110,this.fullScreen=!0,this.dataSourceChange=new r.p,this.subs=[],this.isElementProjected=e=>{if(this.allowProjector&&this.projectorService.isProjected(this.getProjectable(e.$implicit)))return"projected"},t.isMobileSubject.subscribe(e=>{e!==this.isMobile&&this.cd.markForCheck(),this.isMobile=e}),this.subs.push(i.events.pipe(Object(c.a)(e=>e instanceof o.d)).subscribe(()=>{this.saveScrollOffset()}))}get projectorColumnWidth(){return this.operator.hasPerms(n.b.coreCanManageProjector)?60:24}get defaultStartColumns(){return[{prop:"selection",label:"",width:"40px"},{prop:"projector",label:"",width:this.projectorColumnWidth+"px"}]}get defaultEndColumns(){return[{prop:"speaker",label:"",width:"45px"},{prop:"menu",label:"",width:"40px"}]}get countFilter(){return this.dataSource.filteredData.length}get totalCount(){return this.dataSource.length}get hiddenColumns(){let e=[];if(this.multiSelect||e.push("selection"),(this.alwaysShowMenu||this.isMobile)&&this.showMenu||e.push("menu"),(this.multiSelect||this.isMobile||!this.allowProjector)&&e.push("projector"),!this.isMobile&&this.operator.hasPerms(n.b.agendaCanSeeListOfSpeakers)&&this.showListOfSpeakers||e.push("speaker"),this.restricted&&this.restricted.length){const t=this.restricted.filter(e=>!this.operator.hasPerms(e.permission)).map(e=>e.columnName);e=e.concat(t)}return this.isMobile&&this.hiddenInMobile&&this.hiddenInMobile.length&&(e=e.concat(this.hiddenInMobile)),e}ngOnInit(){return Object(s.a)(this,void 0,void 0,(function*(){this.getListObservable(),yield this.restoreSearchQuery(),this.createDataSource(),this.changeRowHeight(),this.cd.detectChanges(),this.scrollToPreviousPosition()}))}ngOnDestroy(){this.cd.detach();for(const e of this.subs)e.unsubscribe();this.subs=[]}createDataSource(){this.dataSource=Object(l.q)().onTrigger(()=>this.dataListObservable?this.dataListObservable:[]).create(),this.dataSource.onSourceChanged.subscribe(()=>{this.dataSourceChange.next(this.dataSource),this.checkSelection()}),this.dataSource.selection.changed.subscribe(e=>{this.selectedRows=e.source.selected,this.selectedRowsChange.emit(this.selectedRows)}),this.columnSet=Object(l.p)().default({width:"60px"}).table(...this.defaultStartColumns,...this.columns,...this.defaultEndColumns).build(),this.dataSource.setFilter(this.getFilterPredicate()),this.filterService&&this.subs.push(this.filterService.outputObservable.pipe(Object(a.a)()).subscribe(()=>{this.dataSource.refresh()})),this.sortService&&this.subs.push(this.sortService.outputObservable.subscribe(()=>{this.dataSource.refresh()}))}getListObservable(){if(this.listObservableProvider||this.listObservable){const e=this.listObservableProvider?this.listObservableProvider.getViewModelListObservable():this.listObservable;this.filterService&&this.sortService?(this.filterService.initFilters(e),this.sortService.initSorting(this.filterService.outputObservable),this.dataListObservable=this.sortService.outputObservable):this.filterService?(this.filterService.initFilters(e),this.dataListObservable=this.filterService.outputObservable):this.sortService?(this.sortService.initSorting(e),this.dataListObservable=this.sortService.outputObservable):this.dataListObservable=e}}viewUpdateEvent(){this.cd.markForCheck()}getFilterPredicate(){return e=>{if(!this.inputValue)return!0;const t=this.inputValue.trim().toLowerCase();if(-1!==(""+e.id).trim().toLowerCase().indexOf(t))return!0;if(this.filterProps&&this.filterProps.length)for(const i of this.filterProps){const s=i.split(".");let r=e;for(const e of s)r&&(r=r[e]);if(r){let e="";if(e="function"==typeof r?""+r():r.constructor===Array?r.join(""):""+r,e&&-1!==e.trim().toLowerCase().indexOf(t))return!0}}}}onSelectRow(e){if(this.multiSelect){const t=e.row;this.dataSource.selection.isSelected(t)?this.dataSource.selection.deselect(t):this.dataSource.selection.select(t)}}getProjectable(e){var t,i;return null!==(i=null===(t=e)||void 0===t?void 0:t.contentObject)&&void 0!==i?i:e}searchFilter(e){this.listStorageKey&&this.saveSearchQuery(this.listStorageKey,e),this.inputValue=e,this.dataSource.syncFilter()}getScrollOffset(e){return Object(s.a)(this,void 0,void 0,(function*(){return(yield this.store.get("scroll_"+e))||0}))}saveScrollOffset(){const e=this.ngrid.viewport.measureScrollOffset();this.store.set("scroll_"+this.listStorageKey,e)}saveSearchQuery(e,t){this.store.set("query_"+e,t)}restoreSearchQuery(){return Object(s.a)(this,void 0,void 0,(function*(){this.inputValue=yield this.store.get("query_"+this.listStorageKey)}))}scrollToPreviousPosition(){return Object(s.a)(this,void 0,void 0,(function*(){if(this.ngrid){const e=yield this.getScrollOffset(this.listStorageKey);this.ngrid.viewport.scrollToOffset(e)}}))}changeRowHeight(){this.vScrollFixed>0&&document.documentElement.style.setProperty("--pbl-height",this.vScrollFixed+"px")}checkSelection(){if(this.multiSelect){const e=[];this.selectedRows.forEach(t=>{const i=this.dataSource.source.find(e=>e.id===t.id);i&&e.push(i)}),this.dataSource.selection.clear(),this.dataSource.selection.select(...e)}}}return e.\u0275fac=function(t){return new(t||e)(r.Tb(n.a),r.Tb(u.a),r.Tb(o.f),r.Tb(h.a),r.Tb(r.h),r.Tb(b.a))},e.\u0275cmp=r.Nb({type:e,selectors:[["os-list-view-table"]],viewQuery:function(e,t){var i;1&e&&r.Zc(l.e,!0),2&e&&r.Dc(i=r.ic())&&(t.ngrid=i.first)},inputs:{listObservableProvider:"listObservableProvider",listObservable:"listObservable",sortService:"sortService",filterService:"filterService",multiSelect:"multiSelect",allowProjector:"allowProjector",hiddenInMobile:"hiddenInMobile",restricted:"restricted",selectedRows:"selectedRows",columns:"columns",filterProps:"filterProps",listStorageKey:"listStorageKey",showFilterBar:"showFilterBar",alwaysShowMenu:"alwaysShowMenu",showListOfSpeakers:"showListOfSpeakers",showMenu:"showMenu",vScrollFixed:"vScrollFixed",fullScreen:"fullScreen"},outputs:{selectedRowsChange:"selectedRowsChange",dataSourceChange:"dataSourceChange"},ngContentSelectors:Y,decls:1,vars:1,consts:[["class","list-view-frame",4,"ngIf"],[1,"list-view-frame"],[1,"list-view-table-wrapper"],["class","sort-filter-bar",3,"totalCount","filterCount","filterService","sortService","searchFieldInput","searchFieldChange",4,"ngIf"],["matCheckboxSelection","selection","rowClassUpdateFreq","ngDoCheck",1,"vscroll-list-view",3,"showHeader","dataSource","columns","hideColumns","rowClassUpdate","rowClick"],["class","fill ngrid-lg",4,"pblNgridCellDef"],["class","pbl-ngrid-no-data",4,"pblNgridNoDataRef"],["contentWrapper",""],["class","fill",4,"pblNgridCellDef"],[1,"sort-filter-bar",3,"totalCount","filterCount","filterService","sortService","searchFieldInput","searchFieldChange"],[1,"fill","ngrid-lg"],["class","projector-button",3,"object","changeEvent",4,"osPerms"],["class","projector-button",4,"osPerms","osPermsComplement"],[1,"projector-button",3,"object","changeEvent"],[1,"projector-button"],["color","accent",3,"matTooltip",4,"ngIf"],["color","accent",3,"matTooltip"],[1,"pbl-ngrid-no-data"],[1,"fill"],[3,"object","disabled"]],template:function(e,t){1&e&&(r.sc(T),r.Qc(0,Z,10,11,"mat-drawer-container",0)),2&e&&r.tc("ngIf",t.columns&&t.columnSet)},directives:[d.t,p.b,l.e,f.b,l.A,m.b,l.c,l.l,v.a,S.a,g.a,w.a,O.c,j.a],pipes:[k.j],styles:[".title-line{font-weight:500;font-size:16px}.title-line .icon-prefix .mat-icon{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;font-size:16px;height:16px;width:16px}.title-line .favorite-star{padding-right:3px}.mat-table{width:100%}.mat-table .mat-header-row .mat-column-anchor{display:none}.mat-table .mat-row{position:relative}.mat-table .mat-row .mat-column-anchor{position:absolute!important;top:0;right:0;bottom:0;left:0;opacity:.1;z-index:1}.mat-table .mat-row .mat-column-anchor a{display:block;height:100%;width:100%}.mat-table .mat-cell{position:relative}.mat-table .mat-cell .fill{position:absolute;display:inherit;height:100%;width:100%;line-height:0}.mat-table .mat-cell .fill *{margin-top:auto;margin-bottom:auto}.mat-table .mat-cell>*{z-index:2}.mat-table .mat-table-sticky{z-index:3!important}.list-view-frame{height:calc(100vh - 64px)}.list-view-table-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;height:100%}.list-view-table-wrapper .sort-filter-bar{-ms-flex:0 1 auto;flex:0 1 auto;display:block}.list-view-table-wrapper .vscroll-list-view{-ms-flex:1 1 auto;flex:1 1 auto;height:100%}.list-view-table-wrapper .vscroll-list-view .projector-button{margin:auto;display:-ms-flexbox;display:flex}.list-view-table-wrapper .vscroll-list-view .pbl-ngrid-row{height:var(--pbl-height)}.list-view-table-wrapper .vscroll-list-view .pbl-ngrid-row:last-of-type{margin-bottom:60px!important}.list-view-table-wrapper .vscroll-list-view .pbl-ngrid-cell{height:inherit}.list-view-table-wrapper .vscroll-list-view .multiselect .pbl-ngrid-cell{cursor:pointer}"],encapsulation:2,changeDetection:0}),e})()},"40uZ":function(e,t,i){"use strict";i.d(t,"a",(function(){return j}));var s=i("/uUt"),r=i("3Y/2"),o=i("J/o/"),l=i("fXoL"),c=i("3Xi6"),a=i("ofXK"),n=i("tyNb"),b=i("bTqV"),h=i("Qu3c"),u=i("NFeN"),d=i("TU8p"),p=i("STbY"),f=i("A5z7"),m=i("sYmb");function v(e,t){if(1&e&&(l.Zb(0,"a",4),l.Zb(1,"button",5),l.mc(2,"translate"),l.Zb(3,"mat-icon",6),l.Sc(4),l.Yb(),l.Yb(),l.Yb()),2&e){const e=l.lc(3);l.tc("routerLink",e.listOfSpeakersUrl),l.Gb(1),l.tc("disabled",e.disabled)("matTooltip",l.nc(2,5,e.tooltip)),l.Gb(2),l.tc("matBadge",e.listOfSpeakers.waitingSpeakerAmount>0?e.listOfSpeakers.waitingSpeakerAmount:null),l.Gb(1),l.Uc(" ",e.icon," ")}}function S(e,t){if(1&e&&(l.Zb(0,"mat-basic-chip",9),l.Zb(1,"span"),l.Sc(2),l.Yb(),l.Yb()),2&e){const e=l.lc(4);l.Gb(2),l.Tc(e.listOfSpeakers.waitingSpeakerAmount)}}function g(e,t){if(1&e&&(l.Zb(0,"button",7),l.Zb(1,"mat-icon"),l.Sc(2),l.Yb(),l.Zb(3,"span"),l.Sc(4),l.mc(5,"translate"),l.Yb(),l.Zb(6,"span"),l.Sc(7,"\xa0"),l.Yb(),l.Qc(8,S,3,1,"mat-basic-chip",8),l.Yb()),2&e){const e=l.lc(3);l.tc("routerLink",e.listOfSpeakers.listOfSpeakersUrl),l.Gb(2),l.Tc(e.icon),l.Gb(2),l.Tc(l.nc(5,4,"List of speakers")),l.Gb(4),l.tc("ngIf",e.listOfSpeakers.waitingSpeakerAmount>0)}}function w(e,t){if(1&e&&(l.Xb(0),l.Qc(1,v,5,7,"a",2),l.Qc(2,g,9,6,"button",3),l.Wb()),2&e){const e=l.lc(2);l.Gb(1),l.tc("ngIf",!e.menuItem),l.Gb(1),l.tc("ngIf",e.menuItem)}}function O(e,t){if(1&e&&(l.Xb(0),l.Qc(1,w,3,2,"ng-container",1),l.Wb()),2&e){const e=l.lc();l.Gb(1),l.tc("ngIf",e.listOfSpeakers)}}let j=(()=>{class e{constructor(e){this.listOfSpeakersRepo=e,this.menuItem=!1}set object(e){let t;t=Object(o.b)(e)?e.listOfSpeakers:function(e){return!!e&&void 0!==e.id&&void 0!==e.collection}(e)?this.listOfSpeakersRepo.findByContentObject(e):null,this.cleanLosSub(),t&&(this.losSub=this.listOfSpeakersRepo.getViewModelObservable(t.id).pipe(Object(s.a)()).subscribe(e=>{this.listOfSpeakers=e}))}get listOfSpeakersUrl(){if(!this.disabled)return this.listOfSpeakers.listOfSpeakersUrl}get icon(){return this.listOfSpeakers.closed?"voice_over_off":"record_voice_over"}get tooltip(){return this.listOfSpeakers.closed?"The list of speakers is closed.":"List of speakers"}ngOnDestroy(){this.cleanLosSub()}cleanLosSub(){this.losSub&&(this.losSub.unsubscribe(),this.losSub=null)}}return e.\u0275fac=function(t){return new(t||e)(l.Tb(r.a))},e.\u0275cmp=l.Nb({type:e,selectors:[["os-speaker-button"]],inputs:{object:"object",disabled:"disabled",menuItem:"menuItem"},decls:1,vars:1,consts:[[4,"osPerms"],[4,"ngIf"],["class","anchor-button",3,"routerLink",4,"ngIf"],["type","button","mat-menu-item","",3,"routerLink",4,"ngIf"],[1,"anchor-button",3,"routerLink"],["type","button","mat-icon-button","",3,"disabled","matTooltip"],["matBadgeColor","accent",3,"matBadge"],["type","button","mat-menu-item","",3,"routerLink"],["disableRipple","","class","lightblue",4,"ngIf"],["disableRipple","",1,"lightblue"]],template:function(e,t){1&e&&l.Qc(0,O,2,1,"ng-container",0),2&e&&l.tc("osPerms","agenda.can_see_list_of_speakers")},directives:[c.a,a.t,n.i,b.b,h.c,u.a,d.a,p.c,n.g,f.a],pipes:[m.j],styles:[".mat-basic-chip .mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],encapsulation:2}),e})()}}]);