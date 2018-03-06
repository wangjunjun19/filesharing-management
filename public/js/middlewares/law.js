/**
 * Created by 十九 on 2018/3/6.
 */

import request from "superagent";

export default store => next => action =>{
    console.log(action.type+"___action.type");
    switch (action.type){
        case 'GET_LAW_LIST':
            request.post('/getLawList')
                .end((err,res) => {
                    console.log(res.body+"midd  res.body ");
                    next({type:"LAW_TIP",data:res.body.data});
                });
            break;
    }
    next(action);
}