// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');
// var centerX = canvas.width / 2;
// var centerY = canvas.height / 2;
// var radius = 70;

// context.beginPath();
// context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
// context.fillStyle = 'green';
// context.fill();
// context.lineWidth = 5;
// context.strokeStyle = '#003300';
// context.stroke();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var radius = 30
var gravity =  0.14;
var colorBall = '#ff6700';


// var ball = {
//   x: 600,
//   y: 400,
//   vx: 6,
//   vy: 6,
//   radius: radius,
//   color: '#ff6700',
//   draw: function draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//     ctx.closePath();
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   }
// };

// ball.draw();





function Ball (canvas){
  this.x= 600;
  this.y= 400;
  this.vx= 6;
  this.vy= 6;
  this.radius= 30;  
}

Ball.prototype.move = function(){
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

Ball.prototype.collision = function (){
    if (this.x + this.radius >= player.x && this.y + this.radius >= player.y + player.height && this.x - this.radius <= player.x + player.width){
        this.vx *= -1.1
    }
    if (
      this.x - this.radius <= player.x + player.width  &&
      this.x+this.radius >= player.x && 
      this.y + this.radius >= player.y + player.height - 100 &&
      this.y + this.radius <= player.y + player.height
       ){
      this.vy *= -1.9
      this.vx *= -1.1
    } 
}


Ball.prototype.draw = function (){
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = colorBall;
  ctx.fill();
}











// function update() {
//   ctx.clearRect(0,0, canvas.width, canvas.height);
//   drawBackground();
//   ball.draw();
  
//   ball.vy += gravity;
//   ball.x += ball.vx;
//   ball.y += ball.vy;
//   if (ball.y + ball.vy > canvas.height - radius|| ball.y + ball.vy < radius) {
//   ball.vy *= -1;
// }
// if (ball.x + ball.vx > canvas.width - radius || ball.x + ball.vx < radius) {
//   ball.vx *= -1;
// }
// }



// setInterval(update, 20);



