/**
 * Created by 十九 on 2018/3/4.
 */
import {connect} from "react-redux";
import Nav from "../components/nav";

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getCookie:() => {
            dispatch ({type:'LOAD-USERNAME'})
        },
        logoutUser:() => {
        dispatch ({type:'LOGOUT'})
    }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Nav);