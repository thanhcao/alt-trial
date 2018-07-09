import alt from "MyAlt"
import ConnectAction from "actions/ConnectAction"

class ConnectStore {
    constructor() {
        this.greeting = null
        this.error = null

        this.bindListeners({
            handleUpdateGreeting: ConnectAction.UPDATE_GREETING,
            handleUpdateError: ConnectAction.UPDATE_ERROR,
            handleClearGreeting: ConnectAction.CLEAR_GREETING,
            handleRestart: ConnectAction.RESTART
        });
    }

    handleUpdateGreeting(message) {
        this.greeting = message;
    }

    handleUpdateError(error) {
        this.error = error;
    }

    handleClearGreeting(){
        this.greeting = null;
    }

    handleRestart(){
        this.greeting = null
        this.error = null
    }

}

module.exports = alt.createStore(ConnectStore, 'ConnectStore');
