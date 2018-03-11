/**
 * Created by 十九 on 2018/3/6.
 */

export default (state = {philosophyList:[]}, action) => {
    if(action.type === 'PHILOSOPHY_TIP') {
        state.philosophyList = action.data;
        return Object.assign({}, state);
    }
    return state;
}