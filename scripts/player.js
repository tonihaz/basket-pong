var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

player = new Player ();

function Player(x, y) {
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  ctx.fillStyle = '#DF0101'
  ctx.fillRect(this.x, this.y, 50, -200);

  window.onkeydown = function(event) {
    var keyPr = event.keyCode; //Key code of key pressed
  
    if(keyPr === 39 && x<=1000){ 
        this.x = x+20;
        console.log("right") //right arrow add 20 from current
    }
    else if(keyPr === 37 && x>0){
        this.x = x-20;
        console.log("left") //left arrow subtract 20 from current
    }
    else if(keyPr === 38 && y>0) {
        this.y = y-20; 
        console.log("up")//top arrow subtract 20 from current
    }
    else if(keyPr === 40 && y<=600){
        this.y = y+20;
        console.log("bottom") //bottom arrow add 20 from current
    }
    
    /*clearing anything drawn on canvas
     *comment this below do draw path */
    this.clear(0,0, 500, 500);
  
    //Drawing rectangle at new position
    player(this.x,this.y);
  };
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
