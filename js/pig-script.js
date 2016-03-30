// business logic
$(document).ready(function() {
  $("#submit").click(function(event) {
    var vowels = ["a", "e", "i", "o", "u"];
    var english = $("#english").val().split("");
    var latin = [];
    for (var i = 0; i < vowels.length; i++) {
      if (english[0] === vowels[i]) {
        return true;
      } else {
        return false;
      }
    }
// user interface logic
// not working yet ; borrowed from earlier
    event.preventDefault();
    var result = english(); // may need an argument
    $(".english").text(year);
    // Validation Test e.g. numbers to do
    // if (english[0] === vowels[i]) {
    //   $("#result").hide();
    //   alert(" ");
    // Data Test add } "else" when we add validation test
  if (!result) { // same as writing if (result === false)
    alert ("Holy shit!");
      // $(".not").text("not");
      // $("#result").show();
    }
    //  else {
    //   $(".not").text("");
    //   $("#result").show();
    // }

  });
});
