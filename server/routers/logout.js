/**
 * Created by 十九 on 2018/3/21.
 */
const express = require('express');
const route = express.Router();

route.get('/logout',(req,res) => {
    if(req.cookies){
        res.cookie('user_id',"");
        res.cookie('user_name',"");
        res.send(req.cookies);
    }else{
        res.status(500).send("");
    }
});

module.exports = route;