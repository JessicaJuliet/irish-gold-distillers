//Resource: Leaflet Map, an open-source JavaScript library, https://leafletjs.com/examples/quick-start/

    //Resource: https://github.com/TravelTimN/ci-ifd-lead/blob/main/week4-leafletjs/leaflet.md
    //Resource: Map tiles sourced from http://alexurquhart.github.io/free-tiles/
    
    var mapTileLayers = L.tileLayer("https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}");

    //Initialise Map
    var map = L.map("map", {
        layers: [mapTileLayers],
        center: [53.5, -7.5],
        zoom: 7
    });

    // Resource: https://leafletjs.com/reference-1.7.1.html#icon
    var myIcon = L.icon({
        iconUrl: "assets/img/map-pointer.png"
    });
    
    // For-each loop to run through dataset.js
    dataset.forEach((location) => {
        L.marker([location.lat, location.lng]).addTo(map)
        .bindTooltip("<p class='mapTitle'><strong>" + location.title + "</strong></p>" + "<br>" + "<strong>Address: </strong>" + location.address + "<br>" + "<strong>County: </strong>" + location.county + "<br>" + "<strong>Tours: </strong>" + location.tours + "<br><br>" + "<img class='mapImage' src=" + location.photo + ">"
        );
    });