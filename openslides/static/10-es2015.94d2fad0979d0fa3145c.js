(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1NkQ":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var i=r("+KbT"),n=r("Iab2"),s=r("fXoL");let a=(()=>{class e{constructor(){}saveFile(e,t,r){const i={};r&&(i.type=r);const s=new Blob([e],i);Object(n.saveAs)(s,t,{autoBOM:!0})}validateFileName(e){return new RegExp(/^[^\\\/\?%\*:\|\"\<\>]*[^\.]+$/i).test(e)}convertTo8859_15(e){const t=new Uint8Array(new ArrayBuffer(e.length));for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var o=r("sYmb");function h(e){return void 0!==e.property}function u(e){return void 0!==e.map&&void 0!==e.label}let l=(()=>{class e{constructor(e,t,r){this.exporter=e,this.translate=t,this.config=r}export(e,t,r,{lineSeparator:i="\r\n",columnSeparator:n=this.config.instant("general_csv_separator"),encoding:s=this.config.instant("general_csv_encoding")}={}){let a=[];if(i===n)throw new Error("lineseparator and columnseparator must differ from each other");const o=t.map(e=>{let t;return h(e)?t=e.label?e.label:e.property:u(e)&&(t=e.label),t=this.capitalizeTranslate(t),t});a.push(o),a=a.concat(e.map(e=>t.map(t=>{let r;if(h(t)){const i=e[t.property];r="number"==typeof i?i.toString(10):i?!0===i?"1":!1===i?"0":i.toString():""}else u(t)&&(r=t.map(e));return this.checkCsvTextSafety(r)})));const l=a.map(e=>e.join(n)).join(i),c="text/csv;charset="+s;this.exporter.saveFile("iso-8859-15"===s?this.exporter.convertTo8859_15(l):l,r,c)}checkCsvTextSafety(e){return e?'"'+e.replace(/"/g,'""').replace(/(\r\n\t|\n|\r\t)/gm,"")+'"':""}capitalizeTranslate(e){const t=e.charAt(0).toUpperCase()+e.slice(1);return this.translate.instant(t)}dummyCSVExport(e,t,r){const i=this.config.instant("general_csv_separator"),n=[e.map(e=>this.translate.instant(e)).join(i)],s=t.map(e=>e.map(e=>{let t="";return e||(t=""),t="number"==typeof e?e.toString(10):"boolean"==typeof e?e?"1":"0":e,this.checkCsvTextSafety(t)}).join(i)),a=n.concat(s).join("\r\n"),o=this.config.instant("general_csv_encoding");this.exporter.saveFile("iso-8859-15"===o?this.exporter.convertTo8859_15(a):a,r,"text/csv")}}return e.\u0275fac=function(t){return new(t||e)(s.dc(a),s.dc(o.k),s.dc(i.a))},e.\u0275prov=s.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},E2rH:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var i=r("fXoL"),n=r("2Vo4"),s=r("sYmb"),a=r("P6Fj"),o=r("dNgK");let h=(()=>{class e{constructor(e,t,r){this.translate=e,this.papa=t,this.matSnackbar=r,this.columnSeparator="",this.textSeparator='"',this.encoding="utf-8",this.encodings=[{value:"utf-8",label:"UTF 8 - Unicode"},{value:"iso-8859-1",label:"ISO 8859-1 - West European"},{value:"iso-8859-15",label:"ISO 8859-15 - West European (with \u20ac)"}],this.columnSeparators=[{label:"Comma",value:","},{label:"Semicolon",value:";"},{label:"Automatic",value:""}],this.textSeparators=[{label:'Double quotes (")',value:'"'},{label:"Single quotes (')",value:"'"},{label:"Gravis (`)",value:"`"}],this.reader=new FileReader,this._entries=[],this.newEntries=new n.a([]),this.errorEvent=new i.p,this.reader.onload=e=>{this.parseInput(e.target.result)}}get summary(){return this._preview||this.updatePreview(),this._preview}get entries(){return this._entries}parseInput(e){this.clearPreview();const t={header:!1,skipEmptyLines:!0,quoteChar:this.textSeparator};this.columnSeparator&&(t.delimiter=this.columnSeparator);const r=this.papa.parse(e,t).data;this.checkHeader(r.shift())&&(this._entries=r.map(e=>this.mapData(e)).filter(e=>!!e),this.newEntries.next(this._entries),this.updatePreview())}setParsedEntries(e){this.clearPreview(),e&&(this._entries=e,this.newEntries.next(this._entries),this.updatePreview())}updatePreview(){const e={total:0,new:0,duplicates:0,errors:0,done:0};this._entries.forEach(t=>{e.total+=1,"done"!==t.status?"error"!==t.status||t.hasDuplicates?t.hasDuplicates?e.duplicates+=1:"new"===t.status&&(e.new+=1):e.errors+=1:e.done+=1}),this._preview=e}getNewEntries(){return this.newEntries.asObservable()}onSelectFile(e){e.target.files&&1===e.target.files.length&&(this._rawFile=e.target.files[0],this.readFile())}refreshFile(){this._rawFile&&this.readFile()}readFile(){this.reader.readAsText(this._rawFile,this.encoding)}checkHeader(e){return e.length<this.requiredHeaderLength?(this.matSnackbar.open(this.translate.instant("The file has too few columns to be parsed properly."),"",{duration:3e3}),this.clearPreview(),!1):(e.length<this.expectedHeader.length?this.matSnackbar.open(this.translate.instant("The file seems to have some ommitted columns. They will be considered empty."),"",{duration:3e3}):e.length>this.expectedHeader.length&&this.matSnackbar.open(this.translate.instant("The file seems to have additional columns. They will be ignored."),"",{duration:3e3}),!0)}clearPreview(){this.clearData(),this._entries=[],this.newEntries.next([]),this._preview=null}setError(e,t){this.errorList[t]&&(e.errors?e.errors.includes(t)||(e.errors.push(t),e.status="error"):e.errors=[t])}verbose(e){return this.errorList[e]}hasError(e,t){return e.errors.includes(t)}}return e.\u0275fac=function(t){return new(t||e)(i.dc(s.k),i.dc(a.a),i.dc(o.a))},e.\u0275prov=i.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},NpuA:function(e,t,r){var i,n;void 0===(n="function"==typeof(i=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,i=r&&/blob:/i.test((t.location||{}).protocol),n={},s=0,a={parse:function(r,i){var o=(i=i||{}).dynamicTyping||!1;if(w(o)&&(i.dynamicTypingFunction=o,o={}),i.dynamicTyping=o,i.transform=!!w(i.transform)&&i.transform,i.worker&&a.WORKERS_SUPPORTED){var h=function(){if(!a.WORKERS_SUPPORTED)return!1;var r,i,o=(r=t.URL||t.webkitURL||null,i=e.toString(),a.BLOB_URL||(a.BLOB_URL=r.createObjectURL(new Blob(["(",i,")();"],{type:"text/javascript"})))),h=new t.Worker(o);return h.onmessage=g,h.id=s++,n[h.id]=h}();return h.userStep=i.step,h.userChunk=i.chunk,h.userComplete=i.complete,h.userError=i.error,i.step=w(i.step),i.chunk=w(i.chunk),i.complete=w(i.complete),i.error=w(i.error),delete i.worker,void h.postMessage({input:r,config:i,workerId:h.id})}var f=null;return"string"==typeof r?f=i.download?new u(i):new c(i):!0===r.readable&&w(r.read)&&w(r.on)?f=new d(i):(t.File&&r instanceof File||r instanceof Object)&&(f=new l(i)),f.stream(r)},unparse:function(e,t){var r=!1,i=!0,n=",",s="\r\n",o='"',h=o+o,u=!1,l=null,c=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(u=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");l=t.columns}void 0!==t.escapeChar&&(h=t.escapeChar+o),"boolean"==typeof t.escapeFormulae&&(c=t.escapeFormulae)}}();var d=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return m(null,e,u);if("object"==typeof e[0])return m(l||f(e[0]),e,u)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:f(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),m(e.fields||[],e.data||[],u);throw new Error("Unable to serialize unrecognized input");function f(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function m(e,t,r){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,h=!Array.isArray(t[0]);if(o&&i){for(var u=0;u<e.length;u++)0<u&&(a+=n),a+=g(e[u],u);0<t.length&&(a+=s)}for(var l=0;l<t.length;l++){var c=o?e.length:t[l].length,d=!1,f=o?0===Object.keys(t[l]).length:0===t[l].length;if(r&&!o&&(d="greedy"===r?""===t[l].join("").trim():1===t[l].length&&0===t[l][0].length),"greedy"===r&&o){for(var p=[],m=0;m<c;m++)p.push(t[l][h?e[m]:m]);d=""===p.join("").trim()}if(!d){for(var _=0;_<c;_++)0<_&&!f&&(a+=n),a+=g(t[l][o&&h?e[_]:_],_);l<t.length-1&&(!r||0<c&&!f)&&(a+=s)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===c&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var i=e.toString().replace(d,h);return"boolean"==typeof r&&r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(i,a.BAD_DELIMITERS)||-1<i.indexOf(n)||" "===i.charAt(0)||" "===i.charAt(i.length-1)?o+i+o:i}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!r&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=m,a.ParserHandle=f,a.NetworkStreamer=u,a.FileStreamer=l,a.StringStreamer=c,a.ReadableStreamStreamer=d,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var r=e.config||{},i=[];return this.each((function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)i.push({file:this.files[n],inputElem:this,instanceConfig:o.extend({},r)})})),n(),this;function n(){if(0!==i.length){var t,r,n,h=i[0];if(w(e.before)){var u=e.before(h.file,h.inputElem);if("object"==typeof u){if("abort"===u.action)return t=h.file,r=h.inputElem,n=u.reason,void(w(e.error)&&e.error({name:"AbortError"},t,r,n));if("skip"===u.action)return void s();"object"==typeof u.config&&(h.instanceConfig=o.extend(h.instanceConfig,u.config))}else if("skip"===u)return void s()}var l=h.instanceConfig.complete;h.instanceConfig.complete=function(e){w(l)&&l(e,h.file,h.inputElem),s()},a.parse(h.file,h.instanceConfig)}else w(e.complete)&&e.complete()}function s(){i.splice(0,1),n()}}}function h(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new f(t),(this._handle.streamer=this)._config=t}).call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&w(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);void 0!==n&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var h=o.meta.cursor;this._finished||(this._partialLine=s.substring(h-this._baseIndex),this._baseIndex=h),o&&o.data&&(this._rowCount+=o.data.length);var u=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(i)t.postMessage({results:o,workerId:a.WORKER_ID,finished:u});else if(w(this._config.chunk)&&!r){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!u||!w(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),u||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){w(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),h.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=y(this._chunkLoaded,this),t.onerror=y(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var i in e)t.setRequestHeader(i,e[i])}this._config.chunkSize&&t.setRequestHeader("Range","bytes="+this._start+"-"+(this._start+this._config.chunkSize-1));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){this._sendError(new Error(t.statusText||e))}}function l(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),h.call(this,e);var i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=y(this._chunkLoaded,this),t.onerror=y(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);i||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function c(e){var t;h.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function d(e){h.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=y((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=y((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=y((function(){this._streamCleanUp(),i=!0,this._streamData("")}),this),this._streamCleanUp=y((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function f(e){var t,r,i,n=Math.pow(2,53),s=-n,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,h=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,u=this,l=0,c=0,d=!1,f=!1,g=[],_={data:[],errors:[],meta:{}};if(w(e.step)){var v=e.step;e.step=function(t){if(_=t,S())k();else{if(k(),0===_.data.length)return;l+=t.data.length,e.preview&&l>e.preview?r.abort():(_.data=_.data[0],v(_,u))}}}function y(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function k(){if(_&&i&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines)for(var t=0;t<_.data.length;t++)y(_.data[t])&&_.data.splice(t--,1);return S()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;S()&&t<_.data.length;t++)_.data[t].forEach(r);_.data.splice(0,1)}else _.data.forEach(r);function r(t,r){w(e.transformHeader)&&(t=e.transformHeader(t,r)),g.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,r){var i,n=e.header?{}:[];for(i=0;i<t.length;i++){var s=i,a=t[i];e.header&&(s=i>=g.length?"__parsed_extra":g[i]),e.transform&&(a=e.transform(a,s)),a=E(s,a),"__parsed_extra"===s?(n[s]=n[s]||[],n[s].push(a)):n[s]=a}return e.header&&(i>g.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+g.length+" fields but parsed "+i,c+r):i<g.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+g.length+" fields but parsed "+i,c+r)),n}var r=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),r=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=g),c+=r,_}()}function S(){return e.header&&0===g.length}function E(t,r){return i=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[i]&&(e.dynamicTyping[i]=e.dynamicTypingFunction(i)),!0===(e.dynamicTyping[i]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(o.test(e)){var t=parseFloat(e);if(s<t&&t<n)return!0}return!1}(r)?parseFloat(r):h.test(r)?new Date(r):""===r?null:r):r;var i}function C(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),_.errors.push(n)}this.parse=function(n,s,o){if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n");if(1===i.length||1<n.length&&n[0].length<i[0].length)return"\n";for(var s=0,a=0;a<i.length;a++)"\n"===i[a][0]&&s++;return s>=i.length/2?"\r\n":"\r"}(n,e.quoteChar||'"')),i=!1,e.delimiter)w(e.delimiter)&&(e.delimiter=e.delimiter(n),_.meta.delimiter=e.delimiter);else{var h=function(t,r,i,n,s){var o,h,u,l;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var c=0;c<s.length;c++){var d=s[c],f=0,p=0,g=0;u=void 0;for(var _=new m({comments:n,delimiter:d,newline:r,preview:10}).parse(t),v=0;v<_.data.length;v++)if(i&&y(_.data[v]))g++;else{var b=_.data[v].length;p+=b,void 0!==u?0<b&&(f+=Math.abs(b-u),u=b):u=b}0<_.data.length&&(p/=_.data.length-g),(void 0===h||f<=h)&&(void 0===l||l<p)&&1.99<p&&(h=f,o=d,l=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);h.successful?e.delimiter=h.bestDelimiter:(i=!0,e.delimiter=a.DefaultDelimiter),_.meta.delimiter=e.delimiter}var u=b(e);return e.preview&&e.header&&u.preview++,t=n,r=new m(u),_=r.parse(t,s,o),k(),d?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,r.abort(),t=w(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){u.streamer._halted?(d=!1,u.streamer.parseChunk(t,!0)):setTimeout(u.resume,3)},this.aborted=function(){return f},this.abort=function(){f=!0,r.abort(),_.meta.aborted=!0,w(e.complete)&&e.complete(_),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t,r=(e=e||{}).delimiter,i=e.newline,n=e.comments,s=e.step,o=e.preview,h=e.fastMode,u=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(u=e.escapeChar),("string"!=typeof r||-1<a.BAD_DELIMITERS.indexOf(r))&&(r=","),n===r)throw new Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==i&&"\r"!==i&&"\r\n"!==i&&(i="\n");var l=0,c=!1;this.parse=function(e,a,d){if("string"!=typeof e)throw new Error("Input must be a string");var f=e.length,m=r.length,g=i.length,_=n.length,v=w(s),b=[],y=[],k=[],S=l=0;if(!e)return z();if(h||!1!==h&&-1===e.indexOf(t)){for(var E=e.split(i),C=0;C<E.length;C++){if(l+=(k=E[C]).length,C!==E.length-1)l+=i.length;else if(d)return z();if(!n||k.substring(0,_)!==n){if(v){if(b=[],A(k.split(r)),U(),c)return z()}else A(k.split(r));if(o&&o<=C)return b=b.slice(0,o),z(!0)}}return z()}for(var x=e.indexOf(r,l),R=e.indexOf(i,l),O=new RegExp(p(u)+p(t),"g"),T=e.indexOf(t,l);;)if(e[l]!==t)if(n&&0===k.length&&e.substring(l,l+_)===n){if(-1===R)return z();R=e.indexOf(i,l=R+g),x=e.indexOf(r,l)}else{if(-1!==x&&(x<R||-1===R)){if(!(x<T)){k.push(e.substring(l,x)),x=e.indexOf(r,l=x+m);continue}var D=M(x,T,R);if(D&&void 0!==D.nextDelim){T=D.quoteSearch,k.push(e.substring(l,x=D.nextDelim)),x=e.indexOf(r,l=x+m);continue}}if(-1===R)break;if(k.push(e.substring(l,R)),P(R+g),v&&(U(),c))return z();if(o&&b.length>=o)return z(!0)}else for(T=l,l++;;){if(-1===(T=e.indexOf(t,T+1)))return d||y.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:l}),j();if(T===f-1)return j(e.substring(l,T).replace(O,t));if(t!==u||e[T+1]!==u){if(t===u||0===T||e[T-1]!==u){-1!==x&&x<T+1&&(x=e.indexOf(r,T+1)),-1!==R&&R<T+1&&(R=e.indexOf(i,T+1));var I=L(-1===R?x:Math.min(x,R));if(e[T+1+I]===r){k.push(e.substring(l,T).replace(O,t)),e[l=T+1+I+m]!==t&&(T=e.indexOf(t,l)),x=e.indexOf(r,l),R=e.indexOf(i,l);break}var F=L(R);if(e.substring(T+1+F,T+1+F+g)===i){if(k.push(e.substring(l,T).replace(O,t)),P(T+1+F+g),x=e.indexOf(r,l),T=e.indexOf(t,l),v&&(U(),c))return z();if(o&&b.length>=o)return z(!0);break}y.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:b.length,index:l}),T++}}else T++}return j();function A(e){b.push(e),S=l}function L(t){var r=0;if(-1!==t){var i=e.substring(T+1,t);i&&""===i.trim()&&(r=i.length)}return r}function j(t){return d||(void 0===t&&(t=e.substring(l)),k.push(t),l=f,A(k),v&&U()),z()}function P(t){l=t,A(k),k=[],R=e.indexOf(i,l)}function z(e){return{data:b,errors:y,meta:{delimiter:r,linebreak:i,aborted:c,truncated:!!e,cursor:S+(a||0)}}}function U(){s(z()),b=[],y=[]}function M(i,n,s){var a={nextDelim:void 0,quoteSearch:void 0},o=e.indexOf(t,n+1);if(n<i&&i<o&&(o<s||-1===s)){var h=e.indexOf(r,o);if(-1===h)return a;o<h&&(o=e.indexOf(t,o+1)),a=M(h,o,s)}else a={nextDelim:i,quoteSearch:n};return a}},this.abort=function(){c=!0},this.getCharIndex=function(){return l}}function g(e){var t=e.data,r=n[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){i=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(w(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!i);a++);delete t.results}else w(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!i&&_(t.workerId,t.results)}function _(e,t){var r=n[e];w(r.userComplete)&&r.userComplete(t),r.terminate(),delete n[e]}function v(){throw new Error("Not implemented.")}function b(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=b(e[r]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function w(e){return"function"==typeof e}return i&&(t.onmessage=function(e){var r=e.data;if(void 0===a.WORKER_ID&&r&&(a.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var i=a.parse(r.input,r.config);i&&t.postMessage({workerId:a.WORKER_ID,results:i,finished:!0})}}),(u.prototype=Object.create(h.prototype)).constructor=u,(l.prototype=Object.create(h.prototype)).constructor=l,(c.prototype=Object.create(c.prototype)).constructor=c,(d.prototype=Object.create(h.prototype)).constructor=d,a})?i.apply(t,[]):i)||(e.exports=n)},P6Fj:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r("fXoL"),n=r("NpuA");let s=(()=>{class e{constructor(){this._papa=n}parse(e,t){return this._papa.parse(e,t)}unparse(e,t){return this._papa.unparse(e,t)}setLocalChunkSize(e){this._papa.LocalChunkSize=e}setRemoteChunkSize(e){this._papa.RemoteChunkSize=e}setDefaultDelimiter(e){this._papa.DefaultDelimiter=e}get badDelimiters(){return this._papa.BAD_DELIMITERS}get recordSeparator(){return this._papa.RECORD_SEP}get unitSeparator(){return this._papa.UNIT_SEP}get workersSupported(){return this._papa.WORKERS_SUPPORTED}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e.ngInjectableDef=Object(i.Pb)({factory:function(){return new e},token:e,providedIn:"root"}),e})()},gjbj:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var i=r("mrSG"),n=r("+0xr"),s=r("3UWI"),a=r("E2rH"),o=r("jDC6");function h(e){return e&&e.length?e.length<300?Object(o.a)(e):Object(o.a)(e.substring(0,147))+" [...] "+Object(o.a)(e.substring(e.length-150,e.length)):""}function u(e){return e&&e.length?e.length>50?Object(o.a)(e.substring(0,47))+"...":Object(o.a)(e):""}var l=r("mV3u"),c=r("fXoL"),d=r("jhN1"),f=r("sYmb"),p=r("dNgK");let m=(()=>{class e extends l.a{constructor(e,t,r,i){super(t,r,i),this.importer=e,this.getLongPreview=h,this.getShortPreview=u,this.hasFile=!1,this.selectedEncoding="utf-8",this.shown="all",this.initTable(),this.importer.errorEvent.subscribe(this.raiseError)}get totalCount(){return this.importer&&this.hasFile?this.importer.summary.total:null}get encodings(){return this.importer.encodings}get columnSeparators(){return this.importer.columnSeparators}get textSeparators(){return this.importer.textSeparators}get newCount(){return this.importer&&this.hasFile?this.importer.summary.new:0}get nonImportableCount(){return this.importer&&this.hasFile?this.importer.summary.errors+this.importer.summary.duplicates:0}get doneCount(){return this.importer&&this.hasFile?this.importer.summary.done:0}ngOnInit(){this.importer.clearPreview()}initTable(){this.dataSource=new n.o,this.setFilter(),this.importer.getNewEntries().pipe(Object(s.a)(100)).subscribe(e=>{this.dataSource.data=e,this.hasFile=e.length>0})}getColumnDefinition(){return["status"].concat(this.importer.expectedHeader)}onSelectFile(e){this.importer.onSelectFile(e)}doImport(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.importer.doImport(),this.setFilter()}))}setFilter(){this.dataSource.filter="","all"===this.shown?this.dataSource.filterPredicate=(e,t)=>!0:"noerror"===this.shown?this.dataSource.filterPredicate=(e,t)=>"done"===e.status||"error"!==e.status||void 0:"error"===this.shown&&(this.dataSource.filterPredicate=(e,t)=>!!e.errors.length||e.hasDuplicates),this.dataSource.filter="X"}getStateClass(e){switch(e.status){case"done":return"import-done import-decided";case"error":return"import-error";default:return""}}getActionIcon(e){switch(e.status){case"error":return"block";case"new":return"";case"done":return"done";default:return"block"}}selectColSep(e){this.importer.columnSeparator=e.value,this.importer.refreshFile()}selectTextSep(e){this.importer.textSeparator=e.value,this.importer.refreshFile()}selectEncoding(e){this.importer.encoding=e.value,this.importer.refreshFile()}getVerboseError(e){return this.importer.verbose(e)}hasError(e,t){return this.importer.hasError(e,t)}}return e.\u0275fac=function(t){return new(t||e)(c.Tb(a.a),c.Tb(d.d),c.Tb(f.k),c.Tb(p.a))},e.\u0275dir=c.Ob({type:e,viewQuery:function(e,t){var r;1&e&&c.Zc(n.n,!0),2&e&&c.Dc(r=c.ic())&&(t.table=r.first)},features:[c.Db]}),e})()}}]);