/* Resource: Dataset - https://oralytics.com/2020/02/24/irish-whiskey-distilleries-data-set/ */
/* Resource: Photos and description content were sourced from - https://irishwhiskey360.com/discover-irelands-whiskey-distilleries/ */
/* Resource: Google PlaceId: https://developers.google.com/places/web-service/place-id, lat and lng: Google Maps */

let dataset = [
    {
        placeId: "ChIJwymf5QoQZ0gRr3hER40bqrs",
        title: "The Shed Distillery",
        address: "Bypass Road, Drumshanbo",
        county: "Leitrim",
        website: "http://thesheddistillery.com/",
        tours: "Currently closed",
        description: "The Shed Distillery presents two distinct experiences in one tour –  a Curious Journey into the Inner Sanctum of the first whiskey distillery in Connacht in 101 years and a voyage to the Far East to discover gunpowder tea, the inspiration behind Drumshanbo Gunpowder Irish Gin.",
        photo: "assets/img/listings/the-shed.jpg",
        lat: 54.04729435487668, 
        lng: -8.042941142348049
    }, 
    {
        placeId: "ChIJYy-3vTTzT0gRg7T8ipG2j8Q",
        title: "Skellig Six18 Distillery",
        address: "Valentia Rd, Garranearagh, Cahersiveen",
        county: "Kerry",
        website: "http://skelligsix18distillery.ie/",
        tours: "Currently closed",
        description: "Skellig Six18 is the only working distillery on the Ring of Kerry. Just outside Cahersiveen town, on the Skellig Coast and close to the UNESCO World Heritage Site of Skellig Michael.",
        photo: "assets/img/listings/skellig.jpg",
        lat: 51.93567739110183, 
        lng: -10.238846098232802
    }, 
    {
        placeId: "ChIJVQfECZA_Q0gR3VpgLNHJyo0",
        title: "Blackwater Distillery",
        address: "Church Road, Ballinlevane East, Ballyduff, P51 C5C6",
        county: "Waterford",
        website: "http://www.blackwaterdistillery.ie/",
        tours: "Currently closed",
        description: "Beautifully framed within the West Waterford countryside on the banks of the Blackwater river, Blackwater Distillery is renowned nationally and internationally for its innovative, informed and brave approach to creating a diverse range of contemporary Irish spirits.",
        photo: "assets/img/listings/blackwater.jpg",
        lat: 52.14765986681307,
        lng: -8.052948943714533
    }, 
    {
        placeId: "ChIJ6ZnJQ5UNZ0gRWKIwt2v3pC8",
        title: "Roe and Co Distiller",
        address: "92 James St, The Liberties, Dublin 8",
        county: "Dublin",
        website: "https://www.roeandcowhiskey.com/",
        tours: "Currently closed",
        description: "Located in the former Guinness Power Station in the heart of Dublin’s buzzing Liberties district, Roe & Co is a brand that lives and breathes creative reinvention.",
        photo: "assets/img/listings/roe.jpg",
        lat: 53.34385070067678,
        lng: -6.2852054614128985
    }, 
    {
        placeId: "ChIJiwVFJ-OmZ0gRSExGUHw0rB0",
        title: "The Powerscourt Distiller",
        address: "Powerscourt Estate, Enniskerry, A98 A9T7",
        county: "Wicklow",
        website: "http://www.powerscourtdistillery.com/",
        tours: "Currently closed",
        description: "Set against the backdrop of the Great Sugarloaf Mountain and drawing from an underground lake of pure water that lies beneath the Estate, Powerscourt sets the perfect stage for distilling Irish whiskey.", 
        photo: "assets/img/listings/powerscourt.png",
        lat: 53.184244356019555, 
        lng: -6.190472365118261
    }, 
    {
        placeId: "ChIJuRsKpSMMZ0gRza0_qOTgHyk",
        title: "The Dublin Liberties Distillery",
        address: "33 Mill St, The Liberties, D08 V221",
        county: "Dublin",
        website: "https://thedld.com/",
        tours: "Currently closed",
        description: "The Dublin Liberties Distillery is a stunning state of the art working distillery housed in a 400-year-old mill building in the heart of Dublin city.",
        photo: "assets/img/listings/liberties.jpg",
        lat: 53.337426216648204, 
        lng: -6.275956805591871
    }, 
    {
        placeId: "ChIJG9M36y1SREgRpMxzvgojIAs",
        title: "Clonakilty Distillery",
        address: "The Waterfront, Scartagh, Clonakilty, P85 N403",
        county: "Cork",
        website: "https://clonakiltydistillery.ie/",
        tours: "Currently closed",
        description: "Immerse yourself in a unique sensory experience by booking a behind the scenes tour of a real working distillery.",
        photo: "assets/img/listings/clonakilty.jpg",
        lat: 51.62164586638968, 
        lng: -8.885773430778368
    }, 
        {
        placeId: "ChIJn-j9XxJGZ0gRgqO5tN6peiE",
        title: "Slane Distillery",
        address: "N51, Slanecastle Demesne",
        county: "Meath",
        website: "http://slaneirishwhiskey.com/",
        tours: "Currently closed",
        description: "Set in the heart of the Boyne Valley, Slane Distillery is housed in beautifully restored 250-year-old stable buildings on the grounds of the legendary Slane Castle, famous around the globe for the incredible series of rock concerts.",
        photo: "assets/img/listings/slane.png",
        lat: 53.71185722592359, 
        lng: -6.558260212981522
    }, 
        {
        placeId: "ChIJ5ylq_DkMZ0gRZVVjqVBQtgo",
        title: "Pearse Lyons Distillery",
        address: "121-122 James St, The Liberties, D08 ET27",
        county: "Dublin",
        website: "https://www.pearselyonsdistillery.com/",
        tours: "Currently closed",
        description: "Discover over 800 years of history and awaken your senses with whiskey tours and tastings at this boutique distillery.",
        photo: "assets/img/listings/pearse-lyons.jpg",
        lat: 53.34377785880115, 
        lng: -6.289195334427413
    }, 
        {
        placeId: "ChIJPXBIo4NnXUgRkp8OgeLWonI",
        title: "Royal Oak Distillery",
        address: "Clorusk Lower, Royaloak",
        county: "Carlow",
        website: "http://www.royaloakdistillery.com/",
        tours: "Currently closed",
        description: "The Royal Oak Distillery is a world-class distillery producing handcrafted Irish whiskey, proudly located on an 18th-century estate in Ireland’s Ancient East region.",
        photo: "assets/img/listings/royal-oak.jpg",
        lat: 52.702493408415826,
        lng:  -6.9801330093114675,
    }, 
        {
        placeId: "ChIJV1WFtJITYUgR_ZeXdbXsUPg",
        title: "Rademon Estate Distillery",
        address: "65 Church Rd, Crossgar, Downpatrick BT30 9HR",
        county: "Down",
        website: "http://www.shortcrossgin.com/",
        tours: "Currently closed",
        description: "Rademon Estate Distillery is home to Shortcross Gin and a new single malt Irish whiskey. Rademon Estate is currently made up of over 500 acres of land and dates to AD565 with the original estate house dating back to 1667.",
        photo: "assets/img/listings/rademon.jpg",
        lat: 54.39596771045236, 
        lng: -5.790359218036798
    }, 

        {
        placeId: "ChIJkY-glu9HWUgRPkt35DRrkJs",
        title: "Connacht Whiskey Distillery",
        address: "Belleek, Ballina, F26 P932",
        county: "Mayo",
        website: "https://twitter.com/connachtwhiskey?lang=en",
        tours: "Currently closed",
        description: "Connacht Whiskey Company makes fine hand-crafted single malt pot still Irish whiskey in the West of Ireland. The distillery is located along the scenic banks of the River Moy in Ballina, Co. Mayo.",
        photo: "assets/img/listings/connacht.jpg",
        lat: 54.12204196194578, 
        lng: -9.14384187756911
    }, 

        {
        placeId: "ChIJJUwuzetvYUgRUpmY47AMqy8",
        title: "The Echlinville Distillery",
        address: "62 Gransha Rd, Kircubbin, Newtownards BT22 1AJ",
        county: "Down",
        website: "https://echlinville.com/",
        tours: "Currently closed",
        description: "The Echlinville Distillery Tour & Tipple offers a real insight into the workings of Northern Ireland’s first newly licensed distillery for over 125 years and home to some of Ireland’s best-known spirits – Dunville’s Irish Whiskey, Echlinville Gin, Jawbox Gin, Weavers Gin and Bán Poitín.",
        photo: "assets/img/listings/echlinville.jpg",
        lat: 54.46915307978796,
        lng: -5.5099783757047245
    }, 

        {
        placeId: "ChIJU01Eqbz7T0gR2JFsZNceDfk",
        title: "Dingle Distillery",
        address: "Farranredmond, Dingle",
        county: "Kerry",
        website: "https://dingledistillery.ie/",
        tours: "Currently closed",
        description: "The Dingle Whiskey Distillery, located just outside the scenic town of Dingle, Co. Kerry, was Ireland’s first purpose-built distillery in over 100 years. Oliver Hughes, Liam Lahart and Peter Mosley had the vision to bring an artisan craft distillery to the picturesque town of Dingle.",
        photo: "assets/img/listings/dingle.jpg",
        lat: 52.14192754537933, 
        lng: -10.288836062312049
    }, 

        {
        placeId: "ChIJFVLiJYq6XUgRIVuysk33PkY",
        title: "Kilbeggan Distillery",
        address: "Lower Main St, Aghamore, Kilbeggan",
        county: "Westmeath",
        website: "https://www.kilbegganwhiskey.com/",
        tours: "Currently closed",
        description: "Visitors to the Kilbeggan Distillery Experience will learn about the traditional methods of mashing in oak mash tuns, fermenting in Oregon pine vats and see the new Kilbeggan malt spirit flowing from ancient pot stills.",
        photo: "assets/img/listings/kilbeggan.jpg",
        lat: 53.369571903452915, 
        lng: -7.502294091095068
    }, 

        {
        placeId: "ChIJP7C-J4SlXUgRmktFAlzpvEw",
        title: "Tullamore D.E.W.",
        address: "Kilbride Plaza, Bury Quay, Puttaghan, Tullamore",
        county: "Offaly",
        website: "https://www.tullamoredew.com/en-gb/",
        tours: "Currently closed",
        description: "For whiskey explorers eager to learn about the history and craft of the world-renowned Tullamore D.E.W. Irish whiskey, a visit to the home of the brand is a must.",
        photo: "assets/img/listings/tullamore.jpg",
        lat: 53.278170447146735, 
        lng: -7.485784628915246,
    }, 

        {
        placeId: "ChIJLZ2x_i5jQ0gRRoXtBzX0-iE",
        title: "Jameson Distillery",
        address: "Old Midleton Distillery, Distillery Walk, Midleton, P25 Y394",
        county: "Cork",
        website: "https://www.jamesonwhiskey.com/en-IE/visit-us/jameson-distillery-midleton",
        tours: "Currently closed",
        description: "Midleton is Ireland’s largest whiskey distillery and the home of Jameson – the world’s most popular Irish whiskey.",
        photo: "assets/img/listings/jameson-cork.jpg",
        lat: 51.91343553242752, 
        lng: -8.168870408348862
    }, 

        {
        placeId: "ChIJ0UBQ46cPZ0gR5l2bcDiVXt0",
        title: "Teeling Whiskey Distillery",
        address: "13-17 Newmarket, The Liberties, Dublin 8, D08 KD91",
        county: "Dublin",
        website: "https://www.teelingwhiskey.com/",
        tours: "Currently closed",
        description: "Teeling Whiskey Distillery is Dublin’s destination for whiskey fans and for anyone with an interest in Dublin’s rich Irish whiskey history.",
        photo: "assets/img/listings/teeling.jpg",
        lat: 53.31432004369853,
        lng: -6.216940845220594
    }, 

        {
        placeId: "ChIJdW92FOYuYEgRjm5TTLZJxB4",
        title: "Bushmills Distillery",
        address: "2 Distillery Rd, Bushmills BT57 8XH",
        county: "Antrim",
        website: "https://bushmills.com/intl/",
        tours: "Currently closed",
        description: "The Old Bushmills Distillery is situated along the north coast of Ireland, where arctic storms rage against the jagged cliffs and where the crisp waters of the River Bush cut through volcanic rock. ",
        photo: "assets/img/listings/bushmills.jpg",
        lat: 55.20298837855927,
        lng: -6.516550785467245
    }, 

        {
        placeId: "ChIJs0Ciwy4MZ0gRFFpl7MaNZAQ",
        title: "Jameson Distillery",
        address: "Bow St, Smithfield, Dublin 7, D07 N9VH",
        county: "Dubin",
        website: "https://www.jamesonwhiskey.com/en-IE/visit-us/jameson-distillery-bow-st",
        tours: "Currently closed",
        description: "In 1780 John Jameson threw open the doors of his distillery on Bow St. Over 200 years later, the doors are still open – to friends old and new.",
        photo: "assets/img/listings/jameson-dublin.jpg",
        lat: 53.34868527982778,
        lng: -6.276604562173476
    } 
];