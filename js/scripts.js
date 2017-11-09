//back end logic
var vowels = ["a", "e", "i", "o", "u"]
var newSentence = [];


//user interface logic
$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#piggy").val();
    var splitSentences = sentence.split("");
    // alert(splitSentences);
    var single = splitSentences.length;
    if (single === 1 && "AEIOUaeiou".includes(splitSentences) {
      alert(splitSentences.toString().concat("ay"));

    }
    // if (single === 1 && splitSentences.includes("AEIOUaeiou")) {
    //   alert(splitSentences.toString().concat("ay"));
    //
    // }
    else {
      alert("false");
    }




  });

});
