class Enemy {

	constructor(x){
		this.x = x;
		this.y = height-height/10-5;
	}

	move() {
		this.x--;
	}

	draw(){
		fill(255,0,0);
		ellipse(this.x, this.y, 25, 25);
	}


}