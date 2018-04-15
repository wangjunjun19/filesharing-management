const express = require("express");
const route = express.Router();
const updateDfr = require("../dbs/updateDfr");
const updateFiles = require("../dbs/updateFiles");
const insertDfr = require("../dbs/insertDfr");

route.post('/downFile',(req,res) => {
    const info = req.body;
    console.log(info);
    updateDfr(info,(result) => {
        console.log(result.affectedRows+"_____result")
         if(result.affectedRows===0){
            insertDfr(info,(result,err)=>{
                if(err){
                    res.status(500);
                }else{
                    console.log("insert  dfr  sucess")
                }
            });
            updateFiles(info,(result,err)=>{
                if(err){
                    res.status(500);
                }else{
                    console.log("update file sucess")
                }
            })
        }else{
            updateFiles(info,(result,err)=>{
                if(err){
                    res.status(500);
                }else{
                    console.log("update file sucess")
                }
            })
        }
    })
});

module.exports = route;