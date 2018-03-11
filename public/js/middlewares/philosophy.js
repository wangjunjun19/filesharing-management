/**
 * Created by 十九 on 2018/3/6.
 */

import request from "superagent";

export default store => next => action =>{
    switch (action.type){
        case 'GET_PHILOSOPHY_LIST':
            request.post('/getPhilosophyList')
                .end((err,res) => {
                    next({type:"PHILOSOPHY_TIP",data:res.body.data});
                });
            break;
    }
    next(action);
}