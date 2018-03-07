/**
 * Created by 十九 on 2018/3/7.
 */

export default (state = {differentTypeListTip:[]}, action) => {
    if(action.type === 'FILE_TIP') {
        state.differentTypeListTip = action.data;
        console.log(state.differentTypeListTip[0].file_name+"__________redu+differentTypeListTip ");
        return Object.assign({}, state);
    }
    return state;
}