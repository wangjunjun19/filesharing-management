/**
 * Created by 十九 on 2018/3/6.
 */

import {connect} from "react-redux";
import MyShare from "../components/myShare";

const mapStateToProps = (state) => {
    return {
        myShareList:state.myShare.myShareList,
        loginTip:state.login.loginTip[0].id,
        deleteFileTip:state.myShare.deleteFileTip
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getMyShareList:(info)=>{
            console.log(info.user_id+"++container__id")
            dispatch({type:"GET_MY_SHARE_LIST",info})
        },
        deleteFile:(info)=>{
            dispatch({type:"DELETE_FILE",info})
        },
        searchMy:(info)=>{
            dispatch({type:"SEARCH_MY",info});
        },
        downFile:(info)=>{
            dispatch({type:"DOWN",info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(MyShare);