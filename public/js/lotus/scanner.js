/*! For license information please see scanner.js.LICENSE.txt */
(()=>{"use strict";var e,t={},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>{if(789===e)return"js/789.js"},n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},n.l=(t,r,i,a)=>{if(e[t])e[t].push(r);else{var o,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var h=c[l];if(h.getAttribute("src")==t){o=h;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.src=t),e[t]=[r];var d=(r,n)=>{o.onerror=o.onload=null,clearTimeout(u);var i=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((e=>e(n))),r)return r(n)},u=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),s&&document.head.appendChild(o)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={791:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise(((r,n)=>i=e[t]=[r,n]));r.push(i[2]=a);var o=n.p+n.u(t),s=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,a,[o,s,c]=r,l=0;if(o.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)c(n)}for(t&&t(r);l<o.length;l++)a=o[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();class i{constructor(e,t,r,n,a){this._legacyCanvasSize=i.DEFAULT_CANVAS_SIZE,this._preferredCamera="environment",this._maxScansPerSecond=25,this._lastScanTimestamp=-1,this._destroyed=this._flashOn=this._paused=this._active=!1,this.$video=e,this.$canvas=document.createElement("canvas"),r&&"object"==typeof r?this._onDecode=t:(r||n||a?console.warn("You're using a deprecated version of the QrScanner constructor which will be removed in the future"):console.warn("Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),this._legacyOnDecode=t),t="object"==typeof r?r:{},this._onDecodeError=t.onDecodeError||("function"==typeof r?r:this._onDecodeError),this._calculateScanRegion=t.calculateScanRegion||("function"==typeof n?n:this._calculateScanRegion),this._preferredCamera=t.preferredCamera||a||this._preferredCamera,this._legacyCanvasSize="number"==typeof r?r:"number"==typeof n?n:this._legacyCanvasSize,this._maxScansPerSecond=t.maxScansPerSecond||this._maxScansPerSecond,this._onPlay=this._onPlay.bind(this),this._onLoadedMetaData=this._onLoadedMetaData.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this._updateOverlay=this._updateOverlay.bind(this),e.disablePictureInPicture=!0,e.playsInline=!0,e.muted=!0;let o=!1;if(e.hidden&&(e.hidden=!1,o=!0),document.body.contains(e)||(document.body.appendChild(e),o=!0),r=e.parentElement,t.highlightScanRegion||t.highlightCodeOutline){if(n=!!t.overlay,this.$overlay=t.overlay||document.createElement("div"),(a=this.$overlay.style).position="absolute",a.display="none",a.pointerEvents="none",this.$overlay.classList.add("scan-region-highlight"),!n&&t.highlightScanRegion){this.$overlay.innerHTML='<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';try{this.$overlay.firstElementChild.animate({transform:["scale(.98)","scale(1.01)"]},{duration:400,iterations:1/0,direction:"alternate",easing:"ease-in-out"})}catch(e){}r.insertBefore(this.$overlay,this.$video.nextSibling)}t.highlightCodeOutline&&(this.$overlay.insertAdjacentHTML("beforeend",'<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'),this.$codeOutlineHighlight=this.$overlay.lastElementChild)}this._scanRegion=this._calculateScanRegion(e),requestAnimationFrame((()=>{let t=window.getComputedStyle(e);"none"===t.display&&(e.style.setProperty("display","block","important"),o=!0),"visible"!==t.visibility&&(e.style.setProperty("visibility","visible","important"),o=!0),o&&(console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."),e.style.opacity="0",e.style.width="0",e.style.height="0",this.$overlay&&this.$overlay.parentElement&&this.$overlay.parentElement.removeChild(this.$overlay),delete this.$overlay,delete this.$codeOutlineHighlight),this.$overlay&&this._updateOverlay()})),e.addEventListener("play",this._onPlay),e.addEventListener("loadedmetadata",this._onLoadedMetaData),document.addEventListener("visibilitychange",this._onVisibilityChange),window.addEventListener("resize",this._updateOverlay),this._qrEnginePromise=i.createQrEngine()}static set WORKER_PATH(e){console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.")}static async hasCamera(){try{return!!(await i.listCameras(!1)).length}catch(e){return!1}}static async listCameras(e=!1){if(!navigator.mediaDevices)return[];let t,r=async()=>(await navigator.mediaDevices.enumerateDevices()).filter((e=>"videoinput"===e.kind));try{e&&(await r()).every((e=>!e.label))&&(t=await navigator.mediaDevices.getUserMedia({audio:!1,video:!0}))}catch(e){}try{return(await r()).map(((e,t)=>({id:e.deviceId,label:e.label||(0===t?"Default Camera":`Camera ${t+1}`)})))}finally{t&&(console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"),i._stopVideoStream(t))}}async hasFlash(){let e;try{if(this.$video.srcObject){if(!(this.$video.srcObject instanceof MediaStream))return!1;e=this.$video.srcObject}else e=(await this._getCameraStream()).stream;return"torch"in e.getVideoTracks()[0].getSettings()}catch(e){return!1}finally{e&&e!==this.$video.srcObject&&(console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"),i._stopVideoStream(e))}}isFlashOn(){return this._flashOn}async toggleFlash(){this._flashOn?await this.turnFlashOff():await this.turnFlashOn()}async turnFlashOn(){if(!this._flashOn&&!this._destroyed&&(this._flashOn=!0,this._active&&!this._paused))try{if(!await this.hasFlash())throw"No flash available";await this.$video.srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:!0}]})}catch(e){throw this._flashOn=!1,e}}async turnFlashOff(){this._flashOn&&(this._flashOn=!1,await this._restartVideoStream())}destroy(){this.$video.removeEventListener("loadedmetadata",this._onLoadedMetaData),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),window.removeEventListener("resize",this._updateOverlay),this._destroyed=!0,this._flashOn=!1,this.stop(),i._postWorkerMessage(this._qrEnginePromise,"close")}async start(){if(this._destroyed)throw Error("The QR scanner can not be started as it had been destroyed.");if((!this._active||this._paused)&&("https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,!document.hidden))if(this._paused=!1,this.$video.srcObject)await this.$video.play();else try{let{stream:e,facingMode:t}=await this._getCameraStream();!this._active||this._paused?i._stopVideoStream(e):(this._setVideoMirror(t),this.$video.srcObject=e,await this.$video.play(),this._flashOn&&(this._flashOn=!1,this.turnFlashOn().catch((()=>{}))))}catch(e){if(!this._paused)throw this._active=!1,e}}stop(){this.pause(),this._active=!1}async pause(e=!1){if(this._paused=!0,!this._active)return!0;this.$video.pause(),this.$overlay&&(this.$overlay.style.display="none");let t=()=>{this.$video.srcObject instanceof MediaStream&&(i._stopVideoStream(this.$video.srcObject),this.$video.srcObject=null)};return e?(t(),!0):(await new Promise((e=>setTimeout(e,300))),!!this._paused&&(t(),!0))}async setCamera(e){e!==this._preferredCamera&&(this._preferredCamera=e,await this._restartVideoStream())}static async scanImage(e,t,r,n,a=!1,o=!1){let s,c=!1;t&&("scanRegion"in t||"qrEngine"in t||"canvas"in t||"disallowCanvasResizing"in t||"alsoTryWithoutScanRegion"in t||"returnDetailedScanResult"in t)?(s=t.scanRegion,r=t.qrEngine,n=t.canvas,a=t.disallowCanvasResizing||!1,o=t.alsoTryWithoutScanRegion||!1,c=!0):t||r||n||a||o?console.warn("You're using a deprecated api for scanImage which will be removed in the future."):console.warn("Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),t=!!r;try{let l,h,d;if([r,l]=await Promise.all([r||i.createQrEngine(),i._loadImage(e)]),[n,h]=i._drawToCanvas(l,s,n,a),r instanceof Worker){let e=r;t||i._postWorkerMessageSync(e,"inversionMode","both"),d=await new Promise(((t,r)=>{let a,o,c,l=-1;o=n=>{n.data.id===l&&(e.removeEventListener("message",o),e.removeEventListener("error",c),clearTimeout(a),null!==n.data.data?t({data:n.data.data,cornerPoints:i._convertPoints(n.data.cornerPoints,s)}):r(i.NO_QR_CODE_FOUND))},c=t=>{e.removeEventListener("message",o),e.removeEventListener("error",c),clearTimeout(a),r("Scanner error: "+(t?t.message||t:"Unknown Error"))},e.addEventListener("message",o),e.addEventListener("error",c),a=setTimeout((()=>c("timeout")),1e4);let d=h.getImageData(0,0,n.width,n.height);l=i._postWorkerMessageSync(e,"decode",d,[d.data.buffer])}))}else d=await Promise.race([new Promise(((e,t)=>window.setTimeout((()=>t("Scanner error: timeout")),1e4))),(async()=>{try{var[t]=await r.detect(n);if(!t)throw i.NO_QR_CODE_FOUND;return{data:t.rawValue,cornerPoints:i._convertPoints(t.cornerPoints,s)}}catch(r){if(t=r.message||r,/not implemented|service unavailable/.test(t))return i._disableBarcodeDetector=!0,i.scanImage(e,{scanRegion:s,canvas:n,disallowCanvasResizing:a,alsoTryWithoutScanRegion:o});throw`Scanner error: ${t}`}})()]);return c?d:d.data}catch(t){if(!s||!o)throw t;let l=await i.scanImage(e,{qrEngine:r,canvas:n,disallowCanvasResizing:a});return c?l:l.data}finally{t||i._postWorkerMessage(r,"close")}}setGrayscaleWeights(e,t,r,n=!0){i._postWorkerMessage(this._qrEnginePromise,"grayscaleWeights",{red:e,green:t,blue:r,useIntegerApproximation:n})}setInversionMode(e){i._postWorkerMessage(this._qrEnginePromise,"inversionMode",e)}static async createQrEngine(e){if(e&&console.warn("Specifying a worker path is not required and not supported anymore."),e=()=>n.e(789).then(n.bind(n,789)).then((e=>e.createWorker())),i._disableBarcodeDetector||!("BarcodeDetector"in window)||!BarcodeDetector.getSupportedFormats||!(await BarcodeDetector.getSupportedFormats()).includes("qr_code"))return e();let t=navigator.userAgentData;return t&&t.brands.some((({brand:e})=>/Chromium/i.test(e)))&&/mac ?OS/i.test(t.platform)&&await t.getHighEntropyValues(["architecture","platformVersion"]).then((({architecture:e,platformVersion:t})=>/arm/i.test(e||"arm")&&13<=parseInt(t||"13"))).catch((()=>!0))?e():new BarcodeDetector({formats:["qr_code"]})}_onPlay(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay(),this.$overlay&&(this.$overlay.style.display=""),this._scanFrame()}_onLoadedMetaData(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay()}_onVisibilityChange(){document.hidden?this.pause():this._active&&this.start()}_calculateScanRegion(e){let t=Math.round(2/3*Math.min(e.videoWidth,e.videoHeight));return{x:Math.round((e.videoWidth-t)/2),y:Math.round((e.videoHeight-t)/2),width:t,height:t,downScaledWidth:this._legacyCanvasSize,downScaledHeight:this._legacyCanvasSize}}_updateOverlay(){requestAnimationFrame((()=>{if(this.$overlay){var e=this.$video,t=e.videoWidth,r=e.videoHeight,n=e.offsetWidth,i=e.offsetHeight,a=e.offsetLeft,o=e.offsetTop,s=window.getComputedStyle(e),c=s.objectFit,l=t/r,h=n/i;switch(c){case"none":var d=t,u=r;break;case"fill":d=n,u=i;break;default:("cover"===c?l>h:l<h)?d=(u=i)*l:u=(d=n)/l,"scale-down"===c&&(d=Math.min(d,t),u=Math.min(u,r))}var[f,v]=s.objectPosition.split(" ").map(((e,t)=>{const r=parseFloat(e);return e.endsWith("%")?(t?i-u:n-d)*r/100:r}));s=this._scanRegion.width||t,h=this._scanRegion.height||r,c=this._scanRegion.x||0;var m=this._scanRegion.y||0;(l=this.$overlay.style).width=s/t*d+"px",l.height=h/r*u+"px",l.top=`${o+v+m/r*u}px`,r=/scaleX\(-1\)/.test(e.style.transform),l.left=`${a+(r?n-f-d:f)+(r?t-c-s:c)/t*d}px`,l.transform=e.style.transform}}))}static _convertPoints(e,t){if(!t)return e;let r=t.x||0,n=t.y||0,i=t.width&&t.downScaledWidth?t.width/t.downScaledWidth:1;t=t.height&&t.downScaledHeight?t.height/t.downScaledHeight:1;for(let a of e)a.x=a.x*i+r,a.y=a.y*t+n;return e}_scanFrame(){!this._active||this.$video.paused||this.$video.ended||("requestVideoFrameCallback"in this.$video?this.$video.requestVideoFrameCallback.bind(this.$video):requestAnimationFrame)((async()=>{if(!(1>=this.$video.readyState)){var e=Date.now()-this._lastScanTimestamp,t=1e3/this._maxScansPerSecond;e<t&&await new Promise((r=>setTimeout(r,t-e))),this._lastScanTimestamp=Date.now();try{var r=await i.scanImage(this.$video,{scanRegion:this._scanRegion,qrEngine:this._qrEnginePromise,canvas:this.$canvas})}catch(e){if(!this._active)return;this._onDecodeError(e)}!i._disableBarcodeDetector||await this._qrEnginePromise instanceof Worker||(this._qrEnginePromise=i.createQrEngine()),r?(this._onDecode?this._onDecode(r):this._legacyOnDecode&&this._legacyOnDecode(r.data),this.$codeOutlineHighlight&&(clearTimeout(this._codeOutlineHighlightRemovalTimeout),this._codeOutlineHighlightRemovalTimeout=void 0,this.$codeOutlineHighlight.setAttribute("viewBox",`${this._scanRegion.x||0} ${this._scanRegion.y||0} ${this._scanRegion.width||this.$video.videoWidth} ${this._scanRegion.height||this.$video.videoHeight}`),this.$codeOutlineHighlight.firstElementChild.setAttribute("points",r.cornerPoints.map((({x:e,y:t})=>`${e},${t}`)).join(" ")),this.$codeOutlineHighlight.style.display="")):this.$codeOutlineHighlight&&!this._codeOutlineHighlightRemovalTimeout&&(this._codeOutlineHighlightRemovalTimeout=setTimeout((()=>this.$codeOutlineHighlight.style.display="none"),100))}this._scanFrame()}))}_onDecodeError(e){e!==i.NO_QR_CODE_FOUND&&console.log(e)}async _getCameraStream(){if(!navigator.mediaDevices)throw"Camera not found.";let e=/^(environment|user)$/.test(this._preferredCamera)?"facingMode":"deviceId",t=[{width:{min:1024}},{width:{min:768}},{}],r=t.map((t=>Object.assign({},t,{[e]:{exact:this._preferredCamera}})));for(let e of[...r,...t])try{let t=await navigator.mediaDevices.getUserMedia({video:e,audio:!1});return{stream:t,facingMode:this._getFacingMode(t)||(e.facingMode?this._preferredCamera:"environment"===this._preferredCamera?"user":"environment")}}catch(e){}throw"Camera not found."}async _restartVideoStream(){let e=this._paused;await this.pause(!0)&&!e&&this._active&&await this.start()}static _stopVideoStream(e){for(let t of e.getTracks())t.stop(),e.removeTrack(t)}_setVideoMirror(e){this.$video.style.transform="scaleX("+("user"===e?-1:1)+")"}_getFacingMode(e){return(e=e.getVideoTracks()[0])?/rear|back|environment/i.test(e.label)?"environment":/front|user|face/i.test(e.label)?"user":null:null}static _drawToCanvas(e,t,r,n=!1){r=r||document.createElement("canvas");let i=t&&t.x?t.x:0,a=t&&t.y?t.y:0,o=t&&t.width?t.width:e.videoWidth||e.width,s=t&&t.height?t.height:e.videoHeight||e.height;return n||(n=t&&t.downScaledWidth?t.downScaledWidth:o,t=t&&t.downScaledHeight?t.downScaledHeight:s,r.width!==n&&(r.width=n),r.height!==t&&(r.height=t)),(t=r.getContext("2d",{alpha:!1})).imageSmoothingEnabled=!1,t.drawImage(e,i,a,o,s,0,0,r.width,r.height),[r,t]}static async _loadImage(e){if(e instanceof Image)return await i._awaitImageLoad(e),e;if(e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement||e instanceof SVGImageElement||"OffscreenCanvas"in window&&e instanceof OffscreenCanvas||"ImageBitmap"in window&&e instanceof ImageBitmap)return e;if(!(e instanceof File||e instanceof Blob||e instanceof URL||"string"==typeof e))throw"Unsupported image type.";{let t=new Image;t.src=e instanceof File||e instanceof Blob?URL.createObjectURL(e):e.toString();try{return await i._awaitImageLoad(t),t}finally{(e instanceof File||e instanceof Blob)&&URL.revokeObjectURL(t.src)}}}static async _awaitImageLoad(e){e.complete&&0!==e.naturalWidth||await new Promise(((t,r)=>{let n=i=>{e.removeEventListener("load",n),e.removeEventListener("error",n),i instanceof ErrorEvent?r("Image load error"):t()};e.addEventListener("load",n),e.addEventListener("error",n)}))}static async _postWorkerMessage(e,t,r,n){return i._postWorkerMessageSync(await e,t,r,n)}static _postWorkerMessageSync(e,t,r,n){if(!(e instanceof Worker))return-1;let a=i._workerMessageId++;return e.postMessage({id:a,type:t,data:r},n),a}}i.DEFAULT_CANVAS_SIZE=400,i.NO_QR_CODE_FOUND="No QR code found",i._disableBarcodeDetector=!1,i._workerMessageId=0;const a=i;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(){s=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function h(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(e){h=function(e,t,r){return e[t]=r}}function d(e,t,r,i){var a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),s=new k(i||[]);return n(o,"_invoke",{value:E(e,r,s)}),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=d;var f={};function v(){}function m(){}function g(){}var p={};h(p,a,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y($([])));w&&w!==t&&r.call(w,a)&&(p=w);var _=g.prototype=v.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function i(n,a,s,c){var l=u(e[n],e,a);if("throw"!==l.type){var h=l.arg,d=h.value;return d&&"object"==o(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){i("next",e,s,c)}),(function(e){i("throw",e,s,c)})):t.resolve(d).then((function(e){h.value=e,s(h)}),(function(e){return i("throw",e,s,c)}))}c(l.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){i(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function E(e,t,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return C()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=O(o,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function O(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var i=u(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,f;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function $(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return m.prototype=g,n(_,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:m,configurable:!0}),m.displayName=h(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,h(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},b(S.prototype),h(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(d(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(_),h(_,l,"Generator"),h(_,a,(function(){return this})),h(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=$,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:$(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function c(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t,r,n,i,a,o){try{var s=e[a](o),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,i)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){f(a,n,i,o,s,"next",e)}function s(e){f(a,n,i,o,s,"throw",e)}o(void 0)}))}}var m=document.getElementById("scanner"),g=document.getElementById("result-overlay"),p=document.getElementById("result-overlay-shadow"),y=document.getElementById("overlay-close"),w=document.getElementById("overlay-check-in");new a(m,(function(e){return function(e){return S.apply(this,arguments)}(e.data)}),{highlightScanRegion:!0}).start().catch((function(e){"Scanner error: No QR code found"!==e.message&&console.error(e)}));var _=!1;p.addEventListener("click",L),y.addEventListener("click",L);var b=null;function S(){return(S=v(s().mark((function e(t){var r,n,i,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_){e.next=2;break}return e.abrupt("return");case 2:return _=!0,p.classList.remove("opacity-0"),p.classList.add("opacity-80"),r=Number.parseInt(t.at(16)),n=Number.parseInt(t.at(18)),i=null,e.prev=8,e.next=11,fetch("/api/lotus/reservation/".concat(r,"/").concat(n));case 11:return a=e.sent,e.next=14,a.json();case 14:if(i=e.sent){e.next=17;break}throw new Error("Reservation not found");case 17:e.next=24;break;case 19:e.prev=19,e.t0=e.catch(8),console.error(e.t0),alert(e.t0.message),L();case 24:E(i,n);case 25:case"end":return e.stop()}}),e,null,[[8,19]])})))).apply(this,arguments)}function E(e,t){e=d(d({},e.data),{},{ticket_number:t+1,checked_in_time:new Intl.DateTimeFormat("default",{hour12:!0,hour:"numeric",minute:"numeric"}).format(new Date(e.data.checked_in_at))}),g.classList.remove("transform-none");var r=Object.keys(e),n=function(e){return function(t){return r.includes(e(t))}};c(document.querySelectorAll("div[x-reservation-target] *[x-reservation-data]")).filter(n((function(e){return e.getAttribute("x-reservation-data")}))).forEach((function(t){var r=t.getAttribute("x-reservation-data");t.innerText=e[r]})),c(document.querySelectorAll("div[x-reservation-target] *[x-reservation-if]")).filter(n((function(e){return e.getAttribute("x-reservation-if")}))).forEach((function(t){var r=t.getAttribute("x-reservation-if");e[r]?t.classList.remove("hidden"):t.classList.add("hidden")})),c(document.querySelectorAll("div[x-reservation-target] *[x-reservation-not-if]")).filter(n((function(e){return e.getAttribute("x-reservation-not-if")}))).forEach((function(t){var r=t.getAttribute("x-reservation-not-if");e[r]?t.classList.add("hidden"):t.classList.remove("hidden")})),e.check_in_eligible&&(b=function(){w.classList.add("opacity-50"),function(e,t){return O.apply(this,arguments)}(e.id,t).then((function(e){w.classList.remove("opacity-50"),E(e,t)})).catch(console.error)},w.addEventListener("click",b))}function O(){return(O=v(s().mark((function e(t,r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/lotus/reservation/".concat(t,"/").concat(r,"/check-in"),{method:"POST"});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){g.classList.add("transform-none"),p.classList.remove("opacity-80"),p.classList.add("opacity-0"),b&&(w.removeEventListener("click",b),b=null),_=!1}})();
//# sourceMappingURL=scanner.js.map