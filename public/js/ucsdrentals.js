

function validateInfo()
{
 	var email = document.getElementById('email');
 	var filter = /^([a-zA-Z0-9_\.\-])+\@ucsd.edu+$/;
	var password = document.getElementById('password');
	var errors = [];

	if (!filter.test(email.value)){
		errors[errors.length] = "You must enter a valid UCSD email address!";
	}
 	if (password.value == ''){
 		errors[errors.length] = "You must enter a password!";
 	}
    var msg = "";
 	if (errors.length > 0){
 		//var msg = "Please Enter Valid Data...\n";
		for (var i = 0; i<errors.length; i++){
			var numError = i+1;
			msg += "\n" + numError + ". " + errors[i];
		}
 		alert(msg);
 		return false;
 	}

 	
    $.get("/user", login);





  /*  function login(result){
   	 alert("haha");
     return false;
   }*/


   //////////////////////////////check user
   //$.post("/user", {"email": email.value, "pwd":password.value}, login );




  /*function afterQuery(err, users) {
    if(err) console.log(err);
    console.log(users[0]);
    //res.json(projects[0]);
    window.location='/menu';
  }*/
}

function login(result){
	var email = document.getElementById('email');

	var password = document.getElementById('password');
 		var users  = result;
 		var errorMsg;
	 	for(var j = 0; j < users.length; j++){
	      if(users[j]['email'] == email.value && users[j]['pwd']!=password.value){
	      	errorMsg = "Your password is wrong!";
	        return false;
	      }
	      else if(users[j]['email'] == email.value && users[j]['pwd']==password.value){
	      	window.location='/menu';
	        return true;
	      }
	    }
	    errorMsg = "User does not exist!";
	    alert(errorMsg);
 		return false;

 	}
//action="/menu"onsubmit="return validateInfo();">

$("#login_btn").click(function() {
  validateInfo();
});



$("#createNew").click(function() {
  $.get("/oneProfile", getProfileForm);

  window.location='/newProfile';
});

function getProfileForm(result){
	var copy_result = result;
	console.log("getprofileform");
	console.log(copy_result);
}

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
	//window.location='../types';
})

$("#property_btn").click(function() {
	//window.location='../properties';
})

$("#rent_btn").click(function() {
	//window.location='../rent';
})

$("#address_btn").click(function() {
	//window.location='../address';
})

$("#date_btn").click(function() {
	//window.location='../date';
})

$("#other_btn").click(function() {
	//window.location='../other';
})

//$(".submit").click(function(){
//	window.location="../newProfile";
//})

//$("#ss").click(function(){
//	window.location="../matches";
//})



