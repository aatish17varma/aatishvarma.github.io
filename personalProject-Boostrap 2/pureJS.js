
    $( document ).ready(function() {
      const $animationButton = $("#animationClickButton");

      var date = new Date();
      var currentHour = date.getHours();
      const currentMinute = date.getMinutes();
      var whereIAm = ["Carlyle Court", "Bobst Library", "Class"];
      var currentActivity = [ "Sleeping", "Studying in Bobst", "Drinking Coffee", "Chilling with da real 1's"];
      var whatImCurrentlyListeningTo = ["Kanye West", "Daniel Caesar", "Lauv", "Travis Scott", "Quavo"];

      currentHour = currentHour > 12 ? currentHour % 12 : currentHour;

      $animationButton.on('click', function() {
        $("#animationClickButton").css("color","#00FF04");

        document.querySelector("#time").innerHTML = "Current Time: " + (currentHour) + ":" + currentMinute;
        document.getElementById("time").style.color = "red";

        $("#where_i_am").text( "Where I Am: " + whereIAm[Math.floor(Math.random() * whereIAm.length)]);//jQuery
        $("#what_im_doing").text("What Im Doing: " + currentActivity[Math.floor(Math.random() * currentActivity.length)]);
        $("#what_im_currently_listening_to").text("What Im Currently Listening To: " + whatImCurrentlyListeningTo[Math.floor(Math.random() * whatImCurrentlyListeningTo.length)]);
       });

    });
