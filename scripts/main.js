window.onload = function() {
  //var game = new Game("canvas");
  function start(){
    game;
   var game = new Game("canvas");
   
  }

  document.getElementById("start1p").onclick = function() {
    canvas.classList.remove("hide1");
    var gameStartBg = document.getElementById("startScreen");
    gameStartBg.classList.add("hide1");
    start();
  };
};

