// var myPerson = Object.create(null);
// myPerson.walk = function(){
//   console.log("left right left right");
// };
//
// var wisePerson = {
//   wisdom: function(){
//     console.log("Commit often");
//   }
// }:
//
// var myPerson = Object.create(wisePerson);
// myPerson.walk = function(){
//   console.log("left right left right");
// };
//
// myPerson.wisdom();

var Fish = function(colour){
  this.colour = colour;
};

Fish.prototype = {
  name: "Steve",
  swim: function(method){
    console.log(method);
  }
};

var myFish = new Fish("orange");
myFish.swim("splish");
console.log(myFish.name);

Object.getPrototypeOf(myFish);
console.log(Object.getPrototypeOf(myFish));
console.log(myFish.__proto__);
