(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"30jZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("4X/P");function s(t){switch(t.type){case i.b.TYPE_REPLACEMENT:return"Replacement";case i.b.TYPE_INSERTION:return"Insertion";case i.b.TYPE_DELETION:return"Deletion";default:return t.other_description}}},BBYV:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("3Y4h"),s=n("fXoL");let o=(()=>{class t{constructor(){this.LI_MARGIN_BOTTOM=8,this.LINE_HEIGHT=1.25,this.P_MARGIN_BOTTOM=4,this.H_MARGIN_TOP=10,this.elementStyles={b:["font-weight:bold"],strong:["font-weight:bold"],u:["text-decoration:underline"],em:["font-style:italic"],i:["font-style:italic"],h1:["font-size:14","font-weight:bold"],h2:["font-size:12","font-weight:bold"],h3:["font-size:10","font-weight:bold"],h4:["font-size:10","font-style:italic"],h5:["font-size:10"],h6:["font-size:10"],a:["color:blue","text-decoration:underline"],strike:["text-decoration:line-through"],del:["color:red","text-decoration:line-through"],ins:["color:green","text-decoration:underline"]},this.classStyles={delete:["color:red","text-decoration:line-through"],insert:["color:green","text-decoration:underline"],paragraphcontext:["color:grey"]}}getMarginTop(t){switch(t){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return this.H_MARGIN_TOP;default:return 0}}getMarginBottom(t){switch(t){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"li":default:return this.P_MARGIN_BOTTOM}}addPlainText(t){return{columns:[{stack:this.convertHtml(t,i.d.None)}]}}convertHtml(t,e){const n=[];this.lineNumberingMode=e||i.d.None;const s=(new DOMParser).parseFromString(t,"text/html"),o=Array.from(s.body.childNodes);for(const i of o){const t=this.parseElement(i);n.push(t)}return n}parseElement(t,e){const n=t.nodeName.toLowerCase();let s,o=[];if(e=e||[],t.getAttribute){const n=t.getAttribute("style"),i=t.getAttribute("class");if(n&&(e=n.split(";").map(t=>t.replace(/\s/g,"")).concat(e)),i){o=i.toLowerCase().split(" ");for(const t of o)this.classStyles[t]&&this.classStyles[t].forEach(t=>{e.push(t)})}}switch(n){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"li":case"p":case"div":{const a=this.parseChildren(t,e);this.lineNumberingMode!==i.d.Outside||o.includes("insert")?(s=this.create("text"),s.text=a):(s=this.create("stack"),s.stack=a),s.margin=[0,0,0,0],s.margin[1]=this.getMarginTop(n),s.margin[3]=this.getMarginBottom(n),this.lineNumberingMode===i.d.Outside&&o.includes("insert")&&(s.margin[0]=20,s.margin[3]=this.P_MARGIN_BOTTOM),o.includes("os-split-before")&&(s.listType="none"),(o.includes("os-split-after")||this.withSublist(t))&&(s.margin[3]=0),s.lineHeight=this.LINE_HEIGHT,s=Object.assign(Object.assign(Object.assign({},s),this.computeStyle(e)),this.computeStyle(this.elementStyles[n]));break}case"a":case"b":case"strong":case"u":case"em":case"i":case"ins":case"del":case"strike":{const i=this.parseChildren(t,e.concat(this.elementStyles[n]));s=this.create("text"),s.text=i;break}case"span":if(t.getAttribute("data-line-number")&&!this.isInsideAList(t)){if(this.lineNumberingMode===i.d.Inside);else if(this.lineNumberingMode===i.d.Outside){const e=t.getAttribute("data-line-number");s={columns:[this.getLineNumberObject({lineNumber:+e}),{text:[]}]}}}else{const n=this.parseChildren(t,e);s=Object.assign(Object.assign({},this.create("text")),this.computeStyle(e)),s.text=n}break;case"br":if(this.lineNumberingMode===i.d.None&&o.includes("os-line-break")||this.lineNumberingMode===i.d.Outside&&this.isInsideAList(t))break;s=this.create("text"),s.text="\n",s.lineHeight=this.LINE_HEIGHT;break;case"ul":case"ol":{const o=this.create(n);if("ol"===n){const e=t.getAttribute("start");e&&(o.start=parseInt(e,10))}if(this.lineNumberingMode===i.d.Outside){const i=this.extractLineNumbers(t),a=this.cleanLineNumbers(t),r=this.parseChildren(a,e);if(i.length>0){const e={columns:[{width:20,stack:[]}],margin:[0,0,0,0]};this.isFakeList(t)&&(e.margin[3]=-this.LI_MARGIN_BOTTOM);for(const t of i)e.columns[0].stack.push(this.getLineNumberObject(t));o[n]=r,e.columns.push(o),s=e}else o.margin=[20,0,0,0],s=o,s[n]=r}else{const i=this.parseChildren(t,e);s=o,s[n]=i}break}default:s=Object.assign(Object.assign({},this.create("text",t.textContent.replace(/\n/g,""))),this.computeStyle(e))}return s}parseChildren(t,e){const n=Array.from(t.childNodes),s=[];if(n.length>0)for(const o of n)if("#text"!==o.nodeName||""!==o.textContent.trim()){const n=this.parseElement(o,e),a=t.firstChild;if(this.lineNumberingMode===i.d.Outside&&o&&o.classList&&o.classList.contains("os-line-number"))s.push(n);else if(this.lineNumberingMode===i.d.Outside&&a&&a.classList&&a.classList.contains("os-line-number")){const t=s.pop();t.columns[1].text.push(n),s.push(t)}else s.push(n)}return s}getLineNumberObject(t){return{width:20,text:[{text:" ",fontSize:10,decoration:""},{text:t.lineNumber,color:"gray",fontSize:8}],marginBottom:t.marginBottom,lineHeight:this.LINE_HEIGHT}}withSublist(t){return"li"===t.nodeName.toLowerCase()&&Array.from(t.children).some(t=>"ul"===t.nodeName.toLowerCase())}cleanLineNumbers(t){const e=t.cloneNode(!0),n=e.childNodes;for(let i=0;i<n.length;i++)if(this.getLineNumber(n[i])&&n[i].remove(),n[i].childNodes.length>0){const t=this.cleanLineNumbers(n[i]);e.replaceChild(t,n[i])}return e}extractLineNumbers(t){let e=[];const n=this.getLineNumber(t);if(n)e.push({lineNumber:n});else if("BR"===t.nodeName)this.getLineNumber(t.nextSibling)||e.push({lineNumber:""});else{const n=Array.from(t.childNodes);let i=n.length,s=[];for(let t=0;t<n.length;t++)s=s.concat(this.extractLineNumbers(n[t])),n.length<i&&(t-=i-n.length,i=n.length);s.length&&"LI"===t.nodeName?s[s.length-1].marginBottom=this.LI_MARGIN_BOTTOM:s.length&&"LI"===t.parentNode.nodeName&&(s[s.length-1].marginBottom=this.P_MARGIN_BOTTOM),e=e.concat(s)}return e}isInsideAList(t){let e=t.parentNode;for(;null!==e;){if("UL"===e.nodeName||"OL"===e.nodeName)return!0;e=e.parentNode}return!1}isFakeList(t){if(t.firstElementChild&&t.classList.contains("os-split-after")){const e=t.firstElementChild,n=t.childNodes[t.childNodes.length-1],i="LI"===e.nodeName&&e.classList.contains("os-split-before"),s="LI"===n.nodeName&&n.classList.contains("os-split-after");return i||s}return!1}getLineNumber(t){if(t&&"SPAN"===t.nodeName&&t.getAttribute("class")&&t.getAttribute("class").indexOf("os-line-number")>-1)return parseInt(t.getAttribute("data-line-number"),10)}computeStyle(t){const e={};if(t&&t.length>0)for(const n of t){const t=n.trim().toLowerCase().split(":"),i=t[0],s=t[1];if(2===t.length)switch(i){case"padding-left":e.margin=[parseInt(s,10),0,0,0];break;case"font-size":e.fontSize=parseInt(s,10);break;case"text-align":switch(s){case"right":case"center":case"justify":e.alignment=s}break;case"font-weight":switch(s){case"bold":e.bold=!0}break;case"text-decoration":switch(s){case"underline":e.decoration="underline";break;case"line-through":e.decoration="lineThrough"}break;case"font-style":switch(s){case"italic":e.italics=!0}break;case"color":e.color=this.parseColor(s);break;case"background-color":e.background=this.parseColor(s)}}return e}parseColor(t){const e=new RegExp("^#([0-9a-f]{3}|[0-9a-f]{6})$"),n=new RegExp("^rgb\\((\\d+),\\s*(\\d+),\\s*(\\d+)\\)$"),i=new RegExp("^[a-z]+$");if(e.test(t))return t;if(n.test(t)){const e=n.exec(t).slice(1);for(let t=0;t<3;t++){let n=parseInt(e[t],10);n>255&&(n=255);let i="0"+n.toString(16);i=i.slice(-2),e[t]=i}return"#"+e.join("")}return i.test(t)||console.error('Could not parse color "'+t+'"'),t}create(t,e){const n={};return n[t]=e||[],n}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Pb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},y50V:function(t,e,n){"use strict";n.d(e,"a",(function(){return L}));var i=n("BBYV"),s=n("dOok"),o=n("fXoL"),a=n("sYmb");let r=(()=>{class t{constructor(t,e,n){this.motionRepo=t,this.translate=e,this.htmlToPdfService=n}renderDiffLines(t){if(t.diffLines&&t.diffLines.length){const e=t.diffLines.map(t=>t.text).join("<br />[...]<br />");return this.htmlToPdfService.convertHtml(e)}}amendmentToTableRow(t){let e="";return t.recommendation&&(e+=t.recommendation.show_recommendation_extension_field&&t.recommendationExtension?" "+this.motionRepo.getExtendedRecommendationLabel(t):this.translate.instant(t.recommendation.recommendation_label)),[{text:t.identifierOrTitle},{text:t.getChangeLines()},{text:t.submittersAsUsers.toString()},{stack:this.renderDiffLines(t)},{text:e}]}overviewToDocDef(t,e){const n={text:t,style:"title"},i=[[{text:this.translate.instant("Motion"),style:"tableHeader"},{text:this.translate.instant("Line"),style:"tableHeader"},{text:this.translate.instant("Submitters"),style:"tableHeader"},{text:this.translate.instant("Changes"),style:"tableHeader"},{text:this.translate.instant("Recommendation"),style:"tableHeader"}]],s=[];for(const o of e)s.push(this.amendmentToTableRow(o));return[n,{table:{widths:["auto","auto","auto","*","auto"],headerRows:1,dontBreakRows:!0,body:i.concat(s)},layout:"switchColorTableLayout"}]}}return t.\u0275fac=function(e){return new(e||t)(o.dc(s.a),o.dc(a.k),o.dc(i.a))},t.\u0275prov=o.Pb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var c=n("a9GI"),l=n("+KbT"),h=n("iTQr"),d=n("pSLD"),m=n("+B0n"),u=n("Mluu"),f=n("a9XT"),g=n("GEzB"),p=n("j7f2"),b=n("6ako"),x=n("30jZ"),T=n("ykax"),S=n("3Y4h");let y=(()=>{class t{constructor(t,e,n,i,s,o,a,r,c,l,h,d){this.translate=t,this.motionRepo=e,this.statuteRepo=n,this.changeRecoRepo=i,this.configService=s,this.pdfDocumentService=o,this.htmlToPdfService=a,this.linenumberingService=r,this.commentRepo=c,this.pollKeyVerbose=l,this.parsePollNumber=h,this.motionPollService=d,this.getRecommendationTypeName=x.a}motionToDocDef(t,e){let n=e&&e.lnMode?e.lnMode:null,i=e&&e.crMode?e.crMode:null;const s=e?e.metaInfo:null,o=e?e.content:null;let a=e?e.comments:null;const r=this.configService.instant("motions_line_length"),c=this.configService.instant("motions_export_follow_recommendation");let l=[];t.isStatuteAmendment()&&(n=S.d.None,i=S.b.Diff),n||(n=this.configService.instant("motions_default_line_numbering")),i||(i=this.configService.instant("motions_recommendation_text_mode"));const h=this.createTitle(t,i,r),d=!s||s.includes("id");if(l=[h,this.createSubtitle(t,d)],s&&s.length>0||!s){const e=this.createMetaInfoTable(t,r,i,s,c);l.push(e)}if(!o||o.includes("text")){const e=this.createPreamble(t);l.push(e);const s=this.createText(t,r,n,i);l.push(s)}if(!o||o.includes("reason")){const e=this.createReason(t,n);l.push(e)}return s&&s.includes("allcomments")&&(a=this.commentRepo.getViewModelList().map(t=>t.id)),a&&l.push(this.createComments(t,a)),l}createTitle(t,e,n){const i=this.getUnifiedChanges(t,n).find(t=>t.isTitleChange()),s=this.changeRecoRepo.getTitleWithChanges(t.title,i,e),o=t.identifier?" "+t.identifier:"";let a="";return"A4"===this.configService.instant("general_export_pdf_pagesize")&&(a+=this.translate.instant("Motion")+" "),a+=`${o}: ${s}`,{text:a,style:"title"}}createSubtitle(t,e){const n=[];return e&&n.push(`${this.translate.instant("Sequential number")}: ${t.id}`),t.parent_id&&(e&&n.push(" \u2022 "),n.push(`${this.translate.instant("Amendment to")} ${t.parent.identifier||t.parent.title}`)),{text:n,style:"subtitle"}}createMetaInfoTable(t,e,n,i,s){const o=[];if(!i||i.includes("submitters")){const e=t.submittersAsUsers.map(t=>t.full_name).join(", ");o.push([{text:this.translate.instant("Submitters")+":",style:"boldText"},{text:e}])}if(this.configService.instant("motions_min_supporters")&&t.supporters.length>0){const e=t.supporters.map(t=>t.full_name).join(", ");o.push([{text:this.translate.instant("Supporters")+":",style:"boldText"},{text:e}])}if(i&&!i.includes("state")||o.push([{text:this.translate.instant("State")+":",style:"boldText"},{text:this.motionRepo.getExtendedStateLabel(t)}]),t.recommendation&&(!i||i.includes("recommendation"))){let e;e=t.isStatuteAmendment()?this.configService.instant("motions_statute_recommendations_by"):this.configService.instant("motions_recommendations_by"),o.push([{text:e+":",style:"boldText"},{text:this.motionRepo.getExtendedRecommendationLabel(t)}])}if(t.category&&(!i||i.includes("category"))){let e="";e=t.category.parent?`${t.category.parent.toString()}\n${this.translate.instant("Subcategory")}: ${t.category.toString()}`:t.category.toString(),o.push([{text:this.translate.instant("Category")+":",style:"boldText"},{text:e}])}if(t.tags.length&&(!i||i.includes("tags"))){const e=t.tags.map(t=>t).join(", ");o.push([{text:this.translate.instant("Tags")+":",style:"boldText"},{text:e}])}if(!t.motion_block||i&&!i.includes("motion_block")||o.push([{text:this.translate.instant("Motion block")+":",style:"boldText"},{text:t.motion_block.title}]),!t.origin||i&&!i.includes("origin")||o.push([{text:this.translate.instant("Origin")+":",style:"boldText"},{text:t.origin}]),t.polls.length&&(!i||i.includes("polls"))){const e=[],n=[],i=[];t.polls.forEach(t=>{t.hasVotes&&this.motionPollService.generateTableData(t).forEach(s=>{const o=this.translate.instant(this.pollKeyVerbose.transform(s.votingOption)),a=s.value[0],r=this.parsePollNumber.transform(a.amount);if(e.push(o+":"),a.showPercent){const e=this.motionPollService.getVoteValueInPercent(a.amount,t);n.push(null!==e?`(${e})`:"")}else n.push("");i.push(r)})}),o.push([{text:this.translate.instant("Voting result")+":",style:"boldText"},{columns:[{text:e.join("\n"),width:"auto"},{text:n.join("\n"),width:"auto",alignment:"right"},{text:i.join("\n"),width:"auto",alignment:"right"}],columnGap:7}])}const a=this.getUnifiedChanges(t,e);if(n===S.b.Diff&&a.length>0){const t=[],e=[];a.forEach(n=>{if(n.isTitleChange()){const i=n;t.push(this.translate.instant("Title")+": "),e.push(`(${this.translate.instant("Change recommendation")}) - ${this.translate.instant(this.getRecommendationTypeName(i))}`)}else{let i;if(i=n.getLineFrom()>=n.getLineTo()-1?n.getLineFrom():n.getLineFrom()+" - "+(n.getLineTo()-1),n.getChangeType()===g.a.TYPE_CHANGE_RECOMMENDATION){const s=n;t.push(`${this.translate.instant("Line")} ${i}: `),e.push(`(${this.translate.instant("Change recommendation")}) - ${this.translate.instant(this.getRecommendationTypeName(s))}`)}else if(n.getChangeType()===g.a.TYPE_AMENDMENT){const s=n;let o=`(${this.translate.instant("Amendment")} ${s.getIdentifier()}) -`;s.isRejected()?o+=" "+this.translate.instant("Rejected"):s.isAccepted()&&(o+=" "+this.translate.instant(s.stateName),t.push(`${this.translate.instant("Line")} ${i}: `),e.push(o))}}}),e.length>0&&o.push([{text:this.translate.instant("Summary of changes:"),style:"boldText"},{columns:[{text:t.join("\n"),width:"auto"},{text:e.join("\n"),width:"auto"}],columnGap:7}])}if(s&&o.push([{text:this.translate.instant("Decision")+":",style:"boldText"},{margin:[5,2,0,2],columns:[{width:8,canvas:this.pdfDocumentService.drawCircle(6.5,4)},{width:"auto",text:this.translate.instant("As recommendation")},{width:20,text:""},{width:8,canvas:this.pdfDocumentService.drawCircle(6.5,4)},{width:"auto",text:this.translate.instant("Divergent:")}]}]),o.length>0)return{table:{widths:["35%","65%"],body:o},margin:[0,0,0,20],layout:"metaboxLayout"}}createPreamble(t){const e=this.configService.instant("motions_preamble");return{text:""+this.translate.instant(e),margin:[0,10,0,10]}}createText(t,e,n,i){let s="";if(t.isParagraphBasedAmendment()){const n=this.changeRecoRepo.getChangeRecoOfMotion(t.id),o=this.motionRepo.getAmendmentParagraphLines(t,e,i,n,!1);for(const t of o)s+="<h3>"+this.motionRepo.getAmendmentParagraphLinesTitle(t)+"</h3>",s+=`<div class="paragraphcontext">${t.textPre}</div>`,s+=t.text,s+=`<div class="paragraphcontext">${t.textPost}</div>`}else if(t.isStatuteAmendment()){const n=this.statuteRepo.getViewModelList();s=this.motionRepo.formatStatuteAmendment(n,t,e)}else{const n=this.getUnifiedChanges(t,e),o=n.filter(t=>!t.isTitleChange()),a=n.find(t=>t.isTitleChange());if(i===S.b.Diff&&a){const e=this.changeRecoRepo.getTitleChangesAsDiff(t.title,a);s+="<span><strong>"+this.translate.instant("Changed title")+":</strong><br>"+e+"</span><br>"}const r=this.motionRepo.formatMotion(t.id,i,o,e);s+=this.linenumberingService.splitInlineElementsAtLineBreaks(r)}return this.htmlToPdfService.convertHtml(s,n)}getUnifiedChanges(t,e){const n=this.changeRecoRepo.getChangeRecoOfMotion(t.id);return n&&n.length?n.concat(this.motionRepo.getAmendmentsInstantly(t.id).flatMap(t=>{const n=this.changeRecoRepo.getChangeRecoOfMotion(t.id).filter(t=>t.showInFinalView());if(n&&n.length)return this.motionRepo.getAmendmentAmendedParagraphs(t,e,n)})).sort((t,e)=>t.getLineFrom()-e.getLineFrom()):[]}createReason(t,e){if(t.reason){const e=[];return e.push({text:this.translate.instant("Reason"),style:"heading3",margin:[0,25,0,10]}),e.push(this.htmlToPdfService.addPlainText(t.reason)),e}return{}}callListToDoc(t){t.sort((t,e)=>t.weight-e.weight);const e={text:this.translate.instant("Call list"),style:"title"},n=[[{text:this.translate.instant("Called"),style:"tableHeader"},{text:this.translate.instant("Called with"),style:"tableHeader"},{text:this.translate.instant("Submitters"),style:"tableHeader"},{text:this.translate.instant("Title"),style:"tableHeader"},{text:this.translate.instant("Recommendation"),style:"tableHeader"},{text:this.translate.instant("Notes"),style:"tableHeader"}]],i=[];let s="";return t.forEach(t=>{if(!t.sort_parent_id){const e=t.tags?t.tags.map(t=>t.name).join(", "):"";e!==s&&(i.push([{text:e,colSpan:6,style:"heading3",margin:[0,10,0,10]},"","","","",""]),s=e)}i.push(this.createCallListRow(t))}),[e,{table:{widths:["auto","auto","auto","*","auto","auto"],headerRows:1,dontBreakRows:!0,body:n.concat(i)},layout:"switchColorTableLayout"}]}createCallListRow(t){return[{text:t.sort_parent_id?"":t.identifierOrTitle},{text:t.sort_parent_id?t.identifierOrTitle:""},{text:t.submitters.length?t.submittersAsUsers.map(t=>t.short_name).join(", "):""},{text:t.title},{text:t.recommendation?this.motionRepo.getExtendedRecommendationLabel(t):""},{text:""}]}textToDocDef(t,e,n){const i=this.configService.instant("motions_line_length"),s=this.configService.instant("motions_recommendation_text_mode"),o=this.createTitle(e,s,i),a=this.createSubtitle(e),r=this.createMetaInfoTable(e,i,s,["submitters","state","category"]),c=this.htmlToPdfService.convertHtml(t,S.d.None);return[o,a,r,{text:this.translate.instant(n),style:"heading2"},c]}createComments(t,e){const n=[];for(const i of e){let e="",s="";if(i===S.f)e=this.translate.instant("Personal note"),s=t&&t.personalNote&&t.personalNote.note;else{const n=this.commentRepo.getViewModel(i),o=t.getCommentForSection(n);e=n.name,s=o&&o.comment}e&&s&&(n.push({text:e,style:"heading3",margin:[0,25,0,10]}),n.push(this.htmlToPdfService.addPlainText(s)))}return n}}return t.\u0275fac=function(e){return new(e||t)(o.dc(a.k),o.dc(s.a),o.dc(u.a),o.dc(d.a),o.dc(l.a),o.dc(c.b),o.dc(i.a),o.dc(f.a),o.dc(m.a),o.dc(b.a),o.dc(p.a),o.dc(T.a))},t.\u0275prov=o.Pb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),v=(()=>{class t{constructor(t,e,n,i,s,o){this.translate=t,this.configService=e,this.motionPdfService=n,this.pdfService=i,this.motionRepo=s,this.categoryRepo=o,this.categoryObserver=this.categoryRepo.getViewModelListBehaviorSubject()}motionListToDocDef(t,e){let n=[];const i=[],s=e.pdfOptions.includes("toc"),o=e.pdfOptions.includes("addBreaks");for(let r=0;r<t.length;++r)try{const n=this.motionPdfService.motionToDocDef(t[r],e);n[0].id=""+t[r].id,i.push(n),r<t.length-1&&o?i.push(this.pdfService.getPageBreak()):r<t.length-1&&!o&&i.push(this.pdfService.getSpacer())}catch(a){const e=`${this.translate.instant("Error during PDF creation of motion:")} ${t[r].identifierOrTitle}`;throw console.error(e+"\nDebugInfo:\n",a),new c.c(e)}return t.length>1&&(!e.pdfOptions||s)&&n.push(this.pdfService.createTitle("motions_export_title"),this.pdfService.createPreamble("motions_export_preamble"),this.createToc(t)),n=n.concat(i),n}createToc(t,e){const n=[],i=this.categoryObserver.value,s={text:this.translate.instant("Table of contents"),style:"heading2"},o=this.configService.instant("motions_export_submitter_recommendation"),a=o?this.getTocHeaderDefinition():void 0,r=o?c.a.LIGHT_HORIZONTAL_LINES:c.a.DEFAULT;if(i&&i.length){const e=[];for(const n of i.sort((t,e)=>t.weight-e.weight)){const i=t.filter(t=>n===t.category);if(i&&i.length){e.length&&e.push(this.pdfService.getPageBreak()),e.push({table:{body:[[{text:n.nameWithParentAbove,style:n.parent?"tocSubcategoryTitle":"tocCategoryTitle"}]]},layout:o?"lightHorizontalLines":"noBorders"});const t=[];for(const e of i)t.push(o?this.appendSubmittersAndRecommendation(e,c.d.CATEGORY_SECTION):this.pdfService.createTocLine(""+(e.identifier?e.identifier:""),e.title,""+e.id,c.d.CATEGORY_SECTION));e.push(this.pdfService.createTocTableDef(t,c.d.CATEGORY_SECTION,r,a?JSON.parse(JSON.stringify(a)):null))}}const s=t.filter(t=>!t.category).map(t=>this.pdfService.createTocLine(""+(t.identifier?t.identifier:""),t.title,""+t.id));s.length>0&&(e.push(this.pdfService.getPageBreak()),e.push(this.pdfService.createTocTableDef(s,c.d.CATEGORY_SECTION))),n.push(e)}else{const e=[];for(const n of t)e.push(o?this.appendSubmittersAndRecommendation(n):this.pdfService.createTocLine(""+(n.identifier?n.identifier:""),n.title,""+n.id));n.push(this.pdfService.createTocTableDef(e,c.d.CATEGORY_SECTION,r,a))}return[s,n,this.pdfService.getPageBreak()]}getTocHeaderDefinition(){return[{text:this.translate.instant("Identifier"),style:"tocHeaderRow"},{style:"tocHeaderRow",text:[`${this.translate.instant("Title")} \xb7 ${this.translate.instant("Submitters")} \xb7 `,{text:""+this.translate.instant("Recommendation"),italics:!0}]},{text:this.translate.instant("Page"),style:"tocHeaderRow",alignment:"right"}]}appendSubmittersAndRecommendation(t,e=c.d.DEFAULT){let n="",i="";i=t.state.isFinalState?this.motionRepo.getExtendedStateLabel(t):this.motionRepo.getExtendedRecommendationLabel(t);for(let s=0;s<t.submitters.length;++s)n+=s!==t.submitters.length-1?t.submitters[s].getTitle()+", ":t.submitters[s].getTitle();return this.pdfService.createTocLine(""+(t.identifier?t.identifier:""),t.title,""+t.id,e,this.pdfService.createTocLineInline(n),this.pdfService.createTocLineInline(i,!0))}}return t.\u0275fac=function(e){return new(e||t)(o.dc(a.k),o.dc(l.a),o.dc(y),o.dc(c.b),o.dc(s.a),o.dc(h.a))},t.\u0275prov=o.Pb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),L=(()=>{class t{constructor(t,e,n,i,s,o){this.translate=t,this.configService=e,this.motionPdfService=n,this.amendmentListPdfService=i,this.pdfCatalogService=s,this.pdfDocumentService=o}exportSingleMotion(t,e){const n=this.motionPdfService.motionToDocDef(t,e),i=`${this.translate.instant("Motion")} ${t.identifierOrTitle}`;this.pdfDocumentService.download(n,i,{title:i})}exportMotionCatalog(t,e){const n=this.pdfCatalogService.motionListToDocDef(t,e),i=this.configService.instant("motions_export_title"),s=this.translate.instant(i);this.pdfDocumentService.download(n,s,{title:s},e)}exportPdfCallList(t){const e=this.motionPdfService.callListToDoc(t),n=this.translate.instant("Call list");this.pdfDocumentService.downloadLandscape(e,n,{title:n})}exportPersonalNote(t,e){const n=this.motionPdfService.textToDocDef(t.note,e,"Personal note"),i=`${e.identifierOrTitle} - ${this.translate.instant("Personal note")}`;this.pdfDocumentService.download(n,i,{title:i})}exportComment(t,e){const n=e.getCommentForSection(t);if(n&&n.comment){const i=this.motionPdfService.textToDocDef(n.comment,e,t.name),s=`${e.identifierOrTitle} - ${t.name}`;this.pdfDocumentService.download(i,s,{title:s})}}exportAmendmentList(t,e){let n;n=e?`${this.translate.instant("Amendments to")} ${e.getListTitle()}`:""+this.translate.instant("Amendments");const i=this.amendmentListPdfService.overviewToDocDef(n,t);this.pdfDocumentService.downloadLandscape(i,n,{title:n})}}return t.\u0275fac=function(e){return new(e||t)(o.dc(a.k),o.dc(l.a),o.dc(y),o.dc(r),o.dc(v),o.dc(c.b))},t.\u0275prov=o.Pb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);