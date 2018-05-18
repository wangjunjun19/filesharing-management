/**
 * Created by 十九 on 2018/3/6.
 */
let db = require('./../connection');

function getAllFileList(callback) {
    let sql = "SELECT file_id,file_name,file_type,user_id,file_grade,file_route,file_count,file_label,user_school FROM files JOIN customers WHERE id=user_id  order by file_count desc";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = getAllFileList;
