

$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 300) {
            $('.header__logo').addClass('show');
        } else {
            $('.header__logo').removeClass('show');
        }
    });
});