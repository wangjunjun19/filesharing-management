/**
 * Created by 十九 on 2018/3/5.
 */
import {connect} from "react-redux";
import AllFile from "../components/allFile";

const mapStateToProps = (state) => {
    console.log(state.allFile.allFileList+"___________container allFileList");
    return {
        allFileList:state.allFile.allFileList,

        //试一下删除
        deleteFileTip:state.allFile.deleteFileTip
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getAllFileList:()=>{
            dispatch({type:"GET_ALL_FILE_LIST"})
        },

        //试一下删除
        deleteFile:(info)=>{
            dispatch({type:"DELETE_FILE",info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AllFile);