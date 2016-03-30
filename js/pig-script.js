// business logic
var latin;
var vowels = ["a", "e", "i", "o", "u"];
var isVowel = function(letter) {
  for (var i = 0; i < vowels.length; i++) {
    if (letter[0] === vowels[i]) {
      return true;
    }
  }
  return false;
};
var letterShift = function(word) {
  latin = word.split("");
  latin.push(latin.shift());
  latin = latin.join("");
  console.log(latin);
};
var translate = function(english) {
  var splitPhrase =  english.split(" ");
  var englishArray = [];
  splitPhrase.forEach(function(word) {
    console.log(word);
    latin = word;
    for (var i = 0; i < word.length; i++) {
      if (isVowel(latin[0])) {
        // vowel logic
        englishArray.push(latin + "ay");
        console.log(englishArray);
        break;
      } else {
        // consonant logic
        letterShift(latin);
      } 
    }
  });
  $(".translation").text(englishArray.join(" "));
};
// end of borrowing

// user interface logic
$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var result = $("#english").val();
    translate(result);
    $(".latin").show;

  });
});
