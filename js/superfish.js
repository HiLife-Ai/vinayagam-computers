!function(e){"use strict";var s,o,t,n,i,r,a,h,l,p,f,u,c,d,v,m,y=(o="sf-breadcrumb",t="sf-js-enabled",n="sf-with-ul",i="sf-arrows",r=function(){var s=/iPhone|iPad|iPod/i.test(navigator.userAgent);return s&&e(window).load(function(){e("body").children().on("click",e.noop)}),s}(),a="behavior"in(s=document.documentElement.style)&&"fill"in s&&/iemobile/i.test(navigator.userAgent),h=function(e,s){var o=t;s.cssArrows&&(o+=" "+i),e.toggleClass(o)},l=function(e){e.children("a").toggleClass(n)},p=function(e){var s=e.css("ms-touch-action");s="pan-y"===s?"auto":"pan-y",e.css("ms-touch-action",s)},f=function(s){var o=e(this),t=o.siblings(s.data.popUpSelector);t.length>0&&t.is(":hidden")&&(o.one("click.superfish",!1),"MSPointerDown"===s.type?o.trigger("focus"):e.proxy(u,o.parent("li"))())},u=function(){var s=e(this),o=m(s);clearTimeout(o.sfTimer),s.siblings().superfish("hide").end().superfish("show")},c=function(){var s=e(this),o=m(s);r?e.proxy(d,s,o)():(clearTimeout(o.sfTimer),o.sfTimer=setTimeout(e.proxy(d,s,o),o.delay))},d=function(s){s.retainPath=e.inArray(this[0],s.$path)>-1,this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(v(this)),s.$path.length&&e.proxy(u,s.$path)())},v=function(e){return e.closest("."+t)},m=function(e){return v(e).data("sf-options")},{hide:function(s){if(this.length){var o=m(this);if(!o)return this;var t=!0===o.retainPath?o.$path:"",n=this.find("li."+o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector),i=o.speedOut;s&&(n.show(),i=0),o.retainPath=!1,o.onBeforeHide.call(n),n.stop(!0,!0).animate(o.animationOut,i,function(){var s=e(this);o.onHide.call(s)})}return this},show:function(){var e=m(this);if(!e)return this;var s=this.addClass(e.hoverClass).children(e.popUpSelector);return e.onBeforeShow.call(s),s.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(s)}),this},destroy:function(){return this.each(function(){var s,t=e(this),n=t.data("sf-options");if(!n)return!1;s=t.find(n.popUpSelector).parent("li"),clearTimeout(n.sfTimer),h(t,n),l(s),p(t),t.off(".superfish").off(".hoverIntent"),s.children(n.popUpSelector).attr("style",function(e,s){return s.replace(/display[^;]+;?/g,"")}),n.$path.removeClass(n.hoverClass+" "+o).addClass(n.pathClass),t.find("."+n.hoverClass).removeClass(n.hoverClass),n.onDestroy.call(t),t.removeData("sf-options")})},init:function(s){return this.each(function(){var t=e(this);if(t.data("sf-options"))return!1;var n=e.extend({},e.fn.superfish.defaults,s),i=t.find(n.popUpSelector).parent("li");n.$path=function(s,t){return s.find("li."+t.pathClass).slice(0,t.pathLevels).addClass(t.hoverClass+" "+o).filter(function(){return e(this).children(t.popUpSelector).hide().show().length}).removeClass(t.pathClass)}(t,n),t.data("sf-options",n),h(t,n),l(i),p(t),function(s,o){var t="li:has("+o.popUpSelector+")";e.fn.hoverIntent&&!o.disableHI?s.hoverIntent(u,c,t):s.on("mouseenter.superfish",t,u).on("mouseleave.superfish",t,c);var n="MSPointerDown.superfish";r||(n+=" touchend.superfish"),a&&(n+=" mousedown.superfish"),s.on("focusin.superfish","li",u).on("focusout.superfish","li",c).on(n,"a",o,f)}(t,n),i.not("."+o).superfish("hide",!0),n.onInit.call(this)})}});e.fn.superfish=function(s,o){return y[s]?y[s].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof s&&s?e.error("Method "+s+" does not exist on jQuery.fn.superfish"):y.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop},e.fn.extend({hideSuperfishUl:y.hide,showSuperfishUl:y.show})}(jQuery);