// good luck !
var colors = $('.color');
// Ici on a récupérer les couleurs et elles sont dans un tableau 
var len = colors.length;
// Ici on donne une variable à la longueur du tableau pour des raisons de performances

function addColor(){
	
	for(var i=0;i<len;i++){
		var bColor = $(colors[i]).data('color');
		$(colors[i]).css('backgroundColor',bColor);
		
	}
// On crée une boucle pour parcourir le tableau

};
$('.color').click(function(){
	var bodyColor = $(this).data('color');

	var t = checked();
	if(t){
		$('.main').css('color',bodyColor);
	}else{
		$('body').css('backgroundColor',bodyColor);
		
	};
// On crée notre condition qui modifie ou la couleur du body ou la couleur du texte selon si notre fonction est vérifiée

});

function checked(){

	return $('#modify-texte').is(':checked');

}
// On crée une fonction qui return true ou false selon si la case est cochée





addColor();








