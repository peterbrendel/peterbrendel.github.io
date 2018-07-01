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
	localChar = [40, 200, 10, 80];
	enemyChar = [40, 200, 10, 80];

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
	});

}



function draw() {
	
	background(0);
	fill(255);

	if(keyIsDown(UP_ARROW)){
		localChar[1]-=5;
		if(localChar[1] <= 0)
			localChar[1] = 0;
	}

	if(keyIsDown(DOWN_ARROW)){
		localChar[1]+=5;
		if(localChar[1] >= 320)
			localChar[1] = 320;
	}

	rect(localChar[0],localChar[1],localChar[2],localChar[3]);
	rect(width-enemyChar[0]-10, enemyChar[1], enemyChar[2], enemyChar[3]);

	send([enemyChar[0], localChar[1], localChar[2], localChar[3]]);

}

function receiveData(data){
	console.log('Received : ', data);
	enemyChar = data;
}

function send(data){
	let send = data;
	send_data.send(send);
}
