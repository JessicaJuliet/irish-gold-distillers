//Resource: Leaflet Map, an open-source JavaScript library, https://leafletjs.com/examples/quick-start/

    //Resource: https://github.com/TravelTimN/ci-ifd-lead/blob/main/week4-leafletjs/leaflet.md
    var mapTileLayers = L.tileLayer("https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
    });

    //Initialise Map
    var map = L.map("map", {
        layers: [mapTileLayers],
        center: [53.5, -7.5],
        zoom: 7
    });

    // Resource: https://leafletjs.com/reference-1.7.1.html#icon
    var myIcon = L.icon({
        iconUrl: "assets/img/map-pointer.png",
    });

    // For-each loop to run through dataset.js
    dataset.forEach((location) => {
        L.marker([location.lat, location.lng]).addTo(map);
    });


