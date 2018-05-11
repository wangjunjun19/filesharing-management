
import {connect} from "react-redux";
import AdminPer from "../components/adminPer";

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
        } ,
        resetPer:(info)=>{
            dispatch({type:'RESET_PER',info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AdminPer);