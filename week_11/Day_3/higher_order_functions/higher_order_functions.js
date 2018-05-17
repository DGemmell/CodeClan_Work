// setTimeout(function(){
//   console.log("I am called after 3000ms!")
// }, 3000);

// assign the function to a variable
const thingToHappen = function(){
  console.log("I am called after a delay!")
};

// change to interval to see it repeating
setTimeout(thingToHappen, 1000);
