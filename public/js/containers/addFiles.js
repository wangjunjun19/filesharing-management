/**
 * Created by 十九 on 2018/2/23.
 */
import {connect} from "react-redux";
import AddFiles from "../components/addFiles";

const mapStateToProps = (state) => {
    console.log(state.addFileTip+"___containers");
    return {
        addFileTip:state.addFiles.addFileTip,
        uploadFile:state.uploadFile
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        upload:(data)=>{
            dispatch({type:"UPLOAD",data});
        },
        addFiles:(info) => {
            dispatch({type:"ADD_FILE",info})
        },
        resetAddFile:(info)=>{
            dispatch({type:'RESET_ADD_FILE',info})
        }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddFiles);