
var canvas = document.getElementById("loader");
var ctx = canvas.getContext("2d");

canvas.width = 150;
canvas.height = 150;

var cx = canvas.width/2;
var cy = canvas.height/2;

var side = 40;
var margin = 0;
var d = 0;
var goBack = false;
var stopSpin = true;
var angle = 0;

ctx.fillStyle = '#001a1a';


function draw () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(cx + margin + d, cy + margin + d, side, side);
	ctx.fillRect(cx - margin - d, cy + margin + d, -side, side);
	ctx.fillRect(cx - margin - d, cy - margin - d, -side, -side);
	ctx.fillRect(cx + margin + d, cy - margin - d, side, -side);
}

function animate () {
	requestAnimationFrame(animate);
	if( d >= 8){
		goBack = true;  
	}else if (d <= 0){
		goBack = false;
	}

	if (!goBack){
		d += 0.4;
	}else {
		d -= 0.4;
	}
	draw();
}

requestAnimationFrame(animate);




