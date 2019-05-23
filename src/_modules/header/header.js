'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var logo = $('.header__logo');
    var scrollAdjustment;

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
        logo.toggleClass('-nav-change-color');
    });

    $('.header__list a').on('click', function() {
        header.removeClass('-open');
        body.removeClass('-hideOverflow');
        logo.removeClass('-nav-change-color');
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

    $(window).on('resize', function() {
        updateScrollAdjustment();
    });

    function updateScrollAdjustment() {
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        scrollAdjustment = width > 760 ? -90 : -50;
    }

    updateScrollAdjustment();

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top + scrollAdjustment
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                    var $target = $(target);
                    $target.focus();
                });
            }
        }
    });
};

module.exports = Header;
