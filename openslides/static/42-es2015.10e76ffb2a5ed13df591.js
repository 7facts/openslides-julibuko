(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"6CGV":function(t,e,n){"use strict";n.r(e),n.d(e,"ItemListSlideModule",(function(){return m}));var i=n("ofXK"),a=n("PCNd"),r=n("DGVe"),s=n("TG9O"),o=n("O7yW"),c=n("9st3"),d=n("fXoL"),l=n("sYmb");function p(t,e){if(1&t&&(d.Zb(0,"div",3),d.Sc(1),d.Yb()),2&t){const t=e.$implicit,n=d.lc(2);d.tc("ngStyle",n.getItemStyle(t))("ngClass",0===t.depth?"mainitem":"subitem"),d.Gb(1),d.Uc(" ",n.getTitle(t)," ")}}function g(t,e){if(1&t&&(d.Zb(0,"div",1),d.Zb(1,"h1"),d.Sc(2),d.mc(3,"translate"),d.Yb(),d.Qc(4,p,2,3,"div",2),d.Yb()),2&t){const t=d.lc();d.Gb(2),d.Tc(d.nc(3,2,"Agenda")),d.Gb(2),d.tc("ngForOf",t.data.data.items)}}let u=(()=>{class t extends c.a{constructor(t){super(),this.collectionStringMapperService=t}set data(t){t.data.items.forEach(t=>t.title_information.agenda_item_number=()=>t.title_information._agenda_item_number),this._data=t}get data(){return this._data}getTitle(t){const e=this.collectionStringMapperService.getRepository(t.collection);if(Object(o.a)(e))return e.getListTitle(t.title_information);throw new Error("The content object has no agenda based repository!")}getItemStyle(t){return{"margin-left":20*t.depth+"px"}}}return t.\u0275fac=function(e){return new(e||t)(d.Tb(s.a))},t.\u0275cmp=d.Nb({type:t,selectors:[["os-item-list-slide"]],inputs:{data:"data"},features:[d.Db],decls:1,vars:1,consts:[["class","agenda-slide-wrapper",4,"ngIf"],[1,"agenda-slide-wrapper"],["class","item",3,"ngStyle","ngClass",4,"ngFor","ngForOf"],[1,"item",3,"ngStyle","ngClass"]],template:function(t,e){1&t&&d.Qc(0,g,5,4,"div",0),2&t&&d.tc("ngIf",e.data)},directives:[i.t,i.s,i.w,i.q],pipes:[l.j],styles:[".agenda-slide-wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{line-height:34px}.agenda-slide-wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] + .item[_ngcontent-%COMP%]{margin-top:10px}.agenda-slide-wrapper[_ngcontent-%COMP%]   .mainitem[_ngcontent-%COMP%]{font-size:110%}.agenda-slide-wrapper[_ngcontent-%COMP%]   .subitem[_ngcontent-%COMP%]{font-size:90%}"]}),t})(),m=(()=>{class t{}return t.\u0275mod=d.Rb({type:t}),t.\u0275inj=d.Qb({factory:function(e){return new(e||t)},providers:[{provide:r.a.token,useValue:u}],imports:[[i.c,a.a]]}),t})()},"9st3":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n("Ri39");var i=n("fXoL");let a=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Ob({type:t,inputs:{data:"data",projector:"projector"}}),t})()}}]);