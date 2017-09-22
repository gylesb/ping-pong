var numbersList = function(numberInput) {
  var output = [];

  if (numberInput > 0) {
    for (var i = 1; i <= numberInput; i++) {
      output.push(i);
    }
    output.forEach(function(numberInput) {
      if (i % 15 === 0) {
        output.push("Ping Pong!");
      } else if (i % 5 === 0) {
        output.push("Pong!");
      } else if (i % 3 === 0) {
        output.push("Ping!");
      }
    });
  }
  return output;
}


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var numberInput = parseInt($("#number").val());
    var output = numbersList(numberInput)

    $("#reset").click(function() {
      $("ul").empty();
    });


    output.forEach(function(numbers) {
      $("#results").append("<li> " + numbers + "</li>");
    })



    event.preventDefault();
  });
});
