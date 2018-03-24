/**
 * Created by 十九 on 2018/3/7.
 */
import request from "superagent";

export default store => next => action =>{
    switch (action.type){
        case 'GET_FILE_LIST':
            request.post('/getFileList')
                .send(action.info)
                .end((err,res) => {
                    next({type:"FILE_TIP",data:res.body.data});
                });
            break;
        case 'SEARCH_BY_TYPE':
            request.post('/searchByType')
                .send(action.info)
                .end((err,res) => {
                    next({type:"FILE_TIP",data:res.body.data});
                });
            break;
    }
    next(action);
}