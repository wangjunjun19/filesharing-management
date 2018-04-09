/**
 * Created by 十九 on 2018/4/3.
 */
const express = require("express");
const route = express.Router();
const path=require('path');
const fs =require('fs');

route.post('/downloadFile',function(req,res,next){
    var currDir = path.normalize(req.body.dir),
        fileName=req.body.fileName,
        catalog="public",
        currFile=path.join(catalog,currDir,fileName),
        fReadStream;
    console.log(currFile);
    fs.exists(currFile,function(exist){
        if(exist){
            res.set({
                    "Content-type":"application/octet-stream",
                    "Content-Disposition":"attachment;filename="+encodeURI(fileName)
                });
            fReadStream=fs.createReadStream(currFile);
            fReadStream.on("data",(chunk)=>res.write(chunk,"binary"));
            fReadStream.on("end",function(){
                res.end();
            });
        }else{
            res.set("Content-type","text/html");
            res.send("file not exist");
            res.end();
        }
    });
});

module.exports= route;