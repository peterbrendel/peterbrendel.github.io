let maxHeight;
let speed = 15;
let player;
let canvas;
let props = [];

function setup() {

	canvas = createCanvas(windowWidth/2, windowHeight/2);
	canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
	frameRate(500);
	textSize(20);
	textAlign(CENTER);
	noStroke();
	player = new Bubble(25, height-height/10);
	maxHeight = height-height/10 - 40;

}

function draw() {
	
	drawGround();
	addProp();
	moveBubble();
	drawCharacter();
<<<<<<< HEAD
	for(let i=props.length-1; i>=0; i--){
		props[i].move();
		props[i].draw();
		if(props[i].checkBounds()){
			deleteFirst();
		}
=======
	for(i=props.length-1; i>=0; i--){
		props[i].propLoop();
>>>>>>> 5accbafd94dc3bc1409774e922555b2327721a26
	}
	//ellipse(width/2, maxHeight, 15, 15);// Debug Ellipse;

}

function drawGround() {

	background(0, 125, 255);
	fill(125);
	rect(0, height-height/6, width, height/6);
	push();
		fill(255);
		text(round(frameRate()), width-width/30, height-height/1.08);
	pop();

}

function deleteFirst(){
	props.splice(0,1);
}

function keyPressed(){

	if(keyCode == UP_ARROW){
		player.jump();
	}

}

function touchStarted() {
	player.jump();
	return false;
}

function touchEnded() {
	return false;
}
