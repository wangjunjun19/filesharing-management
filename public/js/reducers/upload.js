/**
 * Created by 十九 on 2018/3/4.
 */
export default (state = {}, action) => {
    if(action.type === 'UPLOAD') {
        return action.data;
    }
    return state;
}