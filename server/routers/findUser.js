/**
 * Created by 十九 on 2018/3/14.
 */

const express = require("express");
const route = express.Router();
const findUser = require("../dbs/findUser");

route.post('/findUser',(req,res) => {
    const info =req.body;
    findUser(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;