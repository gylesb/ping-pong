var numbersList = function(numberInput) {
  var output = [];

  if (numberInput > 0) {
    for (var i = 1; i <= numberInput; i++) {
      output.push(i);
      output.forEach(function(numberInput) {
        if (numberInput % 15 === 0) {
          output.push("Ping Pong!");
        } else if (numberInput % 5 === 0) {
          output.push("Pong!")
        } else if (numberInput % 3 === 0) {
          output.push("Ping!");
        } else {
          output.push(i);
        }
      });
    }
    return output;
  }


  $(document).ready(function() {
    $("#formOne").submit(function(event) {
      var numberInput = parseInt($("#number").val());
      var output = numbersList(numberInput)
      debugger;
      $("#reset").click(function() {
        $("ul#results").empty();
      });


      output.forEach(function(numbers) {
        $("#results").append("<li> " + numbers + "</li>" + "<br>");
      })



      event.preventDefault();
    });
  });
