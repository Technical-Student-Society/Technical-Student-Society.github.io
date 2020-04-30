$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});

//slider
$(document).ready(function(){
  $('.carousel').carousel();
});
$('.carousel.carousel-slider').carousel({
  fullWidth: true
});
         