(function() {
  'use strict';

    svg4everybody();

    // ***** dropdown ***** //
    const trig = document.querySelector('.header__link-down');
    trig.addEventListener('click', function() {
        const winHeight = $(window).innerHeight();
        $('html, body').animate({scrollTop: winHeight}, 1500);
    });

})();
