/**
 * Created by 十九 on 2018/3/7.
 */
let db = require('./../connection');

function getFileList(info,callback) {
    let sql = "select * from files where file_type="+info.file_type;
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            console.log("data"+"db"+results);
            callback(results)
        }
    })
}

module.exports = getFileList;
