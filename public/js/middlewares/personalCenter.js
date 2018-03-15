
import request from "superagent";

export default store => next => action =>{

    switch (action.type){
        case 'CANCELLATION_USER':
            request.post('/deleteUser')
                .send(action.info)
                .end((err,res) => {
                    next({type:"CANCELLATION_TIP",status:res.body.status});
                });
            break;
        case 'USER_INFO':
            request.post('/findUser')
                .send(action.info)
                .end((err,res)=>{
                    next({type:"FIND_USER",data:res.body.data});
                });
            break;
        case 'UPDATE_USER':
            request.post('/updateUser')
            .send(action.info)
            .end((err,res)=>{
                    next({type:"UPDATE",status:res.body.status});
                })
    }
    next(action);
}