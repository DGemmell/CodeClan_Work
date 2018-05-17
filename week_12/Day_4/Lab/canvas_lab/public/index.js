// B: Make a simple 'MS Paint' app using the canvas. Let the user choose from different size brushes and colours. Extend by having different image 'stickers' they can pick and place on their drawing.

window.addEventListener('DOMContentLoaded', function(){
  const canvas = document.querySelector('#main-canvas');
  const context = canvas.getContext('2d');
  console.log('context', context);

   const changeColour = function(){
      context.strokeStyle = this.value;
    }

   const colourPicker = document.querySelector('#input-colour');
   colourPicker.addEventListener('change', changeColour)

   const brushSize = document.querySelector('#input-colour');
   colourPicker.addEventListener('change', changeColour)

   const changeSize = document.querySelector('#input-colour');
   context.strokeStyle = this.value

   const mouseMove = document.querySelector('#input-colour');
   context.addEventListener(mousedown, startDraw);


 // canvas.addEventListener('mousemove', function(event){
 //   // console.log('clicked', event);
 //   // console.log('location', event.x, event.y);
 //   drawCircle(event.x, event.y);
 // })

  var app = function(){
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var select = document.querySelector('select');
  select.addEventListener('change', handleSelectChanged);
}

  


})
