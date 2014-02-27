
$("#setting_save").click(save_user);

function save_user(e){
  e.preventDefault();
  $.get("/user", grabInfo);
}

function grabInfo(result){
  console.log("grabing");
  console.log(result["User"]);
  var copy_result = result;

  for(var i = 0; i < copy_result["User"].length; i++){
      var r = document.getElementsByName(copy_result["User"][i].label_id);
      copy_result["User"][i].value=r[0].value;
  }
  console.log(copy_result["User"][0]);
  //
 // $.get("/writeTypes", writeTypes);
  $.post("/user/save", copy_result, saveUser);
}
function saveUser(result){
	window.location = "/menu";
}