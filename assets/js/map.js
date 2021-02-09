/* Resource: Google Maps JavaScript API Tutorial https://www.youtube.com/watch?v=Zxf1mnP5zcw and Code Institute's Google Maps module */

    // Initialise and add map of Ireland

    function initMap(){
        // Link to map id in HTML
        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            // Location of Ireland
            center: {lat: 53.1424, lng: -7.6921},
        });

        // Add markers
       // let marker = new google.maps.Marker({
         //   position: locations,
           // map: map,
        //});
    //}


    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var markers = dataset.map(function(location, i){
            return new google.maps.Marker({
                position: {lat: location.lat, lng: location.lng},
                label: labels[i % labels.length],
                map: map,
                /* -- Resource: Create custom markers - https://developers.google.com/maps/documentation/javascript/custom-markers */ 
                /* -- Resource: Image made by https://www.freepik.com on https://www.flaticon.com/ */ 
                icon: 'assets/img/whiskey-cask.png',
           });
    });

        /* Resource: https://developers.google.com/maps/documentation/javascript/marker-clustering */
        new MarkerClusterer(map, markers, {
            imagePath:
               "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
        });
    }