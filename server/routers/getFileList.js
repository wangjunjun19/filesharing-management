/**
 * Created by 十九 on 2018/3/7.
 */

const express = require("express");
const route = express.Router();
const getFileList = require("../dbs/getFileList");

route.post('/getFileList',(req,res) => {
    const info =req.body;
    getFileList(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;