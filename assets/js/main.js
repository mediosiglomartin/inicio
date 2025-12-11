

$(document).ready(function () {
    // Change Header Backgroun Color
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 150) {
            $('.header').addClass('show');
        } else if (!$('#menu').hasClass('open')) {
            $('.header').removeClass('show');
        }
    });

    // Open Menu on Mobile
    $('#hamburger-menu').on('click', function () {
        $('#menu').toggleClass('open');

        if ($('.header').hasClass('show') && !$(window).scrollTop() >= 150) {
            $('.header').removeClass('show');
        } else {
            $('.header').addClass('show');
        }
    });
});