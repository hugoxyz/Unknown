
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import store from './redux/store/Store';
import Route from './router/RouteList';
import { Action } from './redux/action';
import Immutable from 'immutable';

import { Unknown } from '../unknown/Unknown';

console.log(`React Version:${React.version}`);
console.log(`ReactDOM Version:${ReactDOM.version}`);
console.log(`Unknown Version:${Unknown.version}`);

injectTapEventPlugin ();

ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>,
    document.getElementById('app')
);

Unknown.init();
Unknown.world.entityAdded('Transform').add((entity) => {
    const info = Immutable.fromJS({
        id: entity.id,
        name: entity.getComponent('Name').d
    });
    store.dispatch(Action.EntityAction.entityAddAct(info))
})
