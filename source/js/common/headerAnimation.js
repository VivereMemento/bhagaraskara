const headerAnimation = (function() {

	const init = function() {
        _setUpListners();
    };

    const _setUpListners = function() {
        window.addEventListener('load', _onLoad);
    };

    const tl = new TimelineMax(),
          navItems = document.querySelectorAll('.header__nav-link'),
          svgElements = document.querySelectorAll('.header__svg-elem'),
          trig = document.querySelector('.header__link-down'),
          heading = document.querySelector('.heading__text'),
          subHeading = document.querySelector('.subheading__text'),
          logo = document.querySelector('.header__logo');

    function _onLoad() {
        TweenMax.set(logo, {x:"-1000px"});
        TweenMax.set([heading, subHeading], {opacity: 0, y:"-30px"});
        TweenMax.set(navItems, {opacity: 0});
        TweenMax.set(trig, {opacity: 0, y: "100px"});
        tl.to(logo, 3, {x: 0, ease:Elastic.easeOut})
            .to(heading, 1, {opacity: 1, y: 0, ease:Linear.easeNone}, "-=1")
            .to(subHeading, 1, {opacity: 1, y: 0, ease:Linear.easeNone, onComplete: _animatedLogo});
    }

    function _animatedLogo () {
        const items = document.querySelectorAll('.header__svg');
        items.forEach(item => {
            item.classList.add('action');
        });
        tl.to(navItems, 0.5, {opacity: 1})
        .staggerFromTo(svgElements, 2, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, ease:Elastic.easeOut}, 0.5)
        .to(trig, 0.5, {opacity: 1, x: 0, y: 0, ease:Bounce.easeOut}, "-=1.5");
    };
	
	return {
		init: init
	}

})();
headerAnimation.init();
