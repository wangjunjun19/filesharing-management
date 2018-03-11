/**
 * Created by 十九 on 2018/2/23.
 */
import {connect} from "react-redux";
import UserHomePage from "../components/userHomePage";

const mapStateToProps = (state) => {
    console.log(state+"containers");
    return {
        presentShow:state.userHomePage.presentShow
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPresentShow:(target)=>{
            dispatch({type:"GET_PRESENT_SHOW",target});
        },
        search:(info)=>{
            console.log(info.file_name+"_____cco");
            dispatch({type:"SEARCH",info});
        },
        getDifferentTypeList:(info)=>{
            console.log(info.file_type+"_____——info.file_type___contain");
            dispatch({type:"GET_FILE_LIST",info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserHomePage);