/**
 * Created by 十九 on 2018/5/10.
 */
let db = require('./../connection');

function deleteOldDfr(callback) {
    let sql = "DELETE FROM dfr WHERE DATEDIFF(NOW(),dfr_time)>7";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = deleteOldDfr;
