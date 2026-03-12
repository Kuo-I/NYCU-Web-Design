// JavaScript Document
$(document).ready(function(){
	
	$("nav").load("nav.html");
	$("footer").load("footer.html");

	//getcon('js/list.json');
	var pn = $("body").data("pagenum");
		
		switch (pn){
			
			case 0:
			getcon('js/list.json');
			break;
			
			case 1:
			getcon2('js/list.json');			
			break;
					
		}

});

function getcon(filename) {
	
	$.getJSON(filename, function(data){

		
		$("section").empty();
				
		$.each(data, function(index, en){	
		var html = '<div class="box">';
    	html +='<div class="imgbox">';
		html +='<img src="'+en['圖片']+'">';
        html +='</div>';
        html +='<h3>'+en['品名']+'</h3>';
        html +='<p>'+en['朝代']+'</p>';
        html +='<p>'+en['作者']+'</p>';
        html +='<p>'+en['尺寸']+'</p>';
    	html +='</div>'

		$("section").append(html);

	});
function getcon2(filename) {
	
	$.getJSON(filename, function(data){
	
			
		$("section").empty();
					
		$.each(data, function(index, en){	
		var html = '<div class="box">';
		html +='<div class="imgbox">';
		html +='<img src="'+en['圖片']+'">';
		html +='</div>';
		html +='<h3>'+en['品名']+'</h3>';
		html +='<p>'+en['朝代']+'</p>';
		html +='<p>'+en['作者']+'</p>';
		html +='<p>'+en['尺寸']+'</p>';
		html +='</div>'
	
		if(en['分類'] == "玉"){
			$("section").append(html);
			}

		$("section").append(html);
	
	});


		
});
	
	return false;
}
})
S}
