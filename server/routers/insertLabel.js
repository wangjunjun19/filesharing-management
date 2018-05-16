const express = require('express');
const route = express.Router();
const updateLabel = require('../dbs/updateLabel');
const insertLabel = require('../dbs/insertLabel');

route.post('/insertLabel',(req,res)=>{
    const info = req.body;
    updateLabel(info,(result,err)=>{
        if(result.affectedRows===0){
            insertLabel(info,(result,err)=>{
                if(err){
                    res.status(500);
                }else{
                    console.log("insert  label  sucess")
                }
            })
        }else{
            console.log("update  label  sucess")
        }
    })
})

module.exports = route;