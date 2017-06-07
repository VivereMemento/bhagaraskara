const stickMenu = (function() {

    const init = function() {
        _setUpListners();
    };

    const _setUpListners = function() {
        $(window).on('scroll', _stick);
        $(window).on('resize', _refreshVar);
        
    };

    var menuPos, winPos, menuHeight;
        
    function _refreshVar() {
        menuPos = $('.menu').offset().top + 20;
        menuHeight = $('.menu').outerHeight(true);
    }

    $('<div class="clone-menu"></div>').insertBefore($('.menu')).css('height', menuHeight).hide();
    _refreshVar();

    function _stick() {
        winPos = $(window).scrollTop();
        
        if (winPos >= menuPos) {
            $('.menu').addClass('fixed shadow');  
            $('.clone-menu').show();
        }  
        else {
            $('.menu').removeClass('fixed shadow');
            $('.clone-menu').hide();
        }
    };

    
    return {
        init: init
    }

})();
stickMenu.init();