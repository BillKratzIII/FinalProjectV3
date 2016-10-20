$(function() {
    
    var restaurants = [{
        rest_name: 'Sotta Sopra',
        cuisine: 'Italian',
        country: 'italy',
        rest_address: '405 N Charles St',
		rest_city: 'Baltimore',
		rest_state: 'MD',
		rest_zip: '21202',
        rest_phone: '410-410-4100',
		rest_lat: 39.294415,
		rest_long: -76.615134,
        img: 'restaurant6',
        rest_bio: 'typesetting industry. asdkkskm cmsksi edms makak ksksks kdhd hshsh sjsjsj'
    },

    {
        rest_name: 'Aggio',
        cuisine: 'Italian',
        country: 'italy',
        rest_address: '614 Water St',
		rest_city: 'Baltimore',
		rest_state: 'MD',
		rest_zip: '21202',
        rest_phone: '410-410-4100',
		rest_lat: 39.288839,
		rest_long: -76.607484,
        img: 'restaurant10',
        rest_bio: 'typesetting industry. asdkk skmcmsksie dmsma kak ksksks kdh dhshsh sjsjsj'
    },

    {
        rest_name: 'La Tavola',
        cuisine: 'Italian',
        country: 'italy',
        rest_address: '248 Albemarle St',
		rest_city: 'Baltimore',
		rest_state: 'MD',
		rest_zip: '21202',
        rest_phone: '410-410-4100',
		rest_lat: 39.286160,
		rest_long: -76.602473,
        img: 'restaurant17',
        rest_bio: 'typesetting industry. asdkks kmcmsks iedmsm akak ksksks kdhdhshsh sjsjsj'
    }
 // {
 //        rest_name: 'Tio Pepe',
 //        cuisine: 'Spanish',
 //        country: 'spain',
 //        rest_address: '10 E Franklin St',
	// 	rest_city: 'Baltimore',
	// 	rest_state: 'MD',
	// 	rest_zip: '21202',
	// 	rest_lat: 39.295307,
	// 	rest_long: -76.614921,
 //        img: '<img src="http://placehold.it/700x400">',
 //        rest_bio: 'is simply dummy text of the printing and typesetting industry.asdkkskmcmsksiedmsmakak ksksks kdhdhshsh sjsjsj'
 //    },
 //    {
 //        rest_name: 'Tapas Teatro',
 //        cuisine: 'Spanish',
 //        country: 'spain',
 //        rest_address: '1711 N Charles',
	// 	rest_city: 'Baltimore',
	// 	rest_state: 'MD',
	// 	rest_zip: '21202',
	// 	rest_lat: 39.309260,
	// 	rest_long: -76.615989,
 //        img: '<img src="http://placehold.it/700x400">',
 //        rest_bio: 'is simply dummy text of the printing and typesetting industry.asdkkskmcmsksiedmsmakak ksksks kdhdhshsh sjsjsj'
 //    },
 //    {
 //        rest_name: 'Mezze Restaurant',
 //        cuisine: 'Spanish',
 //        country: 'spain',
 //        rest_address: '1606 Thames St',
	// 	rest_city: 'Baltimore',
	// 	rest_state: 'MD',
	// 	rest_zip: '21231',
	// 	rest_lat: 39.281263,
	// 	rest_long: -76.594740,
 //        img: '<img src="http://placehold.it/700x400">',
 //        rest_bio: 'is simply dummy text of the printing and typesetting industry.asdkkskmcmsksiedmsmakak ksksks kdhdhshsh sjsjsj'
 //    }
    ];

    $.each(restaurants, function(){
    	$('.restMap').append(
    	        	
    	)
    })


        $.each(restaurants, function(){
        $('.restMatches').append("<div class=\"col-sm-6 col-md-4\">"
                + "<div class=\"thumbnail\">"
                + "<img class=\"img-responsive img-rounded\" height=\"250px\" src=\"img/" + this.img + ".png\">"
                + "<div class=\"caption\">"
                + "<h3>" + this.rest_name + "</h3>"
                + "<p>" + this.rest_bio + "</p>"
                + "<address>" +this.rest_address + "<br>" + this.rest_city +"," +this.rest_state + " " + this.rest_zip + "<br><abbr title=\"Phone\">P:</abbr>" + this.rest_phone + "</address>" 
                + "<p><a href=\"#\" class=\"btn btn-default\" role=\"button\">Directions</a>"
                + "</div>"
                + "</div>"
                + "</div>"
         
                      )

        $('#restBackground').addClass(this.country);
                
        });
        
        
        
                    
           
        
    });

