var c = document.getElementById("yes_we_canvas");
var ctx = c.getContext("2d");

var b1 = document.getElementById("clear");
var b2 = document.getElementById("stop");

var requestID;

var clear = function(){
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500);
    ctx.stroke();
    window.cancelAnimationFrame(requestID);
};

var stop = function(){
    window.cancelAnimationFrame(requestID);
};

var animate = function(){
    window.cancelAnimationFrame(requestID);
    var radius = 0
    var bigger = true;
    var draw = function(){
	clear();
	ctx.fillStyle = "lightsteelblue";
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
	ctx.fill();
	ctx.stroke();
	if (bigger){
	    radius++;
	}
	else{
	    radius--;
	}
	if (radius <= 0 || radius >= c.height/2){
	    bigger = !bigger;
	}
	requestID = window.requestAnimationFrame(draw);
    };
    draw();
};


b1.addEventListener("click", clear);
b2.addEventListener("click", stop);
c.addEventListener("click", animate);
