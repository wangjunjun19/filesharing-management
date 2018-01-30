/**
 * Created by 十九 on 2018/1/29.
 */
const mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fsm',
    port: 3306
});

db.connect(function (err) {
    if (err) {
        console.log("err" + err.stack);
        return;
    }
    console.log("connection id " + db.threadId);
    console.log("_______________________________");
});

module.exports = db;