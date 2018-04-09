/**
 * Created by 十九 on 2018/4/3.
 */
const express = require("express");
const route = express.Router();

route.post('/downFile',function(req,res){
    const info = req.body;
    res.download(info.file_route,info.file_name);
});

module.exports= route;