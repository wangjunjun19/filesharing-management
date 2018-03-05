import {combineReducers} from 'redux';
import login from "./login";
import register from "./register";
import modifyPass from "./modifyPass";
import userHomePage from "./userHomePage";
import addFiles from "./addFiles"
import uploadFile from "./upload"
import allFile from "./allFile"
export default combineReducers({
    login,
    register,
    modifyPass,
    userHomePage,
    addFiles,
    uploadFile,
    allFile
});
