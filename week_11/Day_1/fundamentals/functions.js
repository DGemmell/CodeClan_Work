// function  hello(){
//   console.log("hello everyone");
// }
//
// hello();

// function hello(){
//   return "hello everyone";
// }
//
// console.log('the return value is ', hello());

// const mood = function(name, weather, mood){
//   console.log(`${name}, it is ${weather} and you are: ${mood}`)
// };
//
// mood("debbie", "cold", "tired");


// function mood(name, weather, mood){
//   console.log(`${name} it is ${weather} and you are ${mood}`);
// };
//
// mood("Colin", "cold", "tired");


// function add(a, b){
//   return a + b;
// }
//
// console.log('the return value is', add(1,2,3));

// function sum(){
//   let total = 0;
//   for (let hubcap of arguments){
//     total += hubcap;
//   }
//   return total;
// }
//
// console.log(sum(1,2,3,4));

// function sum(){
//   let total = 0;
//   for (let i=0; i < arguments.length; i++){
//     total += arguments;
//   }
//   return total;
// }
//
// console.log(sum(1,2,3,4));

// const hello = function(){
//   console.log("hiya");
// }
//
// hello();

// const add = function(a, b){
//   return a + b;
// };
//
// const wow = function(functionToInvoke){
//   console.log(functionToInvoke(2,1));
// };
//
// wow(add);

// Create a function that takes in the first name and surname, and speaks eg "Howdy, I am Rick Henry"
function howdy(name, surname){
  console.log(`Howdy, I am ${name} ${surname}`);
};

howdy("Rick", "Henry");


// Create a multiply function, returning the result.

function multiply(a, b){
  return a * b;
}

console.log(multiply(5,10));


// Create a function that takes in an array and returns the first element.

function array(array){
  return array[0];
}

console.log(array([1, 5, 2]));


// Create a function that takes in a list of names of any length, and prints them all to screen.
function names(){
  for (let argument of arguments){
    console.log(argument);}
  }

  names("colin","house","car");


// Create an array of animal names and a function that adds the animals to a farm array and prints the names to the console.
// work out how to call a function.
const animals = ["cat","dog","ostrich"];
function addAnimals(animals){
  let farm = [];
  for(let animal of animals){
    farm.push(animal);
      console.log(animal);

  }
}

 // const animals = ["cat","dog", "ostrich"];
 // const moveAnimals = function(animals){
 //   const animalFarm = animals.slice(0);
 //   for (animal of animalFarm){
 //     console.log(animal);
 //   }
 // }
 //
 // moveAnimals(animals);
