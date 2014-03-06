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
  $('#date_submit').click(submit_form_date);
  $('#other_submit').click(submit_form_other);
  $('#property_submit').click(submit_form_property);
  $('#address_submit').click(submit_form_address);
  $('#first_submit').click(submit_form_name);

  //$('#ss').click(submit_form);

	//$('#colorBtn').click(randomizeColors);
}

/*function submit_form(e){
  e.preventDefault();
  $.get("/submit_type", submit_)
}*/

function submit_form_type(e) {
	e.preventDefault();

	// obj = eval ("(" + result_form + ")");
	//$.getJSON('data.json', function(json) {
      //  console.log(json);
    //});
  $.get("/submit_type/Types", submit_type);
  $("#type_btn").removeClass("btn-danger");
  $("#type_btn").addClass("btn-success");
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
  $("#rent_btn").removeClass("btn-danger");
  $("#rent_btn").addClass("btn-success");
}

function submit_form_property(e){
  e.preventDefault();
  $.get("/submit_type/Property", submit_type);
  $("#property_btn").removeClass("btn-danger");
  $("#property_btn").addClass("btn-success");
}

function submit_form_other(e){
  e.preventDefault();
  $.get("/submit_type/Other", submit_type);
  $("#other_btn").removeClass("btn-danger");
  $("#other_btn").addClass("btn-success");
}
function submit_form_date(e){
  e.preventDefault();
  $.get("/submit_type/Dates", submit_type);
  $("#date_btn").removeClass("btn-danger");
  $("#date_btn").addClass("btn-success");
}
function submit_form_address(e){
  e.preventDefault();
  $.get("/submit_type/Address", submit_type);
  $("#address_btn").removeClass("btn-danger");
  $("#address_btn").addClass("btn-success");
}
function submit_form_name(e){
  e.preventDefault();
  var name = document.getElementById("pname").value;
  var radio = document.getElementsByName("Profile Type");
  var type;
  if(radio[0].checked){
    type = radio[0].value;
  }else{
    type = radio[1].value;
  }
  console.log(name+" type="+type);
  $.get("/submit_type/init/"+name+" " +type, submit_name);
}
function submit_name(result){
  $.get("/user/get_prof", update_pname);
}
function update_pname(result){
  console.log(result);
  if(result != ""){
    if($("#prof_label") != undefined){
      $("#prof_label")[0].innerHTML = result;
    }
    console.log("there");
  }
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
      if(r[0])
      copy_result[i].value = r[0].options[r[0].selectedIndex].value;
      copy_result[i].order = order++;
      //copy_result[i].group = "Types";
      if(copy_result[i].value != ""){
        copy_result[i].selected = 1;

      }
    }

    //type_data = copy_result;
  }
  console.log("copy");
  console.log("copy"+copy_result[0].group);
  console.log(copy_result);
  //
 // $.get("/writeTypes", writeTypes);
  for( var k = 0; k < copy_result.length; k++){
    $.post("/submit_type/save/"+copy_result[0].group, copy_result[k], saveTypes);
  }
  $.get("submit_type/done/" + copy_result[0].group, saveTypes);

}

function saveTypes(result){
  //console.log("result="+result);

}

/*function writeTypes(result){

}*/

$("#ss").click(function(){
  $.get("/submit_type/submit/submit", submitDone);
  //if(type_flag && rent_flag && other_flag && property_flag && address_flag && date_flag){

    //alert("There are Matches!!!");
    //window.location="../matches";
  //}else{
    //alert("You have to enter all the information to submit!\n Or you can click Save!");
  //}
});

function submitDone(result){
  console.log("log");
  console.log(result);
  if(result == "unfinished"){
    alert("You have to enter all the information to submit!\n Or you can click Save!");
  }else{
    //$.get("/submit_type/submit/matches", submitMatches);
    alert("There are Matches!!!");
    window.location="../matches";
  }
}

function submitMatches(result){
    alert("There are Matches!!!");
    window.location="../matches";
}
