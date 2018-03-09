
import request from "superagent";

export default store => next => action =>{

    switch (action.type){
        case 'CANCELLATION_USER':
            request.post('/deleteUser')
                .send(action.info)
                .end((err,res) => {
                    console.log(res.body.status+"midd");
                    next({type:"CANCELLATION_TIP",status:res.body.status});
                });
            break;
    }
    next(action);
}