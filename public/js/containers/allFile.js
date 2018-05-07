/**
 * Created by 十九 on 2018/3/5.
 */
import {connect} from "react-redux";
import AllFile from "../components/allFile";

const mapStateToProps = (state) => {
    return {
        allFileList:state.allFile.allFileList

    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getAllFileList:()=>{
            dispatch({type:"GET_ALL_FILE_LIST"})
        },
        search:(info)=>{
            console.log(info.file_name+"_____cco");
            dispatch({type:"SEARCH",info});
        },
        downFile:(info)=>{
            dispatch({type:"DOWN",info})
        },
        select:(info)=>{
            console.log(info.file_name+"_____cco");
            dispatch({type:"SELECT",info});
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AllFile);