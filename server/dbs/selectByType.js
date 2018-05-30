

let db = require('./../connection');

function selectByType(info,callback) {
    let sql = "select *  from files where file_grade like '%"+info.file_intro+"%' and file_type="+info.file_type+" order by file_count desc";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = selectByType;
