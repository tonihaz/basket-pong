// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

//player = new Player ();

var playerGravity = 0.14;

function Player(canvas) {
  this.x = 800;
  this.y = 600;
  this.vx = 0;
  this.vy = 1;
  this.width = 50;
  this.height = -160;

};

// function jump () {
//   if (this.y >= 600) {
//     this.vy = 1;
//     this.y = 600;
//   } else {
//     this.vy += playerGravity;
//     this.y += this.vy;
//   }
// }
    
Player.prototype.move = function(){
    document.onkeydown = function(e) {
        switch(e.keyCode){
          case 39:
            if(this.x<1000-50){
              this.x = this.x+20;}   
            console.log(this.x + " right")
            break
          case 37:
            if (this.x>0){
              this.x = this.x-20;
            }
            console.log(this.x + " left")
            break

          case 38:
          if (this.y == 600) {
            this.y -= 5;
            this.vy -= 13;
          // } else {
          //   this.vy += playerGravity;
          //   this.y -= this.vy;
           }
          console.log(this.y + " jump")
            break
        //     this.isMovingUp = true;
        //     break
        //   case 40:
        //     this.isMovingDown = true;
        //     break
          }
      }.bind(this)
    }

Player.prototype.jump = function() {
  // Aumenta la velocidad en el eje y.
  var gravity = 0.4;

  // solo salta cuando el personaje está en el suelo
  if (this.y >= 600) {
    this.vy = 1;
    this.y = 600;
  } else {
    this.vy += gravity;
    this.y += this.vy;
  }    
}

Player.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = '#DF0101'
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.closePath();
    var face = new Image();
    face.src = './img/michael-jordan-face-png-2.png';
    ctx.drawImage(face, this.x-35, this.y-230, 120, 80)
    // ctx.beginPath();
    // ctx.arc((this.x+25), (this.y-190), 30, 0, Math.PI * 2, true);
    // ctx.closePath();
    // ctx.fillStyle = this.color;
    // ctx.fill();
}
