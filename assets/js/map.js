// Resource: Code taken from Google's Nearby Places- https://developers.google.com/maps/documentation/javascript/places#place_search_requests 
/*
var map;
var service;
var infowindow;

function initMap() {
  var ireland = new google.maps.LatLng(53.1424, -7.6921);

  map = new google.maps.Map(document.getElementById('map'), {
      center: ireland,
      zoom: 7
    });

  var request = {
    location: ireland,
    radius: '15000',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
    console.log(results);
  }
} */
