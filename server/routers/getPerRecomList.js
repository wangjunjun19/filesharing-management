/**
 * Created by 十九 on 2018/4/14.
 */

const express = require("express");
const route = express.Router();
const getPerRecomList = require("../dbs/getPerRecomList");
const searchFiles = require("../dbs/searchFiles");
const deleteOldDfr=require("../dbs/deleteOldDfr");

route.post('/getPerRecomList',(req,res) => {
    const info = req.body;
    deleteOldDfr((result)=>{
    });
    getPerRecomList(info,(result) => {
        if(result.length===0){
            searchFiles((result,err)=>{
                if(err){
                    res.status(500);
                }else{
                    res.send({data:result})
                }
            })
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;