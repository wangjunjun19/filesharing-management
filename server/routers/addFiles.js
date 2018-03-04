/**
 * Created by 十九 on 2018/3/3.
 */
const express = require("express");
const route = express.Router();
const addFiles = require("../dbs/addFiles");

route.post('/addFiles',(req,res) => {
    const info = req.body;
    console.log(info);
    addFiles(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            console.log(result+"router__modify");
            res.send(result)
        }
    })
});

module.exports = route;