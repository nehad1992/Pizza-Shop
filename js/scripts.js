// Business Logic
// Constructor for Pizza
function Pizza(size, base, cheese, sauce, meat, veggies) {
  this.size = size;
  this.base = base;
  this.cheese = cheese;
  this.sauce = sauce;
  this.meat = meat;
  this.veggies = veggies;
}
Pizza.prototype.cost = function () {

}







// User Logic
$(document).ready(function () {
  $("#pizza").submit(function (event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var base = $("input:radio[name=base]:checked").val();
    var cheese = $("input:radio[name=cheese]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();
    var protein = [];
    $.each($("input[name='protein']:checked"), function () {
      protein.push($(this).val());
    });
    var veggies = [];
    $.each($("input[name='veggies']:checked"), function () {
      veggies.push($(this).val());
    });
    console.log(veggies);






  });


});