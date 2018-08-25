
$(".mainNav li").on("click" , iraSeccion ) ;

// var altoHeader = $(".pageHeader").height();
var altoLogo = $(".logo").height();

var origen = 0

function iraSeccion() {
	
	var $liPulsado = $(this) ;
	var numLiPulsado = $liPulsado.index();
	
	
	var $seccionDestino = $("main section").eq(numLiPulsado);
	var $seccionOrigen = $("main section").eq(origen);
	
	var scrollTopDestino = $seccionDestino.offset().top - altoLogo ;
	var scrollTopOrigen = $seccionOrigen.offset().top - altoLogo;

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

function irArriba() {
	
	$("body,html").animate({ scrollTop: 0 } , 2000) ;
	
}








