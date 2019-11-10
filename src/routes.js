import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import AlbumInfo from './pages/albumInfo';
import Token from './pages/token';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AlbumInfo/:id" component={AlbumInfo} />
            <Route path="/Token" component={Token} />
        </Switch>
    </BrowserRouter>
)

export default Routes;