$(document).ready(function(){

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// active class
$('.button-group button').on('click', function(event) {
$(this).siblings('.active').removeClass('active');
$(this).addClass('active');
event.preventDefault();


});
});