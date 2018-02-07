var c = document.getElementById("yes_we_canvas");
var ctx = c.getContext("2d");

var b1 = document.getElementById("clear");
var b1 = document.getElementById("stop");

var requestID;
var radius = 0

var clear = function(){
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500);
    ctx.stroke();
};

var animate = function(){
    window.cancelAnimationFrame(requestID);
    var draw = function(){
	clear();
	ctx.fillStyle = "lightsteelblue";
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
	ctx.fill();
	ctx.stroke();
	radius++;
	requestID = window.requestAnimationFrame(draw);
	console.log(requestID);
    };
    draw();
};


b1.addEventListener("click", clear);
b1.addEventListener("click", clear);
c.addEventListener("click", animate);
