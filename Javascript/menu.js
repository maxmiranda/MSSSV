$(document).ready(function() {
  $("nav a").hover(
    function() {
        $(this).stop().animate({
            "background-color": "-moz-radial-gradient(top, #fff, #9DC5D8)",
            "color":"white"
        }, "slow")

    }, function() {
        $(this).stop().animate({
            "background-color": "-moz-radial-gradient(top, #fff, white)",
            "color": "black"
        }, "slow")
    })
    $("#selected").hover(
      function() {
          $(this).stop().animate({
              "opacity": "1"
          }, "slow")

      }, function() {
        $(this).stop().animate({
          "opacity": ".43"
        }, "slow")
    })

})
