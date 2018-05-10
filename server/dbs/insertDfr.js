/**
 * Created by 十九 on 2018/4/14.
 */
let db = require('./../connection');

function insertDfr(info,callback) {
    let sql = "insert into dfr(user_id,file_type,dfr_time) values("+info.user_id+","+info.file_type+",now())";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = insertDfr;