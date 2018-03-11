/**
 * Created by 十九 on 2018/2/23.
 */
export default (state = {presentShow: ""}, action) => {
    if(action.type === 'GET_PRESENT_SHOW') {
        state.presentShow = action.target;
        return Object.assign({}, state);
    }
    return state;
}
