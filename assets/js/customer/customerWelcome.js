inquirer = require("inquirer");
itemList = require("./itemList")
sqlConnection = require("../assets/sqlConnection");

// Welcome the customer and give them menu options

customerWelcome = function() {
    inquirer.prompt([
        {
            name: "custOption",
            message: "What would you like to do today?",
            choices: ["Buy an item", "Exit"],
            type: "list",
        }
    ]).then(function(response) {
        if(response.custOption === "Buy an item") {
            console.log("Great, let's buy things!");
            // if(typeof itemList == undefined) {
            //     var itemList = require("./itemList")
            // }
            itemList();
        }
        else if(response.custOption === "Exit") {
            console.log("Thank you and goodbye!");
            sqlConnection.end();
        }
    })
};

module.exports = customerWelcome;