// function collisionDetection() {
//   for(c=0; c<brickColumnCount; c++) {
//       for(r=0; r<brickRowCount; r++) {
//           var b = bricks[c][r];
//           if(b.status == 1) {
//               if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
//                   dy = -dy;
//                   b.status = 0;
//               }
//           }
//       }
//   }
// }

// function collisionDetection(){
//   if (ball.x = basket.x && ball.y = basket.y){
//     ball.vx = ball.-vx && ball.y = ball.-y
//   }
// }

// Ball.prototype.collisionDetect = function() {
//   for (var j = 0; j < balls.length; j++) {
//     if (!(this === balls[j])) {
//       var dx = this.x - balls[j].x;
//       var dy = this.y - balls[j].y;
//       var distance = Math.sqrt(dx * dx + dy * dy);

//       if (distance < this.size + balls[j].size) {
//         balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
//       }
//     }
//   }
// }
// var ball={x:100,y:290,r:10};
// var rect={x:100,y:100,w:40,h:100};

// return true if the rectangle and circle are colliding
function RectCircleColliding(ball,basket){
    var distX = Math.abs(ball.x - basket.x-basket.w/2);
    var distY = Math.abs(ball.y - basket.y-basket.h/2);

    if (distX > (basket.w/2 + ball.r)) { return false; }
    if (distY > (basket.h/2 + ball.r)) { return false; }

    if (distX <= (basket.w/2)) { return true; } 
    if (distY <= (basket.h/2)) { return true; }

    var dx=distX-basket.w/2;
    var dy=distY-basket.h/2;
    return (dx*dx+dy*dy<=(ball.r*ball.r));
}