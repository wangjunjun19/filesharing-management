/**
 * Created by 十九 on 2018/3/8.
 */

export default (state = {cancelTip:false,updateTip:false,userInfoTip:[]}, action) => {
    if(action.type === 'CANCELLATION_TIP') {
        state.cancelTip = action.status;
        return Object.assign({}, state);
    }
    if(action.type === 'FIND_USER'){
        state.userInfoTip =action.data;
        return Object.assign({},state);
    }
    if(action.type === 'UPDATE'){
        state.updateTip =action.status;
        return Object.assign({},state);
    }
    if(action.type === 'RESET_PER') {
        state.updateTip = action.info.updateTip;
        return Object.assign({}, state);
    }
    return state;
}