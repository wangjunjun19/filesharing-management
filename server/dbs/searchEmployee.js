/**
 * Created by 十九 on 2018/5/14.
 */
/**
 * Created by 十九 on 2018/3/7.
 */

let db = require('./../connection');

function searchEmployee(info,callback) {

    let sql = "select *  from customers where user_name like '%"+info.user+"%'";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            console.log("data"+"db"+results);
            callback(results)
        }
    })
}

module.exports = searchEmployee;
