var inquirer = require("inquirer");

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
            message: "Password",
            type: "password",
        }
    ]);
}


module.exports = login;