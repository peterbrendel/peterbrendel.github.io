
// Technical variables
let maxHeight = 0;
let canvas = null;
var webSocket   = null;
var ws_protocol = "ws";
var ws_hostname = "localhost";
var ws_port     = "1501";

// Entities

// Booleans

// Constants
const MOVE_UP = -5;
const MOVE_DN = 5;
const handler = new WsHandler();
//

function preload(){

	let webSocketUrl = ws_protocol + "://" + ws_hostname + ":" + ws_port;
	console.log("Connecting to " + webSocketUrl);
	try{
		webSocket = new WebSocket(webSocketUrl);
		webSocket.onopen = (openEvent) => {handler.openEvent(openEvent)};
		webSocket.onclose = (closeEvent) => {handler.closeEvent(closeEvent)};
		webSocket.onerror = (errorEvent) => {handler.errorEvent(errorEvent)};
		webSocket.onmessage = (messageEvent) => {handler.messageEvent(messageEvent)};

	} catch (exception) {
		console.error(exception);
	}
}

function setup() {
	//	Canvas configuration
	canvas = createCanvas(600, 600);
	canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
	frameRate(60);
	textSize(20);
	textAlign(CENTER);
	noStroke();
	maxHeight = height-height/10 - 40;
	rectMode(CENTER);
	//
}

function draw() {
	translate(width/2, height/2);
	background(0);
	
	handler.getPlayers().forEach((player) => {
		player.draw();
	})

}

function mouseMoved(){
	webSocket.send(mouseX + "," + mouseY)
}