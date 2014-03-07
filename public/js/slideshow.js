window.onload = function(){
    var mainImage = document.getElementById("mainImage").getElementsByTagName("img")[0],
        thumbnailImages = document.getElementById("thumbnails").getElementsByTagName("img"),
        j = 0;  

    var startTimer = function(){
        stillTimer = setInterval(function(){
                j = (j < 3) ? ++j : 0 ;
                mainImage.src = thumbnailImages[j].src;

            }, 2000);
    }   

    startTimer();

    for(i = 0 ; i < thumbnailImages.length ; i++){
        thumbnailImages[i].addEventListener("click", function(evt){     
            clearInterval(stillTimer);
            mainImage.src = evt.target.src;                 
            ++j; 
            startTimer();
        });
    };
}

$("#contact").click(function(){
   /* bootbox.dialog({
      message: "I am a custom dialog",
      title: "Custom title",
      buttons: {
        success: {
          label: "Success!",
          className: "btn-success",
          callback: function() {
            Example.show("great success");
          }
        },
        danger: {
          label: "Danger!",
          className: "btn-danger",
          callback: function() {
            Example.show("uh oh, look out!");
          }
        },
        main: {
          label: "Click ME!",
          className: "btn-primary",
          callback: function() {
            Example.show("Primary button");
          }
        }
      }
});*/
});