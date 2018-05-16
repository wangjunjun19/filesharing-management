/**
 * Created by 十九 on 2018/2/23.
 */
export default (state = { labelList:[],addFileTip:false}, action) => {
    if(action.type === 'ADD_FILE_TIP') {
        state.addFileTip = action.status;
        return Object.assign({}, state);
    } if(action.type === 'RESET_ADD_FILE') {
        state.addFileTip = action.info.addFileTip;
        return Object.assign({}, state);
    }
    if(action.type === 'LABEL_TIP') {
        state.labelList = action.data;
        return Object.assign({}, state);
    }
    return state;
}