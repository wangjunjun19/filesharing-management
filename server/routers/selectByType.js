

const express = require("express");
const route = express.Router();
const selectByType = require("../dbs/selectByType");

route.post('/selectByType',(req,res) => {
    const info = req.body;
    selectByType(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;