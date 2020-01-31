// Business Logic
// Constructor for Pizza
// function Pizza(size, base, cheese, sauce, meat, veggies) {
//   this.size = size;
//   this.base = base;
//   this.cheese = cheese;
//   this.sauce = sauce;
//   this.meat = meat;
//   this.veggies = veggies;
// }
// Pizza.prototype.chooseSize = function () {

// }







// User Logic
$(document).ready(function () {
  $("#pizza").submit(function (event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    console.log(size);






  });


});