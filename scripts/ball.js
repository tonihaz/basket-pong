var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var radius = 30
var gravity =  0.1;
var colorBall = '#ff6700';

var Score = 0;
var Score2 = 0

function Ball (canvas){
  initialPosX = 600;
  initialPosY = 800;
  initialVx= 9;
  initialVy= 7;
  this.x= 600;
  this.y= 400;
  this.vx= 9;
  this.vy= 8;
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
    if (this.x + this.radius >= player.x && 
      this.y + this.radius >= player.y + player.height && 
      this.x - this.radius <= player.x + player.width){
        this.vx *= -1
      // this.vx = -9
      // this.vy = -6   
    }
    if (
      this.x - this.radius <= player.x + player.width  &&
      this.x+this.radius >= player.x && 
      this.y + this.radius >= player.y + player.height - 10 &&
      this.y + this.radius <= player.y + player.height
       ){
      this.vy *= +1.2
      this.vx *= -1
      // this.vx = 9
      // this.vy = -6
    } 
    if (this.x + this.radius >= player2.x && 
      this.y + this.radius >= player2.y + player2.height && 
      this.x - this.radius <= player2.x + player2.width){
        this.vx *= -1
      // this.vx = -9
      // this.vy = -6   
    }
    if (
      this.x - this.radius <= player2.x + player2.width  &&
      this.x+this.radius >= player2.x && 
      this.y + this.radius >= player2.y + player2.height - 10 &&
      this.y + this.radius <= player2.y + player2.height
       ){
      this.vy *= +1.2
      this.vx *= -1
      // this.vx = 9
      // this.vy = -6
    } 
    if (
      this.x - this.radius <= 130  &&
      this.x - this.radius >= 125 &&
      //this.x-this.radius >= player.x && 
      this.y + this.radius >= 258 &&
      this.y - this.radius <= 262
      ){
      this.vy *= -1
      this.vx *= -1
    } 
    if (
      this.x - this.radius >= 0  &&
      this.x - this.radius <= 10  &&
      //this.x-this.radius >= player.x && 
      this.y  <= 260 &&
      this.y  >= 130
      ){
      //this.vy = 2
      this.vx = 1.2
    } 
    if (
      this.x + this.radius >= canvas.width - 10  &&
      this.x + this.radius <= canvas.width  &&
      //this.x-this.radius >= player.x && 
      this.y  <= 260 &&
      this.y  >= 130
      ){
      //this.vy = 2
      this.vx = 1.2
    } 
}


Ball.prototype.draw = function (){
  var ball = new Image();
  ball.src = './img/ball2.png';
  ctx.drawImage(ball, this.x-radius, this.y-radius, 60, 60);
}

function score (obj){
if (obj!= undefined)
  if (
    obj.vy >= 0 &&
    //this.y + this.radius <= 255 && 
    //this.y + this.radius >= 265 && 
    obj.y <= 260 &&
    obj.y >= 240 &&
    obj.x + obj.radius <= 125 &&
    obj.x - obj.radius >= 0
    ){
      Score++;
      if (Score === 1) {
        var audio = new Audio('./audio/defense.mp3');
        audio.play();
      } else
      var audio = new Audio('./audio/Swish.mp3');
      audio.play();
      obj.x = 600;
      obj.y = 200;
      obj.vx = 9;
      obj.vy = 6;
      ctx.font = "16px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Score: "+Score, 8, 20);
  }
}

function score2 (obj){
  if (
    obj.vy >= 0 &&
    //this.y + this.radius <= 255 && 
    //this.y + this.radius >= 265 && 
    obj.y <= 260 &&
    obj.y >= 240 &&
    obj.x + obj.radius <= canvas.width &&
    obj.x - obj.radius >= canvas.width - 125
    ){
      Score2++;
      if (Score2 === 1) {
        var audio = new Audio('./audio/chof.mp3');
        audio.play();
      } else
      var audio = new Audio('./audio/Swish.mp3');
      audio.play();
      obj.x = 600;
      obj.y = 200;
      obj.vx = 9;
      obj.vy = 6;
      ctx.font = "16px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Score: "+Score2, 8, 20);
  }
}
