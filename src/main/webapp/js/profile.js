$(function() {
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
                
                + "<div class=\"col-md-4\" style=\"text-align: center\">"
                + "<h4 class=\"about_title\" id=\"langandloc\"><strong>Language</strong></h4>"
                + "<div class=\"progress-bar-linear\">"
                + "<p><strong>" + user.learningLanguage + "</strong></p>"
                + "<div class=\"progress-bar\">"
                + "<span data-percent=\"100\"></span>"
                + "</div>"
                + "</div>"
                + "</div>"
                + "<div class=\"col-md-4\" style=\"text-align: center\">"
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

        

});                  
    
$( function() {
  $(".userMatches").hide(); 
  $("#findMatchButton").click(function() {
      $(".userMatches").dialog({width:1250})
      }); 

});  

 
$(function() {
    
     var users = [

     {
        name: 'Beth',
        learning_language: 'Spanish',
        country: 'spain',
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
         country: 'italy',
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
         country: 'france',
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
         country: 'brazil',
         email: 'dangelo0011@gmail.com',
         learning_language_id: '4',
         user_city: 'Columbia',
         user_ability_level: 'Advanced',
         img: 'pony',
         user_bio: 'is simply dummy text of the printing and typesetting industry. Software like Aldus PageMaker including versions of Lorem Ipsum'
    
     }
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
                    + "<div id=\"messagePic\">"
                    + "<img src=\"img/" + this.img + ".png\" class=\"img-responsive\" alt=\"\" />"
                    + "</div>"
                    + "</div>"
                    + "</div>"
                    + "<div class=\"col-md-9 col-sm-6\">"
                    + "<h3><strong>About Me:</strong></h3>"
                    + "<p id=profileBio><strong>" +this.user_bio+"</strong></p>"
                    + "</div>"
                    
                    + "<div class=\"col-md-4\" style=\"text-align: center\">"
                    + "<h4 class=\"about_title\" id=\"langandloc\"><strong>Language</strong></h4>"
                    + "<div class=\"progress-bar-linear\">"
                    + "<p><strong>" + this.learning_language + "</strong></p>"
                    + "<div class=\"progress-bar\">"
                    + "<span data-percent=\"100\"></span>"
                    + "</div>"
                    + "</div>"
                    + "</div>"
                    + "<div class=\"col-md-4\" style=\"text-align: center\">"
                    + "<h4 class=\"about_title\" id=\"langandloc\"><strong>Location</strong></h4>"
                    + "<div class=\"progress-bar-linear\">"
                    + "<p id=\"userlangandloc\" class=\"progress-bar-text\"><strong>" 
                    + this.user_city + ", " + this.user_state + "</strong></p>"
                    + "<div class=\"progress-bar\">"
                    + "<span data-percent=\"100\"></span>"
                    
                    + "</div>"
                    + "</div>"
                    + "</div>"
                    
                    + "<div class=\"col-md-4\" style=\"text-align: center\">"
                    + "<button id=\"sendEmailButton\" class=\"btn btn-info btn-lg\" role=\"alert\">"
                    + "<a href=\"\sendmessage.html\"></a>"
                    + "<span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span>"
                    + " Send " + this.name + " a message!!</button>"
                    + "</div>"
                    + "<div class=\"col-md-4\" style=\"text-align: center\">"
                    + "<button id=\"sendEmailButton\" class=\"btn btn-info btn-lg\" role=\"alert\">"
                    + "<span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span>"
                    + " Find a " + this.learning_language + " Restaurant Near You!!</button>"
                    + "</div>"
                    + "</div>"
                    + "</div>"
                    + "</div>"
                    

                    )
                    
         	$("#sendEmailButton").click(function(){
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
                    

                    $('#messageBackground').addClass(this.country);
                
         });
         
});

