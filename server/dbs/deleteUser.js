let db = require('./../connection');

function deleteUser(info,callback) {
    let sql = "delete  from customers where id="+info.user_id;
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            console.log("data"+"db"+results);
            callback(results)
        }
    })
}

module.exports = deleteUser;
