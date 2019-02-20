class WsHandler {

    constructor(){
        this.me = -1
        this.players = []
    }

    openEvent(args) {
        console.log("WebSocket OPEN: " + JSON.stringify(args, null, 4));
    }

    closeEvent(args) {
        console.log("WebSocket CLOSE: " + JSON.stringify(args, null, 4));
    }

    errorEvent(args) {
        console.log("WebSocket ERROR: " + JSON.stringify(args, null, 4));
    }

    messageEvent(args) {
        var wsMsg = args.data;
        console.log("WebSocket MESSAGE");
        if (wsMsg.indexOf("error") > 0) {
            console.log("error: " + wsMsg.error + "\r\n");
        } else {
            var msg = JSON.parse(wsMsg);
            this.me = msg["YourId"];
            console.log(msg);
            if(msg["PacketId"] == 1){
                if(msg["Player"]){
                    let myData = msg["Player"].split(",");
                    for(let i=0; i<myData.length; i++){
                        myData[i] = parseFloat(myData[i],10);
                    }
                    this.players.push(new Player(myData[0], myData[1], myData[2], color(0,0,255)));
                }
                
                for(let i=0; i<10; i++){
                    if(msg[""+i]){
                        let temp = msg[""+i];
                        let data = temp.split(",");
                        for(let i=0; i<data.length; i++){
                            data[i] = parseFloat(data[i]);
                        }
                        this.players.push(new Player(data[0], data[1], data[2],color(255,0,0)))
                    }
                }
            }
        }
    }

    getPlayers() {
        return this.players;
    }

    getMe() {
        return this.me;
    }
}
