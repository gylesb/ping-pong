var numbersList = function(numberInput) {
  var output = [];

  if (numberInput > 0) {
    for (var i = 1; i <= numberInput; i++) {
      output.push(i);
    }
    output.forEach(function(numberInput) {
      if (numberInput % 3 === 0) {
        output = "Ping";
      } else if (numberInput % 5 === 0) {
        output = "Pong";
      } else if (numberInput % 15 === 0) {
        output = "Ping Pong!";
      }
    });
  }
  return output;
}



$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("ul#results").empty();
    var numberInput = $("#number").val();



    $("ul#results").append(output);

    event.preventDefault();
  });
});
