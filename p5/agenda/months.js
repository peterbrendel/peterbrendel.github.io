class Month{
	constructor(month, x, y){
		this.days = []
		this.x = x+160;
		this.y = y+120;
		this.d = 210;
		this.r = this.d/2;
		for(let i=0; i<=30; i++){
			this.days[i] = i;
		}
	}

	intercepts(){
		return sqrt(((mouseX-this.x)*(mouseX-this.x))+((mouseY-this.y)*(mouseY-this.y))) < this.r;
	}
}