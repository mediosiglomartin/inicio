
$(document).ready(function () {

    // Change Header Backgroun Color
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 150) {
            $('.header').addClass('show');
        } else if ($(window).scrollTop() < 150 && !$('#menu').hasClass('open')) {
            $('.header').removeClass('show');
        }
    });

    // Open Menu on Mobile
    $('#hamburger-menu').on('click', function () {
        $('#menu').toggleClass('open');

        if ($('.header').hasClass('show') && $(window).scrollTop() < 150) {
            $('.header').removeClass('show');
        } else {
            $('.header').addClass('show');
        }
    });

    // Smooth scroll
    $('a[href^="#"]').on('click', function (e) {
        $('#menu').removeClass('open');
        const target = $(this.getAttribute('href'));

        if (this.getAttribute('href') === "#" || this.getAttribute('href') === "") {
            return;
        }

        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 120
            }, 600);
        }
    });

    $('.block-photo-slider .inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 5000,
        cssEase: 'linear',
    });
});