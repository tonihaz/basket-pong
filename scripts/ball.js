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

var ball = {
  x: 600,
  y: 400,
  vx: 9,
  vy: 9,
  radius: radius,
  color: '#ff6700',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

ball.draw();


function update() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.y + ball.vy > canvas.height - radius|| ball.y + ball.vy < radius) {
  ball.vy *= -1;
}
if (ball.x + ball.vx > canvas.width - radius || ball.x + ball.vx < radius) {
  ball.vx *= -1;
}
}

setInterval(update, 20)

