/**
 * Created by 十九 on 2018/3/6.
 */

export default (state = {scienceList:[]}, action) => {
    if(action.type === 'SCIENCE_TIP') {
        state.scienceList = action.data;
        return Object.assign({}, state);
    }
    return state;
}