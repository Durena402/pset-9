var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 80;
var paddleHeight = 5;
var paddleWidth = 50;
var paddlex = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
//var ballRadius=10;
var brickRowNum = 4;
var brickColumnNum = 5;
var count = brickRowNum * brickColumnNum;
var rem = count;
var score = document.getElementById("score");
var lives = document.getElementById("lives")
var brickWidth = 10;
var brickHeight = 15;
var brickPadding = 7;
var brickOffsetTop = 30;
var brickOffsetLeft = 40;
var bricks=[];
  for(z = 0;z < brickColumnNum; ++z){
    bricks[z] = [];
    for(a = 0; a < brickRowNum;++a){
      bricks[a][z]= {x:0, y:0, status:1};
    }
  }
  var dx= 3.5;
  var dy= -3.5;
  
