var inquirer = require("inquirer");
var sqlConnection = require("../assets/sqlConnection")

var customerWelcome = function() {
    inquirer.prompt([
        {
            name: "custOption",
            prompt: "What would you like to do today?",
            choices: ["Buy an item"],
            type: "list",
        }
    ]).then(function(response) {
        if(response.custOption === "Buy an item") {
            console.log("Great, let's buy things!");

            sqlConnection.query("SELECT * FROM accounts", function(err, res) {
                if (err) throw err;
                console.log(res);
            });

        }
    })
};

module.exports = customerWelcome;