//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function(){
	
	//display menu button in mobile
    $("#menuButton").click(function(){
        $('.navbar').toggle();

    });
	
		
    $("#showImageBig").mouseover(function(){
    $("#showMe").fadeIn('slow');
    });	
    
    $("#showImageBig").mouseout(function(){
    $("#showMe").fadeOut('slow');
    });	
});

