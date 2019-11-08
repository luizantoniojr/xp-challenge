import { hot } from 'react-hot-loader';
import React from 'react';
import Content from './components/content';
import './App.css';

const App = () => (
    <div className="App">
        <Content>
            <h1>{process.env.ENV}</h1>
        </Content>
    </div>
);

export default hot(module)(App);