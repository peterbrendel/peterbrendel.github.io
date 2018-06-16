let master = 50;
let wins = 9;

function setup() {

	let canvas = createCanvas(800, 80);
	canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
	background(255);
	// background(0,255,0);
	fill(75, 125, 255);
	noStroke();
	noCursor();
	textFont('cursive', 36);
	textStyle(BOLD);
	// textAlign(CORNER);

}

function draw() {
	
	// translate(width/2, height/2);
	fill(0);
	text('Road to Master', width/3, 30);
	text('Wins:', 0, height-5);
	text(str(wins), wins/master*width-43, height-5);
	text(str(master), width-43, 30);
	rectMode(CORNER);
	fill(255, 100);
	rect(0,0,width, height);
	fill(50,150,255, 100);
	rect(0,0,wins/master*width, 80);


}

