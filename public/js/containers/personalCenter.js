/**
 * Created by 十九 on 2018/3/8.
 */

import {connect} from "react-redux";
import PersonalCenter from "../components/personalCenter";

const mapStateToProps = (state) => {
    return {
        loginTip:state.login.loginTip[0].id,
        cancelTip:state.personalCenter.cancelTip
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        cancellation:(info)=>{

            dispatch({type:"CANCELLATION_USER",info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PersonalCenter);