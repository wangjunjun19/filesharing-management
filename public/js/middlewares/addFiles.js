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
                    console.log(res.body.status+"midd");
                    next({type:"ADD_FILE_TIP",status:res.body.status});
                });
            break;
    }
    next(action);
}