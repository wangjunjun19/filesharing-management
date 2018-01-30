/**
 * Created by 十九 on 2018/1/21.
 */
export default (state = {registerTip:false}, action) => {
    if(action.type === 'GET_REGISTER_TIP') {
        state.registerTip = action.status;
        console.log(state.registerTip+"red");
        return Object.assign({}, state);
    }
    return state;
}
