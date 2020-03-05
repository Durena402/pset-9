var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var canvasWidth = 500;
var canvasHeight = 600;
var ballRadius = 12.5;
var x = canvasWidth / 2;
var y = canvasHeight - 30;
var dx = 2;
var dy = -2;
var paddleHeight = 5;
var paddleWidth = 50;
var paddleX = (canvasWidth - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowNum = 6;
var brickColumnNum = 5;

var brickWidth = 50;
var brickHeight = 10;
var brickPadding = 5;
var brickOffsetTop = 10;
var brickOffsetLeft = 10;
var score = 0;
var lives = 3;

var bricks = [];
for(z = 0;z < brickColumnNum; ++z){
  bricks[z] = [];
  for(a = 0; a < brickRowNum;++a){
    bricks[z][a]= {x:0, y:0, status:1};
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}
