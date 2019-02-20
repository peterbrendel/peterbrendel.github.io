let canvas;
let dots;
let a=0;
let colors = []
function setup() {
	canvas = createCanvas(600, 600);
	canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
	noStroke();
	dots = 10;
	rectMode(CENTER);
	angleMode()
	from = color(255, 0, 0);
	to = color(0,0,255);
	for(let i = 1; i <= 10; i++){
		colors.push(lerpColor(from,to, 0.10*i));
	}

}

function draw() {
	translate(width/2, height/2);
	background(0);
	fill(255);
	let r = 200;
	for(let i = 0; i < TWO_PI; i += TWO_PI / 10.0){
		let x = r * cos(i);
		let y = r * sin(i);
		fill(colors[int(i)]);
		push();
		translate(x,y)
		rotate(i-HALF_PI);
		rect(0, 0, 50, 10);
		pop();
	}
}
