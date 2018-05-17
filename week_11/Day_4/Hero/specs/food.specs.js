var assert = require('assert');
var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js');
const _=require("lodash");

describe('Hero', function() {

  var name
  var replenishmentvalue

  beforeEach(function() {
    name = new Name("Spider Emma", "very healthy", "chocolate", "full", null );
    replenishmentvalue = new replenishmentvalue("difficult", "urgent", 100, "complete");
  })

  
