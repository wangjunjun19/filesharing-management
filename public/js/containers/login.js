/**
 * Created by 十九 on 2018/1/21.
 */
import {connect} from "react-redux";
import Login from "../components/login";

const mapStateToProps = (state) => {
    console.log(state+"_logincon");
    return {
        loginTip: state
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