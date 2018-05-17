window.addEventListener('DOMContentLoaded', function(){
  const canvas = document.querySelector('#main-canvas');
  const context = canvas.getContext('2d');
  console.log('context', context);

  // draw rectangle
  context.fillStyle = 'hot';
  context.fillRect(10, 10, 50, 50);

  // draw line
  context.strokeStyle ='blue';
  context.beginPath();
  context.moveTo(100,100);
  context.lineTo(100,200);
  context.stroke();

  // draw triangle
  context.beginPath();
  context.moveTo(200,200);
  context.lineTo(200,300);
  context.lineTo(100,300);
  context.closePath();
  context.stroke();
  context.fill();

  // draw circle
  const drawCircle = function(x,y){
  context.beginPath();
    context.arc(x, y, 50, 0, Math.PI * 2); // Outer circle
    context.stroke();}
    // context.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    // context.moveTo(165, 65);
    // context.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    // context.moveTo(195, 65);
    // context.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    // context.stroke();

    canvas.addEventListener('mousemove', function(event){
      // console.log('clicked', event);
      // console.log('location', event.x, event.y);
      drawCircle(event.x, event.y);
    })

    const img = document.createElement('img');
    img.src = "https://pbs.twimg.com/profile_images/788554727378325505/8lzc7jXx_reasonably_small.jpg"

    const drawImg = function(){
      context.drawImage(img, 200, 200, 90, 90);
    }

    img.addEventListener('load', drawImg);


})
