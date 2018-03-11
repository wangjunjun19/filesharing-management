/**
 * Created by 十九 on 2018/2/13.
 */
import {connect} from "react-redux";
import ModifyPass from "../components/modifyPass.js";

const mapStateToProps = (state) => {
    return {
        modifyPassTip:state.modifyPass.modifyPassTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        modifyPass:(info)=>{
            dispatch({type:'MODIFYPASS',info});
        },
        resetModifyPass:(info)=>{
            dispatch({type:'RESET_MODIFY_PASS',info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ModifyPass);
 