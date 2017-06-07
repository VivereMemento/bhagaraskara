const headerAnimation = (function() {

	const init = function() {
        _setUpListners();
    };

    const _setUpListners = function() {
        window.addEventListener('load', _initialSet);
        window.addEventListener('scroll', scrollDebounce.init(_animatedLogo));
    };

    const tl = new TimelineMax(),
          section = document.querySelector('.feature'),
          featureSvg = document.querySelectorAll('.feature__svg'),
          featureSvgElements = document.querySelectorAll('.feature__svg-elem');
          

    function _initialSet() {
        TweenMax.set(featureSvg, {visibility: "hidden", opacity: 0, y: -100, rotation: 0});
        TweenMax.set(featureSvgElements, {visibility: "hidden", opacity: 0, y: -100});
    }

    function _animatedLogo () {

        const slideInAt = (window.scrollY + window.innerHeight) - section.clientHeight / 4;
        // bottom of the section
        const bottomSection = section.offsetTop + section.clientHeight;
        const isHalfShown = slideInAt > section.offsetTop;
        const isNotScrolledPast = window.scrollY < bottomSection;

        if (isHalfShown && isNotScrolledPast) {
            tl.staggerTo(featureSvg, 1, {visibility: "visible", opacity: 1, y: 0, ease:Bounce.easeOut}, 0.3)
                .staggerTo(featureSvgElements, 1, {visibility: "visible", opacity: 1, y: 0, ease:Elastic.easeOut}, 0.3, '-=1.41');
        }

    };
	
	return {
		init: init
	}

})();
headerAnimation.init();