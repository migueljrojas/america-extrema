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
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('-changeColor');
            logo.addClass('-changeColor');
        }

        if ($(this).scrollTop() < 1) {
            header.removeClass('-changeColor');
            logo.removeClass('-changeColor');
        }
    });
};

module.exports = Header;
