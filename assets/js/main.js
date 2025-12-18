
$(window).on('load', function () {

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

    // Block Content Image Slider slider
    $('.block-content-image-slider .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        dots: false
    });

    // Block Photo Slider slider
    $('.block-photo-slider').each(function (index) {

        $(`.block-photo-slider#photo-slider-${index} .slider`).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            speed: 1000,
            arrows: true,
            prevArrow: $(`.block-photo-slider #prev-${index}`),
            nextArrow: $(`.block-photo-slider #next-${index}`),
            dots: false,
            responsive: [
                {
                    breakpoint: 1149,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    });


    /*
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
    */
});