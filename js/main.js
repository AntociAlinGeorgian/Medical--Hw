$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    items: 4,
    margin: 20,
    nav: true,
    dots: false,
    loop: true,
    mouseDrag: true
  });

  $('.popup-video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixContentPos: false
  });



  /* ISOTOPE
  var $grid = $('.portfolio-cont').isotope({
    itemSelector: '.port-item',
    stagger: 30
  });

  $('.filter-port').on('click', '.button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });


  $('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'a', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  /* MASONRY
  $('.portfolio-cont').isotope({
    itemSelector: '.port-item img',
    masonry: {
      columnWidth: 0
    }
  });
  */
});
