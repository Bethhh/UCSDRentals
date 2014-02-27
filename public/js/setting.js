

$("#setting_save").click(save_user);

function save_user(e){
  e.preventDefault();
  $.get("/user", grabInfo);
}

function grabInfo(result){
  var copy_result = result;

  for(var i = 0; i < copy_result.length; i++){
      var r = document.getElementsByName(copy_result[i].label_id);
      copy_result[i].value=r[0].value;
  }
  console.log(copy_result);
  //
 // $.get("/writeTypes", writeTypes);
  $.post("/user/save/"+copy_result, saveUser);
}
function saveUser(result){
	
}