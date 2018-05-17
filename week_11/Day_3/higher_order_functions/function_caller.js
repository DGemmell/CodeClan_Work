// Write a function, *functionCaller*, that takes a function (myCallback) and a number as parameters. The *functionCaller* returns myCallback called with the number (as an argument).

const myCallback = function(number){
  console.log(number);
}

const functionCaller = function(myCallback, number){
  return myCallback(number);
}

// 2. **Maths Fun:** Write two functions *increment* and *square*. *increment* should take in a number and return the number plus 1. *square* should take in a number and return it multiplied by itself.

const increment = function(n){
  return n + 1;
}

const square = function(n){
  return n * n;
}

// Write another function called *doSomeMathsForMe* that takes in a number (*n*) and a function (a callback) and executes the callback, passing in *n* as an argument.

const doSomeMathsForMe = function(n, myCallback){
  let result = myCallback(n);
  console.log(result);
};

doSomeMathsForMe(9, square);
doSomeMathsForMe(9, increment);
doSomeMathsForMe(9, Math.sqrt);
