import {combineReducers} from 'redux';
import login from "./login";
import register from "./register";
import modifyPass from "./modifyPass";
import userHomePage from "./userHomePage";
import addFiles from "./addFiles"
import uploadFile from "./upload"
import allFile from "./allFile"
import myShare from"./myShare"
import differentTypeListShow from './differentTypeListShow'
import personalCenter from './personalCenter'
import nav from './nav'
import perRecom from './perRecom'
export default combineReducers({
    login,
    register,
    modifyPass,
    userHomePage,
    addFiles,
    uploadFile,
    allFile,
    myShare,
    differentTypeListShow,
    personalCenter,
    nav,
    perRecom
});
