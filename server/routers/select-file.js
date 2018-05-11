/**
 * Created by 十九 on 2018/5/11.
 */

const express = require("express");
const route = express.Router();
const selectfile = require("../dbs/select-file");

route.post('/selectfile',(req,res) => {
    const info = req.body;

    selectfile(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;