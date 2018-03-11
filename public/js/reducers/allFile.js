/**
 * Created by 十九 on 2018/3/5.
 */

export default (state = {allFileList:[],deleteFileTip:false}, action) => {
    if(action.type === 'ALL_FILE_TIP') {
        state.allFileList = action.data;

        //试一下删除
        state.deleteFileTip=false;

        return Object.assign({}, state);
    }else if(action.type ==='DELETE_FILE_TIP'){
        state.deleteFileTip=action.status;
        return Object.assign({},state);
    }
    return state;
}