
$("#createNew").click(function() {
  window.location='/newProfile';
});

$("#viewExisting").click(function() {
  window.location='/existing';
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


$("#type_submit").click(function(e) {
	e.preventDefault();
	var name = "Housing Type";
	var val = $("select").val();
	var radio = $("input[type='radio']:checked").val();
	console.log(radio);
})