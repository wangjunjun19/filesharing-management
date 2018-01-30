const express = require("express");
const route = express.Router();
const register = require("../dbs/register");

route.post('/register',(req,res) => {
    const info = req.body;
    register(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send(result);
        }
    })
});

module.exports = route;