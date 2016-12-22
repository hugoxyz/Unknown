import {Router, Route, browserHistory, hashHistory} from 'react-router';
import App from '../App'
import Main from '../component/Main'

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const RouteConfig =
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Main} />
        </Route>
    </Router>;

export default RouteConfig;
