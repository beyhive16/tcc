$('div a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
	distancia_menu_destino = $(id).offset().top;
	$('html, body').animate({
		scrollTop: distancia_menu_destino - 40
	}, 500);
});
