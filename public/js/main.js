import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import reducer from "./reducers/index";

import Register from './containers/register';
import Login from './containers/login'

import loginMiddleware from './middlewares/login'
import registerMiddleware from './middlewares/register'

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>

    </Router>
</Provider>, document.getElementById("content"));
