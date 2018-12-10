
// Technical variables

let maxHeight = 0;
let canvas = null;
let peer = null;
let myId = null;
let sendData = null;
let opponentData = null;
//let sound_hit = null;
//let sound_mis = null;

// Entities

let localPlayer = null;
let enemyPlayer = null;
let scoreboard = null;
let ball = null;

// Booleans

let sender = false;
let receiver = false;
let sync = false;
let playing = false;
let connected = false;

// Constants

let MOVE_UP = -5;
let MOVE_DN = 5;

//

function setup() {

	canvas = createCanvas(600, 400);
	canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
	frameRate(60);
	textSize(20);
	textAlign(CENTER);
	noStroke();
	maxHeight = height-height/10 - 40;
	peer = new Peer(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 12), {secure: true});
	if(getURLParams().opponent != undefined)
		sendData = peer.connect(getURLParams().opponent, {label:"sender"});
	rectMode(CENTER);
	translate(width/2, height/2);
	//sound_hit = loadSound("assets/hit.mp3");
	//sound_mis = loadSound("assets/mis.mp3");
	//setVolume(0.1);

	localPlayer = new Player(-width/2+40, 0, 8, 80, color(0, 0, 255));
	enemyPlayer = new Player(width/2-40, 0, 8, 80, color(255, 0, 0));
	ball = new Ball(0, 0, 10, color(255,255,255));
	scoreboard = new Scoreboard();
	opponentData = null;

	peer.on('open', function(id) {
		myId = id;
		push();
			fill(255);
			textSize(30);
			text("My ID: " + myId, 0, -height/2 + 80);
		pop();
		console.log('My peer ID is: ' + id);
	});
	
	peer.on('connection', function(conn) {
		if(!connected){
			console.log('Connected');
			connected = true;
			console.log(conn.label);
			if(conn.label == "sender"){
				sendData = peer.connect(conn.peer, {label:"receiver"});
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
	scoreboard.show();
	localPlayer.draw();
	enemyPlayer.draw();
	ball.draw();

}

function draw() {
	translate(width/2, height/2);
	if(connected && playing){

		background(0);

		if(sender){

			if(keyIsDown(UP_ARROW)){
				localPlayer.move(MOVE_UP);
			}

			if(keyIsDown(DOWN_ARROW)){
				localPlayer.move(MOVE_DN);
			}

			ball.move(scoreboard);

			if(ball.x > 200){
				ball.checkCollision(enemyPlayer);		//Pode estar com problema aqui xD
			}else if(ball.x < -200){
				ball.checkCollision(localPlayer);
			}
			send({local:localPlayer.getData(), ball:ball.getData(), score:scoreboard.getData()});
			// send({enemy:localPlayer, ball:ball, score:score});

		}else if(receiver){
			if(keyIsDown(UP_ARROW)){
				enemyPlayer.move(MOVE_UP);
			}

			if(keyIsDown(DOWN_ARROW)){
				enemyPlayer.move(MOVE_DN);
			}
			send({enemy:enemyPlayer.getData()});
		}

		scoreboard.show();
		localPlayer.draw();
		enemyPlayer.draw();
		ball.draw();
		//ball.playSound(enemyPlayer);
		//ball.playSound(localPlayer);

	}else{
		
		if(keyIsDown(ENTER)){
			send({begin:1});
		}
		if(keyIsDown(CONTROL)){
			console.log("updated");
		}

	}

}

function receiveData(data){
	if(!playing){
		if(data.begin == 1){
			playing = true;
			send({begin:1});
		}
	}
	if(receiver){
		localPlayer.setData(data.local);
		ball.setData(data.ball);
		scoreboard.setData(data.score);
	}else if(sender){
		enemyPlayer.setData(data.enemy);
	}
}

function send(data){
	sendData.send(data);
}
