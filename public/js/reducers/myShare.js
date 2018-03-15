/**
 * Created by 十九 on 2018/3/6.
 */

export default (state = {myShareList:[],deleteFileTip:false}, action) => {
    if(action.type === 'MY_SHARE_TIP') {
        state.myShareList = action.data;
        state.deleteFileTip=false;
        return Object.assign({}, state);
    }else if(action.type ==='DELETE_FILE_TIP'){
        state.deleteFileTip=action.status;
        return Object.assign({},state);
    }
    return state;
}