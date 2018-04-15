/**
 * Created by 十九 on 2018/3/24.
 */
import {connect} from "react-redux";
import perRecom from "../components/perRecom";

const mapStateToProps = (state) => {
    return {
        perRecomList:state.perRecom.perRecomList
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getPerRecomList:(info)=>{
            console.log(info.user_id+"cont");
            dispatch({type:"GET_PER_RECOM_LIST",info});
        },
        downFile:(info)=>{
        dispatch({type:"DOWN",info})
         }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(perRecom);