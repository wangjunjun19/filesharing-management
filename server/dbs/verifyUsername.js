/**
 * Created by 十九 on 2018/2/12.
 */
let db = require('./../connection');

function verifyUsername(info,callback) {
    let sql = "select user_name from customers where user_name = '"+info.user_name+"'";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = verifyUsername;
