(function($){"use strict";$('a.page-scroll').bind('click',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:($($anchor.attr('href')).offset().top-50)},1250,'easeInOutExpo');event.preventDefault();});$("body").on("input propertychange",".floating-label-form-group",function(e){$(this).toggleClass("floating-label-form-group-with-value",!!$(e.target).val());}).on("focus",".floating-label-form-group",function(){$(this).addClass("floating-label-form-group-with-focus");}).on("blur",".floating-label-form-group",function(){$(this).removeClass("floating-label-form-group-with-focus");});$('.navbar-collapse ul li a').click(function(){$('.navbar-toggle:visible').click();});$(".about-carousel").owlCarousel({items:3,navigation:true,pagination:false,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],});$(".portfolio-carousel").owlCarousel({singleItem:true,navigation:true,pagination:false,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],autoHeight:true,mouseDrag:false,touchDrag:false,transitionStyle:"fadeUp"});$(".testimonials-carousel").owlCarousel({singleItem:true,navigation:true,pagination:true,autoHeight:true,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],transitionStyle:"backSlide"});$(".portfolio-gallery").owlCarousel({items:3,});$("header.video").background({source:{poster:"assets/img/bg-mobile-fallback.jpg",mp4:"assets/mp4/camera.mp4"}});$('body').scrollspy({target:'.navbar-fixed-top',offset:51})
var filterList={init:function(){$('#portfoliolist').mixitup({targetSelector:'.portfolio',filterSelector:'.filter',effects:['fade'],easing:'snap',onMixEnd:filterList.hoverEffect()});},hoverEffect:function(){$('#portfoliolist .portfolio').hover(function(){$(this).find('.caption').stop().animate({bottom:0},200,'easeOutQuad');$(this).find('img').stop().animate({top:-20},300,'easeOutQuad');},function(){$(this).find('.caption').stop().animate({bottom:-75},200,'easeInQuad');$(this).find('img').stop().animate({top:0},300,'easeOutQuad');});}};filterList.init();})(jQuery);var isPhoneDevice="ontouchstart"in document.documentElement;$(document).ready(function(){if(isPhoneDevice){}else{wow=new WOW({offset:50})
wow.init();}});