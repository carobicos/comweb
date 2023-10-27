


//elasticidad boton scrolltop
 $(document).ready(function(){
 	 smoothScroll.init({
     selector: '[data-scroll]', 
     //efecto equilibrado desplazamiento
     //desactivar el selector a.nav-link ya que el menu NO tiene clase Bootstrap...
     //selector: 'a.nav-link',

     //velocidad de la elasticidad 
     // 2 seg equivale a 2000)  
     speed:1000, 
     //tipos de aceleracion https://easings.net
     easing: 'easeInQuintQuad',
     //easing: ' easyInCubic',
     //easing: 'easyInOutQuad',
     //easing:'easeInQuart',
     //easing: 'easeInOutCubic', 
     });
});
//oculatar boton scroll top

document.getElementById("flechabtn").style.display = "none";

//Esconder o mostrar el botón ScrollTop
window.onscroll = function() { 
  /*carga la funcion scrollFunction*/
  scrollFunction() 
};

function scrollFunction() {
  /*se usa el operador lógico O */ 
  if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
    /*muestra el boton scrolltop*/
    document.getElementById("flechabtn").style.display = "block";
  } else {
    /*esconde el boton scrolltop*/
    document.getElementById("flechabtn").style.display = "none";
  }
}




