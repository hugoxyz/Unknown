
import React from 'react';
import ReactDOM from 'react-dom';

console.log(`React Version:${React.version}`);
console.log(`ReactDOM Version:${ReactDOM.version}`);

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);

