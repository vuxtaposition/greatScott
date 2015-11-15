//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function(){
	
	//display menu button in mobile
    $("#menuButton").click(function(){
        $('.navbar').toggle();
    });
	
     
    $(".cartTable")
    .css("margin-left",-$(this).width())
    .fadeIn('slow')
    .animate({
        marginLeft:0
    }, 400);
		
		
		
		 $("#form_wrapper").hide(0).delay(100).fadeIn(2000);
		 
		 
		 
		 
		 
		//create a hover over images to display a bigger image in show product page. Alright in 1990 maybe!!!!
		
   /* $(".theImage2").mouseover(function(){
    $("#showMe").fadeIn(1500);
    });	
    
    $(".theImage2").mouseout(function(){
    $("#showMe").fadeOut(1500);
    });	
  
    
    
     //$(".cartTable").hide(0).delay(100).fadeIn(1000);
     
     
    */
});
