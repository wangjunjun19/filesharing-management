/**
 * Created by 十九 on 2018/1/21.
 */
export default (state = {loginTip:[]}, action) => {
    if(action.type === 'GET_LOGIN_TIP') {
        state.loginTip = action.data;
        console.log(state.loginTip+"_loginred");
        return Object.assign({}, state);
    }
    return state;
}