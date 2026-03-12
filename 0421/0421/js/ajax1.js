// JavaScript Document
$(document).ready(function(){
	
	$("nav").load("nav1.html");
	$("footer").load("footer.html");
	getcon('js/list.json');

	var params = new URLSearchParams(window.location.search);
	var id = params.get("id"); //find the value of id
	var aid = parseInt(id);

		switch (aid){
			
			case 0:
			getcon('js/list.json');
			break;
			
			case 1:
			getcon2('js/list.json', 玉);			
			break;
					
		}
		$("section").css({"display":"none"}).fadein(1000)

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
}})}
