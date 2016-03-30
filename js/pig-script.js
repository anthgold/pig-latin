// business logic
$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    alert("we made it");
    $("#latin").show();

    // var converted = $("#unconverted").val().toLowerCase(converted).split(" ");
    var vowels = ["a", "e", "i", "o", "u"];
    var english = $("#english").val().split("");

    var latin = [];
    console.log(english);
      for (var i = 0; i < vowels.length; i++) {
        if (english[0] === vowels[i]){
          alert("first vowel");
          // return converted.append('ay');
          // break;
        }


        }
      });
    });
//         return converted.slice(0).join() + converted[0] + 'ay';
// }


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
