/**
 * Created by 十九 on 2018/3/6.
 */

import {connect} from "react-redux";
import Law from "../components/law";

const mapStateToProps = (state) => {
    return {
        lawList:state.law.lawList
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getLawList:()=>{
            dispatch({type:"GET_LAW_LIST"})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Law);