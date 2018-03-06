/**
 * Created by 十九 on 2018/3/5.
 */

export default (state = {allFileList:[]}, action) => {
    if(action.type === 'ALL_FILE_TIP') {
        state.allFileList = action.data;
        console.log(state.allFileList[0].file_name+"__________redu+allFileList ");
        return Object.assign({}, state);
    }
    return state;
}