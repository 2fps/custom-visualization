import screenActionType from '../actionType/screen';

let screenData = {
    ceshi: 0
};

export default function(state = screenData, action) {
    switch (action.type) {
        case screenActionType.DRAG_START:
            return Object.assign({}, state, {
                ceshi: action.data.ceshi
            });
        default:
            return state;
    }
};