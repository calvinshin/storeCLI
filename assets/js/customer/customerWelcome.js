var inquirer = require("inquirer");
var itemList = require("./itemList")

// Welcome the customer and give them menu options

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
            console.log("Great, let's buy things!");
            itemList();
        }
    })
};

module.exports = customerWelcome;