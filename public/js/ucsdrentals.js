
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

$("#type_submit").click(function(e) {
	e.preventDefault();
	var name = "Housing Type";
	var val = $("select").val();
	var radio = $("input[type='radio']:checked").val();
	console.log(radio);
})