/**
 * Created by 十九 on 2018/5/14.
 */

const express = require("express");
const route = express.Router();
const searchEmployee = require("../dbs/searchEmployee");

route.post('/searchEmployee',(req,res) => {
    const info = req.body;
    searchEmployee(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;