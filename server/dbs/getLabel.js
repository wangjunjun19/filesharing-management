/**
 * Created by 十九 on 2018/5/16.
 */
let db = require('./../connection');

function getLabel(callback) {
    let sql = "SELECT * from label   order by label_count desc limit 6";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = getLabel;
