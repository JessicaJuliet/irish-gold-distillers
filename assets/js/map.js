/* Resource: Google Maps JavaScript API Tutorial https://www.youtube.com/watch?v=Zxf1mnP5zcw and Code Institute's Google Maps module */

    function initMap(){
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: {
                lat: 53.1424,
                lng: -7.6921
            }
        });

        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var locations = [
            {lat: 53.33553926049431, lng: -6.271833294680272},
            {lat:53.345993362855666, lng: -6.288656107986686},
            {lat:53.18985790293435, lng: -6.161000912514201},
            {lat:53.1060303176107, lng: -6.076854100310724},
            {lat:52.72480015520603, lng: -6.856295655359807},
            {lat:52.62295335282654, lng:-7.235636483853549},
            {lat:52.27905306856134, lng:-6.999728042756679},
            {lat:53.39418166302917, lng:-7.391158605616625},
            {lat:53.26954696231768, lng:-7.377427954808486},
            {lat:52.16171470994588, lng:-10.170242354583262},
            {lat:53.759129561189006, lng:-6.138265591995494},
            {lat:54.05008271369942, lng: -6.429100452770025},
            {lat:54.70523083531857, lng: -8.634750315329319},
            {lat:53.40916990836243, lng: -6.283676237781938}
        ];

        var markers = locations.map(function(location, i){
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length],
                map: map,
                /* -- Resource: Image made by https://www.freepik.com on https://www.flaticon.com/ */ 
                icon: 'assets/img/whiskey-cask.png'
            });
        });
        /* Resource: https://developers.google.com/maps/documentation/javascript/marker-clustering */
        new MarkerClusterer(map, markers, {
            imagePath:
               "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
        });
    }  