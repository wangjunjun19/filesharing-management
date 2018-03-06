/**
 * Created by 十九 on 2018/3/6.
 */

export default (state = {philosophyList:[]}, action) => {
    if(action.type === 'PHILOSOPHY_TIP') {
        state.philosophyList = action.data;
        console.log(state.philosophyList[0].file_name+"__________redu+philosophyList ");
        return Object.assign({}, state);
    }
    return state;
}