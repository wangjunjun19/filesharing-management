/**
 * Created by 十九 on 2018/3/7.
 */
import request from "superagent";

export default store => next => action =>{
    console.log(action.type+"___action.type______________");
    switch (action.type){
        case 'GET_FILE_LIST':
            console.log(action.info.file_type+"_____——info.file_type___midd");
            request.post('/getFileList')
                .send(action.info)
                .end((err,res) => {
                    next({type:"FILE_TIP",data:res.body.data});
                });
            break;
    }
    next(action);
}