mysql = require("mysql");
password = require("../../../../password");

sqlConnection = require("../assets/sqlConnection")
redirect = require("./redirect");

incorrect = function() {
    applogin = require("./login");

    console.log("Incorrect password or username. Please try again.");
    applogin();
}


passwordCheck = function(object) {
    var name = object.username;
    var pw = object.password;
    console.log("Checking the password...");
    // Check mysql for the row with the username

    // Check the password for the password
        sqlConnection.query("SELECT * FROM accounts WHERE username = ?", name, function(err, res) {
            if(err) throw err;
            global.spacer();
            if(res[0]) {
                if(res[0].password === pw) {
                    global.user = res[0];
                    global.user.password = undefined;

                    redirect();
                }
                else{
                    incorrect();
                }
            }
            else {
                incorrect();
            }
            
        })
    
    // return the id of the username back;
};


// passwordCheck = function(object) {
//     var name = object.username;
//     var pw = object.password;
//     console.log("Checking the password...");
//     // Check mysql for the row with the username

//     var connection = mysql.createConnection({
//         host: "localhost",
    
//         port: 3306,
    
//         user: "root",
    
//         password: password,
//         database: "store_db"
//     })

//     // Check the password for the password

//     connection.connect(function(err) {
//         if(err) throw err;
//         connection.query("SELECT * FROM accounts WHERE username = ?", name, function(err, res) {
//             if(err) throw err;
//             global.spacer();
//             if(res[0]) {
//                 if(res[0].password === pw) {
//                     // return res;
//                     connection.end();

//                     global.user = res[0];
//                     global.user.password = undefined;


//                     redirect = require("./redirect");
//                     redirect();
//                 }
//                 else{
//                     connection.end();
//                     incorrect();
//                 }
//             }
//             else {
//                 connection.end();
//                 incorrect();
//             }
            
//         })
        
//     })

//     // return the id of the username back;
// };

module.exports = passwordCheck;