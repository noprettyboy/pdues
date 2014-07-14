/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);/**
* jquery.bootstrap.js
Copyright (c) Kris Zhang <kris.newghost@gmail.com>
License: MIT (https://github.com/newghost/bootstrap-jquery-plugin/blob/master/LICENSE)
*/
/* Extend string method */

/*
string.format, ref: http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format/4673436#4673436
*/
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}/*
Description: $.fn.dialog
Author: Kris Zhang
require: 
  string.format.js
*/
(function($) {

  $.fn.dialog = function(options) {

    var self    = this
      , $this   = $(self)
      , $body   = $(document.body)
      , $msgbox = $this.closest(".dialog");

    var create = function() {

      var msghtml
        = ''
        // + '<div class="dialog">'
        // + '<div class="msg">'
        // +   '<h3 class="msgh"></h3>'
        // +   '<div class="msgb"></div>'
        // +   '<table class="msgf">'
        // +   '<tr></tr>'
        // +   '</table>'
        // + '</div>'
        // + '<div class="mask"></div>'
        // + '</div>'

        
        + '<div class="dialog modal fade in">'
        + '<div class="modal-dialog">'
        +   '<div class="modal-content">'
        +     '<div class="modal-header">'
        +         '<button type="button" class="close">×</button>'
        +         '<h4 class="modal-title"></h4>'
        +     '</div>'
        +     '<div class="modal-body"></div>'
        +     '<div class="modal-footer"></div>'
        +   '</div>'
        + '</div>'
        + '<div class="modal-backdrop fade in" style="z-index:-1"></div>'
        + '</div>'
        ;


      $msgbox = $(msghtml);
      $(document.body).append($msgbox);
      $msgbox.find(".modal-body").append($this);
    };

    var createButton = function() {
      var buttons = options.buttons || {}
        , $btnrow = $msgbox.find(".modal-footer");

      //clear old buttons
      $btnrow.html('');

      for (var button in buttons) {
        var btnObj  = buttons[button]
          , id      = ""
          , text    = ""
          , classed = "btn-default"
          , click   = "";

        if (btnObj.constructor == Object) {
          id      = btnObj.id;
          text    = btnObj.text;
          classed = btnObj.classed || classed;
          click   = btnObj.click;
        }

        if (btnObj.constructor == Function) {
          click = btnObj;
        }

        //<button data-bb-handler="danger" type="button" class="btn btn-danger">Danger!</button>
        $button = $('<button type="button" class="btn {1}">{0}</button>'.format(text, classed));

        id && $button.attr("id", id);
        if (click) {
          (function(click) {
            $button.click(function() {
              click.call(self);
            });
          })(click);
        }

        $btnrow.append($button);
      }
    };

    var show = function() {
      $msgbox.show();
      $body.addClass("modal-open");
    };

    var close = function() {
      $msgbox.hide();
      $body.removeClass("modal-open");
    };

    if (options.constructor == Object) {
      if ($msgbox.size() < 1) {
        create();
      }
      createButton();
      $(".modal-title", $msgbox).html(options.title || "");
      $(".modal-header .close", $msgbox).click(function() {
        var closeHandler = options.onClose || close;
        closeHandler.call(self);
      });
      options.classed && $msgbox.addClass(options.classed);
      show();
    }

    if (options == "destroy") {
      close();
      $msgbox.remove();
    }

    if (options == "close") {
      close();
    }

    if (options == "open") {
      show();
    }

    return $this;
  };

})(jQuery);/*
Description: $.messager
Author: Kris Zhang
require: 
  string.format.js
  $.fn.dialog
*/

$.messager = (function() {

  var alert = function(title, message) {
    var model = $.messager.model;

    if (arguments.length < 2) {
      message = title || "";
      title   = "&nbsp;"
    }

    $("<div>" + message + "</div>").dialog({
        title:   title
        // override destroy methods;
      , onClose: function() {
          $(this).dialog("destroy");
        }
      , buttons: [{
            text: model.ok
          , classed: "btn-success"
          , click: function() {
              $(this).dialog("destroy");
            }
        }]
    });
  };

  var confirm = function(title, message, callback) {
    var model = $.messager.model;

    $("<div>" + message + "</div>").dialog({
        title:   title
        // override destroy methods;
      , onClose: function() {
          $(this).dialog("destroy");
        }
      , buttons: [{
            text: model.ok
          , classed: "btn-success"
          , click: function() {
              $(this).dialog("destroy");
              callback && callback();
            }
        },
        {
            text: model.cancel
          , click: function() {
              $(this).dialog("destroy");
            }
        }]
    });
  };

  return {
      alert:   alert
    , confirm: confirm
  };

})();


$.messager.model = {
    ok: "OK"
  , cancel:  "Cancel"
};

/*
Description: $.fn.datagrid
Author: Kris Zhang
require: 
  string.format.js
*/

(function($) {

  $.fn.datagrid = function(method, options) {

    var self          = this
      , selectedClass = "success"
      , $this         = $(this)
      ;

    var bindRows = function($rows) {
      var conf          = $this.data("config")
        , selectChange  = conf.selectChange
        , singleSelect  = conf.singleSelect
        , edit          = conf.edit
        ;

      var selectHandler = function(e) {
        var $row              = $(this)
          , hasSelectedClass  = $row.hasClass(selectedClass)
          , idx               = $("tbody tr", $this).index($row)
          , row               = $this.data("rows")[idx] || {}
          ;

        //rows may added dynamiclly
        singleSelect && $("tbody tr", $this).removeClass(selectedClass);
        $row.toggleClass(selectedClass);

        //API selectChange: function( selected, rowIndex, rowData )
        selectChange && selectChange(!hasSelectedClass, idx, row, $row);
      };
      (selectChange || typeof singleSelect != "undefined") && $rows.click(selectHandler);


      var editHandler = function(e) {
        var $input  = $(this)
          , $row    = $input.closest("tr")
          , idx     = $("tbody tr", $this).index($row)
          , row     = $this.data("rows")[idx] || {}
          , name    = $input.attr("name")
          ;

        name && (row[name] = $input.val());
      }
      edit && $rows.find("input").keyup(editHandler);
    };

    var getRow = function(columns, row, conf) {
      var trow = "<tr>";

      for (var j = 0, m = columns[0].length; j < m; j++) {
        var column = columns[0][j]
          , format = column.formatter
          , field  = column.field
          , tip    = column.tip
          , value  = row[field]
          , maxlength = column.maxlength
          , readonly  = column.readonly
          ;

        typeof value == "undefined" && (value = "");

        if (conf.edit) {
          maxlength = maxlength
            ? ' maxlength="{0}"'.format(column.maxlength)
            : '';

          readonly  = readonly ? ' readonly="readonly"' : '';

          value
            = '<input name="{0}" value="{1}" class="form-control"{2}{3}/>'.format(
                column.field
              , value
              , maxlength
              , readonly
            );
        }

        //if it has 'formatter' attribute override the content
        value = format ? format(row[field], row) : value;
        trow = trow + "<td>" + value + "</td>";
      };
      trow += "</tr>";
      return trow;
    };

    var getData = function(edit) {
      if (!options) return;

      var config  = $this.data("config") || {}
        , columns = config.columns
        , rows    = options.rows || options;

      var body = "<tbody>";
      if (rows) {
        for (var i = 0, l = rows.length; i < l; i++) {
          body += getRow(columns, rows[i], config);
        }
      }
      body += "</tbody>";

      $("tbody", $this).remove();
      $this
        .data("rows", rows)
        .append(body);

      //add "edit" class if it's edit mode.
      config.edit && $this.addClass("edit");
      //rebind events
      bindRows($("tbody tr", $this));
    };

    //handle: $().datagrid({column: [[]]})
    if (method && method.constructor == Object) {
      var columns = method.columns;
 
      if (columns) {
        $("thead", $this).size() < 1
          && $this.append("<thead></thead>");

        var header = "<tr>";
        //method.del && (header += "<td></td>");
        for (var i = 0, l = columns[0].length; i < l; i++) {
          var col = columns[0][i];
          header += '<th>' + (col.title || "") + '</th>';
        }
        header += "</tr>";

        $this.data("config",  method);
        $("thead", $this).html(header);
      }
    }

    //handle: $().datagrid("loadData", {rows: []}) or $().data("loadData", [])
    if (method == "loadData") getData();

    if (method == "getData") {
      return $this.data("rows");
    }

    if (method == "getConfig") {
      return $this.data("config");
    }

    if (method == "getColumns") {
      return $this.data("config").columns;
    }

    if (method == "unselectRow") {
      typeof options != "undefined"
        ? $("tbody tr", $this).eq(options).removeClass(selectedClass)
        : $("tbody tr", $this).removeClass(selectedClass);
    }

    if (method == "updateRow") {
      var idx     = options.index
        , conf    = $this.data("config")
        , rows    = $this.data("rows")
        , row     = options.row
        , columns = conf.columns
        ;

      if (rows) {
        row = $.extend(rows[idx], row);
        $this.data("rows", rows);
      }

      var $row = $(getRow(columns, row, conf));

      $("tbody tr", $this).eq(idx)
        .after($row)
        .remove();

      bindRows($row);
    }

    if (method == "getSelections") {
      var rows    = $this.data("rows")
        , selRows = [];

      $("tbody tr", $this).each(function(idx) {
        $(this).hasClass(selectedClass) && selRows.push(rows[idx]);
      });

      return selRows;
    }

    if (method == "insertRow") {
      var idx   = options.index || 0
        , row   = options.row
        , conf  = $this.data("config")
        , rows  = $this.data("rows") || []
        ;

      if (!conf || !row) return $this;

      var $rows  = $("tbody tr", $this)
        , $row   = $(getRow(conf.columns, row, conf))
        , $tar   = $rows.eq(idx)
        ;

      bindRows($row);
      $tar.size() ? $tar.before($row) : $("tbody", $this).append($row);
      rows.splice(idx, 0, row);
    }

    if (method == "deleteRow") {
      if (options > -1) {
        $("tbody tr", $this).eq(options).remove();
        var rows = $this.data("rows");
        rows.splice(options, 1);
      }
    }

    return $this;
  };


})(jQuery);/*
Dependence: string.js
*/

(function($) {

  $.fn.tree = function(method, options) {

    var self        = this
      , $this       = $(self)
      , pushFn      = Array.prototype.push
      , icon_node   = "glyphicon-file"
      , icon_open   = "glyphicon-folder-open"
      , icon_close  = "glyphicon-folder-close"
      ;

    var build = function(data, root, parentState) {
      var tree = [];
      !root && tree.push('<ul style="display:{0}">'.format(parentState == "close" ? "none" : "block"));

      data.forEach(function(node) {
        var children    = node.children
          , id          = node.id
          , state       = node.state
          , attributes  = node.attributes;

        tree.push('<li>');
        if (1) {
          var type
            = typeof children == "undefined"
            ? icon_node
            : ( state == "close" ?  icon_close : icon_open );
          tree.push('<span class="glyphicon {0}"></span> '.format(type));
        }
        tree.push('<a{1}{2}{3}>{0}</a>'.format(
            node.text
          , children   ? " class='tree-node'" : ""
          , id         ? " data-id='{0}'".format(id) : ""
          , attributes ? " data-attr='{0}'".format(JSON.stringify(attributes)) : ""
        ));
        children && pushFn.apply(tree, build(children, false, state));
        tree.push('</li>');
      });
      !root && tree.push('</ul>')

      return tree;
    };

    var bind = function() {
      $("span.glyphicon-folder-open, span.glyphicon-folder-close", $this).click(function(e) {
        var $icon     = $(this)
          , $children = $icon.closest("li").children("ul");

        if ($icon.hasClass(icon_close)){
          $icon.removeClass(icon_close).addClass(icon_open);
          $children.show();
        } else {
          $icon.removeClass(icon_open).addClass(icon_close);
          $children.hide();
        }
      });
    };

    if (method && method.constructor == Object) {
      var data = method.data;
      if (data && (data.constructor == Array)) {
        var htmlArr = build(data, true);
        $this.html(htmlArr.join(''));
        $this.data("config", method);
        bind();
      }

      var clickHandler = method.onClick;
      if (clickHandler) {
        $("li>a", $this).click(function() {
          var $link = $(this);
              attrs = $link.attr("data-attr");

          clickHandler.call(self, {
              id          : $link.attr("data-id")
            , attributes  : attrs ? JSON.parse(attrs) : {}
            , text        : $link.text()
          }, $link);
        });
      }
    }

    return $this;
  };

})(jQuery);/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data( this[0], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[0] );
		$.data( this[0], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.validateDelegate( ":submit", "click", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}
				// allow suppressing validation by adding a cancel class to the submit button
				if ( $(event.target).hasClass("cancel") ) {
					validator.cancelSubmit = true;
				}

				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $(event.target).attr("formnovalidate") !== undefined ) {
					validator.cancelSubmit = true;
				}
			});

			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val( $(validator.submitButton).val() ).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
		if ( $(this[0]).is("form")) {
			return this.validate().form();
		} else {
			var valid = true;
			var validator = $(this[0].form).validate();
			this.each(function() {
				valid = valid && validator.element(this);
			});
			return valid;
		}
	},
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function( attributes ) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function( index, value ) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function( command, argument ) {
		var element = this[0];

		if ( command ) {
			var settings = $.data(element.form, "validator").settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				// remove messages from rules, but allow them to be set separetely
				delete existingRules.messages;
				staticRules[element.name] = existingRules;
				if ( argument.messages ) {
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function( index, method ) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}

		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.dataRules(element),
			$.validator.staticRules(element)
		), element);

		// make sure required is at front
		if ( data.required ) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}

		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function( a ) { return !$.trim("" + $(a).val()); },
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function( a ) { return !!$.trim("" + $(a).val()); },
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function( a ) { return !$(a).prop("checked"); }
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each(params, function( i, n ) {
		source = source.replace( new RegExp("\\{" + i + "\\}", "g"), function() {
			return n;
		});
	});
	return source;
};

$.extend($.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $([]),
		errorLabelContainer: $([]),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element, event ) {
			this.lastActive = element;

			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.addWrapper(this.errorsFor(element)).hide();
			}
		},
		onfocusout: function( element, event ) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function( element, event ) {
			if ( event.which === 9 && this.elementValue(element) === "" ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function( element, event ) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element(element);
			}
			// or option elements, check parent select in that case
			else if ( element.parentNode.name in this.submitted ) {
				this.element(element.parentNode);
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName(element.name).addClass(errorClass).removeClass(validClass);
			} else {
				$(element).addClass(errorClass).removeClass(validClass);
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName(element.name).removeClass(errorClass).addClass(validClass);
			} else {
				$(element).removeClass(errorClass).addClass(validClass);
			}
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format("Please enter no more than {0} characters."),
		minlength: $.validator.format("Please enter at least {0} characters."),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
		range: $.validator.format("Please enter a value between {0} and {1}."),
		max: $.validator.format("Please enter a value less than or equal to {0}."),
		min: $.validator.format("Please enter a value greater than or equal to {0}.")
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = (this.groups = {});
			$.each(this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split(/\s/);
				}
				$.each(value, function( index, name ) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function( key, value ) {
				rules[key] = $.validator.normalizeRule(value);
			});

			function delegate(event) {
				var validator = $.data(this[0].form, "validator"),
					eventType = "on" + event.type.replace(/^validate/, "");
				if ( validator.settings[eventType] ) {
					validator.settings[eventType].call(validator, this[0], event);
				}
			}
			$(this.currentForm)
				.validateDelegate(":text, [type='password'], [type='file'], select, textarea, " +
					"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
					"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], " +
					"[type='range'], [type='color'] ",
					"focusin focusout keyup", delegate)
				.validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

			if ( this.settings.invalidHandler ) {
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if ( !this.valid() ) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element ) !== false;
			if ( result ) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function( errors ) {
			if ( errors ) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !(element.name in errors);
				});
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$(this.currentForm).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass ).removeData( "previousValue" );
		},

		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},

		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
					.filter(":visible")
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger("focusin");
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $(this.currentForm)
			.find("input, select, textarea")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this);
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) ) {
					return false;
				}

				rulesCache[this.name] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $(selector)[0];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.replace(" ", ".");
			return $(this.settings.errorElement + "." + errorClass, this.errorContext);
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.currentElements = $([]);
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},

		elementValue: function( element ) {
			var type = $(element).attr("type"),
				val = $(element).val();

			if ( type === "radio" || type === "checkbox" ) {
				return $("input[name='" + $(element).attr("name") + "']:checked").val();
			}

			if ( typeof val === "string" ) {
				return val.replace(/\r/g, "");
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $(element).rules();
			var dependencyMismatch = false;
			var val = this.elementValue(element);
			var result;

			for (var method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {

					result = $.validator.methods[method].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength(rules) ) {
				this.successList.push(element);
			}
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		customDataMessage: function( element, method ) {
			return $(element).data("msg-" + method.toLowerCase()) || (element.attributes && $(element).attr("data-msg-" + method.toLowerCase()));
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor === String ? m : m[method]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if ( arguments[i] !== undefined ) {
					return arguments[i];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method ) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call(this, rule.parameters, element);
			} else if (theregex.test(message)) {
				message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
			}
			this.errorList.push({
				message: message,
				element: element
			});

			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements;
			for ( i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},

		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},

		showLabel: function( element, message ) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
				// replace message on existing label
				label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + ">")
					.attr("for", this.idOrName(element))
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length ) {
					if ( this.settings.errorPlacement ) {
						this.settings.errorPlacement(label, $(element) );
					} else {
						label.insertAfter(element);
					}
				}
			}
			if ( !message && this.settings.success ) {
				label.text("");
				if ( typeof this.settings.success === "string" ) {
					label.addClass( this.settings.success );
				} else {
					this.settings.success( label, element );
				}
			}
			this.toShow = this.toShow.add(label);
		},

		errorsFor: function( element ) {
			var name = this.idOrName(element);
			return this.errors().filter(function() {
				return $(this).attr("for") === name;
			});
		},

		idOrName: function( element ) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		validationTargetFor: function( element ) {
			// if radio/checkbox, validate first element in group instead
			if ( this.checkable(element) ) {
				element = this.findByName( element.name ).not(this.settings.ignore)[0];
			}
			return element;
		},

		checkable: function( element ) {
			return (/radio|checkbox/i).test(element.type);
		},

		findByName: function( name ) {
			return $(this.currentForm).find("[name='" + name + "']");
		},

		getLength: function( value, element ) {
			switch( element.nodeName.toLowerCase() ) {
			case "select":
				return $("option:selected", element).length;
			case "input":
				if ( this.checkable( element) ) {
					return this.findByName(element.name).filter(":checked").length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
		},

		dependTypes: {
			"boolean": function( param, element ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$(param, element.form).length;
			},
			"function": function( param, element ) {
				return param(element);
			}
		},

		optional: function( element ) {
			var val = this.elementValue(element);
			return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[element.name] ) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[element.name];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
				this.formSubmitted = false;
			}
		},

		previousValue: function( element ) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}

	},

	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		number: {number: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[className] = rules;
		} else {
			$.extend(this.classRuleSettings, className);
		}
	},

	classRules: function( element ) {
		var rules = {};
		var classes = $(element).attr("class");
		if ( classes ) {
			$.each(classes.split(" "), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend(rules, $.validator.classRuleSettings[this]);
				}
			});
		}
		return rules;
	},

	attributeRules: function( element ) {
		var rules = {};
		var $element = $(element);
		var type = $element[0].getAttribute("type");

		for (var method in $.validator.methods) {
			var value;

			// support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = $element.get(0).getAttribute(method);
				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}
				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr(method);
			}

			// convert the value to a number for number inputs, and for text for backwards compability
			// allows type="date" and others to be compared as strings
			if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
				value = Number(value);
			}

			if ( value ) {
				rules[method] = value;
			} else if ( type === method && type !== 'range' ) {
				// exception: the jquery validate 'range' method
				// does not test for the html5 'range' type
				rules[method] = true;
			}
		}

		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var method, value,
			rules = {}, $element = $(element);
		for (method in $.validator.methods) {
			value = $element.data("rule-" + method.toLowerCase());
			if ( value !== undefined ) {
				rules[method] = value;
			}
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {};
		var validator = $.data(element.form, "validator");
		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {
		// handle dependency check
		$.each(rules, function( prop, val ) {
			// ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[prop];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch (typeof val.depends) {
				case "string":
					keepRule = !!$(val.depends, element.form).length;
					break;
				case "function":
					keepRule = val.depends.call(element, element);
					break;
				}
				if ( keepRule ) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});

		// evaluate parameters
		$.each(rules, function( rule, parameter ) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});

		// clean number parameters
		$.each(['minlength', 'maxlength'], function() {
			if ( rules[this] ) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			var parts;
			if ( rules[this] ) {
				if ( $.isArray(rules[this]) ) {
					rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
				} else if ( typeof rules[this] === "string" ) {
					parts = rules[this].split(/[\s,]+/);
					rules[this] = [Number(parts[0]), Number(parts[1])];
				}
			}
		});

		if ( $.validator.autoCreateRanges ) {
			// auto-create ranges
			if ( rules.min && rules.max ) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength && rules.maxlength ) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function( name, method, message ) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
		if ( method.length < 3 ) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function( value, element, param ) {
			// check if dependency is met
			if ( !this.depend(param, element) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $(element).val();
				return val && val.length > 0;
			}
			if ( this.checkable(element) ) {
				return this.getLength(value, element) > 0;
			}
			return $.trim(value).length > 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function( value, element ) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function( value, element ) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function( value, element ) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function( value, element ) {
			return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function( value, element ) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function( value, element ) {
			return this.optional(element) || /^\d+$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function( value, element ) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test(value) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				nDigit = parseInt(cDigit, 10);
				if ( bEven ) {
					if ( (nDigit *= 2) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) === 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function( value, element, param ) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $(param);
			if ( this.settings.onfocusout ) {
				target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
					$(element).valid();
				});
			}
			return value === target.val();
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function( value, element, param ) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue(element);
			if (!this.settings.messages[element.name] ) {
				this.settings.messages[element.name] = {};
			}
			previous.originalMessage = this.settings.messages[element.name].remote;
			this.settings.messages[element.name].remote = previous.message;

			param = typeof param === "string" && {url:param} || param;

			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			var validator = this;
			this.startRequest(element);
			var data = {};
			data[element.name] = value;
			$.ajax($.extend(true, {
				url: param,
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				success: function( response ) {
					validator.settings.messages[element.name].remote = previous.originalMessage;
					var valid = response === true || response === "true";
					if ( valid ) {
						var submitted = validator.formSubmitted;
						validator.prepareElement(element);
						validator.formSubmitted = submitted;
						validator.successList.push(element);
						delete validator.invalid[element.name];
						validator.showErrors();
					} else {
						var errors = {};
						var message = response || validator.defaultMessage( element, "remote" );
						errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
						validator.invalid[element.name] = true;
						validator.showErrors(errors);
					}
					previous.valid = valid;
					validator.stopRequest(element, valid);
				}
			}, param));
			return "pending";
		}

	}

});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

}(jQuery));

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
(function($) {
	var pendingRequests = {};
	// Use a prefilter if available (1.5+)
	if ( $.ajaxPrefilter ) {
		$.ajaxPrefilter(function( settings, _, xhr ) {
			var port = settings.port;
			if ( settings.mode === "abort" ) {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = xhr;
			}
		});
	} else {
		// Proxy ajax
		var ajax = $.ajax;
		$.ajax = function( settings ) {
			var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
				port = ( "port" in settings ? settings : $.ajaxSettings ).port;
			if ( mode === "abort" ) {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = ajax.apply(this, arguments);
				return pendingRequests[port];
			}
			return ajax.apply(this, arguments);
		};
	}
}(jQuery));

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
(function($) {
	$.extend($.fn, {
		validateDelegate: function( delegate, type, handler ) {
			return this.bind(type, function( event ) {
				var target = $(event.target);
				if ( target.is(delegate) ) {
					return handler.apply(target, arguments);
				}
			});
		}
	});
}(jQuery));
/*jshint eqnull:true */
/*!
 * jQuery Cookie Plugin v1.2
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (value === null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
			if (decode(parts.shift()) === key) {
				var cookie = decode(parts.join('='));
				return config.json ? JSON.parse(cookie) : cookie;
			}
		}

		return null;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== null) {
			$.cookie(key, null, options);
			return true;
		}
		return false;
	};

})(jQuery, document);
/* $.fn.inputToJSON */
/*!
 * Convert input fields to JSON object
 */
