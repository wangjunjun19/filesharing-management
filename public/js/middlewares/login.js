/**
 * Created by 十九 on 2018/1/21.
 */
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'LOGIN_SUBMIT') {
        request.post('/login')
            .send(action.info)
            .end((err, res) => {
                console .log(res.body.data+"___midd");
                next({type:"GET_LOGIN_TIP", data:res.body.data});
            });
    }
    else
        next(action);
};