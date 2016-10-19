function showForm(i) {
		console.log("inside showForm");
	    $("#dialog1").dialog();
	    $("#address").val($("#email" + i).val());
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
                + "<p><strong>" + user.nativeLanguage + "</strong></p>"
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

    		
    		$.get("/usermatches", function(data){
    			console.log(data);
    			users=data;   
    			var counter = 0;
    			
    			$.each(users, function(){
    				
    		        $('.userMatches').append("<div id=\"indUserMatch\">"

    		                    +"<div class=\"container\" id=\""+this.learningLanguage+"\">"
    		                    + "<div class=\"tab-container\">"
    		                    + "<div id=\"item-one\" style=\"display: block\">"
    		                    + "<div class=\"row about\">"
    		                    + "<div class=\"col-md-3 col-sm-12\">"
    		                    + "<div class=\"about_me text-center\">"
    		                    + "<h3>" + this.name + "</h3>"
    		                    + "<div id=\"messagePic\">"
    		                    + "<img src=\"img/" + this.avitar + ".png\" class=\"img-responsive\" alt=\"\" />"
    		                    + "</div>"
    		                    + "</div>"
    		                    + "</div>"
    		                    + "<div class=\"col-md-9 col-sm-6\">"
    		                    + "<h3><strong>About Me:</strong></h3>"
    		                    + "<p id=profileBio><strong>" + this.aboutMe +"</strong></p>"
    		                    + "</div>"
    		                    
    		                    + "<div class=\"col-md-4\" style=\"text-align: center\">"
    		                    + "<h4 class=\"about_title\" id=\"langandloc\"><strong>Language</strong></h4>"
    		                    + "<div class=\"progress-bar-linear\">"
    		                    + "<p><strong>" + this.learningLanguage + "</strong></p>"
    		                    + "<div class=\"progress-bar\">"
    		                    + "<span data-percent=\"100\"></span>"
    		                    + "</div>"
    		                    + "</div>"
    		                    + "</div>"
    		                    + "<div class=\"col-md-4\" style=\"text-align: center\">"
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
    		                    + "<button id=\"sendEmailButton\" onclick=\"showForm(" + counter + ")\" class=\"btn btn-info btn-lg\" role=\"alert\">"
    		                    + "<span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span>"
    		                    + " Send " + this.name + " a message!!</button>"
    		                    + "</div>"
    		                    + "<div class=\"col-md-4\" style=\"text-align: center\">"
    		                    + "<button id=\"sendEmailButton\" class=\"btn btn-info btn-lg\" role=\"alert\">"
    		                    + "<span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span>"
    		                    + " Find a " + this.learningLanguage + " Restaurant Near You!!</button>"
    		                    + "</div>"
    		                    + "</div>"
    		                    
    		                    + "<div class=\"col-md-9\" style=\"text-align: center\">"
    		                    + "<input type=\"hidden\" id=\"email" + counter + "\" value=\"" + this.email + "\">"     
    		                    + "</div>"
    		                    
    		                    
    		                    + "</div>"
    		                    + "</div>"
    		                    

    		                    )                            
    		                    

    		            $('#messageBackground').addClass(this.learningLanguage);  
    		        	counter++;
    		        	return counter<5;
    		         });
    			
    			
    			
    		},"json");
    		
    		
    	    $(".userMatches").dialog({width:1250});
    	    
    	});
		
		
	},"json");
	
	
    // var user = [

    //  {
    //     name: 'Beth',
    //     learning_language: 'Spanish',
    //     country: 'spain',
    //     learning_language_id: '1',
    //     user_city: 'Baltimore',
    //     user_ability_level: 'Advanced',
    //     img: 'bird',
    //     user_bio: 'is simply dummy text of the printing and typesetting indust ry.asdkksk mc printing and typesetting industry. ms printing and typesetting industry. ksie dmsmakak ksksks kdhdhshsh sjsjsj'
    // }

    // {
    
    //     name: 'Bill',
     //    learning_language: 'Italian',
    //     country: 'italy',
    //     learning_language_id: '2',
    //     user_city: 'Dundalk',
    //     user_ability_level: 'Beginner',
    //     img: 'shark',
    //     user_bio: 'is simply dummy text of the printing and printing and typesetting industry. printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy tejksdhfsdjkf'
    
    //  }

     // {
     //     name: 'Forest',
     //     learning_language: 'French',
     //     country: 'france',
     //     learning_language_id: '3',
     //     user_city: 'Essex',
     //     user_ability_level: 'Advanced',
     //     img: 'turtle',
     //     user_bio: 'is simply dummy text of the printing and typesetting industry. Software like Aldus PageMaker including versions of Lorem Ipsum printing and typesetting industry. printing and typesetting industry. printing and typesetting industry. printing and typesetting industry.'
    
     // }

     // {
     //     name: 'John',
     //     learning_language: 'German',
     //     country: 'brazil',
     //     learning_language_id: '4',
     //     user_city: 'Columbia',
     //     user_ability_level: 'Advanced',
     //     img: 'pony',
     //     user_bio: 'is simply dummy text of the printing and typesetting industry. Software like Aldus PageMaker including versions of Lorem Ipsum printing and typesetting industry. printing and typesetting industry. printing and typesetting industry.'
    
     // }
   // ];


    
    /* var users = [

     {
        name: 'Beth',
        learning_language: 'Spanish',
<<<<<<< HEAD
=======
        native_language: 'English',
>>>>>>> 1cdb4c4bb960e2778fd1b081484a2c35d9ab87c9
        country: 'Spanish',
        email: 'dangelo0011@gmail.com',
        learning_language_id: '1',
        user_city: 'Baltimore',
        user_ability_level: 'Advanced',
        img: 'bird',
        user_bio: 'is simply dummy text of the printing and typesetting industry.asdkkskmcmsksiedmsmakak ksksks kdhdhshsh sjsjsj'
    },

     {
    
         name: 'Bill',
         learning_language: 'Italian',
<<<<<<< HEAD
=======
         native_language: 'French',
>>>>>>> 1cdb4c4bb960e2778fd1b081484a2c35d9ab87c9
         country: 'Italian',
         email: 'dangelo0011@gmail.com',
         learning_language_id: '2',
         user_city: 'Dundalk',
         user_ability_level: 'Beginner',
         img: 'shark',
         user_bio: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy tejksdhfsdjkf'
    
      },

     {
         name: 'Forest',
         learning_language: 'French',
<<<<<<< HEAD
=======
         native_language: 'Italian',
>>>>>>> 1cdb4c4bb960e2778fd1b081484a2c35d9ab87c9
         country: 'French',
         email: 'dangelo0011@gmail.com',
         learning_language_id: '3',
         user_city: 'Essex',
         user_ability_level: 'Advanced',
         img: 'turtle',
         user_bio: 'is simply dummy text of the printing and typesetting industry. Software like Aldus PageMaker including versions of Lorem Ipsum'
    
     },

     {
         name: 'John',
         learning_language: 'German',
         native_language: 'English',
         country: 'brazil',
         email: 'dangelo0011@gmail.com',
         learning_language_id: '4',
         user_city: 'Columbia',
         user_ability_level: 'Advanced',
         img: 'pony',
         user_bio: 'is simply dummy text of the printing and typesetting industry. Software like Aldus PageMaker including versions of Lorem Ipsum'
    
     }
<<<<<<< HEAD
     ];

         $.each(users, function(){
        $('.userMatches').append("<div id=\"indUserMatch\">"

                    +"<div class=\"container\" id=\""+this.country+"\">"
                    + "<div class=\"tab-container\">"
                    + "<div id=\"item-one\" style=\"display: block\">"
                    + "<div class=\"row about\">"
                    + "<div class=\"col-md-3 col-sm-12\">"
                    + "<div class=\"about_me text-center\">"
                    + "<h3>" + this.name + "</h3>"
                    + "<img height=\"165px\" width=\"165px\" class=\"center-block img-responsive\" src=\"img/" + this.img + ".png\" alt=\"\" />"
                                        
                    + "</div>"
                    + "</div>"
                    + "<div class=\"col-md-9 col-sm-6\">"
                    + "<h3><strong>About Me:</strong></h3>"
                    + "<p id=profileBio><strong>" +this.user_bio+"</strong></p>"
                    + "</div>"
                   
                    
                    + "<div class=\"col-md-3\" style=\"text-align: center\">"
                    + "<h4 class=\"about_title\" id=\"langandloc\"><strong>Native Language</strong></h4>"
                    + "<div class=\"progress-bar-linear\">"
                    + "<p><strong>" + this.native_language + "</strong></p>"
                    + "<div class=\"progress-bar\">"
                    + "<span data-percent=\"100\"></span>"
                    + "</div>"
                    + "</div>"
                    + "</div>"
                    + "<div class=\"col-md-3\" style=\"text-align: center\">"
                    + "<h4 class=\"about_title\" id=\"langandloc\"><strong>Learning Language</strong></h4>"
                    + "<div class=\"progress-bar-linear\">"
                    + "<p><strong>" + this.learning_language + "</strong></p>"
                    + "<div class=\"progress-bar\">"
                    + "<span data-percent=\"100\"></span>"
                    + "</div>"
                    + "</div>"
                    + "</div>"
                    + "<div class=\"col-md-3\" style=\"text-align: center\">"
                    + "<h4 class=\"about_title\" id=\"langandloc\"><strong>Location</strong></h4>"
                    + "<div class=\"progress-bar-linear\">"
                    + "<p id=\"userlangandloc\" class=\"progress-bar-text\"><strong>" 
                    + this.user_city + ", " + this.user_state + "</strong></p>"
                    + "<div class=\"progress-bar\">"
                    + "<span data-percent=\"100\"></span>"
                    
                    + "</div>"
                    + "</div>"
                    + "</div>"
                    
                    + "<div class=\"col-md-3\"></div>"
                    + "<div class=\"col-md-4\">"
                    + "<button id=\"sendEmailButton\" class=\"btn btn-info btn-lg\" style=\"display: block; margin: 0 auto;\">"
                    + "<a href=\"\sendmessage.html\"></a>"
                    + "<span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span>"
                    + " Send " + this.name + " a message!!</button>"
                    + "</div>"
                    + "<div class=\"col-md-1\"></div>"
                    + "<div class=\"col-md-4\">"
                    + "<button id=\"getRestaurantButton\" class=\"btn btn-info btn-lg\" style=\"display: block; margin: 0 auto;\">"
                    + "<span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span>"
                    + " Find a " + this.learning_language + " Restaurant Near You!!</button>"
                    + "</div>"
                    + "</div>"
                    + "</div>"
                    + "</div>"
                    
                    

                    )                            
                    

            $('#messageBackground').addClass(this.country);
                
         });
=======
     ];*/
	$("#emailButton").click(function(){
		alert("Your message has been sent!")
		console.log("inside submit button");
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
				console.log("Email Sent?");
				location.href = "/profile.html";
			},
			error: function(){
				console.log("error");
			}
		});
	});
         
>>>>>>> 3c5548633f6a460a20522808efae180e74f16878
         
});
