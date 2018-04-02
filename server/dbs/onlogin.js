/**
 * Created by 十九 on 2018/1/30.
 */
let db = require('./../connection');

function onLogin(info,callback) {
    let sql = "select * from customers where user_name = '"+info.user_name+"' and user_pass= '"
        +info.user_pass+"'";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = onLogin;
