

    $('#createRestaurantForm').validate({ // initialize the plugin
        rules: {
            name: {
                required: true,
                minlength: 2
                
            },
            streetAddress: {
                required: true,
                minlength: 4
            },
            city: {
                required: true,
                minlength: 2
                
            },
            state: {
                required: true,
                minlength: 2                
                
            },
            zip: {
                required: true,
                minlength: 5
                
            },
            email: {
            	
               email: true
               
                
            },
            password: {
                required: true,
                minlength: 2
                
            },
            confirmPassword: {
            	required: true,
                equalTo: "#password"
                
                
            },
            cuisine: {
                required: true
                
                
            }
        },
        messages: {
        	name: "Enter Name of Restaurant",
        	streetAddress: "Street Address Must Be At Least 4 Characters",
        	city: "Enter Valid City Name",
        	state: "Enter State Acronym",
        	zip: {
        		required: "Enter Name of Restaurant",
        		minlength: "Enter a valid zip code"
        	},
        	confirmPassword: {
        		required: "Field is Required",
        		equalTo: "Must Be Identical to Password Field"
        	},
        	
        	cuisine: "You Must Indicate Type of Cuisine Served"
        }
    });//create restaurant form

    $('#createUserForm').validate({ // initialize the plugin
        rules: {
            name: {
                required: true,
                minlength: 2
                
            },
            email: {
            	
                email: true
                
                 
             },
             password: {
                 required: true,
                 minlength: 2
                 
             },
             confirmPassword: {
             	required: true,
                 equalTo: "#password"
                 
                 
             },
            streetAddress: {
                required: true,
                minlength: 4
            },
            city: {
                required: true,
                minlength: 2
                
            },
            state: {
                required: true,
                minlength: 2                
                
            },
            zip: {
                required: true,
                minlength: 5
                
            },
            ageRangeId: {
            	
            	required: true
            },
            
            gender: {
            	
            	required: true
            },
            
            firstLanguageId: {
            	
            	required: true
            },
            
            learningLanguageId: {
            	
            	required: true
            },
            
            skillLevelId: {
                required: true
                
                
            }
        },//rules
        messages: {
        	name: "Please Enter Your Name",
        	streetAddress: "Street Address Must Be At Least 4 Characters",
        	city: "Please Enter Valid City Name",
        	state: "Enter State Acronym",
        	zip: {
        		required: "Please Enter Your Zip Code",
        		minlength: "Enter a Valid Zip Code"
        	},
        	confirmPassword: {
        		required: "Field is Required",
        		equalTo: "Must Be Identical to Password Field"
        	},
        	ageRangeId: "Field is Required",
            
            gender: "Field is Required",
            
            firstLanguageId: "Field is Required",
            
            learningLanguageId: "Field is Required",
            
            skillLevelId: "Field is Required"
        	
        	
        }//messages
    });
