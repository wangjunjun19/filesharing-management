/**
 * Created by 十九 on 2018/4/14.
 */
let db = require('./../connection');

function updateDfr(info,callback) {
    let sql = "update dfr set dfr_total=dfr_total+1 where user_id="+info.user_id+" and  file_type="+info.file_type;
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            console.log(results.length+"___________db results");
            callback(results)
        }
    })
}

module.exports = updateDfr;