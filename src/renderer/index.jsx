
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Route from './router/Route';

console.log(`React Version:${React.version}`);
console.log(`ReactDOM Version:${ReactDOM.version}`);

ReactDOM.render(
    <Provider>
        <Route/>
    </Provider>,
    document.getElementById('app')
);

