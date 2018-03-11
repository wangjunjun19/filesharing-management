/**
 * Created by 十九 on 2018/1/21.
 */
import {connect} from "react-redux";
import Login from "../components/login";

const mapStateToProps = (state) => {
    return {
        loginTip: state.login.loginTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin:(info)=>{
            dispatch({type:"LOGIN_SUBMIT",info});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);