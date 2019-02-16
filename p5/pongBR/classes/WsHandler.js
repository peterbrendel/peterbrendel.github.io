class WsHandler {

    constructor(){}

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
        console.log("WebSocket MESSAGE: " + wsMsg);
        if (wsMsg.indexOf("error") > 0) {
            console.log("error: " + wsMsg.error + "\r\n");
        } else {
            console.log("message: " + wsMsg + "\r\n");
        }
    }
}
