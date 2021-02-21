//Resource: Leaflet Map, an open-source JavaScript library, https://leafletjs.com/examples/quick-start/

    //Resource: https://github.com/TravelTimN/ci-ifd-lead/blob/main/week4-leafletjs/leaflet.md
    //Resource: Map tiles sourced from http://alexurquhart.github.io/free-tiles/
    
    var mapTileLayers = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");

    //Initialise Map
    var map = L.map("map", {
        layers: [mapTileLayers],
        center: [53.5, -7.5],
        zoom: 7,
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
    var myIcon = L.icon({
        iconUrl: "assets/img/pointer.png"
    });
    
    // For-each loop to run through dataset.js
    dataset.forEach((location) => {
        L.marker([location.lat, location.lng], {icon: myIcon}).addTo(map)
        .bindTooltip("<p class='mapTitle'><strong>" + location.title + "</strong></p>" + "<br>" + "<strong>Address: </strong>" + location.address + "<br>" + "<strong>County: </strong>" + location.county + "<br>" + "<strong>Tours: </strong>" + location.tours + "<br><br>" + "<img class='mapImage' src=" + location.photo + ">"
        );
    });