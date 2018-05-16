/**
 * Created by 十九 on 2018/5/16.
 */
let db = require('./../connection');

function insertLabel(info,callback) {
    let sql = "insert into label(label_name,label_count) values('"+info.label_name+"',1)";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = insertLabel;