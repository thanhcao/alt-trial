import SocketIO from "socket.io-client"
import ConnectAction from "actions/ConnectAction"

class NetworkManager {
    connectSocket(domain) {
        var self = this
        self.socket = SocketIO(domain,{reconnection: false})

        // system
        self.socket.on('connection', () => {
            console.log("Connected")
        })

        self.socket.on('greeting', (data) => {
            if(data.greeting){
                ConnectAction.updateGreeting(data.greeting)
            }
        })

        self.socket.on('connect_error', function(err){
            ConnectAction.updateError(err.message)
        });

        self.socket.on('disconnect', function(){
            ConnectAction.clearGreeting()
        })
    }

    disconnectSocket(){
        var self = this
        if(self.socket.connected){
            self.socket.disconnect()
        }
    }
}

var networkManager = new NetworkManager()
export default networkManager