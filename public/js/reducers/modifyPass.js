/**
 * Created by 十九 on 2018/2/13.
 */
export default (state = {modifyPassTip:false}, action) => {
    if(action.type === 'MODIFY_PASS_TIP') {
        state.modifyPassTip = action.status;
        return Object.assign({}, state);
    } if(action.type === 'RESET_MODIFY_PASS') {
        state.modifyPassTip = action.info.modifyPassTip;
        return Object.assign({}, state);
    }
    return state;
}
