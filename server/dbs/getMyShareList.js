/**
 * Created by 十九 on 2018/3/6.
 */

let db = require('./../connection');

function getMyShareList(info,callback) {
    let sql = "select * from files where user_id="+info.user_id+" order by file_count desc";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = getMyShareList;
