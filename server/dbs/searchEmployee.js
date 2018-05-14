
let db = require('./../connection');

function searchEmployee(info,callback) {

    let sql = "select *  from customers where user_name like '%"+info.user+"%'";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = searchEmployee;
