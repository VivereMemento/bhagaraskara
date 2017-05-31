(function() {
  'use strict';

    svg4everybody();

// ***** navigation ***** //

const trig = document.querySelector('.nav__trigger');
trig.addEventListener('click', function() {
    let navList = document.querySelector('.nav__list');
    
    if(navList.classList.contains('opened')) {
        navList.classList.remove('opened');
    } else {
        navList.classList.add('opened');
    }
});

})();
