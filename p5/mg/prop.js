class Prop {

	constructor(x){
		this.x = x;
		this.y = height-height/10-random(-10, 10);
		this.r = 0;
		this.g = 255;
		this.b = 0;
	}

	move() {
		this.x-=5;
	}

	draw(){
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, 25, 25);
	}

	checkBounds() {
		return this.x < -25;
	}

}

function addProp() {

	if(!(frameCount % 60)){
		props.push(new Enemy(width+25));
	}
	if(!(random(1, 100) % 4)){
		props.push(new Prop(width+25));
	}
}

function propLoop(){
	this.move();
	this.draw();
	if(this.checkBounds()){
		deleteFirst();
	}
}
