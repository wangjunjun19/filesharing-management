/**
 * Created by 十九 on 2018/3/7.
 */

let db = require('./../connection');

function search(info,callback) {
    console.log(info+"___________info__")

    let sql = "select *  from files where file_name like '%"+info.file_name+"%'";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            console.log("data"+"db"+results);
            callback(results)
        }
    })
}

module.exports = search;
