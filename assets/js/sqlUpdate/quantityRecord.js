sqlConnection = require("../assets/sqlConnection")

customerWelcome = require("../customer/customerWelcome");

quantityRecord = function(item, quantity) {
    // Insert a new line into a transaction table to record the purchase.
    sqlConnection.query("INSERT INTO purchases SET ?", 
        {
            user_id : global.user.id,
            item_id : item.item_id,
            item_quantity : quantity,
            total_price : quantity * item.price,
            transaction_date : new Date().toJSON().slice(0, 19).replace('T', ' ')
        },
        function(err, res) {
            if(err) throw err;
            // Return to the customerWelcome. 
            customerWelcome();
        });
}

module.exports = quantityRecord;