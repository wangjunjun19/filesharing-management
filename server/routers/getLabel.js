/**
 * Created by 十九 on 2018/5/16.
 */

const express = require("express");
const route = express.Router();
const getLabel = require("../dbs/getLabel");

route.post('/getLabel',(req,res) => {
    getLabel((result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;