// good luck !
var colors = $('.color');
var len = colors.length;
function addColor(){

	
	for(var i=0;i<len;i++){
		var bColor = $(colors[i]).data('color');
		$(colors[i]).css('backgroundColor',bColor);
		
	}


};
$('.color').click(function(){
	var bodyColor = $(this).data('color');

	var t = checked();
	console.log(t);
	if(t){
		$('.main').css('color',bodyColor);
	}else{
		$('body').css('backgroundColor',bodyColor);
		
	};


});

function checked(){

	return $('#modify-texte').is(':checked');

}






addColor();








