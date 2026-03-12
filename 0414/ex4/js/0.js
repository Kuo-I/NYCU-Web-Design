// JavaScript Document

$(document).ready(function(){
	
	//first but + content

	$(".box").eq(0).addClass("ch_bg");
	
	$(".content").each(function(index){
		$(".content").eq(index).css({"left":480*index, "top":-480*index});
	});


	//click content

	$(".box").click(function(){
		
		var _index = $(this).index();
		
		$(this).addClass("ch_bg").siblings().removeClass("ch_bg");
		
		$(".content").each(function(index){
			$(".content").eq(index).css({"left":480*index-(480*index-(480*index0)}), "top":-480*index});
		});
	});	
	
});

