/**
 * Created by 十九 on 2018/3/6.
 */

export default (state = {economicList:[]}, action) => {
    if(action.type === 'ECONOMIC_TIP') {
        state.economicList = action.data;
        console.log(state.economicList[0].file_name+"__________redu+economicList ");
        return Object.assign({}, state);
    }
    return state;
}