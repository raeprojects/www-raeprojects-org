// jshint devel:true
$(document).ready(function(){

var menu = document.querySelector('.about');
//var origOffsetY = menu.offsetTop;

function scroll () {
  if ($(window).scrollTop() >= 100) {
    $('.navbar').addClass('sticky');
  //  $('.content').addClass('menu-padding');
  } else {
    $('.navbar').removeClass('sticky');
  //  $('.content').removeClass('menu-padding');
  }


}

document.onscroll = scroll;

});
