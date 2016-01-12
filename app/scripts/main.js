
/*start goto button*/
//it will show the goto button if user scrolled 200px
// jshint devel:true
$(document).ready(function(){

var menu = document.querySelector('.about');
//var origOffsetY = menu.offsetTop;

function scroll () {
  if ($(window).scrollTop() >= 200) {
    $('.goto-top').addClass('sticky');

  } else {
    $('.goto-top').removeClass('sticky');

  }


}

document.onscroll = scroll;

});
/*end goto button*/

$( "#right" ).click(function() {
  $( ".wrapper" ).animate({ "left": "+=100%" }, "fast" );
});
 
$( "#left" ).click(function(){
  $( ".wrapper" ).animate({ "left": "-=100%" }, "fast" );
});

/*scroll navigation*/


  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });




/*end scroll navigation*/








