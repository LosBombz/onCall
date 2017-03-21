// Set up your application entry point here...
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {loadUsers} from './actions/userActions';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';

const store = configureStore();

store.dispatch(loadUsers());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