(function ($) {

  $.fn.inputToJSON = function() {
    var $this = $(this);

    var result = {};

    $this.each(function() {
      var $input  = $(this)
        , name    = $input.attr("name")
        , value   = $input.val()
        ;

      name && (result[name] = value);
    });

    return result;
  };

})(jQuery);/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/

(function(global){
	var _$LAB = global.$LAB,
	
		// constants for the valid keys of the options object
		_UseLocalXHR = "UseLocalXHR",
		_AlwaysPreserveOrder = "AlwaysPreserveOrder",
		_AllowDuplicates = "AllowDuplicates",
		_CacheBust = "CacheBust",
		/*!START_DEBUG*/_Debug = "Debug",/*!END_DEBUG*/
		_BasePath = "BasePath",
		
		// stateless variables used across all $LAB instances
		root_page = /^[^?#]*\//.exec(location.href)[0],
		root_domain = /^\w+\:\/\/\/?[^\/]+/.exec(root_page)[0],
		append_to = document.head || document.getElementsByTagName("head"),
		
		// inferences... ick, but still necessary
		opera_or_gecko = (global.opera && Object.prototype.toString.call(global.opera) == "[object Opera]") || ("MozAppearance" in document.documentElement.style),

/*!START_DEBUG*/
		// console.log() and console.error() wrappers
		log_msg = function(){}, 
		log_error = log_msg,
/*!END_DEBUG*/
		
		// feature sniffs (yay!)
		test_script_elem = document.createElement("script"),
		explicit_preloading = typeof test_script_elem.preload == "boolean", // http://wiki.whatwg.org/wiki/Script_Execution_Control#Proposal_1_.28Nicholas_Zakas.29
		real_preloading = explicit_preloading || (test_script_elem.readyState && test_script_elem.readyState == "uninitialized"), // will a script preload with `src` set before DOM append?
		script_ordered_async = !real_preloading && test_script_elem.async === true, // http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
		
		// XHR preloading (same-domain) and cache-preloading (remote-domain) are the fallbacks (for some browsers)
		xhr_or_cache_preloading = !real_preloading && !script_ordered_async && !opera_or_gecko
	;

/*!START_DEBUG*/
	// define console wrapper functions if applicable
	if (global.console && global.console.log) {
		if (!global.console.error) global.console.error = global.console.log;
		log_msg = function(msg) { global.console.log(msg); };
		log_error = function(msg,err) { global.console.error(msg,err); };
	}
/*!END_DEBUG*/

	// test for function
	function is_func(func) { return Object.prototype.toString.call(func) == "[object Function]"; }

	// test for array
	function is_array(arr) { return Object.prototype.toString.call(arr) == "[object Array]"; }

	// make script URL absolute/canonical
	function canonical_uri(src,base_path) {
		var absolute_regex = /^\w+\:\/\//;
		
		// is `src` is protocol-relative (begins with // or ///), prepend protocol
		if (/^\/\/\/?/.test(src)) {
			src = location.protocol + src;
		}
		// is `src` page-relative? (not an absolute URL, and not a domain-relative path, beginning with /)
		else if (!absolute_regex.test(src) && src.charAt(0) != "/") {
			// prepend `base_path`, if any
			src = (base_path || "") + src;
		}
		// make sure to return `src` as absolute
		return absolute_regex.test(src) ? src : ((src.charAt(0) == "/" ? root_domain : root_page) + src);
	}

	// merge `source` into `target`
	function merge_objs(source,target) {
		for (var k in source) { if (source.hasOwnProperty(k)) {
			target[k] = source[k]; // TODO: does this need to be recursive for our purposes?
		}}
		return target;
	}

	// does the chain group have any ready-to-execute scripts?
	function check_chain_group_scripts_ready(chain_group) {
		var any_scripts_ready = false;
		for (var i=0; i<chain_group.scripts.length; i++) {
			if (chain_group.scripts[i].ready && chain_group.scripts[i].exec_trigger) {
				any_scripts_ready = true;
				chain_group.scripts[i].exec_trigger();
				chain_group.scripts[i].exec_trigger = null;
			}
		}
		return any_scripts_ready;
	}

	// creates a script load listener
	function create_script_load_listener(elem,registry_item,flag,onload) {
		elem.onload = elem.onreadystatechange = function() {
			if ((elem.readyState && elem.readyState != "complete" && elem.readyState != "loaded") || registry_item[flag]) return;
			elem.onload = elem.onreadystatechange = null;
			onload();
		};
	}

	// script executed handler
	function script_executed(registry_item) {
		registry_item.ready = registry_item.finished = true;
		for (var i=0; i<registry_item.finished_listeners.length; i++) {
			registry_item.finished_listeners[i]();
		}
		registry_item.ready_listeners = [];
		registry_item.finished_listeners = [];
	}

	// make the request for a scriptha
	function request_script(chain_opts,script_obj,registry_item,onload,preload_this_script) {
		// setTimeout() "yielding" prevents some weird race/crash conditions in older browsers
		setTimeout(function(){
			var script, src = script_obj.real_src, xhr;
			
			// don't proceed until `append_to` is ready to append to
			if ("item" in append_to) { // check if `append_to` ref is still a live node list
				if (!append_to[0]) { // `append_to` node not yet ready
					// try again in a little bit -- note: will re-call the anonymous function in the outer setTimeout, not the parent `request_script()`
					setTimeout(arguments.callee,25);
					return;
				}
				// reassign from live node list ref to pure node ref -- avoids nasty IE bug where changes to DOM invalidate live node lists
				append_to = append_to[0];
			}
			script = document.createElement("script");
			if (script_obj.type) script.type = script_obj.type;
			if (script_obj.charset) script.charset = script_obj.charset;
			
			// should preloading be used for this script?
			if (preload_this_script) {
				// real script preloading?
				if (real_preloading) {
					/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script preload: "+src);/*!END_DEBUG*/
					registry_item.elem = script;
					if (explicit_preloading) { // explicit preloading (aka, Zakas' proposal)
						script.preload = true;
						script.onpreload = onload;
					}
					else {
						script.onreadystatechange = function(){
							if (script.readyState == "loaded") onload();
						};
					}
					script.src = src;
					// NOTE: no append to DOM yet, appending will happen when ready to execute
				}
				// same-domain and XHR allowed? use XHR preloading
				else if (preload_this_script && src.indexOf(root_domain) == 0 && chain_opts[_UseLocalXHR]) {
					xhr = new XMLHttpRequest(); // note: IE never uses XHR (it supports true preloading), so no more need for ActiveXObject fallback for IE <= 7
					/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script preload (xhr): "+src);/*!END_DEBUG*/
					xhr.onreadystatechange = function() {
						if (xhr.readyState == 4) {
							xhr.onreadystatechange = function(){}; // fix a memory leak in IE
							registry_item.text = xhr.responseText + "\n//@ sourceURL=" + src; // http://blog.getfirebug.com/2009/08/11/give-your-eval-a-name-with-sourceurl/
							onload();
						}
					};
					xhr.open("GET",src);
					xhr.send();
				}
				// as a last resort, use cache-preloading
				else {
					/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script preload (cache): "+src);/*!END_DEBUG*/
					script.type = "text/cache-script";
					create_script_load_listener(script,registry_item,"ready",function() {
						append_to.removeChild(script);
						onload();
					});
					script.src = src;
					append_to.insertBefore(script,append_to.firstChild);
				}
			}
			// use async=false for ordered async? parallel-load-serial-execute http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
			else if (script_ordered_async) {
				/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script load (ordered async): "+src);/*!END_DEBUG*/
				script.async = false;
				create_script_load_listener(script,registry_item,"finished",onload);
				script.src = src;
				append_to.insertBefore(script,append_to.firstChild);
			}
			// otherwise, just a normal script element
			else {
				/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script load: "+src);/*!END_DEBUG*/
				create_script_load_listener(script,registry_item,"finished",onload);
				script.src = src;
				append_to.insertBefore(script,append_to.firstChild);
			}
		},0);
	}
		
	// create a clean instance of $LAB
	function create_sandbox() {
		var global_defaults = {},
			can_use_preloading = real_preloading || xhr_or_cache_preloading,
			queue = [],
			registry = {},
			instanceAPI
		;
		
		// global defaults
		global_defaults[_UseLocalXHR] = true;
		global_defaults[_AlwaysPreserveOrder] = false;
		global_defaults[_AllowDuplicates] = false;
		global_defaults[_CacheBust] = false;
		/*!START_DEBUG*/global_defaults[_Debug] = false;/*!END_DEBUG*/
		global_defaults[_BasePath] = "";

		// execute a script that has been preloaded already
		function execute_preloaded_script(chain_opts,script_obj,registry_item) {
			var script;
			
			function preload_execute_finished() {
				if (script != null) { // make sure this only ever fires once
					script = null;
					script_executed(registry_item);
				}
			}
			
			if (registry[script_obj.src].finished) return;
			if (!chain_opts[_AllowDuplicates]) registry[script_obj.src].finished = true;
			
			script = registry_item.elem || document.createElement("script");
			if (script_obj.type) script.type = script_obj.type;
			if (script_obj.charset) script.charset = script_obj.charset;
			create_script_load_listener(script,registry_item,"finished",preload_execute_finished);
			
			// script elem was real-preloaded
			if (registry_item.elem) {
				registry_item.elem = null;
			}
			// script was XHR preloaded
			else if (registry_item.text) {
				script.onload = script.onreadystatechange = null;	// script injection doesn't fire these events
				script.text = registry_item.text;
			}
			// script was cache-preloaded
			else {
				script.src = script_obj.real_src;
			}
			append_to.insertBefore(script,append_to.firstChild);

			// manually fire execution callback for injected scripts, since events don't fire
			if (registry_item.text) {
				preload_execute_finished();
			}
		}
	
		// process the script request setup
		function do_script(chain_opts,script_obj,chain_group,preload_this_script) {
			var registry_item,
				registry_items,
				ready_cb = function(){ script_obj.ready_cb(script_obj,function(){ execute_preloaded_script(chain_opts,script_obj,registry_item); }); },
				finished_cb = function(){ script_obj.finished_cb(script_obj,chain_group); }
			;
			
			script_obj.src = canonical_uri(script_obj.src,chain_opts[_BasePath]);
			script_obj.real_src = script_obj.src + 
				// append cache-bust param to URL?
				(chain_opts[_CacheBust] ? ((/\?.*$/.test(script_obj.src) ? "&_" : "?_") + ~~(Math.random()*1E9) + "=") : "")
			;
			
			if (!registry[script_obj.src]) registry[script_obj.src] = {items:[],finished:false};
			registry_items = registry[script_obj.src].items;

			// allowing duplicates, or is this the first recorded load of this script?
			if (chain_opts[_AllowDuplicates] || registry_items.length == 0) {
				registry_item = registry_items[registry_items.length] = {
					ready:false,
					finished:false,
					ready_listeners:[ready_cb],
					finished_listeners:[finished_cb]
				};

				request_script(chain_opts,script_obj,registry_item,
					// which callback type to pass?
					(
					 	(preload_this_script) ? // depends on script-preloading
						function(){
							registry_item.ready = true;
							for (var i=0; i<registry_item.ready_listeners.length; i++) {
								registry_item.ready_listeners[i]();
							}
							registry_item.ready_listeners = [];
						} :
						function(){ script_executed(registry_item); }
					),
					// signal if script-preloading should be used or not
					preload_this_script
				);
			}
			else {
				registry_item = registry_items[0];
				if (registry_item.finished) {
					finished_cb();
				}
				else {
					registry_item.finished_listeners.push(finished_cb);
				}
			}
		}

		// creates a closure for each separate chain spawned from this $LAB instance, to keep state cleanly separated between chains
		function create_chain() {
			var chainedAPI,
				chain_opts = merge_objs(global_defaults,{}),
				chain = [],
				exec_cursor = 0,
				scripts_currently_loading = false,
				group
			;
			
			// called when a script has finished preloading
			function chain_script_ready(script_obj,exec_trigger) {
				/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("script preload finished: "+script_obj.real_src);/*!END_DEBUG*/
				script_obj.ready = true;
				script_obj.exec_trigger = exec_trigger;
				advance_exec_cursor(); // will only check for 'ready' scripts to be executed
			}

			// called when a script has finished executing
			function chain_script_executed(script_obj,chain_group) {
				/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("script execution finished: "+script_obj.real_src);/*!END_DEBUG*/
				script_obj.ready = script_obj.finished = true;
				script_obj.exec_trigger = null;
				// check if chain group is all finished
				for (var i=0; i<chain_group.scripts.length; i++) {
					if (!chain_group.scripts[i].finished) return;
				}
				// chain_group is all finished if we get this far
				chain_group.finished = true;
				advance_exec_cursor();
			}

			// main driver for executing each part of the chain
			function advance_exec_cursor() {
				while (exec_cursor < chain.length) {
					if (is_func(chain[exec_cursor])) {
						/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("$LAB.wait() executing: "+chain[exec_cursor]);/*!END_DEBUG*/
						try { chain[exec_cursor++](); } catch (err) {
							/*!START_DEBUG*/if (chain_opts[_Debug]) log_error("$LAB.wait() error caught: ",err);/*!END_DEBUG*/
						}
						continue;
					}
					else if (!chain[exec_cursor].finished) {
						if (check_chain_group_scripts_ready(chain[exec_cursor])) continue;
						break;
					}
					exec_cursor++;
				}
				// we've reached the end of the chain (so far)
				if (exec_cursor == chain.length) {
					scripts_currently_loading = false;
					group = false;
				}
			}
			
			// setup next chain script group
			function init_script_chain_group() {
				if (!group || !group.scripts) {
					chain.push(group = {scripts:[],finished:true});
				}
			}

			// API for $LAB chains
			chainedAPI = {
				// start loading one or more scripts
				script:function(){
					for (var i=0; i<arguments.length; i++) {
						(function(script_obj,script_list){
							var splice_args;
							
							if (!is_array(script_obj)) {
								script_list = [script_obj];
							}
							for (var j=0; j<script_list.length; j++) {
								init_script_chain_group();
								script_obj = script_list[j];
								
								if (is_func(script_obj)) script_obj = script_obj();
								if (!script_obj) continue;
								if (is_array(script_obj)) {
									// set up an array of arguments to pass to splice()
									splice_args = [].slice.call(script_obj); // first include the actual array elements we want to splice in
									splice_args.unshift(j,1); // next, put the `index` and `howMany` parameters onto the beginning of the splice-arguments array
									[].splice.apply(script_list,splice_args); // use the splice-arguments array as arguments for splice()
									j--; // adjust `j` to account for the loop's subsequent `j++`, so that the next loop iteration uses the same `j` index value
									continue;
								}
								if (typeof script_obj == "string") script_obj = {src:script_obj};
								script_obj = merge_objs(script_obj,{
									ready:false,
									ready_cb:chain_script_ready,
									finished:false,
									finished_cb:chain_script_executed
								});
								group.finished = false;
								group.scripts.push(script_obj);
								
								do_script(chain_opts,script_obj,group,(can_use_preloading && scripts_currently_loading));
								scripts_currently_loading = true;
								
								if (chain_opts[_AlwaysPreserveOrder]) chainedAPI.wait();
							}
						})(arguments[i],arguments[i]);
					}
					return chainedAPI;
				},
				// force LABjs to pause in execution at this point in the chain, until the execution thus far finishes, before proceeding
				wait:function(){
					if (arguments.length > 0) {
						for (var i=0; i<arguments.length; i++) {
							chain.push(arguments[i]);
						}
						group = chain[chain.length-1];
					}
					else group = false;
					
					advance_exec_cursor();
					
					return chainedAPI;
				}
			};

			// the first chain link API (includes `setOptions` only this first time)
			return {
				script:chainedAPI.script, 
				wait:chainedAPI.wait, 
				setOptions:function(opts){
					merge_objs(opts,chain_opts);
					return chainedAPI;
				}
			};
		}

		// API for each initial $LAB instance (before chaining starts)
		instanceAPI = {
			// main API functions
			setGlobalDefaults:function(opts){
				merge_objs(opts,global_defaults);
				return instanceAPI;
			},
			setOptions:function(){
				return create_chain().setOptions.apply(null,arguments);
			},
			script:function(){
				return create_chain().script.apply(null,arguments);
			},
			wait:function(){
				return create_chain().wait.apply(null,arguments);
			},

			// built-in queuing for $LAB `script()` and `wait()` calls
			// useful for building up a chain programmatically across various script locations, and simulating
			// execution of the chain
			queueScript:function(){
				queue[queue.length] = {type:"script", args:[].slice.call(arguments)};
				return instanceAPI;
			},
			queueWait:function(){
				queue[queue.length] = {type:"wait", args:[].slice.call(arguments)};
				return instanceAPI;
			},
			runQueue:function(){
				var $L = instanceAPI, len=queue.length, i=len, val;
				for (;--i>=0;) {
					val = queue.shift();
					$L = $L[val.type].apply(null,val.args);
				}
				return $L;
			},

			// rollback `[global].$LAB` to what it was before this file was loaded, the return this current instance of $LAB
			noConflict:function(){
				global.$LAB = _$LAB;
				return instanceAPI;
			},

			// create another clean instance of $LAB
			sandbox:function(){
				return create_sandbox();
			}
		};

		return instanceAPI;
	}

	// create the main instance of $LAB
	global.$LAB = create_sandbox();


	/* The following "hack" was suggested by Andrea Giammarchi and adapted from: http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html
	   NOTE: this hack only operates in FF and then only in versions where document.readyState is not present (FF < 3.6?).
	   
	   The hack essentially "patches" the **page** that LABjs is loaded onto so that it has a proper conforming document.readyState, so that if a script which does 
	   proper and safe dom-ready detection is loaded onto a page, after dom-ready has passed, it will still be able to detect this state, by inspecting the now hacked 
	   document.readyState property. The loaded script in question can then immediately trigger any queued code executions that were waiting for the DOM to be ready. 
	   For instance, jQuery 1.4+ has been patched to take advantage of document.readyState, which is enabled by this hack. But 1.3.2 and before are **not** safe or 
	   fixed by this hack, and should therefore **not** be lazy-loaded by script loader tools such as LABjs.
	*/ 
	(function(addEvent,domLoaded,handler){
		if (document.readyState == null && document[addEvent]){
			document.readyState = "loading";
			document[addEvent](domLoaded,handler = function(){
				document.removeEventListener(domLoaded,handler,false);
				document.readyState = "complete";
			},false);
		}
	})("addEventListener","DOMContentLoaded");

})(this);
/* QueryString */
String.prototype.getParameterByName = function(name) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var url = this;
  var regexS = "[\\?&#]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( this );
  return results ? decodeURIComponent(results[1].replace(/\+/g, " ")) : "";
};

