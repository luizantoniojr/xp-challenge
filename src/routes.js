import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Album from './pages/album';
import Token from './pages/token';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Album/:id" component={Album} />
            <Route path="/Token" component={Token} />
        </Switch>
    </BrowserRouter>
)

export default Routes;