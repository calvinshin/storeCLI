var mysql = require("mysql");
password = require("../../../../password");

var passwordCheck = function(object) {
    var name = object.username;
    var password = object.password;

    // Check mysql for the row with the username

    var connection = mysql.createConnection({
        host: "localhost",
    
        port: 3306,
    
        user: "root",
    
        password: password,
        database: "store_db"
    })

    // Check the password for the password

    connection.connect(function(err) {
        if(err) throw err;
        console.log("connecting!");
        
        connection.end();
    })

    // return the id of the username back;
};

module.exports = passwordCheck;