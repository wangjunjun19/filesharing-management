/**
 * Created by 十九 on 2018/3/7.
 */

export default (state = {differentTypeListTip:[]}, action) => {
    if(action.type === 'FILE_TIP') {
        state.differentTypeListTip = action.data;
        return Object.assign({}, state);
    }
    return state;
}