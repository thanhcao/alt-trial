import ConnectAction from 'actions/ConnectAction'
import ConnectStore from 'stores/ConnectStore'

describe('ConnectActions', function() {
    describe('#updateError', function() {
        it('dispatches correct data', function() {
            ConnectAction.updateError("Show Error Page");
            expect(ConnectStore.getState().error).toBe("Show Error Page");
        });
    })
});
