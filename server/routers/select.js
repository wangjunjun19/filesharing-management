
const express = require("express");
const route = express.Router();
const select = require("../dbs/select");

route.post('/select',(req,res) => {
    const info = req.body;

    select(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;