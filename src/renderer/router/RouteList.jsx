import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import App from '../App';
import Main from '../container/Main';

const history = process.env.NODE_ENV !== 'production' ? browserHistory : browserHistory;

class RouteList extends React.Component {
  render() {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Main} />
            </Route>
        </Router>
    );
  }
}

export default RouteList;
