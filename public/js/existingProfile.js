
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
