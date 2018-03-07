/**
 * Created by 十九 on 2018/3/7.
 */

const express = require("express");
const route = express.Router();
const search = require("../dbs/search");

route.post('/search',(req,res) => {
    const info = req.body;
    console.log(info.file_name+"______________info.file_name")

    search(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;