


function validateInfo()
{
 	var email = document.getElementById('email');
 	var filter = /^([a-zA-Z0-9_\.\-])+\@ucsd.edu+$/;
	var password = document.getElementById('password');
	var errors = [];

	if (!filter.test(email.value)){
		errors[errors.length] = "You must enter a valid UCSD email address.";
	}
 	if (password.value == ''){
 		errors[errors.length] = "You must enter a password.";
 	}
 	if (errors.length > 0){
 		var msg = "Please Enter Valid Data...\n";
		for (var i = 0; i<errors.length; i++){
			var numError = i+1;
			msg += "\n" + numError + ". " + errors[i];
		}
 		alert(msg);
 		return false;
 	}
 	return true;
}


$("#login_btn").click(function() {
  console.log("xxx");
  //$().(.click);
});



$("#createNew").click(function() {
  window.location='/newProfile';
});

$("#viewExisting").click(function() {
  window.location='/existing';
});

$("#about").click(function() {
  window.location='/about';
});


$("#logout").click(function()  {
	window.location='/';
});


function grabTypeForm(){
	
}

$("#type_btn").click(function() {
	window.location='../types';
})

$("#property_btn").click(function() {
	window.location='../properties';
})

$("#rent_btn").click(function() {
	window.location='../rent';
})

$("#address_btn").click(function() {
	window.location='../address';
})

$("#date_btn").click(function() {
	window.location='../date';
})

$("#other_btn").click(function() {
	window.location='../other';
})

//$(".submit").click(function(){
//	window.location="../newProfile";
//})

//$("#ss").click(function(){
//	window.location="../matches";
//})



