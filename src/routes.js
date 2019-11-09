import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import AlbumInfo from './pages/albumInfo';
import AddToken from './pages/addToken';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AlbumInfo/:id" component={AlbumInfo} />
            <Route path="/AddToken" component={AddToken} />
        </Switch>
    </BrowserRouter>
)

export default Routes;