$( function() {
  $("#dialog1").hide();
  $("#popupLI").click(function() {
	  console.log("inside popupLI button");
      $("#dialog1").dialog();
      }); 
    });

 $( function() {
  $("#dialog2").hide(); 
  $("#popupCU").click(function() {
      $("#dialog2").dialog()
      }); 

  $("#dialog2a").hide();
  $("#next1").click(function(){
    $("#dialog2").remove()
      });
    
  $("#next1").click(function() {
    $("#dialog2a").dialog({width:350})
    });
  

  $("#dialog2b").hide();
  $("#next2").click(function() {
    $("#dialog2a").remove()
    });
  
  $("#next2").click(function() {
	    $("#dialog2b").dialog()
	    });

  $("#next2").click(function() {
    $("#dialog2b").dialog({width:900})
    });
  
 $("#dialog2c").hide();
  $("#next3").click(function() {
    $("#dialog2b").remove()
    });

  $("#next3").click(function() {
    $("#dialog2c").dialog({width:1000})
    });

  
});

  
// put in function to close/hide previous step
  $( function() {
  $("#dialog3").hide();
  $("#popupDU").click(function() {
      $("#dialog3").dialog()
      }); 
    });
  $( function() {
  $("#dialog4").hide();
  $("#popupUU").click(function() {
      $("#dialog4").dialog()
      }); 
    });

 


$( function() {
  $("#dialog1").hide();
  $("#popupLI2").click(function() {
      $("#dialog1").dialog()

    });
   });

$( function() {
  $("#dialog2").hide();
  $("#popupCU2").click(function() {
      $("#dialog2").dialog()
      }); 
    });

$( function() {
  $("#dialog6").hide();
  $("#popupCR").click(function() {
      $("#dialog6").dialog()
      }); 
    });



// //jQuery time
// var current_fs, next_fs, previous_fs; //fieldsets
// var left, opacity, scale; //fieldset properties which we will animate
// var animating; //flag to prevent quick multi-click glitches

// $(".next").click(function(){
//   if(animating) return false;
//   animating = true;
  
//   current_fs = $(this).parent();
//   next_fs = $(this).parent().next();

  
//   //show the next fieldset
//   next_fs.show(); 
//   //hide the current fieldset with style
//   current_fs.animate({opacity: 0}, {
//     step: function(now, mx) {
//       //as the opacity of current_fs reduces to 0 - stored in "now"
//       //1. scale current_fs down to 80%
//       scale = 1 - (1 - now) * 0.2;
//       //2. bring next_fs from the right(50%)
//       left = (now * 50)+"%";
//       //3. increase opacity of next_fs to 1 as it moves in
//       opacity = 1 - now;
//       current_fs.css({
//         'transform': 'scale('+scale+')',
//         'position': 'absolute'
//       });
//       next_fs.css({'left': left, 'opacity': opacity});
//     }, 
//     duration: 800, 
//     complete: function(){
//       current_fs.hide();
//       animating = false;
//     }, 
//     //this comes from the custom easing plugin
//     easing: 'easeInOutBack'
//   });
// });

// $(".previous").click(function(){
//   if(animating) return false;
//   animating = true;
  
//   current_fs = $(this).parent();
//   previous_fs = $(this).parent().prev();
  
  
  
//   //show the previous fieldset
//   previous_fs.show(); 
//   //hide the current fieldset with style
//   current_fs.animate({opacity: 0}, {
//     step: function(now, mx) {
//       //as the opacity of current_fs reduces to 0 - stored in "now"
//       //1. scale previous_fs from 80% to 100%
//       scale = 0.8 + (1 - now) * 0.2;
//       //2. take current_fs to the right(50%) - from 0%
//       left = ((1-now) * 50)+"%";
//       //3. increase opacity of previous_fs to 1 as it moves in
//       opacity = 1 - now;
//       current_fs.css({'left': left});
//       previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
//     }, 
//     duration: 800, 
//     complete: function(){
//       current_fs.hide();
//       animating = false;
//     }, 
//     //this comes from the custom easing plugin
//     easing: 'easeInOutBack'
//   });
// });

// $(".submit").click(function(){
//   return false;
  
// })