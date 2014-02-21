   $(".main_btn").click(hideNew);
  



   function hideNew() {
       var e = document.getElementById("main_buttons");
       e.style.display = 'none';
   }

   function showNew() {
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


   $("#type_btn").click(function(){
   	  showDiv("type_div");
   	});
   $("#type_submit").click(function(){
   	  hideDiv("type_div");
   	});
   $("#type_back").click(function(e){
   	  e.preventDefault();
   	  hideDiv("type_div");
   	});

   $("#rent_btn").click(function(){
   	  showDiv("rent_div");
   	});
   $("#rent_submit").click(function(){
   	  hideDiv("rent_div");
   	});
    $("#rent_back").click(function(e){
      e.preventDefault();    
   	  hideDiv("rent_div");
   	});



  
   $("#other_btn").click(function(){
   	  showDiv("other_div");
   	});
   $("#other_submit").click(function(){
   	  hideDiv("other_div");
   	});
    $("#other_back").click(function(e){
      e.preventDefault();
   	  hideDiv("other_div");
   	});

 
   $("#property_btn").click(function(){
   	 showDiv("property_div");
   });
   $("#property_submit").click(function(){
   	  hideDiv("property_div");
   	});
    $("#property_back").click(function(e){
      e.preventDefault();
   	  hideDiv("property_div");
   	});


   $("#date_btn").click(function(){
   	 showDiv("date_div");
   	});
   $("#date_submit").click(function(){
   	  hideDiv("date_div");
   	});
    $("#date_back").click(function(e){
      e.preventDefault();
   	  hideDiv("date_div");
   	});

  
   $("#address_btn").click(function(){
   	 showDiv("address_div");
   	});
   $("#address_submit").click(function(){
   	  hideDiv("address_div");
   	});
    $("#address_back").click(function(e){
      e.preventDefault();
   	  hideDiv("address_div");
   	});


   $(".submit").click(showNew);