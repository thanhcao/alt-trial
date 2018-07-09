import alt from "MyAlt"

class ConnectAction {
    updateGreeting(message) {
        return message;
    }

    updateError(error) {
        return error;
    }

    clearGreeting(){
        return null
    }

    restart(){
        return null
    }
}

module.exports = alt.createActions(ConnectAction);