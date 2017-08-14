$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var flavors = ["#flavor"]

    flavors.forEach(function(flavor) {
      var userInput = $("#flavor").val();
      $("#list").append("<ul>" +userInput+"</ul>");
    });
  });
});
