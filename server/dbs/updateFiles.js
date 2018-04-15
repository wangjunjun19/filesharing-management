/**
 * Created by 十九 on 2018/4/14.
 */
let db = require('./../connection');

function updateFiles(info,callback) {
    let sql = "update files set file_count=file_count+1 where file_id="+info.file_id;
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = updateFiles;