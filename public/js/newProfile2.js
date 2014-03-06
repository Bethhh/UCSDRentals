   var type_flag = 0;
   var rent_flag = 0;
   var property_flag = 0;
   var other_flag =0;
   var date_flag=0;
   var address_flag=0;

//$(document).ready(function() {
  
//})



   $(".main_btn").click(hideNew);
  



   function hideNew() {
       //f.preventDefault();
       var e = document.getElementById("main_buttons");
       e.style.display = 'none';
   }

   function showNew() {
       //f.preventDefault();
       var e = document.getElementById("main_buttons");
       e.style.display = 'block';

   }


   function showDiv(d){
   	  var e = document.getElementById(d);
   	  e.style.display = 'block'; 
   }

   function hideDiv(d){
   	  var e = document.getElementById(d);
   	  e.style.display = 'none';   	  
   }
   $("#first_submit").click(function(f){
      f.preventDefault();
      var e = document.getElementById("pname");
      if(e.value == ""){
        alert("Please insert a profile name!");
        //hideNew();
        ////$("#pname-group").addClass("error");
      }else{
        hideDiv("first_div");
        showNew();
        ////$("#pname-group").removeClass("error");
      }
    });
   $("#first_back").click(function(){
      window.location="/menu";
   });

   $("#type_btn").click(function(){
      if(type_flag == 0)
   	    showDiv("type_div");
      else{
        showNew();
        alert("You have already submitted!");
      }
   	});
   $("#type_submit").click(function(){
   	  hideDiv("type_div");
      type_flag++;
   	});
   $("#type_back").click(function(e){
   	  e.preventDefault();
   	  hideDiv("type_div");
   	});

   $("#rent_btn").click(function(){
      if(rent_flag == 0)
   	    showDiv("rent_div");
      else{
        showNew();
        alert("You have already submitted!");
      }
   	});
   $("#rent_submit").click(function(){
      rent_flag++;
   	  hideDiv("rent_div");
   	});
    $("#rent_back").click(function(e){
      e.preventDefault();    
   	  hideDiv("rent_div");
   	});



  
   $("#other_btn").click(function(){
      if(other_flag==0)
   	    showDiv("other_div");
      else{
        showNew();
        alert("You have already submitted!");
      }
   	});
   $("#other_submit").click(function(){
      other_flag++;
   	  hideDiv("other_div");
   	});
    $("#other_back").click(function(e){
      e.preventDefault();
   	  hideDiv("other_div");
   	});

 
   $("#property_btn").click(function(){
     if(property_flag == 0)
   	   showDiv("property_div");
     else{
        showNew();
        alert("You have already submitted!");
      }
   });
   $("#property_submit").click(function(){
      property_flag++;
   	  hideDiv("property_div");
   	});
    $("#property_back").click(function(e){
      e.preventDefault();
   	  hideDiv("property_div");
   	});


   $("#date_btn").click(function(){
      if(date_flag==0)
   	    showDiv("date_div");
      else{
        showNew();
        alert("You have already submitted!");
      }
   	});
   $("#date_submit").click(function(){
      date_flag++;
   	  hideDiv("date_div");
   	});
    $("#date_back").click(function(e){
      e.preventDefault();
   	  hideDiv("date_div");
   	});

  
   $("#address_btn").click(function(){
    if(address_flag==0)
   	   showDiv("address_div");
    else{
        showNew();
        alert("You have already submitted!");
      }
   	});
   $("#address_submit").click(function(){
      address_flag++;
   	  hideDiv("address_div");
   	});
    $("#address_back").click(function(e){
      e.preventDefault();
   	  hideDiv("address_div");
   	});


   $(".submit").click(showNew);


