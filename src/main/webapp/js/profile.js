function showForm(i) {
	    $("#dialog1").dialog();
	    $("#address").val($("#email" + i).val());
	    $("#subject").val("Message from Convo Cafe User: " + $("#username").val());
	};
	
function findRestaurant(i){
	
	var data = {
			city : $("#city" + i).val(),
			state : $("#state" + i).val(),
			name : $("#name" + i).val(),
			lat : $("#lat" + i).val(),
			lng : $("#lng" + i).val()
	}
	
	
	
	$.post("/setmatch", data, function(data){
		location.href = "/participatingrestaurants";
	})
	
	
};



$(function() {
	
	$(".userMatches").hide();
	
	var user;

	
	$.get("/session", function(data){
		console.log(data);
		user=data;
		
		
		$('.userProfile').append("<div class=\"container\" id=\""+user.learningLanguage+"\">"
                + "<div class=\"tab-container\">"
                + "<div id=\"item-one\" style=\"display: block\">"
                + "<div class=\"row about\">"
                + "<div class=\"col-md-3 col-sm-12\">"
                + "<div class=\"about_me text-center\">"
                + "<h3>" + user.name + "</h3>"
                + "<div id=\"profilePic\">"
                + "<img src=\"img/" + user.avitar + ".png\" class=\"img-responsive\" alt=\"\" />"
                + "</div>"
                + "</div>"
                + "</div>"
                + "<div class=\"col-md-9 col-sm-6\">"
                + "<h3><strong>About Me:</strong></h3>"
                + "<p id=profileBio><strong>" +user.aboutMe +"</strong></p>"
                + "</div>"
                
                + "<div class=\"col-md-3\" style=\"text-align: center\">"
                + "<h4 class=\"about_title\" id=\"langandloc\"><strong>Native Language</strong></h4>"
                + "<div class=\"progress-bar-linear\">"
                + "<p><strong>" + user.firstLanguage + "</strong></p>"
                + "<div class=\"progress-bar\">"
                + "<span data-percent=\"100\"></span>"
                + "</div>"
                + "</div>"
                + "</div>"
                
                + "<div class=\"col-md-3\" style=\"text-align: center\">"
                + "<h4 class=\"about_title\" id=\"langandloc\"><strong>Learning Language</strong></h4>"
                + "<div class=\"progress-bar-linear\">"
                + "<p><strong>" + user.learningLanguage + "</strong></p>"
                + "<div class=\"progress-bar\">"
                + "<span data-percent=\"100\"></span>"
                + "</div>"
                + "</div>"
                + "</div>"
                + "<div class=\"col-md-3\" style=\"text-align: center\">"
                + "<h4 class=\"about_title\" id=\"langandloc\"><strong>Location</strong></h4>"
                + "<div class=\"progress-bar-linear\">"
                + "<p id=\"userlangandloc\" class=\"progress-bar-text\"><strong>" 
                + user.city + ", " + user.state + "</strong></p>"
                + "<div class=\"progress-bar\">"
                + "<span data-percent=\"100\"></span>"
                
                + "</div>"
                + "</div>"
                + "</div>"
                
                + "<div class=\"col-md-9\" style=\"text-align: center\">"
                + "<button id=\"findMatchButton\" class=\"btn btn-info btn-lg\" role=\"alert\">"
                + "Find a New Language Partner!!</button>"             
                + "</div>"
                
                
                + "</div>"
                + "</div>"
                + "</div>"
                );

    	$('#messageBackground').addClass(user.learningLanguage);
		
    	 
    	$("#findMatchButton").click(function() {
    		$(".userMatches").html("");
    		
    		$.get("/usermatches", function(data){
    			users=data;   
    			var counter = 0;
    			
    			$.each(users, function(){

    	
    			  if(!(this.email == user.email)){
    		        $('.userMatches').append("<div id=\"matchProfile\">"
    		        			
    		                    +"<div class=\"container\" id=\""+this.learningLanguage+"\">"
    		                    + "<div class=\"tab-container\">"
    		                    + "<div id=\"item-one\" style=\"display: block\">"
    		                    + "<div class=\"row about\">"
    		                    + "<div class=\"col-md-3 col-sm-12\">"
    		                    + "<div class=\"about_me text-center\">"
    		                    + "<h3>" + this.name + "</h3>"
    		                    + "<div id=\"profilePic\">"
    		                    + "<img src=\"img/" + this.avitar + ".png\" class=\"img-responsive\" alt=\"\" />"
    		                    + "</div>"
    		                    + "</div>"
    		                    + "</div>"
    		                    + "<div class=\"col-md-9 col-sm-6\">"
    		                    + "<h3><strong>About Me:</strong></h3>"
    		                    + "<p id=profileBio><strong>" +this.aboutMe +"</strong></p>"
    		                    + "</div>"
    		                    
    		                    + "<div class=\"col-md-3\" style=\"text-align: center\">"
    		                    + "<h4 class=\"about_title\" id=\"langandloc\"><strong>Native Language</strong></h4>"
    		                    + "<div class=\"progress-bar-linear\">"
    		                    + "<p><strong>" + this.firstLanguage + "</strong></p>"
    		                    + "<div class=\"progress-bar\">"
    		                    + "<span data-percent=\"100\"></span>"
    		                    + "</div>"
    		                    + "</div>"
    		                    + "</div>"
    		                    
    		                    + "<div class=\"col-md-3\" style=\"text-align: center\">"
    		                    + "<h4 class=\"about_title\" id=\"langandloc\"><strong>Learning Language</strong></h4>"
    		                    + "<div class=\"progress-bar-linear\">"
    		                    + "<p><strong>" + this.learningLanguage + "</strong></p>"
    		                    + "<div class=\"progress-bar\">"
    		                    + "<span data-percent=\"100\"></span>"
    		                    + "</div>"
    		                    + "</div>"
    		                    + "</div>"
    		                    + "<div class=\"col-md-3\" style=\"text-align: center\">"
    		                    + "<h4 class=\"about_title\" id=\"langandloc\"><strong>Location</strong></h4>"
    		                    + "<div class=\"progress-bar-linear\">"
    		                    + "<p id=\"userlangandloc\" class=\"progress-bar-text\"><strong>" 
    		                    + this.city + ", " + this.state + "</strong></p>"
    		                    + "<div class=\"progress-bar\">"
    		                    + "<span data-percent=\"100\"></span>"
    		                    
    		                    + "</div>"
    		                    + "</div>"
    		                    + "</div>"
    		                    
    		                    + "<div class=\"col-md-4\" style=\"text-align: center\">"
    		                    + "<button id=\"sendEmailButton\" onclick=\"showForm(" + counter + ")\" class=\"btn btn-info btn-block\" style=\"display: block; margin: 0 auto;\" role=\"alert\">"
    		                    + "<span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span>"
    		                    + " Send " + this.name + " a Message!</button>"             
    		                    + "</div>"
    		                    + "<div class=\"col-md-1\"></div>"
    		                    + "<div class=\"col-md-4\" style=\"text-align: center\">"


    		                    + "<button id=\"findRestaurantButton\" onclick=\"findRestaurant(" + counter +")\" class=\"btn btn-info btn-lg\" role=\"alert\">"

    		                    + "<span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span>"
    		                    + " Find " + this.learningLanguage + " Restaurants!!</button>"
    		                    + "</div>"
    		                    
    		                    
    		                    + "</div>"
    		                    + "</div>"
    		                    + "</div>"
    		             
    		                    
    		                    + "<div class=\"col-md-9\" style=\"text-align: center\">"
    		                    + "<input type=\"hidden\" id=\"streetAddress" + counter + "\" value=\"" + this.streetAddress + "\">"     
    		                    + "</div>"
    		                    
    		                    + "<div class=\"col-md-9\" style=\"text-align: center\">"
    		                    + "<input type=\"hidden\" id=\"city" + counter + "\" value=\"" + this.city + "\">"     
    		                    + "</div>"
    		                    
    		                    + "<div class=\"col-md-9\" style=\"text-align: center\">"
    		                    + "<input type=\"hidden\" id=\"state" + counter + "\" value=\"" + this.state + "\">"     
    		                    + "</div>"
    		                    
    		                    + "<div class=\"col-md-9\" style=\"text-align: center\">"
    		                    + "<input type=\"hidden\" id=\"name" + counter + "\" value=\"" + this.name + "\">"     
    		                    + "</div>"
    		                    
    		                    + "<div class=\"col-md-9\" style=\"text-align: center\">"
    		                    + "<input type=\"hidden\" id=\"lat" + counter + "\" value=\"" + this.lat + "\">"     
    		                    + "</div>"
    		                    
    		                    + "<div class=\"col-md-9\" style=\"text-align: center\">"
    		                    + "<input type=\"hidden\" id=\"lng" + counter + "\" value=\"" + this.lng + "\">"     
    		                    + "</div>"
    		                    
    		                    + "</div>"
    		                    + "</div>"
    		                    + "</div>"
    		                    + "</div>"

    		                    )                            
    		                    

    		            $('#messageBackground').addClass(this.learningLanguage);  
    		        	counter++;
    		        	return counter<5;
    			  		}
    		         });
    			
    			
    			
    		},"json");
    		
    		
    	    $(".userMatches").dialog({width:1250});
    	    
    	});
		
		
	},"json");
	

	$("#emailButton").click(function(){
		alert("Your message has been sent!")
		$.ajax({
			url: "/send-mail",
			type:"POST",
			data:JSON.stringify({
				"address" : $("#address").val(),
				"subject" : $("#subject").val(),
				"message" : $("#message").val()
			}),
			contentType:"application/json; charset=utf-8",
			dataType:"json",
			complete: function(){
				location.href = "/profile.html";
			},
			error: function(){
				console.log("error");
			}
		});
	});
         

});
