/**
 * Created by 十九 on 2018/3/14.
 */

let db = require('./../connection');

function updateUser(info,callback) {
    let sql = "update customers set user_pass='"+info.user_pass+"',user_sex='"+info.user_sex+"',user_tel='"+info.user_tel+"',user_age='"+info.user_age+"' where id="+info.user_id;
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            console.log("data"+"db__modify"+results);
            callback({status:true})
        }
    })
}



module.exports = updateUser;
