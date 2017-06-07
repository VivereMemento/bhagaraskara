(function() {
  'use strict';

	svg4everybody();

	// MENU TRIGGER

	const menuTrig = document.querySelector('.menu__trigger');
	menuTrig.addEventListener('click', function() {
		let menuList = document.querySelector('.menu__list');
		
		if(menuList.classList.contains('opened')) {
			menuList.classList.remove('opened');
		} else {
			menuList.classList.add('opened');
		}
	});

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

// LESS SPEED OF SCROLL
const scrollDebounce = (function() {
	
    const debounce = function(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
              timeout = null;
              if ( !immediate ) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if ( callNow ) func.apply(context, args);
        };
    };
	
	return {
        init: debounce
	}

})();
