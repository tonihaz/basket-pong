function Game(canvadId) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");
  canvas.width = 1000;
  canvas.height= 600;
  this.fps = 20;
  player = new Player ();
  player2 = new Player2 ();
  ball = new Ball ()
  
  // document.onkeydown = function(event) {
  //   switch (event.keyCode){
  //    case 87: game.player.jump(); break;
  //    case 65: game.player.moveLeft(); break;
  //    case 68: game.player.moveRight(); break;
  //    //case 86: game.player.shoot(); break;
  //    case 104: game.player2.jump(); break;
  //    case 100: game.player2.moveLeft(); break;
  //    case 102: game.player2.moveRight(); break;
  //    //case 80: game.player2.shoot(); break;
  //   }
  // }
  
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
  player2.move();
  player.move();
  player.jump ();
  player2.jump ();
  player.draw();
  player2.draw();
  score(ball);
  score2(ball);
  document.getElementById('score').innerHTML =  Score + " points";
  document.getElementById('score2').innerHTML =  Score2 + " points";
  if(Score == 7){
    alert("Player 1 win")
  }
  if(Score2 == 7){
    alert("Player 2 win")
  }
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