/*
Base64 encoding and decoding
*/
var Base64 = {
  // private property
  _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  // public method for encoding
  encode : function (input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;

      input = Base64._utf8_encode(input);

      while (i < input.length) {
          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);

          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;

          if (isNaN(chr2)) {
              enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
              enc4 = 64;
          }

          output = output +
          Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) +
          Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);
      }

      return output;
  },

  // public method for decoding
  decode : function (input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      while (i < input.length) {

          enc1 = Base64._keyStr.indexOf(input.charAt(i++));
          enc2 = Base64._keyStr.indexOf(input.charAt(i++));
          enc3 = Base64._keyStr.indexOf(input.charAt(i++));
          enc4 = Base64._keyStr.indexOf(input.charAt(i++));

          chr1 = (enc1 << 2) | (enc2 >> 4);
          chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
          chr3 = ((enc3 & 3) << 6) | enc4;

          output = output + String.fromCharCode(chr1);

          if (enc3 != 64) {
              output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
              output = output + String.fromCharCode(chr3);
          }

      }

      output = Base64._utf8_decode(output);

      return output;
  },

  // private method for UTF-8 encoding
  _utf8_encode : function (string) {
      string = string.replace(/\r\n/g,"\n");
      var utftext = "";

      for (var n = 0; n < string.length; n++) {

          var c = string.charCodeAt(n);

          if (c < 128) {
              utftext += String.fromCharCode(c);
          }
          else if((c > 127) && (c < 2048)) {
              utftext += String.fromCharCode((c >> 6) | 192);
              utftext += String.fromCharCode((c & 63) | 128);
          }
          else {
              utftext += String.fromCharCode((c >> 12) | 224);
              utftext += String.fromCharCode(((c >> 6) & 63) | 128);
              utftext += String.fromCharCode((c & 63) | 128);
          }

      }

      return utftext;
  },

  // private method for UTF-8 decoding
  _utf8_decode : function (utftext) {
      var string = "";
      var i = 0;
      var c = c1 = c2 = 0;

      while ( i < utftext.length ) {

          c = utftext.charCodeAt(i);

          if (c < 128) {
              string += String.fromCharCode(c);
              i++;
          }
          else if((c > 191) && (c < 224)) {
              c2 = utftext.charCodeAt(i+1);
              string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
              i += 2;
          }
          else {
              c2 = utftext.charCodeAt(i+1);
              c3 = utftext.charCodeAt(i+2);
              string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
              i += 3;
          }

      }
      return string;
  }
};// doT.js
// 2011, Laura Doktorova, https://github.com/olado/doT
//
// doT.js is an open source component of http://bebedo.com
// Licensed under the MIT license.
//
(function() {
	"use strict";

	var doT = {
		version: '0.2.0',
		templateSettings: {
			evaluate:    /\{\{([\s\S]+?)\}\}/g,
			interpolate: /\{\{=([\s\S]+?)\}\}/g,
			encode:      /\{\{!([\s\S]+?)\}\}/g,
			use:         /\{\{#([\s\S]+?)\}\}/g,
			define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
			conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
			iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
			varname: 'it',
			strip: true,
			append: true,
			selfcontained: false
		},
		template: undefined, //fn, compile template
		compile:  undefined  //fn, for express
	};

	var global = (function(){ return this || (0,eval)('this'); }());

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = doT;
	} else if (typeof define === 'function' && define.amd) {
		define(function(){return doT;});
	} else {
		global.doT = doT;
	}

	function encodeHTMLSource() {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },
			matchHTML = /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : code;
		};
	}
	global.encodeHTML = encodeHTMLSource();

	var startend = {
		append: { start: "'+(",      end: ")+'",      startencode: "'+encodeHTML(" },
		split:  { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML("}
	}, skip = /$^/;

	function resolveDefs(c, block, def) {
		return ((typeof block === 'string') ? block : block.toString())
		.replace(c.define || skip, function(m, code, assign, value) {
			if (code.indexOf('def.') === 0) {
				code = code.substring(4);
			}
			if (!(code in def)) {
				if (assign === ':') {
					def[code]= value;
				} else {
					eval("def['"+code+"']=" + value);
				}
			}
			return '';
		})
		.replace(c.use || skip, function(m, code) {
			var v = eval(code);
			return v ? resolveDefs(c, v, def) : v;
		});
	}

	function unescape(code) {
		return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, ' ');
	}

	doT.template = function(tmpl, c, def) {
		c = c || doT.templateSettings;
		var cse = c.append ? startend.append : startend.split, str, needhtmlencode, sid=0, indv;

		if (c.use || c.define) {
			var olddef = global.def; global.def = def || {}; // workaround minifiers
			str = resolveDefs(c, tmpl, global.def);
			global.def = olddef;
		} else str = tmpl;

		str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g,' ')
					.replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,''): str)
			.replace(/'|\\/g, '\\$&')
			.replace(c.interpolate || skip, function(m, code) {
				return cse.start + unescape(code) + cse.end;
			})
			.replace(c.encode || skip, function(m, code) {
				needhtmlencode = true;
				return cse.startencode + unescape(code) + cse.end;
			})
			.replace(c.conditional || skip, function(m, elsecase, code) {
				return elsecase ?
					(code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='") :
					(code ? "';if(" + unescape(code) + "){out+='" : "';}out+='");
			})
			.replace(c.iterate || skip, function(m, iterate, vname, iname) {
				if (!iterate) return "';} } out+='";
				sid+=1; indv=iname || "i"+sid; iterate=unescape(iterate);
				return "';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","+indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid+"){"
					+vname+"=arr"+sid+"["+indv+"+=1];out+='";
			})
			.replace(c.evaluate || skip, function(m, code) {
				return "';" + unescape(code) + "out+='";
			})
			+ "';return out;")
			.replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r')
			.replace(/(\s|;|}|^|{)out\+='';/g, '$1').replace(/\+''/g, '')
			.replace(/(\s|;|}|^|{)out\+=''\+/g,'$1out+=');

		if (needhtmlencode && c.selfcontained) {
			str = "var encodeHTML=(" + encodeHTMLSource.toString() + "());" + str;
		}
		try {
			return new Function(c.varname, str);
		} catch (e) {
			if (typeof console !== 'undefined') console.log("Could not create a template function: " + str);
			throw e;
		}
	};

	doT.compile = function(tmpl, def) {
		return doT.template(tmpl, null, def);
	};
}());
/*
debug infomation
*/
if (typeof console == "undefined") {
  var logArr = window.logArr = [];
  console = window.console = {
    log : function() {
      logArr.push(arguments);
    }
  };
}

