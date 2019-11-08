import React from 'react';
import { hot } from 'react-hot-loader/root';

import './style.css';

const App = () => (
    <div className="App">
        <h1>{process.env.ENV}</h1>
    </div>
);

export default hot(App);
