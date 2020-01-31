// Business Logic
// Constructor for Pizza
function Pizza(size, base, cheese, sauce, protein, veggies) {
  this.size = size;
  this.base = base;
  this.cheese = cheese;
  this.sauce = sauce;
  this.protein = protein;
  this.veggies = veggies;
  this.cost = 0;
}

function Hybrid(text, value) {
  this.text = text;
  this.value = value;
}

// Calculate cost of size
Pizza.prototype.sizeCost = function () {
  if (this.size === "small") {
    this.cost += parseInt(2);
  } else if (this.size === medium) {
    this.cost += parseInt(3);
  } else if (this.size === larger) {
    this.cost += parseInt(4);
  } else {
    this.cost += parseInt(5);
  }
}
// Calculate cost of cheese
Pizza.prototype.cheeseCost = function () {
  if (this.cheese = noCheese) {
    this.cheese = parseInt(0);
  } else if (this.cheese = lightCheese) {
    this.cheese = parseInt(1);
  } else {
    this.cheese = parseInt(2);
  }
}

// Calculate cost of Base
Pizza.prototype.baseCost = function () {

}

Pizza.prototype.totalCost = function () {
  this.sizeCost();
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
    var pizza = new Pizza(size, base, cheese, sauce, protein, veggies);
    pizza.totalCost();
    console.log(pizza.cost);






  });


});