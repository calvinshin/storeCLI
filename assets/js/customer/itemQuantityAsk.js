inquirer = require("inquirer")

sqlConnection = require("../assets/sqlConnection");
customerWelcome = require("./customerWelcome");
itemOverview = require("../assets/itemOverview");
itemPurchase = require("./itemPurchase");

itemQuantityCheck = function(item) {
    if(response) {
        var response = {};
    }
    inquirer.prompt([
        {
            name: "confirm",
            message: "Would you like to buy this item?",
            type: "confirm"
        },
        {
            // conditional for when
            when: function(response) {
                return response.confirm
            },
            name: "quantity",
            message: "How many would you like to buy?",
            type: "number",
            validate: function(quantity) {
                // Logic for the validation of the number
                if(isNaN(quantity) || quantity <= 0) {
                    return false
                }
                else {
                    return true
                }
            }
        }
    ]).then(function(response) {
        if(response.confirm === false) {
            console.log("Transaction cancelled.");
            customerWelcome();
        }
        else {
            inquirer.prompt([
                {
                    name: "doubleConfirm",
                    message: "This will cost $" + response.quantity * item.price + ". Please confirm your purchase.",
                    type: "confirm"
                }
            ]).then(function(double) {
                if(double.doubleConfirm === false) {
                    console.log("Transaction cancelled.");
                    customerWelcome();
                }
                else {
                    sqlConnection.query("SELECT * FROM items WHERE item_id = ?", item.item_id, function(err, res) {

                        if(err) throw err;
                        if(res[0].stock_quantity >= response.quantity) {
                            itemPurchase(res[0], response.quantity);
                        }
                        else {
                            console.log("Trying to buy too many...");
                            itemOverview(res[0]);
                            itemQuantityCheck(res[0]);
                        }
                    })
                }
            })
        }

    })
}


module.exports = itemQuantityCheck;