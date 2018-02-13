/**
 * Created by 十九 on 2018/1/21.
 */
import {connect} from "react-redux";
import Register from "../components/register";

const mapStateToProps = (state) => {
    console.log(state+"containers");
    return {
        registerTip:state.register.registerTip
        //console.log(state.registerTip);
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        register:(info)=>{
            dispatch({type:"REGISTER",info});
        },
        reset:(info)=>{
            dispatch({type:'RESET',info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Register);