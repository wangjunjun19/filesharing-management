/**
 * Created by 十九 on 2018/3/3.
 */
import request from "superagent";

export default store => next => action =>{

    switch (action.type){
        case 'ADD_FILE':
            request.post('/addFiles')
                .send(action.info)
                .end((err,res) => {
                    next({type:"ADD_FILE_TIP",status:res.body.status});
                });
            break;
        case 'INSET_LABEL':
            request.post('/insertLabel')
                .send(action.info)
                .end((err,res) => {
                    next({type:"INSET_LABEL_TIP",status:res.body.status});
                });
            break;
        case 'GET_LABEL_LIST':
                    request.post('/getLabel')
                        .end((err,res) => {
                            next({type:"LABEL_TIP",data:res.body.data});
                        });
                    break;
    }
    next(action);
}