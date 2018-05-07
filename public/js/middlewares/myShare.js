/**
 * Created by 十九 on 2018/3/6.
 */

import request from "superagent";

export default store => next => action =>{
    switch (action.type){
        case 'GET_MY_SHARE_LIST':
            request.post('/getMyShareList')
                .send(action.info)
                .end((err,res) => {
                    next({type:"MY_SHARE_TIP",data:res.body.data});

                });
            break;
        //试一下删除
        case 'DELETE_FILE':
            request.post('/deleteFile')
                .send(action.info)
                .end((err,res) => {
                    next({type:"DELETE_FILE_TIP",status:res.body.status});
                });
            break;

        case 'SEARCH_MY':
            request.post('/searchMyShare')
                .send(action.info)
                .end((err,res) => {
                    next({type:"MY_SHARE_TIP",data:res.body.data});
                });
            break;

        case 'SELECT_MY':
            request.post('/selectMyShare')
                .send(action.info)
                .end((err,res) => {
                    next({type:"MY_SHARE_TIP",data:res.body.data});
                });
            break;
    }
    next(action);
}