(function(window) {

  /*ALARM navigation to where*/
  window.ALARMNAVI = {
    0: "pdus",
    1: "ips",
    2: "cbs",
    3: "outlets",
    4: "extsens"
  };

  window.SENSORALARMURL = {
    // 1: "alarmsensortemp",
    1: "sensor1",
    // 2: "alarmsensorhum",
    2: "sensor2",
    // 3: "alarmsensordoor",
    3: "sensor3",
    4: "alarmsensordry",
    5: "alarmsensorspot",
    6: "alarmsensorrope",
    7: "alarmsensorsmoke",
    8: "alarmsensorbeacon"
  };

  //Related to color, will no move the language packaged.
  window.STATUSTYPE = {
    0 : "Off",
    1 : "Upper Critical",
    2 : "Upper Warning",
    3 : "Alarm",
    4 : "Lower Warning",
    5 : "Normal",
    8 : "Lower Critical"
  };

  //PRIVILEGES with order
  window.PRIVILEGES_Arr = [
    0x00000100 ,
    0x00010000 ,
    0x00020000 ,
    0x00000010 ,
    0x00004000 ,
    0x02000000 ,
    0x00000080 ,
    0x00000020 ,
    0x00040000 ,
    0x00000200 ,
    0x00000040 ,
    0x00000400 ,
    0x00000008 ,
    0x00000002 ,
    0x00000004 ,
    0x00080000 ,
    0x00100000 ,
    0x00000800 ,
    0x01000000 ,
    0x00800000 ,
    0x00001000 ,
    0x00200000 ,
    0x00400000 ,
    0x00008000 ,
    0x00002000
  ];
  
  window.devtypeinfo = 0;
  window.phasetypeinfo = 1;

  //add by zzw begin
  window.THRESHODE_DEFAULT = {
    current : 0.5,
    voltage : 2,
    power : 100,
    sensorT : 1,
    sensorH : 3
  };
  //add by zzw end

  //EnLogic namespace
  var EL = window.EL = window.EL || {};

  EL.debug = 1;

  //MODEL
  window.MODEL = {};

})(window);
/*configuration.js*/
/*Model*/
(function(window) {

/*--> FOR ALARM BEGIN <--*/
  window.ALARMTYPE = {
    0: "Unit",
    1: "Input Phases",
    2: "Circuit Breaker",
    3: "Outlets",
    4: "External Sensors"
  };

  window.SENSORTYPE = {
    1: "Temperature (℃)",
    2: "Humidity (%)",
    3: "Dry Contact",
    4: "Door Contact",
    5: "Spot Fluid",
    6: "Rope Fluid",
    7: "Smoke",
    8: "Beacon"
  };

  window.TEMPUNIT = {
    0: "C",
    1: "F"
  };

  window.ALARMUNITTYPE = {
    A: {
      unit: " (A)",
      factor: 1000,
      fixed: 2,
      max: 16,
      min: 0,
      title: "Current"
    },
    V: {
      unit: " (V)",
      factor: 1000,
      fixed: 0,
      max: 260,
      min: 90,
      title: "Voltage"
    },
    VA: {
      unit: " (VA)",
      factor: 1000,
      fixed: 0,
      min: 0,
      max: 49140,
      title: "Apparent Power"
    },
    W: {
      unit: " (W)",
      factor: 1000,
      fixed: 0,
      min: 0,
      max: 49140,
      title: "Active Power"
    },
    Wh: {
      unit: " (Wh)",
      factor: 1000,
      fixed: 2,
      min: 0,
      max: 1000000000,
      title: "Energy"
    },
    C: {
      unit : " (°C)",
      factor: 1,
      fixed: 0,
      min: 0,
      max: 75,
      title: "Temperature"
    },
    F: {
      unit : " (F)",
      factor: 1,
      fixed: 0,
      min: 32,
      max: 167,
      title: "Temperature"
    },
    H: {
      unit : " (%)",
      factor : 1,
      fixed: 0,
      min: 15,
      max: 90,
      title: "Humidity"
    }
  };
/*--> FOR ALARM END <--*/

/*--> FOR POWER ENERGY BEGIN <--*/
  window.POWERENERGY = {
    "activepower" : "Active Power (W)",
    "apparentpower" : "Apparent Power (VA)",
    "totalenergymeter" : "Total Energy Meter (kWh)"
  };
/*--> FOR POWER ENERGY END <--*/

/*--> FOR ENENTRULE SETTING DIALOG BEGIN <--*/
  window.EVENTMAP = {
    1 : "Critical Alarm",
    2 : "Warning Alarm",
    4 : "External Sensor Status Changed",
    8 : "PDU Configuration File Imported/Exported",
    16 : "Firmware Update",
    32 : "Network Card Reset/Start",
    64 : "Communication Status Changed",
    128 : "Password Changed",
    256 : "Log File Cleared",
    512 : "Network Interface Link Status Changed"
  };

  MODEL.eventrl = {
    spEnableAll: "Enable All",
    spEventRule: "Event Rule",
  };
/*--> FOR ENENTRULE SETTING DIALOG END <--*/

  /*Root of the tree*/
  EL.TreeRoot = {
    "id": "dashboard",
    "text": "Dashboard",
    "iconCls": "icon-desk"
  };

/*--> FOR LOGIN PAGE BEGIN <--*/
  /*login page*/ 
  MODEL.login = {
    title:    "Login",
    username: "Username",
    password: "Password",
    login:    "Login",
    clear:    "Clear"
  };
/*--> FOR LOGIN PAGE END <--*/

/*--> FOR DIALOG HEAD BEGIN <--*/
  /*master page*/
  MODEL.master = {
    useradmin: {
      txt: "User Administration",
      changepw: {
        txt: "Change Password",
        dlg: "Change User Password"
      },
      users: {
        txt: "Users",
        dlg: "Manage Users"
      },    
      roles: {
        txt: "Roles",
        dlg: "Manage Roles"
      }
    },
    deviceadmin: {
      txt: "Device Configuration",
      networkser: {
        txt: "Network Services",
        http: {
          txt: "HTTP",
          dlg: "HTTP Settings"
        },
        snmp: {
          txt: "SNMP",
          dlg: "SNMP Settings"
        },
        ssh: {
          txt: "SSH",
          dlg: "SSH Settings"
        },
        telnet: {
          txt: "TELNET",
          dlg: "TELNET Settings"
        },
        ftp: {
          txt: "FTP",
          dlg: "FTP Settings"
        }
      },
      networkcon: {
        txt: "Network Configuration",
        dlg: "Network Configuration"
      },
      security: {
        txt: "Security",
        loginset: {
          txt: "Login Settings",
          dlg: "Login Settings"
        },
        passwordpol: {
          txt: "Password Policy",
          dlg: "Password Policy"
        },
        forcehttps: {
          txt: "Force HTTPS for Web Access",
          dlg: "Force Https"
        }
      },
      eventrules: {
        txt: "Event Rules",
        dlg: "Event Rule Setting"
      },
      datalog: {
        txt: "Data Log",
        dlg: "Data Logging Settings"
      },
      datetime: {
        txt: "Date/Time",
        dlg: "Configure Date/Time Settings"
      },
      smtpemail: {
        txt: "SMTP Email",
        dlg: "SMTP Server Settings"
      },
      serverreach: {
        txt: "Server Reachability",
        dlg: "Server Reachability"
      },
      usb: {
        txt: "USB",
        dlg: "USB Settings"
      },
      pduinfo: {
        txt: "PDU Info",
        dlg: "PDU Info Settings"
      },
      sensorinfo: {
        txt: "Sensor Info",
        dlg: "Sensor Info Settings"
      }
    },
    systemadmin: {
      txt: "System Administration",
      vweventlog: {
        txt: "View Event Log",
        dlg: "View Event Log"
      },
      vwdatalog: {
        txt: "View Data Log",
        dlg: "View Data Log"
      },
      firmwaremt: {
        txt: "Firmware Maintenance",
        udfirmware: {
          txt: "Update Firmware",
          dlg: "Firmware update"
        },
        vwfirmwareud: {
          txt: "View Firmware Update History",
          dlg: "Firmware Update History"
        }
      },
      conusers: {
        txt: "Connected Users",
        dlg: "Connected Users"
      },
      diagnostic: {
        txt: "Download Log",
        dldiaginfo: {
          txt: "Download Log Information",
          dlg: "Download Log Information"
        }
      },
      pduconfig: {
        txt: "PDU Configuration file",
        dlg: "Configuration File"
      },
      deviceinfo: {
        txt: "Device Information",
        dlg: "Device Information"
      },
      nwcardreset: {
        txt: "Network Card Reset",
        dlg: "Network Card Reset"
      }
    },
    help: {
      txt: "Help",
      userguide: {
        txt: "User Guide",
        dlg: "User Guide"
      }
    },
    setalarmdl: {
      lowercritical: "Lower Critical",
      lowerwarning: "Lower Warning",
      upperwarning: "Upper Warning",
      uppercritical: "Upper Critical",
      resetthreshold: "Reset Threshold",
      alarmscdelay: "Alarm State Change Delay (samples):",
      alarmsetting: "Alarm Setting",
      enablealarm: "Enable Alarm Setting",
      updatefail: "Update failed",
      lowcriticalinfo: "Low critical + threshold should be less than or equal to low warning!",
      lowwarninfo: "Low warning + 2 times reset threshold should be less than or equal to up warning!",
      upwarninfo: "Up warning + threshold should be less than or equal to up critical!",
      lowcriticalinfo2: "Low critical + 2 times reset threshold should be less than or equal to up warning!",
      lowcriticalinfo3: "Low critical + 2 times reset threshold should be less than or equal to up critical!",
      lowwarninfo2: "Low Warning + 2 times threshold should be less than or equal to up critical!"
    },
    resetdevicedl: {
      txt: "Network Card Reset",
      txt1: "The Network Card will be reset in a few seconds.",
      txt2: "You will be redirected to the login page within",
      txt3: "seconds.",
      txt4: "If redirection does not work, use",
      txt5: "this link",
      txt6: "to the login page."
    },
    language: {
      txt: "Language",
      type: {
        en: "English",
        cn: "Chinese"
      }
    },
    logout: "Logout",
    doreallylogout: "Do you really want to logout?",
    tree: "PDU Explorer",
    login: "Logged in as {0}",
    greeting: "Welcome to Enlogic",
    ip:   "<b>IP Adress: </b>{0}",
    time: "<b>Login Time: </b>{0}"
  };
/*--> FOR DIALOG HEAD END <--*/

/*--> FOR INDEX(ALL DASHBOARD EXCEPT SENSOR PART) PAGE and SOME PROMPT FOR RESET ACTION BEGIN <--*/
  /*--left pages--*/ 
  /*Dashboard page*/
  MODEL.dashboard = {
    loading: "Loading",
    status: "Status",
    alarms: "Alarms",
    ok: "OK",
    currentrms: "Current, RMS (A)",
    currentrms2: "Current, RMS (A)",
    cb1current: "CB1 Current",
    cb2current: "CB2 Current",
    cb1status: "CB1 Status",
    cb2status: "CB2 Status",
    voltagerms: "Voltage, RMS (V)",
    voltenergy: "Energy (kWh)",
    pdupowerenergy: "Power",
    externalsensor: "External Sensors",
    externalsensortype: "Type",
    sensorname: "Sensor Name",
    pduname: "PDU Name",
    location: "Location",
    value: "Value"
    // activealarmpdu: "Active Alarms for PDU #",
    // close: "Close",
    // alarmtype: "Alarm Type",
    // count: "Count"
  };

  /*PDU #*/
  MODEL.pdu = {
    pduset: "PDU Setting",
    pduenergy: "PDU Energy",
    pduattribute: "PDU Attribute",
    pduname: "PDU Name",
    pdulocation: "PDU Location",
    pduunitdelay: "PDU Unit Coldstart Delay (0 - 3600 s)",
    outletstate: "Outlet State On PDU Startup",
    resetenergy: "Reset Energy",
    resetolenergy: "Reset Outlet Energy",
    pdumacaddress: "PDU MAC Address",
    rating: "Rating",
    resetenergymeter: "Resettable Energy Meter",
    activepowervalue: "Active Power Value (W)",
    activepowerset: "Active Power Status, Setting",
    reset: "Reset",
    resetsuccess: "Reset Success!",
    surechangeol: "Are you sure you want to make this change for all outlets?",
    reallyresetenergy: "Do you really want to reset the energy?",
    nopermission: "No Permission:"
  };

  /*Input Phases*/
  MODEL.phases = {
    phasecurrentrms: "Phase Current, RMS",
    reading: "Reading ",
    lowercritical: "Lower Critical ",
    lowerwarning: "Lower Warning ",
    upperwarning: "Upper Warning ",
    uppercritical: "Upper Critical ",
    statusset: "Status, Setting",
    phasevoltagerms: "Phase Voltage, RMS",
    phasepower: "Phase Power",
    apparentpower: "Apparent Power (VA)",
    powerfactor: "Power Factor",
    activepower: "Resettable Energy Meter"
  };

  window.UPDATESTATUS = {
    0: "Update failed!",
    2: "You have been logged out due to inactivity.",
    3: "The selected role is currently assigned to users and cannot be deleted.",
    41: "Your old password is not correct!",
    42: "The port is occupied!",
    43: "Your login password is too simple to use as authentication pass phrase!",
    51: "The outlet(s) below cannot be turned on at this time due to an overload restriction.<br/>( Outlet ID: [ {0} ] )"
  };
/*--> FOR INDEX(ALL DASHBOARD EXCEPT SENSOR PART) PAGE and SOME PROMPT FOR RESET ACTION END <--*/

/*--> FOR SENSOR FUNCTION BEGIN <--*/
  /*Sensor page*/
  MODEL.sensor = {
    id: "ID",
    typeset: "Type",
    statusset: "Status, Setting",
    value: "Value",
    serialno: "Serial NO.",
    aisle: "Aisle",
    name: "Name",
    description: "Description",
    location: "Location"
  };
/*--> FOR SENSOR FUNCTION END <--*/

/*--> FOR CHANGE PASSWORD DIALOG BEGIN <--*/ 
  /**--Menu Dialog Pages--*/
  MODEL.changepw = {
    oldpass: "Old Password",
    newpass: "New Password",
    cfmpass: "Confirm Password",
    chgpwfail: "Change Password Failed.",
    confirminfo: "After changing the setting, you will need to login again.<br/> Do you really want to apply changes now?"
  };
/*--> FOR CHANGE PASSWORD DIALOG END <--*/

/*--> FOR USERS DIALOG BEGIN <--*/
  MODEL.users = {
    // noselect: "Please select a row!",
    // usernotbedel: "This user cannot be deleted!",
    // notdelyourself: "You cannot delete yourself!",
    // notdelthisuser: "You cannot delete this user!",
    // reallydeluser: "Do you really want to delete the user: {0} ?",
    // nopermission: "You do not have permission to modify this user!",
    // enteruserexist: "Entered username is already existed!",
    // noselectrole: "Please select a role!",
    // setting: "Settings",
    // snmpv3: "SNMPv3",
    // roles: "Roles",
    // preferences: "Preferences",
    // 
    // createnewuser: "Create New User",
    // edituser: "Edit User:",
    // active: "Active",
    // roles: "Roles",
    username: "User Name",
    // fullname:"Full Name",
    password: "Password",
    cfpassword: "Confirm Password",
    // telnumber: "Telephone Number",
    // emailaddress: "eMail Address",
    // enabled: "Enabled",
    // forcepwchntlg: "Force password change on next login",
    // 
    // enablesnmpacc: "Enable SNMPv3 Access",
    // securitylevel: "Security Level",
    // usepwasauthpass: "Use Password as Authentication Pass Phrase",
    // authpass: "Authentication Pass Phrase",
    // cfauthpass: "Confirm Authentication Pass Phrase",
    // useauthaspri: "Use Authentication Pass Phrase as Privacy Pass Phrase",
    // pripass: "Privacy Pass Phrase",
    // cfpripass: "Confirm Privacy Pass Phrase",
    // authalgorithm: "Authentication Algorithm",
    // prialgorithm: "Privacy Algorithm",
    // 
    // temperatureunit: "Temperature Unit",
    // 
    // news: "New",
    // edits: "Edit",
    // deletes: "Delete"
  };

  window.PINGSTATUS = {
    0: "Reachable",
    1: "Unreachable",
    2: "Waiting for Reliable Response",
    3: "Error"
  };
/*--> FOR USERS DIALOG END <--*/

/*--> FOR NETWORK CARD RESET DIALOG BEGIN <--*/
  MODEL.netsvr = {
    change : " After changing the setting, you will need to reset the Network Card to take effect. Do you really want to apply changes now?"
  };

  MODEL.resetdev = {
    doresetcard: "Do you really want to reset the Network Card?"
  };
/*--> FOR NETWORK CARD RESET DIALOG END <--*/

/*--> FOR HTTP DIALOG BEGIN <--*/
  MODEL.http = {
    httpport: "HTTP Port",
    httpsport: "HTTPS Port"
  };
/*--> FOR HTTP DIALOG END <--*/

/*--> FOR SNMP DIALOG BEGIN <--*/
  MODEL.snmp = {
    general: "General",
    traps: "Traps",
    // snmpv12set: "SNMP v1 / v2c Settings",
    // snmpv12: "SNMP v1 / v2c",
    // enable: "Enable",
    readcs: "Read Community String",
    writecs: "Write Community String",
    // snmpv3set: "SNMP v3 Settings",
    // snmpv3: "SNMP v3",
    // mibiigroup: "MIB-II System Group",
    // syscontact: "sysContact",
    // sysname: "sysName",
    // syslocation: "sysLocation",
    // snmptrapset: "SNMP Trap Settings",
    // snmptraprule: "System Snmp Trap Event Rule",
    host: "Host",
    port: "Port",
    community: "Community",
    // helpinfo: "Please use the Device Configuration > Event Rules Dialog for a more detailed trap setup.",
    // downloadmib: "Download MIB"
  }
/*--> FOR SNMP DIALOG END <--*/

/*--> FOR TELNET DIALOG BEGIN <--*/
  MODEL.telnet = {
    telnetport: "Telnet Port",
    enabletelnet: "Enable Telnet Access"
  }
/*--> FOR TELNET DIALOG END <--*/

/*--> FOR NETWORK CONFIGUARATION DIALOG END <--*/
  MODEL.network = {
    ipprotocol: "IP Protocol",
    ipv4set: "IPv4 Settings",
    ipv4only: "IPv4 Only",
    ipv6only: "IPv6 Only",
    ipv46: "IPv4 & IPv6",
    // dnsresolve: "DNS Resolver",
    preference: "Preference",
    ipv4address: "IPv4 Address",
    ipv6address: "IPv6 Address",
    ipautoconfig: "IP Auto Configuration",
    ipaddress: "IP Address",
    netmask: "Net Mask",
    gateway: "Gateway",
    // specficdns: "Specific DNS server manually",
    dhcppro: "DHCP Protocol",
    staticpro: "STATIC Protocol"
    // dnssuffix: "DNS Suffix(Optional)"
  }
/*--> FOR NETWORK CONFIGUARATION DIALOG END <--*/

/*--> FOR HTTP SETTING BEGIN <--*/
  MODEL.forcehttpinfo = {
    confirminfo: "After changing the setting, you will need to reset the Network Card to take effect.<br/> Do you really want to apply changes now?"
  }
/*--> FOR HTTP SETTING END <--*/

/*--> FOR DATALOG DIALOG BEGIN <--*/
  MODEL.datalog = {
    loginterval: "Log Interval (1 - 1440 minutes)",
    enablelog: "Enable Data Logging",
    illustrateinfo: "The data log can store up to 2000 records. The maximum time range of stored data is based upon the log interval setting.  For example, for log interval = 600 seconds (10 minutes), the data log will contain up to 13.89 days of data.  Once the data log reaches the maximum size, the oldest entries will be overwritten by the newer entries."
  };
/*--> FOR DATALOG DIALOG END <--*/

/*--> FOR DATATIME DIALOG END <--*/
  MODEL.datetime = {
    timezone: "Time Zone",
    usertime: "User Specified Time",
    date: "DateTime (YYYY/MM/DD hh:mm:ss)",
    time: "Time (hh:mm:ss)",
    synntpserver: "Synchronize with NTP Server",
    firstip: "First Time Server IP Address",
    secondip: "Second Time Server IP Address",
    checkntp: "Check NTP Servers",
    checkntpinfo: "Please input the right NTP Server!"
  };
/*--> FOR DATATIME DIALOG END <--*/

/*--> FOR PDU INFO DIALOG BEGIN <--*/
  MODEL.pduinfo = {
    pdunm: "PDU Name:",
    pduloc: "Location:"
  };
/*--> FOR PDU INFO DIALOG END <--*/

/*--> FOR DOWNLOAD LOG DIALOG BEGIN <--*/
  MODEL.diagnostic = {
    // diagconf: "Download Log",
    downloadlog: "Download Log Information",
    clearlog: "Clear Log",
    confirminfo: "Are you sure to clear PDU log?"
  };
/*--> FOR DOWNLOAD LOG DIALOG END <--*/

/*--> FOR PDU CONFIGURATION DIALOG END <--*/
  MODEL.blkconf = {
    dlconf: "Download Configuration",
    dlconffile: "Download Configuration File",
    Uploadconf: "Upload Configuration",
    upload: "Upload",
    uploadsucc: "Upload successful, updating...",
    applyconf: "Apply Configuration",
    pleasewait: "Please wait...!"
  };
/*--> FOR PDU CONFIGURATION DIALOG END <--*/

/*--> FOR DEVICE INFOMATION DIALOG END <--*/
  MODEL.devinfo = {
    pduinfo: "PDU Information",
    outlets: "Outlets",
    circbreak: "Circuit Breakers",
    sku: "SKU",
    serialnum: "Serial Number",
    rating: "Rating",
    functype: "Function Type",
    // pdutype: "Function Type",
    functypev: "Metered",
    ipv4addr: "Device IPv4 Address",
    ipv6addr: "Device IPv6 Addresses",
    macaddr: "Device MAC Address",
    fwversion: "Firmware Version",
    webversion: "Web Version",
    pdumib: "PDU-MIB",
    download: "Download",
    label: "Label",
    operatevol: "Operating Voltage",
    ratecurrent: "Rated Current",
    type: "Type",
    protoutlet: "Protected Outlets"
  };

  window.CBTYPE = {
      0: "None"
    , 1: "1-Pole Circuit Breaker"
    , 2: "2-Pole Circuit Breaker"
  };
/*--> FOR DEVICE INFOMATION DIALOG END <--*/

/*--> FOR BUTTON IN DIALOG BEGIN <--*/
  /*--Buttons--*/ 
  MODEL.buttons = {
    cancels: "Cancel",
    oks: "OK",
    closes: "Close",
    yes: "Yes",
    no: "No",
    save: "Save",
    edit: "Edit",
    action: "Action",
    message: "Message",
    info: "Information",
    runping: "Run Ping",
    run: "Run"
  };
/*--> FOR BUTTON IN DIALOG END <--*/

/*--> FOR CURRENT(CB) ALARM NAME IN INDEX(DASHBOARD) PAGE BEGIN <--*/
  MODEL.master.setalarmdl.alarm = "Alarm";
  MODEL.master.setalarmdl.off = "Off";
  MODEL.master.setalarmdl.on = "On";
  MODEL.master.setalarmdl.disable = "Disable";
  MODEL.master.setalarmdl.enable = "Enable";
  MODEL.master.setalarmdl.normal = "Normal";
/*--> FOR CURRENT(CB) ALARM NAME IN INDEX(DASHBOARD) PAGE BEGIN <--*/

/*--> FOR SOME VALIDATE PROMPT BEGIN <--*/
  window.VALID = {
      ipv4: "Please enter a valid ipv4 address"
    , ipv6: "Please enter a valid ipv6 address"
    , nowhite: "White spaces are not allowed"
    , greater: "Please enter a larger number"
    , customdate: "Please enter valid datetime"
    , lowchar: "Please enter at least one lower case character."
    , uppchar: "Please enter at least one upper case character."
    , numchar: "Please enter at least one numeric case character."
    , spechar: "Please enter at least one special character."
    , diffval: "Please enter a different value."
    , oldpwd: "Old password wrong"
    //add by zzw begin
    , greaterC1: "Upper critical - 1A should be more than or equal to upper warning!"
    , greaterC2: "Upper warning - 1A should be more than or equal to lower warning!"
    , greaterC3: "Lower warning - 1A should be more than or equal to lower critical!"
    , greaterV1: "Upper critical - 2V should be more than or equal to upper warning!"
    , greaterV2: "Upper warning - 4V should be more than or equal to lower warning!"
    , greaterV3: "Lower warning - 2V should be more than or equal to lower critical!"
    , greaterP1: "Upper critical - 100W should be more than or equal to upper warning!"
    , greaterP2: "Upper warning - 200W should be more than or equal to lower warning!"
    , greaterP3: "Lower warning - 100W should be more than or equal to lower critical!"
    , greaterE1: "Upper critical - 100W should be more than or equal to upper warning!"
    , greaterE2: "Upper warning - 200W should be more than or equal to lower warning!"
    , greaterE3: "Lower warning - 100W should be more than or equal to lower critical!"
    , greaterE4: "Upper critical - 3% should be more than or equal to upper warning!"
    , greaterE5: "Upper warning - 6% should be more than or equal to lower warning!"
    , greaterE6: "Lower warning - 3% should be more than or equal to lower critical!"
    //add by zzw end
  };
/*--> FOR SOME VALIDATE PROMPT END <--*/


  MODEL.login.authfail = "Authentication failed";
  MODEL.login.connfail = "Connection refused";
  MODEL.datetime.succ = "Succeeded";
  MODEL.datetime.fail = "Failed";

})(window);
/*
Custom validate rules
*/
(function() {

  $.validator.addMethod("ipv4", 
    function(value, element) {                  
    return this.optional(element) || /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(value);
  }, function() { return VALID.ipv4 });

  // $.validator.addMethod("resetvalue", 
  //   function(value, element) {                  
  //   return this.optional(element) || /^true$/i.test(value);
  // }, function() { return VALID.resetvalue });

  $.validator.addMethod("ipv6", 
    function(value, element) {            
      return this.optional(element) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(value);
  }, function() { return VALID.ipv6 });

  $.validator.addMethod("nowhitespaces", 
    function(value, element){
      return this.optional(element) || /^\S+$/i.test(value);
  }, function() { return VALID.nowhite });

  $.validator.addMethod("customDate", 
    function (value, element){
      return this.optional(element) || /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/i.test(value);
  }, function() { return VALID.customdate });

  //For password
  $.validator.addMethod("lowerChar", function(value, element) {
    return /[a-z]/.test(value);
  }, function() { return VALID.lowchar });

  $.validator.addMethod("upperChar", function(value, element) {
    return /[A-Z]/.test(value);
  }, function() { return VALID.uppchar });

  $.validator.addMethod("numberChar", function(value, element) {
    return /\d/.test(value);
  }, function() { return VALID.numchar });

  $.validator.addMethod("specialChar", function(value, element) {
    return /[^\w]/.test(value);
  }, function() { return VALID.spechar });

  $.validator.addMethod("notEqualTo", function(value, element, params) {
    return value != $(params).val();
  }, function() { return VALID.diffval });

  $.validator.addMethod("greaterThan", function(value, element, params) {
    return Number(value) >= Number($(params).val());
  }, function() { return VALID.greater });

  $.validator.addMethod("dtvalue", 
    function(value, element) {            
      return this.optional(element) || /^(\d{4})\/(0\d{1}|1[0-2])\/(0\d{1}|[12]\d{1}|3[01]) (0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/i.test(value);
  }, function() { return VALID.customdate });

  //add by zzw begin
  $.validator.addMethod("oldpwd", function(value, element, params) {
    return value == EL.Auth.password;
  }, function() { return VALID.oldpwd });
  //
  $.validator.addMethod("greaterThanCU", function(value, element, params) {
    var result = validateTOF();
    if(!result){
      return true;
    }else{
      return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.current;
    }
    // return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.current;   
  }, function() { return VALID.greaterC1 });
  $.validator.addMethod("greaterThanCM", function(value, element, params) {
    var result = validateTOF();
    if(!result){
      return true;
    }else{
      return Number(value) >= Number($(params).val())+ 2*window.THRESHODE_DEFAULT.current;  
    }
  }, function() { return VALID.greaterC2 });
  $.validator.addMethod("greaterThanCD", function(value, element, params) {
    var result = validateTOF();
    if(!result){
      return true;
    }else{
      if (value!=0) {
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.current;
      } else {
        return Number(value) >= Number($(params).val());
      }  
    }  
  }, function() { return VALID.greaterC3 });
  //
  $.validator.addMethod("greaterThanVU", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.voltage;
      }
  }, function() { return VALID.greaterV1 });
  $.validator.addMethod("greaterThanVM", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ 2*window.THRESHODE_DEFAULT.voltage;
      }
  }, function() { return VALID.greaterV2 });
  $.validator.addMethod("greaterThanVD", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.voltage;
      }
  }, function() { return VALID.greaterV3 });
  //
  $.validator.addMethod("greaterThanPU", function(value, element, params) {
    var result = validateTOF();
    if(!result){
      return true;
    }else{
      return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.power;   
    }
  }, function() { return VALID.greaterP1 });
  $.validator.addMethod("greaterThanPM", function(value, element, params) {
    var result = validateTOF();
    if(!result){
      return true;
    }else{
      return Number(value) >= Number($(params).val())+ 2*window.THRESHODE_DEFAULT.power;  
    }
  }, function() { return VALID.greaterP2 });
  $.validator.addMethod("greaterThanPD", function(value, element, params) {
    var result = validateTOF();
    if(!result){
      return true;
    }else{
      if (value!=0) {
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.power;
      } else {
        return Number(value) >= Number($(params).val());
      } 
    }   
  }, function() { return VALID.greaterP3 });
  //
  $.validator.addMethod("greaterThanEUT", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.sensorT;
      }
  }, function() { return VALID.greaterE1 });
  $.validator.addMethod("greaterThanEMT", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ 2*window.THRESHODE_DEFAULT.sensorT;
      }
  }, function() { return VALID.greaterE2 });
  $.validator.addMethod("greaterThanEDT", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.sensorT;
      }
  }, function() { return VALID.greaterE3 });
  //
  $.validator.addMethod("greaterThanEUH", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.sensorH;
      }
  }, function() { return VALID.greaterE4 });
  $.validator.addMethod("greaterThanEMH", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ 2*window.THRESHODE_DEFAULT.sensorH;
      }
  }, function() { return VALID.greaterE5 });
  $.validator.addMethod("greaterThanEDH", function(value, element, params) {
      var result = validateTOF();
      if(!result){
        return true;
      }else{
        return Number(value) >= Number($(params).val())+ window.THRESHODE_DEFAULT.sensorH;
      }
  }, function() { return VALID.greaterE6 });

  function validateTOF() {
    var v1,v2,v3,v4,v;
    v1 = !$("#upcritical").val()?0:$("#upcritical").val();
    v2 = !$("#upwarning").val()?0:$("#upwarning").val();
    v3 = !$("#lowwarning").val()?0:$("#lowwarning").val();
    v4 = !$("#lowcritical").val()?0:$("#lowcritical").val();
    v = parseInt(v1) + parseInt(v2) + parseInt(v3) + parseInt(v4);
    console.log('v3:'+v);
    return v;   
  }
  //add by zzw end
})();var EL = window.EL || {};

