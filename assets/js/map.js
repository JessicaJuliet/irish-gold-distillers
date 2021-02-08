/* Resource: Google Maps JavaScript API Tutorial https://www.youtube.com/watch?v=Zxf1mnP5zcw and Code Institute's Google Maps module */

    // Initialise and add map of Ireland

    function initMap(){
        // Link to map id in HTML
        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            // Location of Ireland
            center: {lat: 53.1424, lng: -7.6921},
        });

        //Add markers
        let marker = new google.maps.Marker({
            position: dataset(lat, lng),
            map: map,
        });
    }