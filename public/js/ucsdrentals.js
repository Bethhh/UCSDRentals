
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

Handlebars.registerHelper('ifeq', function (a, b, options) {
	  console.log(a);
      if (a == b) { return options.fn(this); }
});

$("#type_btn").click(function() {
	window.location='../types';
})