import { hot } from 'react-hot-loader';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Content from './components/content';
import SideBar from './components/sideBar';
import Routes from './routes';
import { store, persistor } from './store';

import './App.css';

const App = () => (
    <div className="App">
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SideBar></SideBar>
                <Content>
                    <Routes />
                </Content>
            </PersistGate>
        </Provider>
    </div>
);

export default hot(module)(App);