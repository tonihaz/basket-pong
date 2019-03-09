function Game(canvadId) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");
  canvas.width = 1000;
  canvas.height= 600;
  this.fps = 20;
  player = new Player ();
  player2 = new Player2 ();
  ball = new Ball ()
  
  
  setInterval(update, 20);
  
  //this.reset();
}
function update() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  drawBackground();
  drawBasket();
  drawBasket2();
  ball.move();
  ball.collision();
  ball.draw();
  player.move();
  player.jump ();
  player.draw();
  player2.draw();
  score(ball);
  document.getElementById('score').innerHTML =
  Score + " points"
  // ball.vy += gravity;
  // ball.x += ball.vx;
  // ball.y += ball.vy;
  // if (ball.y + ball.vy > canvas.height - radius|| ball.y + ball.vy < radius) {
  //   ball.vy *= -1;
  // }
  // if (ball.x + ball.vx > canvas.width - radius || ball.x + ball.vx < radius) {
  //   ball.vx *= -1;
  // }

}