EL.Auth = (function() {

  var auth = {
      username: "",
      password: ""
    , update: function(username, password) {
        this.username = username;
        this.password = password;
        var token = Base64.encode(username + ":" + password);

        $.ajaxSetup({
          beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + token);       
          }
        });
      }
  };

  auth.getJSON = function() {

  };

  return auth;

})();


EL.UpdateStatus = function(data) {

  var result = parseInt(data["result"]);

  result == 3 && $.messager.alert(MODEL.buttons.message, MODEL.pdu.nopermission + UPDATESTATUS["0"]);
  //add by zzw begin
  result == 33033 && $.messager.alert(MODEL.buttons.message, MODEL.users.nopermission);
  //add by zzw end
  return result == 1;
};



EL.Master = function(model) {

  var master = {};

  var model = MODEL.buttons;

  master.init = function() {
    $("#menuDashboard").text(EL.TreeRoot.text);
    $("#menuSetting").text(MODEL.users.setting);
    $("#alarmstitle").text(MODEL.dashboard.alarms);
    $("#pdupowerenergy").text(MODEL.dashboard.pdupowerenergy);
    $("#currentrms,#currentrms2").text(MODEL.dashboard.currentrms);
    $("#voltagerms").text(MODEL.dashboard.voltagerms);
    $("#voltenergy").text(MODEL.dashboard.voltenergy);
    $("#externalsensor").text(MODEL.dashboard.externalsensor);

    $("#settings li>a").click(function() {
      var $link = $(this)
        , $item = $link.closest("li")
        , name  = $item.attr("name")
        , title = $item.attr("title")
        , $tmpl = $("#" + name)
        ;

      //modify by zzw begin
      var opendialog = function () {
        if ($tmpl.size() < 1) return;
        $('<div id="mydialog"></div>').dialog({ 
            title: title
          , classed: "noclosed"
          , buttons: [
              {
                  text: "&nbsp;&nbsp;&nbsp;&nbsp;" + model.oks + "&nbsp;&nbsp&nbsp;&nbsp;"
                , id:   "btnMainSubmit"
                , classed: "btn-primary"
                , click: function() {
                    $("#mydialog form").submit();
                  }
              },
              {
                  text: model.cancels
                , id:   "btnCancel"
                , classed: "btn-primary"
                , click: function() {
                    $(this).dialog("destroy");
                    $("#mydialog").remove();
                  }
              }
            ]
        });

        var render = function() {
          var html      = $tmpl.html()
            , htmlModel = MODEL[name]
            , pagefn    = doT.template(html);

          $("#mydialog").append(pagefn(htmlModel));
        };

        render();
      };
      if ("users" == name) {
        var curusernm = EL.Auth.username;
        if ("admin" == curusernm) {
          opendialog();
        } else {
          var newDJson = jQuery.parseJSON('{"result":33033}');
          EL.UpdateStatus(newDJson);
        }
      } else {
        opendialog();
      }
      //modify by zzw end

      // if ($tmpl.size() < 1) return;


      // $('<div id="mydialog"></div>').dialog({ 
      //     title: title
      //   , classed: "noclosed"
      //   , buttons: [
      //       {
      //           text: "&nbsp;&nbsp;&nbsp;&nbsp;" + model.oks + "&nbsp;&nbsp&nbsp;&nbsp;"
      //         , id:   "btnMainSubmit"
      //         , classed: "btn-primary"
      //         , click: function() {
      //             $("#mydialog form").submit();
      //           }
      //       },
      //       {
      //           text: model.cancels
      //         , id:   "btnCancel"
      //         , classed: "btn-primary"
      //         , click: function() {
      //             $(this).dialog("destroy");
      //             $("#mydialog").remove();
      //           }
      //       }
      //     ]
      // });

      // var render = function() {
      //   var html      = $tmpl.html()
      //     , htmlModel = MODEL[name]
      //     , pagefn    = doT.template(html);

      //   $("#mydialog").append(pagefn(htmlModel));
      // };

      // render();
    });

    $("#logout").click(function() {
      location.reload();
    });

    EL.SetAlarm();
  };

  return master;
};EL.Login = function(model) {

  var $logform  = $("#frlogin")
    , $username = $("#username")
    , $password = $("#password")
    , $loginmsg = $("#loginmsg")
    ;

  $logform
    .submit(submitHandler)
    .validate({
      rules: {
        username: {
          required: true
          //, minlength: 3
        },
        password: {
          required: true
          //, minlength: 8
        }
      }
    });

  var loginHandler = function() {

    $("#mydialog").dialog("close");

    $("#login").dialog({
        title:    model.title
      , classed: "marked"
      , buttons: [
          {
              text: model.login
            , classed: "btn-primary"
            , click: function() {
                submitHandler();
              }
          }
        ]
    });
  }

  var submitHandler = function(e) {
    if (!$logform.valid()) {
      return false;
    }

    e && e.preventDefault();

    $.ajax({
        url: "public/login.json"
      , data: {username: $username.val(), password: $password.val()}
      , dataType: "json"
      , success: function(json) {
          if (json.result) {
            EL.Auth.update($username.val(), $password.val());
            $("#user").html(EL.Auth.username);
            $("#login").dialog("close");
            $("#wrapper").attr("style","display:inline;");
            EL.DashBoard.init();
          } else {
            var msg = model.authfail;
            $loginmsg
              .html(msg)
              .show();
          }
        }
      , error: function() {
          var msg = model.authfail;
          //req.status && (req.status != 401) && (msg = AJAXSTATUS[req.status]);
          req.status == 0 && (msg = model.connfail);

          $loginmsg
            .html(msg)
            .show();
        }
    });
  };

  loginHandler();

  //Press Enter to submit the form (fix for IE)
  function onKeyUp(e) {
    if (e.keyCode == 13) submitHandler();
  };
  $username.keyup(onKeyUp);
  $password.keyup(onKeyUp);

  //Prevent press F5
  $(document).keydown(function(e) {
    if (e.keyCode == 116) {
      e.preventDefault();
      $("#mydialog").dialog("close");
    }
  });
};/*
Localizaton
*/
;(function(window) {

  var EL = window.EL || {};

  var self = EL.Locale = {};

  var localeCookie = "locale";

  self.bind = function() {
    var $sellocal = $("#sellocal>li")
      , local = $.cookie(localeCookie) || "en";

    $sellocal.click(function() {
      // EL.Master.mask(true);
      var $local  = $(this);

      local = $local.attr("name");
      $.cookie(localeCookie, local, {
        path:"/",
        expires: 730
      });

      $.get(
          "private/locale_set.json"
        , { locale: local }
        , function() {
            window.setTimeout(function() {
              location.reload();
            }, 200);
          }
      );

    });
  };

  //render the templates
  self.render = function() {
    //It's login page
    var $login = $("#login");
    if ($login.size()) {
      var model = MODEL.login;
      var pagefn = doT.template($login.html());
      $login.html(pagefn(model));

      EL.Login(model);
    }

    //It's master page
    var $wrapper = $("#wrapper");
    if ($wrapper.size()) {
      var model = MODEL.master;
      var pagefn = doT.template($wrapper.html());
      $wrapper.html(pagefn(model));

      EL.Master(model).init();
    }

    self.bind();
    //After language package loaded refresh the dashboards
    EL.DashBoard();
  };

  self.init = function() {
    var update = function() {
      var locale = $.cookie(localeCookie) || "en";

      //load language package: Model
      (locale == "en")
        ? self.render()
        : $LAB.script("js/locale.{0}.js".format(locale)).wait(self.render);
    };

    $.getJSON("public/locale.json", function(data) {
      $.cookie(localeCookie, data.locale, {
        path:"/",
        expires: 730
      });
      update();
    }).error(update);
  };

  self.init();

})(window);(function() {

  var self = EL.ChangePsw = function() {
    var $changepsw_result = $("#changepsw_result");

    var submitHandler = function(form) {
      var oldpassword, newPassword;
      oldpassword   = $('#txtOldpassword').val();
      newPassword   = $('#txtPassword').val();
      updateNewPassword(oldpassword, newPassword);
      return false;
    };

    //Send data to the server in JSON format to Change Password.
    function updateNewPassword(txtOldpassword, newPassword) {
      var model = MODEL.changepw;
      
      $.messager.confirm(MODEL.buttons.message, MODEL.changepw.confirminfo, function () {
        var changePasswordJson = {
            "username"    : EL.Auth.username
          , "oldpassword" : txtOldpassword
          , "newpassword" : newPassword
        };
        $.ajax({
          url: "private/password.json",
          data: changePasswordJson,
          dataType : "json",
          success: function(data) {
            if (EL.UpdateStatus(data)) {
              EL.Auth.update(EL.Auth.username, user.password);

              location.reload();
              // $('#mydialog').dialog('destroy');
              // $('#mydialog').html('');
            } else {
              $changepsw_result
                // .html('Change Password Failed.')
                .html(model.chgpwfail)
                .show();
            }
          }
        });
      });
    }

    function getPasswordPolicy() {
      $('#txtOldpassword')
        .focus(function() {
          $changepsw_result.hide();
        })
        .focus();

      var min     = 4
        , max     = 10
        , policy  = {}
        ;

      $("#frchangepw").validate({
        rules: {
          txtOldpassword: {required: true, oldpwd: true},
          txtPassword: $.extend({required: true, minlength: min, maxlength: max, notEqualTo:"#txtOldpassword"}, policy),
          txtConfirmPassword: $.extend({required: true, equalTo:"#txtPassword"}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getPasswordPolicy();

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());
(function() {

  var self = EL.ResetNetwork = function() {
    var olddhcp, oldipaddr, oldmask, oldgate;
    var $resetnetwork_result = $("#resetnetwork_result");

    var submitHandler = function(form) {
      var dhcp_value,ip_address,net_mask,gate_way;
      var dhcpV = $("#cbdhcp").is(':checked');
      if (dhcpV) {
        dhcp_value = 1;
      } else {
        dhcp_value = 0;
      }
      ip_address = $('#ip_address').val();
      net_mask = $('#net_mask').val();
      gate_way = $('#gate_way').val();
      if (olddhcp==dhcp_value && oldipaddr==ip_address && oldmask==net_mask && oldgate==gate_way) {
        $.messager.alert(MODEL.buttons.message, window.VALID.diffval);
      } else {
        updateNetworkIP(dhcp_value, ip_address, net_mask, gate_way);
      }
      
      return false;
    };

    //Send data to the server in JSON format to Reset Network IP.
    function updateNetworkIP(dhcp_value, ip_address, net_mask, gate_way) {
      $.messager.confirm(MODEL.buttons.message, MODEL.forcehttpinfo.confirminfo, function () {
        // var model = MODEL.network;
        var resetnetworkIPJson = {
          "dhcp": dhcp_value,
          "ipaddr": ip_address,
          "netmask": net_mask,
          "gateway": gate_way
        };

        $.ajax({
          url: "private/ipaddr_set.json",
          data: resetnetworkIPJson,
          dataType : "json",
          success: function(data) {
            if (EL.UpdateStatus(data)) {
              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');
              // EL.ResetDev.count(10, "http://" + ip_address);
              EL.ResetDev.reset(5, "http://" + ip_address);
            }
          }
        });
      });
    }

    function loadNetworkIPInfo() {
      $.ajax({
        type: "GET",
        url: "private/ipaddr.json",
        // data: "{}",
        dataType : "json",
        success: function(data) { 
          var ipstr16 = parseInt(data.ipaddr, 10).toString(16);
          var ipstr = parseInt(ipstr16.substr(0,2),16).toString(10)
                    +"."+ parseInt(ipstr16.substr(2,2),16).toString(10)
                    +"."+ parseInt(ipstr16.substr(4,2),16).toString(10)
                    +"."+ parseInt(ipstr16.substr(6,2),16).toString(10);
          
          var netmkstr16 = parseInt(data.netmask, 10).toString(16);
          var netmkstr = parseInt(netmkstr16.substr(0,2),16).toString(10)
                    +"."+ parseInt(netmkstr16.substr(2,2),16).toString(10)
                    +"."+ parseInt(netmkstr16.substr(4,2),16).toString(10)
                    +"."+ parseInt(netmkstr16.substr(6,2),16).toString(10);
          
          var gtwaystr16 = parseInt(data.gateway, 10).toString(16);
          var gtwaystr = parseInt(gtwaystr16.substr(0,2),16).toString(10)
                    +"."+ parseInt(gtwaystr16.substr(2,2),16).toString(10)
                    +"."+ parseInt(gtwaystr16.substr(4,2),16).toString(10)
                    +"."+ parseInt(gtwaystr16.substr(6,2),16).toString(10);
          
          console.log(ipstr);console.log(netmkstr);console.log(gtwaystr);
          $("#ip_address").val(ipstr);
          $("#net_mask").val(netmkstr);
          $("#gate_way").val(gtwaystr);  
          if (data.dhcp) {
            $("#cbdhcp").attr('checked', true);
            $("#staticip").find("input").attr("disabled", "disabled");
          } 
          olddhcp = data.dhcp;
          oldipaddr = ipstr;
          oldmask = netmkstr;
          oldgate = gtwaystr;  
        }
      });
    }
    function getNetworkIPPolicy() {
      // $('#ip_address')
      //   .focus(function() {
      //     $resetnetwork_result.hide();
      //   })
      //   .focus();
      loadNetworkIPInfo();
  
      var policy = {};
      var dhcpV = $("#cbdhcp").is(':checked');
      if (dhcpV) {
        $("#frresetnetwork").validate({
        rules: {
        },
        submitHandler: submitHandler
      });
      } else {
        $("#frresetnetwork").validate({
        rules: {
          ip_address: $.extend({required: true, ipv4: true}, policy),
          net_mask: $.extend({required: true, ipv4: true}, policy),
          gate_way: $.extend({required: true, ipv4: true}, policy)
        },
        submitHandler: submitHandler
      });
      }
    }

    getNetworkIPPolicy();

    $("#cbdhcp").click(function() {
      var dhcpV = $("#cbdhcp").is(':checked');
      if (dhcpV) {
        $("#staticip").find("input").attr("disabled", "disabled");
      } else {
        $("#staticip").find("input").removeAttr("disabled");
      }
    });

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());(function() {

  var ResetDev = EL.ResetDev = function() {

    var submitHandler = function(form) {
      $('#mydialog').dialog('destroy');
      $('#mydialog').html('');
      var user = $('div .navbar-fixed-bottom a span[id=user]').html();
      console.log(user);
      user == "admin" ? ResetDev.reset() : EL.UpdateStatus(jQuery.parseJSON('{"result":3}'));
    };

    function getNetworkCardPolicy() {
      $("#frresetdev").validate({
        rules: {
        },
        submitHandler: submitHandler
      });
    }

    getNetworkCardPolicy();

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };


  /*
  * Define prototype of ResetDev
  * reset network card
  */
  ResetDev.reset = function(seconds, url) {
    $.ajax({
      url: "private/reset.json",
      dataType : "json",
      success: function(data) {
        // if (EL.UpdateStatus(data)) {
          ResetDev.count(seconds, url);
        // }
        //ResetDev.count(seconds);
      }
    });
    // ResetDev.count(seconds, url);
  };

  ResetDev.count = function(seconds, url) {
    $('#resetDeviceDialog').dialog({
        title:   MODEL.master.resetdevicedl.txt
      , classed: "noclosed"
    });

    seconds = seconds | 5;

    EL.DashBoard.stop();

    var countdown = function() {
      if (seconds-- < 1) {
        clearTimeout(window.countTimer);
        url ? (location.href = url) : location.reload();
      } else {
        $("#spSecondsAtResetDev").text(seconds)
      };
    };

    clearTimeout(window.countTimer);
    window.countTimer = setInterval(countdown, 1000);

    countdown();
  };

}());(function() {
  var oldutc, olddatetime;
  var self = EL.DateTime = function() {
    EL.DateTime.addUtcList();
    var $timezoneselect = $("#utcselect");
    var $datetimeInput = $("#datetimeInput");

    // $("#datetimepicker1").datetimepicker();

    //Send data to the server in JSON format to Reset DateTime.
    function getDatetime() {
      $.getJSON("private/datetime.json", function(data) {
        // var datetime = self.getDate(data.datetime);
        // $datetimeInput.val(self.formatDate(datetime));
        // alert(data.datetime);
        $datetimeInput.val(data.datetime);
        $timezoneselect.val(data.timezone);

        oldutc = data.timezone;
        olddatetime = data.datetime;
      });
    }

    function submitHandler() {
      // e.preventDefault();
      // var datetime = new Date($("#datetimeInput").val());
      var datetimestr = $("#datetimeInput").val();
      var datetimearr = datetimestr.split(" ");
      // console.log(datetimearr);
      var timezone = $timezoneselect.val();
      // console.log(EL.DateTime.getValue(datetime));
      if (oldutc==timezone && olddatetime==datetimestr) {
        $.messager.alert(MODEL.buttons.message, window.VALID.diffval);
      } else {
        var resetdatetimeJson = {
          "date": datetimearr[0],
          "time": datetimearr[1]
          // "datetime": EL.DateTime.getValue(datetime) <0 ? EL.DateTime.getValue(datetime)>>>0 : EL.DateTime.getValue(datetime)
        };
        var resettimezoneJson = {
          "timezone": timezone
        };

        $.ajax({
          url: "private/timezone_set.json",
          data: resettimezoneJson,
          dataType : "json",
          success: function(data) {
            $.ajax({
              url: "private/datetime_set.json",
              data: resetdatetimeJson,
              dataType : "json",
              success: function(data) {               
                if (EL.UpdateStatus(data)) {
                  $('#mydialog').dialog('destroy');
                  $('#mydialog').html('');
                  EL.DashBoard.setInitTimer();
                  $.messager.alert(MODEL.buttons.message, MODEL.pdu.resetsuccess);
                }
              }
            });
          }
        });
      }
      

      // $.ajax({
      //   url: "private/datetime_set.json",
      //   data: resetdatetimeJson,
      //   dataType : "json",
      //   success: function(data) {
      //     if (EL.UpdateStatus(data)) {
      //       $('#mydialog').dialog('destroy');
      //       $('#mydialog').html('');
      //       EL.DashBoard.setInitTimer();
      //     }
      //   }
      // });
    };

    function getDatetimePolicy() {
      getDatetime();
      var policy = {};
      // $("#frdatetime")
      //   .submit(submitHandler)
      //   .validate({
      //     rules: {
      //       // httpport: $.extend({required: true, dateime: true}, policy)
      //       datetimeInput: {required: true, dateime: true}
      //     }
      //   });

      $("#frdatetime").validate({
        rules: {
          // datetimeInput: {required: true, datetime: true}
          datetimeInput: $.extend({required: true, dtvalue: true}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getDatetimePolicy();
  };

  self.getValue = function(dateVal) {
    var d = new Date(dateVal);
    return (d.getYear() - 100) << 26 | (d.getMonth() + 1) << 22 | d.getDate() << 17 | d.getHours() << 12 | d.getMinutes() << 6 | d.getSeconds()
  };

  self.getDate = function(intVal) {
    var d = new Date();
    d.setFullYear((intVal >> 26) + 2000, (intVal >> 22 & 15) - 1, intVal >> 17 & 31); //7, 4 , 5
    d.setHours(intVal >> 12 & 31, intVal >> 6 & 63, intVal & 63) //5, 6, 6
    return d;
  };

  self.formatDate = function(m) {

    var dateString = m.getFullYear() +"/"+
      ("0" + (m.getMonth()+1)).slice(-2) +"/"+
      ("0" + m.getDate()).slice(-2) + " " +
      ("0" + m.getHours()).slice(-2) + ":" +
      ("0" + m.getMinutes()).slice(-2) + ":" +
      ("0" + m.getSeconds()).slice(-2);

    return dateString;
  };

  //add by zzw begin
  self.addUtcList = function() {
    var utclisthtml = '<select id="utcselect" style="width:540px;padding-top:4px;height:32px;vertical-align:middle;">';
    for (var i = -12; i < 0; i++) {
      utclisthtml += '<option value="'+i+'">'+i+'</option>';
    };
    utclisthtml += '<option value="0">0</option>';
    for (var i = 1; i < 14; i++) {
      utclisthtml += '<option value="+'+i+'">+'+i+'</option>';
    };
    utclisthtml += '</select>';
    $("#listUTC").html(utclisthtml);
  }
  //add by zzw end
  // self.UpdateStatus = function(data) {

  //   var result = parseInt(data["result"]);

  //   result == 3 && $.messager.alert(MODEL.pdu.nopermission + UPDATESTATUS["0"]);
  //   //add by zzw begin
  //   result == 33033 && $.messager.alert(MODEL.users.nopermission);
  //   //add by zzw end
  //   return result == 1;
  // };

}());

(function() {

  var self = EL.GetDevinfo = function() {

    $('#devinfotabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })


    var submitHandler = function() {
      getDevinfo();
    };

    //Get data from the server in JSON format to Devinfo.
    function getDevinfo() {
      var model = MODEL.devinfo;
      $.ajax({
        url: "private/devinfo.json",
        dataType : "json",
        success: function(data) {
          console.log(data);
          var url = window.location.href;
          var pduip = url.split('/')[2];
          $("#pduip").html(pduip);
          $("#serialnum").html(data.serialnumber);
          $("#firmversion").html(data.irmcfirmversion);
          $("#devmac").html(data.irmcmac);
          if (!data.result) {
            $(".sku1").show();
            $(".sku2").hide();
          } else {
            $(".sku2").show();
            $(".sku1").hide();

            // var outletStr = "<table class='outlet_content'>";
            // outletStr += "<tr id='head'><th style='width:200px;'>Label</th>";
            // outletStr += "<th style='width:400px;'>Operating Voltage</th>";
            // outletStr += "<th style='width:400px;'>Rated Current</th></tr>";
            // for (var i = 1; i <= 17; i++) {
            //   outletStr += "<tr><td>"+i+"</td><td>23A</td><td>230v</td></tr>";
            // };
            // outletStr +="</table>";
            // $("#dev_outlet_detail").html(outletStr);

            var cbStr = "<table class='table table-striped'>";
            cbStr += "<tr><th class='navbar-inverse' style='border-right:1px solid #CCCCCC;color:#FFFFFF;font-weight:400;height:24px;'>"+model.label+"</th>";
            cbStr += "<th class='navbar-inverse' style='border-right:1px solid #CCCCCC;color:#FFFFFF;font-weight:400;height:24px;'>"+model.type+"</th>";
            cbStr += "<th class='navbar-inverse' style='border-right:1px solid #CCCCCC;color:#FFFFFF;font-weight:400;height:24px;'>"+model.ratecurrent+"</th>";
            cbStr += "<th class='navbar-inverse' style='border-right:1px solid #CCCCCC;color:#FFFFFF;font-weight:400;height:24px;'>"+model.protoutlet+"</th></tr>";
            for (var i = 1; i <= 2; i++) {
              cbStr += "<tr><td>B"+i+"</td><td>1-Pole Circuit Breaker</td><td>16A</td><td>B"+i+"</td></tr>";
            };
            cbStr +="</table>";
            $("#dev_cb_detail").html(cbStr);
          }  
          // $("#webversion").html(data.webversion);     
        }
      });
    }

    function getDevinfoPolicy() {
        $("#btnMainSubmit").hide();
        submitHandler();
    }

    getDevinfoPolicy();
  };

}());

(function(window, document) {

  var refreshTimer;

  var timerID = 0
    , slowTimerID = 0
    , setTimerID = 0
    ;

  /*
  DashBoard functionalities
  */
  var self = EL.DashBoard = function() {

    var model = MODEL.dashboard;

    var $currentGrid  = $("#currentgrid")
      , $voltageGrid  = $("#voltagegrid")
      , $energyGrid   = $("#energygrid")
      //, $circuitGrid  = $("#circuitGrid")
      , $alarmsGrid   = $("#alarmsgrid")
      , $sensorGrid   = $("#sensorgrid")
      , interval      = 1000
      //, title = "Loading"
      , irmcInfo      = { energy_reset: 0 }
      , title         = model.loading;

    //Need to refresh the dashboard?
    self.visibleAll = function() {
      // return $("#mydialog:visible").size() < 1
      //   &&  $(".dashboard:visible").size() > 0;
      return true;
    };

    //Need to refresh the datagrid?
    self.visible = function() {
      //There is: 1) no dialog popuped 2) dashboard is visiable, 3) No force change password
      //return $(".dashboard:visible").size() > 0;
      return $(".dialog.modal:visible").size() <= 0;
    };

    var plot
      , yAxis
      ;

    self.filterColsByRows = function(cols, rows) {
      var newCols = []
        , row     = rows[0];

      if (!row) return cols;

      for (var i = 0, l = cols.length; i < l; i++) {
        var col = cols[i];
        typeof  row[col.field] != "undefined" && row[col.field] != -1 && newCols.push(col);
      }

      return newCols;
    };

    //add by zzw begin
    var resetEnergy;
    var resetTime;
    self.getResetEnergy = function() {
      $.getJSON("private/resetenergy.json?action=0", function(data) {
          var resetegy = parseInt(data.result2);
          resetEnergy = (resetegy/10).toFixed(1);
          resetTime = data.resettime;
      });
    };
    //add by zzw end

    //Prevent click too fast
    self.init = function() {
      self.setInitTimer();
      self.getInitPDUType();
      self.start();
    };

    self.start = function() {
      //stop timer previous opened
      self.stop();

      timerID = window.setInterval(function() {
        self.getResetEnergy();
        self.getEnergyParams();
      } , 2 * interval);

      // slowTimerID = window.setTimeout(function() {
      slowTimerID = window.setInterval(function() {
        self.getSensors();
        self.getPDUInfo();
      }, 10 * interval)

      //refresh once
      self.getResetEnergy();
      self.getEnergyParams();
      self.getSensors();
      self.getPDUInfo();
    };
    
    /*
    Before refresh stop all the timer
    */
    self.stop = function() {
      window.clearInterval(timerID);
      window.clearInterval(slowTimerID);
    };

    var timer = 0;

    var data = []
      , totalPoints = 150;

    function getChartData(val) {

      data.length > totalPoints && (data = data.slice(1));

      // Do a random walk
      while (data.length < totalPoints) {
        data.push(val);
      }

      typeof val != "undefined" && data.push(val);

      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i * 2, data[i]])
      }

      return res;
    }

    // var initTimer = function(datetime) {
    //   window.clearInterval(setTimerID);
    //   // console.log("yi"+datetime);
    //   var curtime       = datetime || new Date()
    //     , $currenttime  = $("#currenttime")
    //     ;
    //   var formatTime = function(time) {
    //     var strTime = (time || curtime).toString()
    //       , idxGMT = strTime.indexOf("GMT")
    //       ;
    //     (idxGMT < 0) && (idxGMT = strTime.indexOf("UTC"));
    //     return strTime.substr(0, idxGMT);
    //   };
    //   var updateCurrentTime = function() {
    //     // console.log("er"+formatTime());
    //     $currenttime.html(formatTime());
    //     curtime = new Date(1000 + +curtime);
    //     // console.log(curtime);
    //   };
    //   setTimerID = window.setInterval(updateCurrentTime, 1000);
    //   updateCurrentTime();
    // };
    var initTimer = function(datetime) {
      window.clearInterval(setTimerID);
      var newdate = new Date(datetime);
      var datetime = newdate.getTime();
      
      var curtime       = datetime || new Date()
        , $currenttime  = $("#currenttime")
        ;
      var formatTime = function(time) {
        var strTime = (time || curtime).toString()
          , idxGMT = strTime.indexOf("GMT")
          ;
        (idxGMT < 0) && (idxGMT = strTime.indexOf("UTC"));
        return strTime.substr(0, idxGMT);
      };
      var updateCurrentTime = function() {
        $currenttime.html(formatTime());
        curtime = new Date(1000 + +curtime);
      };
      setTimerID = window.setInterval(updateCurrentTime, 1000);
      updateCurrentTime();
    };

    //add by zzw begin
    self.setInitTimer = function () {
      $.getJSON("private/irmc.json", function(json) {
        // initTimer(EL.DateTime.getDate(json.time));
        initTimer(json.time);
      });
    };
    self.getInitPDUType = function () {
      $.getJSON("private/devinfo.json", function(json) {
        window.devtypeinfo = json.result;
      });
    };
    // add by zzw end

    var tag = {};

    self.getPDUInfo = function() {

      if (!tag.alarmsGrid) {
        $alarmsGrid.datagrid({
          columns: [[
              {title: MODEL.devinfo.sku,  field:"sku"}
            , {title: model.status,       field:"unit", formatter: function() {
                return $(".alarm-lowercritical, .alarm-uppercritical, .alarm-lowerwarning, .alarm-upperwarning").size() >= 1
                          ? EL.SetAlarm.getAlarmTxt(STATUSTYPE[3]) : model.ok;
              }}
            , {title: model.pduname,      field:"name"}
            , {title: model.location,     field:"location"}
          ]]
        });

        tag.alarmsGrid = 1;
      }

      $.getJSON("private/irmc.json", function(json) {
        // initTimer(EL.DateTime.getDate(json.time));
        irmcInfo = json;
        $alarmsGrid.datagrid('loadData', {rows : [json]});
      });
    };

    self.getEnergyParams = function() {
      if (!self.visible()) return;

      var formatterStatus = function(val, row) {
        return "OK";
      };

      /*
      Get pdu energy
      */
      var setEnergyGrid = function(rows) {
        var energyVal =  rows[0].activepower || 0;

        if (!tag.energyGrid) {
          $energyGrid.datagrid({
            columns: [ self.filterColsByRows([
                {title: POWERENERGY.activepower,      field: "activepower"}
              , {field:"status", title:"{0}".format(model.status), formatter: function(value, row) {
                  return EL.SetAlarm.getAlarmStr(
                    "alarmpower", value, {}, "(W)", 0x00000010
                  );
                }}
              , {title: POWERENERGY.apparentpower,    field: "apparentpower"}
              , {field:"powerfactor", title:MODEL.phases.powerfactor, formatter: function(value, row) {
                  return (value/1000).toFixed(2);
                }}
            ], rows)]
          });
          tag.energyGrid = 1;
        }
        $energyGrid.datagrid('loadData', {rows : rows});
      };

      /*
      Get pdu voltage
      */
      var setVoltageGrid = function(rows) {
        //self.getChart([], "#voltagechart");
        if (!tag.voltageGrid) {
          $voltageGrid.datagrid({
            columns: [ self.filterColsByRows([
                {title: "L1", field: "l1"}
              // , {title: "L2", field: "l2"}
              // , {title: "L3", field: "l3"}
              , {field:"status", title:"{0}".format(model.status), formatter: function(value, row) {
                  return EL.SetAlarm.getAlarmStr(
                    "alarmvoltage", value, {}, "(V)", 0x00000010
                  );
                }}
              , {field:"totalenergymeter", title:POWERENERGY.totalenergymeter, formatter: function(value, row) {
                  return (value/10).toFixed(1);
                }}
              , {title: MODEL.phases.activepower, field: "totalenergymeter", formatter: function() {
                  return '<b class="tspan">(<span>{0} kWh</span>&nbsp;&nbsp;{1})</b>&nbsp;&nbsp;<a href="javascript:EL.DashBoard.resetEnergy()" class="menu" style="margin-left:1px;">{2}</a>'.format(          
                    resetEnergy
                    , resetTime
                    ,MODEL.pdu.reset
                    // , (irmcInfo.energy_reset).toFixed(1)
                    // , EL.DateTime.formatDate(EL.DateTime.getDate(irmcInfo.energy_reset_time))
                  );
                }}
            ], rows)]
          });
          tag.voltageGrid = 1;
        }

        $voltageGrid.datagrid('loadData', {rows: rows});
      };

      /*
      Get pdu current
      */
      var setCurrentGrid = function(rows) {
        //self.getChart([], "#currentchart");
        if (!tag.currentGrid) {
          $currentGrid.datagrid({
            columns: [ self.filterColsByRows([
                {title: "L1", field: "l1", formatter: function(value, row){return (value/10).toFixed(1);}}
              , {title: model.status, field: "l1status", formatter: function(value, row) {
                  return EL.SetAlarm.getAlarmStr(
                    "alarml1", value, {}, "(A)", 0x00000010
                  );
                }}
              , {title: model.cb1current, field: "cb1current", formatter: function(value, row){return (value/10).toFixed(1);}}
              , {field: "cb1status", title:"{0}".format(model.cb1status), formatter: function(value, row) {
                  return EL.SetAlarm.getAlarmStr(
                    "alarmcb1", value, {idx: 0}, "(A)", 0x00000010
                  );
                }}
              , {title: model.cb2current, field: "cb2current", formatter: function(value, row){return (value/10).toFixed(1);}}
              , {field: "cb2status", title:"{0}".format(model.cb2status), formatter: function(value, row) {
                  return EL.SetAlarm.getAlarmStr(
                    "alarmcb2", value, {idx: 1}, "(A)", 0x00000010
                  );
                }}
            ], rows)]
          });
          tag.currentGrid = 1;
        }

        $currentGrid.datagrid('loadData', {rows: rows});
      };

      $.ajax({
        url: "public/energy.json",
        dataType: "json",
        success: function(data) {
          if (data.current.cb1status==-1 && data.current.cb2status==-1) {
            $("#currentdiv2").show();
            $("#currentdiv1").hide();
            $currentGrid  = $("#currentgrid2");
          } else {
            $("#currentdiv1").show();
            $("#currentdiv2").hide();
            // $currentGrid  = $("#currentgrid2");
          }        
          setEnergyGrid([data.energy]);
          setVoltageGrid([data.voltage]);
          setCurrentGrid([data.current]);
          //setCircuitGrid([data.circuit]);
        }
      });
    };

    self.getSensors = function() {
      if (!self.visible()) return;
      var sensorHandler = function(data) {
        var dataArr = [];
        $.each(data, function (key, value) {
          if (0 != value.connection) {
            dataArr.push(value);
          }
        });
        
        $sensorGrid.datagrid({
          columns:[[
            {field:"type", title:"{0}".format(model.externalsensortype), formatter: function(value) {
              return SENSORTYPE[value];
            }},
            {field:"status", title:"{0}".format(model.status), formatter: function(value, row) {
              //return STATUSTYPE[value];
              var type = row["type"]
                , unit;

              (type == 1) && (unit = TEMPUNIT[EL.Privilege.temperature]);
              (type == 2) && (unit = "H");

              return EL.SetAlarm.getAlarmStr(
                SENSORALARMURL[type], value, {sensortype: type}, unit, 0x00000010
              );
            }},
            {field:"sensorname", title:"{0}".format(model.sensorname)},
            // {field:"pduid", title:"{0}".format(model.pduid) },
            // {field:"pduname", title:"{0}".format(model.pduname) },
            {field:"aisle", title:"{0}".format(MODEL.sensor.aisle), formatter: function(value, row){
              if (1==value) {
                return "Hot";
              } else {
                return "Cold";
              } 
            } },
            {field:"value", title:"{0}".format(model.value), formatter: function(value, row){
              var type = row["type"];
              if(type==1) return (value/10).toFixed(1);
              if(type==2) return value;
            } } 
          ]]
        });
        
        $sensorGrid.datagrid("loadData", {rows: dataArr});

      };

      $.ajax({
          url: "public/sensor.json"
        , dataType: "json"
        , success: sensorHandler
      });

    };

    return self;
  };


  self.resetEnergy = function() {
    $.messager.confirm(MODEL.buttons.message, MODEL.pdu.reallyresetenergy, function() {
      $.getJSON("private/resetenergy.json?action=1", function(data) {
        $.messager.alert(MODEL.buttons.info, MODEL.pdu.resetsuccess);
        self.getResetEnergy();
      });
    });
  };

  /*update timeout*/
  var idleTimer;
  $(document.body).mousemove(function() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function() {
      location.reload();
    }, 1000 * 60 * 20);
  });


})(window, document);(function() {

  var self = EL.TelnetSet = function() {
    var oldtelport, oldtelstat;
    var $telnet_result = $("#telnet_result");

    var submitHandler = function(form) {
      var telnetport, chktelVal;
      telnetport = $('#telnetport').val();
      chktelVal = $('#chkEnableTelnet').is(':checked');
      if (chktelVal) {
        chktelVal = 1;
      } else {
        chktelVal = 0;
      }

      (oldtelport==telnetport && oldtelstat==chktelVal) ? $.messager.alert(MODEL.buttons.message, window.VALID.diffval) : updateTelnetPort(telnetport, chktelVal);
      return false;
    };

    //Send data to the server in JSON format to Reset Network IP.
    function updateTelnetPort(telnetport, chktelVal) {
      var resettelnetportJson = {
        "telnetport": telnetport,
        "telnetstat": chktelVal
      };
      var oldport = $("#telnetport_h").val();
      if (oldport == telnetport) {
        $.ajax({
          url: "private/networkservice.json",
          data: resettelnetportJson,
          dataType : "json",
          success: function(data) {
            var newDJson = jQuery.parseJSON('{"result":0}');
            if ((data["telnetstat"]==3)||(data["telnetport"]==3)) {
              newDJson = jQuery.parseJSON('{"result":3}');
            } else if ((data["telnetstat"]!=3)&&(data["telnetport"]!=3)) {
              newDJson = jQuery.parseJSON('{"result":1}');
            }
            if (EL.UpdateStatus(newDJson)) {
              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');
              $.messager.alert(MODEL.buttons.message, MODEL.pdu.resetsuccess);
            }
          }
        });
      } else {
        $.messager.confirm(MODEL.buttons.message, MODEL.forcehttpinfo.confirminfo, function () {
          $.ajax({
            url: "private/networkservice.json",
            data: resettelnetportJson,
            dataType : "json",
            success: function(data) {
              var newDJson = jQuery.parseJSON('{"result":0}');
              if ((data["telnetstat"]==3)||(data["telnetport"]==3)) {
                newDJson = jQuery.parseJSON('{"result":3}');
              }
              if (EL.UpdateStatus(newDJson)) {
                $('#mydialog').dialog('destroy');
                $('#mydialog').html('');
                EL.ResetDev.reset();
              }
            }
          });
        });
      }
    }

    function loadTelnetInfo() {
      $.ajax({
        type: "GET",
        url: "private/networkservice.json",
        data: "{}",
        dataType : "json",
        success: function(data) {        
            $("#telnetport").val(data.telnetport);
            $("#telnetport_h").val(data.telnetport);
            if (data.telnetstat) {
              $("#chkEnableTelnet").attr('checked', true);
            }   

            oldtelport = data.telnetport;
            oldtelstat = data.telnetstat;   
        }
      });
    }
    function getTelnetPolicy() {
      loadTelnetInfo();
      $('#telnetport')
        .focus(function() {
          $telnet_result.hide();
        })
        .focus();
   
      var policy = {};
      $("#frtelnet").validate({
        rules: {
          telnetport: $.extend({required: true, digits: true, max: 65535}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getTelnetPolicy();

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());(function() {

  var self = EL.HttpSet = function() {
    var oldhttpport;
    var $http_result = $("#http_result");

    var submitHandler = function(form) {
      var httpport;
      httpport = $('#httpport').val();
      // updateHttpPort(httpport);
      httpport == oldhttpport ? $.messager.alert(MODEL.buttons.message, window.VALID.diffval) : updateHttpPort(httpport);
      return false;
    };

    //Send data to the server in JSON format to Reset Network IP.
    function updateHttpPort(httpport) {
      $.messager.confirm(MODEL.buttons.message, MODEL.netsvr.change, function () {
        var resethttpportJson = {
          "httpport": httpport
        };

        $.ajax({
          url: "private/networkservice.json",
          data: resethttpportJson,
          dataType : "json",
          success: function(data) {
            var newDJson = jQuery.parseJSON('{"result":0}');
            if (data["httpport"]==3) {
              newDJson = jQuery.parseJSON('{"result":3}');
            } else if (data["httpport"]!=3) {
              newDJson = jQuery.parseJSON('{"result":1}');
            }
            if (EL.UpdateStatus(newDJson)) {
              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');

              var url  = location.host
                , idx  = url.indexOf(":")
                , ip   = url.substr(0, idx > 0 ? idx : url.length);

              // EL.ResetDev.count(10, "http://{0}:{1}".format(ip, httpport));          
              EL.ResetDev.reset(5, "http://{0}:{1}".format(ip, httpport));        
            }
          }
        });
      });
    }

    function loadHttpInfo() {
      $.ajax({
        type: "GET",
        url: "private/networkservice.json",
        // data: "{}",
        dataType : "json",
        success: function(data) {        
            $("#httpport").val(data.httpport);
            oldhttpport = data.httpport;
        }
      });
    }
    function getHttpPolicy() {
      loadHttpInfo();
      $('#httpport')
        .focus(function() {
          $http_result.hide();
        })
        .focus();
   
      var policy = {};
      $("#frhttp").validate({
        rules: {
          httpport: $.extend({required: true, digits: true, max: 65535}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getHttpPolicy();

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());(function() {
  var oldinterval, oldenable;
  var self = EL.DatalogSet = function() {
    var $datalog_result = $("#datalog_result");

    var submitHandler = function(form) {
      var interval, datalogenable;
      interval = $('#dlinterval').val();
      datalogenable = $('#chkEnableDatalog').is(':checked');
      if (datalogenable) {
        datalogenable = 1;
      } else {
        datalogenable = 0;
      }
      (oldinterval==interval && oldenable==datalogenable) ? $.messager.alert(MODEL.buttons.message, window.VALID.diffval) : updateDatalogSet(interval, datalogenable);
      return false;
    };

    //Send data to the server in JSON format to Reset Network IP.
    function updateDatalogSet(interval, datalogenable) {
        var model = MODEL.datalog;
        var resetdatalogJson = {
          "interval": interval,
          "state": datalogenable
        };
        $.ajax({
          url: "private/datalog.json",
          data: resetdatalogJson,
          dataType : "json",
          success: function(data) { 
            var newDJson = jQuery.parseJSON('{"result":0}');
            if (data["interval"]==3 || data["datalogenable"]==3) {
              newDJson = jQuery.parseJSON('{"result":3}');
            } else if (data["interval"]!=3 && data["datalogenable"]!=3) {
              newDJson = jQuery.parseJSON('{"result":1}');
            }
            // console.log(newDJson);
            // console.log(EL.UpdateStatus(newDJson));
            if (EL.UpdateStatus(newDJson)) {   
              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');
              $.messager.alert(MODEL.buttons.message, MODEL.pdu.resetsuccess);
              // var url = window.location.href;
              // var pduip = url.split('/')[2];
              // EL.ResetDev.count(10, "http://" + pduip);
              // EL.ResetDev.reset();
            }
          }
        });
    }

    function loadDatalogInfo() {
      $.ajax({
        type: "GET",
        url: "private/datalog.json",
        // data: "{}",
        dataType : "json",
        success: function(data) {        
          $("#dlinterval").val(data.interval);
          if (data.datalogenable) {
            $("#chkEnableDatalog").attr('checked', true);
          }

          oldinterval = data.interval; 
          oldenable = data.datalogenable;
        }
      });
    }
    function getDatalogPolicy() {
      loadDatalogInfo();
      $('#dlinterval')
        .focus(function() {
          $datalog_result.hide();
        })
        .focus();
   
      var policy = {};
      $("#frdatalog").validate({
        rules: {
          dlinterval: $.extend({required: true, numberChar: true, min: 1, max: 1440}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getDatalogPolicy();

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());(function() {

  var self = EL.DownloadSet = function() {   
    function getDownloadPolicy() {
    	$("#btnMainSubmit").hide();
    }

    getDownloadPolicy();

    $("#clearlog").click(function() {
    	$.messager.confirm(MODEL.buttons.message, MODEL.diagnostic.confirminfo, function () {
    		$.ajax({
		        type: "GET",
		        url: "private/clearlog.json",
		        // data: "{}",
		        dataType : "json",
		        success: function(data) {
		        	if (EL.UpdateStatus(data)) {
		              // $('#mydialog').dialog('destroy');
		              // $('#mydialog').html('');	                      
		            }
		        }
		    });
    	});
    });
  };

}());/*User*/
(function() {

  EL.User = function() {

    var model = MODEL.users
      , $gdUser = $('#gdUser');

    var setUserGrid = function(rows) {
      var cols = [[
        // {field:'active', title: 'Active', width:90, align:"center", formatter: EL.Formatter.bool, sortable: true},
        //{field:'active', title: '{0}'.format(model.active), width:90, align:"center", formatter: EL.Formatter.bool, sortable: true},
        // {field:'username', title:'User Name', width:125, sortable: true},
        {field:'username', title:'{0}'.format(model.username), readonly: true},
        // {field:'fullname', title:'Full Name', width:125, sortable: true},
        {field:'password', title:'{0}'.format(model.password), formatter: function(val) {
          return '<input value="{0}" type="password" name="password" class="form-control">'.format(val);
        }},
        {field:'password', title:'{0}'.format(model.cfpassword), formatter: function(val) {
          return '<input value="{0}" type="password" name="cfpassword" class="form-control">'.format(val);
        }},
        {field:'null', formatter: function(val) {
          return '<button class="btn btn-primary">{0}</button>'.format(MODEL.buttons.save);
        }}
        //{field:'roles', title:'Roles', sortable: true, width:150, sortable: true}
        //{field:'roles', title:'{0}'.format(model.roles), sortable: true, width:150, sortable: true}
      ]];

      $gdUser.datagrid({
        columns: cols,
        edit: true,
        singleSelect: true,
      });

      $gdUser.datagrid("loadData", {rows: rows});

   
      $("#gdUser button").click(function() {
        var $tr = $(this).closest("tr")
          , user =  $tr.find("input").inputToJSON()
          ;

        if (!user.password || user.password.length < 4 || user.password.length > 10) {
          var msg = jQuery.validator.messages.minlength(4);
          user.password.length > 10 && (msg = jQuery.validator.messages.maxlength(10));
          $.messager.alert(PINGSTATUS["3"], msg);
        } else if (user.password != user.cfpassword) {
          $.messager.alert(PINGSTATUS["3"], jQuery.validator.messages.equalTo);
        } else {
          $.getJSON("private/user.json", user, function(data) {
            EL.Auth.username == user.username && EL.Auth.update(user.username, user.password);
            EL.UpdateStatus(data) && $.messager.alert(MODEL.buttons.info, MODEL.datetime.succ);
          });
        }
      });
    };

    var getUserGrid = function() {
      $.ajax({
        url: "private/users.json",
        dataType: "json",
        success: setUserGrid
      });
    };

    // Creating User and RoleinUser Grids.
    getUserGrid();
    
    //Form validation
    //$tabCreateNewUser.mouseover(generateTooltips);
    var privilege = function() {
      $("#btnMainSubmit").hide();
      //EL.Privilege.setButton([$btnNewUser, $btnEditUser, $btnDeleteUser, $("#btnOk")], 0x00000020);
    };

    privilege();

  };

})();



/*
switch checkbox, when cbcheckboxname is checked, 
find the input field with checkboxname reset it
*/
(function($) {

  $.fn.switchCheckBox = function(isChecked) {


    var resetStatus = function($checkbox, diable) {
      var $form = $checkbox.closest("form"),
          name = $checkbox.attr("name").substr(2),
          $input = $('*[name="' + name  + '"]', $form);

      if (diable) {
        $checkbox[0].checked = true;
        $input
          .removeAttr("disabled")
          .removeAttr("readonly")
          .removeClass("disable")
          ;
      } else {
        $checkbox[0].checked = false;
        $input
          .attr("disabled", true)
          .attr("readonly", "readonly")
          .addClass("disable")
          ;
      }
    };

    /*
    checked means enable;
    uncheck mean disable;
    */
    var switchHandler = function(e) {
      var $checkbox = $(this),
          checked = ($checkbox.is(":checked"));

      resetStatus($checkbox, checked);
    };

    return this.each(function() {
      var $checkbox = $(this);

      if (typeof isChecked != undefined) {
        resetStatus($checkbox, isChecked);
      }

      $checkbox.on("change", switchHandler);
    });
  };

})(jQuery);

(function(window, document) {

  var self = EL.SetAlarm = function() {
    var model   = MODEL.buttons;
    var modelmt = MODEL.master;

    var $settingDialog,
        settingDialogHtml = $("#setalarmdialog").parent().html(),
        validator, min, max;

    self.init = function() {
      //recreate the dialog again;
      $("#setalarmdialog").remove();
      $settingDialog = $(settingDialogHtml);
      $(document.body).append($settingDialog);

      //toggle the disable status on the checkbox.
      //$("input.switch").switchCheckBox();
    };

    self.close = function() {
      $settingDialog.dialog("close");
    };

    /*
    alarm setting: public method exposed to external applications
    etc:
    urlPrefix: ajax request to get/set the value;
    params: { pduid:pduid, sensorid:sensorid }
    type: unit fix, etc: A, V, VA, W
    */
    self.setAlarm = function(urlPrefix, params, unit, title) {
      self.init();

      var type = ALARMUNITTYPE[unit] || { title:"" },
          //default sensor is temp
          sensortype = params["sensortype"];

      var $abound  = $("#abound", $settingDialog),
          $aswitch = $("#aswitch", $settingDialog),
          $aenable = $("#aenable", $settingDialog);

      //Unit defined? It needs bound panel;
      if (unit) {
        $abound.show();
        $aswitch.hide();
        $aenable.hide();

      //Unit not defined, depends on the sensor type, sensor type: 1,2 must have unit value, so ignore them;
      } else {
        switch (sensortype) {
          case 3:
          case 4:
            $abound.hide();
            $aswitch.show();
            $aenable.hide();
            break;
          case 5:
          case 6:
          case 7:
          case 8:
            $abound.hide();
            $aswitch.hide();
            $aenable.show();
            break;
        }
      }

      min = params["min"] || type["min"] || 0,
      max = params["max"] || type["max"] || 10000000000;

      delete params.min;
      delete params.max;
      delete params.sensortype;

      var unitTxt = type["unit"] || unit || " ",
          factor = type["factor"] || 1,
          fixed = type["fixed"] || 0;

      title = title || type["title"];

      //set alarm validate
      validator = self.setAlarmValidate(unit, urlPrefix);
      // console.log(validator);
      //add unit
      $(".unit", $settingDialog).html(unitTxt);


      var token = params;

      /*
      data postback will be like this:
      {
        "cblowcritical": 1,    //1: disable   0: enable
        "lowcritical": 10,
        "cblowwarning": 1,
        "lowwarning": 10,
        "cbupwarning": 0,
        "upwarning": 20,
        "cbupcritical": 0,
        "upcritical": 30,
        "threshold": 8,
        "delay": 10
      }
      */
      var getAlarmHandler = function(data) {
        // var model   = MODEL.buttons;
        // var modelmt = MODEL.master;
        console.log(urlPrefix);
        validator.resetForm();

        for(key in data) {
          if (urlPrefix=="sensor1" || urlPrefix=="sensor2" || urlPrefix=="sensor3") {
            var val = data[key];
          } else {
            var val = data[key]/1000;
          }
          
          var $input = $('[name="' + key + '"]', $settingDialog);
          console.log(val);
          if ($input.size()) {
            if ($input.attr("type") == "checkbox") {
              $input.switchCheckBox(!val);
            } else {
              if (key == "delay") {
                $input.val( val );
              } else {
                $input[0].value = val==0 ? "" : (val/factor).toFixed(fixed);
                // $input[0].value = (val / factor).toFixed(fixed);
                //$input.val((val / factor).toFixed(fixed));
              }
            }
          }

        }

        $settingDialog.dialog({
          // title:  '<h4>' + title + ' Alarm Setting</h4>',alarmsetting
          title:  '<h4>{0} {1}</h4>'.format(title, modelmt.setalarmdl.alarmsetting),
          buttons: {
            "Save" : {
              text: model.save,
              classed: "btn-primary",
              click: function(){setAlarmHandler();},
              id: "btnSave"
            },
            "Cancel" : {
              text: model.cancels,
              classed: "btn-primary",
              click: function(){self.close();},
              id: "btnClose"
            }
          }
        });
      };

      var setAlarmHandler = function(e) {
        console.log('zzw');
        var v1,v2,v3,v4,v;
        v1 = !$("#upcritical").val()?0:$("#upcritical").val();
        v2 = !$("#upwarning").val()?0:$("#upwarning").val();
        v3 = !$("#lowwarning").val()?0:$("#lowwarning").val();
        v4 = !$("#lowcritical").val()?0:$("#lowcritical").val();
        v = parseInt(v1) + parseInt(v2) + parseInt(v3) + parseInt(v4);
        console.log('v:'+v);
        if (v) {
          if (!$("form", $settingDialog).valid()) {
            return false;
          }
        }
        
        $.ajax({
          url: "private/" + urlPrefix + "_set.json",
          data: {
              uc: (urlPrefix=="sensor1"||urlPrefix=="sensor2"||urlPrefix=="sensor3")?$("#upcritical").val():$("#upcritical").val()*1000
            , uw: (urlPrefix=="sensor1"||urlPrefix=="sensor2"||urlPrefix=="sensor3")?$("#upwarning").val():$("#upwarning").val()*1000
            , lw: (urlPrefix=="sensor1"||urlPrefix=="sensor2"||urlPrefix=="sensor3")?$("#lowwarning").val():$("#lowwarning").val()*1000
            , lc: (urlPrefix=="sensor1"||urlPrefix=="sensor2"||urlPrefix=="sensor3")?$("#lowcritical").val():$("#lowcritical").val()*1000
          },
          dataType: "json",
          success: function(status) {
            if (EL.UpdateStatus(status)) {
              (!status.result) && $.messager.alert(modelmt.setalarmdl.updatefail);
              self.close();
            }
          },
          error: function() {
            console.log(arguments);
          }
        });

        return;


        //clone a new json data
        var saveData = $.extend({}, token);

        $("input:visible, select:visible", $settingDialog).each(function() {
          var $input = $(this),
              name = $input.attr("name");
              val = Number($input.val());

          (name != "delay") && (val *= factor);

          if ($input.attr("type") == "checkbox") {
            val = ($input.is(":checked") ? 0 : 1);
          }

          saveData[name] = val;
          
        });

        $.ajax({
          url: "private/" + urlPrefix + "_set.json",
          data: saveData,
          dataType: "json",
          success: function(status) {
            (!status.result) && $.messager.alert(modelmt.setalarmdl.updatefail);
            self.close();
          },
          error: function() {
            console.log(arguments);
          }
        });

      };

      $.ajax({
        url: "private/" + urlPrefix + ".json",
        data: token,
        dataType: "json",
        success: getAlarmHandler,
        error: function() {
          console.log(arguments);
        }
      });
    };

    /*
    Set validation on alarm dialog
    */
    self.setAlarmValidate = function(unit, urlPrefix) {
      console.log('validate');
      // console.log(urlPrefix);
      // console.log(window.devtypeinfo);
      var PDUtype = window.devtypeinfo;
      console.log(PDUtype);
      var phasetype = window.phasetypeinfo;
      var rules;
      var rules2 = {};
      switch(urlPrefix){
        case "alarml1" : 
          rules = {
              upcritical: { digits: true, min: 0, max: PDUtype==0?16:32, greaterThanCU: "#upwarning" }
            , upwarning: { digits: true, min: 0, max: PDUtype==0?16:32, greaterThanCM: "#lowwarning" }
            , lowwarning: { digits: true, min: 0, max: PDUtype==0?16:32, greaterThanCD: "#lowcritical" }
            , lowcritical: { digits: true, min: 0, max: PDUtype==0?16:32 }
          };
          break;
        case "alarmcb1" : 
          rules = {
              upcritical: { digits: true, min: 0, max: 16, greaterThanCU: "#upwarning" }
            , upwarning: { digits: true, min: 0, max: 16, greaterThanCM: "#lowwarning" }
            , lowwarning: { digits: true, min: 0, max: 16, greaterThanCD: "#lowcritical" }
            , lowcritical: { digits: true, min: 0, max: 16 }
          };
          break;
        case "alarmcb2" : 
          rules = {
              upcritical: { digits: true, min: 0, max: 16, greaterThanCU: "#upwarning" }
            , upwarning: { digits: true, min: 0, max: 16, greaterThanCM: "#lowwarning" }
            , lowwarning: { digits: true, min: 0, max: 16, greaterThanCD: "#lowcritical" }
            , lowcritical: { digits: true, min: 0, max: 16 }
          };
          break;
        case "alarmvoltage" : 
          rules = {
              upcritical: { digits: true, min: 90, max: 260, greaterThanVU: "#upwarning" }
            , upwarning: { digits: true, min: 90, max: 260, greaterThanVM: "#lowwarning" }
            , lowwarning: { digits: true, min: 90, max: 260, greaterThanVD: "#lowcritical" }
            , lowcritical: { digits: true,min: 90, max: 260 }
          };
          break;
        case "alarmpower" : 
          rules = {
              upcritical: { digits: true, min:0, max:260*(PDUtype==0?16:32)*phasetype, greaterThanPU: "#upwarning" }
            , upwarning: { digits: true, min:0, max:260*(PDUtype==0?16:32)*phasetype, greaterThanPM: "#lowwarning" }
            , lowwarning: { digits: true, min:0, max:260*(PDUtype==0?16:32)*phasetype, greaterThanPD: "#lowcritical" }
            , lowcritical: { digits: true, min:0, max:260*(PDUtype==0?16:32)*phasetype }
          };
          break;
        case "sensor1" : 
          rules = {
              upcritical: { digits: true, min: 0, max: 75, greaterThanEUT: "#upwarning" }
            , upwarning: { digits: true, min: 0, max: 75, greaterThanEMT: "#lowwarning" }
            , lowwarning: { digits: true, min: 0, max: 75, greaterThanEDT: "#lowcritical" }
            , lowcritical: { digits: true,min: 0, max: 75 }
          };
          break;
        case "sensor2" : 
          rules = {
              upcritical: { digits: true, min: 15, max: 90, greaterThanEUH: "#upwarning" }
            , upwarning: { digits: true, min: 15, max: 90, greaterThanEMH: "#lowwarning" }
            , lowwarning: { digits: true, min: 15, max: 90, greaterThanEDH: "#lowcritical" }
            , lowcritical: { digits: true,min: 15, max: 90 }
          };
          break;
      }

      // var rules = {
      //     upcritical: { required: true, digits: true, greaterThan: "#upwarning" }
      //   , upwarning: { required: true, digits: true, greaterThan: "#lowwarning" }
      //   , lowwarning: { required: true, digits: true, greaterThan: "#lowcritical" }
      //   , lowcritical: { required: true, digits: true  }
      // };
      

      return $("form", $settingDialog).validate({ rules: rules });

      var $lowcritical = $('[name="lowcritical"]', $settingDialog),
          $lowwarning =  $('[name="lowwarning"]', $settingDialog),
          $upwarning = $('[name="upwarning"]', $settingDialog),
          $upcritical = $('[name="upcritical"]', $settingDialog),
          $cblowcritical = $('[name="cblowcritical"]', $settingDialog),
          $cblowwarning =  $('[name="cblowwarning"]', $settingDialog),
          $cbupwarning = $('[name="cbupwarning"]', $settingDialog),
          $cbupcritical = $('[name="cbupcritical"]', $settingDialog),
          $threshold = $('[name="threshold"]', $settingDialog);

      $.validator.addMethod("lowCheck", function(value, element) {
        if ($cblowcritical.is(":checked") && $cblowwarning.is(":checked")
            && (parseFloat($lowcritical.val()) + parseFloat($threshold.val()) > parseFloat($lowwarning.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowcriticalinfo);

      $.validator.addMethod("lowWarningCheck", function(value, element) {
        if ($cblowwarning.is(":checked")
            && $cbupwarning.is(":checked")
            && (parseFloat($lowwarning.val()) + 2 * parseFloat($threshold.val()) > parseFloat($upwarning.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowwarninfo);

      $.validator.addMethod("upCheck", function(value, element) {
        if ($cbupwarning.is(":checked") && $cbupcritical.is(":checked")
            && (parseFloat($upwarning.val()) + parseFloat($threshold.val()) > parseFloat($upcritical.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.upwarninfo);

      //Low Critical check;
      $.validator.addMethod("criticalUpWarning", function(value, element) {
        if ($cblowcritical.is(":checked") && $cbupwarning.is(":checked")
            && (parseFloat($lowcritical.val()) + 2 * parseFloat($threshold.val()) > parseFloat($upwarning.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowcriticalinfo2);

      $.validator.addMethod("criticalUpCritical", function(value, element) {
        if ($cblowcritical.is(":checked") && $cbupcritical.is(":checked")
            && (parseFloat($lowcritical.val()) + 2 * parseFloat($threshold.val()) > parseFloat($upcritical.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowcriticalinfo3);

      //Low Warning Check
      $.validator.addMethod("warningUpCritical", function(value, element) {
        if ($cblowwarning.is(":checked") && $cbupcritical.is(":checked")
            && (parseFloat($lowwarning.val()) + 2 * parseFloat($threshold.val()) > parseFloat($upcritical.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowwarninfo2);

      var rules = {
          lowcritical: {required:true, min: min, max: max, lowCheck: true, criticalUpWarning: true, criticalUpCritical: true},
          lowwarning: {required:true, min: min, max: max, lowWarningCheck:true, warningUpCritical: true },
          upcritical: {required:true, min: min, max: max },
          upwarning: {required:true, min: min, max: max, upCheck: true},
          threshold: {required:true, min: 0, max: max},
          delay: {required:true, min:0, max:100}
        };

      for (var key in rules) {
        var rule = rules[key];
        unit == 'A'
          ? (rule["number"] = true)
          : (rule["digits"] = true);
      }

      return $("form", $settingDialog).validate({ rules: rules });
    };

    /*Get alarm pure text with style*/
    self.getAlarmTxt = function(status, privi) {
      var priviTxt = privi ? "No Permission: " + PRIVILEGES[privi] || "" : "";

      var statusType = status.toLowerCase().replace(' ', '');

      return '<span href="#" class="alarm '
            + "alarm-" + statusType + '" '
            + 'title="' + priviTxt + '" '
            + '>'
            + modelmt.setalarmdl[statusType]
            + '</span>';
    };

    /*
    Get clickable status html string.
    urlprefix: full url will be like urlprefixget.htm / urlprefixset.htm
    status code, sending params
    */
    self.getAlarmStr = function(urlPrefix, status, params, unit, privi) {
      status = STATUSTYPE[status] || status;
      //type parameter if there is no value pass empty string.
      unit = unit ? ",\"" + unit + "\"" : "";

      privi = privi || 0x00000100;

      if (!EL.Privilege.hasPrivilege(privi)) {
        return self.getAlarmTxt(status, privi);
      }

      var statusType = status.toLowerCase().replace(' ', '');

      return '<a href="javascript:;" class="alarm '
            + "alarm-" + statusType
            + '" onclick=\'EL.SetAlarm.setAlarm(' 
            + "\"" + urlPrefix + "\","
            + JSON.stringify(params)
            + unit
            + ')\'>'
            + modelmt.setalarmdl[statusType]
            + '</a>';
    };
    self.getAlarmStr2 = function(urlPrefix, status, params, unit, privi) {
      status = STATUSTYPE[status] || status;
      //type parameter if there is no value pass empty string.
      unit = unit ? ",\"" + unit + "\"" : "";

      privi = privi || 0x00000100;

      if (!EL.Privilege.hasPrivilege(privi)) {
        return self.getAlarmTxt(status, privi);
      }

      var statusType = status.toLowerCase().replace(' ', '');
      
      return '<a href="javascript:;" class="alarm '
            + "alarm-" + statusType
            + '" onclick=\'EL.SetAlarm.setAlarm(' 
            + "\"" + urlPrefix + "\","
            + JSON.stringify(params)
            + unit
            + ')\'>'
            + modelmt.setalarmdl[statusType]
            + '</a>';
    };

    return self;
  };

}(window, document));
/*
Privileges functionalities
*/
var ArrayRemove = function(arr, val) {
  var idx = -1;

  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i] == val) {
      idx = i;
      break;
    }
  }

  if (idx > -1) {
    arr.splice(idx, 1);
  }

  return arr;
};

(function(window, document) {

  var self = EL.Privilege = {
  	username: "",
    rolename: "",
    pdu: "",
    temperature: 0,     //temperature type: C or F
    privilege: -1,
    https: 0,           //force https check
    changepsw: 0,       //change password
  	outlets: 0,         //outlets priviliege
    outletopr: 1,       //outlet power control flag, default is enabled
    outcount: 0         //how many outlet does it has
  };

  /*
  Set Privileges
  */
  self.set = function(obj) {
    //enable all the privilege
    //self.privilege = 0xffffff;
    //Default balue is 0
    obj["privilege"] && (self.privilege = obj["privilege"]);
    obj["outlets"] && (self.outlets = obj["outlets"]);
    obj["name"] && (self.username = obj["name"]);
    obj["role"] && (self.rolename = obj["role"]);
    obj["temperature"] && (self.temperature = obj["temperature"]);
    obj["frpasschk"] && (self.changepsw = obj["frpasschk"]);
    obj["forcehttpschk"] && (self.https = obj["forcehttpschk"]);

    //Default value is not 0
    if (typeof obj["outletopr"] != "undefined") {
      self.outletopr = obj["outletopr"];
      !self.outletopr && self.delPrivilege(0x00004000);
    }
  };

  self.setOutCount = function(count) {
    self.outcount = count;
    //for M/M+ Remove change Outlet settings
    /*
    0x00004000: "Switch Outlet",
    0x02000000: "Change Outlet Setting",
    */
    if (count < 1) {
      self.delPrivilege(0x00004000, 0x02000000)
    }
  };

  self.delPrivilege = function() {
    for (var i = 0, l = arguments.length; i < l; i++) {
      var privilegeid = arguments[i];

      delete PRIVILEGES[privilegeid];
      ArrayRemove(PRIVILEGES_Arr, privilegeid);
    }
  };

  self.hasPrivilege = function(privilegeid) {
  	return self.privilege & privilegeid;
  };

  /*
   If a elemnt has: data-privi
   <a data-privi="0x00020000">Actions</a>
   */
  self.hasPriviElem = function(element) {
    var privi = parseInt($(element).data("privi")),
        hasPrivi = true;

    //doesn't has privi elment? ignore it and return true
    if (privi) {
      var hasPrivi = self.hasPrivilege(privi);
      !hasPrivi && EL.Dialog.alert("You do not have the permission for: <br/>" + PRIVILEGES[privi]);
    }

    return hasPrivi;
  };

  self.hasOutlets = function(outletid) {
  	return self.outlets & outletid;
  };

  /*Current user is super user?*/
  self.isSuperUser = function() {
    var flag = false;

    (self.username == "admin") && (flag = true);
    (self.rolename == "admin") && (flag = true);

    return flag;
  };

  self.isCurrentUser = function(username) {
    return username == self.username;
  };

  /*
  Set status on buttons
  */
  self.setButton = function(btnArr, privilegeid, msg) {
    privilegeid = parseInt(privilegeid);

    var hasPrivilege = self.hasPrivilege(privilegeid);

    $.each(btnArr, function(idx, $btn) {
      if (hasPrivilege) {
        $btn.removeClass("locked");
      } else {
        //remove all event listener
        $btn
          .addClass("locked")
          .attr("disabled", true)
          .removeAttr("onclick")
          .off()
          .attr("title", msg || ("No Permission: " + (PRIVILEGES[privilegeid] || " Permission required!")));
      }
    });

  };

  self.setNotSupport = function(btnArr) {
    self.setButton(btnArr, 0, "Not Supported");
  };

  /*
  Set status on PropertyGrid
  */
  self.setProperty = function(rows, privilegeid) {
    if (!self.hasPrivilege(privilegeid)) {
      for(var i = 0, len = rows.length; i < len; i++) {
        delete(rows[i]["editor"]);
      }
    }
  };


  /*
  Get Privilege Description Text;
  */
  self.getText = function(key) {
    return "<span title='" + PRIVILEGES[key] + "'>"
      + PRIVILEGES[key]
      + "</span>";    
  };


})(window, document);(function() {

  var self = EL.SNMPSet = function() {
    var oldgrcom, oldgwcom, oldtip, oldtport, oldcom;
    //Send data to the server in JSON format to Reset SNMP Event Rule.
    function submitHandler() {        
      if (oldgrcom==$("#snmp_rcomm").val() && oldgwcom==$("#snmp_wcomm").val() && oldtip==$("#eip_address").val() && oldtport==$("#etrap_port").val() && oldcom==$("#ecommunity_str").val()) {
        $.messager.alert(MODEL.buttons.message, window.VALID.diffval);
      } else {
        $.ajax({
          url: "private/snmp_set.json",
          data: $("#formsnmp input").inputToJSON(),
          dataType : "json",
          success: function(data) {
            if (EL.UpdateStatus(data)) {
              $('#mydialog').dialog('destroy');
              $('#mydialog').html(''); 
              $.messager.alert(MODEL.buttons.message, MODEL.pdu.resetsuccess);       
            }
          }
        });
      }
    }

    function getSNMPolicy() {
      var policy = {};
      $("#formsnmp").validate({
        ignore:"",
        rules: {
          snmp_rcomm: $.extend({required:true, minlength:4, maxlength: 16}, policy),
          snmp_wcomm: $.extend({required:true, minlength:4, maxlength: 16}, policy),
          eip_address: $.extend({required:true, ipv4: true}, policy),
          etrap_port: $.extend({required:true, digits: true, max: 65535}, policy),
          ecommunity_str: $.extend({required:true, minlength:4, maxlength: 16}, policy)
        },
        submitHandler: submitHandler
      });    
    }

    function loadSNMPInfo() {
      $.ajax({
        type: "GET",
        url: "private/snmp.json",
        // data: "{}",
        dataType : "json",
        success: function(data) {
          getSNMPolicy();

          $("#snmp_rcomm").val(data.snmpreadcommunity);
          $("#snmp_wcomm").val(data.snmpwritecommunity);

          $("#eip_address").val(data.ipaddr);
          $("#etrap_port").val(data.trapport);
          $("#ecommunity_str").val(data.trapcommunity);

          oldgrcom = data.snmpreadcommunity;
          oldgwcom = data.snmpwritecommunity;

          oldtip = data.ipaddr; 
          oldtport = data.trapport;
          oldcom = data.trapcommunity;
        }
      });
    }

    loadSNMPInfo();
  };

}());(function() {

  var self = EL.UploadFile = function() {
    function getDownloadPDUPolicy() {
      $("#btnMainSubmit").hide();
    }

    getDownloadPDUPolicy();
    
    // function getUploadFilePolicy() {
    //   var model = MODEL.updtfw;

    //   $("#uploadPasswordLabel").text(MODEL.login.password);
    //   $("#btnMainSubmit")
    //     .text(model.upload)
    //     .on("mousedown", function() {
    //         var url   = "public/upload.json?username={0}&password={1}".format(EL.Auth.username, $("#uploadPassword").val())
    //         $("#mydialog form").attr("action", url);
    //     });


    //   $("#mydialog form")
    //     .validate({
    //       rules: {
    //         md5file: {
    //           required: true
    //           //, minlength: 3
    //         },
    //         password: {
    //           required: true
    //           //, minlength: 8
    //         }
    //       }
    //     })
    //     //.submit(submitHandler)
    //     ;
    // }

    // getUploadFilePolicy();

  };

}());(function() {

  var self = EL.PduInfoSet = function() {
    var oldpdunm, oldpdulc;
    // var $datalog_result = $("#datalog_result");

    var submitHandler = function(form) {
      var pduname, pdulocation;
      pduname = $('#dlpduname').val();
      pdulocation = $('#dlpdulocation').val();
      
      (oldpdunm==pduname && oldpdulc==pdulocation) ? $.messager.alert(MODEL.buttons.message, window.VALID.diffval) : updatePduInfoSet(pduname, pdulocation);
      return false;
    };

    //Send data to the server in JSON format to Reset Network IP.
    function updatePduInfoSet(pduname, pdulocation) {
        // var model = MODEL.datalog;
        var resetpduinfoJson = {
          "irmc_name": pduname,
          "irmc_location": pdulocation
        };
        $.ajax({
          url: "private/irmc_set.json",
          data: resetpduinfoJson,
          dataType : "json",
          success: function(data) { 
            if (EL.UpdateStatus(data)) {   
              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');
              $.messager.alert(MODEL.buttons.message, MODEL.pdu.resetsuccess);
              // var url = window.location.href;
              // var pduip = url.split('/')[2];
              // EL.ResetDev.count(10, "http://" + pduip);
              // EL.ResetDev.reset();
            }
          }
        });
    }

    function loadPduInfo() {
      $.ajax({
        type: "GET",
        url: "private/irmc.json",
        // data: "{}",
        dataType : "json",
        success: function(data) {        
          $("#dlpduname").val(data.name);
          $("#dlpdulocation").val(data.location);

          oldpdunm = data.name;
          oldpdulc = data.location;
        }
      });
    }
    function getPduInfoPolicy() {
      loadPduInfo();
      // $('#dlinterval')
      //   .focus(function() {
      //     $datalog_result.hide();
      //   })
      //   .focus();
   
      var policy = {};
      $("#frpduinfo").validate({
        rules: {
          dlpduname: $.extend({maxlength: 32}, policy),
          dlpdulocation: $.extend({maxlength: 32}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getPduInfoPolicy();

    //EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());(function() {

  var self = EL.EventRule = function() {
    var oldeventrule;
    var submitHandler = function() {
      // var eip = $("#eip_address").val();
      // var eport = $("#etrap_port").val();
      // var ecommstr = $("#ecommunity_str").val();
      // if (eip=="") eip = "0.0.0.0";
      // if (eport=="") eport = 162;
      // if (ecommstr=="") ecommstr = "public";

      var checkboxObj = $("#freventrl").find("input:checkbox[name=eventr]:checked");
      var eventV = 0;
      checkboxObj.each(function() {
        eventV = parseInt(this.value) | eventV;
      });
      console.log(eventV);
      oldeventrule == eventV ? $.messager.alert(MODEL.buttons.message, window.VALID.diffval) : updateSnmpPort(eventV);
      return false;
    };

    //Send data to the server in JSON format to Reset SNMP Event Rule.
    function updateSnmpPort(eventV) {
        var eventJson = {
          // "ipaddr":eip,
          // "port":eport,
          // "trapcom":ecommstr,
          "eventrule": eventV
        };
        $.ajax({
          url: "private/eventrule_set.json",
          data: eventJson,
          dataType : "json",
          success: function(data) {
            if (EL.UpdateStatus(data)) {
              $('#mydialog').dialog('destroy');
              $('#mydialog').html(''); 
              $.messager.alert(MODEL.buttons.message, MODEL.pdu.resetsuccess);       
            }
          }
        });
    }
    function generatelist () {     
      var eventHtml = '<div id="eventrldiv" style="border:solid 1px #086DE5;padding:15px;border-radius:10px;">';
      eventHtml += '<label id="spEventRule">'+MODEL.eventrl.spEventRule+'</label><br>';
      $.each(window.EVENTMAP, function(key,value){
        eventHtml += '<input type="checkbox" name="eventr" value='+key+'>&nbsp;&nbsp;';
        eventHtml +=  value;
        eventHtml += '</input><br>';
      });
      eventHtml += '</div>';
      $("#eventrule").html(eventHtml);
    }
    function loadEventInfo() {
      generatelist();
      
      $.ajax({
        type: "GET",
        url: "private/eventrule.json",
        // data: "{}",
        dataType : "json",
        success: function(data) {        
            // $("#eip_address").val(data.ipaddr);
            // $("#etrap_port").val(data.trapport);
            // $("#ecommunity_str").val(data.trapcommunity);
            var allcheckbox = $("#freventrl").find("input:checkbox[name=eventr]");
            var countchecked = 0;
            allcheckbox.each(function() {
              var checkedv = parseInt(data.eventrule) & parseInt(this.value);
              if (checkedv) {
                $("#freventrl").find("input:checkbox[value="+this.value+"]").attr("checked","true");
                countchecked++;
              }
            });
            if (countchecked==10) {
              $("#cbeaeventrl").attr("checked", true);
            }

            oldeventrule = data.eventrule;
        }
      });
    }
    function getSNMPPolicy() {
      loadEventInfo();
      var policy = {};
      $("#freventrl").validate({
        rules: {
          // eip_address: $.extend({ipv4: true}, policy),
          // etrap_port: $.extend({digits: true}, policy),
          // ecommunity_str: $.extend({maxlength: 16}, policy)
        },
        submitHandler: submitHandler
      });
    }

    getSNMPPolicy();

    $("#cbeaeventrl").click(function() {
      var eaeventrlV = $("#cbeaeventrl").is(':checked');
      if (eaeventrlV) {
        generatelist();
        $("#eventrldiv input:checkbox").attr("checked",true);
      } else {
        generatelist();
      }
    });

  };

}());/*User*/
(function() {

  EL.SensorSet = function() {

    var model = MODEL.users
      , $gdSensor = $('#gdSensor');

    var setSensorGrid = function(rows) {
      var dataArr = [];
      $.each(rows, function (key, value) {
        if (0 != value.connection) {
          dataArr.push(value);
        }
      });

      var cols = [[
        {field:"type", title:"{0}".format(MODEL.dashboard.externalsensortype), formatter: function(value) {
          return '<input value="{0}" name="sensortype" class="form-control" disabled="disabled"><input value="{1}" name="type" type="hidden">'.format(SENSORTYPE[value], value);
        }, readonly: true},
        {field:'sensorname', title:'{0}'.format(MODEL.dashboard.sensorname), formatter: function(val) {
          return '<input value="{0}" name="sensorname" class="form-control">'.format(val);
        }},
        {field:'aisle', title:'{0}'.format(MODEL.sensor.aisle), formatter: function(val) {
          var aislehtml = '<select id="aisletype" name="aisletype" style="width:100px;padding-top:4px;height:32px;vertical-align:middle;text-align:center;">';
          if (val==0) {
            aislehtml += '<option value=0 selected>Cold</option><option value=1>Hot</option>';
          } else if (val==1) {
            aislehtml += '<option value=0>Cold</option><option value=1 selected>Hot</option>';
          }
          aislehtml += '</select>';
          return aislehtml;
        }},
        {field:'null', formatter: function(val) {
          return '<button class="btn btn-primary">{0}</button>'.format(MODEL.buttons.save);
        }}
      ]];

      $gdSensor.datagrid({
        columns: cols,
        edit: true,
        singleSelect: true,
      });

      $gdSensor.datagrid("loadData", {rows: dataArr});

   
      $("#gdSensor button").click(function() {
        var $tr = $(this).closest("tr")
          , sensor =  $tr.find("input, select").inputToJSON()
          ;
        // console.log(sensoraisle);
        // var sensortypev;
        // if (sensor.sensortype=="Temperature (℃)") {
        //   sensortypev = 1;
        // } else if (sensor.sensortype=="Humidity (%)") {
        //   sensortypev = 2;
        // }
        var resetsensorJson = {
          "sensortype": sensor.type,
          "sensorname": sensor.sensorname,
          "sensoraisle": sensor.aisletype
        };
        

        if (sensor.sensorname.length > 16) {
          var msg = jQuery.validator.messages.maxlength(16)
          $.messager.alert(PINGSTATUS["3"], msg);
        } else {
          $.getJSON("private/sensor_set.json", resetsensorJson, function(data) {
            EL.UpdateStatus(data) && $.messager.alert(MODEL.buttons.info, MODEL.datetime.succ);
          });
        }
      });
    };

    var getSensorGrid = function() {
      $.ajax({
        url: "public/sensor.json",
        dataType: "json",
        success: setSensorGrid
      });
    };

    // Creating User and RoleinUser Grids.
    getSensorGrid();
    
    //Form validation
    //$tabCreateNewUser.mouseover(generateTooltips);
    var privilege = function() {
      $("#btnMainSubmit").hide();
      //EL.Privilege.setButton([$btnNewUser, $btnEditUser, $btnDeleteUser, $("#btnOk")], 0x00000020);
    };

    privilege();

  };

})();



