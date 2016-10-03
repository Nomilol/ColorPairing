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
	var truc = $(this).data('color');
	$('body').css('backgroundColor',truc);

});




if $('#modify-texte').click(function(){



});

addColor();









/* # Color Pairing

## 1ere étape 
Les boutons doivent avoir leur fond de la couleur qui se trouvve dans le
data attribute data-color

## 2e étape 
Un click sur le bouton doit mettre cette couleur en fond

## 3e étape
quand la case #modify-texte est cochée, la couleur du texte
 doit etre modifiée */