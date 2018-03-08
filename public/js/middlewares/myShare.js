/**
 * Created by 十九 on 2018/3/6.
 */

import request from "superagent";

export default store => next => action =>{
    console.log(action.type+"___action.type");
    switch (action.type){
        case 'GET_MY_SHARE_LIST':
            console.log(action.info.user_id+"____action.id")
            request.post('/getMyShareList')
                .send(action.info)
                .end((err,res) => {
                    console.log(res.body+"___midd  res.body ");
                    next({type:"MY_SHARE_TIP",data:res.body.data});

                });
            break;
    }
    next(action);
}