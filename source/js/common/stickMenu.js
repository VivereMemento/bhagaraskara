$(document).ready(function() {
 
    var navPos, winPos, navHeight;
        
    function refreshVar() {
        navPos = $('.menu').offset().top;
        navHeight = $('.menu').outerHeight(true);
    }

    refreshVar();
    $(window).resize(refreshVar);

        $('<div class="clone-menu"></div>').insertBefore($('.menu')).css('height', navHeight).hide();
        
    $(window).scroll(function() {
        winPos = $(window).scrollTop();
        
        if (winPos >= navPos) {
            $('.menu').addClass('fixed shadow');  
            $('.clone-menu').show();
        }  
        else {
            $('.menu').removeClass('fixed shadow');
            $('.clone-menu').hide();
        }
    });

});