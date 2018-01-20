const express=require("express");
const app=express();
const path = require('path');
var request = require("request");
const bodyParser = require('body-parser');
const login=require('./routes/login');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function (req,res) {
    res.sendfile('index.html');
});

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000,()=>{
    console.log("server start success listen at port 3000")
});

