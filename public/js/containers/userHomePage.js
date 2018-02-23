/**
 * Created by 十九 on 2018/2/23.
 */
import {connect} from "react-redux";
import UserHomePage from "../components/userHomePage";

const mapStateToProps = (state) => {
    console.log(state+"containers");
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserHomePage);