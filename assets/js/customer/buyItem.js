var inquirer = require("inquirer");
var sqlConnection = require("../assets/sqlConnection")

var buyItem = function() {
    console.log("Great, let's buy things!");

    sqlConnection.query("SELECT * FROM items", function(err, res) {
        if (err) throw err;
        console.table(res, ["product_name", "department_name", "price", "stock_number"]);
        inquirer.prompt([
            {
                name: "number",
                message: "Which product would you like to buy? Enter the number or product name.",
            }
        ]).then(function(response) {
                console.log(response);

                // Find the right object based on the product 

                // Provide a view of the product with the details
                // Prompt if they want to buy anything
        })
    });
};

module.exports = buyItem;