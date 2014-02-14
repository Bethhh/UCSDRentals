
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

$("#type_submit").click(function(e) {
	e.preventDefault();
	var name = "Housing Type";
	var val = $('input[name="'+name+'"]').val();
	console.log(val);
})