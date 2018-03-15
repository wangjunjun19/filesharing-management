
const express = require('express');
const route = express.Router();
const deleteUser = require('../dbs/deleteUser');

route.post('/deleteUser',(req,res)=>{
    const info = req.body;
    console.log(info.user_id+"________");
    deleteUser(info,(result,err)=>{
        if(err){
            res.status(500);
        }else{
            res.send({status:true});
        }
    })
})

module.exports = route;