/**
 * Created by 十九 on 2018/1/29.
 */
let db = require('./../connection');

function register(info,callback) {
    let sql = "insert into customers(user_name,user_pass)"+"values('" + info.user_name + "','"
        + info.user_pass + "')";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback({status:true})
        }
    })
}



module.exports = register;
