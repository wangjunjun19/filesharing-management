/**
 * Created by 十九 on 2018/3/21.
 */
import request from 'superagent';

export default store => next => action => {
    switch(action.type){
        case "LOAD-USERNAME":
            request.get('/legal-username')
                .end((err,res)=>{
                    next({type:'USERNAME-GOT',status:res.text})
                })
            break;
        case "LOGOUT":
            request.get('/logout')
                .end((err,res) => {
                    next({type:'USERNAME-GO',status:res.text})
                })
            break;
    }
    next(action);
}

