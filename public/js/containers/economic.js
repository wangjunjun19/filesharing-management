/**
 * Created by 十九 on 2018/3/6.
 */

import {connect} from "react-redux";
import Economic from "../components/economic";

const mapStateToProps = (state) => {
    console.log(state.economic.economicList+"___________container economicList");
    return {
        economicList:state.economic.economicList
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getEconomicList:()=>{
            dispatch({type:"GET_ECONOMIC_LIST"})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Economic);