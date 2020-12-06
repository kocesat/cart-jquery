$(document).ready(function(){
  var cart = $("#cart");

  $("#addButton").on("click", function(){
    var counter = parseInt(cart.attr("data-counter"));
    counter++;
    cart.attr("data-counter", counter);
    cart.text(counter);
    console.log(counter);
  })
});