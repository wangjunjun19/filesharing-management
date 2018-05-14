/**
 * Created by 十九 on 2018/5/14.
 */

export default (state = {employeeList:[],employeeTip:false,deleteUserTip:false}, action) => {
    if(action.type === 'EMPLOYEE_TIP') {
        state.employeeList = action.data;
        state.employeeTip = action.status;
        return Object.assign({}, state);
    }
    if(action.type === 'USER_DELETE_TIP') {
        state.deleteUserTip = action.info.deleteUserTip;
        return Object.assign({}, state);
    }
    if(action.type ==='DELETE_USER_TIP'){
        state.deleteUserTip=action.status;
        return Object.assign({},state);
    }
    return state;
}