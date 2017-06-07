const skillsAnimation = (function() {

	const init = function() {
        _setUpListners();
    };

    const _setUpListners = function() {
        window.addEventListener('scroll', scrollDebounce.init(_animatedSkills));
    };

    const section = document.querySelector('.skills');

    function _animatedSkills () {

        const slideInAt = (window.scrollY + window.innerHeight) - section.clientHeight / 1.5;
        // bottom of the section
        const bottomSection = section.offsetTop + section.clientHeight;
        const isHalfShown = slideInAt > section.offsetTop;
        const isNotScrolledPast = window.scrollY < bottomSection;
        const progressLines = document.querySelectorAll('.skills__progress-line');

        if (isHalfShown && isNotScrolledPast) {
            progressLines.forEach(line => {
                let attrData = line.attributes['data-progress'].nodeValue;
                line.style.width = attrData;
            });
        } else {
            progressLines.forEach(line => {
                line.style.width = 0;
            });
        }

    };
	
	return {
		init: init
	}

})();
skillsAnimation.init();