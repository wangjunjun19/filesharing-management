/**
 * Created by 十九 on 2018/3/14.
 */

const express = require('express');
const route = express.Router();
const updateUser = require('../dbs/updateUser');

route.post('/updateUser',(req,res)=>{
    const info = req.body;
    console.log(info.user_id+"________");
    updateUser(info,(result,err)=>{
        if(err){
            res.status(500);
        }else{
            res.send(result);
        }
    })
})

module.exports = route;