// JavaScript Document
var main = function(){
	$('.icon-menu').click(function()
	  {
		  $('nav').animate(
		  {  
			left: "0px"
		
		  }, 200);
		  
		  $('body').animate({
			  left: "285px"
		  }, 200);
	  });
	
	 $('.icon-close').click(function()
	 {
		 $('nav').animate(
		 {
			 left: " -285px"
		 }, 10);
		 
		 $('body').animate({
			 left:"0px"
		 }, 200);
	 });
	
	};