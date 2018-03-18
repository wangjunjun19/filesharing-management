
const express = require("express");
const route = express.Router();
const searchMyShare = require("../dbs/searchMyShare");

route.post('/searchMyShare',(req,res) => {
    const info = req.body;
    console.log(info.file_name+"______________info.file_name")

    searchMyShare(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;