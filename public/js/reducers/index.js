import {combineReducers} from 'redux';
import login from "./login";
import register from "./register";
import modifyPass from "./modifyPass";
import userHomePage from "./userHomePage";
import addFiles from "./addFiles"
import uploadFile from "./upload"
import allFile from "./allFile"
import myShare from"./myShare"
import economic from "./economic"
import philosophy from "./philosophy"
import law from "./law"
import science from'./science'
import differentTypeListShow from './differentTypeListShow'
export default combineReducers({
    login,
    register,
    modifyPass,
    userHomePage,
    addFiles,
    uploadFile,
    allFile,
    myShare,
    economic,
    philosophy,
    law,
    science,
    differentTypeListShow
});
