/**
 * Created by 十九 on 2018/3/6.
 */

const express = require("express");
const route = express.Router();
const getMyShareList = require("../dbs/getMyShareList");

route.post('/getAllFileList',(req,res) => {
    const user_id = req.body;
    console.log(res.body);
    getMyShareList(user_id,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;