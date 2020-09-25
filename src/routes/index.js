import React from 'react';
import { Switch, Route } from "react-router-dom";

import Dashboard from '../pages/Dashboard';
import Filmes from '../pages/Filmes';

const Routes = () => (
    <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/filmes" component={Filmes} />
    </Switch>
);

export default Routes;