function _createForOfIteratorHelper(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,r=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw r}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{GTZY:function(t,e,n){"use strict";n.d(e,"a",(function(){return R}));var o=n("mrSG"),a=n("fXoL"),r=n("+0xr"),i=n("SSyl"),c=n("R+Vs"),l=n("3Pt+"),s=n("gfTr"),u=n("ofXK"),d=n("bTqV"),b=n("kmnG"),f=n("oqD5"),m=n("qFsG"),p=n("NFeN"),h=n("Wp6s"),g=n("bv9b"),v=n("sYmb");function _(t,e){if(1&t&&(a.Zb(0,"div",12),a.Zb(1,"mat-form-field"),a.Ub(2,"os-search-value-selector",13),a.mc(3,"translate"),a.Yb(),a.Yb()),2&t){var n=a.lc();a.tc("formGroup",n.directorySelectionForm),a.Gb(2),a.uc("placeholder",a.nc(3,6,"Parent directory")),a.tc("multiple",!1)("includeNone",!0)("noneTitle","Base folder")("inputListValues",n.directoryBehaviorSubject)}}function y(t,e){1&t&&(a.Zb(0,"i"),a.Sc(1),a.mc(2,"translate"),a.Yb()),2&t&&(a.Gb(1),a.Tc(a.nc(2,1,"Base folder")))}function C(t,e){if(1&t&&(a.Zb(0,"i"),a.Sc(1),a.Yb()),2&t){var n=a.lc();a.Gb(1),a.Tc(n.getDirectory(n.selectedDirectoryId).title)}}function O(t,e){1&t&&(a.Zb(0,"th",26),a.Zb(1,"span"),a.Sc(2),a.mc(3,"translate"),a.Yb(),a.Yb()),2&t&&(a.Gb(2),a.Tc(a.nc(3,1,"Title")))}function P(t,e){if(1&t){var n=a.ac();a.Zb(0,"td",27),a.Zb(1,"mat-form-field"),a.Zb(2,"input",28),a.hc("input",(function(t){a.Ic(n);var o=e.$implicit;return a.lc(2).onChangeTitle(t.target.value,o)})),a.Yb(),a.Yb(),a.Yb()}if(2&t){var o=e.$implicit;a.Gb(2),a.tc("value",o.title)}}function M(t,e){1&t&&(a.Zb(0,"th",26),a.Zb(1,"span"),a.Sc(2),a.mc(3,"translate"),a.Yb(),a.Yb()),2&t&&(a.Gb(2),a.Tc(a.nc(3,1,"File name")))}function w(t,e){if(1&t&&(a.Zb(0,"td",27),a.Sc(1),a.Yb()),2&t){var n=e.$implicit;a.Gb(1),a.Tc(n.filename)}}function S(t,e){1&t&&(a.Zb(0,"th",26),a.Zb(1,"span"),a.Sc(2),a.mc(3,"translate"),a.Yb(),a.Yb()),2&t&&(a.Gb(2),a.Tc(a.nc(3,1,"File information")))}function k(t,e){if(1&t&&(a.Zb(0,"td",27),a.Zb(1,"div",29),a.Zb(2,"span"),a.Zb(3,"mat-icon",30),a.Sc(4,"insert_drive_file"),a.Yb(),a.Sc(5),a.mc(6,"translate"),a.Yb(),a.Zb(7,"span"),a.Zb(8,"mat-icon",30),a.Sc(9,"data_usage"),a.Yb(),a.Sc(10),a.Yb(),a.Yb(),a.Yb()),2&t){var n=e.$implicit,o=a.lc(2);a.Gb(3),a.tc("inline",!0),a.Gb(2),a.Uc(" ",a.nc(6,4,o.getFiletype(n.mediafile))," "),a.Gb(3),a.tc("inline",!0),a.Gb(2),a.Uc(" ",o.getReadableSize(n.mediafile.size)," ")}}function Z(t,e){1&t&&(a.Zb(0,"th",26),a.Zb(1,"span"),a.Sc(2),a.mc(3,"translate"),a.Yb(),a.Yb()),2&t&&(a.Gb(2),a.Tc(a.nc(3,1,"Access groups")))}function Y(t,e){if(1&t&&(a.Zb(0,"td",31),a.Zb(1,"mat-form-field"),a.Ub(2,"os-search-value-selector",32),a.mc(3,"translate"),a.Yb(),a.Yb()),2&t){var n=e.$implicit,o=a.lc(2);a.tc("formGroup",n.form),a.Gb(2),a.uc("placeholder",a.nc(3,4,"Access groups")),a.tc("multiple",!0)("inputListValues",o.groupsBehaviorSubject)}}function I(t,e){1&t&&(a.Zb(0,"th",26),a.Zb(1,"span"),a.Sc(2),a.mc(3,"translate"),a.Yb(),a.Yb()),2&t&&(a.Gb(2),a.Tc(a.nc(3,1,"Remove")))}function G(t,e){if(1&t){var n=a.ac();a.Zb(0,"td",27),a.Zb(1,"button",33),a.hc("click",(function(){a.Ic(n);var t=e.$implicit;return a.lc(2).onRemoveButton(t)})),a.Zb(2,"mat-icon"),a.Sc(3,"close"),a.Yb(),a.Yb(),a.Yb()}}function D(t,e){1&t&&a.Ub(0,"tr",34)}function x(t,e){1&t&&a.Ub(0,"tr",35)}function F(t,e){if(1&t&&(a.Zb(0,"div",14),a.Zb(1,"table",15),a.Xb(2,16),a.Qc(3,O,4,3,"th",17),a.Qc(4,P,3,1,"td",18),a.Wb(),a.Xb(5,19),a.Qc(6,M,4,3,"th",17),a.Qc(7,w,2,1,"td",18),a.Wb(),a.Xb(8,20),a.Qc(9,S,4,3,"th",17),a.Qc(10,k,11,6,"td",18),a.Wb(),a.Xb(11,21),a.Qc(12,Z,4,3,"th",17),a.Qc(13,Y,4,6,"td",22),a.Wb(),a.Xb(14,23),a.Qc(15,I,4,3,"th",17),a.Qc(16,G,4,0,"td",18),a.Wb(),a.Qc(17,D,1,0,"tr",24),a.Qc(18,x,1,0,"tr",25),a.Yb(),a.Yb()),2&t){var n=a.lc();a.Gb(1),a.tc("dataSource",n.uploadList),a.Gb(16),a.tc("matHeaderRowDef",n.displayedColumns),a.Gb(1),a.tc("matRowDefColumns",n.displayedColumns)}}function T(t,e){if(1&t&&a.Ub(0,"mat-progress-bar",39),2&t){var n=a.lc(2);a.tc("value",n.calcUploadProgress())}}function L(t,e){1&t&&a.Ub(0,"mat-progress-bar",40)}function B(t,e){if(1&t&&(a.Zb(0,"mat-card",36),a.Qc(1,T,1,1,"mat-progress-bar",37),a.Qc(2,L,1,0,"mat-progress-bar",38),a.Yb()),2&t){var n=a.lc();a.Gb(1),a.tc("ngIf",!n.parallel),a.Gb(1),a.tc("ngIf",n.parallel)}}var R=function(){var t=function(){function t(e,n,o){_classCallCheck(this,t),this.repo=e,this.formBuilder=n,this.groupRepo=o,this.displayedColumns=["title","filename","information","access_groups","remove"],this.showProgress=!1,this.filesUploadedIds=[],this.parallel=!0,this.uploadSuccessEvent=new a.p,this.errorEvent=new a.p,this.directoryBehaviorSubject=this.repo.getDirectoryBehaviorSubject(),this.groupsBehaviorSubject=this.groupRepo.getViewModelListBehaviorSubject(),this.directorySelectionForm=this.formBuilder.group({parent_id:null})}return _createClass(t,[{key:"ngOnInit",value:function(){this.uploadList=new r.o}},{key:"getDirectory",value:function(t){return this.repo.getViewModel(t)}},{key:"uploadFile",value:function(t){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,o,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).set("mediafile",t.mediafile),n.set("title",t.title),(o=t.form.value.access_groups_id||[]).length>0&&n.set("access_groups_id",JSON.stringify(o)),this.selectedDirectoryId&&n.set("parent_id",""+this.selectedDirectoryId),e.next=7,this.repo.uploadFile(n).then((function(e){a.filesUploadedIds.push(e.id),a.onRemoveButton(t)}),(function(t){a.errorMessage=t}));case 7:case"end":return e.stop()}}),e,this)})))}},{key:"getFiletype",value:function(t){return t.type||"File"}},{key:"getReadableSize",value:function(t){if(0===t)return"0 B";var e=Math.floor(Math.log(t)/Math.log(1024));return"".concat(t=+(t/Math.pow(1024,e)).toFixed(2)," ").concat(["B","kB","MB","GB","TB"][e])}},{key:"onChangeTitle",value:function(t,e){e.title=t}},{key:"addFile",value:function(t){var e={mediafile:t,filename:t.name,title:t.name,form:this.formBuilder.group({access_groups_id:[[]]})};this.uploadList.data.push(e),this.table&&this.table.renderRows()}},{key:"onSelectFile",value:function(t){if(t.target.files&&t.target.files.length>0){var e,n=_createForOfIteratorHelper(t.target.files);try{for(n.s();!(e=n.n()).done;){var o=e.value;this.addFile(o)}}catch(a){n.e(a)}finally{n.f()}}}},{key:"onDropFile",value:function(t){var e,n=this,o=_createForOfIteratorHelper(t);try{for(o.s();!(e=o.n()).done;){var a=e.value;a.fileEntry.isFile&&a.fileEntry.file((function(t){n.addFile(t)}))}}catch(r){o.e(r)}finally{o.f()}}},{key:"onUploadButton",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,o,a,r,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.uploadList&&this.uploadList.data.length>0)){t.next=25;break}if(this.errorMessage="",this.showProgress=!0,!this.parallel){t.next=7;break}return e=this.uploadList.data.map((function(t){return i.uploadFile(t)})),t.next=5,Promise.all(e);case 5:t.next=24;break;case 7:n=_createForOfIteratorHelper(this.uploadList.data),t.prev=8,n.s();case 10:if((o=n.n()).done){t.next=16;break}return a=o.value,t.next=14,this.uploadFile(a);case 14:t.next=10;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(8),n.e(t.t0);case 21:return t.prev=21,n.f(),t.finish(21);case 24:this.showProgress=!1,""===this.errorMessage?this.uploadSuccessEvent.next(this.filesUploadedIds):(this.table.renderRows(),r=this.uploadList.data.map((function(t){return t.filename})),this.errorEvent.next("".concat(this.errorMessage,"\n").concat(r)));case 25:case"end":return t.stop()}}),t,this,[[8,18,21,24]])})))}},{key:"calcUploadProgress",value:function(){return this.filesUploadedIds&&this.filesUploadedIds.length>0&&this.uploadList.data?100/(this.uploadList.data.length/this.filesUploadedIds.length):0}},{key:"onRemoveButton",value:function(t){this.uploadList.data&&(this.uploadList.data.splice(this.uploadList.data.indexOf(t),1),this.table.renderRows())}},{key:"onClearButton",value:function(){this.uploadList.data=[],this.table&&this.table.renderRows()}},{key:"showDirectorySelector",get:function(){return void 0===this.directoryId}},{key:"selectedDirectoryId",get:function(){if(this.showDirectorySelector){var t=this.directorySelectionForm.controls.parent_id;return t.value&&"number"==typeof t.value?t.value:null}return this.directoryId}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Tb(i.a),a.Tb(l.f),a.Tb(c.a))},t.\u0275cmp=a.Nb({type:t,selectors:[["os-media-upload-content"]],viewQuery:function(t,e){var n;1&t&&a.Zc(r.n,!0),2&t&&a.Dc(n=a.ic())&&(e.table=n.first)},inputs:{parallel:"parallel",directoryId:"directoryId"},outputs:{uploadSuccessEvent:"uploadSuccessEvent",errorEvent:"errorEvent"},decls:25,vars:19,consts:[[1,"upload-area"],["hidden","","type","file","multiple","",3,"change"],["fileInput",""],[1,"selection-area"],["contentClassName","file-drop-content-style","dropZoneClassName","file-drop-zone-style",3,"dropZoneLabel","onFileDrop","click"],[3,"formGroup",4,"ngIf"],[4,"ngIf"],["class","table-container",4,"ngIf"],[1,"action-buttons"],["type","button","mat-raised-button","","color","accent",3,"disabled","click"],["type","button","mat-raised-button","",3,"disabled","click"],["class","os-card",4,"ngIf"],[3,"formGroup"],["formControlName","parent_id",3,"multiple","includeNone","noneTitle","placeholder","inputListValues"],[1,"table-container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","title","sticky",""],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","filename"],["matColumnDef","information"],["matColumnDef","access_groups"],["mat-cell","",3,"formGroup",4,"matCellDef"],["matColumnDef","remove"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["matInput","",3,"value","input"],[1,"file-info-cell"],[3,"inline"],["mat-cell","",3,"formGroup"],["formControlName","access_groups_id",3,"multiple","placeholder","inputListValues"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[1,"os-card"],["mode","determinate",3,"value",4,"ngIf"],["mode","buffer",4,"ngIf"],["mode","determinate",3,"value"],["mode","buffer"]],template:function(t,e){if(1&t){var n=a.ac();a.Zb(0,"div",0),a.Zb(1,"input",1,2),a.hc("change",(function(t){return e.onSelectFile(t)})),a.Yb(),a.Zb(3,"div",3),a.Zb(4,"ngx-file-drop",4),a.hc("onFileDrop",(function(t){return e.onDropFile(t)}))("click",(function(){return a.Ic(n),a.Ec(2).click()})),a.mc(5,"translate"),a.Yb(),a.Yb(),a.Qc(6,_,4,8,"div",5),a.Zb(7,"div"),a.Zb(8,"span"),a.Sc(9),a.mc(10,"translate"),a.Yb(),a.Sc(11," \xa0 "),a.Qc(12,y,3,3,"i",6),a.Qc(13,C,2,1,"i",6),a.Yb(),a.Qc(14,F,19,3,"div",7),a.Yb(),a.Zb(15,"div",8),a.Zb(16,"button",9),a.hc("click",(function(){return e.onUploadButton()})),a.Zb(17,"span"),a.Sc(18),a.mc(19,"translate"),a.Yb(),a.Yb(),a.Zb(20,"button",10),a.hc("click",(function(){return e.onClearButton()})),a.Zb(21,"span"),a.Sc(22),a.mc(23,"translate"),a.Yb(),a.Yb(),a.Yb(),a.Qc(24,B,3,2,"mat-card",11)}2&t&&(a.Gb(4),a.uc("dropZoneLabel",a.nc(5,11,"Drop files into this area OR click here to select files")),a.Gb(2),a.tc("ngIf",e.showDirectorySelector),a.Gb(3),a.Uc(" ",a.nc(10,13,"Upload to:"),""),a.Gb(3),a.tc("ngIf",null===e.selectedDirectoryId),a.Gb(1),a.tc("ngIf",null!==e.selectedDirectoryId),a.Gb(1),a.tc("ngIf",e.uploadList.data.length>0),a.Gb(2),a.tc("disabled",0===e.uploadList.data.length),a.Gb(2),a.Tc(a.nc(19,15,"Upload")),a.Gb(2),a.tc("disabled",0===e.uploadList.data.length),a.Gb(2),a.Tc(a.nc(23,17,"Clear list")),a.Gb(2),a.tc("ngIf",e.showProgress))},directives:[s.a,u.t,d.b,l.t,l.k,b.c,f.a,l.s,l.i,r.n,r.c,r.i,r.b,r.k,r.m,r.h,r.a,m.b,p.a,r.j,r.l,h.a,g.a],pipes:[v.j],styles:[".title-line[_ngcontent-%COMP%]{font-weight:500;font-size:16px}.title-line[_ngcontent-%COMP%]   .icon-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;font-size:16px;height:16px;width:16px}.title-line[_ngcontent-%COMP%]   .favorite-star[_ngcontent-%COMP%]{padding-right:3px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   .mat-column-anchor[_ngcontent-%COMP%]{display:none}.mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{position:relative}.mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   .mat-column-anchor[_ngcontent-%COMP%]{position:absolute!important;top:0;right:0;bottom:0;left:0;opacity:.1;z-index:1}.mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   .mat-column-anchor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;height:100%;width:100%}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{position:relative}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%]{position:absolute;display:inherit;height:100%;width:100%;line-height:0}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{z-index:2}.mat-table[_ngcontent-%COMP%]   .mat-table-sticky[_ngcontent-%COMP%]{z-index:3!important}.table-container[_ngcontent-%COMP%]{overflow:auto}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-column-title[_ngcontent-%COMP%]{min-width:100px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-column-title[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:95%}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-column-filename[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-column-hidden[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-column-information[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-column-remove[_ngcontent-%COMP%]{min-width:100px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .file-info-cell[_ngcontent-%COMP%]{display:grid;margin:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .file-info-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:130%}.selection-area[_ngcontent-%COMP%]{cursor:pointer}.selection-area[_ngcontent-%COMP%], .upload-area[_ngcontent-%COMP%]{margin-bottom:1em}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:1em}"]}),t}()}}]);