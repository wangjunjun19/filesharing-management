/**
 * Created by 十九 on 2018/3/4.
 */
import {connect} from "react-redux";
import Nav from "../components/nav";

const mapStateToProps = (state) => {
    return {
        loginTip:state.login.loginTip[0].id
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Nav);