/**
 * Created by 十九 on 2018/3/14.
 */

let db = require('./../connection');

function findUser(info,callback) {
    let sql = "select * from customers where id ="+info.user_id;
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = findUser;
