/**
 * Created by 十九 on 2018/3/8.
 */

export default (state = {cancelTip:false}, action) => {
    if(action.type === 'CANCELLATION_TIP') {
        state.cancelTip = action.status;
        return Object.assign({}, state);
    }
    return state;
}