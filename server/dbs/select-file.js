
let db = require('./../connection');

function selectfile(info,callback) {
    let sql = "select *  from files where file_type like '%"+info.file_type+"%' order by file_count desc";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = selectfile;
