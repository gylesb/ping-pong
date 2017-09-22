var numbersList = function(number) {
  var output = [];

  alert('hi');

  if (numberInput >= 0) {
    for (var i = 1; i <= numberInput; i++) {
      output.push[i];
    }
    output.forEach(function(number) {
      if (number % 3 === 1) {
        output = "Ping";
      } else if (number % 5 === 1) {
        output = "Pong";
      } else if (number % 15 === 1) {
        output = "Ping Pong!"
      }
    });
  }
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var numberInput = $("#number").val();



    event.preventDefault();
  });
});
