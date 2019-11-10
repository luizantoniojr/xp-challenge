import { hot } from 'react-hot-loader';
import React from 'react';
import { Provider } from 'react-redux';

import Content from './components/content';
import SideBar from './components/sideBar';
import Routes from './routes';
import store from './store';

import './App.css';

const App = () => (
    <div className="App">
        <Provider store={store}>
            <SideBar></SideBar>
            <Content>
                <Routes />
            </Content>
        </Provider>
    </div>
);

export default hot(module)(App);