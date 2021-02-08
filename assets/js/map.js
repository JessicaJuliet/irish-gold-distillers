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

        var locations = [
            {lat: 54.04729435487668, lng: -8.042941142348049},
            {lat: 51.93567739110183, lng: -10.238846098232802},
            {lat: 52.14765986681307, lng: -8.052948943714533},
            {lat: 53.34385070067678, lng: -6.2852054614128985},
            {lat: 53.184244356019555, lng: -6.190472365118261},
            {lat: 53.337426216648204, lng: -6.275956805591871},
            {lat: 51.62164586638968, lng: -8.885773430778368},
            {lat: 53.71185722592359, lng: -6.558260212981522},
            {lat: 53.34377785880115, lng: -6.289195334427413},
            {lat: 52.702493408415826, lng:  -6.9801330093114675},
        ]; 

        var markers = locations.map(function(location, i){
            return new google.maps.Marker({
                position: location,
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