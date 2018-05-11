/**
 * Created by 十九 on 2018/3/5.
 */
import request from "superagent";

export default store => next => action =>{
    switch (action.type){
        case 'GET_ALL_FILE_LIST':
            request.post('/getAllFileList')
                .end((err,res) => {
                    next({type:"ALL_FILE_TIP",data:res.body.data});
                });
            break;
        case 'SEARCH':
            request.post('/search')
                .send(action.info)
                .end((err,res) => {
                    next({type:"ALL_FILE_TIP",data:res.body.data});
                });
            break;
        case 'DOWN':
            request.post('/downFile')
                .send(action.info)
                .end((err,res) => {
                    next({type:"DOWN_LOAD_FILE",status:res.body.status});
                });
            break;
        case 'SELECT':
            request.post('/select')
                .send(action.info)
                .end((err,res) => {
                    next({type:"ALL_FILE_TIP",data:res.body.data});
                });
            break;
        case 'SELECT—FILE':
            request.post('/selectfile')
                .send(action.info)
                .end((err,res) => {
                    next({type:"ALL_FILE_TIP",data:res.body.data});
                });
            break;
    }
    next(action);
}