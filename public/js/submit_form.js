'use strict';//??????

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#type_submit').click(submit_type);

	//$('#colorBtn').click(randomizeColors);
}

function submit_type(result){
  console.log(result);
  var copy_result = result;
  console.log(copy_result);
  for(var i = 0; i < 2; i++){
    console.log(copy_result[i][0].name);
    console.log(copy_result[i][0].value);

  }
    //console.log(copy_result[i]);
  //}
  
}

$("#type_submit").click(function(e) {
	e.preventDefault();

	// obj = eval ("(" + result_form + ")");
	//$.getJSON('data.json', function(json) {
      //  console.log(json);
    //});
    $.get("/types/submit_type", submit_type);

	//for(var i =0; i<result_form['Types'].length; i++){
	//	console.log(result_form['Types'].length);
	//}
	//var name = "Housing Type";
	//var val = $("select").val();
	//var radio = $("input[type='radio']:checked").val();
	//console.log(radio);
});