//document.addEventListener

window.onload = function() {
  //var game = new Game("canvas");
  function start(){
    game;
   var game = new Game("canvas");
   
  }


  document.getElementById("start1p").onclick = function() {
    //initialScreen.classList.add("hide");
    canvas.classList.remove("hide1");
    var gameStartBg = document.getElementById("startScreen");
    gameStartBg.classList.add("hide1");
    start();

    
  };

 

  // function start(){
  //   game;
  //  var game = new Game("canvas");
  // }


  // document.onkeydown = function(event) {
  //   switch (event.keyCode){
  //    case 38: 
  //     game.player.jump(); 
  //       break;
  //    case 37: 
  //     game.player.moveLeft(); 
  //       break;
  //    case 39:   
  //     game.player.moveRight(); 
  //       break;

  //    case 87: 
  //     game.player2.jump(); 
  //       break;
  //    case 65: 
  //     game.player2.moveLeft(); 
  //       break;
  //    case 68: 
  //     game.player2.moveRight(); 
  //       break;
   // }
  //}
};

