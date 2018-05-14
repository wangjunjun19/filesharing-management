const express=require("express");
const app=express();
const path = require('path');
const multer = require('multer');
var request = require("request");
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require("cookie-parser");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    secret: 'a',
    resave: true,
    saveUninitialized: true
}));


const register=require('./server/routers/register');
const login=require('./server/routers/onlogin');
const modifyPass=require('./server/routers/modifyPass');
const addFiles = require('./server/routers/addFiles');
const getAllFileList = require('./server/routers/getAllFileList');
const getMyShareList = require('./server/routers/getMyShareList');
const deleteFile = require('./server/routers/deleteFile');
const deleteUser = require('./server/routers/deleteUser');
const search =require('./server/routers/search');
const getFileList = require('./server/routers/getFileList');
const findUser = require('./server/routers/findUser');
const updateUser =require('./server/routers/updateUser')
const searchMyShare = require('./server/routers/searchMyShare')
const legalUsername = require('./server/routers/legalUSerID');
const logout = require('./server/routers/logout');
const searchByType = require('./server/routers/searchByType');
const downFile=require('./server/routers/downFile');
const getPerRecomList= require('./server/routers/getPerRecomList');
const select =require ('./server/routers/select');
const selectByType=require('./server/routers/selectByType')
const selectMyShare= require('./server/routers/selectMyShare')
const selectfile=require('./server/routers/select-file')
const getEmployeeList=require('./server/routers/getEmployeeList')
const searchEmployee=require('./server/routers/searchEmployee')

app.use('/',searchEmployee)
app.use('/',getEmployeeList)
app.use('/',selectfile)
app.use('/',selectMyShare)
app.use('/',selectByType)
app.use('/',select);
app.use('/',getPerRecomList);
app.use('/',downFile);
app.use('/',searchByType);
app.use('/',legalUsername);
app.use('/',logout);
app.use('/',searchMyShare)
app.use('/',updateUser);
app.use('/',findUser);
app.use('/',register);
app.use('/',login);
app.use('/',modifyPass);
app.use('/',addFiles);
app.use('/',getAllFileList);
app.use('/',getMyShareList);
app.use('/',deleteFile);
app.use('/',deleteUser);
app.use('/',search);
app.use('/',getFileList);

//选择diskStorage存储
var storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,path.resolve('public/uploads'));
    },//保存的路径
    filename:function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname))
    }//保存文件名设置为时间戳+字段名
});

const upload = multer({storage:storage});

app.use(express.static('public'));//将public文件夹下的所有文件暴露出来

app.post('/profile',upload.single('avatar'),(req,res,next)=>{
    res.send({
        err:null,
        filePath:'uploads/'+path.basename(req.file.path)
    });//filePath文件在项目中保存路径
});

app.get("/",function (req,res) {
    res.sendfile('index.html');
});


app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000,()=>{
    console.log("server start success listen at port 3000")
});

