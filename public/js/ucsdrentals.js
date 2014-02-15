
function validateEmail()
{
	console.log("ss");
	var x=document.forms["login"]["email"].value;
	console.log(x);
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  	{
  		alert("Not a valid e-mail address");
  		return false;
 	}
 	return true;
}



$("#login_btn").click(function() {
  console.log("xxx");
  if(validateEmail())
  	window.location='/menu';
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

$(".submit").click(function(){
	window.location="../newProfile";
})

$("#ss").click(function(){
	window.location="../matches";
})


$("#type_submit").click(function(e) {
	e.preventDefault();

	var result_form = require(../../result.json);
	var obj = eval ("(" + result_form + ")");
	//$.getJSON("../../result.json", function(result_form) {
    	console.log(obj); // this will show the info it in firebug console
    //});

	//for(var i =0; i<result_form['Types'].length; i++){
	//	console.log(result_form['Types'].length);
	//}
	var name = "Housing Type";
	var val = $("select").val();
	var radio = $("input[type='radio']:checked").val();
	console.log(radio);
})