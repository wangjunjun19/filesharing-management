/**
 * Created by 十九 on 2018/3/5.
 */
import request from "superagent";

export default store => next => action =>{
    console.log(action.type+"___action.type");
    switch (action.type){
        case 'GET_ALL_FILE_LIST':
            request.post('/getAllFileList')
                .end((err,res) => {
                    console.log(res.body+"midd");
                    next({type:"ALL_FILE_TIP",data:res.body.data});
                });
            break;
    }
    next(action);
}