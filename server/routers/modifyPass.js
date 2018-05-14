/**
 * Created by 十九 on 2018/2/13.
 */
const express = require("express");
const route = express.Router();
const modifyPass = require("../dbs/modifyPass");
const verifyUsername =require('../dbs/verifyUsername');

route.post('/modifyPass',(req,res) => {
    const info = req.body;
    verifyUsername(info,(result)=>{
        if(result.length === 0){
            res.send({status:"该用户名未注册！"});
        }else{
            modifyPass(info,(result,err) => {
                if(err){
                    res.status(500);
                }else{
                    res.send(result);
                }
            })
        }
    })

});

module.exports = route;