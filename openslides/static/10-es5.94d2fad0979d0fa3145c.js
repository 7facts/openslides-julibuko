function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1NkQ":function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n,i=r("+KbT"),s=r("Iab2"),a=r("fXoL"),o=((n=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"saveFile",value:function(e,t,r){var n={};r&&(n.type=r);var i=new Blob([e],n);Object(s.saveAs)(i,t,{autoBOM:!0})}},{key:"validateFileName",value:function(e){return new RegExp(/^[^\\\/\?%\*:\|\"\<\>]*[^\.]+$/i).test(e)}},{key:"convertTo8859_15",value:function(e){for(var t=new Uint8Array(new ArrayBuffer(e.length)),r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}}]),e}()).\u0275fac=function(e){return new(e||n)},n.\u0275prov=a.Pb({token:n,factory:n.\u0275fac,providedIn:"root"}),n),u=r("sYmb");function c(e){return void 0!==e.property}function h(e){return void 0!==e.map&&void 0!==e.label}var l,f=((l=function(){function e(t,r,n){_classCallCheck(this,e),this.exporter=t,this.translate=r,this.config=n}return _createClass(e,[{key:"export",value:function(e,t,r){var n=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=i.lineSeparator,a=void 0===s?"\r\n":s,o=i.columnSeparator,u=void 0===o?this.config.instant("general_csv_separator"):o,l=i.encoding,f=void 0===l?this.config.instant("general_csv_encoding"):l,d=[];if(a===u)throw new Error("lineseparator and columnseparator must differ from each other");var p=t.map((function(e){var t;return c(e)?t=e.label?e.label:e.property:h(e)&&(t=e.label),t=n.capitalizeTranslate(t)}));d.push(p);var m=(d=d.concat(e.map((function(e){return t.map((function(t){var r;if(c(t)){var i=e[t.property];r="number"==typeof i?i.toString(10):i?!0===i?"1":!1===i?"0":i.toString():""}else h(t)&&(r=t.map(e));return n.checkCsvTextSafety(r)}))})))).map((function(e){return e.join(u)})).join(a),g="text/csv;charset="+f;this.exporter.saveFile("iso-8859-15"===f?this.exporter.convertTo8859_15(m):m,r,g)}},{key:"checkCsvTextSafety",value:function(e){return e?'"'+e.replace(/"/g,'""').replace(/(\r\n\t|\n|\r\t)/gm,"")+'"':""}},{key:"capitalizeTranslate",value:function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);return this.translate.instant(t)}},{key:"dummyCSVExport",value:function(e,t,r){var n=this,i=this.config.instant("general_csv_separator"),s=[e.map((function(e){return n.translate.instant(e)})).join(i)],a=t.map((function(e){return e.map((function(e){var t="";return e||(t=""),t="number"==typeof e?e.toString(10):"boolean"==typeof e?e?"1":"0":e,n.checkCsvTextSafety(t)})).join(i)})),o=s.concat(a).join("\r\n"),u=this.config.instant("general_csv_encoding");this.exporter.saveFile("iso-8859-15"===u?this.exporter.convertTo8859_15(o):o,r,"text/csv")}}]),e}()).\u0275fac=function(e){return new(e||l)(a.dc(o),a.dc(u.k),a.dc(i.a))},l.\u0275prov=a.Pb({token:l,factory:l.\u0275fac,providedIn:"root"}),l)},E2rH:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("fXoL"),i=r("2Vo4"),s=r("sYmb"),a=r("P6Fj"),o=r("dNgK"),u=function(){var e=function(){function e(t,r,s){var a=this;_classCallCheck(this,e),this.translate=t,this.papa=r,this.matSnackbar=s,this.columnSeparator="",this.textSeparator='"',this.encoding="utf-8",this.encodings=[{value:"utf-8",label:"UTF 8 - Unicode"},{value:"iso-8859-1",label:"ISO 8859-1 - West European"},{value:"iso-8859-15",label:"ISO 8859-15 - West European (with \u20ac)"}],this.columnSeparators=[{label:"Comma",value:","},{label:"Semicolon",value:";"},{label:"Automatic",value:""}],this.textSeparators=[{label:'Double quotes (")',value:'"'},{label:"Single quotes (')",value:"'"},{label:"Gravis (`)",value:"`"}],this.reader=new FileReader,this._entries=[],this.newEntries=new i.a([]),this.errorEvent=new n.p,this.reader.onload=function(e){a.parseInput(e.target.result)}}return _createClass(e,[{key:"parseInput",value:function(e){var t=this;this.clearPreview();var r={header:!1,skipEmptyLines:!0,quoteChar:this.textSeparator};this.columnSeparator&&(r.delimiter=this.columnSeparator);var n=this.papa.parse(e,r).data;this.checkHeader(n.shift())&&(this._entries=n.map((function(e){return t.mapData(e)})).filter((function(e){return!!e})),this.newEntries.next(this._entries),this.updatePreview())}},{key:"setParsedEntries",value:function(e){this.clearPreview(),e&&(this._entries=e,this.newEntries.next(this._entries),this.updatePreview())}},{key:"updatePreview",value:function(){var e={total:0,new:0,duplicates:0,errors:0,done:0};this._entries.forEach((function(t){e.total+=1,"done"!==t.status?"error"!==t.status||t.hasDuplicates?t.hasDuplicates?e.duplicates+=1:"new"===t.status&&(e.new+=1):e.errors+=1:e.done+=1})),this._preview=e}},{key:"getNewEntries",value:function(){return this.newEntries.asObservable()}},{key:"onSelectFile",value:function(e){e.target.files&&1===e.target.files.length&&(this._rawFile=e.target.files[0],this.readFile())}},{key:"refreshFile",value:function(){this._rawFile&&this.readFile()}},{key:"readFile",value:function(){this.reader.readAsText(this._rawFile,this.encoding)}},{key:"checkHeader",value:function(e){return e.length<this.requiredHeaderLength?(this.matSnackbar.open(this.translate.instant("The file has too few columns to be parsed properly."),"",{duration:3e3}),this.clearPreview(),!1):(e.length<this.expectedHeader.length?this.matSnackbar.open(this.translate.instant("The file seems to have some ommitted columns. They will be considered empty."),"",{duration:3e3}):e.length>this.expectedHeader.length&&this.matSnackbar.open(this.translate.instant("The file seems to have additional columns. They will be ignored."),"",{duration:3e3}),!0)}},{key:"clearPreview",value:function(){this.clearData(),this._entries=[],this.newEntries.next([]),this._preview=null}},{key:"setError",value:function(e,t){this.errorList[t]&&(e.errors?e.errors.includes(t)||(e.errors.push(t),e.status="error"):e.errors=[t])}},{key:"verbose",value:function(e){return this.errorList[e]}},{key:"hasError",value:function(e,t){return e.errors.includes(t)}},{key:"summary",get:function(){return this._preview||this.updatePreview(),this._preview}},{key:"entries",get:function(){return this._entries}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n.dc(s.k),n.dc(a.a),n.dc(o.a))},e.\u0275prov=n.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},NpuA:function(e,t,r){var n,i;void 0===(i="function"==typeof(n=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,n=r&&/blob:/i.test((t.location||{}).protocol),i={},s=0,a={parse:function(r,n){var o=(n=n||{}).dynamicTyping||!1;if(b(o)&&(n.dynamicTypingFunction=o,o={}),n.dynamicTyping=o,n.transform=!!b(n.transform)&&n.transform,n.worker&&a.WORKERS_SUPPORTED){var u=function(){if(!a.WORKERS_SUPPORTED)return!1;var r,n,o=(r=t.URL||t.webkitURL||null,n=e.toString(),a.BLOB_URL||(a.BLOB_URL=r.createObjectURL(new Blob(["(",n,")();"],{type:"text/javascript"})))),u=new t.Worker(o);return u.onmessage=g,u.id=s++,i[u.id]=u}();return u.userStep=n.step,u.userChunk=n.chunk,u.userComplete=n.complete,u.userError=n.error,n.step=b(n.step),n.chunk=b(n.chunk),n.complete=b(n.complete),n.error=b(n.error),delete n.worker,void u.postMessage({input:r,config:n,workerId:u.id})}var d=null;return"string"==typeof r?d=n.download?new c(n):new l(n):!0===r.readable&&b(r.read)&&b(r.on)?d=new f(n):(t.File&&r instanceof File||r instanceof Object)&&(d=new h(n)),d.stream(r)},unparse:function(e,t){var r=!1,n=!0,i=",",s="\r\n",o='"',u=o+o,c=!1,h=null,l=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(c=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");h=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+o),"boolean"==typeof t.escapeFormulae&&(l=t.escapeFormulae)}}();var f=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return m(null,e,c);if("object"==typeof e[0])return m(h||d(e[0]),e,c)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:d(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),m(e.fields||[],e.data||[],c);throw new Error("Unable to serialize unrecognized input");function d(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function m(e,t,r){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(o&&n){for(var c=0;c<e.length;c++)0<c&&(a+=i),a+=g(e[c],c);0<t.length&&(a+=s)}for(var h=0;h<t.length;h++){var l=o?e.length:t[h].length,f=!1,d=o?0===Object.keys(t[h]).length:0===t[h].length;if(r&&!o&&(f="greedy"===r?""===t[h].join("").trim():1===t[h].length&&0===t[h][0].length),"greedy"===r&&o){for(var p=[],m=0;m<l;m++)p.push(t[h][u?e[m]:m]);f=""===p.join("").trim()}if(!f){for(var v=0;v<l;v++)0<v&&!d&&(a+=i),a+=g(t[h][o&&u?e[v]:v],v);h<t.length-1&&(!r||0<l&&!d)&&(a+=s)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===l&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var n=e.toString().replace(f,u);return"boolean"==typeof r&&r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(n,a.BAD_DELIMITERS)||-1<n.indexOf(i)||" "===n.charAt(0)||" "===n.charAt(n.length-1)?o+n+o:n}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!r&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=m,a.ParserHandle=d,a.NetworkStreamer=c,a.FileStreamer=h,a.StringStreamer=l,a.ReadableStreamStreamer=f,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var r=e.config||{},n=[];return this.each((function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:o.extend({},r)})})),i(),this;function i(){if(0!==n.length){var t,r,i,u=n[0];if(b(e.before)){var c=e.before(u.file,u.inputElem);if("object"==typeof c){if("abort"===c.action)return t=u.file,r=u.inputElem,i=c.reason,void(b(e.error)&&e.error({name:"AbortError"},t,r,i));if("skip"===c.action)return void s();"object"==typeof c.config&&(u.instanceConfig=o.extend(u.instanceConfig,c.config))}else if("skip"===c)return void s()}var h=u.instanceConfig.complete;u.instanceConfig.complete=function(e){b(h)&&h(e,u.file,u.inputElem),s()},a.parse(u.file,u.instanceConfig)}else b(e.complete)&&e.complete()}function s(){n.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new d(t),(this._handle.streamer=this)._config=t}).call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=o.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),o&&o.data&&(this._rowCount+=o.data.length);var c=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:o,workerId:a.WORKER_ID,finished:c});else if(b(this._config.chunk)&&!r){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!c||!b(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),c||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){b(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function c(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),u.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var n in e)t.setRequestHeader(n,e[n])}this._config.chunkSize&&t.setRequestHeader("Range","bytes="+this._start+"-"+(this._start+this._config.chunkSize-1));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){this._sendError(new Error(t.statusText||e))}}function h(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),u.call(this,e);var n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,i)}var s=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function l(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function f(e){u.call(this,e=e||{});var t=[],r=!0,n=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=k((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=k((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=k((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=k((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function d(e){var t,r,n,i=Math.pow(2,53),s=-i,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,c=this,h=0,l=0,f=!1,d=!1,g=[],v={data:[],errors:[],meta:{}};if(b(e.step)){var _=e.step;e.step=function(t){if(v=t,S())w();else{if(w(),0===v.data.length)return;h+=t.data.length,e.preview&&h>e.preview?r.abort():(v.data=v.data[0],_(v,c))}}}function k(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function w(){if(v&&n&&(E("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines)for(var t=0;t<v.data.length;t++)k(v.data[t])&&v.data.splice(t--,1);return S()&&function(){if(v)if(Array.isArray(v.data[0])){for(var t=0;S()&&t<v.data.length;t++)v.data[t].forEach(r);v.data.splice(0,1)}else v.data.forEach(r);function r(t,r){b(e.transformHeader)&&(t=e.transformHeader(t,r)),g.push(t)}}(),function(){if(!v||!e.header&&!e.dynamicTyping&&!e.transform)return v;function t(t,r){var n,i=e.header?{}:[];for(n=0;n<t.length;n++){var s=n,a=t[n];e.header&&(s=n>=g.length?"__parsed_extra":g[n]),e.transform&&(a=e.transform(a,s)),a=C(s,a),"__parsed_extra"===s?(i[s]=i[s]||[],i[s].push(a)):i[s]=a}return e.header&&(n>g.length?E("FieldMismatch","TooManyFields","Too many fields: expected "+g.length+" fields but parsed "+n,l+r):n<g.length&&E("FieldMismatch","TooFewFields","Too few fields: expected "+g.length+" fields but parsed "+n,l+r)),i}var r=1;return!v.data.length||Array.isArray(v.data[0])?(v.data=v.data.map(t),r=v.data.length):v.data=t(v.data,0),e.header&&v.meta&&(v.meta.fields=g),l+=r,v}()}function S(){return e.header&&0===g.length}function C(t,r){return n=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[n]&&(e.dynamicTyping[n]=e.dynamicTypingFunction(n)),!0===(e.dynamicTyping[n]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(o.test(e)){var t=parseFloat(e);if(s<t&&t<i)return!0}return!1}(r)?parseFloat(r):u.test(r)?new Date(r):""===r?null:r):r;var n}function E(e,t,r,n){var i={type:e,code:t,message:r};void 0!==n&&(i.row=n),v.errors.push(i)}this.parse=function(i,s,o){if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),n=(e=e.replace(r,"")).split("\r"),i=e.split("\n");if(1===n.length||1<i.length&&i[0].length<n[0].length)return"\n";for(var s=0,a=0;a<n.length;a++)"\n"===n[a][0]&&s++;return s>=n.length/2?"\r\n":"\r"}(i,e.quoteChar||'"')),n=!1,e.delimiter)b(e.delimiter)&&(e.delimiter=e.delimiter(i),v.meta.delimiter=e.delimiter);else{var u=function(t,r,n,i,s){var o,u,c,h;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var l=0;l<s.length;l++){var f=s[l],d=0,p=0,g=0;c=void 0;for(var v=new m({comments:i,delimiter:f,newline:r,preview:10}).parse(t),_=0;_<v.data.length;_++)if(n&&k(v.data[_]))g++;else{var y=v.data[_].length;p+=y,void 0!==c?0<y&&(d+=Math.abs(y-c),c=y):c=y}0<v.data.length&&(p/=v.data.length-g),(void 0===u||d<=u)&&(void 0===h||h<p)&&1.99<p&&(u=d,o=f,h=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);u.successful?e.delimiter=u.bestDelimiter:(n=!0,e.delimiter=a.DefaultDelimiter),v.meta.delimiter=e.delimiter}var c=y(e);return e.preview&&e.header&&c.preview++,t=i,r=new m(c),v=r.parse(t,s,o),w(),f?{meta:{paused:!0}}:v||{meta:{paused:!1}}},this.paused=function(){return f},this.pause=function(){f=!0,r.abort(),t=b(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){c.streamer._halted?(f=!1,c.streamer.parseChunk(t,!0)):setTimeout(c.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,r.abort(),v.meta.aborted=!0,b(e.complete)&&e.complete(v),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t,r=(e=e||{}).delimiter,n=e.newline,i=e.comments,s=e.step,o=e.preview,u=e.fastMode,c=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(c=e.escapeChar),("string"!=typeof r||-1<a.BAD_DELIMITERS.indexOf(r))&&(r=","),i===r)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<a.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var h=0,l=!1;this.parse=function(e,a,f){if("string"!=typeof e)throw new Error("Input must be a string");var d=e.length,m=r.length,g=n.length,v=i.length,_=b(s),y=[],k=[],w=[],S=h=0;if(!e)return z();if(u||!1!==u&&-1===e.indexOf(t)){for(var C=e.split(n),E=0;E<C.length;E++){if(h+=(w=C[E]).length,E!==C.length-1)h+=n.length;else if(f)return z();if(!i||w.substring(0,v)!==i){if(_){if(y=[],P(w.split(r)),U(),l)return z()}else P(w.split(r));if(o&&o<=E)return y=y.slice(0,o),z(!0)}}return z()}for(var O=e.indexOf(r,h),x=e.indexOf(n,h),R=new RegExp(p(c)+p(t),"g"),T=e.indexOf(t,h);;)if(e[h]!==t)if(i&&0===w.length&&e.substring(h,h+v)===i){if(-1===x)return z();x=e.indexOf(n,h=x+g),O=e.indexOf(r,h)}else{if(-1!==O&&(O<x||-1===x)){if(!(O<T)){w.push(e.substring(h,O)),O=e.indexOf(r,h=O+m);continue}var D=M(O,T,x);if(D&&void 0!==D.nextDelim){T=D.quoteSearch,w.push(e.substring(h,O=D.nextDelim)),O=e.indexOf(r,h=O+m);continue}}if(-1===x)break;if(w.push(e.substring(h,x)),L(x+g),_&&(U(),l))return z();if(o&&y.length>=o)return z(!0)}else for(T=h,h++;;){if(-1===(T=e.indexOf(t,T+1)))return f||k.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:y.length,index:h}),A();if(T===d-1)return A(e.substring(h,T).replace(R,t));if(t!==c||e[T+1]!==c){if(t===c||0===T||e[T-1]!==c){-1!==O&&O<T+1&&(O=e.indexOf(r,T+1)),-1!==x&&x<T+1&&(x=e.indexOf(n,T+1));var I=j(-1===x?O:Math.min(O,x));if(e[T+1+I]===r){w.push(e.substring(h,T).replace(R,t)),e[h=T+1+I+m]!==t&&(T=e.indexOf(t,h)),O=e.indexOf(r,h),x=e.indexOf(n,h);break}var F=j(x);if(e.substring(T+1+F,T+1+F+g)===n){if(w.push(e.substring(h,T).replace(R,t)),L(T+1+F+g),O=e.indexOf(r,h),T=e.indexOf(t,h),_&&(U(),l))return z();if(o&&y.length>=o)return z(!0);break}k.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:y.length,index:h}),T++}}else T++}return A();function P(e){y.push(e),S=h}function j(t){var r=0;if(-1!==t){var n=e.substring(T+1,t);n&&""===n.trim()&&(r=n.length)}return r}function A(t){return f||(void 0===t&&(t=e.substring(h)),w.push(t),h=d,P(w),_&&U()),z()}function L(t){h=t,P(w),w=[],x=e.indexOf(n,h)}function z(e){return{data:y,errors:k,meta:{delimiter:r,linebreak:n,aborted:l,truncated:!!e,cursor:S+(a||0)}}}function U(){s(z()),y=[],k=[]}function M(n,i,s){var a={nextDelim:void 0,quoteSearch:void 0},o=e.indexOf(t,i+1);if(i<n&&n<o&&(o<s||-1===s)){var u=e.indexOf(r,o);if(-1===u)return a;o<u&&(o=e.indexOf(t,o+1)),a=M(u,o,s)}else a={nextDelim:n,quoteSearch:i};return a}},this.abort=function(){l=!0},this.getCharIndex=function(){return h}}function g(e){var t=e.data,r=i[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){n=!0,v(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:_,resume:_};if(b(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!n);a++);delete t.results}else b(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!n&&v(t.workerId,t.results)}function v(e,t){var r=i[e];b(r.userComplete)&&r.userComplete(t),r.terminate(),delete i[e]}function _(){throw new Error("Not implemented.")}function y(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=y(e[r]);return t}function k(e,t){return function(){e.apply(t,arguments)}}function b(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var r=e.data;if(void 0===a.WORKER_ID&&r&&(a.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var n=a.parse(r.input,r.config);n&&t.postMessage({workerId:a.WORKER_ID,results:n,finished:!0})}}),(c.prototype=Object.create(u.prototype)).constructor=c,(h.prototype=Object.create(u.prototype)).constructor=h,(l.prototype=Object.create(l.prototype)).constructor=l,(f.prototype=Object.create(u.prototype)).constructor=f,a})?n.apply(t,[]):n)||(e.exports=i)},P6Fj:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("fXoL"),i=r("NpuA"),s=function(){var e=function(){function e(){_classCallCheck(this,e),this._papa=i}return _createClass(e,[{key:"parse",value:function(e,t){return this._papa.parse(e,t)}},{key:"unparse",value:function(e,t){return this._papa.unparse(e,t)}},{key:"setLocalChunkSize",value:function(e){this._papa.LocalChunkSize=e}},{key:"setRemoteChunkSize",value:function(e){this._papa.RemoteChunkSize=e}},{key:"setDefaultDelimiter",value:function(e){this._papa.DefaultDelimiter=e}},{key:"badDelimiters",get:function(){return this._papa.BAD_DELIMITERS}},{key:"recordSeparator",get:function(){return this._papa.RECORD_SEP}},{key:"unitSeparator",get:function(){return this._papa.UNIT_SEP}},{key:"workersSupported",get:function(){return this._papa.WORKERS_SUPPORTED}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e.ngInjectableDef=Object(n.Pb)({factory:function(){return new e},token:e,providedIn:"root"}),e}()},gjbj:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r("mrSG"),i=r("+0xr"),s=r("3UWI"),a=r("E2rH"),o=r("jDC6");function u(e){return e&&e.length?e.length<300?Object(o.a)(e):Object(o.a)(e.substring(0,147))+" [...] "+Object(o.a)(e.substring(e.length-150,e.length)):""}function c(e){return e&&e.length?e.length>50?Object(o.a)(e.substring(0,47))+"...":Object(o.a)(e):""}var h,l=r("mV3u"),f=r("fXoL"),d=r("jhN1"),p=r("sYmb"),m=r("dNgK"),g=((h=function(e){_inherits(r,e);var t=_createSuper(r);function r(e,n,i,s){var a;return _classCallCheck(this,r),(a=t.call(this,n,i,s)).importer=e,a.getLongPreview=u,a.getShortPreview=c,a.hasFile=!1,a.selectedEncoding="utf-8",a.shown="all",a.initTable(),a.importer.errorEvent.subscribe(a.raiseError),a}return _createClass(r,[{key:"ngOnInit",value:function(){this.importer.clearPreview()}},{key:"initTable",value:function(){var e=this;this.dataSource=new i.o,this.setFilter(),this.importer.getNewEntries().pipe(Object(s.a)(100)).subscribe((function(t){e.dataSource.data=t,e.hasFile=t.length>0}))}},{key:"getColumnDefinition",value:function(){return["status"].concat(this.importer.expectedHeader)}},{key:"onSelectFile",value:function(e){this.importer.onSelectFile(e)}},{key:"doImport",value:function(){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.importer.doImport();case 2:this.setFilter();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"setFilter",value:function(){this.dataSource.filter="","all"===this.shown?this.dataSource.filterPredicate=function(e,t){return!0}:"noerror"===this.shown?this.dataSource.filterPredicate=function(e,t){return"done"===e.status||"error"!==e.status||void 0}:"error"===this.shown&&(this.dataSource.filterPredicate=function(e,t){return!!e.errors.length||e.hasDuplicates}),this.dataSource.filter="X"}},{key:"getStateClass",value:function(e){switch(e.status){case"done":return"import-done import-decided";case"error":return"import-error";default:return""}}},{key:"getActionIcon",value:function(e){switch(e.status){case"error":return"block";case"new":return"";case"done":return"done";default:return"block"}}},{key:"selectColSep",value:function(e){this.importer.columnSeparator=e.value,this.importer.refreshFile()}},{key:"selectTextSep",value:function(e){this.importer.textSeparator=e.value,this.importer.refreshFile()}},{key:"selectEncoding",value:function(e){this.importer.encoding=e.value,this.importer.refreshFile()}},{key:"getVerboseError",value:function(e){return this.importer.verbose(e)}},{key:"hasError",value:function(e,t){return this.importer.hasError(e,t)}},{key:"totalCount",get:function(){return this.importer&&this.hasFile?this.importer.summary.total:null}},{key:"encodings",get:function(){return this.importer.encodings}},{key:"columnSeparators",get:function(){return this.importer.columnSeparators}},{key:"textSeparators",get:function(){return this.importer.textSeparators}},{key:"newCount",get:function(){return this.importer&&this.hasFile?this.importer.summary.new:0}},{key:"nonImportableCount",get:function(){return this.importer&&this.hasFile?this.importer.summary.errors+this.importer.summary.duplicates:0}},{key:"doneCount",get:function(){return this.importer&&this.hasFile?this.importer.summary.done:0}}]),r}(l.a)).\u0275fac=function(e){return new(e||h)(f.Tb(a.a),f.Tb(d.d),f.Tb(p.k),f.Tb(m.a))},h.\u0275dir=f.Ob({type:h,viewQuery:function(e,t){var r;1&e&&f.Zc(i.n,!0),2&e&&f.Dc(r=f.ic())&&(t.table=r.first)},features:[f.Db]}),h)}}]);