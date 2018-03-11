/**
 * Created by 十九 on 2018/3/6.
 */

import request from "superagent";

export default store => next => action =>{;
    switch (action.type){
        case 'GET_SCIENCE_LIST':
            request.post('/getScienceList')
                .end((err,res) => {
                    next({type:"SCIENCE_TIP",data:res.body.data});
                });
            break;
    }
    next(action);
}