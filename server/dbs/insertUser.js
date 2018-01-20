let db = require('./../connection');

function insertUser(userInformation,callback) {
    let sql = "insert into user(username,password)"+"values('" + userInformation.username + "','"
        + userInformation.password + "')";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback({status:true})
        }
    })
}

module.exports = insertUser;
