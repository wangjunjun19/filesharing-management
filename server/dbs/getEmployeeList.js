/**
 * Created by 十九 on 2018/5/14.
 */

let db = require('./../connection');

function getEmployeeList(callback) {
    let sql = "select * from customers";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = getEmployeeList;
