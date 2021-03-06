var playerGravity = 0.14;

function Player(canvas) {
  this.x = 800;
  this.y = 600;
  this.vx = 0;
  this.vy = 1;
  this.width = 50;
  this.height = -160;
  this.isMovingLeft = false;
  this.isMovingRight = false;
};

function Player2(canvas) {
  this.x = 200;
  this.y = 600;
  this.vx = 0;
  this.vy = 1;
  this.width = 50;
  this.height = -160;
  this.isMovingLeft = false;
  this.isMovingRight = false;
};
    
Player.prototype.move = function(e){
  if(this.isMovingRight === true && this.x + this.width+50 <= canvas.width) this.x+= 20;
  if(this.isMovingLeft === true && this.x  > 0)this.x -= 20;
  switch(e.keyCode){
    case 39:
      this.isMovingRight = true;
      this.isMovingLeft = false;  
      break
    case 37:
    this.isMovingRight = false;
    this.isMovingLeft = true;  
      break
    case 38:
    if (this.y == 600) {
      this.y -= 5;
      this.vy -= 13;
      }
      break
    }
}

Player2.prototype.move = function(e){
  if(
    this.isMovingRight === true && this.x + this.width <= canvas.width)this.x+= 20;
  if(this.isMovingLeft === true && this.x -20 > 0)this.x -= 20;
  switch(e.keyCode){
    case 68:
      player2.isMovingRight = true;
      this.isMovingLeft = false;  
      break
    case 65:
    this.isMovingRight = false;
    this.isMovingLeft = true;  
      break
    case 87:
    if (this.y == 600) {
      this.y -= 5;
      this.vy -= 13;
      }
      break
    }
}


Player.prototype.jump = function() {
  var gravity = 0.4;

  if (this.y >= 600) {
    this.vy = 1;
    this.y = 600;
  } else {
    this.vy += gravity;
    this.y += this.vy;
  }    
}

Player2.prototype.jump = function() {
  var gravity = 0.4;

  if (this.y >= 600) {
    this.vy = 1;
    this.y = 600;
  } else {
    this.vy += gravity;
    this.y += this.vy;
  }    
}

Player.prototype.draw = function(){
    var player1 = new Image();
    player1.src = './img/player1.png';
    ctx.drawImage(player1, this.x-55, this.y, 180, -230);

}

Player2.prototype.draw = function(){
  var player2 = new Image();
  player2.src = './img/player2.png';
  ctx.drawImage(player2, this.x-55, this.y, 180, -230);
}