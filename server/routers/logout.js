/**
 * Created by 十九 on 2018/3/21.
 */
const express = require('express');
const route = express.Router();

route.get('/logout',(req,res) => {
    if(req.cookies.user_id){
        req.cookies.user_id = "";
        res.send(req.cookies.user_id);
    }else{
        res.status(500).send("");
    }
});

module.exports = route;