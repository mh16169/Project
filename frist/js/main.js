$(document).ready(function() {
    // sticky menu
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 600) {
            $('.header-area').addClass("sticky");
        } else {
            $('.header-area').removeClass("sticky");
        }
    });

    // counterUp
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });

    // owlCarousel
    var owl = $('.part-tow');
    owl.owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        autoplaySpeed: 700,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            767: {
                items: 3,
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
        }

    });



    // magnific popup
    $('.test-popup-link').magnificPopup({
        type: 'iframe',
        // other options


        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }

                // you may add here more sources

            },

            srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        }

    });

    // mobile menu slick nav

    $(function(){
        $('.nav').slicknav();
    });





});