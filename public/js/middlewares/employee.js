/**
 * Created by 十九 on 2018/5/14.
 */
/**
 * Created by 十九 on 2018/3/5.
 */
import request from "superagent";

export default store => next => action =>{
    switch (action.type) {
        case 'GET_EMPLOYEE_LIST':
            request.post('/getEmployeeList')
                .end((err, res) => {
                    next({type: "EMPLOYEE_TIP", data: res.body.data});
                });
            break;
        case 'SEARCH_EMPLOYEE':
            request.post('/searchEmployee')
                .send(action.info)
                .end((err, res) => {
                    next({type: "EMPLOYEE_TIP", data: res.body.data});
                });
            break;
        case 'DELETE_USER':
            request.post('/deleteUser')
                .send(action.info)
                .end((err,res) => {
                    next({type:"DELETE_USER_TIP",status:res.body.status});
                });
            break;
    }
    next(action);
}