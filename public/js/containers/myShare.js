/**
 * Created by 十九 on 2018/3/6.
 */

import {connect} from "react-redux";
import MyShare from "../components/myShare";

const mapStateToProps = (state) => {
    return {
        myShareList:state.allFile.myShareList,
        loginTip:state.login.loginTip[0].id
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getMyShareList:(info)=>{
            console.log(info.user_id+"++container__id")
            dispatch({type:"GET_MY_SHARE_LIST",info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(MyShare);