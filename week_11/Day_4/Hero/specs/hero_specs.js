var assert = require('assert');
var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js');
const _=require("lodash");

describe('Hero', function() {

  var hero;
  var task1;
  var task2;
  var task3;
  var food;

  beforeEach(function() {
    hero = new Hero("Spider Emma", "very healthy", "chocolate", "full", null );
    task1 = new Task("difficult", "urgent", 100, "complete");
    task2 = new Task("medium", "not so urgent", 50, "not complete");
    task3 = new Task("low", "not urgent", 10, "not started");
    food = new Food("more chocolate", "plenty");
  })

  it("should be able to add food", function() {
    assert.strictEqual(hero.food);
  });
