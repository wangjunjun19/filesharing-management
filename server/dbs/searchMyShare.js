
let db = require('./../connection');

function searchMyShare(info,callback) {
    let sql = "select *  from files where file_name like '%"+info.file_name+"%' or file_label like '%"+info.file_name+"%' and user_id="+info.user_id;
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = searchMyShare;
