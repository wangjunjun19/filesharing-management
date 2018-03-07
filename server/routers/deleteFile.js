/**
 * Created by 十九 on 2018/3/7.
 */
const express = require('express');
const route = express.Router();
const deleteFile = require('../dbs/deleteFile');

route.post('/deleteFile',(req,res)=>{
    const info = req.body;
    console.log(info.file_id+"________");
    deleteFile(info,(result,err)=>{
        if(err){
            res.status(500);
        }else{
            res.send({status:true});
        }
    })
})

module.exports = route;