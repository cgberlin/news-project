var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('google-map'), {
    center: {lat: 37.09024, lng: -95.712891},
    zoom: 1

  });
}

function getNews(searchedTerm){
  var data =  $.ajax({
      url: 'https://alertifyme-news.p.mashape.com/search.php?query=' + searchedTerm, // The URL to the API. You can get this in the API page of the API you intend to consume
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',
      success: function(data) { processData(data); },
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "i7QyNxw44UmshFKsRu1bVZikhxFSp1e22YAjsnqtPgrHNbANrX"); // Enter here your Mashape key
      }
  });

}







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

function processData(data){
  $.each(data, function(index, obj){
    console.log(obj.geometry.coordinates);
    var latitude = obj.geometry.coordinates[1];
    var longitude = obj.geometry.coordinates[0];
    var marker = new google.maps.Marker({
                  position: {lat: latitude, lng: longitude},
                  map: map,
                  title: 'News'
                });
  });
}
