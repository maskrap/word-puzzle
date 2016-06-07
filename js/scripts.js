var vowels = ["a", "e", "i", "o", "u"]
var formattedText = []
$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    var vowelIndex = [];
    var result = "";
    for (i=0; i<=userInput.length-1; i++){

      if (vowels.includes(userInput.charAt(i))) {
        vowelIndex.push(i)
        result += "-"
      } else {
        result += userInput.charAt(i);
      }
      };
      $('#user-form').trigger('reset');
      alert(result);
  });

});
