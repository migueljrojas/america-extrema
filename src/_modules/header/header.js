'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var menuClose = $('.header__nav__close');
    var logo = $('.header__logo');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
        logo.toggleClass('-nav-change-color');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('-scroll-change-color');
            logo.addClass('-scroll-change-color');
        }

        if ($(this).scrollTop() < 1) {
            header.removeClass('-scroll-change-color');
            logo.removeClass('-scroll-change-color');
        }
    });
};

module.exports = Header;
