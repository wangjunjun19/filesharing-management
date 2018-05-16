/**
 * Created by 十九 on 2018/2/23.
 */
import {connect} from "react-redux";
import AddFiles from "../components/addFiles";

const mapStateToProps = (state) => {
    return {
        addFileTip:state.addFiles.addFileTip,
        uploadFile:state.uploadFile,
        labelList:state.addFiles.labelList
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        getLabel:()=>{
            dispatch({type:"GET_LABEL_LIST"})
        },
        upload:(data)=>{
            dispatch({type:"UPLOAD",data});
        },
        addFiles:(info) => {
            dispatch({type:"ADD_FILE",info})
        },
        resetAddFile:(info)=>{
            dispatch({type:'RESET_ADD_FILE',info})
        },
        insertLabel:(info) => {
            dispatch({type:"INSET_LABEL",info})
        }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddFiles);