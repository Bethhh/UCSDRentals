function validateUser(){//originally use action="/login" method="post", successfully get the form data and to req.body, but no callback to call alert
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var json = { "email":email, "password":password };
	$.post('/login', json, checkLogIn);
}
function checkLogIn(result){
	var errorMsgs = ["nopwd","invalidemail","noaccount","wrongpwd"];
	if(result == errorMsgs[0]){
		alert("Please enter a password!");
	}else if(result == errorMsgs[1]){
		alert("Please enter a valid UCSD email address!");
	}else if(result == errorMsgs[2]){
		alert("Your account does not exist!\n Please sign up!");
	}else if(result == errorMsgs[3]){
		alert("Your password is incorrect!\n Please reenter your password!");
	}else{
		window.location='/menu/'+result;
	}
}


function validateInfo()
{
 	var email = document.getElementById('email');
 	var filter = /^([a-zA-Z0-9_\.\-])+\@ucsd.edu+$/;
	var password = document.getElementById('password');
	var errors = [];

	if (!filter.test(email.value)){
		errors[errors.length] = "You must enter a valid UCSD email address!";
	}else if (password.value == ''){
 		errors[errors.length] = "You must enter a password!";
 	}else{
 		window.location='/menu';
 		console.log("should go");
 		return true;
 	}
    var msg = "";
 	if (errors.length > 0){
 		//var msg = "Please Enter Valid Data...\n";
		for (var i = 0; i<errors.length; i++){
			var numError = i+1;
			msg += "\n" + errors[i];
		}
 		alert(msg);
 		return false;
 	}
 	
}

function signupValidation(){
	var email = document.getElementById('emaill');
	var p1 = document.getElementById('password1');
	var p2 = document.getElementById('password2');
	var filter = /^([a-zA-Z0-9_\.\-])+\@ucsd.edu+$/;
	var errors = [];

	if (!filter.test(emaill.value)){
		errors[errors.length] = "You must enter a valid UCSD email address!";
	}else if ((p1.value+p2.value)==""){
		errors[errors.length] = "Please input your password!";
	}else if (p1.value != p2.value){
		errors[errors.length] = "Please confirm you input the same password!";
	}else {
		window.location = "/menu";
		//return true;
	}

	var msg = "";
 	if (errors.length > 0){
 		//var msg = "Please Enter Valid Data...\n";
		for (var i = 0; i<errors.length; i++){
			var numError = i+1;
			msg += "\n" + errors[i];
		}
 		alert(msg);
 		return false;
 	}
}


$("#signup").click(function() {
  //console.log("should gogogogo");
  window.location='/signup';
  
});

$("#signup_btn").click(function() {
  //console.log("should gogogogo");
  window.location='/signup';
  
});



$("#createNew").click(function() {
 // $.get("/oneProfile", getProfileForm);

  window.location='/newp';
});

/*function getProfileForm(result){
	var copy_result = result;
	console.log("getprofileform");
	console.log(copy_result);
}*/

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




$("#contact").click(function(){
	var msg=prompt("Enter your message here:");


});

$("#detail_back").click(function(){
	window.location = '../matches';


});

$(".m").click(function(){
    window.location = '../matches';
});



$("#update").click(function(f){
	  f.preventDefault();
      var e = document.getElementById("existing_buttons");
	  e.style.display = 'none'; 
	  var e = document.getElementById("existing_list");
	  e.style.display = 'block';
});