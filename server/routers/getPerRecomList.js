/**
 * Created by 十九 on 2018/4/14.
 */

const express = require("express");
const route = express.Router();
const getPerRecomList = require("../dbs/getPerRecomList");
const searchFiles = require("../dbs/searchFiles");

route.post('/getPerRecomList',(req,res) => {
    const info = req.body;
    console.log(info+"____info");
    getPerRecomList(info,(result) => {
        console.log(result.length +"_____________")
        if(result.length===0){
            searchFiles((result,err)=>{
                if(err){
                    res.status(500);
                }else{
                    console.log("result____"+result);
                    res.send({data:result})
                }
            })
        }else{
            console.log("result1____"+result);
            res.send({data:result})
        }
    })
});

module.exports = route;