$(function () {
  "use strict";

  // Owl Carousel
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 10,
  });

  // collapse show on resume
  $(".collapse-show").collapse();

  // portfolio filterizr

  $(".filtr-container").imagesLoaded(function () {
    var filterizr = $(".filtr-container").filterizr();
  });

  $(".portfolio-filter-menu li").on("click", function () {
    $(".portfolio-filter-menu li").removeClass("active");
    $(this).addClass("active");
  });

  // portfolio magnific popup

  $(".portfolio").each(function () {
    $(this).magnificPopup({
      delegate: ".portfolio-popup",
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });

  // hide navbar on mobile after click

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  //navbar on scroll

  $(window).on("scroll", function () {
    var vScroll = $(this).scrollTop();

    if (vScroll > 100) {
      $(".navbar").addClass("fix");
    } else {
      $(".navbar").removeClass("fix");
    }
  });

  // Smooth scroll

  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 50,
        },
        850
      );
    }
  });
});
