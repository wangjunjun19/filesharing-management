/**
 * Created by 十九 on 2018/3/6.
 */
let db = require('./../connection');

function getLawList(callback) {
    let sql = "select * from files where file_type=1";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            console.log("data"+"db"+results);
            callback(results)
        }
    })
}

module.exports = getLawList;
