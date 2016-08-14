$(document).ready(function(){
  animateLanding();
});

function animateLanding(){
  $('#landing-title').addClass('animated rollIn');
  $('#news-img-env').addClass('animated lightSpeedIn');
}
$('.landing-page-container').on('click', '#landing-title', function(){
  $('#news-img-env').removeClass('animated lightSpeedIn').addClass('animated rotateOutDownRight');
  $('#landing-title').removeClass('animated rollIn').addClass('animated hinge').delay(2000).queue(function(next) {
    $('#landing-title').hide();
    $('#landing-credits').addClass('animated rollIn').show();
    $('#white-star1').addClass('animated zoomInDown').show().delay(300).queue(function(next) {
      $('#white-star2').addClass('animated zoomInDown').show().delay(200).queue(function(next) {
        $('#white-star3').addClass('animated zoomInDown').show();
          next();
        next();
    next();
    });
    });
  });
});

$('.landing-page-container').on('click', '#landing-credits', function(){
  $('#landing-credits').removeClass('animated rollIn').addClass('animated zoomOutUp');
  $('#white-star1').removeClass('animated zoomInDown').addClass('animated zoomOutUp');
  $('#white-star2').removeClass('animated zoomInDown').addClass('animated zoomOutUp');
  $('#white-star3').removeClass('animated zoomInDown').addClass('animated zoomOutUp');
  callInMap();
});

$('.landing-page-container').on('click', '#search-button', function(){
  var searchedTerm = $('#search-term').val();
  getNews(searchedTerm);
});

function callInMap(){
  $('#google-map').addClass('animated rollIn').show();
  $('#about-button').addClass('animated rollIn').show();
  $('#search-button').addClass('animated rollIn').show();
  $('#prompt-user-search').addClass('animated rollIn').show();
  $('#search-term').addClass('animated rollIn').show();
  initMap();
  map.setMapTypeId('satellite');
}
