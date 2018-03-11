/**
 * Created by 十九 on 2018/3/6.
 */

import request from "superagent";

export default store => next => action =>{
    switch (action.type){
        case 'GET_MY_SHARE_LIST':
            request.post('/getMyShareList')
                .send(action.info)
                .end((err,res) => {
                    next({type:"MY_SHARE_TIP",data:res.body.data});

                });
            break;
    }
    next(action);
}