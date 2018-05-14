/**
 * Created by 十九 on 2018/2/13.
 */
let db = require('./../connection');

function modifyPass(info,callback) {
    let sql = "update customers set user_pass='"+info.user_pass+"' where user_name ='"+info.user_name+"'";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback({status:true})
        }
    })
}



module.exports = modifyPass;
