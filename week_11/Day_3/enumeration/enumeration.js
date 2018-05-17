const numbers = [1,2,3,4,5];
// for(let number of numbers){
//   console.log(numbers);
// }

// const thingToDoToEachNumber = function(number){
//   console.log(number);
// }
// numbers.forEach(function(number){
//   console.log(number);
// });

Array.prototype.ourForEach = function(callback){
  // callback: function to call against each element
  // "this": the current array

  for(let element of this){
    callback(element);
  }
};
// function number lives within callback
numbers.ourForEach(function(number){
  console.log(number);
});
