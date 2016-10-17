function initMap() {
    
    var sotta = {
        info: '<strong>Sotta Sopra</strong><br>\
                    405 N Charles St<br> Baltimore, MD 21201<br>\
                    <a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
        lat: 39.294415,
        long: -76.615134
    };

    var aggio = {
        info: '<strong>Aggio</strong><br>\
                    614 Water St<br> Baltimore, MD 21202<br>\
                    <a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
        lat: 39.288839,
        long: -76.607484
    };

    var la = {
        info: '<strong>La Tavola</strong><br>\r\
                    248 Albemarle St<br> Baltimore, MD 21202<br>\
                    <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
        lat: 39.286160,
        long: -76.602473
    };

    var italianLocations = [
      [sotta.info, sotta.lat, sotta.long, 0],
      [aggio.info, aggio.lat, aggio.long, 1],
      [la.info, la.lat, la.long, 2],
    ];

    var tio = {
        info: '<strong>Tio Pepe</strong><br>\
                    10 E Franklin St<br> Baltimore, MD 21202<br>\
                    <a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
        lat: 39.295307,
        long: -76.614921
    };

    var tapas = {
        info: '<strong>Tapas Teatro</strong><br>\
                    1711 N Charles<br> Baltimore, MD 21202<br>\
                    <a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
        lat: 39.309260,
        long: -76.615989
    };

    var mezze = {
        info: '<strong>Mezze Restaurant</strong><br>\r\
                    1606 Thames St<br> Baltimore, MD 21231<br>\
                    <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
        lat: 39.281263,
        long: -76.594740
    };

    var spanishLocations = [
      [tio.info, tio.lat, tio.long, 0],
      [tapas.info, tapas.lat, tapas.long, 1],
      [mezze.info, mezze.lat, mezze.long, 2],
    ];

    var louisiana = {
        info: '<strong>Louisiana Restaurant</strong><br>\
                    1708 Aliceanna St<br> Baltimore, MD 21231<br>\
                    <a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
        lat: 39.283682,
        long: -76.592759
    };

    var marie = {
        info: '<strong>Marie Louise Bistro</strong><br>\
                    904 N Charles St<br> Baltimore, MD 21201<br>\
                    <a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
        lat: 39.299855,
        long: -76.616187
    };

    var kitchen = {
        info: '<strong>The French Kitchen</strong><br>\r\
                    20 W Baltimore St<br> Baltimore, MD 21201<br>\
                    <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
        lat: 39.289784,
        long: -76.616115
    };

    var frenchLocations = [
      [louisiana.info, louisiana.lat, louisiana.long, 0],
      [marie.info, marie.lat, marie.long, 1],
      [kitchen.info, kitchen.lat, kitchen.long, 2],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(39.287259, -76.611754),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    for (i = 0; i < spanishLocations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(spanishLocations[i][1], spanishLocations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(spanishLocations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}