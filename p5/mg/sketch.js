let maxHeight;
let speed = 15;
let player;

function setup() {

	let canvas = createCanvas(windowWidth/2, windowHeight/2);
	canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
	noStroke();
	player = new Bubble(25, height-height/10);
	maxHeight = height-height/10 - 25;

}

class Bubble {

	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.yDefault = y;
		this.canJump = true;
	}

	jump() {
		if(this.canJump){
			this.jumping = true;
			this.canJump = false;
		}
	}
		
}

function draw() {

	drawGround();
	moveBubble();
	drawCharacter();
	//ellipse(width/2, maxHeight, 15, 15); Debug Ellipse;

}

function drawGround() {

	background(0, 125, 255);
	fill(125);
	rect(0, height-height/6, width, height/6);

}

function moveBubble(){

	if(player.jumping){
		player.y-=0.1*speed;
		if(player.y <= maxHeight){
			player.jumping = false;
		}
	}else if(!player.canJump){
		player.y+=0.1*speed;
		if(player.y >= player.yDefault){
			player.canJump = true;
		}
	}

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