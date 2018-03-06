/**
 * Created by 十九 on 2018/3/6.
 */

const express = require("express");
const route = express.Router();
const getLawList = require("../dbs/getLawList");

route.post('/getLawList',(req,res) => {
    console.log(res.body);
    getLawList((result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;