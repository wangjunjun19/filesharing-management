/**
 * Created by 十九 on 2018/3/6.
 */

export default (state = {economicList:[]}, action) => {
    if(action.type === 'ECONOMIC_TIP') {
        state.economicList = action.data;
        return Object.assign({}, state);
    }
    return state;
}