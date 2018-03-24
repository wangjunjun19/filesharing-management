/**
 * Created by 十九 on 2018/2/23.
 */
import {connect} from "react-redux";
import UserHomePage from "../components/userHomePage";

const mapStateToProps = (state) => {
    console.log(state+"containers");
    return {
        presentShow:state.userHomePage.presentShow
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPresentShow:(target)=>{
            dispatch({type:"GET_PRESENT_SHOW",target});
        },
        getDifferentTypeList:(info)=>{
            console.log(info.file_type+"_____——info.file_type___contain");
            dispatch({type:"GET_FILE_LIST",info})
        },
        getAllFileList:()=>{
            dispatch({type:"GET_ALL_FILE_LIST"})
        },
        getMyShareList:(info)=>{
            console.log(info.user_id+"++container__id")
            dispatch({type:"GET_MY_SHARE_LIST",info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserHomePage);