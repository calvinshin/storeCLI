
var sqlConnection = require("../assets/sqlConnection")

var itemCheck = require("./ItemCheck")

// List the items that the customer can purchase. Routes to ask which item the customer wants to buy.

var itemList = function() {
    sqlConnection.query("SELECT * FROM items", function(err, res) {
        if (err) throw err;
        console.table(res, ["product_name", "department_name", "price", "stock_quantity"]);
        itemCheck(res);
    });
};

module.exports = itemList;