/**
 * Created by 十九 on 2018/3/3.
 */
let db = require('./../connection');

function addFiles(info,callback) {
    let sql = "insert into files (file_name,file_type,user_id,file_intro,file_route)"
        +"values('"+ info.file_name + "',"+info.file_type+","+info.user_id+",'"+info.file_intro+"','"+info.file_route+ "')";
    console.log(sql+"_____sql")
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            console.log("data"+"db__addFile"+results);
            callback({status:true})
        }
    })
}



module.exports = addFiles;