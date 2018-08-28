

//IR A SECCIONES PRICIPALES 


// $(".mainNav li").on("click" , iraSeccion ) ;

var $altoLogo = $(".logo").height()+10;

// var origen = 0 

// function iraSeccion() {
	
// 	var $liPulsado = $(this) ;
// 	var numLiPulsado = $liPulsado.index();
	
	
// 	var $seccionDestino = $("main section").eq(numLiPulsado);
// 	var $seccionOrigen = $("main section").eq(origen);
	
// 	var scrollTopDestino = $seccionDestino.offset().top - $altoLogo ;
// 	var scrollTopOrigen = $seccionOrigen.offset().top - $altoLogo;

// 	var resta = scrollTopDestino - scrollTopOrigen;

// PARA VARIAR LA VELOCIDAD DE RECORRIDO DEPENDIENDO DE DONDE SE ENCUENTRE EL SCROLL

	// if(resta < 0){
	// 	resta = resta * -1
	// }

	// origen = numLiPulsado;
	
	// var velocidad = 2000;

	// if (resta < 500){
	// 	velocidad = 1000
	// }

    // $("body,html").animate({ scrollTop: scrollTopDestino } , 1000) ;
	
//AL HACER CLICK EN ALGUNA DE LAS SECCIONES EN EL MENU, TODA LA ESCTRUCTURA DEL MENU SE OCULTA
// 	$('#mobileBtn-chk').prop('checked', false); 

// }


//AL HACER CLICK EN EL LOGO SE COLOCA EN SCROLL 0

$(".logo").on("click" , irArriba ) ;
$(".logoMedium").on("click", irArriba);
function irArriba() {
	
	$("body,html").animate({ scrollTop: 0 } , 2000) ; //el 2000 se sustituye por velocidad
	
}


//ANIMACIONES DE LAS IMAGENES DEL CONTENIDO
// AL LLEGAR AL INICIO DE CADA UNA DE SUS SECCIONES CARGA LA IMAGEN CON UNA ANIMACION

$(".passWrapp").hide();
$(".metroWrapp").hide();
$(".tableWrapp").hide();


$(window).scroll(function() {

var $alturaActual = $(this).scrollTop();

var $alturaSeccion = $(".touristCard").offset().top;


var $alturaMuestrate = $alturaSeccion - $altoLogo;

if($alturaActual > $alturaMuestrate){
	$(".passWrapp").show(700);
	
}
	
});  


$(window).scroll(function() {

	var $alturaActual = $(this).scrollTop();
	
	
	var $alturaSeccion = $(".appCard").offset().top;
	
	
	var $alturaMuestrate = $alturaSeccion - $altoLogo;
	
	if($alturaActual > $alturaMuestrate){
		
		$(".metroWrapp").slideDown(700);
		
	
	}
		
	}); 


	$(window).scroll(function() {

		var $alturaActual = $(this).scrollTop();
		
		
		var $alturaSeccion = $(".appTable").offset().top;
		
		var $alturaMuestrate = $alturaSeccion - $altoLogo;
		
		if($alturaActual > $alturaMuestrate){
		
			$(".tableWrapp").show(800);
		
		}
			
		}); 
	
 





