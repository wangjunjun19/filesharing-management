/**
 * Created by 十九 on 2018/3/5.
 */

export default (state = {allFileList:[],allFileTip:false}, action) => {
    if(action.type === 'ALL_FILE_TIP') {
        state.allFileList = action.data;
        state.allFileTip = action.status;
        return Object.assign({}, state);
    }
    return state;
}