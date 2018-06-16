class Calendar {
	
	constructor(){
		this.months = [];
		let offsetX = 0;
		let offsetY = 0;
		for(let i=0; i<12; i++){
			this.months[i] = new Month(i, offsetX, offsetY);
			offsetX+=width/4;
			if(offsetX>=width){
				offsetY+=height/3;
				offsetX=0;
			}
		}
	}
}