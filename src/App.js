import { hot } from 'react-hot-loader';
import React from 'react';
import Content from './components/content';
import SideBar from './components/sideBar';
import Routes from './routes';

import './App.css';

const App = () => (
    <div className="App">
        <SideBar></SideBar>
        <Content>
            <Routes />
        </Content>
    </div>
);

export default hot(module)(App);