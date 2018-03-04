/**
 * Created by 十九 on 2018/2/23.
 */
export default (state = {addFileTip:false}, action) => {
    if(action.type === 'ADD_FILE_TIP') {
        state.addFileTip = action.status;
        console.log(state.addFileTip+"__________redu+regiseter ");
        return Object.assign({}, state);
    } if(action.type === 'RESET_ADD_FILE') {
        state.addFileTip = action.info.addFileTip;
        console.log(state.addFileTip+"reset ___tip");
        return Object.assign({}, state);
    }
    return state;
}