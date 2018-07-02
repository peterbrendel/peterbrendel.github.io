let maxHeight;
let canvas;
let peer;
let myId;
let send_data = null;
let me;
let recv_data;
let recvd;
let connected = false;
let localChar;
let enemyChar;
let opponentData;
let ball;
let speedX = 10;
let speedY = 0;
let sender = false;
let receiver = false;
let sync = false;

function setup() {

	canvas = createCanvas(600, 400);
	canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
	frameRate(500);
	textSize(20);
	textAlign(CENTER);
	noStroke();
	speedY = random(1, 5);
	maxHeight = height-height/10 - 40;
	peer = new Peer();
	send_data = peer.connect(getURLParams().opponent, {label:"sender"});

	rectMode(CENTER);
	localChar = {x:40, y:200, w:10, h:80};
	enemyChar = {x:width-40, y:200, w:10, h:80};
	ball 	  =	{x:300,y:200, r:10};
	opponentData = null;

	peer.on('open', function(id) {
		myId = id;
		console.log('My peer ID is: ' + id);
		// background(0);
		// fill(255);
		// text(myId, width/2, height/2, width/2, height/2);
	});

	peer.on('connection', function(conn) {
		if(!connected){
			console.log('Connected');
			connected = true;
			console.log(conn.label);
			if(conn.label == "sender"){
				send_data = peer.connect(conn.peer, {label:"receiver"});
				sender = false;
				receiver = true;
			}else if(conn.label == "receiver"){
				sender = true;
				receiver = false;
			}
		}
		conn.on('data', receiveData);
	});

	background(0);
	fill(255);
	rect(localChar.x, localChar.y, localChar.w, localChar.h);
	rect(enemyChar.x, enemyChar.y, enemyChar.w, enemyChar.h);
	
	ellipse(ball.x, ball.y, ball.r);

}

function draw() {
	if(connected){

		background(0);
		fill(255);

		if(sender){
			if(keyIsDown(UP_ARROW)){
				localChar.y-=5;
				if(localChar.y <= 40)
					localChar.y = 40;
			}

			if(keyIsDown(DOWN_ARROW)){
				localChar.y+=5;
				if(localChar.y >= 360)
					localChar.y = 360;
			}

			move(ball);
			send({enemy:{x:localChar.x, y:localChar.y, w:localChar.w, h:localChar.h}, ball:ball});
		}else if(receiver){
			if(keyIsDown(UP_ARROW)){
				enemyChar.y-=5;
				if(enemyChar.y <= 40)
					enemyChar.y = 40;
			}

			if(keyIsDown(DOWN_ARROW)){
				enemyChar.y+=5;
				if(enemyChar.y >= 360)
					enemyChar.y = 360;
			}

			send({local:{x:enemyChar.x, y:enemyChar.y, w:enemyChar.w, h:enemyChar.h}});

		}

		rect(localChar.x, localChar.y, localChar.w, localChar.h);
		rect(enemyChar.x, enemyChar.y, enemyChar.w, enemyChar.h);
		
		ellipse(ball.x, ball.y, ball.r);

		// console.log("sender", sender);
		// console.log("receiver", receiver);

	}

}

function receiveData(data){
	// console.log(data);
	if(receiver){
		localChar = data.enemy;
		ball = data.ball;
	}else if(sender){
		enemyChar = data.local;
	}
}

function send(data){
	send_data.send(data);
}

function move(ball){

	ball.x+=speedX;
	ball.y+=speedY;

	if(ball.x < 100){
		if(collides(ball, localChar)){
			speedX*=-1;
			console.log("Collision");
		}
	}else{
		if(collides(ball, enemyChar)){
			speedX*=-1;
			console.log("Right Collision");
		}
	}

	if(ball.x > width || ball.x < 0){
		speedX*=-1;
	}

	if(ball.y > height || ball.y < 0){
		speedY*=-1;
	}


}

function collides(ball,rect){
    var distX = Math.abs(ball.x - rect.x-rect.w/2);
    var distY = Math.abs(ball.y - rect.y-rect.h/2);

    if((ball.y > rect.y+(rect.h/2)) || (ball.y < rect.y-(rect.h/2))) { return false; }

    if(ball.x == rect.x) { return true; }

    return false;
}