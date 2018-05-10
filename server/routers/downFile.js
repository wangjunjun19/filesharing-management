const express = require("express");
const route = express.Router();
const updateFiles = require("../dbs/updateFiles");
const insertDfr = require("../dbs/insertDfr");

route.post('/downFile',(req,res) => {
    const info = req.body;
    console.log(info);
            insertDfr(info,(result,err)=>{
                if(err){
                    res.status(500);
                }else{
                    console.log("insert  dfr  sucess")
                }
            })
            updateFiles(info,(result,err)=>{
                if(err){
                    res.status(500);
                }else{
                    console.log("update file sucess")
                }
            })
    });

module.exports = route;