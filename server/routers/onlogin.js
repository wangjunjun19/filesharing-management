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
            res.send(result)
        }
    })
});

module.exports = route;