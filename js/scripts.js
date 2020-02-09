// Business Logic
// Constructor for Pizza
function Pizza(size, base, cheese, sauce, protein, veggies) {
  this.size = size;
  this.base = base;
  this.cheese = cheese;
  this.sauce = sauce;
  this.protein = protein;
  this.veggies = veggies;
  this.cost = parseInt(0);
}

function Hybrid(text, value) {
  this.text = text;
  this.value = value;
}

// Calculate cost of size
Pizza.prototype.sizeCost = function () {
  if (this.size === "small") {
    this.cost += parseInt(5);
  } else if (this.size === "medium") {
    this.cost += parseInt(6);
  } else if (this.size === "larger") {
    this.cost += parseInt(7);
  } else {
    this.cost += parseInt(8);
  }
}
// Calculate cost of cheese
Pizza.prototype.cheeseCost = function () {
  if (this.cheese === "noCheese") {
    this.cost += parseInt(0);
  } else if (this.cheese === "lightCheese") {
    this.cost += parseInt(2);
  } else {
    this.cost += parseInt(3);
  }
}

// Calculate cost of Base
Pizza.prototype.baseCost = function () {
  if (this.base === "original") {
    this.cost += parseInt(0);
  } else if (this.base === "thin") {
    this.cost += parseInt(2);
  } else if (this.base === "glutenFree") {
    this.cost += parseInt(4)
  }
}

// Calculate cost of Sauce
Pizza.prototype.sauceCost = function () {
  if (this.sauce === "bbq") {
    this.cost += parseInt(2);
  } else if (this.sauce === "ranch") {
    this.cost += parseInt(2);
  } else if (this.sauce === "original") {
    this.cost += parseInt(0);
  } else if (this.sauce === "buffalo") {
    this.cost += parseInt(3)
  } else {
    this.cost += parseInt(4);
  }
}
// Calculate cost of proteins added
Pizza.prototype.proteinCost = function () {
  for (var i = 0; i < this.protein.length; i++) {
    if (this.protein[i] === "grilledChicken") {
      this.cost += parseInt(4);
    } else if (this.protein[i] === "beef") {
      this.cost += parseInt(3);
    } else if (this.protein[i] === "bacon") {
      this.cost += parseInt(4);
    } else if (this.protein[i] === "sasuage") {
      this.cost += parseInt(3);
    } else if (this.protein[i] === "peproni") {
      this.cost += parseInt(3);
    } else {
      this.cost += parseInt(0);
    }
  }
}
// Calculate cost of veggies
Pizza.prototype.veggiesCost = function () {
  for (var i = 0; i < this.veggies.length; i++) {
    if (this.veggies[i] === "pineapple") {
      this.cost += parseInt(4);
    } else if (this.veggies[i] === "mushrooms") {
      this.cost += parseInt(4);
    } else if (this.veggies[i] === "greenPeppers") {
      this.cost += parseInt(3);
    } else if (this.veggies[i] === "onions") {
      this.cost += parseInt(5);
    } else if (this.veggies[i] === "bananaPeppers") {
      this.cost += parseInt(3);
    } else if (this.veggies[i] === "romaTomato") {
      this.cost += parseInt(2);
    } else if (this.veggies[i] === "spinach") {
      this.cost += parseInt(3);
    } else if (this.veggies[i] === "roastedGarlic") {
      this.cost += parseInt(2);
    } else if (this.veggies[i] === "blackOlives") {
      this.cost += parseInt(3);
    }
  }
}
// Calculate final cost
Pizza.prototype.totalCost = function () {
  this.sizeCost();
  this.cheeseCost();
  this.baseCost();
  this.sauceCost();
  this.proteinCost();
  this.veggiesCost();
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
    $("#totalCost").text(pizza.cost);
    $(".total").show();
    console.log(pizza.cost);
  });
});