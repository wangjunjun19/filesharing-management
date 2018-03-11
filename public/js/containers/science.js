/**
 * Created by 十九 on 2018/3/6.
 */


import {connect} from "react-redux";
import Science from "../components/science";

const mapStateToProps = (state) => {
    return {
        scienceList:state.science.scienceList
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getScienceList:()=>{
            dispatch({type:"GET_SCIENCE_LIST"})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Science);