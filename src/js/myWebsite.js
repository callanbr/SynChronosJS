// This is a smooth scrolling code from web search

(function($) {
  // "use strict";

  // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  //   if (
  //     location.pathname.replace(/^\//, "") ==
  //       this.pathname.replace(/^\//, "") &&
  //     location.hostname == this.hostname
  //   ) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
  //     if (target.length) {
  //       $("html, body").animate(
  //         {
  //           scrollTop: target.offset().top - 57
  //         },
  //         1000,
  //         "easeInOutExpo"
  //       );
  //       return false;
  //     }
  //   }
  // });

  // $(".js-scroll-trigger").click(function() {
  //   $(".navbar-collapse").collapse("hide");
  // });

  // $("body").scrollspy({
  //   target: "#mainNav",
  //   offset: 57
  // });

  var navbarCollapse = function() {
    if ($("#topnNav").offset() > 100) {
      $("#topNav").addClass("navbar-shrink");
    } else {
      $("#topNav").removeClass("navbar-shrink");
    }
  };

  navbarCollapse();

  $(window).scroll(navbarCollapse);
})(jQuery);




function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("groups").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("groups").style.display = "block";
}