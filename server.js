const express=require("express");
const app=express();
const path = require('path');
var request = require("request");
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const register=require('./server/routers/register');
const login=require('./server/routers/onlogin');
const modifyPass=require('./server/routers/modifyPass');

app.use('/',register);
app.use('/',login);
app.use('/',modifyPass);

app.get("/",function (req,res) {
    res.sendfile('index.html');
});


app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000,()=>{
    console.log("server start success listen at port 3000")
});

