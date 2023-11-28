/* THIS IS A GENERATED/BUNDLED FILE BY ESBUILD see https://github.com/BambusControl/obsidian-unicode-search for the source */
"use strict";var st=Object.create;var ve=Object.defineProperty,ot=Object.defineProperties,ct=Object.getOwnPropertyDescriptor,ut=Object.getOwnPropertyDescriptors,ht=Object.getOwnPropertyNames,Le=Object.getOwnPropertySymbols,Fe=Object.getPrototypeOf,ze=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable,lt=Reflect.get;var Me=(s,r,a)=>r in s?ve(s,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[r]=a,he=(s,r)=>{for(var a in r||(r={}))ze.call(r,a)&&Me(s,a,r[a]);if(Le)for(var a of Le(r))dt.call(r,a)&&Me(s,a,r[a]);return s},Ee=(s,r)=>ot(s,ut(r));var ft=(s,r)=>()=>(r||s((r={exports:{}}).exports,r),r.exports),pt=(s,r)=>{for(var a in r)ve(s,a,{get:r[a],enumerable:!0})},qe=(s,r,a,c)=>{if(r&&typeof r=="object"||typeof r=="function")for(let m of ht(r))!ze.call(s,m)&&m!==a&&ve(s,m,{get:()=>r[m],enumerable:!(c=ct(r,m))||c.enumerable});return s};var Be=(s,r,a)=>(a=s!=null?st(Fe(s)):{},qe(r||!s||!s.__esModule?ve(a,"default",{value:s,enumerable:!0}):a,s)),mt=s=>qe(ve({},"__esModule",{value:!0}),s);var He=(s,r,a)=>lt(Fe(s),a,r);var U=(s,r,a)=>new Promise((c,m)=>{var H=v=>{try{x(a.next(v))}catch(B){m(B)}},n=v=>{try{x(a.throw(v))}catch(B){m(B)}},x=v=>v.done?c(v.value):Promise.resolve(v.value).then(H,n);x((a=a.apply(s,r)).next())});var tt=ft((Oe,Pe)=>{(function(s,r){typeof define=="function"&&define.amd?define([],r):typeof Pe=="object"&&typeof Oe!="undefined"?Pe.exports=r():s.Papa=r()})(Oe,function s(){"use strict";var r=typeof self!="undefined"?self:typeof window!="undefined"?window:r!==void 0?r:{},a=!r.document&&!!r.postMessage,c=r.IS_PAPA_WORKER||!1,m={},H=0,n={parse:function(t,e){var i=(e=e||{}).dynamicTyping||!1;if(y(i)&&(e.dynamicTypingFunction=i,i={}),e.dynamicTyping=i,e.transform=!!y(e.transform)&&e.transform,e.worker&&n.WORKERS_SUPPORTED){var o=function(){if(!n.WORKERS_SUPPORTED)return!1;var p=(L=r.URL||r.webkitURL||null,w=s.toString(),n.BLOB_URL||(n.BLOB_URL=L.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",w,")();"],{type:"text/javascript"})))),g=new r.Worker(p),L,w;return g.onmessage=nt,g.id=H++,m[g.id]=g}();return o.userStep=e.step,o.userChunk=e.chunk,o.userComplete=e.complete,o.userError=e.error,e.step=y(e.step),e.chunk=y(e.chunk),e.complete=y(e.complete),e.error=y(e.error),delete e.worker,void o.postMessage({input:t,config:e,workerId:o.id})}var h=null;return n.NODE_STREAM_INPUT,typeof t=="string"?(t=function(p){return p.charCodeAt(0)===65279?p.slice(1):p}(t),h=e.download?new B(e):new se(e)):t.readable===!0&&y(t.read)&&y(t.on)?h=new oe(e):(r.File&&t instanceof File||t instanceof Object)&&(h=new V(e)),h.stream(t)},unparse:function(t,e){var i=!1,o=!0,h=",",p=`\r
`,g='"',L=g+g,w=!1,d=null,R=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||n.BAD_DELIMITERS.filter(function(u){return e.delimiter.indexOf(u)!==-1}).length||(h=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(i=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(w=e.skipEmptyLines),typeof e.newline=="string"&&(p=e.newline),typeof e.quoteChar=="string"&&(g=e.quoteChar),typeof e.header=="boolean"&&(o=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");d=e.columns}e.escapeChar!==void 0&&(L=e.escapeChar+g),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(R=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var f=new RegExp(ge(g),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return $(null,t,w);if(typeof t[0]=="object")return $(d||Object.keys(t[0]),t,w)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||d),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),$(t.fields||[],t.data||[],w);throw new Error("Unable to serialize unrecognized input");function $(u,S,z){var D="";typeof u=="string"&&(u=JSON.parse(u)),typeof S=="string"&&(S=JSON.parse(S));var M=Array.isArray(u)&&0<u.length,A=!Array.isArray(S[0]);if(M&&o){for(var N=0;N<u.length;N++)0<N&&(D+=h),D+=F(u[N],N);0<S.length&&(D+=p)}for(var l=0;l<S.length;l++){var _=M?u.length:S[l].length,k=!1,P=M?Object.keys(S[l]).length===0:S[l].length===0;if(z&&!M&&(k=z==="greedy"?S[l].join("").trim()==="":S[l].length===1&&S[l][0].length===0),z==="greedy"&&M){for(var b=[],q=0;q<_;q++){var I=A?u[q]:q;b.push(S[l][I])}k=b.join("").trim()===""}if(!k){for(var E=0;E<_;E++){0<E&&!P&&(D+=h);var G=M&&A?u[E]:E;D+=F(S[l][G],E)}l<S.length-1&&(!z||0<_&&!P)&&(D+=p)}}return D}function F(u,S){if(u==null)return"";if(u.constructor===Date)return JSON.stringify(u).slice(1,25);var z=!1;R&&typeof u=="string"&&R.test(u)&&(u="'"+u,z=!0);var D=u.toString().replace(f,L);return(z=z||i===!0||typeof i=="function"&&i(u,S)||Array.isArray(i)&&i[S]||function(M,A){for(var N=0;N<A.length;N++)if(-1<M.indexOf(A[N]))return!0;return!1}(D,n.BAD_DELIMITERS)||-1<D.indexOf(h)||D.charAt(0)===" "||D.charAt(D.length-1)===" ")?g+D+g:D}}};if(n.RECORD_SEP=String.fromCharCode(30),n.UNIT_SEP=String.fromCharCode(31),n.BYTE_ORDER_MARK="\uFEFF",n.BAD_DELIMITERS=["\r",`
`,'"',n.BYTE_ORDER_MARK],n.WORKERS_SUPPORTED=!a&&!!r.Worker,n.NODE_STREAM_INPUT=1,n.LocalChunkSize=10485760,n.RemoteChunkSize=5242880,n.DefaultDelimiter=",",n.Parser=Te,n.ParserHandle=ye,n.NetworkStreamer=B,n.FileStreamer=V,n.StringStreamer=se,n.ReadableStreamStreamer=oe,r.jQuery){var x=r.jQuery;x.fn.parse=function(t){var e=t.config||{},i=[];return this.each(function(p){if(!(x(this).prop("tagName").toUpperCase()==="INPUT"&&x(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var g=0;g<this.files.length;g++)i.push({file:this.files[g],inputElem:this,instanceConfig:x.extend({},e)})}),o(),this;function o(){if(i.length!==0){var p,g,L,w,d=i[0];if(y(t.before)){var R=t.before(d.file,d.inputElem);if(typeof R=="object"){if(R.action==="abort")return p="AbortError",g=d.file,L=d.inputElem,w=R.reason,void(y(t.error)&&t.error({name:p},g,L,w));if(R.action==="skip")return void h();typeof R.config=="object"&&(d.instanceConfig=x.extend(d.instanceConfig,R.config))}else if(R==="skip")return void h()}var f=d.instanceConfig.complete;d.instanceConfig.complete=function($){y(f)&&f($,d.file,d.inputElem),h()},n.parse(d.file,d.instanceConfig)}else y(t.complete)&&t.complete()}function h(){i.splice(0,1),o()}}}function v(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var i=we(e);i.chunkSize=parseInt(i.chunkSize),e.step||e.chunk||(i.chunkSize=null),this._handle=new ye(i),(this._handle.streamer=this)._config=i}.call(this,t),this.parseChunk=function(e,i){if(this.isFirstChunk&&y(this._config.beforeFirstChunk)){var o=this._config.beforeFirstChunk(e);o!==void 0&&(e=o)}this.isFirstChunk=!1,this._halted=!1;var h=this._partialLine+e;this._partialLine="";var p=this._handle.parse(h,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var g=p.meta.cursor;this._finished||(this._partialLine=h.substring(g-this._baseIndex),this._baseIndex=g),p&&p.data&&(this._rowCount+=p.data.length);var L=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(c)r.postMessage({results:p,workerId:n.WORKER_ID,finished:L});else if(y(this._config.chunk)&&!i){if(this._config.chunk(p,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);p=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(p.data),this._completeResults.errors=this._completeResults.errors.concat(p.errors),this._completeResults.meta=p.meta),this._completed||!L||!y(this._config.complete)||p&&p.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),L||p&&p.meta.paused||this._nextChunk(),p}this._halted=!0},this._sendError=function(e){y(this._config.error)?this._config.error(e):c&&this._config.error&&r.postMessage({workerId:n.WORKER_ID,error:e,finished:!1})}}function B(t){var e;(t=t||{}).chunkSize||(t.chunkSize=n.RemoteChunkSize),v.call(this,t),this._nextChunk=a?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(i){this._input=i,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),a||(e.onload=re(this._chunkLoaded,this),e.onerror=re(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!a),this._config.downloadRequestHeaders){var i=this._config.downloadRequestHeaders;for(var o in i)e.setRequestHeader(o,i[o])}if(this._config.chunkSize){var h=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+h)}try{e.send(this._config.downloadRequestBody)}catch(p){this._chunkError(p.message)}a&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(i){var o=i.getResponseHeader("Content-Range");return o===null?-1:parseInt(o.substring(o.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(i){var o=e.statusText||i;this._sendError(new Error(o))}}function V(t){var e,i;(t=t||{}).chunkSize||(t.chunkSize=n.LocalChunkSize),v.call(this,t);var o=typeof FileReader!="undefined";this.stream=function(h){this._input=h,i=h.slice||h.webkitSlice||h.mozSlice,o?((e=new FileReader).onload=re(this._chunkLoaded,this),e.onerror=re(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var h=this._input;if(this._config.chunkSize){var p=Math.min(this._start+this._config.chunkSize,this._input.size);h=i.call(h,this._start,p)}var g=e.readAsText(h,this._config.encoding);o||this._chunkLoaded({target:{result:g}})},this._chunkLoaded=function(h){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(h.target.result)},this._chunkError=function(){this._sendError(e.error)}}function se(t){var e;v.call(this,t=t||{}),this.stream=function(i){return e=i,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var i,o=this._config.chunkSize;return o?(i=e.substring(0,o),e=e.substring(o)):(i=e,e=""),this._finished=!e,this.parseChunk(i)}}}function oe(t){v.call(this,t=t||{});var e=[],i=!0,o=!1;this.pause=function(){v.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){v.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(h){this._input=h,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){o&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):i=!0},this._streamData=re(function(h){try{e.push(typeof h=="string"?h:h.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(p){this._streamError(p)}},this),this._streamError=re(function(h){this._streamCleanUp(),this._sendError(h)},this),this._streamEnd=re(function(){this._streamCleanUp(),o=!0,this._streamData("")},this),this._streamCleanUp=re(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function ye(t){var e,i,o,h=Math.pow(2,53),p=-h,g=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,L=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,w=this,d=0,R=0,f=!1,$=!1,F=[],u={data:[],errors:[],meta:{}};if(y(t.step)){var S=t.step;t.step=function(l){if(u=l,M())D();else{if(D(),u.data.length===0)return;d+=l.data.length,t.preview&&d>t.preview?i.abort():(u.data=u.data[0],S(u,w))}}}function z(l){return t.skipEmptyLines==="greedy"?l.join("").trim()==="":l.length===1&&l[0].length===0}function D(){return u&&o&&(N("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+n.DefaultDelimiter+"'"),o=!1),t.skipEmptyLines&&(u.data=u.data.filter(function(l){return!z(l)})),M()&&function(){if(!u)return;function l(k,P){y(t.transformHeader)&&(k=t.transformHeader(k,P)),F.push(k)}if(Array.isArray(u.data[0])){for(var _=0;M()&&_<u.data.length;_++)u.data[_].forEach(l);u.data.splice(0,1)}else u.data.forEach(l)}(),function(){if(!u||!t.header&&!t.dynamicTyping&&!t.transform)return u;function l(k,P){var b,q=t.header?{}:[];for(b=0;b<k.length;b++){var I=b,E=k[b];t.header&&(I=b>=F.length?"__parsed_extra":F[b]),t.transform&&(E=t.transform(E,I)),E=A(I,E),I==="__parsed_extra"?(q[I]=q[I]||[],q[I].push(E)):q[I]=E}return t.header&&(b>F.length?N("FieldMismatch","TooManyFields","Too many fields: expected "+F.length+" fields but parsed "+b,R+P):b<F.length&&N("FieldMismatch","TooFewFields","Too few fields: expected "+F.length+" fields but parsed "+b,R+P)),q}var _=1;return!u.data.length||Array.isArray(u.data[0])?(u.data=u.data.map(l),_=u.data.length):u.data=l(u.data,0),t.header&&u.meta&&(u.meta.fields=F),R+=_,u}()}function M(){return t.header&&F.length===0}function A(l,_){return k=l,t.dynamicTypingFunction&&t.dynamicTyping[k]===void 0&&(t.dynamicTyping[k]=t.dynamicTypingFunction(k)),(t.dynamicTyping[k]||t.dynamicTyping)===!0?_==="true"||_==="TRUE"||_!=="false"&&_!=="FALSE"&&(function(P){if(g.test(P)){var b=parseFloat(P);if(p<b&&b<h)return!0}return!1}(_)?parseFloat(_):L.test(_)?new Date(_):_===""?null:_):_;var k}function N(l,_,k,P){var b={type:l,code:_,message:k};P!==void 0&&(b.row=P),u.errors.push(b)}this.parse=function(l,_,k){var P=t.quoteChar||'"';if(t.newline||(t.newline=function(I,E){I=I.substring(0,1048576);var G=new RegExp(ge(E)+"([^]*?)"+ge(E),"gm"),W=(I=I.replace(G,"")).split("\r"),J=I.split(`
`),Y=1<J.length&&J[0].length<W[0].length;if(W.length===1||Y)return`
`;for(var K=0,T=0;T<W.length;T++)W[T][0]===`
`&&K++;return K>=W.length/2?`\r
`:"\r"}(l,P)),o=!1,t.delimiter)y(t.delimiter)&&(t.delimiter=t.delimiter(l),u.meta.delimiter=t.delimiter);else{var b=function(I,E,G,W,J){var Y,K,T,O;J=J||[",","	","|",";",n.RECORD_SEP,n.UNIT_SEP];for(var ce=0;ce<J.length;ce++){var C=J[ce],pe=0,X=0,ue=0;T=void 0;for(var ae=new Te({comments:W,delimiter:C,newline:E,preview:10}).parse(I),ie=0;ie<ae.data.length;ie++)if(G&&z(ae.data[ie]))ue++;else{var ne=ae.data[ie].length;X+=ne,T!==void 0?0<ne&&(pe+=Math.abs(ne-T),T=ne):T=ne}0<ae.data.length&&(X/=ae.data.length-ue),(K===void 0||pe<=K)&&(O===void 0||O<X)&&1.99<X&&(K=pe,Y=C,O=X)}return{successful:!!(t.delimiter=Y),bestDelimiter:Y}}(l,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);b.successful?t.delimiter=b.bestDelimiter:(o=!0,t.delimiter=n.DefaultDelimiter),u.meta.delimiter=t.delimiter}var q=we(t);return t.preview&&t.header&&q.preview++,e=l,i=new Te(q),u=i.parse(e,_,k),D(),f?{meta:{paused:!0}}:u||{meta:{paused:!1}}},this.paused=function(){return f},this.pause=function(){f=!0,i.abort(),e=y(t.chunk)?"":e.substring(i.getCharIndex())},this.resume=function(){w.streamer._halted?(f=!1,w.streamer.parseChunk(e,!0)):setTimeout(w.resume,3)},this.aborted=function(){return $},this.abort=function(){$=!0,i.abort(),u.meta.aborted=!0,y(t.complete)&&t.complete(u),e=""}}function ge(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Te(t){var e,i=(t=t||{}).delimiter,o=t.newline,h=t.comments,p=t.step,g=t.preview,L=t.fastMode,w=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(w=t.escapeChar),(typeof i!="string"||-1<n.BAD_DELIMITERS.indexOf(i))&&(i=","),h===i)throw new Error("Comment character same as delimiter");h===!0?h="#":(typeof h!="string"||-1<n.BAD_DELIMITERS.indexOf(h))&&(h=!1),o!==`
`&&o!=="\r"&&o!==`\r
`&&(o=`
`);var d=0,R=!1;this.parse=function(f,$,F){if(typeof f!="string")throw new Error("Input must be a string");var u=f.length,S=i.length,z=o.length,D=h.length,M=y(p),A=[],N=[],l=[],_=d=0;if(!f)return j();if(t.header&&!$){var k=f.split(o)[0].split(i),P=[],b={},q=!1;for(var I in k){var E=k[I];y(t.transformHeader)&&(E=t.transformHeader(E,I));var G=E,W=b[E]||0;for(0<W&&(q=!0,G=E+"_"+W),b[E]=W+1;P.includes(G);)G=G+"_"+W;P.push(G)}if(q){var J=f.split(o);J[0]=P.join(i),f=J.join(o)}}if(L||L!==!1&&f.indexOf(e)===-1){for(var Y=f.split(o),K=0;K<Y.length;K++){if(l=Y[K],d+=l.length,K!==Y.length-1)d+=o.length;else if(F)return j();if(!h||l.substring(0,D)!==h){if(M){if(A=[],ue(l.split(i)),be(),R)return j()}else ue(l.split(i));if(g&&g<=K)return A=A.slice(0,g),j(!0)}}return j()}for(var T=f.indexOf(i,d),O=f.indexOf(o,d),ce=new RegExp(ge(w)+ge(e),"g"),C=f.indexOf(e,d);;)if(f[d]!==e)if(h&&l.length===0&&f.substring(d,d+D)===h){if(O===-1)return j();d=O+z,O=f.indexOf(o,d),T=f.indexOf(i,d)}else if(T!==-1&&(T<O||O===-1))l.push(f.substring(d,T)),d=T+S,T=f.indexOf(i,d);else{if(O===-1)break;if(l.push(f.substring(d,O)),ne(O+z),M&&(be(),R))return j();if(g&&A.length>=g)return j(!0)}else for(C=d,d++;;){if((C=f.indexOf(e,C+1))===-1)return F||N.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:A.length,index:d}),ie();if(C===u-1)return ie(f.substring(d,C).replace(ce,e));if(e!==w||f[C+1]!==w){if(e===w||C===0||f[C-1]!==w){T!==-1&&T<C+1&&(T=f.indexOf(i,C+1)),O!==-1&&O<C+1&&(O=f.indexOf(o,C+1));var pe=ae(O===-1?T:Math.min(T,O));if(f.substr(C+1+pe,S)===i){l.push(f.substring(d,C).replace(ce,e)),f[d=C+1+pe+S]!==e&&(C=f.indexOf(e,d)),T=f.indexOf(i,d),O=f.indexOf(o,d);break}var X=ae(O);if(f.substring(C+1+X,C+1+X+z)===o){if(l.push(f.substring(d,C).replace(ce,e)),ne(C+1+X+z),T=f.indexOf(i,d),C=f.indexOf(e,d),M&&(be(),R))return j();if(g&&A.length>=g)return j(!0);break}N.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:A.length,index:d}),C++}}else C++}return ie();function ue(Q){A.push(Q),_=d}function ae(Q){var Ue=0;if(Q!==-1){var De=f.substring(C+1,Q);De&&De.trim()===""&&(Ue=De.length)}return Ue}function ie(Q){return F||(Q===void 0&&(Q=f.substring(d)),l.push(Q),d=u,ue(l),M&&be()),j()}function ne(Q){d=Q,ue(l),l=[],O=f.indexOf(o,d)}function j(Q){return{data:A,errors:N,meta:{delimiter:i,linebreak:o,aborted:R,truncated:!!Q,cursor:_+($||0)}}}function be(){p(j()),A=[],N=[]}},this.abort=function(){R=!0},this.getCharIndex=function(){return d}}function nt(t){var e=t.data,i=m[e.workerId],o=!1;if(e.error)i.userError(e.error,e.file);else if(e.results&&e.results.data){var h={abort:function(){o=!0,Ae(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:Ne,resume:Ne};if(y(i.userStep)){for(var p=0;p<e.results.data.length&&(i.userStep({data:e.results.data[p],errors:e.results.errors,meta:e.results.meta},h),!o);p++);delete e.results}else y(i.userChunk)&&(i.userChunk(e.results,h,e.file),delete e.results)}e.finished&&!o&&Ae(e.workerId,e.results)}function Ae(t,e){var i=m[t];y(i.userComplete)&&i.userComplete(e),i.terminate(),delete m[t]}function Ne(){throw new Error("Not implemented.")}function we(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var i in t)e[i]=we(t[i]);return e}function re(t,e){return function(){t.apply(e,arguments)}}function y(t){return typeof t=="function"}return c&&(r.onmessage=function(t){var e=t.data;if(n.WORKER_ID===void 0&&e&&(n.WORKER_ID=e.workerId),typeof e.input=="string")r.postMessage({workerId:n.WORKER_ID,results:n.parse(e.input,e.config),finished:!0});else if(r.File&&e.input instanceof File||e.input instanceof Object){var i=n.parse(e.input,e.config);i&&r.postMessage({workerId:n.WORKER_ID,results:i,finished:!0})}}),(B.prototype=Object.create(v.prototype)).constructor=B,(V.prototype=Object.create(v.prototype)).constructor=V,(se.prototype=Object.create(se.prototype)).constructor=se,(oe.prototype=Object.create(v.prototype)).constructor=oe,n})});var gt={};pt(gt,{default:()=>fe});module.exports=mt(gt);var it=require("obsidian");var ee=class extends Error{constructor(r){super(r)}};var Se=class{constructor(r){this.exportService=r}getAll(){return U(this,null,function*(){return yield this.exportService.getData()})}recordUsage(r){return U(this,null,function*(){var m;let c=(yield this.exportService.getData()).find(H=>H.char===r);if(c==null)throw new ee(`No character '${r}' exists.`);c.useCount=((m=c.useCount)!=null?m:0)+1,c.lastUsed=new Date().valueOf(),yield this.exportService.exportChar(c)})}};var te=require("obsidian");function de(s,r){return s==r?0:s<r?-1:1}function Ce(s){switch(s){case-1:return 1;case 1:return-1;default:return 0}}var Ge=Be(require("console"));var xe={score:0,matches:[]};var We={command:"\u2B81",purpose:"to navigate"},Ke={command:"\u21B5",purpose:"to insert selected character"},je={command:"esc",purpose:"to dismiss"},Qe={cls:"icon inline-description recent",text:"\u21A9",title:"used recently"},$e={cls:"icon inline-description frequent",text:"\u21BA",title:"used frequently"};function Re(s){return s.char.codePointAt(0).toString(16).padStart(4,"0")}var le=class extends te.SuggestModal{constructor(a,c,m,H){super(a);this.editor=c;this.statTrackedStorage=H;super.setInstructions([We,Ke,je]),this.characters=m.getCharacters(),this.topLastUsed=le.getMostRecentUsages(this.characters),this.averageUsageCount=le.getAverageUseCount(this.characters),this.setRandomPlaceholder()}getSuggestions(a){let m=a.length<=4&&!a.contains(" ")?(0,te.prepareSimpleSearch)(a):n=>null,H=(0,te.prepareFuzzySearch)(a);return this.characters.map(n=>({item:n,match:{codepoint:m(Re(n)),name:H(n.name)}})).filter(n=>n.match.name!=null||n.match.codepoint!=null).map(n=>{var x,v,B,V;return(v=(x=n.match).name)!=null||(x.name=xe),(V=(B=n.match).codepoint)!=null||(B.codepoint=xe),n}).sort((n,x)=>x.match.codepoint.score-n.match.codepoint.score+(x.match.name.score-n.match.name.score))}renderSuggestion(a,c){let m=a.item;c.addClass("plugin","unicode-search","result-item"),c.createDiv({cls:"character-preview"}).createSpan({text:m.char});let H=c.createDiv({cls:"separator"}),n=c.createDiv({cls:"character-match"}),x=n.createDiv({cls:"character-name"});if((0,te.renderMatches)(x,a.item.name,a.match.name.matches),a.match.codepoint.matches.length>0){let ye=n.createDiv({cls:"character-codepoint"});(0,te.renderMatches)(ye,Re(a.item),a.match.codepoint.matches)}let v=c.createDiv({cls:"detail"}),B=m.pinned!=null,V=m.lastUsed!=null&&this.topLastUsed.contains(m.lastUsed)&&!B,se=m.useCount!=null&&m.useCount>this.averageUsageCount,oe=v.createDiv({cls:"attributes"});V&&oe.createDiv(Qe),se&&oe.createDiv($e)}onChooseSuggestion(a,c){this.editor.replaceSelection(a.item.char),this.statTrackedStorage.recordUsage(a.item.char).then(void 0,m=>Ge.error(m))}onNoSuggestion(){this.setRandomPlaceholder()}setRandomPlaceholder(){let a=`Unicode search: ${this.getRandomCharacter().name}`;super.setPlaceholder(a)}getRandomCharacter(){let a=this.characters,c=Math.floor(Math.random()*a.length);return a[c]}static getMostRecentUsages(a){return a.map(c=>c.lastUsed).filter(c=>c!=null).map(c=>c).sort((c,m)=>Ce(de(c,m))).slice(0,3)}static getAverageUseCount(a){let c=a.map(n=>n.useCount).filter(n=>n!=null).map(n=>n),m=c.length;return m==0?0:c.reduce((n,x)=>n+x,0)/m}};function me(s,r,a){return s==null&&r==null?0:s!=null&&r!=null?a(s,r):s==null?1:-1}function Je(s,r){return me(s.pinned,r.pinned,(a,c)=>de(a,c))}function Ze(s,r){let a=me(s.lastUsed,r.lastUsed,(c,m)=>Ce(de(c,m)));return a!=0?a:Ce(de(s.useCount,r.useCount))}function Ve(s,r){return s.name<r.name?-1:s.name>r.name?1:0}function Ye(s,r){let a=Je(s,r);return a!=0||(a=me(s,r,(c,m)=>Ze(c,m)),a!=0)?a:Ve(s,r)}function Xe(s){return"initialized"in s&&"version"in s}function et(s){return"meta"in s&&"data"in s&&Xe(s.meta)}var Ie={meta:{initialized:!1,version:"0.5.0"},data:[]},ke=class{constructor(r){this.plugin=r;this.getData().then()}exportData(r){return U(this,null,function*(){return(yield this.saveDataToStorage({data:r})).data})}exportChar(r){return U(this,null,function*(){return yield this.saveCharToStorage(r)})}getData(){return U(this,null,function*(){return(yield this.getFromStorage()).data})}getCharacters(){var a,c;return((c=(a=this._store)==null?void 0:a.data)!=null?c:[]).sort(Ye)}isInitialized(){return U(this,null,function*(){let a=(yield this.getFromStorage()).meta;return a.initialized&&a.version===Ie.meta.version})}setAsInitialized(){return U(this,null,function*(){let r=yield this.getFromStorage();yield this.saveDataToStorage({meta:Ee(he(he({},r.meta),Ie.meta),{initialized:!0})})})}getFromStorage(){return U(this,null,function*(){return this._store==null&&(this._store=yield this._loadTheData()),this._store})}saveDataToStorage(r){return U(this,null,function*(){let a=yield this.getFromStorage(),c=he(he({},a),r);return yield this.plugin.saveData(c),this._store=c,this._store})}saveCharToStorage(r){return U(this,null,function*(){let a=(yield this.getData()).find(c=>c.char===r.char);if(a==null)throw new ee(`Cannot save non-existent character '${r.char}' to storage`);return Object.assign(a,r),yield this.plugin.saveData(this._store),a})}_loadTheData(){return U(this,null,function*(){let r=yield this.plugin.loadData(),a=r!=null&&et(r),c=a?r:Ie;if(c==null)throw new ee("Cannot import plugin data. The file is not valid!");return a||(yield this.plugin.saveData(c)),c})}};var rt=require("obsidian"),at=Be(tt());var Z=class{constructor(){this.config={delimiter:";",header:!1,transformHeader:void 0,dynamicTyping:!1,fastMode:!0}}fetchCharacters(){return U(this,null,function*(){let r=yield(0,rt.request)("https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt");return yield this.transformToCharacters(r)})}transformToCharacters(r){return new Promise((a,c)=>{let m=n=>{n.errors.length!==0&&c(new ee("Error while parsing data from Unicode Character Database"));let x=n.data.map(v=>({singleCodePoint:v[0],characterName:v[1],generalCategory:v[2]})).filter(v=>Z.charFilter(v)).map(v=>Z.intoUnicode(v));a(x)},H=Ee(he({},this.config),{worker:!0,complete:n=>m(n)});(0,at.parse)(r,H)})}static charFilter(r){return Z.planeIncluded(r)&&!Z.categoryExcluded(r)&&!Z.nameIsLabelInfo(r)}static planeIncluded(r){return parseInt(r.singleCodePoint,16)<=65535}static categoryExcluded(r){return r.generalCategory.startsWith("C")||r.generalCategory.startsWith("M")}static nameIsLabelInfo(r){return r.characterName.startsWith("<")&&r.characterName.endsWith(">")}static intoUnicode(r){return{char:String.fromCodePoint(parseInt(r.singleCodePoint,16)),name:r.characterName.toLowerCase()}}};var fe=class extends it.Plugin{constructor(r,a){super(r,a)}onload(){return U(this,null,function*(){let r=new ke(this),a=new Se(r);yield fe.initializeData(r,new Z),He(fe.prototype,this,"addCommand").call(this,{id:"search-unicode-chars",name:"Search Unicode characters",editorCallback:c=>(new le(app,c,r,a).open(),!0)})})}static initializeData(r,a){return U(this,null,function*(){if(yield r.isInitialized())return;let m=yield a.fetchCharacters();yield r.exportData(m),yield r.setAsInitialized()})}};
/*! Bundled license information:

papaparse/papaparse.min.js:
  (* @license
  Papa Parse
  v5.4.1
  https://github.com/mholt/PapaParse
  License: MIT
  *)
*/
