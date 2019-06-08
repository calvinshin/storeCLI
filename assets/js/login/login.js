inquirer = require("inquirer");

passwordCheck = require("./passwordcheck")

function login() {
    global.spacer();
    console.log("Hello! Welcome to this store front!");
    inquirer.prompt([
        {
            name: "username",
            message: "Username:",
            validate: function(response) {
                if(response.length > 0) {
                    return true
                }
                return false
            }
        },
        {
            name: "password",
            message: "Password:",
            type: "password",
            validate: function(response) {
                if(response.length > 0) {
                    return true
                }
                return false
            }
        }
    ]).then(function(response) {
        passwordCheck(response);
    });
}


module.exports = login;