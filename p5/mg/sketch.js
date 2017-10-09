let maxHeight;
let speed = 15;
let player;
let canvas;

function setup() {

	canvas = createCanvas(windowWidth/2, windowHeight/2);
	canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
	noStroke();
	player = new Bubble(25, height-height/10);
	maxHeight = height-height/10 - 25;

}

function draw() {

	drawGround();
	moveBubble();
	drawCharacter();
	let p = new Enemy(width);
	//ellipse(width/2, maxHeight, 15, 15); Debug Ellipse;

}

function drawGround() {

	background(0, 125, 255);
	fill(125);
	rect(0, height-height/6, width, height/6);

}

function drawCharacter() {

	fill(55);
	ellipse(player.x, player.yDefault+7, 15-map(player.y, maxHeight, player.yDefault, 4, 0), 5);
	fill(0);
	ellipse(player.x, player.y, 15, 15);

}

function keyPressed(){

	if(keyCode == UP_ARROW){
		player.jump();
	}

}