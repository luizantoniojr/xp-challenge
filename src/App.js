import { hot } from 'react-hot-loader';

import React from 'react';

import './style.css';

const App = () => (
    <div className="App">
        <h1>{process.env.ENV} olá </h1>
    </div>
);

export default hot(module)(App);