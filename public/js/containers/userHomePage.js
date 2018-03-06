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
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserHomePage);