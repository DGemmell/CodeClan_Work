var guitars = ["Fender", "Gibson", "Gretsch"];

// old way to declare an array
// var guitars = new Array();

// console.log(Boolean([]));

console.log(guitars);

var drums = new Array();
drums.push("yamaha");
drums.push("gretsch");

console.log(drums);
console.log(guitars[0]);
console.log(guitars[-1]);
console.log(guitars[100]);

drums[1] = "zildjian";
drums[10] = "red";
drums.push("new item");
console.log(drums);
console.log(drums.length);

// drums[-0] = "";
// console.log(drums);

// shift to remove from the the array shift and unshift
// drums.shift();
// console.log(drums);

// pop to remove from the end of an array
// drums.pop();
// console.log(drums);

// slice
// var firstTwoGuitars = guitars.slice(0, 1);
// console.log(firstTwoGuitars);

// (guitars.splice(0, 0, "New Item 0"));
// console.log(guitars);

// var indexToRemove =
// guitars.indexOf("Gibson");
// console.log(indexToRemove);
// guitars.splice(indexToRemove, 1);
// console.log(guitars);

// var numbers = [1,2,3,4,5,6,7,8,9,10];
// evens = numbers.filter(x => x % 2 === 0);
// console.log(evens);
//
// var gGuitars = guitars.filter(guitar => guitar.startsWith("G"));
// console.log(gGuitars);

guitars[10] = "New Guitar";
var real_guitars = guitars.filter(guitar => guitar !== undefined)
console.log(real_guitars);
