import alt from 'MyAlt';
import ConnectAction from "actions/ConnectAction"
import ConnectStore from 'stores/ConnectStore'

describe('ConnectStore', () => {
    it('handleUpdateGreeting', () => {
        var data = "Hello World",
        action = ConnectAction.UPDATE_GREETING;
        alt.dispatcher.dispatch({action, data});

        // assertions
        expect(ConnectStore.getState().greeting).toBe("Hello World");
    });
});
