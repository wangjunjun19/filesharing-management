/**
 * Created by 十九 on 2018/4/14.
 */

export default (state = {perRecomList:[]}, action) => {
    if(action.type === 'PER_RECOM') {
        state.perRecomList = action.data;
        return Object.assign({}, state);
    }
    return state;
}