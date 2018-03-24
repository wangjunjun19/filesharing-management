/**
 * Created by 十九 on 2018/3/24.
 */

const express = require("express");
const route = express.Router();
const searchByType = require("../dbs/searchByType");

route.post('/searchByType',(req,res) => {
    const info = req.body;
    searchByType(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;