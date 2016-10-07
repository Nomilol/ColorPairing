
function addColor(){
	var colors = $('.color');
	var len = colors.length;
	
	for(var i=0;i<len;i++){
		var backgroundColor = $(colors[i]).data('color');
		$(colors[i]).css('backgroundColor',backgroundColor);
	}
};

$('.color').click(function(){
	var bodyColor = $(this).data('color');

	if(checked()){
		$('.main').css('color',bodyColor);
	}else{
		$('body').css('backgroundColor',bodyColor);
	};
});

function checked(){

	return $('#modify-texte').is(':checked');

}

addColor();















