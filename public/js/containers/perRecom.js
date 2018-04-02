/**
 * Created by 十九 on 2018/3/24.
 */
import {connect} from "react-redux";
import perRecom from "../components/perRecom";

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return {

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(perRecom);