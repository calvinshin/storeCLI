inquirer = require("inquirer");
sqlConnection = require("../assets/sqlConnection")

itemOverview = require("../assets/itemOverview");
itemQuantityAsk = require("./itemQuantityAsk")

// Note that through this function, query is still active.

itemCheck = function(res) {
    inquirer.prompt([
        {
            name: "input",
            message: "Which product would you like to buy? Enter the number or product name.",
        }
    ]).then(function(response) {
            var number = Number(response.input);

            // Check if the value is not a number
            if(isNaN(number)) {
                // searching...
                var selection = res.find(obj => obj.product_name === response.input)
            }
            // Check if it is a number and return the value in the array
            else if(number > -1 && number < res.length) {
                var selection = res[number]
            }
            
            // Checks if the selection is undefined and asks them to try searching again
            if(selection === undefined || typeof selection == undefined) {
                console.log("Item not found. Try searching again!");
                itemCheck(res);
            }
            else {
                // Provide details about the product.
                itemOverview(selection);
                itemQuantityAsk(selection);
            }

            // Find the right object based on the product 
            // if(typeof response)
            // Provide a view of the product with the details
            // Prompt if they want to buy anything
    })
}

module.exports = itemCheck;