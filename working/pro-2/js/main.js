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
    $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:true,
    
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})

// init Isotope
var $grid = $('.latest-body').isotope({
  // options
});
// filter items on button click
$('ul').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

    

    // mobile menu slick nav

    $(function(){
        $('.nav').slicknav();
    });





});