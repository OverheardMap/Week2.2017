!function(e,t){"function"==typeof define&&define.amd?define(["exports"],t):t("undefined"!=typeof exports?exports:e.dragscroll={})}(this,function(e){var t,o,n=window,r=document,i="mousemove",s="mouseup",c="mousedown",l="EventListener",u="add"+l,f="remove"+l,a=[],d=function(e,l){for(e=0;e<a.length;)l=a[e++],l=l.container||l,l[f](c,l.md,0),n[f](s,l.mu,0),n[f](i,l.mm,0);for(a=[].slice.call(r.getElementsByClassName("dragscroll")),e=0;e<a.length;)!function(e,l,f,a,d,m){(m=e.container||e)[u](c,m.md=function(t){e.hasAttribute("nochilddrag")&&r.elementFromPoint(t.pageX,t.pageY)!=m||(a=1,l=t.clientX,f=t.clientY,t.preventDefault())},0),n[u](s,m.mu=function(){a=0},0),n[u](i,m.mm=function(n){a&&((d=e.scroller||e).scrollLeft-=t=-l+(l=n.clientX),d.scrollTop-=o=-f+(f=n.clientY),e==r.body&&((d=r.documentElement).scrollLeft-=t,d.scrollTop-=o))},0)}(a[e++])};"complete"==r.readyState?d():n[u]("load",d,0),e.reset=d}),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";function t(t){return!t.nodeName||-1!==e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])}function o(t){return e.isFunction(t)||e.isPlainObject(t)?t:{top:t,left:t}}var n=e.scrollTo=function(t,o,n){return e(window).scrollTo(t,o,n)};return n.defaults={axis:"xy",duration:0,limit:!0},e.fn.scrollTo=function(r,i,s){"object"==typeof i&&(s=i,i=0),"function"==typeof s&&(s={onAfter:s}),"max"===r&&(r=9e9),s=e.extend({},n.defaults,s),i=i||s.duration;var c=s.queue&&s.axis.length>1;return c&&(i/=2),s.offset=o(s.offset),s.over=o(s.over),this.each(function(){function l(t){var o=e.extend({},s,{queue:!0,duration:i,complete:t&&function(){t.call(a,m,s)}});d.animate(p,o)}if(null!==r){var u,f=t(this),a=f?this.contentWindow||window:this,d=e(a),m=r,p={};switch(typeof m){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)){m=o(m);break}m=f?e(m):e(m,a);case"object":if(0===m.length)return;(m.is||m.style)&&(u=(m=e(m)).offset())}var h=e.isFunction(s.offset)&&s.offset(a,m)||s.offset;e.each(s.axis.split(""),function(e,t){var o="x"===t?"Left":"Top",r=o.toLowerCase(),i="scroll"+o,w=d[i](),g=n.max(a,t);if(u)p[i]=u[r]+(f?0:w-d.offset()[r]),s.margin&&(p[i]-=parseInt(m.css("margin"+o),10)||0,p[i]-=parseInt(m.css("border"+o+"Width"),10)||0),p[i]+=h[r]||0,s.over[r]&&(p[i]+=m["x"===t?"width":"height"]()*s.over[r]);else{var y=m[r];p[i]=y.slice&&"%"===y.slice(-1)?parseFloat(y)/100*g:y}s.limit&&/^\d+$/.test(p[i])&&(p[i]=p[i]<=0?0:Math.min(p[i],g)),!e&&s.axis.length>1&&(w===p[i]?p={}:c&&(l(s.onAfterFirst),p={}))}),l(s.onAfter)}})},n.max=function(o,n){var r="x"===n?"Width":"Height",i="scroll"+r;if(!t(o))return o[i]-e(o)[r.toLowerCase()]();var s="client"+r,c=o.ownerDocument||o.document,l=c.documentElement,u=c.body;return Math.max(l[i],u[i])-Math.min(l[s],u[s])},e.Tween.propHooks.scrollLeft=e.Tween.propHooks.scrollTop={get:function(t){return e(t.elem)[t.prop]()},set:function(t){var o=this.get(t);if(t.options.interrupt&&t._last&&t._last!==o)return e(t.elem).stop();var n=Math.round(t.now);o!==n&&(e(t.elem)[t.prop](n),t._last=this.get(t))}},n}),$(document).ready(function(){$(window).width(),$(window).height();$("body").scrollTo("50%",800),$(".centerViewport").click(function(e){console.log("click"),$("body").scrollTo("50%",800)})});
//# sourceMappingURL=main.js.map