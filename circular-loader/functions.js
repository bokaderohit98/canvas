var canvas = document.getElementById('loader');
var ctx = canvas.getContext('2d');
var colors = [];
var cx = canvas.width/2;
var cy = canvas.height/2;
var d = 30;
var r = 10;
var angle = 0;
var goback = false;


function setColor(){
	colors.push('#ffff00');
	colors.push('#ff0000');
	colors.push('#0000ff');
}

function getPath(angle, i){
	var path = [];
	path.push(cx + d*Math.cos((angle+i*120)*Math.PI/180));
	path.push(cy - d*Math.sin((angle+i*120)*Math.PI/180));
	return path;
}

function drawCircle(x, y, color){
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 4*Math.PI);
		ctx.fillStyle = color;
		ctx.fill();
		ctx.closePath();
}

function drawCircles(){
	var x,y;
	var path = [];
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for(var i = 0; i < 3; i++){
		path = getPath(angle, i);
		x = path[0];
		y = path[1];
		drawCircle(x, y, colors[i]);
	}

	if(d == 10)
		goback = true;
	else if(d == 30)
		goback = false;

	if(goback)
		d++;
	else
		d--;

	angle++;
}
