function Game(canvadId) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");
  canvas.width = 1000;
  canvas.height= 600;
  this.fps = 20;
  player = new Player ();
  player2 = new Player2 ();
  ball = new Ball ()

  var audio = new Audio('./audio/NBAsound.mp3');
  audio.play();

  setInterval(update, 20);
  
}
function update() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  drawBackground();
  drawBasket();
  drawBasket2();
  ball.move();
  ball.collision();
  ball.draw();
  document.onkeydown = function(e) {
    player2.move(e);
    player.move(e);
  }.bind(this)
  player.jump ();
  player2.jump ();
  player.draw();
  player2.draw();
  score(ball);
  score2(ball);
  document.getElementById('score').innerHTML =  Score + " points";
  document.getElementById('score2').innerHTML =  Score2 + " points";
  if(Score == 7){
    if(alert("Player 2 win"))
    {}
      else    
      window.location.reload(); ;   
  }
  if(Score2 == 7){    
    if(alert("Player 1 win")){}
      else    
      window.location.reload(); 
  }

  
}
