const express=require("express");
const app=express();
const path = require('path');
const multer = require('multer');
var request = require("request");
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const register=require('./server/routers/register');
const login=require('./server/routers/onlogin');
const modifyPass=require('./server/routers/modifyPass');
const addFiles = require('./server/routers/addFiles');
const getAllFileList = require('./server/routers/getAllFileList');
const getMyShareList = require('./server/routers/getMyShareList');
const getEconomicList = require('./server/routers/getEconomicList');
const getPhilosophyList=require('./server/routers/getPhilosophyList');
const getLawList=require('./server/routers/getLawList');

app.use('/',register);
app.use('/',login);
app.use('/',modifyPass);
app.use('/',addFiles);
app.use('/',getAllFileList);
app.use('/',getMyShareList);
app.use('/',getEconomicList);
app.use('/',getPhilosophyList);
app.use('/',getLawList);

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

