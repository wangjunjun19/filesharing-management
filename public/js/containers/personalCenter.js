/**
 * Created by 十九 on 2018/3/8.
 */

import {connect} from "react-redux";
import PersonalCenter from "../components/personalCenter";

const mapStateToProps = (state) => {
    return {
        loginTip:state.login.loginTip[0],
        cancelTip:state.personalCenter.cancelTip,
        userInfoTip:state.personalCenter.userInfoTip,
        updateTip:state.personalCenter.updateTip
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        cancellation:(info)=>{

            dispatch({type:"CANCELLATION_USER",info})
        },
        getUserInfo:(info)=>{
            dispatch({type:"USER_INFO",info})
        },
        updateUser:(info)=>{
            dispatch({type:"UPDATE_USER",info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PersonalCenter);