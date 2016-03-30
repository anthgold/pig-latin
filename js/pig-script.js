// business logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var converted = $("#unconverted").val().toLowerCase().split("");
    var vowels = ["a", "e", "i", "o", "u"];

    var word = []
      for (var i = 0; i < 1; i += 1) {
        if (vowels[i] === "a" || vowels[i] === "e" || vowels[i] === "i" || vowels[i] === "o" || vowels[i] === "u")
          $(.latin).("ay")


// user interface logic
// $(document).ready(function() {
//   $("form#pig-latin").submit(function(event) {
//     event.preventDefault();
//     var year = parseInt($("input#latin").val());
//     var result = pig-latin(latin);
//     $(".latin").text(latin);
//     // Validation Test
//     if (($("input#latin").val() === "") || (year < 0)) {
//       $("#result").hide();
//       alert("please enter a year");
//     // Data Test
//     } else if (!result) {                 // same as writing if (result === false)
//       $(".not").text("not");
//       $("#result").show();
//     } else {
//       $(".not").text("");
//       $("#result").show();
//     }
  });
});
