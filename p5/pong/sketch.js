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
let ball;
let speed = 10;
let sender = false;

function setup() {

	canvas = createCanvas(600, 400);
	canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
	frameRate(500);
	textSize(20);
	textAlign(CENTER);
	noStroke();
	maxHeight = height-height/10 - 40;
	peer = new Peer();
	send_data = peer.connect(getURLParams().opponent);
	rectMode(CENTER);
	localChar = {x:40, y:200, w:10, h:80};
	enemyChar = {x:width-40, y:200, w:10, h:80};
	ball 	  =	{x:300,y:200, r:10};

	peer.on('open', function(id) {
		myId = id;
		console.log('My peer ID is: ' + id);
		background(0);
		fill(255);
		text(myId, width/2, height/2, width/2, height/2);
	});

	peer.on('connection', function(conn) {
		if(!connected){
			console.log('Connected');
			send_data = peer.connect(conn.peer);
			connected = true;
		}
		conn.on('data', receiveData);
	} );

}



function draw() {
	
	background(0);
	fill(255);

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

	rect(localChar.x, localChar.y, localChar.w, localChar.h);
	rect(enemyChar.x, enemyChar.y, enemyChar.w, enemyChar.h);
	
	ellipse(ball.x, ball.y, ball.r);

	move(ball);

	if(connected)
		send({x:enemyChar.x, y:localChar.y, w:localChar.w, h:localChar.h});

}

function receiveData(data){
	console.log('Received : ', data);
	enemyChar = data;
}

function send(data){
	let send = data;
	send_data.send(send);
}

function move(ball){

	ball.x+=speed;


	if(ball.x < 100){
		if(collides(ball, localChar)){
			speed*=-1;
			console.log("Collision");
		}
	}else{
		if(collides(ball, enemyChar)){
			speed*=-1;
			console.log("Right Collision");
		}
	}

	if(ball.x > width || ball.x < 0)
		speed*=-1;

}

function collides(ball,rect){
    var distX = Math.abs(ball.x - rect.x-rect.w/2);
    var distY = Math.abs(ball.y - rect.y-rect.h/2);

    if((ball.y > rect.y+(rect.h/2)) || (ball.y < rect.y-(rect.h/2))) { return false; }

    if(ball.x == rect.x) { return true; }

    return false;
}
