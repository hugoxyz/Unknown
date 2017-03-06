import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    combineReducers
} from 'redux-immutable';

import * as reducer from '../reducer/reducer';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers(reducer),
    applyMiddleware(thunk)
);

export default store;
