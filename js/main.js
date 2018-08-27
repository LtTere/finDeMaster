
$(".mainNav li").on("click" , iraSeccion ) ;

var $altoLogo = $(".logo").height()+10;

var origen = 0

function iraSeccion() {
	
	var $liPulsado = $(this) ;
	var numLiPulsado = $liPulsado.index();
	
	
	var $seccionDestino = $("main section").eq(numLiPulsado);
	var $seccionOrigen = $("main section").eq(origen);
	
	var scrollTopDestino = $seccionDestino.offset().top - $altoLogo ;
	var scrollTopOrigen = $seccionOrigen.offset().top - $altoLogo;

	var resta = scrollTopDestino - scrollTopOrigen;

	if(resta < 0){
		resta = resta * -1
	}

	origen = numLiPulsado;
	
	var velocidad = 2000;

	if (resta < 500){
		velocidad = 1000
	}

    $("body,html").animate({ scrollTop: scrollTopDestino } , velocidad) ;
    $('#mobileBtn-chk').prop('checked', false); 

}


$(".logo").on("click" , irArriba ) ;
$(".logoMedium").on("click", irArriba);
function irArriba() {
	
	$("body,html").animate({ scrollTop: 0 } , 2000) ;
	
}


$(".passWrapp").hide()

$(window).scroll(function() {
var $alturaActual = $(this).scrollTop()
var $alturaSeccion = $(".touristCardWrapper").offset().top
var $alturaMuestrate = $alturaSeccion - $altoLogo

if($alturaActual > $alturaMuestrate){
	$('.passWrapp').show(800)
}
	
});  
	
 





