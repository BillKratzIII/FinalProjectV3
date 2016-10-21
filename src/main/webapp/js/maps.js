
	
	var map;
    var infowindow;
    var restaurants;


	function initMap() {
		var user;
		var match;
		
		$.get("/getmatch", function(data){
			match = data;
		})
		
		
		$.get("/session", function(data){
			user=data;
			

			map = new google.maps.Map(document.getElementById('map'), {
		        zoom: 14,
		        center: new google.maps.LatLng(user.lat, user.lng),
		    });

			infowindow = new google.maps.InfoWindow();
			
	        var service = new google.maps.places.PlacesService(map);
	        service.nearbySearch({
	          location: new google.maps.LatLng(user.lat, user.lng),
	          radius: 5000,
	          type: ['restaurant'],
	          keyword: [getCuisine(user.learningLanguage)]
	        }, callback);
			
		    marker = new google.maps.Marker({
		    	icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
	            position: new google.maps.LatLng(user.lat, user.lng),
	            map: map,
	            title: 'My location'
	        });
		    
		    google.maps.event.addListener(marker, 'click', function() {
		    	  var contentString = user.name + ": " + user.city + ", " + user.state;
		          infowindow.setContent(contentString);		          
		          infowindow.open(map, this);
		        });
		    
		    marker2 = new google.maps.Marker({
		    	icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
		    	position: new google.maps.LatLng(match.lat, match.lng),
		    	map: map,
		    	title: match.name
		    });
		    
		    google.maps.event.addListener(marker2, 'click', function() {
		    	  var contentString = match.name + ": " + match.city + ", " + match.state;
		          infowindow.setContent(contentString);
		          infowindow.open(map, this);
		        });
			
			
			},"json");
		
		};
		
		function callback(results, status) {
	        if (status === google.maps.places.PlacesServiceStatus.OK) {
	          for (var i = 0; i < results.length; i++) {
	            createMarker(results[i]);
	          }
	        }
	      }
		
		function createMarker(place) {
	        var placeLoc = place.geometry.location;
	        var marker = new google.maps.Marker({
	          map: map,
	          position: place.geometry.location
	        });

	        google.maps.event.addListener(marker, 'click', function() {
	          infowindow.setContent(place.name);
	          infowindow.open(map, this);
	        });
	      }
		
		function getCuisine(language){
			var cuisine;
			
			if(language == "English"){
				cuisine = "American";
			}else if(language == "Spanish"){
				cuisine = "Mexican";
			}else{
				cuisine = language;
			}
			return cuisine;
		}

	


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


$(function(){
	
	$.get("/restmatches", function(data){
		restaurants=data;
		var counter = 0;	
	$.each(restaurants, function() {
		if(!(this.name == null)){
		$('.restMatches').append(
			"<div class=\"col-sm-6 col-md-4\">"
			+ "<div class=\"thumbnail\">"

			+ "<img id=\"restPic\" class=\"img-responsive img-rounded\" src=\"img/restaurant"
			+ this.image
			+ ".png\">"

			+ "<div class=\"caption\">"
			+ "<h3>"
			+ this.name
			+ "</h3>"
			+ "<p>"
			+ this.bio
			+ "</p>"
			+ "<address>"
			+ this.streetAddress
			+ "<br>"
			+ this.city
			+ ","
			+ this.state
			+ " "
			+ this.zip
			+ "<br><abbr title=\"Phone\">P:</abbr>"
			+ this.phone
			+ "</address>"
			+ "</div>"
			+ "</div>"
			+ "</div>"

		)
		if(counter==0){
		marker3 = new google.maps.Marker({
		    	icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
		    	position: new google.maps.LatLng(this.lat, this.lng),
		    	map: map,
		    	title: this.name
		});
		
		var contentString = this.name + ": " + this.city + ", " + this.state;
		    
		google.maps.event.addListener(marker3, 'click', function() {
		          infowindow.setContent(contentString);
		          infowindow.open(map, this);
		});
		}else if(counter==1){
			marker4 = new google.maps.Marker({
		    	icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
		    	position: new google.maps.LatLng(this.lat, this.lng),
		    	map: map,
		    	title: this.name
		});
		
		var contentString = this.name + ": " + this.city + ", " + this.state;
		    
		google.maps.event.addListener(marker4, 'click', function() {
		          infowindow.setContent(contentString);
		          infowindow.open(map, this);
		});	
			
		}else{
			marker5 = new google.maps.Marker({
		    	icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
		    	position: new google.maps.LatLng(this.lat, this.lng),
		    	map: map,
		    	title: this.name
		});
		
		var contentString = this.name + ": " + this.city + ", " + this.state;
		    
		google.maps.event.addListener(marker5, 'click', function() {
		          infowindow.setContent(contentString);
		          infowindow.open(map, this);
		})
			
		};

		$('#restBackground').addClass(this.languageId);
		counter++;
		return counter<3;
		}
	});
	},"json");
});
