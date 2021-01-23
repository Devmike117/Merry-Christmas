


var balls = jQuery('.balls img');
var velocidad = jQuery('#velocidad');
var variacion = jQuery('#variacion');
var start = jQuery('#start');

function var1( ){
  balls.css("animation-name", "light1" );
}
function var2() {
  balls.css("animation-name", "light2");
  var velLocal = parseFloat( velocidad[0].value ) / 2
  for ( var i = 0; i < balls.length; i++ ){
    balls[i].style.animationDelay = velLocal + "s";
    velLocal = velLocal + parseFloat( velocidad[0].value / 2 )
  }
}
function var3() {
  balls.css("animation-name", "light3");
  var velLocal = parseFloat(velocidad[0].value) / 4
  for (var i = 0; i < balls.length; i++) {
    balls[i].style.animationDelay = velLocal + "s";
    velLocal = velLocal + parseFloat(velocidad[0].value / 4)
  }
}

start.click( function () {
  balls.css({"animation-duration": velocidad.val( ) + "s" , "animation-name": "light1" })
})

velocidad.change( function(){
  balls.css("animation-duration", velocidad.val() + "s" );
} )

variacion.change( function(){
  if ( this.value == "1" ){
    var1();
  }else if( this.value == "2"){
    var2();
  }else if( this.value == "3"){
    var3();
  }
})

