/**
 * Created by 十九 on 2018/3/6.
 */

const express = require("express");
const route = express.Router();
const getScienceList = require("../dbs/getScienceList");

route.post('/getScienceList',(req,res) => {
    console.log(res.body);
    getScienceList((result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;