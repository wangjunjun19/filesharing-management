

let db = require('./../connection');

function selectByType(info,callback) {
    console.log(info+"___________info__")

    let sql = "select *  from files where file_intro like '%"+info.file_intro+"%' and file_type="+info.file_type;
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            console.log("data"+"db"+results);
            callback(results)
        }
    })
}

module.exports = selectByType;
