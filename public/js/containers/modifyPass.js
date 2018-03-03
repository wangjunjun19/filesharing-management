/**
 * Created by 十九 on 2018/2/13.
 */
import {connect} from "react-redux";
import ModifyPass from "../components/modifyPass.js";

const mapStateToProps = (state) => {
    console.log(state.modifyPass.modifyPassTip+"__containers");
    return {
        modifyPassTip:state.modifyPass.modifyPassTip
    }
};

const mapDispatchToProps = (dispatch) => {
   //console.log(info+"_______con_info");
    return {
        modifyPass:(info)=>{
            dispatch({type:'MODIFYPASS',info});
        },
        resetModifyPass:(info)=>{
            dispatch({type:'RESET_MIDIFYPASS',info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ModifyPass);
 