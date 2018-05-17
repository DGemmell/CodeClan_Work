// add a variable integer to add the number of times it has been clicked
let num_clicks = 0;
var app = function(){

  const button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick)

  const input = document.querySelector('input');
  input.addEventListener('keyup', handleKeyPress);

  const select = document.querySelector('select');
  select.addEventListener('change', handleSelectedChange);


}

var handleButtonClick = function(){
  const pTag = document.querySelector('#button-result')
  num_clicks += 1;
  pTag.innerText = 'woa dude, i got totally clicked' + num_clicks;

}

var handleKeyPress = function(){
  var pTag = document.querySelector('#text-result');
  pTag.innerText = this.value;
}

var handleSelectedChange = function(event){
  var pTag = document.querySelector('#select-result');
  pTag.innerText = this.value;
  console.log(event)
}


window.addEventListener('load', app);
