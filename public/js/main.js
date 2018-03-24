import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import reducer from "./reducers/index";

import Register from './containers/register';
import Login from './containers/login';
import ModifyPass from './containers/modifyPass';
import UserHomePage from './containers/userHomePage';
import AddFiles from './containers/addFiles';
import  PersonalCenter from './containers/personalCenter'

import loginMiddleware from './middlewares/login'
import registerMiddleware from './middlewares/register'
import modifyPassMiddleware from './middlewares/modifyPass'
import addFilesMiddleware from './middlewares/addFiles'
import personalCenterMiddleware from './middlewares/personalCenter'
import allFileMiddleware from './middlewares/allFile'
import myShareMiddleware from './middlewares/myShare'
import differentTypeListShowMiddleware from './middlewares/differentTypeListShow'
import navMiddleware from './middlewares/nav';

const createStoreWithMiddleware = applyMiddleware(
    registerMiddleware,
    loginMiddleware,
    modifyPassMiddleware,
    addFilesMiddleware,
    personalCenterMiddleware,
    allFileMiddleware,
    myShareMiddleware,
    differentTypeListShowMiddleware,
    navMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/modifyPass" component={ModifyPass}/>
        <Route path="/userHomePage" component={UserHomePage}/>
        <Route path="/addFiles" component ={AddFiles}/>
        <Route path="/personalCenter" component ={PersonalCenter}/>
    </Router>
</Provider>, document.getElementById("content"));