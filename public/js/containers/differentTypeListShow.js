/**
 * Created by 十九 on 2018/3/7.
 */

import {connect} from "react-redux";
import differentTypeListShow from "../components/differentTypeListShow";

const mapStateToProps = (state) => {
    return {
        presentShow:state.userHomePage.presentShow,
        differentTypeListTip:state.differentTypeListShow.differentTypeListTip
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(differentTypeListShow);