/**
 * Created by 十九 on 2018/4/14.
 */

let db = require('./../connection');

function getPerRecomList(info,callback) {
    let sql = "select * from files where file_type =(SELECT file_type FROM dfr WHERE user_id="+info.user_id+" GROUP BY file_type  ORDER BY COUNT(file_type)DESC LIMIT 1) order by file_count desc,file_id desc limit 9";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = getPerRecomList;
