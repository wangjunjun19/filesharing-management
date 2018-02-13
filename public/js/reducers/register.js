/**
 * Created by 十九 on 2018/1/21.
 */
export default (state = {registerTip:false}, action) => {
    if(action.type === 'GET_REGISTER_TIP') {
        state.registerTip = action.status;
        console.log(state.registerTip+"__________redu+regiseter ");
        return Object.assign({}, state);
    } if(action.type === 'RESET_TIP') {
        state.registerTip = action.info.registerTip;
        console.log(state.registerTip+"reset ___tip");
        return Object.assign({}, state);
    }
    return state;
}
