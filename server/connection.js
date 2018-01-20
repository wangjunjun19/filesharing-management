const mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '111111',
    database: 'talentManagement',
    port: 3306
});

db.connect(function (err) {
    if (err) {
        console.log("err" + err.stack);
        return;
    }
    console.log("connection id " + db.threadId);
});

module.exports = db;