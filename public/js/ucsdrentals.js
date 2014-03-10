$(document).ready(function() {
	$.get("/user/get_name", update_name);
	
});


function update_name(result){
	if(result != ""){
	  if($(".user_name")[0] != undefined){
	  	$(".user_name")[0].innerHTML = "Hello, "+result;
	  }
	  console.log("here");
	}
}

function validateUser(){//originally use action="/login" method="post", successfully get the form data and to req.body, but no callback to call alert
	var email = document.getElementById('email').value.toLowerCase();
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

		window.location='/menu';///'+result;
	}
}

/*
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
 	
}*/

function signupValidation(){
	console.log("in checking sign up");
	var email = document.getElementById('emaill').value.toLowerCase();
	var password1 = document.getElementById('password1').value;
	var password2 = document.getElementById('password2').value;
	var json = { "email":email, "password1":password1, "password2":password2 };
	$.post('/login/signup', json, checkSignUp);
}

function checkSignUp(result){
    var errorMsgs = ["nopwd","invalidemail","accountexist","wrongpwd"];
    if(result == errorMsgs[0]){
		alert("Please enter your password!");
	}else if(result == errorMsgs[1]){
		alert("Please enter a valid UCSD email address!");
	}else if(result == errorMsgs[2]){
		alert("This account already exist!\n Please log in!");
	}else if(result == errorMsgs[3]){
		alert("Your passwords don't match!\n Please reenter your password!");
	}else{
		window.location='/setting';
		//$.get('/setting', putEPBack);
	}
	
}

/*function putEPBack(){
	$.get('/setting/set', setting_done);
}
function setting_done(result){
  window.location="/setting";
  console.log("the cookie");
  console.log(result[0]);
  var e = document.getElementsByName("email");
  e.value = result[0];
  var p = document.getElementsByName("pwd");
  p.value = result[1];

}*/


$("#signup").click(function() {
  //console.log("should gogogogo");
  window.location='/signup';
  
});

/*$("#signup_btn").click(function() {
  //console.log("should gogogogo");
  //window.location='/signup';
  signupValidation();
  
});*/



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




//$("#logout").click(function()  {
//	window.location='/';
//});


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

$("#logout").click(function(f){
	f.preventDefault();


	$.get('/login/logout', afterOut);
});

$(".logoutgroup").click(function(f){
	f.preventDefault();

	$.get('../login/logout', afterOut);
});

function afterOut(result){
  console.log(result);
  window.location="/";
}