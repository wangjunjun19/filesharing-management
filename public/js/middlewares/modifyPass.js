/**
 * Created by 十九 on 2018/2/13.
 */
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'MODIFYPASS') {
        console.log(action.info.username+"_____");
        request.post('/modifyPass')
            .send({user_name:action.info.username,user_pass:action.info.password})
            .end((err, res) => {
                console .log(res.body.status+"___midd");
                next({type:"MODIFY_PASS_TIP", status:res.body.status});
            });
    }
    else
        next(action);
};