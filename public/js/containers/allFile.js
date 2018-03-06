/**
 * Created by 十九 on 2018/3/5.
 */
import {connect} from "react-redux";
import AllFile from "../components/allFile";

const mapStateToProps = (state) => {
    console.log(state.allFile.allFileList+"___________container allFileList");
    return {
        allFileList:state.allFile.allFileList
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getAllFileList:()=>{
            dispatch({type:"GET_ALL_FILE_LIST"})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AllFile);