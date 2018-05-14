/**
 * Created by 十九 on 2018/3/6.
 */
let db = require('./../connection');

function getAllFileList(callback) {
    let sql = "select * from files order by file_count desc";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = getAllFileList;
