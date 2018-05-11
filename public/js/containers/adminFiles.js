/**
 * Created by 十九 on 2018/5/10.
 */
import {connect} from "react-redux";
import AdminFiles from "../components/adminFiles";

const mapStateToProps = (state) => {
    return {
        allFileList:state.allFile.allFileList,
        deleteFileTip:state.myShare.deleteFileTip
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getAllFileList:()=>{
            dispatch({type:"GET_ALL_FILE_LIST"})
        },
        search:(info)=>{
            dispatch({type:"SEARCH",info});
        },
        downFile:(info)=>{
            dispatch({type:"DOWN",info})
        },
        select:(info)=>{
            dispatch({type:"SELECT—FILE",info});
        },
        deleteFile:(info)=>{
            dispatch({type:"DELETE_FILE",info})
        } ,
        resetDeleteTip:(info)=>{
            dispatch({type:'RESET_DELETE_TIP',info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AdminFiles);