import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import reducer from "./reducers/index";

import Register from './containers/register';
import Login from './containers/login';
import ModifyPass from './containers/modifyPass';

import loginMiddleware from './middlewares/login'
import registerMiddleware from './middlewares/register'
import modifyPassMiddleware from './middlewares/modifyPass'

const createStoreWithMiddleware = applyMiddleware(
    registerMiddleware,
    loginMiddleware,
    modifyPassMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/modifyPass" component={ModifyPass}/>

    </Router>
</Provider>, document.getElementById("content"));
