var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())

var server = require('http').createServer(app)
var SocketIO = require('socket.io')(server)

class Server{
    constructor(){
        this.initWebSocket()
    }

    initWebSocket(){
        var self = this
        this.websocket = SocketIO.use((socket, next) => {
            return next()
        })

        this.websocket.on('connection', function(client){
            client.emit('greeting', { greeting:"hello" });

            console.log('[Client][Connected]')
            client.on('disconnect', function(){
                console.log('[Client][Disconnected]')
            })
        })
    }

    start(port) {
        var self = this
        server.listen(port)
    }
}

const myserver = new Server()
myserver.start(4000)