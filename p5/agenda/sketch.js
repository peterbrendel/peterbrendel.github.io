let canvas;
let calendar;
let colorizer = 127;

function setup(){

	canvas = createCanvas(1280,720);
	canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
	calendar = new Calendar();
	noStroke();
	ellipseMode(CENTER);
}

function draw(){
	background(120);
	
	let red=colorizer;

	for(each of calendar.months){
		fill(red,0,200);
		 if(each.intercepts())
			fill(red, 0, 200, 100);
		ellipse(each.x, each.y, 210);
		red+=10;
	}
	// console.log(_x, _y);
}


function windowResized(){
	canvas.position((windowWidth-width)/2,(windowHeight-height)/2);
}