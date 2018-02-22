/**
 * Created by 十九 on 2018/2/13.
 */
export default (state = {modifyPassTip:false}, action) => {
    if(action.type === 'MODIFY_PASS_TIP') {
        state.modifyPassTip = action.status;
        console.log(action.status+"____re");
        console.log(state.modifyPassTip+"__________redu+modify ");
        return Object.assign({}, state);
    } if(action.type === 'RESET_TIP') {
        state.modifyPassTip = action.info.modifyPassTip;
        console.log(state.modifyPassTip+"reset ___tip");
        return Object.assign({}, state);
    }
    return state;
}
