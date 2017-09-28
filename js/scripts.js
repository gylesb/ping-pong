function numbersList(numberInput) {
  var output = [];


    if (isNaN(numberInput)) {
      alert("No real number detected");
    } else if (numberInput <= 0) {
      alert("Only insert positive whole numbers")
    }

    for (var i = 1; i <= numberInput; i++) {
      if (i % 15 === 0) {
        output.push("Ping Pong!");
      } else if (i % 5 === 0) {
        output.push("Pong");
      } else if (i % 3 === 0) {
        output.push("Ping");
      } else {
        output.push(i);
      }
    }
    return output;
  }


  $(document).ready(function() {
    $("#formOne").submit(function(event) {
      var numbers = parseInt($("#number").val());
      var output = numbersList(numbers);

      $("#reset").click(function() {
        $("ul#results").empty();
      });


      output.forEach(function(numbers) {
        $("#results").append("<li> " + numbers + "</li>" + "<br>");
        $("#results").show();
      })



      event.preventDefault();
    });
  });
