$(function(){
	$("#getButton").click(function(){

		geoCodeAddress($("#address").val());
		
    });

})

function initMap(){
	geoCodeAddress("baltimore")
}

function geoCodeAddress(address){
	var geocoder = new google.maps.Geocoder();
		var map;
		geocoder.geocode( { 'address': address}, function(results, status) {
	      if (status == 'OK') {
	        map = new google.maps.Map(document.getElementById('map'), {
	      		center: results[0].geometry.location,
	      		zoom: 8
			})
			var marker = new google.maps.Marker({
		    	position: results[0].geometry.location,
			    map: map,
			    title: address
		  	});
	      } else {
	        alert('Geocode was not successful for the following reason: ' + status);
	      }
    	});

    	
	}