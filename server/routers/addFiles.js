/**
 * Created by 十九 on 2018/3/3.
 */
const express = require("express");
const route = express.Router();
const addFiles = require("../dbs/addFiles");

route.post('/addFiles',(req,res) => {
    const info = req.body;
    addFiles(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send(result)
        }
    })
});

module.exports = route;