
$(".mainNav li").on("click" , iraSeccion ) ;

// var altoHeader = $(".pageHeader").height();
var altoLogo = $(".logo").height();


function iraSeccion() {
	
	var $liPulsado = $(this) ;
	
	var numLiPulsado = $liPulsado.index() ;
	
	var $seccionDestino = $("main section").eq(numLiPulsado) ;
	
	var scrollTopDestino = $seccionDestino.offset().top - altoLogo ;
		
    $("body,html").animate({ scrollTop: scrollTopDestino } , 2000) ;
    $('#mobileBtn-chk').prop('checked', false); 

}


$(".logo").on("click" , irArriba ) ;

function irArriba() {
	
	$("body,html").animate({ scrollTop: 0 } , 2000) ;
	
}








