/**
 * Created by 十九 on 2018/3/6.
 */

export default (state = {myShareList:[]}, action) => {
    if(action.type === 'MY_SHARE_TIP') {
        state.myShareList = action.data;
        console.log(state.myShareList[0].file_name+"__________redu+allFileList ");
        return Object.assign({}, state);
    }
    return state;
}