let canvas;
let dots;
let a=0;
function setup() {
	canvas = createCanvas(600, 600);
	canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
	noStroke();
	dots = 2000;
}

function draw() {
	translate(width/2, height/2);
	background(0);
	fill(255);
	let a = 1;
	for(let i = 0; i < dots; i++){
		let angle = a * i;
		let x = cos(angle) + 1/2 + 1/2 * cos(2*angle);
		let y = sin(angle) + 1/2 * sin(2*angle);
		x = map(x, 0, 2, -width/3, +width/3);
		y = map(y, -1, 1, height/3, -height/3);
		fill(x, y, 255 );
		ellipse(x, y, 10);
	}
}
