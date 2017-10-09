let acceleration=3;
let gravity=1;

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
		player.y-=0.1*speed*acceleration;
		acceleration/=1.1;
		if(player.y <= maxHeight){
			player.jumping = false;
			acceleration=3;
		}
	}else if(!player.canJump){
		player.y+=0.1*speed*gravity;
		gravity*=1.06;
		if(player.y >= player.yDefault){
			player.y = player.yDefault;
			player.canJump = true;
			gravity=1;
		}
	}

}

function drawCharacter() {

	fill(55);
	ellipse(player.x, player.yDefault+7, 15-map(player.y, maxHeight, player.yDefault, 4, 0), 5);
	fill(0);
	ellipse(player.x, player.y, 15, 15);

}