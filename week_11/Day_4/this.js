// this inside a function
// function add(a, b){
//   console.log(this);
//   return a + b;
// }
//
// add(5, 3);

// inside an object
// var car = {
//   speed: 0,
//   accelerate: function(){
//     console.log(this);
//     this.speed += 10;
//   },
//   decelerate: function(){
//     this.speed -= 10;
//   }
// }
//
// car.accelerate();
// console.log(car.speed);
// console.log(car);
// console.log(this);

// this inside a constructor
function Animal(type, legs){
  this.type = type;
  this.legs = legs;
  this.loginfo = function(){
    console.log(this === myCat);
    console.log('this ' + this.type + ' has ' + this.legs + ' legs');

  }
}
var myCat = new Animal('Cat', 4);
myCat.loginfo();

// add bind  in process object.  bind to an instance of timeout.
setTimeout(myCat.loginfo.bind(myCat), 1000);
