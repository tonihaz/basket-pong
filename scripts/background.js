function Background (game) {
  this.game = game;

  this.img = new Image();
  this.img.src = 'img/bg.jpg';
}

Background.prototype.draw = function () {
this.game.ctx.drawImage (this.img, 0, 0)
}

function draw() {
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
  };
  img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
}