/**
 * Created by 十九 on 2018/2/23.
 */
import {connect} from "react-redux";
import AddFiles from "../components/addFiles.js";

const mapStateToProps = (state) => {
    console.log(state+"containers");
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddFiles);