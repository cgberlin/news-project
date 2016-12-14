var $ = require('jquery');
$(document).ready(function(){
  callInMap();
  $('.ui.sticky')
  .sticky({
    context: '#google-map'
  });

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

}

