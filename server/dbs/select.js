
let db = require('./../connection');

function select(info,callback) {
    let sql = "select *  from files where file_intro like '%"+info.file_intro+"%' order by file_count desc";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = select;
