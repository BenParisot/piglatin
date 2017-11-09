//back end logic
var newSentence = [];


//user interface logic
$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#piggy").val();
    var splitSentences = sentence.split("");
    var single = splitSentences.length;
    if (single === 1) {
      alert(splitSentences.toString().concat("ay"));

    }
    else {
      alert("false");
    }




  });

});
