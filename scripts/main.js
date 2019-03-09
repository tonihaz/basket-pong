//document.addEventListener

window.onload = function() {
  //var game = new Game("canvas");

  document.getElementById("start1p").onclick = function() {
    console.log("dentro")
    //initialScreen.classList.add("hide");
    canvas.classList.remove("hide1");
    var gameStartBg = document.getElementById("startScreen");
    gameStartBg.classList.add("hide1");
    start();
  };


  function start(){
    var game = new Game("canvas");
  }
};

