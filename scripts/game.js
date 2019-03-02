

function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  


  function update() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    //drawBackground();
    drawBasket();
    player = new Player (700, 600);
    ball.draw();
    
    ball.vy += gravity;
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.y + ball.vy > canvas.height - radius|| ball.y + ball.vy < radius) {
    ball.vy *= -1;
  }
  if (ball.x + ball.vx > canvas.width - radius || ball.x + ball.vx < radius) {
    ball.vx *= -1;
  }
  


  }
  
  
  
  setInterval(update, 20);
  
  //this.reset();
}
