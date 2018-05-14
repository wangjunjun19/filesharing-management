/**
 * Created by 十九 on 2018/2/23.
 */
import {connect} from "react-redux";
import UserHomePage from "../components/userHomePage";

const mapStateToProps = (state) => {
    console.log(state+"containers");
    return {
        presentShow:state.userHomePage.presentShow,
        loginTip: state.login.loginTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPresentShow:(target)=>{
            dispatch({type:"GET_PRESENT_SHOW",target});
        },
        getDifferentTypeList:(info)=>{
            dispatch({type:"GET_FILE_LIST",info})
        },
        getAllFileList:()=>{
            dispatch({type:"GET_ALL_FILE_LIST"})
        },
        getMyShareList:(info)=>{

            dispatch({type:"GET_MY_SHARE_LIST",info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserHomePage);