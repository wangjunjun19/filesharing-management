/**
 * Created by 十九 on 2018/4/14.
 */

let db = require('./../connection');

function getPerRecomList(info,callback) {
    let sql = "select * from files where file_type =(select file_type from dfr where user_id="+info.user_id+" order by dfr_total desc limit 1) order by file_count desc,file_id desc limit 9";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            console.log("data"+"db"+results);
            callback(results)
        }
    })
}

module.exports = getPerRecomList;
