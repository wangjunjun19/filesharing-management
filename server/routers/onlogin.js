/**
 * Created by 十九 on 2018/1/30.
 */
const express = require("express");
const route = express.Router();
const onLogin = require("../dbs/onlogin");

route.post('/login',(req,res) => {
    const info = req.body;
    console.log(info);
    onLogin(info,(result,err) => {
            if(err){
                res.status(500);
            }else{
                if( result[0]){
                    console.log(result[0]+"^^^")
                    console.log(result[0].id +"___cookie");
                    res.cookie('user_id',result[0].id);
                    res.cookie('user_name',result[0].user_name);
                    res.send({data:result});
                }
                else{
                    console.log(result[0]+"^^^")
                    res.send({data:result});
                }
            }
        }
    )
});

module.exports = route;