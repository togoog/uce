var uce=function(e){"use strict";const t=new WeakMap,{isArray:n}=Array,{indexOf:r,slice:s}=[],o=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),l=(e,t)=>("svg"===t?c:a)(e),a=e=>{const t=o("template");return t.innerHTML=e,t.content},c=e=>{const{content:t}=o("template"),n=o("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:r}=n.firstChild;let{length:s}=r;for(;s--;)t.appendChild(r[0]);return t},i=(e,t)=>e.childNodes[t],u=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.unshift(r.call(n.childNodes,e)),n=(e=n).parentNode;return t},{defineProperties:d}=Object,p=e=>{const{childNodes:t}=e,{length:n}=t;if(1===n)return t[0];const r=s.call(t,0);return d(e,{remove:{value(){const e=document.createRange();return e.setStartBefore(r[1]),e.setEndAfter(r[n-1]),e.deleteContents(),r[0]}},valueOf:{value(){if(t.length!==n){const t=document.createRange();t.setStartBefore(r[0]),t.setEndAfter(r[n-1]),e.appendChild(t.extractContents())}return e}}})},{createTreeWalker:h,importNode:f}=document,m=!f.length,g=m?(e,t)=>f.call(document,l(e,t),!0):l,b=m?e=>h.call(document,e,129,null,!1):e=>h.call(document,e,129),v=(e,t,n,s,o,l)=>{const a="selectedIndex"in t;let c=a;for(;s<o;){const o=e(n[s],1);if(t.insertBefore(o,l),a&&c&&o.selected){c=!c;let{selectedIndex:e}=t;t.selectedIndex=e<0?s:r.call(t.querySelectorAll("option"),o)}s++}},w=(e,t,n,r,s,o)=>{const l=o-s;if(l<1)return-1;for(;n-t>=l;){let l=t,a=s;for(;l<n&&a<o&&e[l]===r[a];)l++,a++;if(a===o)return t;t=l+1}return-1},y=(e,t,n,r,s)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:s,x=(e,t,n,r)=>{for(;n<r;)((s=e(t[n++],-1)).remove||N).call(s);var s},C=(e,t,n,r,s)=>{const o=t.length;let l=o,a=0,c=n.length,i=0;for(;a<l&&i<c&&t[a]===n[i];)a++,i++;for(;a<l&&i<c&&t[l-1]===n[c-1];)l--,c--;const u=a===l,d=i===c;if(u&&d)return n;if(u&&i<c)return v(r,e,n,i,c,y(r,t,a,o,s)),n;if(d&&a<l)return x(r,t,a,l),n;const p=l-a,h=c-i;let f=-1;if(p<h){if(f=w(n,i,c,t,a,l),-1<f)return v(r,e,n,i,f,r(t[a],0)),v(r,e,n,f+p,c,y(r,t,l,o,s)),n}else if(h<p&&(f=w(t,a,l,n,i,c),-1<f))return x(r,t,a,f),x(r,t,f+h,l),n;return p<2||h<2?(v(r,e,n,i,c,r(t[a],0)),x(r,t,a,l),n):(x(r,t,0,o),v(r,e,n,0,n.length,s),n)};function N(){const{parentNode:e}=this;e&&e.removeChild(this)}const $=(e,t)=>11===e.nodeType?1/t<0?t?e.remove():e.lastChild:t?e.valueOf():e.firstChild:e;function k(e){const{type:t,path:r}=e,o=r.reduce(i,this);return"node"===t?((e,t)=>{let r;const o=document.createTextNode(""),l=a=>{switch(typeof a){case"string":case"number":case"boolean":r!==a&&(r=a,o.textContent=a,t=C(e.parentNode,t,[o],$,e));break;case"object":case"undefined":if(null==a){t=C(e.parentNode,t,[],$,e);break}default:if(r=a,n(a))if(0===a.length)t=C(e.parentNode,t,[],$,e);else switch(typeof a[0]){case"string":case"number":case"boolean":l(String(a));break;default:t=C(e.parentNode,t,a,$,e)}else"ELEMENT_NODE"in a&&(t=C(e.parentNode,t,11===a.nodeType?s.call(a.childNodes):[a],$,e))}};return l})(o,[]):"attr"===t?((e,t)=>{if("ref"===t)return t=>{t.current=e};if("."===t.slice(0,1)){const n=t.slice(1);return t=>{e[n]=t}}let n;if("on"===t.slice(0,2)){let r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}let r=!0;const s=e.ownerDocument.createAttribute(t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(s),r=!0):(s.value=t,r&&(e.setAttributeNode(s),r=!1)))}})(o,e.name):(e=>{let t;return n=>{t!==n&&(t=n,e.textContent=null==n?"":n)}})(o)}const L="".trimStart||function(){return this.replace(/^[ \f\n\r\t]+/,"")},A="".trimEnd||function(){return this.replace(/[ \f\n\r\t]+$/,"")},E=/([^ \f\n\r\t\\>"'=]+)\s*=\s*(['"]?)$/,O=new WeakMap,S=(e,t)=>{const{wire:n,updates:r}=j(e,t);return{type:e,template:t,wire:n,updates:r}},T=(e,t)=>{for(;t--;){const n=e[t];if(/<[A-Za-z][^>]+$/.test(n))return!0;if(/>[^<>]*$/.test(n))return!1}return!1},M=(e,t)=>{const n=(e=>{const t=[];for(let n=0,{length:r}=e;n<r;n++){const s=n<1?L.call(e[n]):e[n];E.test(s)&&T(e,n+1)?t.push(s.replace(E,(e,t,r)=>`isµ${n}=${r||'"'}${t}${r?"":'"'}`)):n+1<r?t.push(s,`\x3c!--isµ${n}--\x3e`):t.push(A.call(s))}return t.join("").replace(/<([A-Za-z]+[A-Za-z0-9:._-]*)([^>]*?)(\/>)/g,H)})(t),r=g(n,e),s=b(r),o=[],l=t.length-1;let a=0,c=`isµ${a}`;for(;a<l;){const e=s.nextNode();if(!e)throw`bad template: ${n}`;if(8===e.nodeType)e.textContent===c&&(o.push({type:"node",path:u(e)}),c=`isµ${++a}`);else{for(;e.hasAttribute(c);)o.push({type:"attr",path:u(e),name:e.getAttribute(c)}),e.removeAttribute(c),c=`isµ${++a}`;/^(?:style|textarea)$/i.test(e.tagName)&&L.call(A.call(e.textContent))===`\x3c!--${c}--\x3e`&&(o.push({type:"text",path:u(e)}),c=`isµ${++a}`)}}return{content:r,nodes:o}},j=(e,t)=>{const{content:n,nodes:r}=O.get(t)||z(e,t),s=f.call(document,n,!0),o=r.map(k,s);return{wire:p(s),updates:o}},W=(e,t)=>{const{sub:n,stack:r}=e,s={a:0,aLength:n.length,i:0,iLength:r.length},o=B(e,t,s),{a:l,i:a,aLength:c,iLength:i}=s;return l<c&&n.splice(l),a<i&&r.splice(a),o},z=(e,t)=>{const n=M(e,t);return O.set(t,n),n},B=(e,t,n)=>{const{stack:r}=e,{i:s,iLength:o}=n,{type:l,template:a,values:c}=t,i=s===o;i&&(n.iLength=r.push(S(l,a))),n.i++,D(e,c,n);let u=r[s];i||u.template===a&&u.type===l||(r[s]=u=S(l,a));const{wire:d,updates:p}=u;for(let e=0,{length:t}=p;e<t;e++)p[e](c[e]);return d},D=(e,t,r)=>{for(let s=0,{length:o}=t;s<o;s++){const o=t[s];if("object"==typeof o&&o)if(o instanceof I)t[s]=B(e,o,r);else if(n(o))for(let t=0,{length:n}=o;t<n;t++){const n=o[t];if("object"==typeof n&&n&&n instanceof I){const{sub:s}=e,{a:l,aLength:a}=r;l===a&&(r.aLength=s.push({sub:[],stack:[],wire:null})),r.a++,o[t]=W(s[l],n)}}}},H=(e,t,n)=>/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i.test(t)?e:`<${t}${n}></${t}>`;function I(e,t,n){this.type=e,this.template=t,this.values=n}const P=(e,...t)=>new I("html",e,t),Z=(e,n)=>{const r="function"==typeof n?n():n,s=t.get(e)||(e=>{const n={sub:[],stack:[],wire:null};return t.set(e,n),n})(e),o=r instanceof I?W(s,r):r;return o!==s.wire&&(s.wire=o,e.textContent="",e.appendChild(o.valueOf())),e},{define:R}=customElements,{create:_,defineProperties:q,getOwnPropertyDescriptor:F,keys:G}=Object,J=new WeakMap;function K(){return Z(this,P.apply(null,arguments))}return e.define=(e,t)=>{const{attachShadow:n,attributeChanged:r,connected:s,disconnected:o,handleEvent:l,init:a,observedAttributes:c}=t,i={},u={},d=[],p=_(null);for(let e=G(t),n=0,{length:r}=e;n<r;n++){let r=e[n];if(/^on/.test(r)){if(!/Options$/.test(r)){const e=t[r+"Options"]||!1,n=r.toLowerCase();let s=n.slice(2);d.push({type:s,options:e}),p[s]=r,n!==r&&(s=r.slice(2,3).toLowerCase()+r.slice(3),p[s]=r,d.push({type:s,options:e}))}}else switch(r){case"attachShadow":case"observedAttributes":break;default:u[r]=F(t,r)}}const{length:h}=d;h&&!l&&(u.handleEvent={value(e){this[p[e.type]](e)}}),c&&(i.observedAttributes={value:c}),u.attributeChangedCallback={value(){b(this),r&&r.apply(this,arguments)}},u.connectedCallback={value(){b(this),s&&s.apply(this,arguments)}},o&&(u.disconnectedCallback={value:o});const f=t.extends||"element";class m extends((e=>"element"===e?HTMLElement:document.createElement(e).constructor)(f)){}q(m,i),q(m.prototype,u);const g=[e,m];function b(e){if(!J.has(e)){if(J.set(e,!0),h)for(let t=0;t<h;t++){const{type:n,options:r}=d[t];e.addEventListener(n,e,r)}q(e,{html:{value:K.bind(n?e.attachShadow(n):e)}})}a&&a.call(e)}"element"!==f&&g.push({extends:f}),R.apply(customElements,g)},e}({});