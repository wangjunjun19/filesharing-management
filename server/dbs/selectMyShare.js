

let db = require('./../connection');

function selectMyShare(info,callback) {

    let sql = "select *  from files where file_grade like '%"+info.file_intro+"%' and user_id="+info.user_id+" order by file_count desc";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = selectMyShare;
