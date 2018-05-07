
const express = require("express");
const route = express.Router();
const selectMyShare = require("../dbs/selectMyShare");

route.post('/selectMyShare',(req,res) => {
    const info = req.body;

    selectMyShare(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;