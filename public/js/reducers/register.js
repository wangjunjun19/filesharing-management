/**
 * Created by 十九 on 2018/1/21.
 */
export default (state = {addtip:[]}, action) => {
    if(action.type === 'GET_REGISTER_TIP') {
        state.addtip = action.data;
        return Object.assign({}, state);
    }
    return state;
}
