!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var i,r,o={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),c=null,l=0,d=[],u=n(4);function p(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=o[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(g(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(g(i.parts[s],e));o[i.id]={id:i.id,refs:1,parts:a}}}}function f(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function h(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,n);n.insertBefore(e,r)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return x(e,t.attrs),h(t,e),e}function x(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=l++;n=c||(c=v(e)),i=T.bind(null,n,s,!1),r=T.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",x(e,t.attrs),h(t,e),e}(e),i=function(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=u(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return p(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var s=n[r];(a=o[s.id]).refs--,i.push(a)}t&&p(f(t,e),e);for(r=0;r<i.length;r++){var a;if(0===(a=i[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var b,y=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function T(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e,n){var i=n(3);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbutton:active, button:focus {\n\toutline: none !important;\n  }\n  button::-moz-focus-inner {\n\tborder: 0 !important;\n  }\n\n  :active, :hover, :focus {\n    outline: 0;\n    outline-offset: 0;\n}\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"body {\n  background: #2e2e2e;\n}\n\na {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\n.logo {\n  position: absolute;\n  top: 0;\n  left: -210px;\n\theight: 40px;\n\ttext-align: center;\n\tfont-size: 40px;\n  font-family: Impact, \"Arial Black\";\n\tline-height: 40px;\n}\n\n.You {\n\tcolor: #fff;\n}\n\n.Tube{\n\tpadding: 0.05em .15em;\n\tborder: .05em solid #e23232;\n\tborder-radius: 17.5%;\n\tbackground-color:#e23232;\n\tcolor: #fff;\n}\n\n.search-container {\n  position: relative;\n  width: 700px;\n  height: 40px;\n  margin: 20px auto;\n  margin-bottom: 100px;\n}\n\n.search-container i {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 20px;\n  text-align: center;\n}\n.search-container input {\n  display: block;\n  width: 650px;\n  height: 38px;\n  padding-left: 50px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  line-height: 30px;\n  color: #1C1C1C;\n  border: none;\n  border-radius: 5px;\n}\n\n.slider {\n  width: 1338px;\n  height: 450px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.cards-container {\n  display: block;\n  width: 90000px;\n  height: 450px;\n  transition: margin-left 0.3s ease-out;\n}\n\n.card {\n  display: block;\n  float: left;\n  width: 300px;\n  height: 450px;\n  margin-right: 46px;\n  margin-left: 0;\n  margin-top: 0;\n  color: hsla(0, 0%, 11%, 0.8);\n  background: #fff;\n  border-radius: 5px;\n}\n\n.card h4 {\n  width: 260px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 18px;\n}\n\n.card h4 i {\n  float: left;\n  font-size: 18px;\n}\n\n.card p {\n  display: block;\n  width: 280px;\n  margin-top: 20px;\n  margin-left: 10px;\n  font-size: 16px;\n  word-break: break-all;\n  word-wrap: break-word;\n}\n\n.card .clip-img {\n  display: flex;\n  align-items: center;\n  height: 180px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  transition: 0.1s ease-in;\n}\n\n.card .clip-img h3 {\n  padding: 10px;\n  width: 280px;\n  text-align: center;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  color: #fff;\n  background: rgba(166, 0, 0, 0.8);\n}\n\n.card .clip-img:hover {\n  border-radius: 5px;\n  transform: translateY(-10px);\n  transition: 0.2s ease-out;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-around;\n  width: 200px;\n  margin: 50px auto;\n}\n\n.buttons-container button {\n  margin-right: 20px;\n  padding: 0;\n  height: 25px;\n  width: 25px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 700;\n  font-size: 15px;\n  color: #ff0000;\n  border-radius: 50%;\n  background: #fff;\n  transition: 0.2s ease-in;\n}\n\n.buttons-container .active {\n  color: #fff;\n  border: 1px solid #fff;\n  background: #ff0000;\n}\n\n.buttons-container .tooltip {\n  position: absolute;\n  z-index: 20;\n  display: none;\n  padding: 5px 4px;\n  height: 15px;\n  color: #1C1C1C;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 15px;\n  background-color: #fff;\n  opacity: 0.8;\n  border-radius: 4px;\n}\n\n\n@media only screen and (max-width: 1338px) {\n  .slider {\n    width: 992px;\n  }\n\n  .search-container {\n    width: 600px;\n  }\n\n  .search-container {\n    width: 550px;\n  }\n\n  .logo {\n    left: -185px;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .slider {\n    width: 646px;\n  }\n\n  .search-container {\n    width: 80%;\n  }\n\n  .search-container input {\n    width: calc(100% - 50px);\n  }\n\n  .logo {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 646px) {\n  .slider {\n    width: 300px;\n  }\n\n  .search-container {\n    margin-bottom: 50px;\n  }\n}\n",""])},function(t,e,n){"use strict";n.r(e);class i{constructor(t,e){if(""===t)throw alert("Enter something"),Error("Error!! incorrect data!");const n=e?`&pageToken=${e}`:"";this.requestUrl=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAbozbNMrQD59gjJYjVXBcOt4foRBCYOro&type=video&part=snippet&maxResults=15${n}&q=${t}`}}class r{constructor(t){this.state=t}static extractClipNames(t){return t.items.map(t=>t.snippet.title)}static extractClipImages(t){return t.items.map(t=>t.snippet.thumbnails.medium.url)}static extractClipDescriptions(t){return t.items.map(t=>t.snippet.description)}static extractClipChannelTitles(t){return t.items.map(t=>t.snippet.channelTitle)}static extractUploadDate(t){return t.items.map(t=>t.snippet.publishedAt)}static extractClipsUrl(t){return t.items.map(t=>`https://www.youtube.com/watch?v=${t.id.videoId}`)}static getClipsId(t){return t.items.map(t=>t.id.videoId)}static extractClipsViewCount(t){return t.items.map(t=>t.statistics.viewCount)}async getClips(){const{url:t}=this.state,e=await fetch(t),n=await e.json();if(0===n.pageInfo.totalResults)throw alert("Enter other data"),Error("Error!! incorrect data!");const i=`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAbozbNMrQD59gjJYjVXBcOt4foRBCYOro&id=${r.getClipsId(n).join(",")}&part=snippet,statistics`,o=await fetch(i),s=await o.json();return{titles:r.extractClipNames(n),images:r.extractClipImages(n),descriptions:r.extractClipDescriptions(n),authors:r.extractClipChannelTitles(n),uploadDate:r.extractUploadDate(n),url:r.extractClipsUrl(n),viewCount:r.extractClipsViewCount(s),nextToken:n.nextPageToken}}}function o(t){const e=document.querySelector(".search-container input"),n={url:new i(e.value,t).requestUrl};return new r(n).getClips()}n(2),n(5);var s=class{constructor(t){this.titles=t.titles,this.images=t.images,this.descriptions=t.descriptions,this.authors=t.authors,this.uploadDate=t.uploadDate,this.url=t.url,this.viewCount=t.viewCount,this.nextToken=t.nextToken}async changeThisData(t){const e=await t;this.titles=e.titles,this.images=e.images,this.descriptions=e.descriptions,this.authors=e.authors,this.uploadDate=e.uploadDate,this.url=e.url,this.viewCount=e.viewCount,this.nextToken=e.nextToken}async addCards(t){const e=document.querySelector(".cards-container");let n="";for(let e=0;e<t;e+=1){const t=this.uploadDate[e].split("").slice(0,10).join("");n+=`\n        <div class="card">\n          <a class="clip-img"  href="${this.url[e]}" target='_blank' style="background: url('${this.images[e]}') no-repeat center">\n            <h3>${this.titles[e]}</h3>\n          </a>\n          <h4><i class="fas fa-user"></i> ${this.authors[e]}</h4>\n          <h4><i class="far fa-calendar-alt"></i> ${t}</h4>\n          <h4><i class="fas fa-eye"></i> ${this.viewCount[e]}</h4>\n          <p>${this.descriptions[e]}</p>\n        </div>\n        `}e.innerHTML+=n}renderCards(t){const e=document.querySelector(".cards-container");e.innerHTML="",this.addCards(t),e.style.marginLeft="0";const n=346;let i=4,r=0,s=0,a=1;const c=document.querySelector(".buttons-container"),l=document.createElement("DIV");l.classList.add("tooltip");const d=document.createElement("BUTTON");d.innerText=a;const u=document.createElement("BUTTON"),p=document.createElement("BUTTON"),f=document.createElement("BUTTON");f.innerText=a+1;let h=d;h.classList.add("active");let m,v=1;function x(t){const e=t.target;t.clientX?m=setTimeout(()=>{l.style.left=`${t.clientX-10}px`,l.style.top=`${t.clientY-50}px`,l.innerText=e.innerText,l.style.display="block"},1e3):t.targetTouches&&(m=setTimeout(()=>{l.style.left=`${t.targetTouches[0].clientX-10}px`,l.style.top=`${t.targetTouches[0].clientY-50}px`,l.innerText=e.innerText,l.style.display="block"},1e3))}function g(){clearTimeout(m),l.style.display="none"}function b(){i=document.documentElement.clientWidth<2*n?1:document.documentElement.clientWidth<3*n?2:document.documentElement.clientWidth<4*n?3:4;const t=Math.floor(r/(-n*i));t>=3?(s=r+n*i*3,a=t-2,d.innerText=a,u.innerText=a+1,p.innerText=a+2,f.innerText=a+3,h.classList.remove("active"),(h=f).classList.add("active")):2===t?(s=0,a=t-1,d.innerText=a,u.innerText=a+1,p.innerText=a+2,f.innerText=a+3,h.classList.remove("active"),(h=p).classList.add("active")):1===t&&(s=0,a=t,d.innerText=a,u.innerText=a+1,p.innerText=a+2,f.innerText=a+3,h.classList.remove("active"),(h=u).classList.add("active"))}d.addEventListener("mousedown",x),u.addEventListener("mousedown",x),p.addEventListener("mousedown",x),f.addEventListener("mousedown",x),d.addEventListener("touchstart",x),u.addEventListener("touchstart",x),p.addEventListener("touchstart",x),f.addEventListener("touchstart",x),document.addEventListener("mouseup",g),document.addEventListener("touchend",g),b(),window.addEventListener("resize",b),d.onclick=(()=>{0!==s&&r===s&&(s=Math.min(s+n*i,0),a-=1,d.innerText=a,u.innerText=a+1,p.innerText=a+2,f.innerText=a+3),r=s,e.style.marginLeft=`${r}px`,h.classList.remove("active"),(h=d).classList.add("active")}),u.onclick=(()=>{r=s-n*i,e.style.marginLeft=`${r}px`,h.classList.remove("active"),(h=u).classList.add("active")}),p.onclick=(()=>{r=s-2*n*i,e.style.marginLeft=`${r}px`,h.classList.remove("active"),(h=p).classList.add("active")}),f.onclick=(()=>{const l=c.getElementsByTagName("BUTTON");if(r/-n+2*i>v*t){v+=1;const e=o(this.nextToken);this.changeThisData(e).then(()=>{this.addCards(t)})}r+n*i*2<s?(r=(s-=n*i)-3*n*i,a+=1,d.innerText=a,u.innerText=a+1,p.innerText=a+2,f.innerText=a+3,h.classList.remove("active"),(h=f).classList.add("active")):3===l.length?(p.innerText=a+2,f.innerText=a+3,c.insertBefore(p,f),r=s-2*n*i,h.classList.remove("active"),(h=p).classList.add("active")):2===l.length?(u.innerText=a+1,f.innerText=a+2,c.insertBefore(u,f),r=s-n*i,h.classList.remove("active"),(h=u).classList.add("active")):f.classList.contains("active")||(r=s-3*n*i,h.classList.remove("active"),(h=f).classList.add("active")),e.style.marginLeft=`${r}px`});const y=this;function T(l){if(l.target.classList.contains("card-img"))return;let m,x,g=r;function b(t){!function(t){t.clientX?x=t.clientX:t.targetTouches&&(x=t.targetTouches[0].clientX),g+=1.5*(x-m),e.style.marginLeft=`${g}px`}(t),m=x}function T(){if(e.removeEventListener("mousemove",b),e.removeEventListener("touchmove",b),r/-n+i+2>v*t){v+=1;const e=o(this.nextToken);y.changeThisData(e).then(()=>{y.addCards(t)})}r=Math.round(g/n)*n;const c=Math.floor(r/(-n*i));c>=3||f.classList.contains(!1)?(s=r+n*i*3,a=c-2,d.innerText=a,u.innerText=a+1,p.innerText=a+2,f.innerText=a+3,h.classList.remove("active"),(h=f).classList.add("active")):2===c?(s=0,a=c-1,d.innerText=a,u.innerText=a+1,p.innerText=a+2,f.innerText=a+3,h.classList.remove("active"),(h=p).classList.add("active")):1===c?(s=0,a=c,d.innerText=a,u.innerText=a+1,p.innerText=a+2,f.innerText=a+3,h.classList.remove("active"),(h=u).classList.add("active")):(s=0,a=1,d.innerText=a,u.innerText=a+1,p.innerText=a+2,f.innerText=a+3,h.classList.remove("active"),(h=d).classList.add("active")),r>0&&(r=0),e.style.marginLeft=`${r}px`,document.removeEventListener("mouseup",T),document.removeEventListener("touchend",T)}l.clientX?m=l.clientX:l.targetTouches&&(m=l.targetTouches[0].clientX),e.addEventListener("mousemove",b),e.addEventListener("touchmove",b),c.insertBefore(u,f),c.insertBefore(p,f),d.innerText=a,u.innerText=a+1,p.innerText=a+2,f.innerText=a+3,document.addEventListener("mouseup",T),document.addEventListener("touchend",T)}e.addEventListener("mousedown",T),e.addEventListener("touchstart",T),c.innerHTML="",c.appendChild(d),c.appendChild(f),c.appendChild(l)}};class a{constructor(t){this.state={url:t}}async start(){const t=new r(this.state),e=await t.getClips();new s(e).renderCards(15)}}!function(){document.head.innerHTML=`${document.head.innerHTML}\n      <meta name="viewport" content="width=device-width, initial-scale=1">\n      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"\n      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"\n      crossorigin="anonymous"></link>\n      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&amp;subset=cyrillic"\n      rel="stylesheet">`;const t=document.createElement("DIV");t.className="container";const e=document.createElement("INPUT");e.setAttribute("type","text");const n=document.createElement("DIV");n.className="search-container",n.innerHTML='\n    <div class="logo">\n      <span class="You">You</span>\n      <span class="Tube">Tube</span>\n    </div>\n  <i class="fas fa-search"></i>';const r=document.createElement("DIV");r.className="slider",r.innerHTML='<div class="cards-container"></div>';const o=document.createElement("DIV");let s;o.className="buttons-container",e.addEventListener("keypress",function(t){if(13===t.keyCode){s=e.value;const t=new i(s);new a(t.requestUrl).start()}}),n.appendChild(e),t.appendChild(n),t.appendChild(r),t.appendChild(o),document.body.appendChild(t)}()}]);
//# sourceMappingURL=app.bundle.js.map