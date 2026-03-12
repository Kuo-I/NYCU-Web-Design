// JavaScript Document
$(document).ready(function(){
	
	$(".menu").click(function(){ 
	
		$("nav").slideToggle();
		
	});

	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});

	//group
	$(".fancybox").fancybox({
		openEffect	: 'none', //'elastic', 'fade' or 'none'
		closeEffect	: 'none'
	});

	//single
	$("#s2").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'float' // 'float', 'inside', 'outside' or 'over'
    		}
    	}
    });


});// JavaScript Document