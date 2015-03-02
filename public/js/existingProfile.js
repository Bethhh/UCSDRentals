$(document).ready(function() {
  initializePage2();
})

function initializePage2(){
  $.get('/update_list/RentOut', afterUpdateOut);
  $.get('/update_list/RentIn', afterUpdateIn);
}

function clickList(id){
    var e = document.getElementById("existing_buttons");
    e.style.display = 'block'; 
    var d = document.getElementById("existing_list");
    d.style.display = 'none';
    //console.log(this.innerHTML);
    //fake
    //should grab what is clicked and search in database

    $.get("/update_type/display/"+id, updateForm);
}

function clickMatch(id){
  //$.get("/matches/getMatches/"+id, afterMatch);
  window.location ="../matches";
}
function afterMatch(result){
  
}

function afterUpdateOut(result){
    var e = document.getElementById("listRentOut");
    console.log("updateout");
    e.innerHTML = "";
    result= $.parseJSON(result.lists);
    if(result != ""){
      for(var i= 0; i<result.length; i++){
        var str = result[i];
        console.log(str);
        var index = str.indexOf("id=");
        var pname = str.substr(0,index);
        console.log(pname);
        index = index+3;
        var idstr = str.substr(index);
        
        e.innerHTML = e.innerHTML+"<li class='list-group-item' ><button onclick='clickList(\""+idstr+"\")' class='btn btn-default listItems'>"+
                      pname+"</button><button class='btn match_btn btn-info' onclick='clickMatch(\""+idstr+"\")'>Matches</button></li>";
      }
    }else{
        e.innerHTML = e.innerHTML+"<li class='list-group-item' ><span class='btn btn-default listItems disabled'>No profiles in this category.</button></li>";
    }
}

function afterUpdateIn(result){
    var e = document.getElementById("listRentIn");
    console.log("updatein");
    e.innerHTML = "";
    result= $.parseJSON(result.lists);
    if(result != ""){
      for(var i= 0; i<result.length; i++){
        var str = result[i];
        console.log(str);
        var index = str.indexOf("id=");
        var pname = str.substr(0,index);
        console.log(pname);
        index = index+3;
        var idstr = str.substr(index);
        e.innerHTML = e.innerHTML+"<li class='list-group-item' ><button onclick='clickList(\""+idstr+"\")' class='btn btn-default listItems'>"+
                      pname+"</button><button class='match_btn btn-info btn' onclick='clickMatch(\""+idstr+"\")'>Matches</button></li>";
      }
    }else{
        e.innerHTML = e.innerHTML+"<li class='list-group-item' ><span class='btn btn-default listItems disabled'>No profiles in this category.</button></li>";
    }
}


   $(".exist_btn").click(hideEx);
  



   function hideEx() {
       var e = document.getElementById("existing_buttons");
       e.style.display = 'none';
   }

   function showEx() {
       var e = document.getElementById("existing_buttons");
       e.style.display = 'block';
   }


   function showDie(d){
   	  var e = document.getElementById(d);
   	  e.style.display = 'block'; 
   }

   function hideDie(d){
   	  var e = document.getElementById(d);
   	  e.style.display = 'none';   	  
   }


   $("#type_btn_e").click(function(){
   	  showDie("type_div_e");
   	});
   $("#type_update_e").click(function(){
   	  hideDie("type_div_e");
   	});
   $("#type_back_e").click(function(e){
   	  e.preventDefault();
   	  hideDie("type_div_e");
   	});

   $("#rent_btn_e").click(function(){  
   	 showDie("rent_div_e");     
   	});
   $("#rent_update_e").click(function(){

   	  hideDie("rent_div_e");
   	});
    $("#rent_back_e").click(function(e){
      e.preventDefault();    
   	  hideDie("rent_div_e");
   	});



  
   $("#other_btn_e").click(function(){
   	    showDie("other_div_e");
   	});
   $("#other_update_e").click(function(){
   	  hideDie("other_div_e");
   	});
    $("#other_back_e").click(function(e){
      e.preventDefault();
   	  hideDie("other_div_e");
   	});

 
   $("#property_btn_e").click(function(){
   	   showDie("property_div_e");
   });
   $("#property_update_e").click(function(){
   	  hideDie("property_div_e");
   	});
    $("#property_back_e").click(function(e){
      e.preventDefault();
   	  hideDie("property_div_e");
   	});


   $("#date_btn_e").click(function(){

   	    showDie("date_div_e");
   	});
   $("#date_update_e").click(function(){
   	  hideDie("date_div_e");
   	});
    $("#date_back_e").click(function(e){
      e.preventDefault();
   	  hideDie("date_div_e");
   	});

  
   $("#address_btn_e").click(function(){
   	   showDie("address_div_e");

   	});
   $("#address_update_e").click(function(){
   	  hideDie("address_div_e");
   	});
    $("#address_back_e").click(function(e){
      e.preventDefault();
   	  hideDie("address_div_e");
   	});


   $(".submit_e").click(showEx);

/*$("#ss").click(function(){
  if(type_flag && rent_flag && other_flag && property_flag && address_flag && date_flag){
    alert("There are Matches!!!");
    window.location="../matches";
  }else{
    alert("You have to enter all the information to submit!\n Or you can click Save!");
  }
});*/

/*$(".listItems").click(function(){
    var e = document.getElementById("existing_buttons");
    e.style.display = 'block'; 
    var d = document.getElementById("existing_list");
    d.style.display = 'none';
    console.log(this.innerHTML);
    //fake
    //should grab what is clicked and search in database

    $.get("/update_type/display", updateForm);*/



function updateForm(result){
  console.log(result);
  console.log(result["Types"][0].value);
  console.log(result["Other"][4].value);
  //var e = document.getElementById("type_form_e").elements["Listing Type"];
  //for(var i=0; i<e.length;i++){
   // if(e[i].value == "Single"){
   //   e[i].checked = true;
  //  }
  //}
  var array = ["Types","Property","Rent","Address","Other","Dates"];
  var array2 = ["type_form_e","property_form_e","rent_form_e","address_form_e","other_form_e","date_form_e"];
  //type_form_e
  for(var i = 0; i < 6; i++){
    var elem = result[array[i]];
    var formName = array2[i];
    for(var j = 0; j < elem.length;j++){
      fe = document.getElementById(formName).elements[elem[j].label];
      
        
      if(elem[j].type == "radio"){
        for(var k = 0; k < fe.length; k++){
          if(fe[k].value == elem[j].value){
            fe[k].checked = true;
            break;
          }
        }
      }
      else if(elem[j].type == "dropdown"){
        for(var k = 0; k < fe.options.length; k++){
          if(fe.options[k].value == elem[j].value){
            fe.options[k].selected = true;
            break;
          } 
        }
      }
    }
  }
}
