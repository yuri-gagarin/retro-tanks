export default function () {
  const canvas = document.getElementById("ballCanvas");
  const context = canvas.getContext('2d');
 
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 3;
  

  function drawBall(x, y) {
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI*2, false);
    context.stroke();
  }
  init();
  //context.fillStyle='green';
  //context.fillRect(10, 10, 15, 100);
  function init() {
    window.addEventListener('resize', () => {
      resizeCanvas(canvas);
    })
    draw();
  }
  function draw() {
    for (let i = 0; i < 100; i++) {
      let width = canvas.width;
      let height = canvas.height;
      let x = Math.round(Math.random() * width);
      let y = Math.round(Math.random() * height);
      drawBall(x, y);
    }
  }
  function redraw() {
    context.restore();
  }
  function resizeCanvas(canvas) {
    context.save();
    console.log("calling")
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 3;
    redraw();
  }
  
};




