import {combineReducers} from 'redux';
import login from "./login";
import register from "./register";
import modifyPass from "./modifyPass";
import userHomePage from "./userHomePage";
import addFiles from "./addFiles.js"
export default combineReducers({
    login,
    register,
    modifyPass,
    userHomePage
});
