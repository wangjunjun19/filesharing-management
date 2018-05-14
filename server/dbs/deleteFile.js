/**
 * Created by 十九 on 2018/3/7.
 */

let db = require('./../connection');

function deleteFile(info,callback) {
    let sql = "delete  from files where file_id="+info.file_id;
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = deleteFile;
