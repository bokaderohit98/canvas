var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = 30;
var dy = -0.5;
var dx = 0.5;
var dX = 1;
var ballRadius = 10;
var paddleHeight = 15;
var paddleWidth = 70;
var paddleX = (canvas.width-paddleWidth)/2;
var leftPressed = false;
var rightPressed = false;
var keyPressed = false;
var gameOver = false;
var score = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    } 
    else if(e.keyCode == 37) {
        leftPressed = true;
        console.log("arrow Pressed");
    }
    keyPressed = true;
    console.log("key Pressed");
}


function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    keyPressed = false;

}

function reset(){
	x = canvas.width/2;
	y = 30;
	dy = -0.5;
	dx = 0.5;
	score = 0
	dX = 1;
	paddleX = (canvas.width-paddleWidth)/2;
	gameOver = false;
}


function drawBall(){
	ctx.beginPath();
	ctx.arc(x,y,ballRadius,0,Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function drawPaddle(){
	ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function moveBall(){
	drawBall();
	if(x+dx > canvas.width - ballRadius || x+dx < ballRadius)
		dx = -dx;
	if(y + dy < ballRadius)
	    dy = -dy;
	else if(y + dy >= canvas.height-ballRadius-paddleHeight)
	    if(x >= paddleX && x <= paddleX + paddleWidth)
	        dy = -dy;
	else if(y + dy >= canvas.height-ballRadius){
		gameOver = true;
		return;
	}
	x += dx;
	y += dy;
}

function movePaddle() {
	drawPaddle();
	if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += dX;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= dX;
    }
}

function drawScore(){
	ctx.font = "12px Comic Sans";
	ctx.textAlign = "center";
	ctx.fillStyle = "black";
	ctx.fillText("Score "+Math.floor(score),canvas.width-50,30);
}

function speedUp(){
	speed = 0.03;
	if(dx > 0)
		dx += speed;
	else
		dx -= speed;
	if(dy > 0)
		dy += speed;
	else 
		dy -= speed;
	dX += speed;

}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(!gameOver){
		drawScore();
		moveBall();
		movePaddle();
		score += 0.05;
	}
	else{
		ctx.font = "30px Comic Sans";
		ctx.strokeStyle = "black";
		ctx.textAlign = "center";
		ctx.strokeText("Game Over", canvas.width/2, canvas.height/2); 
		ctx.font = "15px Comic Sans";
		ctx.fillStyle = "black";
		ctx.fillText("Press any key to restart",canvas.width/2,canvas.height-100);
		if(keyPressed)
			reset();

	}
}

setInterval(draw,1);
setInterval(speedUp,2000)



