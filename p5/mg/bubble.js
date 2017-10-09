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