/**
 * Created by 十九 on 2018/5/16.
 */

let db = require('./../connection');

function updateLabel(info,callback) {
    let sql = "update label set label_count=label_count+1 where label_name='"+info.label_name+"'";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}



module.exports = updateLabel;
