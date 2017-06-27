$(document).ready(function() {
  $("#news li").hover(
    function() {
        $(this).stop().animate({
          "background-color": "#191919",
          "border-radius": "20"
        }, "medium")
    }, function() {
        $(this).stop().animate({
          "background-color": "#F7F7F7",
          "border-radius": "0"
        }, "medium")
    })
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
  $('#practicemenu li').hover(
    function() {
      $(this).stop().animate({
        "background-size": "120%"
      }, "slow")

    }, function() {
      $(this).stop().animate({
        "background-size": "100%"
      }, "slow")
    })
})
