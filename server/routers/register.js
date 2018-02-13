const express = require("express");
const route = express.Router();
const register = require("../dbs/register");
const verifyUsername =require('../dbs/verifyUsername');

route.post('/register',(req,res) => {
    const info = req.body;
    console.log(info+"____info");
    verifyUsername(info,(result)=>{
        if(result.length != 0){
            res.send({status:"该用户名已被注册，请重新输入！"});
        }else{
            register(info,(result,err) => {
                if(err){
                    res.status(500);
                }else{
                    console.log(result+"router__register");
                    res.send(result);
                }
            })
        }
    })

});

module.exports = route;