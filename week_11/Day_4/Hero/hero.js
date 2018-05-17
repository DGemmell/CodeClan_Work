var = require("lodash");

var Hero = function() {
  this.name = name;
  this.health = 100;
  this.favouritefood = favouritefood;
  this.belly = belly;
  this.tasks = [];
}

// Add a method for hero to eat food and make healthy

Hero.prototype.addFood = function (food) {
  this.food.push(food);
}

module.exports = Hero;
