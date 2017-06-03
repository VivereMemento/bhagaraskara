const headerAnimation = (function() {

	const init = function() {
        _setUpListners();
    };

    const _setUpListners = function() {
        window.addEventListener('load', initialSet);
        // window.addEventListener('click', animatedLogo);
        window.addEventListener('scroll', debounce(animatedLogo));
    };

    // less speed of scroll
    function debounce(func, wait = 20, immediate = true) {
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

    const tl = new TimelineMax(),
          section = document.querySelector('.feature'),
          featureSvg = document.querySelectorAll('.feature__svg'),
          featureSvgElements = document.querySelectorAll('.feature__svg-elem');
          

    function initialSet() {
        TweenMax.set(featureSvg, {opacity: 0, y: -100, rotation: 0});
        TweenMax.set(featureSvgElements, {opacity: 0, y: -100});
    }

    function animatedLogo () {

        const slideInAt = (window.scrollY + window.innerHeight) - section.clientHeight / 4;
            // bottom of the image
        const bottomSection = section.offsetTop + section.clientHeight;
        const isHalfShown = slideInAt > section.offsetTop;
        const isNotScrolledPast = window.scrollY < bottomSection;

        if (isHalfShown && isNotScrolledPast) {
            tl.staggerTo(featureSvg, 1, {opacity: 1, y: 0, ease:Bounce.easeOut}, 0.3)
                .staggerTo(featureSvgElements, 1, {opacity: 1, y: 0, ease:Elastic.easeOut}, 0.3, '-=1.41');
        } else {
            section.classList.remove('action')
        };  

    };
	
	return {
		init: init
	}

})();
headerAnimation.init();