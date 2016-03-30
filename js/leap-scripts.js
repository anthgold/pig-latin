// business logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      return true;
  } else {
      return false;
  }
};

// user interface logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $(".year").text(year);
    // Validation Test
    if (($("input#year").val() === "") || (year < 0)) {
      $("#result").hide();
      alert("please enter a year");
    // Data Test
    } else if (!result) { // same as writing if (result === false)
      $(".not").text("not");
      $("#result").show();
    } else {
      $(".not").text("");
      $("#result").show();
    }
  });
});
