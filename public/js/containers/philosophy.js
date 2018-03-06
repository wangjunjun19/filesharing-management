/**
 * Created by 十九 on 2018/3/6.
 */


import {connect} from "react-redux";
import Philosophy from "../components/philosophy";

const mapStateToProps = (state) => {
    console.log(state.philosophy.philosophyList+"___________container economicList");
    return {
        philosophyList:state.philosophy.philosophyList
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getPhilosophyList:()=>{
            dispatch({type:"GET_PHILOSOPHY_LIST"})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Philosophy);