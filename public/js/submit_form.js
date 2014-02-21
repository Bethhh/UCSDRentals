'use strict';//??????

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#type_submit').click(submit_form_type);
  $('#rent_submit').click(submit_form_rent);

	//$('#colorBtn').click(randomizeColors);
}



function submit_form_type(e) {
	e.preventDefault();

	// obj = eval ("(" + result_form + ")");
	//$.getJSON('data.json', function(json) {
      //  console.log(json);
    //});
  $.get("/submit_type/Types", submit_type);

	//for(var i =0; i<result_form['Types'].length; i++){
	//	console.log(result_form['Types'].length);
	//}
	//var name = "Housing Type";
	//var val = $("select").val();
	//var radio = $("input[type='radio']:checked").val();
	//console.log(radio);
}

function submit_form_rent(e){
  e.preventDefault();
  $.get("/submit_type/Rent", submit_type);
}

function submit_form_property(e){
  e.preventDefault();
  $.get("/submit_type/Property", submit_type);
}

function submit_form_other(e){
  e.preventDefault();
  $.get("/submit_type/Other", submit_type);
}
function submit_form_date(e){
  e.preventDefault();
  $.get("/submit_type/Date", submit_type);
}
function submit_form_address(e){
  e.preventDefault();
  $.get("/submit_type/Address", submit_type);
}

function submit_type(result){
  var copy_result = result;
  var order = 0;

  for(var i = 0; i < copy_result.length; i++){
    //console.log(copy_result[i].name);
    if(copy_result[i].type == "radio"){
      var r = document.getElementsByName(copy_result[i].label);
      copy_result[i].order = order++;
      //copy_result[i].group = "Types";
      for(var j = 0; j < r.length; j++){
      	if(r[j].checked){
          copy_result[i].value = r[j].value;
          copy_result[i].selected = 1;
          break;
        }
      }
    }else if(copy_result[i].type == "dropdown"){
      var r = document.getElementsByName(copy_result[i].label);
      copy_result[i].value = r[0].options[r[0].selectedIndex].value;
      copy_result[i].order = order++;
      //copy_result[i].group = "Types";
      if(copy_result[i].value != ""){
        copy_result[i].selected = 1;

      }
    }

    //type_data = copy_result;
  }
  console.log(copy_result);
  //
 // $.get("/writeTypes", writeTypes);
  $.post("/submit_type/"+copy_result[0].group+"/save", copy_result, saveTypes);

}

function saveTypes(result){
  $("#type_btn").removeClass("btn-danger");
  $("#type_btn").addClass("btn-success");
}

/*function writeTypes(result){

}*/
