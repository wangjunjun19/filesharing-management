/**
 * Created by 十九 on 2018/2/13.
 */
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'MODIFYPASS') {
        request.post('/modifyPass')
            .send({user_name:action.info.username,user_pass:action.info.password})
            .end((err, res) => {
                next({type:"MODIFY_PASS_TIP", status:res.body.status});
            });
    }
    else
        next(action);
};