//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function(){
	
	//display menu button in mobile
    $("#menuButton").click(function(){
        $('.navbar').toggle();

    });
	
		
		
		//create a hover over images to display a bigger image. Alright in 1990 maybe!!!!
		
   /* $(".theImage2").mouseover(function(){
    $("#showMe").fadeIn(1500);
    });	
    
    $(".theImage2").mouseout(function(){
    $("#showMe").fadeOut(1500);
    });	*/
});
