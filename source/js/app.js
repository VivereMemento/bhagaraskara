(function() {
  'use strict';

    svg4everybody();

    //  OWL.CAROUSEL

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin:10,
        nav: true,
        responsive:{
            0:{
                items:1
            },

            480:{
                items:3
            },

            1000:{
                items:3
            }
        }
    });

     // ***** GRABDOWN ***** //

    const trig = document.querySelector('.header__link-down');
    trig.addEventListener('click', function() {
        const winHeight = $(window).innerHeight();
        $('html, body').animate({scrollTop: winHeight}, 1500);
    });
 
})();
