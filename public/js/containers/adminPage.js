/**
 * Created by 十九 on 2018/5/10.
 */
import {connect} from "react-redux";
import AdminPage from "../components/adminPage";

const mapStateToProps = (state) => {
    console.log(state+"containers");
    return {
        presentShow:state.userHomePage.presentShow,
        loginTip: state.login.loginTip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPresentShow:(target)=>{
            dispatch({type:"GET_PRESENT_SHOW",target});
        },
        getAllFileList:()=>{
            dispatch({type:"GET_ALL_FILE_LIST"})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AdminPage);