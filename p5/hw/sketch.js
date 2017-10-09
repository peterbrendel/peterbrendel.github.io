let hello = "Hello World";
let r = 0;
let g = 0;
let b = 0;
let w = 0;
let x = 0;
let y = 0;
let crescendo = true;
let angle = 0;

function setup() {

	let canvas = createCanvas(800, 800);
	canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
	background(0);
	fill(75, 125, 255);
	noStroke();
	noCursor();
	textFont('cursive', 72);
	textStyle(BOLD);
	textWidth(hello);
	textAlign(CENTER);
	angleMode(DEGREES);

}

function draw() {
	fill(r+16,g+32,b+128);
	background(0, 0, 0, 80);
	r = map(sin(w), -1, 1, 0, 255);
	g = map(cos(x), -1, 1, 0 ,255);
	b = map(tan(y), -1, 1, 0, 255);

	translate(400, 400);
	
	push();
		
		noFill();
		stroke(r, g, b);
		strokeWeight(20);
		ellipse(0, 0, 450, 450);
		
		for(let i=550; i>200; i-=50){
			if(crescendo){
				arc(0, 0, 220+i, 220+i, 0, map(sin(angle),-1, 1, 0, 360));
				angle+=0.3;
				rotate(angle)		
				if(sin(angle) >= 0.999)
					crescendo = false;

			}else{
				arc(0, 0, 220+i, 220+i, 0, map(sin(angle),1, -1, 0, 360));
				angle-=0.3;
				rotate(angle);
				if(sin(angle) <= -0.999)
					crescendo = true;
			}
			// 	ellipse(-sin(w)*i, -cos(w)*i, 20, 20);
		}
	pop();

	text(hello, 0, 0);

	w = (w + 2) % 360;
	x = (x + 4) % 360;
	y = (y + 8) % 360;
}

