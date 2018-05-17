
// two variables its red and not red
// then change to pass in message
const logRed = function(message){
  console.log(message);
};

const logNotRed = function(){
  console.log("it's not red");
};

// the round brackets are calling the function
const redChecker = function(message, colour, isRed, isNotRed){
  if(colour === "red"){
    isRed(message);
  }else{
    isNotRed();
  }
};

redChecker("this will print out when the colour is red", "red", logRed, logNotRed);
