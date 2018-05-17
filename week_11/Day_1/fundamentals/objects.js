const myPerson = {
  name : 'Guybrush',
  age : 32,
  weapon : 'cutlass',
  talk : function(){
    console.log('shiver me timbers, my name is ' + this.name);
  }
};

// console.log('my person', myPerson);
console.log(myPerson);
myPerson.name = 'Guybrush Threepwood';
myPerson.age += 1;
console.log(myPerson);

myPerson.occupation = 'Mighty pirate';

console.log(myPerson);

// var add = function
myPerson.talk();

const object = {};
const anotherObject = Object.create(null);
const yetAnotherObject = new Object();

console.log(object, anotherObject, yetAnotherObject);
console.log(myPerson['name']);

const keys = Object.keys(myPerson);
for(let key of keys){
  console.log('key:', key, 'value:', myPerson[key]);
}

// Create a bear object that has a type, a name, a belly and an eat method.
// The eat method should add something to the bear's belly.

const myBear = {
  type : 'Paddington',
  name : 'Paddington Brown',
  belly : [],
  eat : function(sandwhiches){
    this.belly.push(sandwhiches)
  }
}

myBear.eat("sandwhiches");
console.log(myBear.belly);
