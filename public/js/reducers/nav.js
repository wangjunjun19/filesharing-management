/**
 * Created by 十九 on 2018/3/21.
 */
module.exports = (state={},action) => {
    switch(action.type){
        case 'USERNAME-GOT':
            return action.status;
        case 'USERNAME-GO':
            return action.status;
        default:
            return state;
    }
}