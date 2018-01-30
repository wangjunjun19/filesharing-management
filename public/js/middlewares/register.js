/**
 * Created by 十九 on 2018/1/21.
 */
import request from "superagent";

export default store => next => action =>{
    switch (action.type){
        case 'REGISTER':
            request.post('/register')
            .send(action.info)
            .end((err,res) => {
                    console.log(res.body.status+"midd");
                    next({type:"GET_REGISTER_TIP",status:res.body.status});
                });
         break;
    }
    next(action);
}