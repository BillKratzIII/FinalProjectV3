$(function() {
    
    var users = [{
        name: 'Beth',
        learning_language: 'Spanish',
        country: 'spain',
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
        learning_language_id: '4',
        user_city: 'Columbia',
        user_ability_level: 'Advanced',
        img: 'pony',
        user_bio: 'is simply dummy text of the printing and typesetting industry. Software like Aldus PageMaker including versions of Lorem Ipsum'
    
    }
    ];

    $.each(users, function(){
        $('.matches').append("<div class=\"well well-lg\"> Name:" + this.name + "<div class=\"row\" id=\""+ this.country+"\">"
                    + "<div class=\"panel\" >"
                    + "<div class=\"col-md-4\">Location: " + this.user_city + "</div>"
                    + "<div class=\"col-md-8\"> Language:" + this.learning_language + "</div>"
                    + "</div>"
                    + "<div class=\"row\" id=\" " + this.country + "\">"
                    + "<div class=\"col-md-4\"><img src=\"img/" + this.img + ".PNG\" class=\"img-responsive\" height=\"100px\" width=\"100px\"/></div>"
                    + "<div class=\"col-md-8\">" + this.user_bio + "</div>"
                    + "</div>"
                    + "</div>"
                    + "</div>"

                    )
        $('#messageBackground').addClass(this.country);
                }
        )}
    );



  

