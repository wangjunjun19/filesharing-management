/**
 * Created by 十九 on 2018/2/13.
 */
let db = require('./../connection');

function modifyPass(info,callback) {
    console.log(info.user_name+"__"+info.user_pass);
    let sql = "update customers set user_pass='"+info.user_pass+"' where user_name ='"+info.user_name+"'";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            console.log("data"+"db__modify"+results);
            callback({status:true})
        }
    })
}



module.exports = modifyPass;
