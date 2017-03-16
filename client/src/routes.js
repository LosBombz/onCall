import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import DashboardPage from './components/DashboardPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={DashboardPage} />
    </Route>
);
