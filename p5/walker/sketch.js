var canvas;
var angle=0;
var xPos=0;
var yPos=0;
var zPos=0;
var a=1;
var b=1;
var c=1;

function setup() { 

	canvas = createCanvas(500, 500, WEBGL);
	canvas.position((windowWidth-500)/2, (windowHeight-500)/2);
	
}

function draw() { 
	canvas.position((windowWidth-500)/2, (windowHeight-500)/2);
	background(230);
	ambientLight(255);
	camera(0, 150, tan(PI/6), 0, 0, 0, 0, 1, 0);
	rotateY(mouseX/100);
	//ambientLight(255);
	push();
		ambientMaterial(0,0,255);
		translate(0,250,0);
		rotateX(PI/2);
		plane(500, 500);
	pop();
	push();
		translate(xPos,yPos,zPos);	
		rotate(angle,[a,b,c]);
		// box(30);
		normalMaterial();
		sphere(30);
	pop();

	yPos+=1.5;
	if(yPos>=height/2-30)
		yPos=height/2-30;

	if(keyIsDown(87 || 119)){
		zPos+=1;
		angle+=0.1;
		a=1;
		b=0;
		c=0;
	}
	if(keyIsDown(83 || 115)){
		zPos-=1;
		angle+=0.1;
		a=-1;
		b=0;
		c=0;
	}

	if(!keyIsDown(87 || 119) && !keyIsDown(83 || 115)){
		a=1;
		b=1;
		c=1;
	}

}

function keyPressed(){
	if(key == ' '){
		yPos-=60;
	}
}