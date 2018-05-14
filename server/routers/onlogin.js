/**
 * Created by 十九 on 2018/1/30.
 */
const express = require("express");
const route = express.Router();
const onLogin = require("../dbs/onlogin");

route.post('/login',(req,res) => {
    const info = req.body;
    onLogin(info,(result,err) => {
            if(err){
                res.status(500);
            }else{
                if( result[0]){
                    res.cookie('user_id',result[0].id);
                    res.cookie('user_name',result[0].user_name);
                    res.send({data:result});
                }
                else{
                    res.send({data:result});
                }
            }
        }
    )
});

module.exports = route;