import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import screen from './reducer/screen';

let store = createStore(
    combineReducers({
        screen
    }),
    applyMiddleware(thunk)
);

export default store;