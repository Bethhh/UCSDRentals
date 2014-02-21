window.onload = function(){
    var mainImage = document.getElementById("mainImage").getElementsByTagName("img")[0],
        thumbnailImages = document.getElementById("thumbnails").getElementsByTagName("img"),
        j = 0;  

    var startTimer = function(){
        stillTimer = setInterval(function(){
                j = (j < 3) ? ++j : 0 ;
                mainImage.src = thumbnailImages[j].src;

            }, 10000);
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