var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('google-map'), {
    center: {lat: 37.09024, lng: -95.712891},
    zoom: 2,
    mapTypeId: 'hybrid',
    tilt: 45
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



function processData(data){
  $.each(data, function(index, obj){
    console.log(data);
    console.log(obj.geometry.coordinates);
    var headingFromNews = obj.properties.title;
    var detailFromNews = obj.properties.description;
    var dateFromNews = obj.properties.date;
    var sourceFromNews = obj.properties.source;
    var urlFromNews = obj.properties.url;
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">'+headingFromNews+'</h1>'+
        '<p>Details: '+detailFromNews+'</p>'+
        '<p>Date: '+dateFromNews+'</p>'+
        '<p>source: '+sourceFromNews+'</p>'+
        '<p><a href = " '+urlFromNews+'">'+urlFromNews+'</a></p>'+
        '</div>'+
        '</div>';

    var latitude = obj.geometry.coordinates[1];
    var longitude = obj.geometry.coordinates[0];
    var infowindow = new google.maps.InfoWindow({
                      content: contentString
                    });
    var marker = new google.maps.Marker({
                  position: {lat: latitude, lng: longitude},
                  map: map,
                  title: 'News'
                });
                marker.addListener('click', function() {
                  map.setZoom(8);
                  map.setCenter(marker.getPosition());
                  infowindow.open(map, marker);7
            });
  });
}
