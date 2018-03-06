/**
 * Created by 十九 on 2018/3/6.
 */

export default (state = {lawList:[]}, action) => {
    if(action.type === 'LAW_TIP') {
        state.lawList = action.data;
        console.log(state.lawList[0].file_name+"__________redu+lawList ");
        return Object.assign({}, state);
    }
    return state;
}