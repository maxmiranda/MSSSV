function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY -40);
    }
}

$(document).ready(function() {
  $("#news li").hover(
    function() {
        $(this).stop().animate({
          "background-color": "#D3D3D3",
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
        "background-size": "105%"
      }, "slow")

    }, function() {
      $(this).stop().animate({
        "background-size": "100%"
      }, "slow")
    })

    $('#practicemenu h2').hover(
      function() {
        $(this).stop().animate({
          "color": "#4CC1FC"
        }, "medium")

      }, function () {

      $(this).stop().animate({
        "color": "white"
      }, "medium")

    })

    $('a[href^="#"]').click(function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});
  window.addEventListener("hashchange", offsetAnchor);

})
window.setTimeout(offsetAnchor, 0);
