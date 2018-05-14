/**
 * Created by 十九 on 2018/4/14.
 */
import request from "superagent";

export default store => next => action =>{
    console.log(action.type);
    switch (action.type){
        case 'GET_PER_RECOM_LIST':
            request.post('/getPerRecomList')
                .send(action.info)
                .end((err,res) => {
                    next({type:"PER_RECOM",data:res.body.data});
                });
            break;
    }
    next(action);
}