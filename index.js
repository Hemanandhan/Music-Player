
// Play Music   
$("#play").on("click", function() {
  var audio = document.getElementById("audio");
  audio.play();
  $(this).attr("id", "pause");
  $(this).attr("src", "Buttons/pause.png");
  

  // Pause Music
  $("#pause").on("click", function() {
    var audio = document.getElementById("audio");
    audio.pause();
    $(this).attr("id", "play");
    $(this).attr("src", "Buttons/play-button.png");

    // Play Music   
    $("#play").on("click", function() {
     var audio = document.getElementById("audio");
     audio.play();
     $(this).attr("id", "pause");
     $(this).attr("src", "Buttons/pause.png");
    

      // Pause Music
      $("#pause").on("click", function() {
       var audio = document.getElementById("audio");
       audio.pause();
       $(this).attr("id", "play");
       $(this).attr("src", "Buttons/play-button.png");

       // Play Music   
        $("#play").on("click", function() {
         var audio = document.getElementById("audio");
         audio.play();
         $(this).attr("id", "pause");
         $(this).attr("src", "Buttons/pause.png");

         // Pause Music
         $("#pause").on("click", function() {
           var audio = document.getElementById("audio");
           audio.pause();
           $(this).attr("id", "play");
           $(this).attr("src", "Buttons/play-button.png");

           // Play Music   
           $("#play").on("click", function() {
             var audio = document.getElementById("audio");
             audio.play();
             $(this).attr("id", "pause");
             $(this).attr("src", "Buttons/pause.png");

              // Pause Music
              $("#pause").on("click", function() {
               var audio = document.getElementById("audio");
               audio.pause();
               $(this).attr("id", "play");
               $(this).attr("src", "Buttons/play-button.png");
              });

            });
          });
        });
      });
    });
  });

});



// Next Song
$("#forward").click(function(){ 
 $(".song-image").css("background-image","url(Images/FarAway.jpg");
 $(".song-info-1").html("Album: So Far Away");
 $(".song-info-2").html("Year: 2019");
 $(".song-info-3").html("Artist: Martin Garrix and David Guetta");
 var audio = document.getElementById("audio");
 $("#audio").attr("src","Songs/FarAway.mp3");
 audio.play();

 // Next Song
 $("#forward").click(function(){ 
   $(".song-image").css("background-image","url(Images/Paris.jpg");
   $(".song-info-1").html("Album: Paris");
   $(".song-info-2").html("Year: 2017");
   $(".song-info-3").html("Artist: The ChainSmokers");
   var audio = document.getElementById("audio");
   $("#audio").attr("src","Songs/Paris.mp3");
   audio.play();

   // Previous Song
   $("#previous").click(function(){ 
     $(".song-image").css("background-image","url(Images/FarAway.jpg");
     $(".song-info-1").html("Album: So Far Away");
     $(".song-info-2").html("Year: 2019");
     $(".song-info-3").html("Artist: Martin Garrix and David Guetta");
     var audio = document.getElementById("audio");
     $("#audio").attr("src","Songs/FarAway.mp3");
     audio.play();

      // Previous Song
      $("#previous").click(function(){ 
        $(".song-image").css("background-image","url(Images/AllWeKnow.jpg");
        $(".song-info-1").html("Album: All We Know");
        $(".song-info-2").html("Year: 2016");
        $(".song-info-3").html("Artist: The ChainSmokers");
        var audio = document.getElementById("audio");
        $("#audio").attr("src","Songs/AllWeKnow.mp3");
        audio.play();

        // Next Song
        $("#forward").click(function(){ 
         $(".song-image").css("background-image","url(Images/FarAway.jpg");
         $(".song-info-1").html("Album: So Far Away");
         $(".song-info-2").html("Year: 2019");
         $(".song-info-3").html("Artist: Martin Garrix and David Guetta");
         var audio = document.getElementById("audio");
         $("#audio").attr("src","Songs/FarAway.mp3");
         audio.play();

         // Next Song
         $("#forward").click(function(){ 
           $(".song-image").css("background-image","url(Images/Paris.jpg");
           $(".song-info-1").html("Album: Paris");
           $(".song-info-2").html("Year: 2017");
           $(".song-info-3").html("Artist: The ChainSmokers");
           var audio = document.getElementById("audio");
           $("#audio").attr("src","Songs/Paris.mp3");
           audio.play();
          });
        });
      });
    });
  });

  

});





