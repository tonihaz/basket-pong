var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//player = new Player ();



function Player() {
  this.x = 700;
  this.y = 600;
  this.speedX = 0;
  this.speedY = 0;

}
    
Player.prototype.move = function(){
    document.onkeydown = function(e) {
        switch(e.keyCode){
          case 39:
            this.x = this.x+20;   
            console.log(this.x + " right")
            break
          case 37:
            this.x = this.x-20;
            console.log(this.x + " left")
            break
        //   case 38:
        //     this.isMovingUp = true;
        //     break
        //   case 40:
        //     this.isMovingDown = true;
        //     break
          }
      }.bind(this)
    }

Player.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = '#DF0101'
    ctx.fillRect(this.x, this.y, 50, -200);
    ctx.closePath();
}


//   this.newPos = function() {
//     this.x += this.speedX;
//     this.y += this.speedY; 
//   }
//   this.left   = function() { return this.x                 }
//   this.right  = function() { return (this.x + this.width)  }
//   this.top    = function() { return this.y                 }
//   this.bottom = function() { return this.y + (this.height) }


// function updateGameArea() {
//   player.newPos();
//   player.update();
// }

//   function moveUp() {
//     player.speedY -= 1; 
// }

// function moveDown() {
//     player.speedY += 1; 
// }

// function moveLeft() {
//     player.speedX -= 1;
// }

// function moveRight() {
//     player.speedX += 1;
// }

// document.onkeydown = function(e) {
//   switch (e.keyCode) {
//     case 38:
//       moveUp();
//       break;
//     case 40:
//       moveDown();
//       break;
//     case 37:
//       moveLeft();
//       break;
//     case 39:
//       moveRight();
//       break;
//   }
// }

// document.onkeyup = function(e) {
//   stopMove();
// }

// function stopMove() {
//     player.speedX = 0;
//     player.speedY = 0; 
// }