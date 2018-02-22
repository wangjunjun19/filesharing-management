/**
 * Created by 十九 on 2018/2/13.
 */
import {connect} from "react-redux";
import ModifyPass from "../components/modifyPass.js";

const mapStateToProps = (state) => {
    console.log(state+"containers");
    return {
        modifyPassTip:state
    }
};
//console.log(modifyPassTip+"______dix");
const mapDispatchToProps = (dispatch) => {
   //console.log(info+"_______con_info");
    return {
        modifyPass:(info)=>{
            dispatch({type:'MODIFYPASS',info});
        },
        reset:(info)=>{
            dispatch({type:'RESET',info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ModifyPass);
 