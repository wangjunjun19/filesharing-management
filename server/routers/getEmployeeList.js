const express = require("express");
const route = express.Router();
const getEmployeeList = require("../dbs/getEmployeeList");

route.post('/getEmployeeList',(req,res) => {
    getEmployeeList((result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({data:result})
        }
    })
});

module.exports = route;