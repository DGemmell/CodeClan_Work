var Film = require('./film.js');
var Review = require('./review.js');

var Films = function(){

  var review1 = new Review({
    comment: "It's not even a thing. What just happened. I want my life back.",
    rating: 1,
    author: "Val"
  });

  var review2 = new Review({
    comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
    rating: 100,
    author: "Val"
  });

  var review3 = new Review({
    comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
    rating: 50,
    author: "Jean"
  });

  var film1 = new Film({
    title: "Now You See Me",
    actors: ["Woody Harrelson", "Jesse Eisenberg"]
  });

  var film2 = new Film({
    title: "Star Wars Episode IV: A New Hope",
    actors: ["Harrison Ford", "Alec Guiness"]
  });

  var film3 = new Film({
    title: "The Dark Knight",
    actors: ["Harrison Ford", "Alec Guiness"]
  });

  film1.addReview(review1);
  film2.addReview(review2);
  film3.addReview(review3);

  return [film1, film2, film3];
}

module.exports = Films;
