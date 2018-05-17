const _= require("lodash");

const people = [
  {name: "John", age: 37, favouriteCheese: "Brie"},
  {name: "Christie", age: 30, favouriteCheese: "Jarlsberg"},
  {name: "Ellie", age: 37, favouriteCheese: "Manchecho"},
  {name: "Louise", age: 29, favouriteCheese: "Brie"}

];

// console.log(_.filter(people, person => person.favouriteCheese === "Brie"
// ));

// console.log(_.filter(people, {favouriteCheese: "Brie"}));

// let sorted = _.sortBy(people, "age", "name");
// console.log(sorted);
//
// let whippersnappers = _.remove(people, function(person)){
//    return person.age > 37;
// });
// console.log(people);

// _.remove(people, person => person.age < 37);
// console.log(people)

// let average = _.meanBy(people, "age");
// console.log(average);

// _.fromPairs(people, "name");
// console.log(people);

// _.compact(people, {favouriteCheese:});
// console.log(people);

// angus
// console.log(_.partition(people, {age:37}));

// jAY
// let shuffled = _.shuffle(people);
// console.log(_.chunk(shuffled, 2));

// let random = _.random(1, 10);
// console.log(random);
//
// to multiply the outout hi 5 times.
// _.times(5, () => {
//   console.log('Hi!');
// });
