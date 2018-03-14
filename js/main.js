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

  /* Google Maps */
  var myCenter=new google.maps.LatLng(23.779908,90.3669903);
             function initialize()
             {
                 var mapProp = {
                   center:myCenter,
                   scrollwheel: false,
                   zoom:15,
                   mapTypeId:google.maps.MapTypeId.ROADMAP
                 };

                 var map=new google.maps.Map(document.getElementById("contactgoogleMap"),mapProp);
                 var marker=new google.maps.Marker({
                   position:myCenter,
                   animation:google.maps.Animation.BOUNCE,
                   icon:'../imgs/map-marker.png',
                   map: map,
                 });
                 var styles = [
           {
             stylers: [
               { hue: "#c5c5c5" },
               { saturation: -100 }
             ]
           },
                 ];
                 map.setOptions({styles: styles});
                 marker.setMap(map);
             }
             google.maps.event.addDomListener(window, 'load', initialize);


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
