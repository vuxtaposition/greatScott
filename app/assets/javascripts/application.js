//= require jquery
//= require jquery_ujs
//= require_tree .

	
	
	// CONTACT FORM
	function runMe(){				
	
		//Get values from the input fields
	var myMail = document.getElementById("email").value;
	var myFname = document.getElementById("fname").value;
	var myLname = document.getElementById("lname").value;

  	//check first name last and email 
  	if( myFname == ""){
  		
  		  alert("Your fields can not be empty !");
  		  //display pre-made paragraph
  		  document.getElementById("fnameField").style.display = "block"; 
  		  return false;
  		  
  	}else if( myLname == ""){
  		
  		  alert("Your fields can not be empty !");
  		  //display pre-made paragraph
  		  document.getElementById("lnameField2").style.display = "block"; 
  		  return false;
  		  
  	}else if( myMail == ""){
  		
  		  alert("Your fields can not be empty !");
  		   //display pre-made paragraph
  		  document.getElementById("emailField3").style.display = "block"; 
  		
  	}
  		
  	else{
  		
  		alert("Thank you !");
  	
  		//submit form and return a message
    	var myMail = document.getElementById("email").value = "";
    	var myFname = document.getElementById("fname").value = "";
    	var myLname = document.getElementById("lname").value ="";
    	document.getElementById("form_wrapper").innerHTML = "<h3>Thank You!</h3> Your mail has been sent.<br>We will respond as soon as we can.";
  
  	}
	
	}





