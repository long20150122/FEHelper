baidu.namespace.register("baidu.grid");baidu.grid=(function(){var b=function(){var d=jQuery("#fe-helper-box");if(d[0]){d.remove()}var f=chrome.extension.getURL("static/img/grid.png");var g=jQuery(window);var e=jQuery("body");jQuery('<div id="fe-helper-box"></div>').appendTo("body").css({position:"static"});jQuery('<div id="fe-helper-grid"></div>').appendTo("#fe-helper-box").css({background:"url("+f+") repeat",width:e.width(),height:Math.max(g.height(),e.height())}).mousemove(function(k){var l={};try{l=document.getElementsByTagName("body")[0].getBoundingClientRect()}catch(i){l={left:0,top:0}}jQuery("#fe-helper-g-pos").show().css({width:k.pageX-l.left,height:k.pageY});var j=Math.min(k.pageY,jQuery(window).height()+jQuery("body").scrollTop()-40);var h=Math.min(k.pageX,jQuery(window).width()+jQuery("body").scrollLeft()-200)+5-l.left;jQuery("#fe-helper-gp-info").show().css({top:j,left:h}).html("top = "+k.pageY+" px ,left = "+k.pageX+" px")}).mouseout(function(h){jQuery("#fe-helper-g-pos,#fe-helper-gp-info").hide()});jQuery("body").keydown(function(h){if(jQuery("#fe-helper-box")[0]){if(h.which==27){jQuery("#fe-helper-box").remove()}}});jQuery(window).resize(function(){if(jQuery("#fe-helper-box")[0]){jQuery("#fe-helper-grid").css({width:Math.max(g.width(),e.width()),height:Math.max(g.height(),e.height())})}});jQuery('<div id="fe-helper-g-pos"></div><div id="fe-helper-gp-info"></div>').appendTo("#fe-helper-box");jQuery('<span id="fe-helper-btn-close-grid">关闭栅格层</span>').appendTo("#fe-helper-box").click(function(){jQuery("#fe-helper-box").remove()});a()};var a=function(){if(!jQuery("#fe-helper-box")[0]){jQuery('<div id="fe-helper-box"></div>').appendTo("body")}jQuery('<div id="fe-helper-ruler-top"></div><div id="fe-helper-ruler-left"></div>').appendTo("#fe-helper-box");var j=0,k=20,g=20;var l=jQuery(window);var h=jQuery("body");var d=Math.max(l.width(),h.width());var e=Math.max(l.height(),h.height());for(var f=30;f<=d;f+=10){j=(f%50)?10:0;jQuery('<div class="h-line"></div>').appendTo("#fe-helper-ruler-top").css({left:f-1,top:j+5,height:k-j-5});if(j==0){jQuery('<div class="h-text">'+f+"</div>").appendTo("#fe-helper-ruler-top").css({left:f+2})}}for(var f=0;f<=e;f+=10){_l=(f%50)?10:0;jQuery('<div class="v-line"></div>').appendTo("#fe-helper-ruler-left").css({left:_l+5,top:f-1,width:g-_l-5});if(_l==0){jQuery('<div class="v-text">'+f+"</div>").appendTo("#fe-helper-ruler-left").css({top:f+2})}}jQuery(window).scroll(function(i){if(jQuery("#fe-helper-box")[0]){jQuery("#fe-helper-ruler-top").css("left",0-jQuery("body").scrollLeft());jQuery("#fe-helper-ruler-left").css("top",0-jQuery("body").scrollTop())}})};var c=function(d){b();if(d&&typeof d=="function"){d.call(null)}};return{detect:c}})();