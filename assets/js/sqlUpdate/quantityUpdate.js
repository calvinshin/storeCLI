sqlConnection = require("../assets/sqlConnection");
quantityRecord = require("./quantityRecord");

quantityUpdate = function(item, quantity) {
    sqlConnection.query("UPDATE items SET ? WHERE ?", [
        {
            stock_quantity: item.stock_quantity - quantity
        },
        {
            item_id : item.item_id
        }
    ],
    function(err, res) {
        if(err) throw err;
        console.log(item.product_name + " purchased for $" + item.price * quantity + ".");
        quantityRecord(item, quantity);
    }
    );
};

module.exports = quantityUpdate;