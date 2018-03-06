/**
 * Created by 十九 on 2018/3/6.
 */

const express = require("express");
const route = express.Router();
const getEconomicList = require("../dbs/getEconomicList");

route.post('/getEconomicList',(req,res) => {
    console.log(res.body);
    getEconomicList((result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;