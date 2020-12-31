/*
$(document).ready(function(){
    alert("jquery loaded");
})
var test = document.getElementById("jquery-test");
test.style.color="blue";

var test1 = $("#contact");
test1.css({color:"red"});
 */

 /*Mobile nav */
 $('.hamburger-menu').click(function(){
     var nav=$('.nav-menu');
     var icon=$('.hamburger');

     nav.slideToggle(200);

 });

 /*smooth scroll */

 $(function() {
   if($(window).width()<320){
     $('.nav-menu').slideToggle();
   }
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
  });
  
  // Change the speed to whatever you want
  // Personally i think 1000 is too much
  // Try 800 or below, it seems not too much but it will make a difference