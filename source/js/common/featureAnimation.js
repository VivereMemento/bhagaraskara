const headerAnimation = (function() {

	const init = function() {
        _setUpListners();
    };

    const _setUpListners = function() {
        window.addEventListener('load', initialSet);
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
        TweenMax.set(featureSvg, {visibility: "hidden", opacity: 0, y: -100, rotation: 0});
        TweenMax.set(featureSvgElements, {visibility: "hidden", opacity: 0, y: -100});
    }

    function animatedLogo () {

        const slideInAt = (window.scrollY + window.innerHeight) - section.clientHeight / 4;
        // bottom of the section
        const bottomSection = section.offsetTop + section.clientHeight;
        const isHalfShown = slideInAt > section.offsetTop;
        const isNotScrolledPast = window.scrollY < bottomSection;

        if (isHalfShown && isNotScrolledPast) {
            tl.staggerTo(featureSvg, 1, {visibility: "visible", opacity: 1, y: 0, ease:Bounce.easeOut}, 0.3)
                .staggerTo(featureSvgElements, 1, {visibility: "visible", opacity: 1, y: 0, ease:Elastic.easeOut}, 0.3, '-=1.41');
        } else {
            // TweenMax.set(featureSvg, {visibility: "hidden", opacity: 0, y: -100, rotation: 0});
            // TweenMax.set(featureSvgElements, {visibility: "hidden", opacity: 0, y: -100});
        };  

    };
	
	return {
		init: init
	}

})();
headerAnimation.init();