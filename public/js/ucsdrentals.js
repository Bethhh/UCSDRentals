

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
 	
    //$.get("/user", login);


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
/*
function login(result){
	var email = document.getElementById('email');

	var password = document.getElementById('password');
 		var users  = result;
 		var errorMsg;
	 	for(var j = 0; j < users.length; j++){
	      if(users[j]['email'] == email.value && users[j]['pwd']!=passworifd.value){
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
 	*/
//action="/menu"onsubmit="return validateInfo();">
/*
$("#login_btn").click(function() {
  if (validateInfo()){
  	window.location='/menu';
  }
});
*/

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

$(".listItems").click(function(){
	  var e = document.getElementById("existing_buttons");
	  e.style.display = 'block'; 
	  var d = document.getElementById("existing_list");
	  d.style.display = 'none';
});

$("#update").click(function(f){
	  f.preventDefault();`
      var e = document.getElementById("existing_buttons");
	  e.style.display = 'none'; 
	  var e = document.getElementById("existing_list");
	  e.style.display = 'block';
});