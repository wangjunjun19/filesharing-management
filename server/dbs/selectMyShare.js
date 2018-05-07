

let db = require('./../connection');

function selectMyShare(info,callback) {
    console.log(info+"___________info__")

    let sql = "select *  from files where file_intro like '%"+info.file_intro+"%' and user_id="+info.user_id;
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            console.log("data"+"db"+results);
            callback(results)
        }
    })
}

module.exports = selectMyShare;
