/*!
 * VERSION: 0.14.1
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("utils.Draggable",["events.EventDispatcher","TweenLite","plugins.CSSPlugin"],function(t,e,i){var r,s,n,a,o,l,h,u,_={css:{}},c={css:{}},f={css:{}},p={css:{}},d=_gsScope._gsDefine.globals,m={},g=document,v=g.documentElement||{},y=function(t){return g.createElementNS?g.createElementNS("http://www.w3.org/1999/xhtml",t):g.createElement(t)},T=y("div"),x=[],w=function(){return!1},b=180/Math.PI,P=999999999999999,S=Date.now||function(){return(new Date).getTime()},k=!(g.addEventListener||!g.all),C=g.createElement("div"),R=[],O={},A=0,D=/^(?:a|input|textarea|button|select)$/i,M=0,L=-1!==navigator.userAgent.toLowerCase().indexOf("android"),N=0,F={},E={},I=function(t){if("string"==typeof t&&(t=e.selector(t)),!t||t.nodeType)return[t];var i,r=[],s=t.length;for(i=0;i!==s;r.push(t[i++]));return r},z=function(){for(var t=R.length;--t>-1;)R[t]()},X=function(t){R.push(t),1===R.length&&e.ticker.addEventListener("tick",z,this,!1,1)},B=function(t){for(var i=R.length;--i>-1;)R[i]===t&&R.splice(i,1);e.to(Y,0,{overwrite:"all",delay:15,onComplete:Y})},Y=function(){R.length||e.ticker.removeEventListener("tick",z)},W=function(t,e){var i;for(i in e)void 0===t[i]&&(t[i]=e[i]);return t},j=function(){return null!=window.pageYOffset?window.pageYOffset:null!=g.scrollTop?g.scrollTop:v.scrollTop||g.body.scrollTop||0},U=function(){return null!=window.pageXOffset?window.pageXOffset:null!=g.scrollLeft?g.scrollLeft:v.scrollLeft||g.body.scrollLeft||0},V=function(t,e){Me(t,"scroll",e),q(t.parentNode)||V(t.parentNode,e)},G=function(t,e){Le(t,"scroll",e),q(t.parentNode)||G(t.parentNode,e)},q=function(t){return!(t&&t!==v&&t!==g&&t!==g.body&&t!==window&&t.nodeType&&t.parentNode)},H=function(t,e){var i="x"===e?"Width":"Height",r="scroll"+i,s="client"+i,n=g.body;return Math.max(0,q(t)?Math.max(v[r],n[r])-(window["inner"+i]||v[s]||n[s]):t[r]-t[s])},Q=function(t){var e=q(t),i=H(t,"x"),r=H(t,"y");e?t=E:Q(t.parentNode),t._gsMaxScrollX=i,t._gsMaxScrollY=r,t._gsScrollX=t.scrollLeft||0,t._gsScrollY=t.scrollTop||0},Z=function(t,e){return t=t||window.event,m.pageX=t.clientX+g.body.scrollLeft+v.scrollLeft,m.pageY=t.clientY+g.body.scrollTop+v.scrollTop,e&&(t.returnValue=!1),m},$=function(t){return t?("string"==typeof t&&(t=e.selector(t)),t.length&&t!==window&&t[0]&&t[0].style&&!t.nodeType&&(t=t[0]),t===window||t.nodeType&&t.style?t:null):t},K=function(t,e){var i,s,n,a=t.style;if(void 0===a[e]){for(n=["O","Moz","ms","Ms","Webkit"],s=5,i=e.charAt(0).toUpperCase()+e.substr(1);--s>-1&&void 0===a[n[s]+i];);if(0>s)return"";r=3===s?"ms":n[s],e=r+i}return e},J=function(t,e,i){var r=t.style;r&&(void 0===r[e]&&(e=K(t,e)),null==i?r.removeProperty?r.removeProperty(e.replace(/([A-Z])/g,"-$1").toLowerCase()):r.removeAttribute(e):void 0!==r[e]&&(r[e]=i))},te=g.defaultView?g.defaultView.getComputedStyle:w,ee=/(?:Left|Right|Width)/i,ie=/(?:\d|\-|\+|=|#|\.)*/g,re=function(t,e,i,r,s){if("px"===r||!r)return i;if("auto"===r||!i)return 0;var n,a=ee.test(e),o=t,l=T.style,h=0>i;return h&&(i=-i),"%"===r&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(l.cssText="border:0 solid red;position:"+ne(t,"position",!0)+";line-height:0;","%"!==r&&o.appendChild?l[a?"borderLeftWidth":"borderTopWidth"]=i+r:(o=t.parentNode||g.body,l[a?"width":"height"]=i+r),o.appendChild(T),n=parseFloat(T[a?"offsetWidth":"offsetHeight"]),o.removeChild(T),0!==n||s||(n=re(t,e,i,r,!0))),h?-n:n},se=function(t,e){if("absolute"!==ne(t,"position",!0))return 0;var i="left"===e?"Left":"Top",r=ne(t,"margin"+i,!0);return t["offset"+i]-(re(t,e,parseFloat(r),(r+"").replace(ie,""))||0)},ne=function(t,e,i){var r,s=(t._gsTransform||{})[e];return s||0===s?s:(t.style[e]?s=t.style[e]:(r=te(t))?(s=r.getPropertyValue(e.replace(/([A-Z])/g,"-$1").toLowerCase()),s=s||r.length?s:r[e]):t.currentStyle&&(s=t.currentStyle[e]),"auto"!==s||"top"!==e&&"left"!==e||(s=se(t,e)),i?s:parseFloat(s)||0)},ae=function(t,e,i){var r=t.vars,s=r[i],n=t._listeners[e];"function"==typeof s&&s.apply(r[i+"Scope"]||r.callbackScope||t,r[i+"Params"]||[t.pointerEvent]),n&&t.dispatchEvent(e)},oe=function(t,e){var i,r,s,n=$(t);return n?Ce(n,e):void 0!==t.left?(s=xe(e),{left:t.left-s.x,top:t.top-s.y,width:t.width,height:t.height}):(r=t.min||t.minX||t.minRotation||0,i=t.min||t.minY||0,{left:r,top:i,width:(t.max||t.maxX||t.maxRotation||0)-r,height:(t.max||t.maxY||0)-i})},le=function(){if(!g.createElementNS)return a=0,o=!1,void 0;var t,e,i,r,s=y("div"),n=g.createElementNS("http://www.w3.org/2000/svg","svg"),u=y("div"),_=s.style,c=g.body||v;g.body&&_e&&(_.position=u.style.position="absolute",c.appendChild(u),u.appendChild(s),_.height="10px",r=s.offsetTop,u.style.border="5px solid red",h=r!==s.offsetTop,c.removeChild(u)),_=n.style,n.setAttributeNS(null,"width","400px"),n.setAttributeNS(null,"height","400px"),n.setAttributeNS(null,"viewBox","0 0 400 400"),_.display="block",_.boxSizing="border-box",_.border="0px solid red",_.transform="none",s.style.cssText="width:100px;height:100px;overflow:scroll",c.appendChild(s),s.appendChild(n),i=n.createSVGPoint().matrixTransform(n.getScreenCTM()),e=i.y,s.scrollTop=100,i.x=i.y=0,i=i.matrixTransform(n.getScreenCTM()),l=100.1>e-i.y?0:e-i.y-150,s.removeChild(n),c.removeChild(s),c.appendChild(n),t=n.getScreenCTM(),e=t.e,_.border="50px solid red",t=n.getScreenCTM(),0===e&&0===t.e&&0===t.f&&1===t.a?(a=1,o=!0):(a=e!==t.e?1:0,o=1!==t.a),c.removeChild(n)},he=""!==K(T,"perspective"),ue=K(T,"transformOrigin").replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),_e=K(T,"transform"),ce=_e.replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),fe={},pe={},de=window.SVGElement,me=function(t){return!!(de&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},ge=(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent))&&11>parseFloat(RegExp.$1),ve=[],ye=[],Te=function(t){if(!t.getBoundingClientRect||!t.parentNode||!_e)return{offsetTop:0,offsetLeft:0,scaleX:1,scaleY:1,offsetParent:v};if(We.cacheSVGData!==!1&&t._gsCache&&t._gsCache.lastUpdate===e.ticker.frame)return t._gsCache;var i,r,s,n,h,u,_,c,f,p,d,m,y=t,T=we(t);if(T.lastUpdate=e.ticker.frame,t.getBBox&&!T.isSVGRoot){for(y=t.parentNode,i=t.getBBox();y&&"svg"!==(y.nodeName+"").toLowerCase();)y=y.parentNode;return n=Te(y),T.offsetTop=i.y*n.scaleY,T.offsetLeft=i.x*n.scaleX,T.scaleX=n.scaleX,T.scaleY=n.scaleY,T.offsetParent=y||v,T}for(s=T.offsetParent,s===g.body&&(s=v),ye.length=ve.length=0;y&&(h=ne(y,_e,!0),"matrix(1, 0, 0, 1, 0, 0)"!==h&&"none"!==h&&"translate3d(0px, 0px, 0px)"!==h&&(ye.push(y),ve.push(y.style[_e]),y.style[_e]="none"),y!==s);)y=y.parentNode;for(r=s.getBoundingClientRect(),h=t.getScreenCTM(),c=t.createSVGPoint(),_=c.matrixTransform(h),c.x=c.y=10,c=c.matrixTransform(h),T.scaleX=(c.x-_.x)/10,T.scaleY=(c.y-_.y)/10,void 0===a&&le(),T.borderBox&&!o&&t.getAttribute("width")&&(n=te(t)||{},f=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth)||0,p=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)||0,d=parseFloat(n.width)||0,m=parseFloat(n.height)||0,T.scaleX*=(d-f)/d,T.scaleY*=(m-p)/m),l?(i=t.getBoundingClientRect(),T.offsetLeft=i.left-r.left,T.offsetTop=i.top-r.top):(T.offsetLeft=_.x-r.left,T.offsetTop=_.y-r.top),T.offsetParent=s,u=ye.length;--u>-1;)ye[u].style[_e]=ve[u];return T},xe=function(t,i){if(i=i||{},!t||t===v||!t.parentNode||t===window)return{x:0,y:0};var r=te(t),s=ue&&r?r.getPropertyValue(ue):"50% 50%",n=s.split(" "),a=-1!==s.indexOf("left")?"0%":-1!==s.indexOf("right")?"100%":n[0],o=-1!==s.indexOf("top")?"0%":-1!==s.indexOf("bottom")?"100%":n[1];return("center"===o||null==o)&&(o="50%"),("center"===a||isNaN(parseFloat(a)))&&(a="50%"),t.getBBox&&me(t)?(t._gsTransform||(e.set(t,{x:"+=0",overwrite:!1}),void 0===t._gsTransform.xOrigin&&console.log("Draggable requires at least GSAP 1.17.0")),s=t.getBBox(),i.x=t._gsTransform.xOrigin-s.x,i.y=t._gsTransform.yOrigin-s.y):(t.getBBox&&!t.offsetWidth&&-1!==(a+o).indexOf("%")&&(t=t.getBBox(),t={offsetWidth:t.width,offsetHeight:t.height}),i.x=-1!==a.indexOf("%")?t.offsetWidth*parseFloat(a)/100:parseFloat(a),i.y=-1!==o.indexOf("%")?t.offsetHeight*parseFloat(o)/100:parseFloat(o)),i},we=function(t){if(We.cacheSVGData!==!1&&t._gsCache&&t._gsCache.lastUpdate===e.ticker.frame)return t._gsCache;var i,r=t._gsCache=t._gsCache||{},s=te(t),n=t.getBBox&&me(t),a="svg"===(t.nodeName+"").toLowerCase();if(r.isSVG=n,r.isSVGRoot=a,r.borderBox="border-box"===s.boxSizing,r.computedStyle=s,a)(r.offsetParent=t.offsetParent)||(i=t.parentNode||v,i.insertBefore(T,t),r.offsetParent=T.offsetParent||v,i.removeChild(T));else if(n){for(i=t.parentNode;i&&"svg"!==(i.nodeName+"").toLowerCase();)i=i.parentNode;r.offsetParent=i}return r},be=function(t,e,i,r){if(t===window||!t||!t.style||!t.parentNode)return[1,0,0,1,0,0];var s,n,o,l,u,_,c,f,p,d,m,y,T,x,w=t._gsCache||we(t),b=t.parentNode,P=b._gsCache||we(b),S=w.computedStyle,k=w.isSVG?P.offsetParent:b.offsetParent;return s=w.isSVG&&-1!==(t.style[_e]+"").indexOf("matrix")?t.style[_e]:S?S.getPropertyValue(ce):t.currentStyle?t.currentStyle[_e]:"1,0,0,1,0,0",t.getBBox&&-1!==(t.getAttribute("transform")+"").indexOf("matrix")&&(s=t.getAttribute("transform")),s=(s+"").match(/(?:\-|\b)[\d\-\.e]+\b/g)||[1,0,0,1,0,0],s.length>6&&(s=[s[0],s[1],s[4],s[5],s[12],s[13]]),r?s[4]=s[5]=0:w.isSVG&&(u=t._gsTransform)&&(u.xOrigin||u.yOrigin)&&(s[0]=parseFloat(s[0]),s[1]=parseFloat(s[1]),s[2]=parseFloat(s[2]),s[3]=parseFloat(s[3]),s[4]=parseFloat(s[4])-(u.xOrigin-(u.xOrigin*s[0]+u.yOrigin*s[2])),s[5]=parseFloat(s[5])-(u.yOrigin-(u.xOrigin*s[1]+u.yOrigin*s[3]))),e&&(void 0===a&&le(),o=w.isSVG||w.isSVGRoot?Te(t):t,w.isSVG?(l=t.getBBox(),d=P.isSVGRoot?{x:0,y:0}:b.getBBox(),o={offsetLeft:l.x-d.x,offsetTop:l.y-d.y,offsetParent:w.offsetParent}):w.isSVGRoot?(m=parseInt(S.borderTopWidth,10)||0,y=parseInt(S.borderLeftWidth,10)||0,T=(s[0]-a)*y+s[2]*m,x=s[1]*y+(s[3]-a)*m,_=e.x,c=e.y,f=_-(_*s[0]+c*s[2]),p=c-(_*s[1]+c*s[3]),s[4]=parseFloat(s[4])+f,s[5]=parseFloat(s[5])+p,e.x-=f,e.y-=p,_=o.scaleX,c=o.scaleY,e.x*=_,e.y*=c,s[0]*=_,s[1]*=c,s[2]*=_,s[3]*=c,ge||(e.x+=T,e.y+=x)):!h&&t.offsetParent&&(e.x+=parseInt(ne(t.offsetParent,"borderLeftWidth"),10)||0,e.y+=parseInt(ne(t.offsetParent,"borderTopWidth"),10)||0),n=b===v||b===g.body,s[4]=Number(s[4])+e.x+(o.offsetLeft||0)-i.x-(n?0:b.scrollLeft||0),s[5]=Number(s[5])+e.y+(o.offsetTop||0)-i.y-(n?0:b.scrollTop||0),b&&"fixed"===ne(t,"position",S)&&(s[4]+=U(),s[5]+=j()),b&&b!==v&&k===o.offsetParent&&(s[4]-=b.offsetLeft||0,s[5]-=b.offsetTop||0,h||!b.offsetParent||w.isSVG||w.isSVGRoot||(s[4]-=parseInt(ne(b.offsetParent,"borderLeftWidth"),10)||0,s[5]-=parseInt(ne(b.offsetParent,"borderTopWidth"),10)||0))),s},Pe=function(t,e){if(!t||t===window||!t.parentNode)return[1,0,0,1,0,0];for(var i,r,s,n,a,o,l,h,u=xe(t,fe),_=xe(t.parentNode,pe),c=be(t,u,_);(t=t.parentNode)&&t.parentNode&&t!==v;)u=_,_=xe(t.parentNode,u===fe?pe:fe),l=be(t,u,_),i=c[0],r=c[1],s=c[2],n=c[3],a=c[4],o=c[5],c[0]=i*l[0]+r*l[2],c[1]=i*l[1]+r*l[3],c[2]=s*l[0]+n*l[2],c[3]=s*l[1]+n*l[3],c[4]=a*l[0]+o*l[2]+l[4],c[5]=a*l[1]+o*l[3]+l[5];return e&&(i=c[0],r=c[1],s=c[2],n=c[3],a=c[4],o=c[5],h=i*n-r*s,c[0]=n/h,c[1]=-r/h,c[2]=-s/h,c[3]=i/h,c[4]=(s*o-n*a)/h,c[5]=-(i*o-r*a)/h),c},Se=function(t,e,i,r,s){t=$(t);var n=Pe(t,!1,s),a=e.x,o=e.y;return i&&(xe(t,e),a-=e.x,o-=e.y),r=r===!0?e:r||{},r.x=a*n[0]+o*n[2]+n[4],r.y=a*n[1]+o*n[3]+n[5],r},ke=function(t,e,i){var r=t.x*e[0]+t.y*e[2]+e[4],s=t.x*e[1]+t.y*e[3]+e[5];return t.x=r*i[0]+s*i[2]+i[4],t.y=r*i[1]+s*i[3]+i[5],t},Ce=function(t,e,i){if(!(t=$(t)))return null;e=$(e);var r,s,n,a,o,l,h,u,_,c,f,p,d,m,y,T,x,w,b,P,S,C,R=t.getBBox&&me(t);if(t===window)a=j(),s=U(),n=s+(v.clientWidth||t.innerWidth||g.body.clientWidth||0),o=a+((t.innerHeight||0)-20<v.clientHeight?v.clientHeight:t.innerHeight||g.body.clientHeight||0);else{if(void 0===e||e===window)return t.getBoundingClientRect();r=xe(t),s=-r.x,a=-r.y,R?(p=t.getBBox(),d=p.width,m=p.height):t.offsetWidth?(d=t.offsetWidth,m=t.offsetHeight):(S=te(t),d=parseFloat(S.width),m=parseFloat(S.height)),n=s+d,o=a+m,"svg"!==t.nodeName.toLowerCase()||k||(y=Te(t),C=y.computedStyle||{},w=(t.getAttribute("viewBox")||"0 0").split(" "),b=parseFloat(w[0]),P=parseFloat(w[1]),T=parseFloat(C.borderLeftWidth)||0,x=parseFloat(C.borderTopWidth)||0,n-=d-(d-T)/y.scaleX-b,o-=m-(m-x)/y.scaleY-P,s-=T/y.scaleX-b,a-=x/y.scaleY-P,S&&(n+=(parseFloat(C.borderRightWidth)+T)/y.scaleX,o+=(x+parseFloat(C.borderBottomWidth))/y.scaleY))}return t===e?{left:s,top:a,width:n-s,height:o-a}:(l=Pe(t),h=Pe(e,!0),u=ke({x:s,y:a},l,h),_=ke({x:n,y:a},l,h),c=ke({x:n,y:o},l,h),f=ke({x:s,y:o},l,h),s=Math.min(u.x,_.x,c.x,f.x),a=Math.min(u.y,_.y,c.y,f.y),F.x=F.y=0,i&&xe(e,F),{left:s+F.x,top:a+F.y,width:Math.max(u.x,_.x,c.x,f.x)-s,height:Math.max(u.y,_.y,c.y,f.y)-a})},Re=function(t){return t&&t.length&&t[0]&&(t[0].nodeType&&t[0].style&&!t.nodeType||t[0].length&&t[0][0])?!0:!1},Oe=function(t){var e,i,r,s=[],n=t.length;for(e=0;n>e;e++)if(i=t[e],Re(i))for(r=i.length,r=0;i.length>r;r++)s.push(i[r]);else i&&0!==i.length&&s.push(i);return s},Ae="ontouchstart"in v&&"orientation"in window,De=function(t){for(var e=t.split(","),i=(void 0!==T.onpointerdown?"pointerdown,pointermove,pointerup,pointercancel":void 0!==T.onmspointerdown?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":t).split(","),r={},s=8;--s>-1;)r[e[s]]=i[s],r[i[s]]=e[s];return r}("touchstart,touchmove,touchend,touchcancel"),Me=function(t,e,i,r){t.addEventListener?t.addEventListener(De[e]||e,i,r):t.attachEvent&&t.attachEvent("on"+e,i)},Le=function(t,e,i){t.removeEventListener?t.removeEventListener(De[e]||e,i):t.detachEvent&&t.detachEvent("on"+e,i)},Ne=function(t,e){for(var i=t.length;--i>-1;)if(t[i].identifier===e)return!0;return!1},Fe=function(t){s=t.touches&&t.touches.length>M,Le(t.target,"touchend",Fe)},Ee=function(t){s=t.touches&&t.touches.length>M,Me(t.target,"touchend",Fe)},Ie=function(t,e,i,r,s,n){var a,o,l,h={};if(e)if(1!==s&&e instanceof Array){for(h.end=a=[],l=e.length,o=0;l>o;o++)a[o]=e[o]*s;i+=1.1,r-=1.1}else h.end="function"==typeof e?function(i){return e.call(t,i)*s}:e;return(i||0===i)&&(h.max=i),(r||0===r)&&(h.min=r),n&&(h.velocity=0),h},ze=function(t){var e;return t&&t.getAttribute&&"BODY"!==t.nodeName?"true"===(e=t.getAttribute("data-clickable"))||"false"!==e&&(t.onclick||D.test(t.nodeName+"")||"true"===t.getAttribute("contentEditable"))?!0:ze(t.parentNode):!1},Xe=function(t,e){for(var i,r=t.length;--r>-1;)i=t[r],i.ondragstart=i.onselectstart=e?null:w,J(i,"userSelect",e?"text":"none")},Be=function(){var t,e=g.createElement("div"),i=g.createElement("div"),r=i.style,s=g.body||T;return r.display="inline-block",r.position="relative",e.style.cssText=i.innerHTML="width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",e.appendChild(i),s.appendChild(e),u=i.offsetHeight+18>e.scrollHeight,r.width="100%",_e||(r.paddingRight="500px",t=e.scrollLeft=e.scrollWidth-e.clientWidth,r.left="-90px",t=t!==e.scrollLeft),s.removeChild(e),t}(),Ye=function(t,i){t=$(t),i=i||{};var r,s,n,a,o,l,h=g.createElement("div"),_=h.style,c=t.firstChild,f=0,p=0,d=t.scrollTop,m=t.scrollLeft,v=t.scrollWidth,y=t.scrollHeight,T=0,x=0,w=0;he&&i.force3D!==!1?(o="translate3d(",l="px,0px)"):_e&&(o="translate(",l="px)"),this.scrollTop=function(t,e){return arguments.length?(this.top(-t,e),void 0):-this.top()},this.scrollLeft=function(t,e){return arguments.length?(this.left(-t,e),void 0):-this.left()},this.left=function(r,s){if(!arguments.length)return-(t.scrollLeft+p);var n=t.scrollLeft-m,a=p;return(n>2||-2>n)&&!s?(m=t.scrollLeft,e.killTweensOf(this,!0,{left:1,scrollLeft:1}),this.left(-m),i.onKill&&i.onKill(),void 0):(r=-r,0>r?(p=0|r-.5,r=0):r>x?(p=0|r-x,r=x):p=0,(p||a)&&(o?this._suspendTransforms||(_[_e]=o+-p+"px,"+-f+l):_.left=-p+"px",Be&&p+T>=0&&(_.paddingRight=p+T+"px")),t.scrollLeft=0|r,m=t.scrollLeft,void 0)},this.top=function(r,s){if(!arguments.length)return-(t.scrollTop+f);var n=t.scrollTop-d,a=f;return(n>2||-2>n)&&!s?(d=t.scrollTop,e.killTweensOf(this,!0,{top:1,scrollTop:1}),this.top(-d),i.onKill&&i.onKill(),void 0):(r=-r,0>r?(f=0|r-.5,r=0):r>w?(f=0|r-w,r=w):f=0,(f||a)&&(o?this._suspendTransforms||(_[_e]=o+-p+"px,"+-f+l):_.top=-f+"px"),t.scrollTop=0|r,d=t.scrollTop,void 0)},this.maxScrollTop=function(){return w},this.maxScrollLeft=function(){return x},this.disable=function(){for(c=h.firstChild;c;)a=c.nextSibling,t.appendChild(c),c=a;t===h.parentNode&&t.removeChild(h)},this.enable=function(){if(c=t.firstChild,c!==h){for(;c;)a=c.nextSibling,h.appendChild(c),c=a;t.appendChild(h),this.calibrate()}},this.calibrate=function(e){var i,a,o=t.clientWidth===r;d=t.scrollTop,m=t.scrollLeft,(!o||t.clientHeight!==s||h.offsetHeight!==n||v!==t.scrollWidth||y!==t.scrollHeight||e)&&((f||p)&&(i=this.left(),a=this.top(),this.left(-t.scrollLeft),this.top(-t.scrollTop)),(!o||e)&&(_.display="block",_.width="auto",_.paddingRight="0px",T=Math.max(0,t.scrollWidth-t.clientWidth),T&&(T+=ne(t,"paddingLeft")+(u?ne(t,"paddingRight"):0))),_.display="inline-block",_.position="relative",_.overflow="visible",_.verticalAlign="top",_.width="100%",_.paddingRight=T+"px",u&&(_.paddingBottom=ne(t,"paddingBottom",!0)),k&&(_.zoom="1"),r=t.clientWidth,s=t.clientHeight,v=t.scrollWidth,y=t.scrollHeight,x=t.scrollWidth-r,w=t.scrollHeight-s,n=h.offsetHeight,_.display="block",(i||a)&&(this.left(i),this.top(a)))},this.content=h,this.element=t,this._suspendTransforms=!1,this.enable()},We=function(r,a){t.call(this,r),r=$(r),n||(n=d.com.greensock.plugins.ThrowPropsPlugin),this.vars=a=a||{},this.target=r,this.x=this.y=this.rotation=0,this.dragResistance=parseFloat(a.dragResistance)||0,this.edgeResistance=isNaN(a.edgeResistance)?1:parseFloat(a.edgeResistance)||0,this.lockAxis=a.lockAxis,this.autoScroll=a.autoScroll||0,this.lockedAxis=null,this.allowEventDefault=!!a.allowEventDefault;var o,l,h,u,m,y,T,w,R,D,F,z,Y,j,U,H,K,te,ee,ie,re,se,le,he,ue,_e,ce,fe,pe,de,me,ge,ve=(a.type||(k?"top,left":"x,y")).toLowerCase(),ye=-1!==ve.indexOf("x")||-1!==ve.indexOf("y"),Te=-1!==ve.indexOf("rotation"),xe=Te?"rotation":ye?"x":"left",we=ye?"y":"top",be=-1!==ve.indexOf("x")||-1!==ve.indexOf("left")||"scroll"===ve,ke=-1!==ve.indexOf("y")||-1!==ve.indexOf("top")||"scroll"===ve,Ce=a.minimumMovement||2,Re=this,Oe=I(a.trigger||a.handle||r),Fe={},Be=0,je=!1,Ue=a.clickableTest||ze,Ve=function(t){if(Re.autoScroll&&Re.isDragging&&(te||je)){var e,i,s,n,a,o,h,u,_=r,c=15*Re.autoScroll;for(je=!1,E.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=v.scrollTop?v.scrollTop:g.body.scrollTop,E.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=v.scrollLeft?v.scrollLeft:g.body.scrollLeft,n=Re.pointerX-E.scrollLeft,a=Re.pointerY-E.scrollTop;_&&!i;)i=q(_.parentNode),e=i?E:_.parentNode,s=i?{bottom:Math.max(v.clientHeight,window.innerHeight||0),right:Math.max(v.clientWidth,window.innerWidth||0),left:0,top:0}:e.getBoundingClientRect(),o=h=0,ke&&(a>s.bottom-40&&(u=e._gsMaxScrollY-e.scrollTop)?(je=!0,h=Math.min(u,0|c*(1-Math.max(0,s.bottom-a)/40))):s.top+40>a&&e.scrollTop&&(je=!0,h=-Math.min(e.scrollTop,0|c*(1-Math.max(0,a-s.top)/40))),h&&(e.scrollTop+=h)),be&&(n>s.right-40&&(u=e._gsMaxScrollX-e.scrollLeft)?(je=!0,o=Math.min(u,0|c*(1-Math.max(0,s.right-n)/40))):s.left+40>n&&e.scrollLeft&&(je=!0,o=-Math.min(e.scrollLeft,0|c*(1-Math.max(0,n-s.left)/40))),o&&(e.scrollLeft+=o)),i&&(o||h)&&(window.scrollTo(e.scrollLeft,e.scrollTop),si(Re.pointerX+o,Re.pointerY+h)),_=e}if(te){var f=Re.x,p=Re.y,d=1e-6;d>f&&f>-d&&(f=0),d>p&&p>-d&&(p=0),Te?(pe.data.rotation=Re.rotation=f,pe.setRatio(1)):l?(ke&&l.top(p),be&&l.left(f)):ye?(ke&&(pe.data.y=p),be&&(pe.data.x=f),pe.setRatio(1)):(ke&&(r.style.top=p+"px"),be&&(r.style.left=f+"px")),!w||t||ge||(ge=!0,ae(Re,"drag","onDrag"),ge=!1)}te=!1},qe=function(t,i){var s,n=Re.x,a=Re.y;r._gsTransform||!ye&&!Te||e.set(r,{x:"+=0",overwrite:!1}),ye?(Re.y=r._gsTransform.y,Re.x=r._gsTransform.x):Te?Re.x=Re.rotation=r._gsTransform.rotation:l?(Re.y=l.top(),Re.x=l.left()):(Re.y=parseInt(r.style.top,10)||0,Re.x=parseInt(r.style.left,10)||0),!ie&&!re||i||(ie&&(s=ie(Re.x),s!==Re.x&&(Re.x=s,Te&&(Re.rotation=s))),re&&(s=re(Re.y),s!==Re.y&&(Re.y=s))),(n!==Re.x||a!==Re.y)&&Ve(!0),t||ae(Re,"throwupdate","onThrowUpdate")},He=function(){var t,e,i,s;T=!1,l?(l.calibrate(),Re.minX=D=-l.maxScrollLeft(),Re.minY=z=-l.maxScrollTop(),Re.maxX=R=Re.maxY=F=0,T=!0):a.bounds&&(t=oe(a.bounds,r.parentNode),Te?(Re.minX=D=t.left,Re.maxX=R=t.left+t.width,Re.minY=z=Re.maxY=F=0):void 0!==a.bounds.maxX||void 0!==a.bounds.maxY?(t=a.bounds,Re.minX=D=t.minX,Re.minY=z=t.minY,Re.maxX=R=t.maxX,Re.maxY=F=t.maxY):(e=oe(r,r.parentNode),Re.minX=D=ne(r,xe)+t.left-e.left,Re.minY=z=ne(r,we)+t.top-e.top,Re.maxX=R=D+(t.width-e.width),Re.maxY=F=z+(t.height-e.height)),D>R&&(Re.minX=R,Re.maxX=R=D,D=Re.minX),z>F&&(Re.minY=F,Re.maxY=F=z,z=Re.minY),Te&&(Re.minRotation=D,Re.maxRotation=R),T=!0),a.liveSnap&&(i=a.liveSnap===!0?a.snap||{}:a.liveSnap,s=i instanceof Array||"function"==typeof i,Te?(ie=ei(s?i:i.rotation,D,R,1),re=null):(be&&(ie=ei(s?i:i.x||i.left||i.scrollLeft,D,R,l?-1:1)),ke&&(re=ei(s?i:i.y||i.top||i.scrollTop,z,F,l?-1:1))))},Qe=function(){Re.isThrowing=!1,ae(Re,"throwcomplete","onThrowComplete")},Ze=function(){Re.isThrowing=!1},$e=function(t,e){var i,s,o,h;t&&n?(t===!0&&(i=a.snap||{},s=i instanceof Array||"function"==typeof i,t={resistance:(a.throwResistance||a.resistance||1e3)/(Te?10:1)},Te?t.rotation=Ie(Re,s?i:i.rotation,R,D,1,e):(be&&(t[xe]=Ie(Re,s?i:i.x||i.left||i.scrollLeft,R,D,l?-1:1,e||"x"===Re.lockedAxis)),ke&&(t[we]=Ie(Re,s?i:i.y||i.top||i.scrollTop,F,z,l?-1:1,e||"y"===Re.lockedAxis)))),Re.isThrowing=!0,h=isNaN(a.overshootTolerance)?1===a.edgeResistance?0:1-Re.edgeResistance+.2:a.overshootTolerance,Re.tween=o=n.to(l||r,{throwProps:t,ease:a.ease||d.Power3.easeOut,onComplete:Qe,onOverwrite:Ze,onUpdate:a.fastMode?ae:qe,onUpdateParams:a.fastMode?[Re,"onthrowupdate","onThrowUpdate"]:x},isNaN(a.maxDuration)?2:a.maxDuration,isNaN(a.minDuration)?0===h?0:.5:a.minDuration,h),a.fastMode||(l&&(l._suspendTransforms=!0),o.render(o.duration(),!0,!0),qe(!0,!0),Re.endX=Re.x,Re.endY=Re.y,Te&&(Re.endRotation=Re.x),o.play(0),qe(!0,!0),l&&(l._suspendTransforms=!1))):T&&Re.applyBounds()},Ke=function(){he=Pe(r.parentNode,!0),he[1]||he[2]||1!=he[0]||1!=he[3]||0!=he[4]||0!=he[5]||(he=null)},Je=function(){var t=1-Re.edgeResistance;Ke(),l?(He(),y=l.top(),m=l.left()):(ti()?(qe(!0,!0),He()):Re.applyBounds(),Te?(K=Se(r,{x:0,y:0}),qe(!0,!0),m=Re.x,y=Re.y=Math.atan2(K.y-u,h-K.x)*b):(ce=r.parentNode?r.parentNode.scrollTop||0:0,fe=r.parentNode?r.parentNode.scrollLeft||0:0,y=ne(r,we),m=ne(r,xe))),T&&t&&(m>R?m=R+(m-R)/t:D>m&&(m=D-(D-m)/t),Te||(y>F?y=F+(y-F)/t:z>y&&(y=z-(z-y)/t)))},ti=function(){return Re.tween&&Re.tween.isActive()},ei=function(t,e,i,r){return"function"==typeof t?function(s){var n=Re.isPressed?1-Re.edgeResistance:1;return t.call(Re,s>i?i+(s-i)*n:e>s?e+(s-e)*n:s)*r}:t instanceof Array?function(r){for(var s,n,a=t.length,o=0,l=P;--a>-1;)s=t[a],n=s-r,0>n&&(n=-n),l>n&&s>=e&&i>=s&&(o=a,l=n);return t[o]}:isNaN(t)?function(t){return t}:function(){return t*r}},ii=function(t){var i,s;if(o&&!Re.isPressed&&t&&!("mousedown"===t.type&&30>S()-_e&&De[Re.pointerEvent.type])){if(ue=ti(),Re.pointerEvent=t,De[t.type]?(le=-1!==t.type.indexOf("touch")?t.currentTarget||t.target:g,Me(le,"touchend",ni),Me(le,"touchmove",ri),Me(le,"touchcancel",ni),Me(g,"touchstart",Ee)):(le=null,Me(g,"mousemove",ri)),me=null,Me(g,"mouseup",ni),t&&t.target&&Me(t.target,"mouseup",ni),se=Ue.call(Re,t.target)&&!a.dragClickables)return Me(t.target,"change",ni),ae(Re,"press","onPress"),Xe(Oe,!0),void 0;if(de=!le||be===ke||l||Re.vars.allowNativeTouchScrolling===!1?!1:be?"y":"x",k?t=Z(t,!0):de||Re.allowEventDefault||(t.preventDefault(),t.preventManipulation&&t.preventManipulation()),t.changedTouches?(t=U=t.changedTouches[0],H=t.identifier):t.pointerId?H=t.pointerId:U=H=null,M++,X(Ve),u=Re.pointerY=t.pageY,h=Re.pointerX=t.pageX,(de||Re.autoScroll)&&Q(r.parentNode),!Re.autoScroll||Te||l||!r.parentNode||r.getBBox||!r.parentNode._gsMaxScrollX||C.parentNode||(C.style.width=r.parentNode.scrollWidth+"px",r.parentNode.appendChild(C)),Je(),he&&(i=h*he[0]+u*he[2]+he[4],u=h*he[1]+u*he[3]+he[5],h=i),Re.tween&&Re.tween.kill(),Re.isThrowing=!1,e.killTweensOf(l||r,!0,Fe),l&&e.killTweensOf(r,!0,{scrollTo:1}),Re.tween=Re.lockedAxis=null,(a.zIndexBoost||!Te&&!l&&a.zIndexBoost!==!1)&&(r.style.zIndex=We.zIndex++),Re.isPressed=!0,w=!(!a.onDrag&&!Re._listeners.drag),!Te)for(s=Oe.length;--s>-1;)J(Oe[s],"cursor",a.cursor||"move");ae(Re,"press","onPress")}},ri=function(t){var e,i,r,n,a=t;if(o&&!s&&Re.isPressed&&t){if(Re.pointerEvent=t,e=t.changedTouches){if(t=e[0],t!==U&&t.identifier!==H){for(n=e.length;--n>-1&&(t=e[n]).identifier!==H;);if(0>n)return}}else if(t.pointerId&&H&&t.pointerId!==H)return;if(k)t=Z(t,!0);else{if(le&&de&&!me&&(i=t.pageX,r=t.pageY,he&&(n=i*he[0]+r*he[2]+he[4],r=i*he[1]+r*he[3]+he[5],i=n),me=Math.abs(i-h)>Math.abs(r-u)&&be?"x":"y",Re.vars.lockAxisOnTouchScroll!==!1&&(Re.lockedAxis="x"===me?"y":"x","function"==typeof Re.vars.onLockAxis&&Re.vars.onLockAxis.call(Re,a)),L&&de===me))return ni(a),void 0;Re.allowEventDefault||de&&(!me||de===me)||a.cancelable===!1||(a.preventDefault(),a.preventManipulation&&a.preventManipulation())}Re.autoScroll&&(je=!0),si(t.pageX,t.pageY)}},si=function(t,e){var i,r,s,n,a,o,l=1-Re.dragResistance,_=1-Re.edgeResistance;Re.pointerX=t,Re.pointerY=e,Te?(n=Math.atan2(K.y-e,t-K.x)*b,a=Re.y-n,Re.y=n,a>180?y-=360:-180>a&&(y+=360),s=m+(y-n)*l):(he&&(o=t*he[0]+e*he[2]+he[4],e=t*he[1]+e*he[3]+he[5],t=o),r=e-u,i=t-h,Ce>r&&r>-Ce&&(r=0),Ce>i&&i>-Ce&&(i=0),(Re.lockAxis||Re.lockedAxis)&&(i||r)&&(o=Re.lockedAxis,o||(Re.lockedAxis=o=be&&Math.abs(i)>Math.abs(r)?"y":ke?"x":null,o&&"function"==typeof Re.vars.onLockAxis&&Re.vars.onLockAxis.call(Re,Re.pointerEvent)),"y"===o?r=0:"x"===o&&(i=0)),s=m+i*l,n=y+r*l),ie||re?(ie&&(s=ie(s)),re&&(n=re(n))):T&&(s>R?s=R+(s-R)*_:D>s&&(s=D+(s-D)*_),Te||(n>F?n=F+(n-F)*_:z>n&&(n=z+(n-z)*_))),Te||(s=Math.round(s),n=Math.round(n)),(Re.x!==s||Re.y!==n&&!Te)&&(Te?Re.endRotation=Re.x=Re.endX=s:(ke&&(Re.y=Re.endY=n),be&&(Re.x=Re.endX=s)),te=!0,Re.isDragging||(Re.isDragging=!0,ae(Re,"dragstart","onDragStart")))},ni=function(t,e){if(o&&Re.isPressed&&(!t||null==H||e||!(t.pointerId&&t.pointerId!==H||t.changedTouches&&!Ne(t.changedTouches,H)))){Re.isPressed=!1;var i,s,n,l,h=t,u=Re.isDragging;if(le?(Le(le,"touchend",ni),Le(le,"touchmove",ri),Le(le,"touchcancel",ni),Le(g,"touchstart",Ee)):Le(g,"mousemove",ri),Le(g,"mouseup",ni),t&&t.target&&Le(t.target,"mouseup",ni),te=!1,C.parentNode&&C.parentNode.removeChild(C),se)return t&&Le(t.target,"change",ni),Xe(Oe,!1),ae(Re,"release","onRelease"),ae(Re,"click","onClick"),se=!1,void 0;if(B(Ve),!Te)for(s=Oe.length;--s>-1;)J(Oe[s],"cursor",a.cursor||"move");if(u&&(Be=N=S(),Re.isDragging=!1),M--,t){if(k&&(t=Z(t,!1)),i=t.changedTouches,i&&(t=i[0],t!==U&&t.identifier!==H)){for(s=i.length;--s>-1&&(t=i[s]).identifier!==H;);if(0>s)return}Re.pointerEvent=h,Re.pointerX=t.pageX,Re.pointerY=t.pageY}return h&&!u?(ue&&(a.snap||a.bounds)&&$e(a.throwProps),ae(Re,"release","onRelease"),L&&"touchmove"===h.type||(ae(Re,"click","onClick"),l=h.target||h.srcElement||r,l.click?l.click():g.createEvent&&(n=g.createEvent("MouseEvents"),n.initEvent("click",!0,!0),l.dispatchEvent(n)),_e=S())):($e(a.throwProps),k||Re.allowEventDefault||!h||!a.dragClickables&&Ue.call(Re,h.target)||!u||de&&(!me||de!==me)||h.cancelable===!1||(h.preventDefault(),h.preventManipulation&&h.preventManipulation()),ae(Re,"release","onRelease")),u&&ae(Re,"dragend","onDragEnd"),!0}},ai=function(t){if(t&&Re.isDragging){var e=t.target||t.srcElement||r.parentNode,i=e.scrollLeft-e._gsScrollX,s=e.scrollTop-e._gsScrollY;(i||s)&&(h-=i,u-=s,e._gsScrollX+=i,e._gsScrollY+=s,si(Re.pointerX,Re.pointerY))}},oi=function(t){var e=S(),i=40>e-_e,r=40>e-Be;(Re.isPressed||r||i)&&(t.preventDefault?(t.preventDefault(),(i||r&&Re.vars.suppressClickOnDrag!==!1)&&t.stopImmediatePropagation()):t.returnValue=!1,t.preventManipulation&&t.preventManipulation())};ee=We.get(this.target),ee&&ee.kill(),this.startDrag=function(t){ii(t),Re.isDragging||(Re.isDragging=!0,ae(Re,"dragstart","onDragStart"))},this.drag=ri,this.endDrag=function(t){ni(t,!0)},this.timeSinceDrag=function(){return Re.isDragging?0:(S()-Be)/1e3},this.hitTest=function(t,e){return We.hitTest(Re.target,t,e)},this.getDirection=function(t,e){var i,r,s,a,o,l,h="velocity"===t&&n?t:"object"!=typeof t||Te?"start":"element";return"element"===h&&(o=Ge(Re.target),l=Ge(t)),i="start"===h?Re.x-m:"velocity"===h?n.getVelocity(this.target,xe):o.left+o.width/2-(l.left+l.width/2),Te?0>i?"counter-clockwise":"clockwise":(e=e||2,r="start"===h?Re.y-y:"velocity"===h?n.getVelocity(this.target,we):o.top+o.height/2-(l.top+l.height/2),s=Math.abs(i/r),a=1/e>s?"":0>i?"left":"right",e>s&&(""!==a&&(a+="-"),a+=0>r?"up":"down"),a)},this.applyBounds=function(t){var e,i;return t&&a.bounds!==t?(a.bounds=t,Re.update(!0)):(qe(!0),He(),T&&(e=Re.x,i=Re.y,T&&(e>R?e=R:D>e&&(e=D),i>F?i=F:z>i&&(i=z)),(Re.x!==e||Re.y!==i)&&(Re.x=Re.endX=e,Te?Re.endRotation=e:Re.y=Re.endY=i,te=!0,Ve())),Re)},this.update=function(t,e){var i=Re.x,r=Re.y;return Ke(),t?Re.applyBounds():(te&&e&&Ve(),qe(!0)),Re.isPressed&&(be&&Math.abs(i-Re.x)>.01||ke&&Math.abs(r-Re.y)>.01&&!Te)&&Je(),Re},this.enable=function(t){var s,h,u;if("soft"!==t){for(h=Oe.length;--h>-1;)u=Oe[h],Me(u,"mousedown",ii),Me(u,"touchstart",ii),Me(u,"click",oi,!0),Te||J(u,"cursor",a.cursor||"move"),J(u,"touchCallout","none"),J(u,"touchAction",be===ke||l?"none":be?"pan-y":"pan-x");Xe(Oe,!1)}return V(Re.target,ai),o=!0,n&&"soft"!==t&&n.track(l||r,ye?"x,y":Te?"rotation":"top,left"),l&&l.enable(),r._gsDragID=s="d"+A++,O[s]=this,l&&(l.element._gsDragID=s),e.set(r,{x:"+=0",overwrite:!1}),pe={t:r,data:k?j:r._gsTransform,tween:{},setRatio:k?function(){e.set(r,Y)}:i._internals.setTransformRatio||i._internals.set3DTransformRatio},Re.update(!0),Re},this.disable=function(t){var e,i,s=Re.isDragging;if(!Te)for(e=Oe.length;--e>-1;)J(Oe[e],"cursor",null);if("soft"!==t){for(e=Oe.length;--e>-1;)i=Oe[e],J(i,"touchCallout",null),J(i,"touchAction",null),Le(i,"mousedown",ii),Le(i,"touchstart",ii),Le(i,"click",oi);Xe(Oe,!0),le&&(Le(le,"touchcancel",ni),Le(le,"touchend",ni),Le(le,"touchmove",ri)),Le(g,"mouseup",ni),Le(g,"mousemove",ri)}return G(r,ai),o=!1,n&&"soft"!==t&&n.untrack(l||r,ye?"x,y":Te?"rotation":"top,left"),l&&l.disable(),B(Ve),Re.isDragging=Re.isPressed=se=!1,s&&ae(Re,"dragend","onDragEnd"),Re},this.enabled=function(t,e){return arguments.length?t?Re.enable(e):Re.disable(e):o},this.kill=function(){return Re.isThrowing=!1,e.killTweensOf(l||r,!0,Fe),Re.disable(),delete O[r._gsDragID],Re},-1!==ve.indexOf("scroll")&&(l=this.scrollProxy=new Ye(r,W({onKill:function(){Re.isPressed&&ni(null)}},a)),r.style.overflowY=ke&&!Ae?"auto":"hidden",r.style.overflowX=be&&!Ae?"auto":"hidden",r=l.content),a.force3D!==!1&&e.set(r,{force3D:!0}),Te?Fe.rotation=1:(be&&(Fe[xe]=1),ke&&(Fe[we]=1)),Te?(Y=p,j=Y.css,Y.overwrite=!1):ye&&(Y=be&&ke?_:be?c:f,j=Y.css,Y.overwrite=!1),this.enable()},je=We.prototype=new t;je.constructor=We,je.pointerX=je.pointerY=0,je.isDragging=je.isPressed=!1,We.version="0.14.1",We.zIndex=1e3,Me(g,"touchcancel",function(){}),Me(g,"contextmenu",function(){var t;for(t in O)O[t].isPressed&&O[t].endDrag()}),We.create=function(t,i){"string"==typeof t&&(t=e.selector(t));for(var r=t&&0!==t.length?Re(t)?Oe(t):[t]:[],s=r.length;--s>-1;)r[s]=new We(r[s],i);return r},We.get=function(t){return O[($(t)||{})._gsDragID]},We.timeSinceDrag=function(){return(S()-N)/1e3};var Ue={},Ve=function(t){var e=0,i=0,r=t.offsetWidth,s=t.offsetHeight;for(t=$(t);t;)e+=t.offsetTop,i+=t.offsetLeft,t=t.offsetParent;return{top:e,left:i,width:r,height:s}},Ge=function(t,e){if(t===window)return Ue.left=Ue.top=0,Ue.width=Ue.right=v.clientWidth||t.innerWidth||g.body.clientWidth||0,Ue.height=Ue.bottom=(t.innerHeight||0)-20<v.clientHeight?v.clientHeight:t.innerHeight||g.body.clientHeight||0,Ue;var i=t.pageX!==e?{left:t.pageX-U(),top:t.pageY-j(),right:t.pageX-U()+1,bottom:t.pageY-j()+1}:t.nodeType||t.left===e||t.top===e?k?Ve(t):$(t).getBoundingClientRect():t;
return i.right===e&&i.width!==e?(i.right=i.left+i.width,i.bottom=i.top+i.height):i.width===e&&(i={width:i.right-i.left,height:i.bottom-i.top,right:i.right,left:i.left,bottom:i.bottom,top:i.top}),i};return We.hitTest=function(t,e,i){if(t===e)return!1;var r,s,n,a=Ge(t),o=Ge(e),l=o.left>a.right||o.right<a.left||o.top>a.bottom||o.bottom<a.top;return l||!i?!l:(n=-1!==(i+"").indexOf("%"),i=parseFloat(i)||0,r={left:Math.max(a.left,o.left),top:Math.max(a.top,o.top)},r.width=Math.min(a.right,o.right)-r.left,r.height=Math.min(a.bottom,o.bottom)-r.top,0>r.width||0>r.height?!1:n?(i*=.01,s=r.width*r.height,s>=a.width*a.height*i||s>=o.width*o.height*i):r.width>i&&r.height>i)},C.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",We},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),require("../plugins/CSSPlugin.js"),module.exports=e())}("Draggable");