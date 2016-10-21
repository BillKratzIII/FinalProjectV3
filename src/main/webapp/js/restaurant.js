$(function() {
    
    

    $.each(restaurants, function(){
    	$('.restMap').append(
    	        	
    	)
    })


        $.each(restaurants, function(){
        $('.restMatches').append("<div class=\"col-sm-6 col-md-4\">"
                + "<div class=\"thumbnail\">"

                + "<img id=\"restPic\" class=\"img-responsive img-rounded\" src=\"img/rest" + this.img + ".jpg\">"

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

