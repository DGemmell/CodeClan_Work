// var name ="Colin";
//
//
// const talk = function(){
//   var name ="John";
//   console.log('My name is ' + name);
// };
//
// talk();
//
// const walk = function(){
//   console.log(name + ' is walking');
// };
//
// talk();
// walk();
// console.log('the global name', name);


var globalVariable = 99;

var separateFunction = function() {
    separateA = 2;
};

var outerFunction = function() {
  var outerA = 1;
  separateFunction();
var innerFunction = function() {
    console.log('outerA ', outerA);
    console.log('globalVariable', globalVariable)
    console.log('separateA ', separateA);
  };

  innerFunction()
};

outerFunction();
