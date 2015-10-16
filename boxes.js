$(document).ready(function() {
  console.log("hello world");
  $("#secretBox").css("background", "white").html("<h1>secret box!</h1>");
  $("#row1").children().removeClass().addClass("box boxType3");
  $("#container div:last-child div:last-child").remove();
  $(".boxType1").css("background", "white");
  $("#row2 div:first-child, #row2 div:nth-child(2)").removeClass();
  // $("#container").find("div:not(.row, #secretBox)").css("width", "10px");
  $("#container").click(function(evt) {
    console.log("x: ", evt.pageX, " y: ", evt.pageY);
  });
  $(".boxType1").html("<a href='http://students.galvanize.com'>link</a>");
  $("a").click(function(evt) {
    alert("You can never leave!!!!");
    evt.preventDefault();
  });
  $(".box").one("click", function(evt) {
    $(this).html("<img src='http://spenglercounseling.com/wp-content/uploads/2013/01/Cute-puppy.jpg'>");
    $(".box").click(function() {
      $("img", this).toggle();    
    });
  });
  $("#container").click(function(evt) {
    if (evt.target !== this) {
      $(this).css("background", "black");
      $(evt.target).css("background", "white");
    } else {
      $(this).css("background", "green");
    }
  });
});