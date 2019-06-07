var inquirer = require("inquirer");
var buyItem = require("./buyItem")

var customerWelcome = function() {
    inquirer.prompt([
        {
            name: "custOption",
            message: "What would you like to do today?",
            choices: ["Buy an item"],
            type: "list",
        }
    ]).then(function(response) {
        if(response.custOption === "Buy an item") {
            buyItem();
        }
    })
};

module.exports = customerWelcome;