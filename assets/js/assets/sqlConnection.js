mysql = require("mysql");
password = require("../../../../password");

connection = mysql.createConnection({
        host: "localhost",
    
        port: 3306,
    
        user: "root",
    
        password: password,
        database: "store_db"
    });

connection.connect(function(err) {
    if (err) throw err;
});



module.exports = connection;