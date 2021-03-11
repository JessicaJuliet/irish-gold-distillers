//Resource: Leaflet Map, an open-source JavaScript library, https://leafletjs.com/examples/quick-start/
//Resource: https://github.com/TravelTimN/ci-ifd-lead/blob/main/week4-leafletjs/leaflet.md

//Resource: Map tiles sourced from http://alexurquhart.github.io/free-tiles/
var mapTileLayers = L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png");

//Initialise Map
var map = L.map("map", {
    layers: [mapTileLayers],
    center: [53.5, -7.5],
    zoom: 6.4,
    // Resource: Stop map movine when scrolling over https://gis.stackexchange.com/questions/111887/leaflet-mouse-wheel-zoom-only-after-click-on-map
    scrollWheelZoom: false
});

// Resource: Code taken from https://gis.stackexchange.com/questions/111887/leaflet-mouse-wheel-zoom-only-after-click-on-map
map.on('click', function() {
    if (map.scrollWheelZoom.enabled()) {
    map.scrollWheelZoom.disable();
    }
    else {
    map.scrollWheelZoom.enable();
    }
});

// Resource: https://leafletjs.com/reference-1.7.1.html#icon
// Create custom marker to tie in with logo
var myIcon = L.icon({
    iconUrl: "assets/img/pointer.png"
});

// Create for-each loop to run through dataset.js and display custom markers on map with HTML
dataset.forEach((location) => {
    L.marker([location.lat, location.lng], {icon: myIcon}).addTo(map)
    .bindTooltip("<p class='mapTitle'><strong>" + location.title + "</strong></p>" + "<p class='county'><strong>County: </strong>" + location.county + "</p>" + "<i class='fa fa-home'></i> <strong> Address: </strong>" + location.address + "<br>" + "<i class='fa fa-times-circle'></i> <strong>Tours: </strong>" + location.tours + "<br><br>" + "<img class='mapImage' src=" + location.photo + ">"
    );
});