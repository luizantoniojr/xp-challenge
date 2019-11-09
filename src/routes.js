import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import AlbumInfo from './pages/albumInfo';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AlbumInfo/:id" component={AlbumInfo} />
        </Switch>
    </BrowserRouter>
)

export default Routes;