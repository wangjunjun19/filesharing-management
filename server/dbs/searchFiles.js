/**
 * Created by 十九 on 2018/4/14.
 */

let db = require('./../connection');

function searchFiles(callback) {
    let sql = "select * from files  order by file_count desc ,file_id desc limit 9";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = searchFiles;
